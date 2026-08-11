import { buildPlayerNameFilter, searchPlayersByName } from './playerSearch';

describe('player search', () => {
  test('builds a filter from either name field', () => {
    expect(buildPlayerNameFilter(' john ', '')).toEqual({ fName: { eq: 'JOHN' } });
    expect(buildPlayerNameFilter('', ' smith ')).toEqual({ lName: { eq: 'SMITH' } });
  });

  test('returns unique matching players across every result page', async () => {
    const client = {
      graphql: jest
        .fn()
        .mockResolvedValueOnce({
          data: {
            listPlayers: {
              items: [
                { id: '1', fName: 'JOHN', lName: 'SMITH', year: 2022, team: 'BOS', position: 'QB' },
                { id: '2', fName: 'JOHN', lName: 'SMITH', year: 2023, team: 'NY', position: 'QB' },
              ],
              nextToken: 'next-page',
            },
          },
        })
        .mockResolvedValueOnce({
          data: {
            listPlayers: {
              items: [
                { id: '3', fName: 'JOHN', lName: 'ADAMS', year: 2021, team: 'LA', position: 'WR' },
                { id: '4', fName: 'JOHN', lName: 'HIDDEN', year: 2024, team: '0', position: 'TB' },
              ],
              nextToken: null,
            },
          },
        }),
    };

    const results = await searchPlayersByName(client, 'john', '');

    expect(results.map(player => `${player.fName} ${player.lName}`)).toEqual([
      'JOHN ADAMS',
      'JOHN SMITH',
    ]);
    expect(results[1].year).toBe(2023);
    expect(client.graphql).toHaveBeenCalledTimes(2);
    expect(client.graphql.mock.calls[0][0].variables.filter).toEqual({ fName: { eq: 'JOHN' } });
  });
});