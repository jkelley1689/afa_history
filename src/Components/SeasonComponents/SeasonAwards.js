import React from 'react'

import './SeasonAwards.css'
import standings from '../../Images/2022_Standings.png'

const SeasonAwards = ({selectedYearResults}) => {
    console.log(selectedYearResults)
  return (
    <div className='awards'>
        <div className='awards-container'>
            <h2>{selectedYearResults.season} AFA Standings and Awards</h2>
            <div className='awards-list'>
                <div className='award-item'>
                    <span className='award-label'>American Bowl Champion: </span>
                    <span className='award-value'>{selectedYearResults.champion}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Offensive Player of the Year: </span>
                    <span className='award-value'>{selectedYearResults.OPOY}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Defensive Player of the Year: </span>
                    <span className='award-value'>{selectedYearResults.DPOY}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Rookie of the Year: </span>
                    <span className='award-value'>{selectedYearResults.ROTY}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>GM of the Year: </span>
                    <span className='award-value'>{selectedYearResults.GMOY}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Come Back Player of the Year: </span>
                    <span className='award-value'>{selectedYearResults.CBPOY}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Shelby Grove Award: </span>
                    <span className='award-value'>{selectedYearResults.SGA}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>American Bowl MVP: </span>
                    <span className='award-value'>{selectedYearResults.ABMVP}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Passing Leader: </span>
                    <span className='award-value'>{selectedYearResults.PassingLeader}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Rushing Leader: </span>
                    <span className='award-value'>{selectedYearResults.RushingLeader}</span>
                </div>
                <div className='award-item'>
                    <span className='award-label'>Receiving Leader: </span>
                    <span className='award-value'>{selectedYearResults.RecLeader}</span>
                </div>
            </div>
            <img src={standings} alt='none'></img>
        </div>
    </div>
  )
}

export default SeasonAwards