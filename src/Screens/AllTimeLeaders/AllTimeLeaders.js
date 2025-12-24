import React, { useEffect, useState, useMemo } from 'react';
import { useParams } from 'react-router-dom';
import allTimeStats from './AllTimeLeadersStats';
import './AllTimeLeaders.css'
import Table from '../../Components/SVComponents/Table';




const AllTimeLeaders = () => {

    const {statType} = useParams()
    let columns
    let data
    //const [columns, setColumns] = useState()
    //const [data, setData] = useState()

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
      {statType === 'Passing' && <p>**Minimum of 1500 attempts**</p>}
      {statType === 'Rushing' && <p>**Minimum of 500 carries** **Some historical stats are missing**</p>}
    <div className="all-time-leaders">
      {Object.keys(statCategory).map((statGroup) => {
        const data = statCategory[statGroup];
        const columns = generateColumns(data);

        return (
            <div key={statGroup} className="stat-section">
              <h2 className="stat-header">
                {statGroup.replace(/([A-Z])/g, ' $1').toUpperCase()}
              </h2>
              <Table columns={columns} data={data} />
            </div>
        );
      })}
    </div>
    </div>
  );
}

export default AllTimeLeaders