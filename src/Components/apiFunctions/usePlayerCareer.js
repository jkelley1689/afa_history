// hooks/usePlayerCareer.js
import { useState, useEffect } from 'react';
import { generateClient } from 'aws-amplify/api';
import { getPlayer } from '../../graphql/queries';

const client = generateClient();

// You'll need a custom query that fetches across all years
const playerByName = /* GraphQL */ `
  query PlayersByName($fName: String!, $lName: String!, $nextToken: String) {
    listPlayers(filter: { fName: { eq: $fName }, lName: { eq: $lName } }, limit: 1500, nextToken: $nextToken) {
      items {
        id
        fName
        lName
        year
        team
        position
        age
        speed
        acceleration
        strength
        awareness
        agility
        PassingStat { cmp att yds pct ypa sack td int rating }
        RushingStat { att yds td avg fumb btk twty_plus }
        ReceivingStat { rec yds avg long td drops yac }
        DefensiveStat { tackles tfl sacks ff td int pass_deflection catch_allowed }
        BlockingStat { pancakes sacks_allowed }
      }
      nextToken
    }
  }
`;

const usePlayerCareer = (fName, lName) => {
  const [seasons, setSeasons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!fName || !lName) return;

    const fetchAll = async (token = null, accumulated = []) => {
      try {
        const res = await client.graphql({
          query: playerByName,
          variables: { fName, lName, nextToken: token },
        });

        const items = res.data.listPlayers.items;
        const nextToken = res.data.listPlayers.nextToken;
        const updated = [...accumulated, ...items];

        if (nextToken) {
          await fetchAll(nextToken, updated);
        } else {
          const filtered = updated.filter(s => s.team !== '0');
          setSeasons(filtered.sort((a, b) => a.year - b.year));
          setLoading(false);
        }
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchAll();
  }, [fName, lName]);

  return { seasons, loading, error };
};

export default usePlayerCareer;