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
    <div className="post">

        <div className="post-content">
          
            <div className="post-content-img" style={{ backgroundImage: `url(${userImage})` }}></div>

            <div className="post-content-data">
              <div className="post-content-data-title post-title">{title}</div>
              <div className="post-content-data-text post-text">{text}</div>
              <p>...</p>
            </div>
        </div>

        <div className="post-access">

              <div className="post-access-user">
                <div className="post-access-user-image"></div>
                <div className="post-access-user-data">
                  <div className="post-access-user-data-name  user-name">{userName}</div>
                  <div className="post-access-user-data-time user-time">{userTime}</div>
                </div>
              </div>


              <div className="post-access-buttons">
                <button className="post-access-buttons-button button-text">
                  <img src={commentsIcon} alt="Icon Coments" />
                  {comments} Comments
                </button>
                <button className="post-access-buttons-button button-text">
                  <img src={likesIcon} alt="Icon Likes" />
                  {likes} Likes
                </button>
                <button className="post-access-buttons-button button-text">
                  <img src={seenIcon} alt="Icon Seen" />
                  {views} Views
                </button>

                <button className="post-access-buttons-show ">
                  <p className='button-text'>Show Post</p>
                </button>
              </div>

        </div>
    </div>
  );
};

export default SecondaryPost;