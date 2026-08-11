import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { generateClient } from 'aws-amplify/api';
import { normalizePlayerName, searchPlayersByName } from './playerSearch';
import './CareerSearch.css';

const client = generateClient();

const CareerSearch = () => {
  const [fName, setFName] = useState('');
  const [lName, setLName] = useState('');
  const [matches, setMatches] = useState(null);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const openCareer = (firstName, lastName) => {
    navigate(`/Career/${encodeURIComponent(firstName)}_${encodeURIComponent(lastName)}`);
  };

  const handleSearch = async () => {
    const firstName = normalizePlayerName(fName);
    const lastName = normalizePlayerName(lName);

    setMessage('');

    if (!firstName && !lastName) {
      setMatches(null);
      setMessage('Enter a first name, a last name, or both.');
      return;
    }

    if (firstName && lastName) {
      openCareer(firstName, lastName);
      return;
    }

    setLoading(true);
    setMatches(null);

    try {
      const results = await searchPlayersByName(client, firstName, lastName);
      setMatches(results);
      if (!results.length) {
        setMessage(`No players found matching ${firstName || lastName}.`);
      }
    } catch (error) {
      console.error('Failed to search players:', error);
      setMessage('Player search failed. Please try again.');
    } finally {
      setLoading(false);
    }
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
          aria-label="First name"
          value={fName}
          onChange={e => setFName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <input
          type="text"
          placeholder="Last Name"
          aria-label="Last name"
          value={lName}
          onChange={e => setLName(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch} disabled={loading}>
          {loading ? 'Searching…' : 'Search'}
        </button>
      </div>
      {message && <p className="search-message" role="status">{message}</p>}
      {matches && matches.length > 0 && (
        <div className="search-results" aria-live="polite">
          <h2>{matches.length} {matches.length === 1 ? 'player' : 'players'} found</h2>
          <div className="search-result-list">
            {matches.map(player => (
              <button
                className="search-result"
                key={`${player.fName}-${player.lName}`}
                onClick={() => openCareer(player.fName, player.lName)}
              >
                <span>{player.fName} {player.lName}</span>
                <small>{[player.position, player.team].filter(Boolean).join(' · ')}</small>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default CareerSearch;