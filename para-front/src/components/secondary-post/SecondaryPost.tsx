import React from 'react';
import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
import './secondary-post.css';
import { Ipost } from '../../models/Ipost'; 


const SecondaryPost: React.FC<{ post: Ipost }> = ({ post }) => {
  
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
                <div className="user-time">{post.userTime}</div>
              </div>
              <button className="secondary-post-button-show ">
                <p className='button-text'>Show Post</p>
              </button>
            </div>

            <div className="secondary-post-buttons">
                  <button className="secondary-post-button button-text">
                    <img src={commentsIcon} alt="Icon Coments" />
                    {post.comments} Comments
                  </button>
                  <button className="secondary-post-button button-text">
                    <img src={likesIcon} alt="Icon Likes" />
                    {post.likes} Likes
                  </button>
                  <button className="secondary-post-button button-text">
                    <img src={seenIcon} alt="Icon Seen" />
                    {post.views} Views
                  </button>
            </div>
        </div>
        
    </div>
  );
};

export default SecondaryPost;