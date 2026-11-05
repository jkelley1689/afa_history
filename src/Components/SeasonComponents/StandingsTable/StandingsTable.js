import React from 'react';
import './StandingsTable.css';

const StandingsTable = ({ data, conferenceOnly = false }) => {
  return (
    <div className="standings-wrapper">
      {data.map(conference => {
        const groups = conferenceOnly
          ? [{ division: conference.conference, teams: conference.divisions.flatMap(division => division.teams) }]
          : conference.divisions;
        const totalRows = groups.reduce(
          (sum, div) => sum + div.teams.length + 2, 0
        );

        const rows = [];

        groups.forEach((division, divIndex) => {
          // Division title row
          rows.push(
            <tr key={`${division.division}-title`} className="division-header-row">
              {divIndex === 0 && (
                <td className={`conference-cell ${conference.conference.toLowerCase()}`} rowSpan={totalRows}>
                  <span>{conference.conference}</span>
                </td>
              )}
              <td colSpan={conferenceOnly ? 10 : 11} className={`division-title-cell ${conference.conference.toLowerCase()}`}>
                {division.division} {conferenceOnly ? 'Conference' : 'Division'}
              </td>
            </tr>
          );

          // Column header row
          rows.push(
            <tr key={`${division.division}-cols`} className="column-header-row">
              <th>Team</th>
              <th>GM</th>
              <th>W</th>
              <th>L</th>
              <th>T</th>
              <th>PF</th>
              <th>PA</th>
              <th>Home</th>
              <th>Away</th>
              <th>Conf</th>
              {!conferenceOnly && <th>Div</th>}
            </tr>
          );

          // Team rows
          division.teams.forEach(team => {
            rows.push(
              <tr key={team.team} className="team-row">
                <td>{team.team}</td>
                <td>{team.gm}</td>
                <td>{team.w}</td>
                <td>{team.l}</td>
                <td>{team.t}</td>
                <td>{team.pf}</td>
                <td>{team.pa}</td>
                <td>{team.home}</td>
                <td>{team.away}</td>
                <td>{team.conf}</td>
                {!conferenceOnly && <td>{team.div}</td>}
              </tr>
            );
          });
        });

        return (
          <table key={conference.conference} className="standings-table" aria-label={`${conference.conference} Conference standings`}>
            <tbody>{rows}</tbody>
          </table>
        );
      })}
    </div>
  );
};

export default StandingsTable;
