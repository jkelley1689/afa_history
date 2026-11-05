
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { getTeamForYear } from '../../data/teams';



const SeasonNavBar = ({year, title = 'Season Stats', basePath = '/Seasons', showOffensiveStats = true, showDefensiveStats = true, team}) => {

    const firstYear = getTeamForYear(team)?.startYear ?? 0;
    const years = [2018,2019,2021,2022,2023,2024,2025].filter(value => value >= firstYear)
    const offensiveStats = ["Passing","Rushing","Receiving","Blocking"]
    
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand style={{paddingLeft:10}}>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <NavDropdown title='Year' id='year-stats-dropdown'>
                    {years.map(year => (
                        <NavDropdown.Item key={year} as={Link} to={`${team ? `/Teams/${getTeamForYear(team, year)?.label ?? team}` : basePath}/${year}`}>
                            {year}
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                {showOffensiveStats && (
                        <NavDropdown title='Offensive Stats' id='offensive-stats-dropdown'>
                            {offensiveStats.map(stat => (
                                <NavDropdown.Item key={stat} as={Link} to={`${basePath}/${year}/${stat}`}>
                                    {stat}
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    )}
                {showDefensiveStats && (
                        <Nav.Link as={Link} to={`${basePath}/${year}/Defense`}>
                            Defensive Stats
                        </Nav.Link>
                    )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default SeasonNavBar
