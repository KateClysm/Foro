import React from 'react';
import './principal-post.css';
import { IPost } from '../../models/IPost'; 
import ShowPostButton from '../utilities/show-post/ShowPostButton';
import ButtonsPost from '../utilities/buttons-post/ButtonsPost';

//recibe un objeto que cumple con la interface post, con ese objeto hace: ...
const PrincipalPost: React.FC<{ post: IPost }> = ({ post }) => {

  return (
    <div className="principal-post">

        <div className="principal-post-user">
          <div className="principal-post-user-image" style={{backgroundImage: `url(${post.userImage})`}}></div>
          <div className="principal-post-user-data">
            <div className="user-name">{post.userName}</div>
            <div className="user-time">{post.userTime} hours ago</div>
          </div>


          <ShowPostButton/>

        </div>

        <div className="principal-post-content">
            <div className="principal-post-content-img" style={{ backgroundImage: `url(${post.imagePost})` }}></div>
            <div className="principal-post-content-data">
              <div className="principal-post-content-data-title"><p className="post-title">{post.title}</p></div>
              <div className="principal-post-content-data-text"><p className="post-text">{post.text}</p></div>
              <p className="post-text">...</p>
            </div>
        </div>


        <ButtonsPost
          comments = {post.comments}
          likes = {post.likes}
          views = {post.views}
        />
    
    </div>
  );
};

export default PrincipalPost;