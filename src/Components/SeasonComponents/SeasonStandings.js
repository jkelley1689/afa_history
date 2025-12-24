import React from 'react'

import standings_21 from '../../Images/Standings/2021_Standings.png'
import standings_22 from '../../Images/Standings/2022_Standings.png'
import standings_23 from '../../Images/Standings/2023_Standings.png'
import standings_24 from '../../Images/Standings/2024_Standings.png'

const standingsByYear = {
    2021: standings_21,
    2022: standings_22,
    2023: standings_23,
    2024: standings_24
}

const SeasonStandings = ({year}) => {
    const standings = standingsByYear[year]

  return (
    <div>
        {standings ? (
            <img src={standings} alt={`Standings for ${year}`} />
        ) : (
            <p>No Standings available for this year</p>
        )}
    </div>
  )
}

export default SeasonStandings