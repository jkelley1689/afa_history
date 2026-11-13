import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import Records from './Records';
import { buildDefensiveRecords, loadDefensiveSeasons } from './defensiveRecords';

const mockGraphql = jest.fn();

jest.mock('aws-amplify/api', () => ({
  generateClient: () => ({ graphql: (...args) => mockGraphql(...args) }),
}));

test('reads all pages of linked defensive stats from 2021 through the current season', async () => {
  const player = { fName: 'Test', lName: 'Defender' };
  const graphql = jest.fn()
    .mockResolvedValueOnce({ data: { listPlayers: { items: [], nextToken: 'second-page' } } })
    .mockResolvedValueOnce({ data: { listPlayers: { items: [player], nextToken: null } } });

  await expect(loadDefensiveSeasons({ graphql }, '2026')).resolves.toEqual([player]);
  expect(graphql.mock.calls.map(([{ variables }]) => variables.nextToken)).toEqual([null, 'second-page']);
  expect(graphql.mock.calls[0][0].variables.filter).toEqual({
    year: { between: ['2021', '2026'] },
    playerDefensiveStatId: { attributeExists: true },
    team: { ne: '0' },
  });
});

test('counts duplicate positions once, keeps season ties, and flags missing deflections', () => {
  const firstSeason = {
    fName: 'FIRST', lName: 'PLAYER', year: '2021', team: 'Haw', position: 'CB',
    DefensiveStat: { tackles: 40, int: 4, pass_deflection: 8 },
  };
  const { seasonRecords, careerLeaders, incompleteDeflectionYears } = buildDefensiveRecords([
    firstSeason,
    { ...firstSeason, position: 'SS' },
    {
      ...firstSeason, fName: 'First', year: '2025', team: 'Mem',
      DefensiveStat: { tackles: 60, int: 0, pass_deflection: null, sacks: 3 },
    },
    {
      ...firstSeason, fName: 'SECOND',
      DefensiveStat: { tackles: 60, int: 1, pass_deflection: 5 },
    },
    { ...firstSeason, team: '0', DefensiveStat: { tackles: 999 } },
    { ...firstSeason, DefensiveStat: null },
  ]);

  expect(seasonRecords.filter(({ label }) => label === 'Most Tackles')).toEqual([
    expect.objectContaining({ name: 'First PLAYER', year: '2025', team: 'Mem', stat: 60 }),
    expect.objectContaining({ name: 'SECOND PLAYER', year: '2021', team: 'Haw', stat: 60 }),
  ]);
  expect(careerLeaders.find(({ id }) => id === 'tackles').leaders[0])
    .toEqual({ name: 'FIRST PLAYER', stat: 100 });
  expect(careerLeaders.find(({ id }) => id === 'pass_deflection').leaders[0].stat).toBe(8);
  expect(incompleteDeflectionYears).toEqual(['2025']);
});

test.each([
  ['/Records/Season', 'Most Tackles', '55'],
  ['/Records/All-Time/Defensive', 'Tackles', '100'],
])('shows the defensive records and date range at %s', async (path, label, total) => {
  mockGraphql.mockResolvedValue({
    data: {
      listPlayers: {
        items: [
          { fName: 'TEST', lName: 'DEFENDER', year: '2021', team: 'Haw', DefensiveStat: { tackles: 45, pass_deflection: 3 } },
          { fName: 'TEST', lName: 'DEFENDER', year: '2025', team: 'Mem', DefensiveStat: { tackles: 55, pass_deflection: null } },
        ],
        nextToken: null,
      },
    },
  });

  render(
    <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/Records/:recordType/:statType?" element={<Records />} />
      </Routes>
    </MemoryRouter>
  );

  const defense = within(screen.getByRole('region', { name: 'Defensive Players' }));
  expect(defense.getByText('Available stats · 2021–present')).toBeInTheDocument();
  expect(await defense.findByText(label)).toBeInTheDocument();
  expect(defense.getByText(total)).toBeInTheDocument();
  expect(defense.getByText('Pass deflection data is incomplete for 2025.')).toBeInTheDocument();
});
