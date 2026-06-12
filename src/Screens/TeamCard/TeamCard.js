import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { listPlayers } from '../../graphql/queries'; // adjust path as needed
import Table from '../../Components/SVComponents/Table';
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar';
import './TeamCard.css';



const TeamCard = () => {
  const { team } = useParams();
  console.log(team)



  return (
    <div className="team-card">
      <SeasonNavBar 
        year={2025}
        title={team}
        basePath={`/Teams/${team}`}
        showOffensiveStats={false}
        showDefensiveStats={false}
      />
    </div>
  );
};

export default TeamCard;