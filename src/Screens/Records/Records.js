import React from 'react';
import { NavLink, Navigate, useParams } from 'react-router-dom';
import AllTimeLeaders from '../AllTimeLeaders/AllTimeLeaders';
import SeasonRecordsView from './SeasonRecordsView';
import './Records.css';

const statTypes = ['Passing', 'Rushing', 'Receiving', 'Defensive'];

const Records = () => {
  const { recordType, statType } = useParams();
  const activeRecordType = recordType || 'All-Time';
  const activeStatType = statType || 'Passing';

  if (!recordType) return <Navigate to="/Records/All-Time/Passing" replace />;
  if (!['All-Time', 'Season'].includes(activeRecordType)) return <Navigate to="/Records/All-Time/Passing" replace />;
  if (activeRecordType === 'All-Time' && !statTypes.includes(activeStatType)) {
    return <Navigate to="/Records/All-Time/Passing" replace />;
  }

  const isAllTime = activeRecordType === 'All-Time';

  return (
    <main className="records-page">
      <header className="records-hero">
        <span className="records-kicker">AFA record book</span>
        <h1>Records</h1>
        <p>Career leaders and the greatest individual seasons in league history.</p>
      </header>

      <nav className="records-tabs" aria-label="Record views">
        <NavLink
          to={`/Records/All-Time/${isAllTime ? activeStatType : 'Passing'}`}
          className={({ isActive }) => `records-tab ${isActive ? 'records-tab--active' : ''}`}
        >
          All-Time Stats
        </NavLink>
        <NavLink
          to="/Records/Season"
          className={({ isActive }) => `records-tab ${isActive ? 'records-tab--active' : ''}`}
        >
          Season Records
        </NavLink>
      </nav>

      <div className="records-content">
        {isAllTime ? (
          <>
            <nav className="record-category-tabs" aria-label="All-time stat categories">
              {statTypes.map((type) => (
                <NavLink
                  key={type}
                  to={`/Records/All-Time/${type}`}
                  className={({ isActive }) => `record-category-tab ${isActive ? 'record-category-tab--active' : ''}`}
                >
                  {type}
                </NavLink>
              ))}
            </nav>
            <AllTimeLeaders statType={activeStatType} />
          </>
        ) : <SeasonRecordsView />}
      </div>
    </main>
  );
};

export default Records;
