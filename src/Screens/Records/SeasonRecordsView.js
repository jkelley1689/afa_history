import React from 'react';
import seasonRecords from './SeasonRecordsStats.json';
import './SeasonRecordsView.css';

const formatStat = ({ stat, decimals = 0, suffix = '' }) => {
  const formattedValue = new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(stat);

  return `${formattedValue}${suffix}`;
};

const SeasonRecordsView = () => (
  <div className="season-record-groups">
    {seasonRecords.groups.map((group) => (
      <section className="season-record-section" key={group.id}>
        <div className="season-record-heading">
          <div>
            <span className="record-eyebrow">Single-season records</span>
            <h2>{group.label}</h2>
          </div>
          <span className="record-qualifier">{group.qualifier}</span>
        </div>

        <div className="season-record-table-wrap">
          <table className="season-record-table">
            <thead>
              <tr>
                <th>Record</th>
                <th>Name</th>
                <th>Team</th>
                <th>Year</th>
                <th className="record-value-heading">Stat</th>
              </tr>
            </thead>
            <tbody>
              {group.records.map((record) => (
                <tr key={record.id}>
                  <td className="record-label-cell">{record.label}</td>
                  <td className="record-player-name">{record.name}</td>
                  <td>{record.team}</td>
                  <td>{record.year}</td>
                  <td className="record-value">{formatStat(record)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    ))}
  </div>
);

export default SeasonRecordsView;
