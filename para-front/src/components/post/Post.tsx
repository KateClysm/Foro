import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import ButtonsPost from './buttons-post/ButtonsPost';
import { IPost, IUser, IReactions } from '../../models/Ipost';

import './post.css';

const Post: React.FC<{ post: IPost; user: IUser; reactions: IReactions; mostPopular: boolean }> = ({ post, user, reactions, mostPopular }) => {
  
  const [postState] = useState({ post, user, reactions }); // Almacena los datos del post en el estado


  return (
    <div className={`post ${mostPopular ? 'most-popular' : ''}`}>

        <div className="post-container-user">
          <div className="post-user">
                <div className="post-user-image" style={{ backgroundImage: `url(${user.userImage})` }}></div>
                <div className="post-user-data">
                  <p className="title">{user.userName}</p>
                  <p className="less-important">{user.userTime} hours ago</p>
                </div>
                <button className="button-show">
                    <NavLink
                        to={`/post/${post.id}`}
                        className='button-text'
                        state={postState} // Pasar el estado del post como prop "state"
                    ><p>Show Post</p>
                    </NavLink>
                </button>                  
          </div>
        </div>
        

        <div className="post-content">
            <div className="post-content-img" style={{ backgroundImage: `url(${post.postImage})` }}></div>
            <div className="post-content-data">
              <h2 className="post-content-data-title">{post.title}</h2>
              <div className="post-content-data-text "><p>{post.text}</p></div>
            </div>
        </div>
 
        <ButtonsPost
              comments = {reactions.comments}
              likes = {reactions.likes}
              views = {reactions.views}
        />
        
    </div>
  );
};

export default Post;