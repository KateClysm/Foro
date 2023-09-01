import React, { useState } from 'react';
import './post.css';
import ButtonsPost from './buttons-post/ButtonsPost';
import { IPost, IUser, IReactions } from '../../models/Ipost';
import { NavLink } from 'react-router-dom';

const Post: React.FC<{ post: IPost; user: IUser; reactions: IReactions; mostPopular: boolean }> = ({ post, user, reactions, mostPopular }) => {
  
  const [postState] = useState({ post, user, reactions }); // Almacena los datos del post en el estado


  return (
    <div className={`post ${mostPopular ? 'most-popular' : ''}`}>

        <div className="post-container-user">
          <div className="post-user">
                <div className="post-user-image" style={{ backgroundImage: `url(${user.userImage})` }}></div>
                <div className="post-user-data">
                  <div className="user-name">{user.userName}</div>
                  <div className="user-time">{user.userTime} hours ago</div>
                </div>
                <button className="button-show">

                    <NavLink
                        to={`/post/${post.id}`}
                        className='button-text'
                        state={postState} // Pasar el estado del post como prop "state"
                    >Show Post
                    </NavLink>
                </button>                  
          </div>
        </div>
        

        <div className="post-content">

            <div className="post-content-img" style={{ backgroundImage: `url(${post.postImage})` }}></div>

            <div className="post-content-data">
              <div className="post-content-data-title"><p className="post-title">{post.title}</p></div>
              <div className="post-content-data-text "><p className="post-text">{post.text}</p></div>
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