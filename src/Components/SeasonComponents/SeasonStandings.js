import React from 'react';
import standings_21 from '../SeasonComponents/Standings/2021_Standings';
import standings_22 from '../SeasonComponents/Standings/2022_Standings';
import standings_23 from '../SeasonComponents/Standings/2023_Standings';
import standings_24 from '../SeasonComponents/Standings/2024_Standings';
import StandingsTable from './StandingsTable/StandingsTable';

const standingsByYear = {
  2021: { type: 'json', data: standings_21 },
  2022: { type: 'json', data: standings_22 },
  2023: { type: 'json', data: standings_23 },
  2024: { type: 'json', data: standings_24 },
};

const SeasonStandings = ({ year }) => {
  const standings = standingsByYear[year];

  if (!standings) return <p>No standings available for this year</p>;

  if (standings.type === 'image') {
    return <img src={standings.data} alt={`Standings for ${year}`} />;
  }

  return <StandingsTable data={standings.data} />;
};

export default SeasonStandings;