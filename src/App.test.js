import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AllTimeLeaders from './Screens/AllTimeLeaders/AllTimeLeaders';

test('renders all-time leader content inside the records experience', () => {
  render(
    <MemoryRouter>
      <AllTimeLeaders statType="Passing" />
    </MemoryRouter>
  );

  expect(screen.getByText('YARDS')).toBeInTheDocument();
  expect(screen.getAllByText('Kellen Moore').length).toBeGreaterThan(0);
});
