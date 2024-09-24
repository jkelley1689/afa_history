import React, { useEffect, useMemo, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { listPlayers } from '../../graphql/queries';

import './Stats.css';
import StatViewer from './StatViewer';
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar';

const Stats = () => {

  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const { year, statType } = useParams();

  const client = generateClient();

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

  const fetchAllPlayers = async (currentToken = null, allPlayers = []) => {
    let queryFilter = { and: [{ year: { eq: year } }, { position: { eq: position[0] } }] };
    if (position.length > 1) {
      queryFilter = {
        and: [
          { year: { eq: year } },
          { or: position.map(pos => ({ position: { eq: pos } })) }
        ]
      };
    }

    try {
      const res = await client.graphql({
        query: listPlayers,
        variables: {
          filter: queryFilter,
          limit: 1500,
          nextToken: currentToken
        }
      });

      const newPlayers = res.data.listPlayers.items;
      const nextToken = res.data.listPlayers.nextToken;
      let updatedPlayers = [...allPlayers, ...newPlayers];

      // Process the data based on position and stats
      if (position.includes('QB')) {
        updatedPlayers = updatedPlayers.filter(player => player.PassingStat && player.PassingStat.cmp !== 0);
        updatedPlayers.sort((a, b) => b.PassingStat.yds - a.PassingStat.yds);
      }
      if (position.includes('TB')) {
        updatedPlayers = updatedPlayers.filter(player => player.RushingStat && player.RushingStat.att !== 0);
        updatedPlayers.sort((a, b) => b.RushingStat.yds - a.RushingStat.yds);
      }
      if (position.includes('WR')) {
        updatedPlayers = updatedPlayers.filter(player => player.ReceivingStat && player.ReceivingStat.rec !== 0);
        updatedPlayers.sort((a, b) => b.ReceivingStat.yds - a.ReceivingStat.yds);
      }
      if (position.includes('LT')) {
        updatedPlayers = updatedPlayers.filter(player => player.BlockingStat && player.BlockingStat.pancakes !== 0);
        updatedPlayers.sort((a, b) => b.BlockingStat.pancakes - a.BlockingStat.pancakes);
      }
      if (position.includes('CB')) {
        updatedPlayers = updatedPlayers.filter(player => player.DefensiveStat && player.DefensiveStat.tackles !== 0);
        updatedPlayers.sort((a, b) => b.DefensiveStat.tackles - a.DefensiveStat.tackles);
      }

      // If nextToken exists, recursively fetch more data
      if (nextToken) {
        fetchAllPlayers(nextToken, updatedPlayers);
      } else {
        // No more tokens, set the final players
        setPlayers(updatedPlayers);
        setLoading(false);
      }

    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchAllPlayers(); // Start fetching all players when the component mounts
  }, [position, year]);

  if (loading) {
    return <div>Loading {position.join(', ')} stats for {year}</div>;
  }

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
