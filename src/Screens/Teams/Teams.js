import React from 'react'
import { Link } from 'react-router-dom'
import './Teams.css'
import { teams } from '../../data/teams'

export { teams } from '../../data/teams'

const Teams = () => {
  return (
    <div className='teams'>
      <div className='teams-grid'>
        {teams.map(team => (
          <Link
            key={team.value}
            className='team-card'
            to={`/Teams/${team.label}`}
          >
            <span className='team-card-abbv'>{team.value}</span>
            <span className='team-card-name'>{team.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Teams
