
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SeasonNavBar = ({year, title = 'Season Stats', basePath = '/Seasons', showOffensiveStats = true, showDefensiveStats = true}) => {

    const years = [2018,2019,2021,2022,2023,2024]
    const offensiveStats = ["Passing","Rushing","Receiving","Blocking"]
    
  return (
    <Navbar bg='dark' variant='dark' expand='lg'>
        <Navbar.Brand style={{paddingLeft:10}}>{title}</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <NavDropdown title='Year' id='year-stats-dropdown'>
                    {years.map(year => (
                        <NavDropdown.Item key={year}>
                            <Link to={`${basePath}/${year}`}>
                                    {year}
                            </Link>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                {showOffensiveStats && (
                        <NavDropdown title='Offensive Stats' id='offensive-stats-dropdown'>
                            {offensiveStats.map(stat => (
                                <NavDropdown.Item key={stat}>
                                    <Link to={`${basePath}/${year}/${stat}`}>
                                        {stat}
                                    </Link>
                                </NavDropdown.Item>
                            ))}
                        </NavDropdown>
                    )}
                {showDefensiveStats && (
                        <Nav.Link>
                            <Link to={`${basePath}/${year}/Defense`}>
                                Defensive Stats
                            </Link>
                        </Nav.Link>
                    )}
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default SeasonNavBar