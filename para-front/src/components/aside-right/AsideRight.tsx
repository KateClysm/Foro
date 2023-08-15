import React from 'react';
import './statistics.css';

const AsideRight: React.FC = () => {
  return (
    <div className="container-statistics-and-comunities">
      <div className="comunities">
        
        <div className="statistic-title">
        <p className='post-title'>Popular Communities</p></div>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <p className="comunity-name post-text">Red Witches</p>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <p className="comunity-name post-text">Book of Shadows</p>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <p className="comunity-name post-text">Black Spiders</p>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <p className="comunity-name post-text">Crimson Union</p>
        </a>
        <a href="#" className="comunity">
          <div className="comunity-image"></div>
          <p className="comunity-name post-text">Ghost Hunters</p>
        </a>
        <a className="show-more-comunities comunity post-text" href="#">
          Show More...
        </a>
      </div>

      <div className="statistic">
        <div className="statistic-title">
          <i className="fa-solid fa-chart-column statistics-icon"></i>
          <p className='post-title'>Online Statistics</p>
        </div>
        <div className="statistic-data">
          <p className="post-text members">Members</p>
          <p className="post-text number">3</p>
        </div>
        <div className="statistic-data">
          <p className="post-text visitors">Visitors</p>
          <p className="post-text number">12</p>
        </div>
      </div>

      <div className="statistic">
        <div className="statistic-title">
          <i className="fa-solid fa-chart-column statistics-icon"></i>
          <p className='post-title'>Forum Statistics</p>
        </div>
        <div className="statistic-data">
          <p className="post-text members">Threads:</p>
          <p className="post-text number">40</p>
        </div>
        <div className="statistic-data">
          <p className="post-text visitors">Messages</p>
          <p className="post-text number">120</p>
        </div>
        <div className="statistic-data">
          <p className="post-text visitors">Members</p>
          <p className="post-text number">15</p>
        </div>
      </div>
    </div>
  );
};

export default AsideRight;