import React from 'react';
import './communities.scss';
import { ICommunity } from '../../../models/ICommunity';
import logo from "./miniLogo.png"

const Communities: React.FC<{communities : ICommunity[]}> = ({ communities }) => {

  return (
    <div className="container-communities">
      <h4 className='communities-title'>Popular Communities</h4>
      <div className="comunities">
        {communities.map((community, index) => (
          <div className="community" key={index}>
              <a href={community.link} className="community" >
              {community.logo ? (
                <img className="community-image" src={community.logo} alt={community.name} />
              ) : (
                <img className="community-image" src={logo} alt={community.name} />
              )}
              <p className="community-name">{community.name}</p>
            </a>
          </div>
        ))}
      <a className="show-more-comunities" href="#">Show More...</a>
      </div> 
    </div>
  );
};

export default Communities;