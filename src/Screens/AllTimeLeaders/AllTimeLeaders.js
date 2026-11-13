import React, { useMemo } from 'react';
import { useParams } from 'react-router-dom';
import allTimeStats from './AllTimeLeadersStats';
import './AllTimeLeaders.css'
import Table from '../../Components/SVComponents/Table';




const AllTimeLeaders = ({ statType: statTypeOverride }) => {

  const { statType: routeStatType } = useParams()
  const statType = statTypeOverride || routeStatType

  const statCategory = useMemo(() => {
    if (!statType) return null;

    // lowercase + remove spaces to match keys
    const keyMap = {
      Passing: 'passingLeaders',
      Rushing: 'rushingLeaders',
      Receiving: 'receivingLeaders',
      Defensive: 'defensiveLeaders',
    };

    return allTimeStats[keyMap[statType]] || null;
  }, [statType]);
  const generateColumns = (statGroupData) => {
    if (!Array.isArray(statGroupData) || statGroupData.length === 0) return [];
    const sampleRow = statGroupData[0];
    return Object.keys(sampleRow).map((key) => ({
      Header: key.charAt(0).toUpperCase() + key.slice(1),
      accessor: key,
    }));
  }

  if (!statCategory) return <div>No stats found for {statType}</div>;



  return (
    <div>
      {statType === 'Passing' && <p className="all-time-note">From 2005: Minimum of 1000, attempts for efficiency records.</p>}
      {statType === 'Rushing' && <p className="all-time-note">From 2005: Minimum of 500 carries for efficiency records. Some historical stats are incomplete.</p>}
      {statType === 'Receiving' && <p className="all-time-note">From 2015: Minimum of 250 catches for efficiency records. Some historical stats are incomplete.</p>}
      <div className="all-time-leaders">
        {Object.keys(statCategory).map((statGroup) => {
          const data = statCategory[statGroup];
          const columns = generateColumns(data);

          return (
            <section key={statGroup} className="stat-section">
              <div className="all-time-record-heading">
                <span className="record-eyebrow">Career leaders</span>
                <h2 className="stat-header">
                  {statGroup.replace(/([A-Z])/g, ' $1').toUpperCase()}
                </h2>
              </div>
              <Table columns={columns} data={data} />
            </section>
          );
        })}
      </div>
    </div>
  );
}

export default AllTimeLeaders
