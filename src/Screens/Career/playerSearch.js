export const playerSearchQuery = /* GraphQL */ `
  query SearchPlayersByName($filter: ModelPlayerFilterInput, $nextToken: String) {
    listPlayers(filter: $filter, limit: 1500, nextToken: $nextToken) {
      items {
        id
        fName
        lName
        year
        team
        position
      }
      nextToken
    }
  }
`;

export const normalizePlayerName = (name) => name.trim().toUpperCase();

export const buildPlayerNameFilter = (fName, lName) => {
  const firstName = normalizePlayerName(fName);
  const lastName = normalizePlayerName(lName);

  if (firstName && lastName) {
    return { fName: { eq: firstName }, lName: { eq: lastName } };
  }
  if (firstName) return { fName: { eq: firstName } };
  if (lastName) return { lName: { eq: lastName } };
  return null;
};

const uniquePlayers = (seasons) => {
  const playersByName = new Map();

  seasons
    .filter(player => player && player.team !== '0' && player.fName && player.lName)
    .forEach(player => {
      const key = `${normalizePlayerName(player.fName)}|${normalizePlayerName(player.lName)}`;
      const current = playersByName.get(key);

      if (!current || Number(player.year) > Number(current.year)) {
        playersByName.set(key, player);
      }
    });

  return [...playersByName.values()].sort((a, b) =>
    a.lName.localeCompare(b.lName) || a.fName.localeCompare(b.fName)
  );
};

export const searchPlayersByName = async (client, fName, lName) => {
  const filter = buildPlayerNameFilter(fName, lName);
  if (!filter) return [];

  let nextToken = null;
  const seasons = [];

  do {
    const response = await client.graphql({
      query: playerSearchQuery,
      variables: { filter, nextToken },
    });
    const page = response.data.listPlayers;
    seasons.push(...page.items);
    nextToken = page.nextToken;
  } while (nextToken);

  return uniquePlayers(seasons);
};