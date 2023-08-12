import React from 'react';
import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
import './principal-post.css';

const PrincipalPosts: React.FC = () => {
  return (
    <div className="principal-post">
        <div className="user">
          <div className="user-img"></div>
          <div className="user-name">Lydia Green</div>
          <div className="user-time">ten minutes ago</div>
          <button className="post-button-show"><p>Show Post</p></button>
        </div>
        <div className="text">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat, mollitia officia. Sapiente itaque, sunt expedita delectus architecto non sint? Est quos vitae mollitia hic recusandae. Alias quidem soluta corrupti in nostrum deserunt harum quia ipsa excepturi vero error reiciendis veniam, neque recusandae fugiat molestiae animi maiores laudantium velit deleniti labore...</p>
        </div>
        <div className="post-image">
        </div>
        <div className="post-buttons">
          <button className="post-button">
            <img src={commentsIcon} alt="Icon Coments" />
            10 Comments
          </button>
          <button className="post-button">
            <img src={likesIcon} alt="Icon Likes" />
            03 Likes
          </button>
          <button className="post-button">
            <img src={seenIcon} alt="Icon Seen" />
            40 Views
          </button>
        </div>
      </div>
  );
}

export default PrincipalPosts;