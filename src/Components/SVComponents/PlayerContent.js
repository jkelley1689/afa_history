import React from 'react'
import Table from './Table'

const commonColumns = [
    { Header: 'First Name', accessor: 'fName' },
    { Header: 'Last Name', accessor: 'lName' },
    { Header: 'Team', accessor: d => d.team },
    { Header: 'Position', accessor: 'position' }
  ];

  const qbColumns = [
    ...commonColumns,
    { Header: 'Cmp', accessor: d => d.PassingStat?.cmp },
    { Header: 'Att', accessor: d => d.PassingStat?.att },
    { Header: 'Yards', accessor: d => d.PassingStat?.yds },
    { Header: 'PCT', accessor: d => d.PassingStat?.pct },
    { Header: 'YPA', accessor: d => d.PassingStat?.ypa },
    { Header: 'Sacks', accessor: d => d.PassingStat?.sack },
    { Header: 'TD', accessor: d => d.PassingStat?.td },
    { Header: 'Ints', accessor: d => d.PassingStat?.int },
    { Header: 'QB Rating', accessor: d => d.PassingStat?.rating },
    { Header: 'Age', accessor: d => d.age},
    { Header: 'Speed', accessor: d => d.speed},
    { Header: 'Acceleration', accessor: d => d.acceleration},
    { Header: 'Strength', accessor: d => d.strength},
    { Header: 'Awareness', accessor: d => d.awareness},
    { Header: 'Agility', accessor: d => d.agility},
    { Header: 'Catch', accessor: d => d.catch },
    { Header: 'Carry', accessor: d => d.carry },
    { Header: 'Jump', accessor: d => d.jump },
    { Header: 'BrkTkl', accessor: d => d.breakTackle },
    { Header: 'Tackle', accessor: d => d.tackle },
    { Header: 'ThPower', accessor: d => d.throwPower },
    { Header: 'ThAcc', accessor: d => d.throwAcc },
    { Header: 'Stamina', accessor: d => d.stamina },
    { Header: 'Injury', accessor: d => d.injury },
    { Header: 'Toughness', accessor: d => d.toughness },
    { Header: 'Ego', accessor: d => d.ego },
    { Header: 'Wgt', accessor: d => d.wgt },
    { Header: 'Hgt', accessor: d => d.height },
    { Header: 'Player Type', accessor: d => d.playerTendency },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0] },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1] }
  ];
  
  const rbColumns = [
    ...commonColumns,
    { Header: 'Yards', accessor: d => d.RushingStat?.yds },
    { Header: 'Att', accessor: d => d.RushingStat?.att },
    { Header: 'YPC', accessor: d => d.RushingStat?.avg },
    { Header: 'Touchdowns', accessor: d => d.RushingStat?.td },
    { Header: 'Fumbles', accessor: d => d.RushingStat?.fumb },
    { Header: 'BTK', accessor: d => d.RushingStat?.btk },
    { Header: '20+', accessor: d => d.RushingStat?.twty_plus },
    { Header: 'Age', accessor: d => d.age},
    { Header: 'Speed', accessor: d => d.speed},
    { Header: 'Acceleration', accessor: d => d.acceleration},
    { Header: 'Strength', accessor: d => d.strength},
    { Header: 'Awareness', accessor: d => d.awareness},
    { Header: 'Agility', accessor: d => d.agility},
    { Header: 'Catch', accessor: d => d.catch },
    { Header: 'Carry', accessor: d => d.carry },
    { Header: 'Jump', accessor: d => d.jump },
    { Header: 'BrkTkl', accessor: d => d.breakTackle },
    { Header: 'Tackle', accessor: d => d.tackle },
    { Header: 'ThPower', accessor: d => d.throwPower },
    { Header: 'ThAcc', accessor: d => d.throwAcc },
    { Header: 'Stamina', accessor: d => d.stamina },
    { Header: 'Injury', accessor: d => d.injury },
    { Header: 'Toughness', accessor: d => d.toughness },
    { Header: 'Ego', accessor: d => d.ego },
    { Header: 'Wgt', accessor: d => d.wgt },
    { Header: 'Hgt', accessor: d => d.height },
    { Header: 'Player Type', accessor: d => d.playerTendency },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0] },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1] }
  ];

  const wrColumns = [
    ...commonColumns,
    { Header: 'Yards', accessor: d => d.ReceivingStat?.yds },
    { Header: 'Rec', accessor: d => d.ReceivingStat?.rec },
    { Header: 'Avg', accessor: d => d.ReceivingStat?.avg },
    { Header: 'Long', accessor: d => d.ReceivingStat?.long },
    { Header: 'Touchdowns', accessor: d => d.ReceivingStat?.td },
    { Header: 'YAC', accessor: d => d.ReceivingStat?.yac },
    { Header: 'Drops', accessor: d => d.ReceivingStat?.drops },
    { Header: 'Age', accessor: d => d.age},
    { Header: 'Speed', accessor: d => d.speed},
    { Header: 'Acceleration', accessor: d => d.acceleration},
    { Header: 'Strength', accessor: d => d.strength},
    { Header: 'Awareness', accessor: d => d.awareness},
    { Header: 'Agility', accessor: d => d.agility},
    { Header: 'Catch', accessor: d => d.catch },
    { Header: 'Carry', accessor: d => d.carry },
    { Header: 'Jump', accessor: d => d.jump },
    { Header: 'BrkTkl', accessor: d => d.breakTackle },
    { Header: 'Tackle', accessor: d => d.tackle },
    { Header: 'ThPower', accessor: d => d.throwPower },
    { Header: 'ThAcc', accessor: d => d.throwAcc },
    { Header: 'Stamina', accessor: d => d.stamina },
    { Header: 'Injury', accessor: d => d.injury },
    { Header: 'Toughness', accessor: d => d.toughness },
    { Header: 'Ego', accessor: d => d.ego },
    { Header: 'Wgt', accessor: d => d.wgt },
    { Header: 'Hgt', accessor: d => d.height },
    { Header: 'Player Type', accessor: d => d.playerTendency },
    { Header: 'Role 1', accessor: d => d.roleWeapon[0] },
    { Header: 'Role 2', accessor: d => d.roleWeapon[1] }
  ]

const PlayerContent = ({players, position}) => {
   let columns;
  
  if (position.includes('QB')) {
    columns = qbColumns;
  } else if (position.includes('TB')) {
    columns = rbColumns;
  } else if (position.includes('WR') || position.includes('TE')) {
    columns = wrColumns;
  } else {
    columns = []; // Default case
  }
  
  return (
    <Table columns={columns} data={players} />
  )
}

export default PlayerContent