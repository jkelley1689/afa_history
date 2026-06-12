import React from 'react'
import Navbar from '../../Components/Nav/Navbar'
import LoadingScreen from '../Loading/LoadingScreen';
import { useParams, useNavigate } from 'react-router-dom';
import usePlayerCareer from '../../Components/apiFunctions/usePlayerCareer';
import {qbCareerColumns, rbCareerColumns, wrCareerColumns, defensiveCareerColumns, blockingCareerColumns} from '../../Components/SVComponents/PlayerContent';
import Table from '../../Components/SVComponents/Table';
import './CareerStats.css'

const getCareerColumns = (position) => {
  if (position === 'QB') return qbCareerColumns;
  if (position === 'TB') return rbCareerColumns;
  if (position === 'WR' || position === 'TE') return wrCareerColumns;
  if (['CB', 'SS', 'FS', 'DT', 'ILB', 'LOLB', 'ROLB', 'LDE', 'RDE'].includes(position)) return defensiveCareerColumns;
  if (['FB', 'LT', 'RT', 'LG', 'RG', 'C', 'TE'].includes(position)) return blockingCareerColumns;   
  return [];
};

const CareerStats = () => {
    const { playerName } = useParams();
    const navigate = useNavigate();
    console.log('Fetching career stats for:', playerName);
    const [fName, lName] = decodeURIComponent(playerName).split('_');
    console.log(fName, lName);
    const { seasons, loading, error } = usePlayerCareer(fName, lName);

    console.log('Career seasons data:', seasons);

    if (loading) return <LoadingScreen />;
    if (error) return (
    <div style={{ paddingTop: 150, textAlign: 'center' }}>
        <p>Failed to load career stats.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
    );
    if (!seasons.length) return (
    <div style={{ paddingTop: 150, textAlign: 'center' }}>
        <p>No player found for <strong>{fName} {lName}</strong>.</p>
        <button onClick={() => navigate(-1)}>Go Back</button>
    </div>
    );

    const latest = seasons[seasons.length - 1];
    const columns = getCareerColumns(latest.position);

    return (
    <div className="career-stats">
        <div className="player-header">
        <h1>{latest.fName} {latest.lName}</h1>
        <span className="player-position-badge">{latest.position}</span>
        </div>
        <Table columns={columns} data={seasons} showFilters={true} showFooter={true} />
    </div>
    );
}

export default CareerStats