import React from 'react';
import { useParams } from 'react-router-dom';
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar';
import gmHistory from './gmHistory.json';
import './TeamCard.css';

const formatTenure = ({ startYear, endYear }) => (
  endYear ? `${startYear}-${endYear}` : `${startYear}-Present`
);

const TeamCard = () => {
  const { team } = useParams();
  const generalManagers = gmHistory[team] || [];

  return (
    <div className="team-card-page">
      <SeasonNavBar 
        year={2025}
        title={team}
        basePath={`/Teams/${team}`}
        showOffensiveStats={false}
        showDefensiveStats={false}
      />
      <main className="team-card-content">
        <section className="team-history-section">
          <div className="team-history-header">
            <h1>{team}</h1>
            <h2>General Manager History</h2>
          </div>

          {generalManagers.length > 0 ? (
            <div className="gm-history-table-wrap">
              <table className="gm-history-table">
                <thead>
                  <tr>
                    <th>GM</th>
                    <th>Tenure</th>
                    <th>Record</th>
                    <th>Titles</th>
                    <th>Awards</th>
                  </tr>
                </thead>
                <tbody>
                  {generalManagers.map((gm) => (
                    <tr key={`${gm.name}-${gm.startYear}`}>
                      <td>{gm.name}</td>
                      <td>{formatTenure(gm)}</td>
                      <td>{gm.record}</td>
                      <td>{gm.titles.length ? gm.titles.join(', ') : '-'}</td>
                      <td>{gm.awards.length ? gm.awards.join(', ') : '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <p className="gm-history-empty">No GM history is available for this team.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default TeamCard;
