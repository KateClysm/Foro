import React from 'react';
import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
// import imagenPrueba from '../../assets/imagenPrueba.png'
import './secondary-post.css';

interface SecondaryPostProps {
  title: string;
  userName: string;
  userTime: string;
  comments: number;
  likes: number;
  views: number;
}

const SecondaryPost: React.FC<SecondaryPostProps> = ({
  title,
  userName,
  userTime,
  comments,
  likes,
  views,
}) => {
  return (
    <div className="secondary-post">
      <div className="container-imgPost-user">
        <div className="secondary-post-image">
          
        </div>

        <div className="secondary-post-title">{title}</div>

        <div className="secondary-post-user-show">
          <div className="secondary-user">
            <div className="secondary-post-user-image"></div>
            <div className="secondary-post-user-data">
              <div className="secondary-post-user-name">{userName}</div>
              <div className="secondary-post-user-time">{userTime}</div>
            </div>
          </div>

          <button className="post-button-show">
            <p>Show Post</p>
          </button>

          <div className="secondary-post-buttons">
            <button className="secondary-post-button">
              <img src={commentsIcon} alt="Icon Coments" />
              {comments} Comments
            </button>
            <button className="secondary-post-button">
              <img src={likesIcon} alt="Icon Likes" />
              {likes} Likes
            </button>
            <button className="secondary-post-button">
              <img src={seenIcon} alt="Icon Seen" />
              {views} Views
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SecondaryPost;