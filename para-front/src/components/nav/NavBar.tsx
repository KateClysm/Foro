import React, { useState } from 'react';
import './navBar.css';
import logoNav from '../../assets/logoNav.png';
import miniLogo from '../../assets/miniLogo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';


const NavBar: React.FC = () => {
    const [isNavMenuVisible, setIsNavMenuVisible] = useState(false);

    const toggleNavMenu = () => {
        setIsNavMenuVisible(!isNavMenuVisible);
    };
  
    return (
        <nav>
            <div className="logo">
            <img src={logoNav} alt="Logo ParaSeekers" />
            </div>

            <button className="nav-toggle" aria-label={isNavMenuVisible ? "Close Menu" : "Open Menu"} onClick={toggleNavMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`nav-menu ${isNavMenuVisible ? 'nav-menu_visible' : ''}`}>
                <div className="container-search-bar">
                    <div className="search-nav">
                        <form action="https://www.google.com/search" method="get" className="search-bar" target="_blank">
                            <input type="text" placeholder="Search Post" name="q" />
                            <button type="submit">
                            <img src={miniLogo} alt="Mini Logo ParaSeekers" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="nav-buttons">
                    <button className="login">
                        <a href="#">Login</a>
                    </button>
                    <button className="register">
                        <a href="#">Register</a>
                    </button>
                </div>

                <div className="aside-nav-mobile">
                    <div className="padding-divider">
                        <div className="divider"></div>
                    </div>

                    <ul className="principal-page">
                        <li className="access">Home</li>
                        <li className="access popular-red">Popular</li>
                    </ul>

                    <div className="padding-divider">
                        <div className="divider"></div>
                    </div>

                    <ul className="topics">
                        <li className="access">Ghosts</li>
                        <li className="access">Witchcraft</li>
                        <li className="access">Demons</li>
                        <li className="access">Mythological</li>
                        <li className="access">Past Life Regression</li>
                        <li className="access">Shadow People</li>
                        <li className="access">Fairy Folklore</li>
                        <li className="access">Premonitions and Prophecies</li>
                        <li className="access">Zombies</li>
                        <li className="access">Black Magic</li>
                        <li className="access">Vudu Magic</li>
                        <li className="access">Tulpas</li>
                    </ul>

                    <div className="padding-divider">
                        <div className="divider"></div>
                    </div>

                    <ul className="secondary-page">
                        <li className="access">About us</li>
                        <li className="access">Contact</li>
                        <li className="access">Help</li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;