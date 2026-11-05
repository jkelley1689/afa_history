const historicalDetroit = { value: 'Det', label: 'Detroit Griffins' };
const glasgowHighlanders = { value: 'Glg', label: 'Glasgow Highlanders' };

export const teams = [
  { value: 'Wsh', label: 'Washington Americans' },
  { value: 'Alb', label: 'Albuquerque Arrows' },
  { value: 'Tul', label: 'Tulsa Bandits' },
  { value: 'Prt', label: 'Portland Barons' },
  { value: 'Bir', label: 'Birmingham Boars' },
  { value: 'Brc', label: 'Barcelona Bulls' },
  { value: 'SLC', label: 'Salt Lake City Comets' },
  { value: 'SD', label: 'San Diego Corsairs' },
  { value: 'Chi', label: 'Chicago Demons' },
  { value: 'Clm', label: 'Columbus Explorers' },
  { value: 'SJ', label: 'San Jose Frenzy' },
  { value: 'Orl', label: 'Orlando Gales' },
  glasgowHighlanders,
  { value: 'Hrt', label: 'Hartford Hellions' },
  { value: 'NY', label: 'New York Intimidators' },
  { value: 'Frk', label: 'Frankfurt Macht' },
  { value: 'Sac', label: 'Sacramento Owls' },
  { value: 'Lon', label: 'London Reapers' },
  { value: 'SA', label: 'San Antonio Scorpions' },
  { value: 'StL', label: 'St.Louis Sentinels' },
  { value: 'Haw', label: 'Hawaii Sharks' },
  { value: 'Lou', label: 'Louisville Stallions' },
  { value: 'Dub', label: 'Dublin Wolfhounds' },
  { value: 'Mem', label: 'Memphis Wolves' },
  { value: 'Tor', label: 'Toronto Tundra', startYear: 2025 },
  { value: 'Van', label: 'Vancouver WhiskeyJacks', startYear: 2025 },
  { value: 'Dus', label: 'Dusseldorf Drache', startYear: 2025 },
  { value: 'Cal', label: 'Calgary Outlaws', startYear: 2025 },
].sort((a, b) => a.label.localeCompare(b.label));

// Accept both the historical URL (including its old typo) and the new identity.
export const isHighlandersFranchise = team => [
  'Detroit Griffins', 'Detriot Griffins', 'Glasgow Highlanders', 'Glasglow Highlanders',
  'Det', 'Glg', 'Gla',
].includes(team);

export const getTeamForYear = (team, year = 2025) => {
  if (isHighlandersFranchise(team)) {
    return Number(year) < 2025
      ? historicalDetroit
      : glasgowHighlanders;
  }
  return teams.find(item => item.label === team || item.value === team);
};

export const getTeamsForYear = (year = 2025) => teams
  .filter(team => !team.startYear || Number(year) >= team.startYear)
  .map(team => getTeamForYear(team.label, year))
  .sort((a, b) => a.label.localeCompare(b.label));
