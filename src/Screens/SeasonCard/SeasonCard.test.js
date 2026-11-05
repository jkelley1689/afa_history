import { render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import SeasonCard from './SeasonCard';

const renderSeason = year => render(
  <MemoryRouter initialEntries={[`/Seasons/${year}`]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/Seasons/:year" element={<SeasonCard />} />
    </Routes>
  </MemoryRouter>
);

test('2025 shows two 14-team conferences with colored side bars and no divisions', () => {
  renderSeason(2025);

  expect(screen.getByText('2025 AFA Standings and Awards')).toBeInTheDocument();
  const tables = screen.getAllByRole('table');
  expect(tables).toHaveLength(2);
  tables.forEach(table => {
    expect(within(table).getAllByRole('row')).toHaveLength(16);
    expect(within(table).getAllByRole('columnheader')).toHaveLength(10);
    expect(within(table).queryByRole('columnheader', { name: 'Div', exact: true })).not.toBeInTheDocument();
  });
  expect(screen.getByText('Stars Conference')).toBeInTheDocument();
  expect(screen.getByText('Stripes Conference')).toBeInTheDocument();
  ['Stars', 'Stripes'].forEach(conference => {
    const bar = screen.getByText(conference, { exact: true }).closest('td');
    expect(bar).toHaveClass('conference-cell', conference.toLowerCase());
    expect(bar).toHaveAttribute('rowspan', '16');
  });
  expect(screen.queryByText(/Division/)).not.toBeInTheDocument();
  expect(screen.queryByText(/Detroit/)).not.toBeInTheDocument();
  [
    ['Toronto Tundra', 'Brycen Hill'],
    ['Vancouver WhiskeyJacks', 'Ryan Barkdoll'],
    ['Dusseldorf Drache', 'Hector Alvarez'],
    ['Calgary Outlaws', 'Matt Zebovitz'],
    ['Glasgow Highlanders', 'Tim Conway'],
  ].forEach(([team, gm]) => {
    expect(within(screen.getByText(team).closest('tr')).getByText(gm)).toBeInTheDocument();
  });
});

test.each([2021, 2022, 2023, 2024])('%s retains all six divisions, division records, Detroit, and awards', year => {
  renderSeason(year);

  expect(screen.getAllByText(/Division$/)).toHaveLength(6);
  expect(screen.getAllByRole('columnheader', { name: 'Div', exact: true })).toHaveLength(6);
  expect(screen.getByText('Detroit Griffins')).toBeInTheDocument();
  expect(screen.queryByText('Glasgow Highlanders')).not.toBeInTheDocument();
  expect(screen.getByText('American Bowl Champion:')).toBeInTheDocument();
});
