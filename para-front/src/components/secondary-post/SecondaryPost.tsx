import React from 'react';
import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
import './secondary-post.css';

interface SecondaryPostProps {
  title: string;
  text: React.ReactNode;
  userName: string;
  userTime: string;
  comments: number;
  likes: number;
  views: number;
  userImage: string;
}

const SecondaryPost: React.FC<SecondaryPostProps> = ({
  title,
  text,
  userName,
  userTime,
  comments,
  likes,
  views,
  userImage
}) => {
  return (
    <div className="secondary-post">

        <div className="secondary-post-content">
          
            <div className="secondary-post-content-img" style={{ backgroundImage: `url(${userImage})` }}></div>

            <div className="secondary-post-content-data">
              <div className="secondary-post-content-data-title"><p className="post-title">{title}</p></div>
              <div className="secondary-post-content-data-text "><p className="post-text">{text}</p></div>
              <p className="post-text elipsis">...</p>
            </div>
        </div>
 
        <div className="secondary-post-user-buttons">
            <div className="secondary-post-user">
              <div className="secondary-post-user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
              <div className="secondary-post-user-data">
                <div className="user-name">{userName}</div>
                <div className="user-time">{userTime}</div>
              </div>
              <button className="secondary-post-button-show ">
                <p className='button-text'>Show Post</p>
              </button>
            </div>

            <div className="secondary-post-buttons">
                  <button className="secondary-post-button button-text">
                    <img src={commentsIcon} alt="Icon Coments" />
                    {comments} Comments
                  </button>
                  <button className="secondary-post-button button-text">
                    <img src={likesIcon} alt="Icon Likes" />
                    {likes} Likes
                  </button>
                  <button className="secondary-post-button button-text">
                    <img src={seenIcon} alt="Icon Seen" />
                    {views} Views
                  </button>
            </div>
        </div>
        
    </div>
  );
};

export default SecondaryPost;