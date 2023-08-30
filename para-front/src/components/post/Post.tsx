import React from 'react';
import './post.css';
import ShowPostButton from './show-post/ShowPostButton';
import ButtonsPost from './buttons-post/ButtonsPost';
import { IPost, IUser, IReactions } from '../../models/Ipost';

const Post: React.FC<{ post: IPost; user: IUser; reactions: IReactions; mostPopular: boolean }> = ({ post, user, reactions, mostPopular }) => {
  
  return (
    <div className={`post ${mostPopular ? 'most-popular' : ''}`}>

        <div className="post-container-user">
          <div className="post-user">
                <div className="post-user-image" style={{ backgroundImage: `url(${user.userImage})` }}></div>
                <div className="post-user-data">
                  <div className="user-name">{user.userName}</div>
                  <div className="user-time">{user.userTime} hours ago</div>
                </div>
                <ShowPostButton/>
          </div>
        </div>
        

        <div className="post-content">

            <div className="post-content-img" style={{ backgroundImage: `url(${post.postImage})` }}></div>

            <div className="post-content-data">
              <div className="post-content-data-title"><p className="post-title">{post.title}</p></div>
              <div className="post-content-data-text "><p className="post-text">{post.text}</p></div>
              {/* <p className="post-text elipsis">...</p> */}
            </div>
        </div>
 
        <ButtonsPost
              comments = {reactions.comments}
              likes = {reactions.likes}
              views = {reactions.views}
        />
        
    </div>
  );
};

export default Post;