
import { Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom';



const SeasonNavBar = ({year}) => {

    const years = [2018,2019,2021,2022,2023]
    const offensiveStats = ["Passing","Rushing","Receiving"]
    const defensiveStats = ["Tackles", "TFLs","Sacks","Ints"]
    
  return (
    <Navbar bg='light' expand='lg'>
        <Navbar.Brand>Season Stats</Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav'/>
        <Navbar.Collapse id='basic-navbar-nav'>
            <Nav className='mr-auto'>
                <NavDropdown title='Year' id='offensive-stats-dropdown'>
                    {years.map(year => (
                        <NavDropdown.Item>
                            <Link to={`/Seasons/${year}`}>
                                {year}
                            </Link>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <NavDropdown title='Offensive Stats' id='offensive-stats-dropdown'>
                    {offensiveStats.map(stat => (
                        <NavDropdown.Item>
                            <Link to={`/Seasons/${year}/${stat}`}>
                                {stat}
                            </Link>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
                <NavDropdown title='Defensive Stats' id='defensive-stats-dropdown'>
                {defensiveStats.map(stat => (
                        <NavDropdown.Item>
                            <Link to={`${stat}`}>
                                {stat}
                            </Link>
                        </NavDropdown.Item>
                    ))}
                </NavDropdown>
            </Nav>
        </Navbar.Collapse>
    </Navbar>
  )
}

export default SeasonNavBar