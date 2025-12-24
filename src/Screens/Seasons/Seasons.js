import React from 'react'
import Table from '../../Components/SVComponents/Table'

import './Seasons.css'

const seasons = [
    {value: '2018', label: '2018', result: "NA"},
    {value: '2019', label: '2019', result: "NA"},
    {value: '2021', label: '2021', result: "STL Sentinels defeat NY Intimidators 37-27"},
    {value: '2022', label: '2022', result: "STL Sentinels defeat Hartford Hellions 31-17"},
    {value: '2023', label: '2023', result: "SLC Comets defeat the Louisville Stallions 55-27"},
    {value: '2024', label: '2024', result: "London Reapers defeat the Detroit Griffins 24-20"}
]

const columns = [
    {Header: 'Year', accessor: 'label', disableFilters: true},
    {Header: "AFA Bowl Result", accessor: 'result', disableFilters: true}
]

const Seasons = () => {
  return (
    <div className='seasons'>
      <Table columns={columns} data={seasons} path={"Seasons"}/>
    </div>
  )
}

export default Seasons