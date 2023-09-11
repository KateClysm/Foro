import React from 'react';
import './aside.scss';
import { NavLink } from 'react-router-dom';
import Communities from '../aside-right/communities/Communities';
import communitiesData from '../../data/communitiesData';


const AsideLeft: React.FC = () => {
  return (
    <div className="aside-left">
      <ul className="principal-page">

        <li><NavLink to="/home">Home</NavLink></li>
        <li><a href="#" className='popular-red'>Popular</a></li>

      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <Communities communities={communitiesData} />
      <ul className="topics">
        <NavLink className="link" to="/categories?cat=all">
            <li>All</li>
        </NavLink>
        
        <NavLink className="link" to="/categories?cat=ghosts">
            <li>Ghosts</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=witchcraft">
            <li>Witchcraft</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=demons">
            <li>Demons</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=mythological_oldfolklore">
            <li>Mythological/OldFolklore</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=shadowPeople">
            <li>Shadow People</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=premonitionsAndProphecies">
            <li>Premonitions and Prophecies</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=zombies">
            <li>Zombies</li>
        </NavLink>
        <NavLink className="link" to="/categories?cat=sleepParalysis">
            <li>Sleep Paralysis</li>
        </NavLink>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <ul className="secondary-page">
        <li><NavLink to="/about">About us</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
        <li><NavLink to="/help">Help</NavLink></li>
      </ul>
    </div>
  );
};

export default AsideLeft;