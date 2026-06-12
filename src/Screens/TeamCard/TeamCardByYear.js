import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { listPlayers } from '../../graphql/queries'; // adjust path as needed
import  usePlayers  from '../../Components/apiFunctions/usePlayers';
import { qbColumns, rbColumns, wrColumns, blockingColumns, defensiveColumns } from '../../Components/SVComponents/PlayerContent';
import { teams } from '../Teams/Teams';
import Table from '../../Components/SVComponents/Table';
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar';
import LoadingScreen from '../Loading/LoadingScreen';
import './TeamCard.css';

const POSITION_GROUPS = [
  {
    label: 'Passing',
    positions: ['QB'],
    columns: qbColumns,
    filter: players => players.filter(p => p.PassingStat?.cmp !== 0),
    sort:   players => [...players].sort((a, b) => b.PassingStat?.yds - a.PassingStat?.yds),
  },
  {
    label: 'Rushing',
    positions: ['TB', 'QB'],
    columns: rbColumns,
    filter: players => players.filter(p => p.RushingStat?.att > 0),
    sort:   players => [...players].sort((a, b) => b.RushingStat?.yds - a.RushingStat?.yds),
  },
  {
    label: 'Receiving',
    positions: ['WR', 'TE'],
    columns: wrColumns,
    filter: players => players.filter(p => p.ReceivingStat?.rec > 0),
    sort:   players => [...players].sort((a, b) => b.ReceivingStat?.yds - a.ReceivingStat?.yds),
  },
  {
    label: 'Blocking',
    positions: ['FB', 'LG', 'RG', 'C', 'LT', 'RT'],
    columns: blockingColumns,
    filter: players => players.filter(p => p.BlockingStat?.pancakes !== 0),
    sort:   players => [...players].sort((a, b) => b.BlockingStat?.pancakes - a.BlockingStat?.pancakes),
  },
  {
    label: 'Defense',
    positions: ['CB', 'SS', 'FS', 'LOLB', 'ILB', 'ROLB', 'RDE', 'DT', 'LDE'],
    columns: defensiveColumns,
    filter: players => players.filter(p => p.DefensiveStat?.tackles !== 0),
    sort:   players => [...players].sort((a, b) => b.DefensiveStat?.tackles - a.DefensiveStat?.tackles),
  },
];

const TeamCardByYear = () => {

  const { team, year } = useParams(); // route: /Teams/:team/:year
  const teamAbv = teams.find(t => t.label === team)?.value ?? team;
  const { players, loading, error } = usePlayers({ year, team: teamAbv });

  if (loading) return <LoadingScreen message={`Loading ${year} ${team} roster...`} />;
  if (error)   return <div style={{ paddingTop: 150 }}>Failed to load players.</div>;

  return (
    <div>
      <SeasonNavBar
        year={year}
        title={team}
        basePath={`/Teams/${team}`}
        showOffensiveStats={false}
        showDefensiveStats={false}
      />
      <div className='team-card-by-year'>
        <h1 className='team-card-title'>{team} — {year}</h1>

        {POSITION_GROUPS.map(({ label, positions, columns, filter, sort }) => {
          let group = players.filter(p => positions.includes(p.position));
          group = filter(group);
          group = sort(group);

          if (group.length === 0) return null;

          return (
            <div key={label} className='team-card-section'>
              <h2 className='team-card-section-header'>{label}</h2>
              <Table columns={columns} data={group} />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TeamCardByYear;