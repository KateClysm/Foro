import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { IPost } from '../../models/Ipost';
import moment from 'moment';
import './post.scss'

const Post = ({post}: IPost) => {
  const [postState] = useState({ post });
  return (
  <div className={`post most-popular`}>
    <div className='post-container-user'>
      <div className="post-user">
          <div className="post-user-image" style={{ backgroundImage: `url(${post.profilePic})` }}></div>
            <div className="post-user-data">
               <p className="user">{post.name}</p>
               <p className="less-important">Posted {moment(post.createAt).fromNow() }</p>
            </div>
            <button className="button-show">
              <NavLink
                to={`/post/${post.userId}`}
                className='button-text'
                state={postState}
                >
                <p>Show Post</p> 
              {/* podríamos condicionar, si quien entra al show post es el creador del post, aparecerán dos iconos (uno para editar el post y otro para eliminarlo) => usar contexto de user con contextProvider (envolver app con context provider) */}
              </NavLink>
            </button>                  
      </div>
    </div>

    <div className="post-content">
    <div className="post-content-img" style={{ backgroundImage: `url(${post?.img})` }}></div>
      <div className="post-content-data">
        <h2 className="post-content-data-title">{post.title}</h2>
        <div className="post-content-data-text "><p>{post.description}</p></div>
      </div>
    </div>

  </div>
  )
}

export default Post;