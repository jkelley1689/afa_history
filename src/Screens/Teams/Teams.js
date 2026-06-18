import React from 'react'
import { Link } from 'react-router-dom'
import './Teams.css'

export const teams = [
    {value: 'Wsh', label: 'Washington Americans'},
    {value: 'Alb', label: 'Albuquerque Arrows'},
    {value: 'Tul', label: 'Tulsa Bandits'},
    {value: 'Prt', label: 'Portland Barons'},
    {value: 'Bir', label: 'Birmingham Boars'},
    {value: 'Brc', label: 'Barcelona Bulls'},
    {value: 'SLC', label: 'Salt Lake City Comets'},
    {value: 'SD',  label: 'San Diego Corsairs'},
    {value: 'Chi', label: 'Chicago Demons'},
    {value: 'Clm', label: 'Columbus Explorers'},
    {value: 'SJ',  label: 'San Jose Frenzy'},
    {value: 'Orl', label: 'Orlando Gales'},
    {value: 'Det', label: 'Detriot Griffins'},
    {value: 'Hrt', label: 'Hartford Hellions'},
    {value: 'NY',  label: 'New York Intimidators'},
    {value: 'Frk', label: 'Frankfurt Macht'},
    {value: 'Sac', label: 'Sacramento Owls'},
    {value: 'Lon', label: 'London Reapers'},
    {value: 'SA',  label: 'San Antonio Scorpions'},
    {value: 'StL', label: 'St.Louis Sentinels'},
    {value: 'Haw', label: 'Hawaii Sharks'},
    {value: 'Lou', label: 'Louisville Stallions'},
    {value: 'Dub', label: 'Dublin Wolfhounds'},
    {value: 'Mem', label: 'Memphis Wolves'},
]

teams.sort((a, b) => a.label.localeCompare(b.label))

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
