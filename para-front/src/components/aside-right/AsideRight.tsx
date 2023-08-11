import React from 'react';
import './statistics.css';

const AsideRight: React.FC = () => {
  return (
    <div className="container-statistics-and-comunities">
      <div className="comunities">
        <div className="statistic-title">Popular Communities</div>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <div className="comunity-name">Red Witches</div>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <div className="comunity-name">Book of Shadows</div>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <div className="comunity-name">Black Spiders</div>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <div className="comunity-name">Crimson Union</div>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <div className="comunity-name">Ghost Hunters</div>
        </a>
        <a className="show-more-comunities comunity" href="#">
          Show More...
        </a>
      </div>

      <div className="statistic">
        <div className="statistic-title">
          <i className="fa-solid fa-chart-column statistics-icon"></i>
          Online Statistics
        </div>
        <div className="statistic-data">
          <div className="members">Members</div>
          <div className="number">3</div>
        </div>
        <div className="statistic-data">
          <div className="visitors">Visitors</div>
          <div className="number">12</div>
        </div>
      </div>

      <div className="statistic">
        <div className="statistic-title">
          <i className="fa-solid fa-chart-column statistics-icon"></i>
          Forum Statistics
        </div>
        <div className="statistic-data">
          <div className="members">Threads:</div>
          <div className="number">40</div>
        </div>
        <div className="statistic-data">
          <div className="visitors">Messages</div>
          <div className="number">120</div>
        </div>
        <div className="statistic-data">
          <div className="visitors">Members</div>
          <div className="number">15</div>
        </div>
      </div>
    </div>
  );
};

export default AsideRight;