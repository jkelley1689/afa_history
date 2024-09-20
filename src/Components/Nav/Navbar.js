import React, {useEffect, useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.jpg'


import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    
    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt='logo'/>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{color: '#ffffff'}} />) : (<FaBars size={30} style={{color: '#ffffff'}} />)}
                </div>
                <ul style={{listStyleType:'none'}} className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/Home' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Teams' onClick={closeMenu}>Teams</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Seasons' onClick={closeMenu}>Seasons</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Leaders' onClick={closeMenu}>Leaders</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar