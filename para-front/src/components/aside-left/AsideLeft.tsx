import React from 'react';
import './aside.css';


const AsideLeft: React.FC = () => {
  return (
    <div className="aside-nav">
      <ul className="principal-page">
        <li className="access"><a href="#">Home</a></li>
        <li className="access popular-red"><a href="#">Popular</a></li>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <ul className="topics">
        <li className="access"><a href="#">Ghosts</a></li>
        <li className="access"><a href="#">Witchcraft</a></li>
        <li className="access"><a href="#">Demons</a></li>
        <li className="access"><a href="#">Mythological</a></li>
        <li className="access"><a href="#">Past Life Regression</a></li>
        <li className="access"><a href="#">Shadow People</a></li>
        <li className="access"><a href="#">Fairy Folklore</a></li>
        <li className="access"><a href="#">Premonitions and Prophecies</a></li>
        <li className="access"><a href="#">Zombies</a></li>
        <li className="access"><a href="#">Black Magic</a></li>
        <li className="access"><a href="#">Vudu Magic</a></li>
        <li className="access"><a href="#">Tulpas</a></li>
      </ul>

      <div className="padding-divider">
        <div className="divider"></div>
      </div>

      <ul className="secondary-page">
        <li className="access"><a href="#">About us</a></li>
        <li className="access"><a href="#">Contact</a></li>
        <li className="access"><a href="#">Help</a></li>
      </ul>
    </div>
  );
};

export default AsideLeft;