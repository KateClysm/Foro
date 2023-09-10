import { NavLink } from 'react-router-dom';
import { IPost } from '../../../models/Ipost';
import moment from 'moment';
import './post.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPen, faTrash } from '@fortawesome/free-solid-svg-icons';

const Post: React.FC<{ post: IPost }> = ({ post }) => {
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

            <div className="enable-icons-container">
              <FontAwesomeIcon icon={faPen} className='enable-icon'/>
              <FontAwesomeIcon icon={faTrash} className='enable-icon'/>
            </div>
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






// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// import { IPost } from '../../models/Ipost';
// import moment from 'moment';
// import './post.scss'
// import { makeRequest } from '../../axios';

// // const Post: React.FC<IPost> = ({ post }) => {
// const Post: React.FC<{ post: IPost }> = ({ post }) => { //espera una prop llamada post de tipo IPost
//   const [postState] = useState({ post });
//   const postId = location.pathname.split('/')[2];
//   const navigate = useNavigate()


// const handleDelete = async () => {
//   try {
//     await makeRequest.delete(`/posts/${postId}`)
//     navigate('/');
//   } catch (error) {
//     console.log(error);
//   }
// }

//   return (
//   <div className={`post most-popular`}>

//     <div className='post-container-user'>
//       <div className="post-user">
//           {/* <div className="post-user-image" style={{ backgroundImage: `url(${post.profilePic})` }}></div> */}
//           <div className="post-user-image" style={{ backgroundImage: `url(https://marketplace.canva.com/EAFXS8-cvyQ/1/0/1600w/canva-brown-and-light-brown%2C-circle-framed-instagram-profile-picture-2PE9qJLmPac.jpg)` }}></div>
//             <div className="post-user-data">
//                {/* <p className="user">{post.name}</p> */}
//                 <p className="user">Username</p>
//                <p className="less-important">Posted {moment(post.createAt).fromNow() }</p>
//             </div>
//             <button className="button-show">
//               <NavLink
//                 to={`/post/${post.userId}`}
//                 className='button-text'
//                 state={postState}
//                 >
//                 <p>Show Post</p> 
//               {/* podríamos condicionar, si quien entra al show post es el creador del post, aparecerán dos iconos (uno para editar el post y otro para eliminarlo) => usar contexto de user con contextProvider (envolver app con context provider) */}
//               </NavLink>
//             </button>
            
//             {/* CONDICIONADO, SI EL USUARIO ES EL DUEÑO DEL POST, DOS ICONOS APARECEN => EDIT & DELETE */}
//             {/* { currenUser.username === post.username && ( */}
//               <div className="edit">
//                 {/* definir una url/render para edicion => el modal no puede abrirse por si solo... */}
//                 {/* NOT FOUND => NECESITA UNA URL PARA ACCEDER A LA PAGINA DONDE SE ENVIARÁN LOS DATOS ACTUALES DEL POST Y DONDE SE PODRÁ EDITAR EL POSTEO HECHO => LA CREACION DEL POST, TAMBIÉN NECESITA UNA URL UNICA (sample: /write) PARA PODER HACER EL ENVÍO DE DATOS */}
//                 {/* <Link to={`/post/${post.userId}/?edit=2`} >  */}
//                   {/* <img src={Edit} alt="" /> */} edit
//                 {/* </Link> */}
//                 {/* <img onClick={handleDelete} src={DeleteIcon} alt="" /> */}
//                 <p onClick={handleDelete}>del</p>
//               </div>
//             {/* )} */}
//         </div>
//     </div>

//     <div className="post-content">
//     <div className="post-content-img" style={{ backgroundImage: `url(${post?.img})` }}></div>
//       <div className="post-content-data">
//         <h2 className="post-content-data-title">{post.title}</h2>
//         <div className="post-content-data-text "><p>{post.description}</p></div>
//       </div>
//     </div>

//   </div>
//   )
// }

// export default Post;