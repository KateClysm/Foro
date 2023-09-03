import React from 'react';
// import './buttons-post.css';
import './buttons-post.scss';
interface IButtons {
    comments: number;
    likes: number;
    views: number;
  }

  const ButtonsPost: React.FC<IButtons> = ({
    comments, 
    likes, 
    views
   }) => {
    return (
        <div className="post-buttons">
            <button className="post-button button-comments">
                <div className="button-image "></div>
                {comments} Comments
            </button>
            
            <button className="post-button button-likes">
                <div className="button-image "></div>
                {likes} Likes
            </button>

            <button className="post-button button-views">
                <div className="button-image "></div>
                {views} Views
            </button>
              
        </div>
    );
};
export default ButtonsPost;