import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './CareerSearch.css';

const CareerSearch = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const navigate = useNavigate();

  const handleSearch = () => {
    if (!fName || !lName) return;
    navigate(`/Career/${encodeURIComponent(fName.toUpperCase())}_${encodeURIComponent(lName.toUpperCase())}`);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleSearch();
  };

  return (
    <div className="career-search">
      <h1>Player Search</h1>
      <div className="search-inputs">
        <input
          type="text"
          placeholder="First Name"
          value={fName}
          onChange={e => setFName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lName}
          onChange={e => setLName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
};

export default CareerSearch;