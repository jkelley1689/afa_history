import gmHistory from './gmHistory.json';
import standings2025 from '../../Components/SeasonComponents/Standings/2025_Standings';
import { getTeamForYear, isHighlandersFranchise } from '../../data/teams';

const formatRecord = (wins, losses, ties) => `${wins}-${losses}${ties ? `-${ties}` : ''}`;

export const getTeamHistory = team => {
  const identity = getTeamForYear(team);
  const label = identity?.label ?? team;
  const relocated = isHighlandersFranchise(team);
  const originalHistory = gmHistory[relocated ? 'Detriot Griffins' : label] || [];
  const history = relocated
    ? originalHistory.map(gm => ({ ...gm, endYear: gm.endYear ?? 2024 }))
    : originalHistory;

  if (!relocated && identity?.startYear !== 2025) return history;

  const season = standings2025.flatMap(conference =>
    conference.divisions.flatMap(division => division.teams)
  ).find(entry => entry.team === label);
  if (!season) return history;

  const currentGm = {
    name: season.gm,
    record: formatRecord(season.w, season.l, season.t),
    wins: season.w,
    losses: season.l,
    ties: season.t,
    startYear: 2025,
    endYear: null,
    years: [{ year: 2025, record: formatRecord(season.w, season.l, season.t) }],
    titles: [],
    awards: [],
  };

  return [...history, currentGm];
};
