import React from 'react';
import { useParams } from 'react-router-dom';
import SeasonNavBar from '../../Components/SeasonNavBar/SeasonNavBar';
import { getTeamHistory } from './teamHistory';
import { getTeamForYear, isHighlandersFranchise } from '../../data/teams';
import './TeamCard.css';

const formatTenure = ({ startYear, endYear }) => (
  endYear ? `${startYear}-${endYear}` : `${startYear}-Present`
);

const TeamCard = () => {
  const { team: routeTeam } = useParams();
  const team = getTeamForYear(routeTeam)?.label ?? routeTeam;
  const generalManagers = getTeamHistory(team);
  const relocated = isHighlandersFranchise(team);
  const historySections = relocated ? [
    { team: 'Detroit Griffins', period: '2005-2024', managers: generalManagers.filter(gm => gm.endYear && gm.endYear <= 2024) },
    { team: 'Glasgow Highlanders', period: '2025-Present', managers: generalManagers.filter(gm => gm.startYear >= 2025) },
  ] : [{ team, managers: generalManagers }];

  return (
    <div className="team-card-page">
      <SeasonNavBar 
        year={2025}
        title={team}
        team={team}
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
          {relocated && (
            <p className="franchise-history-note">
              Formerly the Detroit Griffins. The franchise became the Glasgow Highlanders in 2025.
            </p>
          )}

          {generalManagers.length > 0 ? (
            historySections.map(section => (
              <section key={section.team} className="franchise-history-era" aria-label={`${section.team} GM history`}>
                {relocated && (
                  <div className="franchise-era-header">
                    <h3>{section.team}</h3>
                    <span>{section.period}</span>
                  </div>
                )}
              <div className="gm-history-table-wrap">
                <table className="gm-history-table" aria-label={`${section.team} general managers`}>
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
                    {section.managers.map((gm) => (
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
              </section>
            ))
          ) : (
            <p className="gm-history-empty">No GM history is available for this team.</p>
          )}
        </section>
      </main>
    </div>
  );
};

export default TeamCard;
