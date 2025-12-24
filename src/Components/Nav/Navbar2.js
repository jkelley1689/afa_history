import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import logo from '../../Images/logo.jpg'


import './Navbar.css'

const Navbar2 = () => {

    const statTypes = ['Passing','Rushing','Receiving','Defensive']
    return (
        <Navbar bg='dark' variant='dark' expand='lg'>
            <Navbar.Brand style={{paddingLeft: 15}}>
                <img src={logo} alt="Logo" height={'auto'} width={'100px'}/> 
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='ms-auto' style={{paddingRight:25}}>
                    <Nav.Link>
                        <Link to={`/`}>
                            Home
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={`/Teams`}>
                            Teams
                        </Link>
                    </Nav.Link>
                    <Nav.Link>
                        <Link to={`/Seasons`}>
                            Seasons
                        </Link>
                    </Nav.Link>
                    <NavDropdown title='All Time Leaders' id='leaders-stats-dropdown'>
                        {statTypes.map(stat => (
                            <NavDropdown.Item>
                                <Link to={`/All-Time-Leaders/${stat}`}>
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

export default Navbar2