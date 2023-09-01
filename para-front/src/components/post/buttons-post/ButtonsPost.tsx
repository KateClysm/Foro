import React from 'react';
import './buttons-post.css'

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
            <button className="post-button text button-comments">
                <div className="button-image "></div>
                 <p>{comments} Comments</p>
            </button>
            
            <button className="post-button text button-likes">
                <div className="button-image "></div>
                 <p>{likes} Likes</p>
            </button>

            <button className="post-button text button-views">
                <div className="button-image "></div>
                 <p>{views} Views</p>
            </button>
              
        </div>
    );
};
export default ButtonsPost;