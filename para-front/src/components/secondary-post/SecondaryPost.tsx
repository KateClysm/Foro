import React from 'react';
import './secondary-post.css';
import { IPost } from '../../models/IPost'; 
import ShowPostButton from '../utilities/show-post/ShowPostButton';
import ButtonsPost from '../utilities/buttons-post/ButtonsPost';


const SecondaryPost: React.FC<{ post: IPost }> = ({ post }) => {
  
  return (
    <div className="secondary-post">

        <div className="secondary-post-content">
          
            <div className="secondary-post-content-img" style={{ backgroundImage: `url(${post.imagePost})` }}></div>

            <div className="secondary-post-content-data">
              <div className="secondary-post-content-data-title"><p className="post-title">{post.title}</p></div>
              <div className="secondary-post-content-data-text "><p className="post-text">{post.text}</p></div>
              <p className="post-text elipsis">...</p>
            </div>
        </div>
 
        <div className="secondary-post-user-buttons">
            <div className="secondary-post-user">
              <div className="secondary-post-user-image" style={{ backgroundImage: `url(${post.userImage})` }}></div>
              <div className="secondary-post-user-data">
                <div className="user-name">{post.userName}</div>
                <div className="user-time">{post.userTime} hours ago</div>
              </div>
              <ShowPostButton/>
            </div>

            <ButtonsPost
              comments = {post.comments}
              likes = {post.likes}
              views = {post.views}
            />
        </div>
        
    </div>
  );
};

export default SecondaryPost;