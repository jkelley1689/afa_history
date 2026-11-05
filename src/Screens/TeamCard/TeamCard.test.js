import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import usePlayers from '../../Components/apiFunctions/usePlayers';
import Teams from '../Teams/Teams';
import TeamCard from './TeamCard';
import TeamCardByYear from './TeamCardByYear';

jest.mock('../../Components/apiFunctions/usePlayers', () => ({
  __esModule: true,
  default: jest.fn(),
}));

beforeEach(() => {
  usePlayers.mockReturnValue({ players: [], loading: false, error: null });
});

const renderTeam = path => render(
  <MemoryRouter initialEntries={[path]} future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
    <Routes>
      <Route path="/Teams" element={<Teams />} />
      <Route path="/Teams/:team" element={<TeamCard />} />
      <Route path="/Teams/:team/:year" element={<TeamCardByYear />} />
    </Routes>
  </MemoryRouter>
);

test('the current team directory includes 28 franchises and Glasgow replaces Detroit', () => {
  renderTeam('/Teams');
  expect(screen.getAllByRole('link')).toHaveLength(28);
  ['Toronto Tundra', 'Vancouver WhiskeyJacks', 'Dusseldorf Drache', 'Calgary Outlaws', 'Glasgow Highlanders']
    .forEach(team => expect(screen.getByText(team).closest('a')).toHaveAttribute('href', `/Teams/${team}`));
  expect(screen.queryByText(/Detroit|Detriot/)).not.toBeInTheDocument();
});

test('Glasgow clearly separates Detroit history and Tim Conway tenure, record, and titles by era', () => {
  renderTeam('/Teams/Glasgow Highlanders');
  expect(screen.getByRole('heading', { name: 'Glasgow Highlanders', level: 1 })).toBeInTheDocument();
  expect(screen.getByText('Jason Grove')).toBeInTheDocument();
  expect(screen.getByText('Nicky Lindenstruth')).toBeInTheDocument();
  expect(screen.getByText(/Formerly the Detroit Griffins/)).toBeInTheDocument();
  expect(screen.getAllByText('Tim Conway')).toHaveLength(2);
  const detroit = within(screen.getByRole('table', { name: 'Detroit Griffins general managers' }));
  const detroitTim = within(detroit.getByText('Tim Conway').closest('tr'));
  expect(detroitTim.getByText('2017-2024')).toBeInTheDocument();
  expect(detroitTim.getByText('50-66-1')).toBeInTheDocument();
  expect(detroitTim.getByText('2019 AFA Champion')).toBeInTheDocument();
  const glasgow = within(screen.getByRole('table', { name: 'Glasgow Highlanders general managers' }));
  const glasgowTim = within(glasgow.getByText('Tim Conway').closest('tr'));
  expect(glasgowTim.getByText('2025-Present')).toBeInTheDocument();
  expect(glasgowTim.getByText('6-10')).toBeInTheDocument();
  expect(glasgow.queryByText('2019 AFA Champion')).not.toBeInTheDocument();
  expect(screen.queryByText('2017-Present')).not.toBeInTheDocument();
  expect(screen.queryByText('56-76-1')).not.toBeInTheDocument();
});

test('changing Glasgow to 2024 loads Detroit, then 2025 returns to Glasgow', () => {
  renderTeam('/Teams/Glasgow Highlanders/2025');
  expect(usePlayers).toHaveBeenLastCalledWith({ year: '2025', team: 'Glg' });
  expect(screen.getByText('6-10')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Year'));
  fireEvent.click(screen.getByRole('link', { name: '2024' }));
  expect(screen.getByRole('heading', { name: 'Detroit Griffins - 2024' })).toBeInTheDocument();
  expect(usePlayers).toHaveBeenLastCalledWith({ year: '2024', team: 'Det' });
  expect(screen.getByText('9-7')).toBeInTheDocument();
  expect(screen.getByText('Tim Conway')).toBeInTheDocument();
  fireEvent.click(screen.getByText('Year'));
  fireEvent.click(screen.getByRole('link', { name: '2025' }));
  expect(screen.getByRole('heading', { name: 'Glasgow Highlanders - 2025' })).toBeInTheDocument();
  expect(usePlayers).toHaveBeenLastCalledWith({ year: '2025', team: 'Glg' });
});

test.each(['Detroit Griffins', 'Detriot Griffins'])(
  'historical %s links still resolve to Detroit before the move', team => {
    renderTeam(`/Teams/${team}/2023`);
    expect(screen.getByRole('heading', { name: 'Detroit Griffins - 2023' })).toBeInTheDocument();
    expect(usePlayers).toHaveBeenLastCalledWith({ year: '2023', team: 'Det' });
    expect(screen.getByText('7-9')).toBeInTheDocument();
  }
);

test.each([
  ['Toronto Tundra', 'Brycen Hill', '7-9', 'Tor'],
  ['Vancouver WhiskeyJacks', 'Ryan Barkdoll', '3-13', 'Van'],
  ['Dusseldorf Drache', 'Hector Alvarez', '3-13', 'Dus'],
  ['Calgary Outlaws', 'Matt Zebovitz', '2-14', 'Cal'],
])('%s has its GM, 2025 record, and no pre-expansion year links', (team, gm, record, code) => {
  renderTeam(`/Teams/${team}/2025`);
  expect(screen.getByText(gm)).toBeInTheDocument();
  expect(screen.getByText(record)).toBeInTheDocument();
  expect(usePlayers).toHaveBeenLastCalledWith({ year: '2025', team: code });
  fireEvent.click(screen.getByText('Year'));
  expect(screen.getByRole('link', { name: '2025' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: '2024' })).not.toBeInTheDocument();
});
