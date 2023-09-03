import React from 'react';
// import './aside.css';
import './aside.scss';
import { NavLink } from 'react-router-dom';
import Communities from '../communities/Communities';
import communitiesData from '../../data/communitiesData';


const AsideLeft: React.FC = () => {
  return (
    <div className="aside-left">
      <ul className="principal-page">
        <li><NavLink to="/">Home</NavLink></li>
        <li><a href="#" className='popular-red'>Popular</a></li>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <Communities communities={communitiesData} />
      {/* <ul className="topics">
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
      </ul> */}

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <ul className="secondary-page">
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><a href="#">Help</a></li>
      </ul>
    </div>
  );
};

export default AsideLeft;