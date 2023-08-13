import React from 'react';
import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
import './principal-post.css';


/*Datos que este componente recibe*/
interface PrincipalPostProps {
  title: string;
  text: React.ReactNode;
  userImage?:string;
  userName: string;
  userTime: string;
  comments: number;
  likes: number;
  views: number;
  imagePost: string;
}



/*declaración del componente*/
const PrincipalPost: React.FC<PrincipalPostProps> = ({
  title,
  text,
  userImage,
  userName,
  userTime,
  comments,
  likes,
  views,
  imagePost
}) => {
  return (
    <div className="principal-post">

        <div className="principal-post-user">
          <div className="principal-post-user-image" style={{ backgroundImage: `url(${userImage})` }}></div>
          <div className="principal-post-user-data">
            <div className="user-name">{userName}</div>
            <div className="user-time">{userTime}</div>
          </div>
          <button className="principal-post-buttons-show ">
            <p className='button-text'>Show Post</p>
          </button>
        </div>

        <div className="principal-post-content">
            <div className="principal-post-content-img" style={{ backgroundImage: `url(${imagePost})` }}></div>
            <div className="principal-post-content-data">
              <div className="principal-post-content-data-title post-title">{title}</div>
              <div className="principal-post-content-data-text post-text">{text}</div>
              <p className="post-text">...</p>
            </div>
        </div>

        <div className="principal-post-buttons">
              <button className="principal-post-buttons-button button-text">
                <img src={commentsIcon} alt="Icon Coments" />
                {comments} Comments
              </button>
              <button className="principal-post-buttons-button button-text">
                <img src={likesIcon} alt="Icon Likes" />
                {likes} Likes
              </button>
              <button className="principal-post-buttons-button button-text">
                <img src={seenIcon} alt="Icon Seen" />
                {views} Views
              </button>
        </div>
    </div>
  );
};

export default PrincipalPost;