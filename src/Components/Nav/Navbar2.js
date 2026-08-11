import { Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Link, NavLink } from 'react-router-dom'

import logo from '../../Images/logo.jpg'

import './Navbar.css'

const Navbar2 = () => {

    const statTypes = ['Passing','Rushing','Receiving','Defensive']
    return (
        <Navbar className='afa-navbar' expand='lg'>
            <Navbar.Brand as={Link} to='/' className='afa-navbar-brand'>
                <img src={logo} alt="AFA History" />
                <span>
                    <strong>AFA History</strong>
                    <small>League archive</small>
                </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls='basic-navbar-nav' />
            <Navbar.Collapse id='basic-navbar-nav'>
                <Nav className='afa-navbar-links ms-auto'>
                    <Nav.Link as={NavLink} to='/' end>Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/Teams'>Teams</Nav.Link>
                    <Nav.Link as={NavLink} to='/Seasons'>Seasons</Nav.Link>
                    <Nav.Link as={NavLink} to='/CareerSearch'>Player Search</Nav.Link>
                    <NavDropdown title='All Time Leaders' id='leaders-stats-dropdown' align='end'>
                        {statTypes.map(stat => (
                            <NavDropdown.Item as={Link} to={`/All-Time-Leaders/${stat}`} key={stat}>
                                {stat}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    )
}

export default Navbar2