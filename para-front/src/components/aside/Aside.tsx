import React from 'react';
// import './aside.css';
import './aside.scss';
import { Link, NavLink } from 'react-router-dom';
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

      {/* testing */}
      <ul className="topics">
      <Link className="link" to="/">
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
        <Link className="link" to="/?cat=mythological">
            <li>Mythological</li>
        </Link>
        <Link className="link" to="/?cat=pastLifeRegression">
            <li>Past Life Regression</li>
        </Link>
        <Link className="link" to="/?cat=shadowPeople">
            <li>Shadow People</li>
        </Link>
        <Link className="link" to="/?cat=fairyFolklore">
            <li>Fairy Folklore</li>
        </Link>
        <Link className="link" to="/?cat=premonitionsAndProphecies">
            <li>Premonitions and Prophecies</li>
        </Link>
        <Link className="link" to="/?cat=zombies">
            <li>Zombies</li>
        </Link>
        <Link className="link" to="/?cat=blackMagic">
            <li>Black Magic</li>
        </Link>
        <Link className="link" to="/?cat=vuduMagic">
            <li>Vudu Magic</li>
        </Link>
        <Link className="link" to="/?cat=sleepParalysis">
            <li>Sleep Paralysis</li>
        </Link>
        <Link className="link" to="/?cat=vampires">
            <li>Vampires</li>
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