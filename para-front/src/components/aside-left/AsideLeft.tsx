import React from 'react';
import './aside.css';


const AsideLeft: React.FC = () => {
  return (
    <div className="aside-left">
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
  );
};

export default AsideLeft;