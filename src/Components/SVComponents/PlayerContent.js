import React from 'react'
import Table from './Table'
import { Link } from 'react-router-dom';

import { useMemo } from 'react';


export const calcQBRating = (cmp, att, yds, td, int) => {
  if (!att) return 0;
  const a = Math.max(0, Math.min(2.375, ((cmp / att) - 0.3) * 5));
  const b = Math.max(0, Math.min(2.375, ((yds / att) - 3) / 4));
  const c = Math.max(0, Math.min(2.375, (td / att) * 20));
  const d = Math.max(0, Math.min(2.375, 2.375 - (int / att) * 25));
  return ((a + b + c + d) / 6 * 100).toFixed(2);
};

export const commonColumns = [
  {
    Header: 'Name',
    id: 'name',
    accessor: d => ({ id: d.id, fName: d.fName, lName: d.lName, name: `${d.fName} ${d.lName}` }),
    Cell: ({ value }) => (
      console.log(value),
      <Link to={`/Career/${encodeURIComponent(value.fName)}_${encodeURIComponent(value.lName)}`}>
        {value.name}
      </Link>
    ),
    filter: (rows, id, filterValue) =>
      rows.filter(row =>
        row.values[id].name
          .toLowerCase()
          .includes(filterValue.toLowerCase())
      ),
    canFilter: true,
  },
  { Header: 'Team', accessor: d => d.team, canFilter: true },
  { Header: 'Position', accessor: 'position', canFilter: true }
];

export const qbColumns = [
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
  
  export const rbColumns = [
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

  export const wrColumns = [
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

  export const blockingColumns = [
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

  export const defensiveColumns = [
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

  export const qbCareerColumns = [
  { Header: 'Year', accessor: d => d.year, disableFilters: true },
  { Header: 'Team', accessor: d => d.team, disableFilters: true, Footer: () => 'Total' },
  { Header: 'Cmp', accessor: d => d.PassingStat?.cmp, disableFilters: true, Footer: info => info.rows.reduce((sum, row) => sum + (row.values.Cmp || 0), 0) },
  { Header: 'Att', accessor: d => d.PassingStat?.att, disableFilters: true, Footer: info => info.rows.reduce((sum, row) => sum + (row.values.Att || 0), 0) },
  { Header: 'Yds', accessor: d => d.PassingStat?.yds, disableFilters: true, Footer: info => info.rows.reduce((sum, row) => sum + (row.values.Yds || 0), 0) },
  { Header: 'TD', accessor: d => d.PassingStat?.td, disableFilters: true, Footer: info => info.rows.reduce((sum, row) => sum + (row.values.TD || 0), 0) },
  { Header: 'Int', accessor: d => d.PassingStat?.int, disableFilters: true, Footer: info => info.rows.reduce((sum, row) => sum + (row.values.Int || 0), 0) },
  { Header: 'PCT', accessor: d => d.PassingStat?.pct, disableFilters: true, Footer: info => (info.rows.reduce((sum, row) => sum + (row.values.PCT || 0), 0) / info.rows.length).toFixed(1) },
  { 
    Header: 'Rating', 
    accessor: d => d.PassingStat?.rating, 
    disableFilters: true, 
    Footer: info => {
      const totals = info.rows.reduce((acc, row) => ({
        cmp: acc.cmp + (row.original.PassingStat?.cmp || 0),
        att: acc.att + (row.original.PassingStat?.att || 0),
        yds: acc.yds + (row.original.PassingStat?.yds || 0),
        td:  acc.td  + (row.original.PassingStat?.td  || 0),
        int: acc.int + (row.original.PassingStat?.int || 0),
      }), { cmp: 0, att: 0, yds: 0, td: 0, int: 0 });

      return calcQBRating(totals.cmp, totals.att, totals.yds, totals.td, totals.int);
    }
  },
];

  export const rbCareerColumns = [
    { Header: 'Year', accessor: d => d.year, disableFilters: true },
    { Header: 'Team', accessor: d => d.team, disableFilters: true, Footer: () => 'Total' },
    { Header: 'Yards', accessor: d => d.RushingStat?.yds, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.yds || 0), 0) },
    { Header: 'Att', accessor: d => d.RushingStat?.att, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.att || 0), 0) },
    { Header: 'YPC', accessor: d => d.RushingStat?.avg, disableFilters: true,
      Footer: info => {
        const totYds = info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.yds || 0), 0);
        const totAtt = info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.att || 0), 0);
        return totAtt ? (totYds / totAtt).toFixed(1) : 0;
      }},
    { Header: 'Touchdowns', accessor: d => d.RushingStat?.td, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.td || 0), 0) },
    { Header: 'Fumbles', accessor: d => d.RushingStat?.fumb, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.fumb || 0), 0) },
    { Header: 'BTK', accessor: d => d.RushingStat?.btk, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.btk || 0), 0) },
    { Header: '20+', accessor: d => d.RushingStat?.twty_plus, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.RushingStat?.twty_plus || 0), 0) },
  ];

  export const wrCareerColumns = [
    { Header: 'Year', accessor: d => d.year, disableFilters: true },
    { Header: 'Team', accessor: d => d.team, disableFilters: true, Footer: () => 'Total' },
    { Header: 'Rec', accessor: d => d.ReceivingStat?.rec, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.rec || 0), 0) },
    { Header: 'Yds', accessor: d => d.ReceivingStat?.yds, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.yds || 0), 0) },
    { Header: 'Avg', accessor: d => d.ReceivingStat?.avg, disableFilters: true,
      Footer: info => {
        const totYds = info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.yds || 0), 0);
        const totRec = info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.rec || 0), 0);
        return totRec ? (totYds / totRec).toFixed(1) : 0;
      }},
    { Header: 'Long', accessor: d => d.ReceivingStat?.long, disableFilters: true,
      Footer: info => Math.max(...info.rows.map(row => row.original.ReceivingStat?.long || 0)) },
    { Header: 'TD', accessor: d => d.ReceivingStat?.td, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.td || 0), 0) },
    { Header: 'Drops', accessor: d => d.ReceivingStat?.drops, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.drops || 0), 0) },
    { Header: 'YAC', accessor: d => d.ReceivingStat?.yac, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.ReceivingStat?.yac || 0), 0) },
  ];

  export const defensiveCareerColumns = [
    { Header: 'Year', accessor: d => d.year, disableFilters: true},
    { Header: 'Team', accessor: d => d.team, disableFilters: true, Footer: () => 'Total' },
    { Header: 'Tackles', accessor: d => d.DefensiveStat?.tackles, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.tackles || 0), 0) },
    { Header: 'TFL', accessor: d => d.DefensiveStat?.tfl, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.tfl || 0), 0) },
    { Header: 'Sacks', accessor: d => d.DefensiveStat?.sacks, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.sacks || 0), 0) },
    { Header: 'FF', accessor: d => d.DefensiveStat?.ff, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.ff || 0), 0) },
    { Header: 'TD', accessor: d => d.DefensiveStat?.td, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.td || 0), 0) },
    { Header: 'Int', accessor: d => d.DefensiveStat?.int, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.int || 0), 0) },
    { Header: 'Pass Deflection', accessor: d => d.DefensiveStat?.pass_deflection, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.pass_deflection || 0), 0) },
    { Header: 'Catch Allowed', accessor: d => d.DefensiveStat?.catch_allowed, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.DefensiveStat?.catch_allowed || 0), 0) },
  ];

  export const blockingCareerColumns = [
    { Header: 'Year', accessor: d => d.year, disableFilters: true },
    { Header: 'Team', accessor: d => d.team, disableFilters: true, Footer: () => 'Total' },
    { Header: 'Pancakes', accessor: d => d.BlockingStat?.pancakes, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.BlockingStat?.pancakes || 0), 0) },
    { Header: 'Sacks Allowed', accessor: d => d.BlockingStat?.sacks_allowed, disableFilters: true,
      Footer: info => info.rows.reduce((sum, row) => sum + (row.original.BlockingStat?.sacks_allowed || 0), 0) },
  ];

const PlayerContent = ({players, position}) => {
  
  const columns = useMemo(() => {
    if (position.includes('QB')) return qbColumns;
    if (position.includes('TB')) return rbColumns;
    if (position.includes('WR')) return wrColumns;
    if (position.includes('FB')) return blockingColumns;
    if (position.includes('CB')) return defensiveColumns;
    return [];
  }, [position]);
  
  return (
    <Table columns={columns} data={players} showFilters={true} />
  )
}

export default PlayerContent