import React from 'react';
import './aside.scss';
import { Link, NavLink } from 'react-router-dom';
import Communities from '../communities/Communities';
import communitiesData from '../../data/communitiesData';


const AsideLeft: React.FC = () => {
  return (
    <div className="aside-left">
      <ul className="principal-page">
        {/* <li><NavLink to="/">Home</NavLink></li> */}
        {/* <Link className="link" to="/?cat=all">
            <li>Homepage</li>
        </Link> */}
        <li><NavLink to="/?cat=home">Home</NavLink></li>

        <li><a href="#" className='popular-red'>Popular</a></li>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <Communities communities={communitiesData} />
      <ul className="topics">
      <Link className="link" to="/?cat=all">
            <li>All</li>
        </Link>
        
        <Link className="link" to="/?cat=ghosts">
            <li>Ghosts</li>
        </Link>
        <Link className="link" to="/?cat=witchcraft">
            <li>Witchcraft</li>
        </Link>
        <Link className="link" to="/?cat=demons">
            <li>Demons</li>
        </Link>
        <Link className="link" to="/?cat=mythological_oldfolklore">
            <li>Mythological/OldFolklore</li>
        </Link>
        <Link className="link" to="/?cat=shadowPeople">
            <li>Shadow People</li>
        </Link>
        <Link className="link" to="/?cat=premonitionsAndProphecies">
            <li>Premonitions and Prophecies</li>
        </Link>
        <Link className="link" to="/?cat=zombies">
            <li>Zombies</li>
        </Link>
        <Link className="link" to="/?cat=sleepParalysis">
            <li>Sleep Paralysis</li>
        </Link>
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