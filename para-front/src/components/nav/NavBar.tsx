import React, { useState } from 'react';
// import './navBar.css';
import './nav.scss'
import logoNav from '../../assets/logoNav.png';
import miniLogo from '../../assets/miniLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Aside from '../aside/Aside';

const NavBar: React.FC = () => {
    const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
    const toggleNavMenu = () => {
        setIsNavMenuVisible(!isNavMenuVisible);
    };
    return (
        <nav>
            <div className="logo">
                <img src={logoNav} alt="Logo ParaSeekers"/>
            </div>

            <button className="nav-toggle" aria-label={isNavMenuVisible ? "Close Menu" : "Open Menu"} onClick={toggleNavMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`nav-menu ${isNavMenuVisible ? 'nav-menu_visible' : ''}`}>

                <div className="container-search-bar">
                    <div className="search-nav">
                        <form action="https://www.google.com/search" method="get" className="search-bar" target="_blank">
                            <input className='search' type="text" placeholder="Search Post" name="q" />
                            <button type="submit">
                              <img src={miniLogo} alt="Mini Logo ParaSeekers" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="nav-buttons">
                    <button className="login-button ">
                        <NavLink to="/login">Login</NavLink>
                    </button>
                    <button className="register-button ">
                        <NavLink to="/register">Register</NavLink>
                    </button>
                </div>

                <div className="containerAsideInNav">
                    <Aside />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;