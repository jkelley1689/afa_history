import React, { useEffect, useRef, useState } from 'react';
import { generateClient } from 'aws-amplify/api';
import Table from '../../Components/SVComponents/Table';
import { buildDefensiveRecords, defensiveCoverage, loadDefensiveSeasons } from './defensiveRecords';

const client = generateClient();
const careerColumns = [
  { Header: 'Player', accessor: 'name' },
  { Header: 'Total', accessor: 'stat' },
];
const statFormat = new Intl.NumberFormat('en-US');

const DefensiveSeasonTable = ({ records }) => (
  <div className="season-record-table-wrap">
    <table className="season-record-table" aria-labelledby="defensive-records-title">
      <thead>
        <tr>
          <th scope="col">Record</th>
          <th scope="col">Player</th>
          <th scope="col">Team</th>
          <th scope="col">Year</th>
          <th scope="col" className="record-value-heading">Stat</th>
        </tr>
      </thead>
      <tbody>
        {records.map(({ id, label, name, team, year, stat }) => (
          <tr key={id}>
            <td className="record-label-cell">{label}</td>
            <td className="record-player-name">{name}</td>
            <td>{team}</td>
            <td>{year}</td>
            <td className="record-value">{statFormat.format(stat)}</td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

const DefensiveRecordsView = ({ isAllTime }) => {
  const request = useRef(null);
  const [records, setRecords] = useState(null);
  const [failed, setFailed] = useState(false);

  useEffect(() => {
    let active = true;
    request.current ??= loadDefensiveSeasons(client).then(buildDefensiveRecords);
    request.current.then(
      result => { if (active) setRecords(result); },
      () => { if (active) setFailed(true); },
    );

    return () => { active = false; };
  }, []);

  const hasRecords = records?.seasonRecords.length > 0;
  const deflectionYears = records?.incompleteDeflectionYears;

  return (
    <section className="season-record-section defensive-records" aria-labelledby="defensive-records-title">
      <div className="season-record-heading">
        <div>
          <span className="record-eyebrow">{isAllTime ? 'Career leaders' : 'Single-season records'}</span>
          <h2 id="defensive-records-title">Defensive Players</h2>
        </div>
        <span className="defensive-coverage">Available stats · {defensiveCoverage}</span>
      </div>
      {failed ? (
        <p className="defensive-records-message" role="alert">Unable to load defensive records.</p>
      ) : !records ? (
        <p className="defensive-records-message" role="status">Loading defensive records…</p>
      ) : !hasRecords ? (
        <p className="defensive-records-message">No defensive stats are available for this period.</p>
      ) : (
        <>
          {deflectionYears.length > 0 && (
            <p className="defensive-records-message">
              Pass deflection data is incomplete for {deflectionYears.join(', ')}.
            </p>
          )}
          {isAllTime ? (
            <div className="all-time-leaders defensive-career-leaders">
              {records.careerLeaders.map(({ id, label, leaders }) => (
                <section key={id} className="stat-section">
                  <div className="all-time-record-heading">
                    <h3 className="stat-header">{label}</h3>
                  </div>
                  <Table columns={careerColumns} data={leaders} />
                </section>
              ))}
            </div>
          ) : <DefensiveSeasonTable records={records.seasonRecords} />}
        </>
      )}
    </section>
  );
};

export default DefensiveRecordsView;
