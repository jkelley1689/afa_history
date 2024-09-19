import React from 'react'
import { useParams } from 'react-router-dom'

import seasonResults from './SeasonResultsStats'
import SeasonAwards from '../../Components/SeasonComponents/SeasonAwards'

import './SeasonCard.css'
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar'

const SeasonCard = () => {

    const {year} = useParams()
    const selectedYear = seasonResults.filter(item => item.season === Number(year))

    if(selectedYear.length === 0){
      return <div style={{padding: 300}}>Stats not yet stored for this year</div>
    }
  return (
    <div className='container'>
      <div className='season-nav'>
        <SeasonNavBar year={year}/>
      </div>
      <div className='season-awards'>
        <SeasonAwards selectedYearResults={selectedYear[0]} />
      </div>
    </div>
  )
}

export default SeasonCard