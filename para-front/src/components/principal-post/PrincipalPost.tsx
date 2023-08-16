
import commentsIcon from '../../assets/comments.png';
import likesIcon from '../../assets/likes.png';
import seenIcon from '../../assets/seen.png';
import './principal-post.css';

import { Ipost } from '../../models/Ipost'; 


//recibe un objeto que cumple con la interface post, con ese objeto hace: ...
const PrincipalPost: React.FC<{ post: Ipost }> = ({ post }) => {

  return (
    <div className="principal-post">

        <div className="principal-post-user">
          <div className="principal-post-user-image" style={{ backgroundImage: `url(${post.userImage})` }}></div>
          <div className="principal-post-user-data">
            <div className="user-name">{post.userName}</div>
            <div className="user-time">{post.userTime}</div>
          </div>


        <button className="principal-post-button-show">
            <p className='button-text'>Show Post</p>
        </button>

        </div>

        <div className="principal-post-content">
            <div className="principal-post-content-img" style={{ backgroundImage: `url(${post.imagePost})` }}></div>
            <div className="principal-post-content-data">
              <div className="principal-post-content-data-title"><p className="post-title">{post.title}</p></div>
              <div className="principal-post-content-data-text"><p className="post-text">{post.text}</p></div>
              <p className="post-text">...</p>
            </div>
        </div>

        <div className="principal-post-buttons">
              <button className="principal-post-button button-text">
                <img src={commentsIcon} alt="Icon Coments" />
                {post.comments} Comments
              </button>
              <button className="principal-post-button button-text">
                <img src={likesIcon} alt="Icon Likes" />
                {post.likes} Likes
              </button>
              <button className="principal-post-button button-text">
                <img src={seenIcon} alt="Icon Seen" />
                {post.views} Views
              </button>
        </div>
    </div>
  );
};

export default PrincipalPost;