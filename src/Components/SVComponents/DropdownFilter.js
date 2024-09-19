import React, { useState } from 'react'
import Select from 'react-select'

const teams = [
    {value: 'AMERICANS', label: 'Americans'},
    {value: 'ARROWS', label: 'Arrows'},
    {value: 'BANDITS', label: 'Bandits'},
    {value: 'BARONS', label: 'Barons'},
    {value: 'BOARS', label: 'Boars'},
    {value: 'BULLS', label: 'Bulls'},
    {value: 'COMETS', label: 'Comets'},
    {value: 'DEMONS', label: 'Demons'},
    {value: 'EXPLORERS', label: 'Explorers'},
    {value: 'FRENZY', label: 'Frenzy'},
    {value: 'GALES', label: 'Gales'},
    {value: 'GRIFFINS', label: 'Griffins'},
    {value: 'HELLIONS', label: 'Hellions'},
    {value: 'INTIMIDATORS', label: 'Intimidators'},
    {value: 'MACHT', label: 'Macht'},
    {value: 'OWLS', label: 'Owls'},
    {value: 'REAPERS', label: 'Reapers'},
    {value: 'SCORPIONS', label: 'Scorpions'},
    {value: 'SENTINELS', label: 'Sentinels'},
    {value: 'SHARKS', label: 'Sharks'},
    {value: 'STALLIONS', label: 'Stallions'},
    {value: 'WOLFHOUNDS', label: 'Wolfhounds'},
    {value: 'WOLVES', label: 'Wolves'},
]

const positions = [
    {value: 'QB', label: 'QB'},
    {value: 'TB', label: 'RB'},
    {value: 'WR', label: 'WR'},
]

const years = [
    {value: '2018', label: '2018'},
    {value: '2019', label: '2019'},
    {value: '2021', label: '2021'},
    {value: '2022', label: '2022'},
]

export const DropdownFilter = ({onFilterChange}) => {

    const [selectedTeam, setSelectedTeam] = useState(null)
    const [selectedPosition, setSelectedPosition] = useState(null)
    const [selectedYear, setSelectedYear] = useState(null)

    const handleTeamChange = (selectedOption) => {
        setSelectedTeam(selectedOption)
        onFilterChange({team: selectedOption?.value, position: selectedPosition?.value, year: selectedYear?.value})
    }

    const handlePositionChange = (selectedOption) => {
        setSelectedPosition(selectedOption)
        onFilterChange({team: selectedOption?.value, position: selectedPosition?.value, year: selectedYear?.value})
    }

    const handleYearChange = (selectedOption) => {
        setSelectedYear(selectedOption)
        onFilterChange({team: selectedOption?.value, position: selectedPosition?.value, year: selectedYear?.value})
    }


  return (
    <div>
        <Select options={teams} onChange={handleTeamChange} placeholder="Select Team"/>
        <Select options={positions} onChange={handlePositionChange} placeholder="Select Position"/>
        <Select options={years} onChange={handleYearChange} placeholder="Select Year"/>
    </div>
  )
}
