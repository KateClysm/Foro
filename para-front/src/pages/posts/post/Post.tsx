import { NavLink, useNavigate } from 'react-router-dom';
import moment from 'moment';
import './post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {IPost} from '../../../models/IPost'
import { makeRequest } from '../../../axios';
import { AuthContext } from '../../../context/authContext';
import { useContext } from 'react';

const Post: React.FC<{ post: IPost }> = ({ post }) => {  
  
  const { currentUser } = useContext(AuthContext);
  const idUser = currentUser?.id;

  const navigate = useNavigate();

  const handleDelete = async () => {
    try {
      await makeRequest.delete( `/posts/${post.id}`, {
        data: {
          uid: post.uid,
        },
    });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };


  return (
    <div className={`post most-popular`}>
  
      <div className='post-container-user'>
        <div className="post-user">
          <div className="post-user-image" style={{ backgroundImage: `url(${post.profilePic})` }}></div>
              <div className="post-user-data">
                  <p className="user">{post.username}</p>
                 <p className="less-important">Posted {moment(post.createAt).fromNow() }</p>
              </div>
  
              <button className="button-show">
                <NavLink
                  to={`/post/${post.id}`}
                  className='button-text'
                  state={{ post }}
                  >
                  <p>Show Post</p> 
                </NavLink>
              </button>
  
              
              { idUser === post.uid && (
                <div className="enable-icons-container">
                      <NavLink to={`/updatepost/${post.id}`} state={post}>
                        <FontAwesomeIcon icon={faPen} className='enable-icon'/>
                      </NavLink>
        
                      <button onClick={handleDelete}>
                        <FontAwesomeIcon icon={faTrash} className='enable-icon'/>
                      </button>
                  </div>
              )}
              
          </div>
      </div>
  
  
      <div className="post-content">
      {/* <div className="post-content-img" style={{ backgroundImage: `url(${post?.img})` }}></div> */}
      <div className="post-content-img" style={{ backgroundImage: `url(../upload/${post.img})` }}></div>
        <div className="post-content-data">
          <h2 className="post-content-data-title">{post.title}</h2>
          <div className="post-content-data-text "><p>{post.description}</p></div>
        </div>
      </div>
  
    </div>
  );
};
export default Post;