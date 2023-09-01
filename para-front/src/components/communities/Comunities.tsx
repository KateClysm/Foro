import React from 'react';
import './comunities.css';
import { ICommunity } from '../../models/ICommunities';

const Communities: React.FC<{communities : ICommunity[]}> = ({ communities }) => {

  return (
    <div className="container-communities">
      <div className="comunities">
        
        <p className='statistic-title title'>Popular Communities</p>

        {communities.map((community, index) => (
        <a href={community.link} className="comunity" key={index}>
          <div className="comunity-image" style={{ backgroundImage: `url(${community.image})` }}></div>
          <p className="comunity-name">{community.name}</p>
        </a>
        ))}
      <a className="show-more-comunities comunity" href="#">
          Show More...
        </a>
      </div>
    </div>
  );
};

export default Communities;