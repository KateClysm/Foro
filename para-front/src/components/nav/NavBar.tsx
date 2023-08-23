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
                <img src={logoNav} alt="Logo ParaSeekers"/>
            </div>

            <button className="nav-toggle" aria-label={isNavMenuVisible ? "Close Menu" : "Open Menu"} onClick={toggleNavMenu}>
                <FontAwesomeIcon icon={faBars} />
            </button>

            <div className={`nav-menu ${isNavMenuVisible ? 'nav-menu_visible' : ''}`}>

                <div className="container-search-bar">
                    <div className="search-nav">
                        <form action="https://www.google.com/search" method="get" className="search-bar" target="_blank">
                            <input className='post-title' type="text" placeholder="Search Post" name="q" />
                            <button type="submit">
                              <img src={miniLogo} alt="Mini Logo ParaSeekers" />
                            </button>
                        </form>
                    </div>
                </div>

                <div className="nav-buttons">
                    <button className="login post-title">
                        <a href="#">Login</a>
                    </button>
                    <button className="register post-title">
                        <a href="#">Register</a>
                    </button>
                </div>

                <div className="aside-nav">
                    <div className="padding-divider">
                        <div className="divider"></div>
                    </div>

                    <ul className="principal-page">
                        <li><a href="#">Home</a></li>
                        <li><a href="#" className='popular-red'>Popular</a></li>
                    </ul>

                    <div className="padding-divider">
                        <div className="divider"></div>
                    </div>

                    <ul className="topics">
                        <li><a href="#">Ghosts</a></li>
                        <li><a href="#">Witchcraft</a></li>
                        <li><a href="#">Demons</a></li>
                        <li><a href="#">Mythological</a></li>
                        <li><a href="#">Past Life Regression</a></li>
                        <li><a href="#">Shadow People</a></li>
                        <li><a href="#">Fairy Folklore</a></li>
                        <li><a href="#">Premonitions and Prophecies</a></li>
                        <li><a href="#">Zombies</a></li>
                        <li><a href="#">Black Magic</a></li>
                        <li><a href="#">Vudu Magic</a></li>
                        <li><a href="#">Sleep Paralysis</a></li>
                        <li><a href="#">Vampires</a></li>
                    </ul>

                    <div className="padding-divider">
                        <div className="divider"></div>
                    </div>

                    <ul className="secondary-page">
                        <li><a href="#">About us</a></li>
                        <li><a href="#">Contact</a></li>
                        <li><a href="#">Help</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;