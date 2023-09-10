import React from 'react';
import './create-post-button.scss'
import { NavLink } from 'react-router-dom';


const CreatePostButton: React.FC = () => {

  // modal function

    return (
      <div className='openModal'>
         <NavLink to="/createpost"><button className='openModal-btn'>Create Post</button></NavLink>
          {/* <Link className="link" to="/createpost">
            
          </Link> */}
      </div>
    )
};

export default CreatePostButton;