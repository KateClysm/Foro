import React from 'react';
import './communities.scss';
import { ICommunity } from '../../../models/ICommunities';

const Communities: React.FC<{communities : ICommunity[]}> = ({ communities }) => {

  return (
    <div className="container-communities">
      <div className="comunities">
        
        <p className='communities-title'>Popular Communities</p>

        {communities.map((community, index) => (

        <a href={community.link} className="comunity" key={index}>
          <div className="comunity-image" style={{ backgroundImage: `url(${community.image})` }}></div>
          <p className="comunity-name">{community.name}</p>
        </a>
        ))}
      <a className="show-more-comunities" href="#">Show More...</a>
      </div>
    </div>
  );
};

export default Communities;