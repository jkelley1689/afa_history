import React from 'react'
import Table from './Table'

const commonColumns = [
  { Header: 'First Name', accessor: 'fName', canFilter: true },
  { Header: 'Last Name', accessor: 'lName', canFilter: true },
  { Header: 'Team', accessor: d => d.team, canFilter: true },
  { Header: 'Position', accessor: 'position', canFilter: true }
];

const qbColumns = [
  ...commonColumns,
  { Header: 'Cmp', accessor: d => d.PassingStat?.cmp, disableFilters: true },
  { Header: 'Att', accessor: d => d.PassingStat?.att, disableFilters: true },
  { Header: 'Yards', accessor: d => d.PassingStat?.yds, disableFilters: true },
  { Header: 'PCT', accessor: d => d.PassingStat?.pct, disableFilters: true },
  { Header: 'YPA', accessor: d => d.PassingStat?.ypa, disableFilters: true },
  { Header: 'Sacks', accessor: d => d.PassingStat?.sack, disableFilters: true },
  { Header: 'TD', accessor: d => d.PassingStat?.td, disableFilters: true },
  { Header: 'Ints', accessor: d => d.PassingStat?.int, disableFilters: true },
  { Header: 'QB Rating', accessor: d => d.PassingStat?.rating, disableFilters: true },
  { Header: 'Age', accessor: d => d.age, disableFilters: true },
  { Header: 'Speed', accessor: d => d.speed, disableFilters: true },
  { Header: 'Acceleration', accessor: d => d.acceleration, disableFilters: true },
  { Header: 'Strength', accessor: d => d.strength, disableFilters: true },
  { Header: 'Awareness', accessor: d => d.awareness, disableFilters: true },
  { Header: 'Agility', accessor: d => d.agility, disableFilters: true },
  { Header: 'Catch', accessor: d => d.catch, disableFilters: true },
  { Header: 'Carry', accessor: d => d.carry, disableFilters: true },
  { Header: 'Jump', accessor: d => d.jump, disableFilters: true },
  { Header: 'BrkTkl', accessor: d => d.breakTackle, disableFilters: true },
  { Header: 'Tackle', accessor: d => d.tackle, disableFilters: true },
  { Header: 'ThPower', accessor: d => d.throwPower, disableFilters: true },
  { Header: 'ThAcc', accessor: d => d.throwAcc, disableFilters: true },
  { Header: 'Stamina', accessor: d => d.stamina, disableFilters: true },
  { Header: 'Injury', accessor: d => d.injury, disableFilters: true },
  { Header: 'Toughness', accessor: d => d.toughness, disableFilters: true },
  { Header: 'Ego', accessor: d => d.ego, disableFilters: true },
  { Header: 'Wgt', accessor: d => d.wgt, disableFilters: true },
  { Header: 'Hgt', accessor: d => d.height, disableFilters: true },
  { Header: 'Player Type', accessor: d => d.playerTendency, canFilter: true },
  { Header: 'Role 1', accessor: d => d.roleWeapon[0], canFilter: true },
  { Header: 'Role 2', accessor: d => d.roleWeapon[1], canFilter: true }
];
  
  const rbColumns = [
    ...commonColumns,
    { Header: 'Yards', accessor: d => d.RushingStat?.yds, disableFilters: true },
    { Header: 'Att', accessor: d => d.RushingStat?.att, disableFilters: true },
    { Header: 'YPC', accessor: d => d.RushingStat?.avg, disableFilters: true },
    { Header: 'Touchdowns', accessor: d => d.RushingStat?.td, disableFilters: true },
    { Header: 'Fumbles', accessor: d => d.RushingStat?.fumb, disableFilters: true },
    { Header: 'BTK', accessor: d => d.RushingStat?.btk, disableFilters: true },
    { Header: '20+', accessor: d => d.RushingStat?.twty_plus, disableFilters: true },
    { Header: 'Age', accessor: d => d.age, disableFilters: true },
    { Header: 'Speed', accessor: d => d.speed, disableFilters: true },
    { Header: 'Acceleration', accessor: d => d.acceleration, disableFilters: true },
    { Header: 'Strength', accessor: d => d.strength, disableFilters: true },
    { Header: 'Awareness', accessor: d => d.awareness, disableFilters: true },
    { Header: 'Agility', accessor: d => d.agility, disableFilters: true },
    { Header: 'Catch', accessor: d => d.catch, disableFilters: true },
    { Header: 'Carry', accessor: d => d.carry, disableFilters: true },
    { Header: 'Jump', accessor: d => d.jump, disableFilters: true },
    { Header: 'BrkTkl', accessor: d => d.breakTackle, disableFilters: true },
    { Header: 'Tackle', accessor: d => d.tackle, disableFilters: true },
    { Header: 'ThPower', accessor: d => d.throwPower, disableFilters: true },
    { Header: 'ThAcc', accessor: d => d.throwAcc, disableFilters: true },
    { Header: 'Stamina', accessor: d => d.stamina, disableFilters: true },
    { Header: 'Injury', accessor: d => d.injury, disableFilters: true },
    { Header: 'Toughness', accessor: d => d.toughness, disableFilters: true },
    { Header: 'Ego', accessor: d => d.ego, disableFilters: true },
    { Header: 'Wgt', accessor: d => d.wgt, disableFilters: true },
    { Header: 'Hgt', accessor: d => d.height, disableFilters: true },
    { Header: 'Player Type', accessor: d => d.playerTendency, canFilter: true },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0], canFilter: true },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1], canFilter: true }
  ];

  const wrColumns = [
    ...commonColumns,
    { Header: 'Yards', accessor: d => d.ReceivingStat?.yds, disableFilters: true },
    { Header: 'Rec', accessor: d => d.ReceivingStat?.rec, disableFilters: true },
    { Header: 'Avg', accessor: d => d.ReceivingStat?.avg, disableFilters: true },
    { Header: 'Long', accessor: d => d.ReceivingStat?.long, disableFilters: true },
    { Header: 'Touchdowns', accessor: d => d.ReceivingStat?.td, disableFilters: true },
    { Header: 'YAC', accessor: d => d.ReceivingStat?.yac, disableFilters: true },
    { Header: 'Drops', accessor: d => d.ReceivingStat?.drops, disableFilters: true },
    { Header: 'Age', accessor: d => d.age, disableFilters: true },
    { Header: 'Speed', accessor: d => d.speed, disableFilters: true },
    { Header: 'Acceleration', accessor: d => d.acceleration, disableFilters: true },
    { Header: 'Strength', accessor: d => d.strength, disableFilters: true },
    { Header: 'Awareness', accessor: d => d.awareness, disableFilters: true },
    { Header: 'Agility', accessor: d => d.agility, disableFilters: true },
    { Header: 'Catch', accessor: d => d.catch, disableFilters: true },
    { Header: 'Carry', accessor: d => d.carry, disableFilters: true },
    { Header: 'Jump', accessor: d => d.jump, disableFilters: true },
    { Header: 'BrkTkl', accessor: d => d.breakTackle, disableFilters: true },
    { Header: 'Tackle', accessor: d => d.tackle, disableFilters: true },
    { Header: 'ThPower', accessor: d => d.throwPower, disableFilters: true },
    { Header: 'ThAcc', accessor: d => d.throwAcc, disableFilters: true },
    { Header: 'Stamina', accessor: d => d.stamina, disableFilters: true },
    { Header: 'Injury', accessor: d => d.injury, disableFilters: true },
    { Header: 'Toughness', accessor: d => d.toughness, disableFilters: true },
    { Header: 'Ego', accessor: d => d.ego, disableFilters: true },
    { Header: 'Wgt', accessor: d => d.wgt, disableFilters: true },
    { Header: 'Hgt', accessor: d => d.height, disableFilters: true },
    { Header: 'Player Type', accessor: d => d.playerTendency, canFilter: true },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0], canFilter: true },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1], canFilter: true }
  ];

  const blockingColumns = [
    ...commonColumns,
    { Header: 'Pancakes', accessor: d => d.BlockingStat?.pancakes, disableFilters: true },
    { Header: 'Sacks Allowed', accessor: d => d.BlockingStat?.sacks_allowed, disableFilters: true },
    { Header: 'Age', accessor: d => d.age, disableFilters: true },
    { Header: 'Speed', accessor: d => d.speed, disableFilters: true },
    { Header: 'Acceleration', accessor: d => d.acceleration, disableFilters: true },
    { Header: 'Strength', accessor: d => d.strength, disableFilters: true },
    { Header: 'Awareness', accessor: d => d.awareness, disableFilters: true },
    { Header: 'Agility', accessor: d => d.agility, disableFilters: true },
    { Header: 'Catch', accessor: d => d.catch, disableFilters: true },
    { Header: 'Carry', accessor: d => d.carry, disableFilters: true },
    { Header: 'Jump', accessor: d => d.jump, disableFilters: true },
    { Header: 'BrkTkl', accessor: d => d.breakTackle, disableFilters: true },
    { Header: 'Tackle', accessor: d => d.tackle, disableFilters: true },
    { Header: 'ThPower', accessor: d => d.throwPower, disableFilters: true },
    { Header: 'ThAcc', accessor: d => d.throwAcc, disableFilters: true },
    { Header: 'Stamina', accessor: d => d.stamina, disableFilters: true },
    { Header: 'Injury', accessor: d => d.injury, disableFilters: true },
    { Header: 'Toughness', accessor: d => d.toughness, disableFilters: true },
    { Header: 'Ego', accessor: d => d.ego, disableFilters: true },
    { Header: 'Wgt', accessor: d => d.wgt, disableFilters: true },
    { Header: 'Hgt', accessor: d => d.height, disableFilters: true },
    { Header: 'Player Type', accessor: d => d.playerTendency, canFilter: true },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0], canFilter: true },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1], canFilter: true }
  ];

  const defensiveColumns = [
    ...commonColumns,
    { Header: 'Tackles', accessor: d => d.DefensiveStat?.tackles, disableFilters: true },
    { Header: 'Tfl', accessor: d => d.DefensiveStat?.tfl, disableFilters: true },
    { Header: 'Sacks', accessor: d => d.DefensiveStat?.sacks, disableFilters: true },
    { Header: 'FF', accessor: d => d.DefensiveStat?.ff, disableFilters: true },
    { Header: 'TD', accessor: d => d.DefensiveStat?.td, disableFilters: true },
    { Header: 'Int', accessor: d => d.DefensiveStat?.int, disableFilters: true },
    { Header: 'Pass Defl', accessor: d => d.DefensiveStat?.pass_deflection, disableFilters: true },
    { Header: 'Catch Allowed', accessor: d => d.DefensiveStat?.catch_allowed, disableFilters: true },
    { Header: 'Age', accessor: d => d.age, disableFilters: true },
    { Header: 'Speed', accessor: d => d.speed, disableFilters: true },
    { Header: 'Acceleration', accessor: d => d.acceleration, disableFilters: true },
    { Header: 'Strength', accessor: d => d.strength, disableFilters: true },
    { Header: 'Awareness', accessor: d => d.awareness, disableFilters: true },
    { Header: 'Agility', accessor: d => d.agility, disableFilters: true },
    { Header: 'Catch', accessor: d => d.catch, disableFilters: true },
    { Header: 'Carry', accessor: d => d.carry, disableFilters: true },
    { Header: 'Jump', accessor: d => d.jump, disableFilters: true },
    { Header: 'BrkTkl', accessor: d => d.breakTackle, disableFilters: true },
    { Header: 'Tackle', accessor: d => d.tackle, disableFilters: true },
    { Header: 'ThPower', accessor: d => d.throwPower, disableFilters: true },
    { Header: 'ThAcc', accessor: d => d.throwAcc, disableFilters: true },
    { Header: 'Stamina', accessor: d => d.stamina, disableFilters: true },
    { Header: 'Injury', accessor: d => d.injury, disableFilters: true },
    { Header: 'Toughness', accessor: d => d.toughness, disableFilters: true },
    { Header: 'Ego', accessor: d => d.ego, disableFilters: true },
    { Header: 'Wgt', accessor: d => d.wgt, disableFilters: true },
    { Header: 'Hgt', accessor: d => d.height, disableFilters: true },
    { Header: 'Player Type', accessor: d => d.playerTendency, canFilter: true },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0], canFilter: true },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1], canFilter: true }
  ]

const PlayerContent = ({players, position}) => {
   let columns;
  
  if (position.includes('QB')) {
    columns = qbColumns;
  } else if (position.includes('TB')) {
    columns = rbColumns;
  } else if (position.includes('WR')){
    columns = wrColumns;
  } else if (position.includes('FB')){
    columns = blockingColumns;
  }else if (position.includes('CB')){
    columns = defensiveColumns
  } else {
    columns = []; // Default case
  }
  
  return (
    <Table columns={columns} data={players} />
  )
}

export default PlayerContent