import React from 'react';
import './aside.scss';
import { NavLink } from 'react-router-dom';


const AsideLeft: React.FC = () => {

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
  };

  return (
    <div className="aside-left">
      <ul className="principal-page">

      <NavLink to="/" onClick={scrollToTop}><li>Home</li></NavLink>

      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      
      <ul className="topics">
        <NavLink className="link" to="/?cat=all" onClick={scrollToTop}>
            <li>All</li>
        </NavLink>
        
        <NavLink className="link" to="/?cat=ghosts" onClick={scrollToTop}>
            <li>Ghosts</li>
        </NavLink>
        <NavLink className="link" to="/?cat=witchcraft" onClick={scrollToTop}>
            <li>Witchcraft</li>
        </NavLink>
        <NavLink className="link" to="/?cat=demons" onClick={scrollToTop}>
            <li>Demons</li>
        </NavLink>
        <NavLink className="link" to="/?cat=mythological_oldfolklore" onClick={scrollToTop}>
            <li>Mythological/OldFolklore</li>
        </NavLink>
        <NavLink className="link" to="/?cat=shadowPeople" onClick={scrollToTop}>
            <li>Shadow People</li>
        </NavLink>
        <NavLink className="link" to="/?cat=premonitionsAndProphecies" onClick={scrollToTop}>
            <li>Premonitions and Prophecies</li>
        </NavLink>
        <NavLink className="link" to="/?cat=zombies" onClick={scrollToTop}>
            <li>Zombies</li>
        </NavLink>
        <NavLink className="link" to="/?cat=sleepParalysis" onClick={scrollToTop}>
            <li>Sleep Paralysis</li>
        </NavLink>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <ul className="secondary-page">
      <NavLink to="/about" onClick={scrollToTop}>
        <li>About us</li>
        </NavLink>
      <NavLink to="/contact" onClick={scrollToTop}>
        <li>Contact</li>
        </NavLink>
      <NavLink to="/help" onClick={scrollToTop}>
        <li>Help</li>
        </NavLink>
      </ul>
    </div>
  );
};

export default AsideLeft;