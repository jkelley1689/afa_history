import React from 'react'
import Table from '../../Components/SVComponents/Table'
import Navbar from '../../Components/Nav/Navbar'

import './Teams.css'

const teams = [
    {value: 'WSH', label: 'Washington Americans'},
    {value: 'ALB', label: 'Albuquerque Arrows'},
    {value: 'TUL', label: 'Tulsa Bandits'},
    {value: 'PRT', label: 'Portland Barons'},
    {value: 'BIR', label: 'Birmingham Boars'},
    {value: 'BRC', label: 'Barcelona Bulls'},
    {value: 'SLC', label: 'Salt Lake City Comets'},
    {value: 'SD', label: 'San Diego Corsairs'},
    {value: 'CHI', label: 'Chicago Demons'},
    {value: 'CLM', label: 'Columbus Explorers'},
    {value: 'SJ', label: 'San Jose Frenzy'},
    {value: 'ORL', label: 'Orlando Gales'},
    {value: 'DET', label: 'Detriot Griffins'},
    {value: 'HRT', label: 'Hartford Hellions'},
    {value: 'NY', label: 'New York Intimidators'},
    {value: 'FRK', label: 'Frankfurt Macht'},
    {value: 'SRC', label: 'Sacramento Owls'},
    {value: 'LON', label: 'London Reapers'},
    {value: 'SA', label: 'San Antonio Scorpions'},
    {value: 'STL', label: 'St.Louis Sentinels'},
    {value: 'HAW', label: 'Hawaii Sharks'},
    {value: 'LOU', label: 'Louisville Stallions'},
    {value: 'DUB', label: 'Dublin Wolfhounds'},
    {value: 'MEM', label: 'Memphis Wolves'}
]

const columns = [
    {Header: 'Team', accessor: 'label'}
]

teams.sort(function (a,b){
    if(a.label < b.label){
        return -1
    }
    if (a.label > b.label){
        return 1
    }
    return 0
})

const Teams = () => {
  return (
    <div className='teams'>
        <Navbar />
        <Table columns={columns} data={teams} path={"Teams"}/>
    </div>
    )
    
}

export default Teams