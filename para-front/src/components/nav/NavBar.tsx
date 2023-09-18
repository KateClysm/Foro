import React, { useContext, useState } from 'react';
import './nav.scss'
import logoNav from '../../assets/logoNav.png';
import miniLogo from '../../assets/miniLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import Aside from '../aside/Aside';
import { AuthContext } from '../../context/authContext';

const NavBar: React.FC = () => {

    const { currentUser, logout } = useContext(AuthContext);
    const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);
    const toggleNavMenu = () => {
        setIsNavMenuVisible(!isNavMenuVisible);
    };
    return (
        <nav>
            <div className="logo">
                <img src={logoNav} alt="Logo ParaSeekers"/>
            </div>

            <div className="navbar-center"></div>
            
            <button className="nav-toggle" aria-label={isNavMenuVisible ? "Close Menu" : "Open Menu"} onClick={toggleNavMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            

            <div className={`nav-menu ${isNavMenuVisible ? 'nav-menu_visible' : ''}`}>
                {currentUser && (
                    <div className="nav-buttons">
                        <div className="username-container">
                            <img src={miniLogo} alt="Mini Logo ParaSeekers" />

                            <NavLink to="/myprofile"><p>{currentUser?.username}</p></NavLink>
                        </div>
                        <button className="logout-button" onClick={logout}>
                            <NavLink to="/login">Logout</NavLink>
                        </button>
                     </div>
                )}
                <div className="containerAsideInNav">
                    <Aside />
                </div>
            </div>
        </nav>
    );
}

export default NavBar;