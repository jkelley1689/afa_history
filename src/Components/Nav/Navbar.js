import React, { useEffect, useState } from 'react'
import { FaBars, FaTimes } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import logo from '../../Images/logo.jpg'


import './Navbar.css'


const Navbar = () => {
    const [click, setClick] = useState(false)
    const [dropDownOpen, setDropDownOpen] = useState(false)

    const handleClick = () => setClick(!click)
    const closeMenu = () => setClick(false)
    const toggleDropDown = () => setDropDownOpen(!dropDownOpen)
    const closeDropDown = () => setDropDownOpen(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <img src={logo} alt='logo' />
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />) : (<FaBars size={30} style={{ color: '#ffffff' }} />)}
                </div>
                <ul style={{ listStyleType: 'none' }} className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <Link to='/' onClick={closeMenu}>Home</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Teams' onClick={closeMenu}>Teams</Link>
                    </li>
                    <li className='nav-item'>
                        <Link to='/Seasons' onClick={closeMenu}>Seasons</Link>
                    </li>
                    <li className='nav-item' onMouseEnter={() => setDropDownOpen(true)} onMouseLeave={closeDropDown}>
                        <span className='dropdown-toggle' onClick={toggleDropDown}>
                            All Time Leaders
                        </span>
                        {dropDownOpen && (
                            <ul>
                                <li>
                                    <Link to='/All-Time-Leaders/Passing' onClick={closeMenu}>Passing Leaders</Link>
                                </li>
                                <li>
                                    <Link to='/All-Time-Leaders/Rushing' onClick={closeMenu}>Rushing Leaders</Link>
                                </li>
                                <li>
                                    <Link to='/All-Time-Leaders/Receiving' onClick={closeMenu}>Receiving Leaders</Link>
                                </li>
                                <li>
                                    <Link to='/All-Time-Leaders/Defensive' onClick={closeMenu}>Defensive Leaders</Link>
                                </li>
                            </ul>
                        )}
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar