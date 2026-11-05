import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import TeamCardByYear from './TeamCardByYear';

const mockGraphql = jest.fn();

jest.mock('aws-amplify/api', () => ({
  generateClient: () => ({ graphql: (...args) => mockGraphql(...args) }),
}));

test('loads Glasgow players using Glg in 2025 and Detroit players using Det in 2024', async () => {
  mockGraphql.mockImplementation(({ variables }) => {
    const year = variables.filter.and.find(condition => condition.year)?.year.eq;
    const team = variables.filter.and.find(condition => condition.team)?.team.eq;
    const matchingRoster = (year === '2025' && team === 'Glg') || (year === '2024' && team === 'Det');
    return Promise.resolve({
      data: {
        listPlayers: {
          items: matchingRoster ? [{
            id: `quarterback-${year}`,
            fName: 'Roster',
            lName: year,
            year,
            team,
            position: 'QB',
            roleWeapon: [],
            PassingStat: { cmp: 200, att: 300, yds: 2500, td: 20, int: 5 },
            RushingStat: { att: 0 },
          }] : [],
          nextToken: null,
        },
      },
    });
  });

  render(
    <MemoryRouter initialEntries={['/Teams/Glasgow Highlanders/2025']} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <Routes>
        <Route path="/Teams/:team/:year" element={<TeamCardByYear />} />
      </Routes>
    </MemoryRouter>
  );

  expect(await screen.findByRole('link', { name: 'Roster 2025' })).toBeInTheDocument();
  expect(mockGraphql).toHaveBeenLastCalledWith(expect.objectContaining({
    variables: expect.objectContaining({ filter: { and: [{ year: { eq: '2025' } }, { team: { eq: 'Glg' } }] } }),
  }));

  fireEvent.click(screen.getByText('Year'));
  fireEvent.click(screen.getByRole('link', { name: '2024' }));

  expect(await screen.findByRole('link', { name: 'Roster 2024' })).toBeInTheDocument();
  expect(screen.getByRole('heading', { name: 'Detroit Griffins - 2024' })).toBeInTheDocument();
  expect(mockGraphql).toHaveBeenLastCalledWith(expect.objectContaining({
    variables: expect.objectContaining({ filter: { and: [{ year: { eq: '2024' } }, { team: { eq: 'Det' } }] } }),
  }));
});
