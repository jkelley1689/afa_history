import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { listPlayers } from '../../graphql/queries';

import './Stats.css';
import StatViewer from './StatViewer';
import LoadingScreen from '../Loading/LoadingScreen';
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar';
import usePlayers from '../../Components/apiFunctions/usePlayers';

const Stats = () => {

  const { year, statType } = useParams();

  const position = useMemo(() => {
    if (statType === 'Passing') {
      return ["QB"];
    } else if (statType === 'Rushing') {
      return ["TB"];
    } else if (statType === 'Receiving') {
      return ["WR", "TE"];
    } else if (statType === 'Blocking') {
      return ['TE', 'FB', 'LG', 'RG', 'C', 'LT', 'RT'];
    } else if (statType === 'Defense') {
      return ['CB', 'SS', 'FS', 'LOLB', 'ILB', 'ROLB', 'RDE', 'DT', 'LDE'];
    }
  }, [statType]);

  const { players, loading } = usePlayers({year,position}) 

  if (loading) return <LoadingScreen message={`Loading ${statType} stats for ${year}...`} />;

  return (
    <div>
      <div className='stats'>
        <SeasonNavBar year={year} />
        <StatViewer players={players} position={position} year={year} />
      </div>
    </div>
  );
};

export default Stats;
