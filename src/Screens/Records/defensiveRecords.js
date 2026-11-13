import { normalizePlayerName } from '../Career/playerSearch';

const firstDefensiveSeason = '2021';
export const defensiveCoverage = `${firstDefensiveSeason}–present`;

const defensiveRecordsQuery = /* GraphQL */ `
  query DefensiveRecords($filter: ModelPlayerFilterInput, $nextToken: String) {
    listPlayers(filter: $filter, limit: 1500, nextToken: $nextToken) {
      items {
        fName
        lName
        year
        team
        DefensiveStat { tackles tfl sacks ff int pass_deflection td catch_allowed }
      }
      nextToken
    }
  }
`;

const categories = [
  { id: 'tackles', label: 'Tackles' },
  { id: 'tfl', label: 'Tackles for Loss' },
  { id: 'sacks', label: 'Sacks' },
  { id: 'ff', label: 'Forced Fumbles' },
  { id: 'int', label: 'Interceptions' },
  { id: 'pass_deflection', label: 'Pass Deflections' },
  { id: 'td', label: 'Defensive Touchdowns' },
  { id: 'catch_allowed', label: 'Catches Allowed' },
];

export async function loadDefensiveSeasons(client, currentYear = String(new Date().getFullYear())) {
  const filter = {
    year: { between: [firstDefensiveSeason, currentYear] },
    playerDefensiveStatId: { attributeExists: true },
    team: { ne: '0' },
  };
  const seasons = [];
  let nextToken = null;

  do {
    const response = await client.graphql({
      query: defensiveRecordsQuery,
      variables: { filter, nextToken },
    });
    const page = response.data.listPlayers;
    seasons.push(...page.items);
    nextToken = page.nextToken;
  } while (nextToken);

  return seasons;
}

export function buildDefensiveRecords(seasons) {
  const seasonRows = [];
  const careerByPlayer = new Map();
  const seen = new Set();
  const incompleteDeflectionYears = new Set();

  for (const season of seasons) {
    const stats = season?.DefensiveStat;
    const fName = season?.fName?.trim();
    const lName = season?.lName?.trim();
    const team = season?.team?.trim();
    if (!stats || !fName || !lName || !team || team === '0') continue;

    const { year } = season;
    const name = `${fName} ${lName}`;
    const playerKey = JSON.stringify([normalizePlayerName(fName), normalizePlayerName(lName)]);
    // A player can have the same season totals uploaded under multiple positions.
    const key = JSON.stringify([playerKey, year, team, categories.map(({ id }) => stats[id])]);
    if (seen.has(key)) continue;
    seen.add(key);
    seasonRows.push({ key, name, team, year, stats });

    if (!Number.isFinite(stats.pass_deflection)) incompleteDeflectionYears.add(year);

    if (!careerByPlayer.has(playerKey)) careerByPlayer.set(playerKey, { name, stats: {} });
    const career = careerByPlayer.get(playerKey);
    for (const { id } of categories) {
      if (Number.isFinite(stats[id])) career.stats[id] = (career.stats[id] ?? 0) + stats[id];
    }
  }

  const rank = (rows, id) => rows
    .filter(({ stats }) => stats[id] > 0)
    .sort((a, b) => b.stats[id] - a.stats[id] || a.name.localeCompare(b.name));

  const careers = [...careerByPlayer.values()];

  return {
    seasonRecords: categories.flatMap(({ id, label }) => {
      const leaders = rank(seasonRows, id);
      const record = leaders[0]?.stats[id];
      return leaders
        .filter(({ stats }) => stats[id] === record)
        .map(({ key, name, team, year, stats }) => ({
          id: `${id}-${key}`, label: `Most ${label}`, name, team, year, stat: stats[id],
        }));
    }),
    careerLeaders: categories.map(({ id, label }) => ({
      id,
      label,
      leaders: rank(careers, id).slice(0, 10)
        .map(({ name, stats }) => ({ name, stat: stats[id] })),
    })).filter(({ leaders }) => leaders.length > 0),
    incompleteDeflectionYears: [...incompleteDeflectionYears].sort(),
  };
}
