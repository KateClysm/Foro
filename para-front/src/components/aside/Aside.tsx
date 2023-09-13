import React from 'react';
import './aside.scss';
import { NavLink } from 'react-router-dom';


const AsideLeft: React.FC = () => {
  return (
    <div className="aside-left">
      <ul className="principal-page">
          <NavLink to="/"><li className='home-hover'>Home</li></NavLink>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>
      
      <ul className="topics">
        <NavLink className="link" to="/?cat=all">
            <li>All</li>
        </NavLink>
        
        <NavLink className="link" to="/?cat=ghosts">
            <li>Ghosts</li>
        </NavLink>
        <NavLink className="link" to="/?cat=witchcraft">
            <li>Witchcraft</li>
        </NavLink>
        <NavLink className="link" to="/?cat=demons">
            <li>Demons</li>
        </NavLink>
        <NavLink className="link" to="/?cat=mythological_oldfolklore">
            <li>Mythological/OldFolklore</li>
        </NavLink>
        <NavLink className="link" to="/?cat=shadowPeople">
            <li>Shadow People</li>
        </NavLink>
        <NavLink className="link" to="/?cat=premonitionsAndProphecies">
            <li>Premonitions and Prophecies</li>
        </NavLink>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <ul className="secondary-page">
        <NavLink to="/about"><li>About us</li></NavLink>
        <NavLink to="/contact"><li>Contact</li></NavLink>
        <NavLink to="/help"><li>Help</li></NavLink>
      </ul>
    </div>
  );
};

export default AsideLeft;