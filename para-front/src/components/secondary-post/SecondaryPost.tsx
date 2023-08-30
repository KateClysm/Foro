import React from 'react';
import './secondary-post.css';
import ShowPostButton from '../utilities/show-post/ShowPostButton';
import ButtonsPost from '../utilities/buttons-post/ButtonsPost';
import { Post, User, Reactions } from '../../models/Ipost';

const SecondaryPost: React.FC<{ post: Post; user: User; reactions: Reactions }> = ({ post, user, reactions }) => {
  
  return (
    <div className="secondary-post">

        <div className="secondary-post-content">
          
            <div className="secondary-post-content-img" style={{ backgroundImage: `url(${post.postImage})` }}></div>

            <div className="secondary-post-content-data">
              <div className="secondary-post-content-data-title"><p className="post-title">{post.title}</p></div>
              <div className="secondary-post-content-data-text "><p className="post-text">{post.text}</p></div>
              <p className="post-text elipsis">...</p>
            </div>
        </div>
 
        <div className="secondary-post-user-buttons">
            <div className="secondary-post-user">
              <div className="secondary-post-user-image" style={{ backgroundImage: `url(${user.userImage})` }}></div>
              <div className="secondary-post-user-data">
                <div className="user-name">{user.userName}</div>
                <div className="user-time">{user.userTime} hours ago</div>
              </div>
              <ShowPostButton/>
            </div>

            <ButtonsPost
              comments = {reactions.comments}
              likes = {reactions.likes}
              views = {reactions.views}
            />
        </div>
        
    </div>
  );
};

export default SecondaryPost;