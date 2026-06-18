import React from 'react';
import './StandingsTable.css';

const StandingsTable = ({ data }) => {
  return (
    <div className="standings-wrapper">
      {data.map(conference => {
        const totalRows = conference.divisions.reduce(
          (sum, div) => sum + div.teams.length + 2, 0
        );

        const rows = [];

        conference.divisions.forEach((division, divIndex) => {
          // Division title row
          rows.push(
            <tr key={`${division.division}-title`} className="division-header-row">
              {divIndex === 0 && (
                <td className={`conference-cell ${conference.conference.toLowerCase()}`} rowSpan={totalRows}>
                  <span>{conference.conference}</span>
                </td>
              )}
              <td colSpan={11} className={`division-title-cell ${conference.conference.toLowerCase()}`}>
                {division.division} Division
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
              <th>Div</th>
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
                <td>{team.div}</td>
              </tr>
            );
          });
        });

        return (
          <table key={conference.conference} className="standings-table">
            <tbody>{rows}</tbody>
          </table>
        );
      })}
    </div>
  );
};

export default StandingsTable;