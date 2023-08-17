import React from 'react';
import './comunities.css';
import { ICommunity } from '../../models/ICommunities';

const Communities: React.FC<{communities : ICommunity[]}> = ({ communities }) => {

  return (
    <div className="comunities">
        
        <div className="statistic-title">
        <p className='post-title'>Popular Communities</p></div>

        {communities.map((community, index) => (
        <a href={community.link} className="comunity" key={index}>
          <div className="comunity-image" style={{ backgroundImage: `url(${community.image})` }}></div>
          <p className="comunity-name post-text">{community.name}</p>
        </a>
        ))}
      <a className="show-more-comunities comunity post-text" href="#">
          Show More...
        </a>
      </div>
  );
};

export default Communities;