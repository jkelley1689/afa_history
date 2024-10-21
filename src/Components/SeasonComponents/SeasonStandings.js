import React from 'react'

import standings_21 from '../../Images/Standings/2021_Standings.png'
import standings_22 from '../../Images/Standings/2022_Standings.png'
import standings_23 from '../../Images/Standings/2023_Standings.png'

const SeasonStandings = ({year}) => {
    let standings

    if (year === '2023') {
        standings = standings_23;
    } else if (year === '2022') {
        standings = standings_22;
    } else if (year === '2021') {
        standings = standings_21;
    }

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