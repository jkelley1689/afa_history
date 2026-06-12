import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { listPlayers } from '../../graphql/queries';

const client = generateClient();

const buildFilter = ({ year, position, team }) => {
  const conditions = [{ year: { eq: year } }];

  if (team) conditions.push({ team: { eq: team } });

  if (position?.length === 1) {
    conditions.push({ position: { eq: position[0] } });
  } else if (position?.length > 1) {
    conditions.push({ or: position.map(pos => ({ position: { eq: pos } })) });
  }

  if (position?.includes('CB')) {
    conditions.push({ playerDefensiveStatId: { attributeExists: true } });
  } else if (position?.includes('QB')) {
    conditions.push({ playerPassingStatId: { attributeExists: true } });
  } else if (position?.includes('TB')) {
    conditions.push({ playerRushingStatId: { attributeExists: true } });
  } else if (position?.includes('WR')) {
    conditions.push({ playerReceivingStatId: { attributeExists: true } });
  } else if (position?.includes('LT') || position?.includes('FB')) {
    conditions.push({ playerBlockingStatId: { attributeExists: true } });
  }

  return { and: conditions };
};

const sortAndFilter = (players, position) => {
  let result = [...players];

  if (position.includes('QB')) {
    result = result.filter(p => p.PassingStat.cmp !== 0);
    result.sort((a, b) => b.PassingStat.yds - a.PassingStat.yds);
  } else if (position.includes('TB')) {
    result = result.filter(p => p.RushingStat.att !== 0);
    result.sort((a, b) => b.RushingStat.yds - a.RushingStat.yds);
  } else if (position.includes('WR')) {
    result = result.filter(p => p.ReceivingStat.rec !== 0);
    result.sort((a, b) => b.ReceivingStat.yds - a.ReceivingStat.yds);
  } else if (position.includes('LT')) {
    result = result.filter(p => p.BlockingStat.pancakes !== 0);
    result.sort((a, b) => b.BlockingStat.pancakes - a.BlockingStat.pancakes);
  } else if (position.includes('CB')) {
    result = result.filter(p => p.DefensiveStat.tackles !== 0);
    result.sort((a, b) => b.DefensiveStat.tackles - a.DefensiveStat.tackles);
  }

  return result;
};

const usePlayers = ({ year, position, team }) => {
  const [players, setPlayers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchAll = async (token = null, accumulated = []) => {
    try {
      const res = await client.graphql({
        query: listPlayers,
        variables: {
          filter: buildFilter({ year, position, team }),
          limit: 1500,
          nextToken: token,
        },
      });

      const items = res.data.listPlayers.items;
      const nextToken = res.data.listPlayers.nextToken;
      const updated = [...accumulated, ...items];

      if (nextToken) {
        await fetchAll(nextToken, updated);
      } else {
        // Only sort/filter if viewing a single position group (Season Stats)
        // For Team Stats (team set, no position filter) leave raw for the component to split
        setPlayers(position ? sortAndFilter(updated, position) : updated);
        setLoading(false);
      }
    } catch (err) {
      console.error(err);
      setError(err);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (!year) return;
    setLoading(true);
    fetchAll();
  }, [year, JSON.stringify(position), team]);

  return { players, loading, error };
};

export default usePlayers;