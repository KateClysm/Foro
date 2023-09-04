import React from 'react';
import './statistics.css';
import Communities from '../communities/Communities';
import communitiesData from '../../data/communitiesData';

const AsideRight: React.FC = () => {
  return (
    <div className="container-statistics-and-comunities">
      
      <Communities communities={communitiesData} />

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