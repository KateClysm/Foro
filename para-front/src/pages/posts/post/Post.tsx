import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import moment from 'moment';
import './post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';
import {IPost} from '../../../models/IPost'
import { makeRequest } from '../../../axios';
import { AuthContext } from '../../../context/authContext';
import { useContext } from 'react';
const Post: React.FC<{ post: IPost }> = ({ post }) => {  
  const navigate = useNavigate(); 

  const handleReloadRoute = () => {
    const currentLocation = window.location.pathname;
    navigate(currentLocation, { replace: true }); 
  };

  const location = useLocation();
  const isExtendedPost = location.pathname.startsWith('/post/')

  const { currentUser } = useContext(AuthContext);
  const idUser = currentUser?.id;


  const handleDelete = async () => {
    try {
      await makeRequest.delete( `/posts/${post.id}`, {
        data: {
          uid: post.uid,
        },
    });
      navigate("/myprofile");
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

                  <NavLink to={`/profile/${post.uid}`} onClick={handleReloadRoute}><p className="user">{post.username}</p></NavLink>

                 <p className="less-important">{moment(post.createAt).fromNow() }</p>
              </div>
  
              
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
          <div className="post-content-img" style={{ backgroundImage: `url(../../../../public/upload/${post.img})` }}></div>

          {isExtendedPost ? (
          <div className="post-content-data">
            <h2 className="post-content-data-title">{post.title}</h2>
            <div className="post-content-data-text">
              <p className='texto'>{post.description}</p>
            </div>
          </div>
        ) : (
          <NavLink to={`/post/${post.id}`} state={{ post }}>
            <div className="post-content-data">
              <h2 className="post-content-data-title">{post.title}</h2>
              <div className="post-content-data-text">
                <p className='texto'>{post.description}</p>
              </div>
            </div>
          </NavLink>
        )}
          
      </div>
    </div>
  );
};
export default Post;