import React, { useContext } from 'react';
import './create-post-button.scss'
import { NavLink } from 'react-router-dom';
import { AuthContext } from '../../../context/authContext';

const CreatePostButton: React.FC = () => {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className='openModal'>
      {currentUser && (
        <NavLink to="/createpost">
          <button className='openModal-btn'>Create Post</button>
        </NavLink>
      )}
    </div>
  );
};

export default CreatePostButton;