// //módulos
// import React from 'react';
// // import { useParams } from 'react-router-dom';
// //componentes
// import Post from '../post/Post';
// //estilos
// import './extended.post.scss'
// import { useParams } from 'react-router-dom';
// //interfaces


// const ExtendedPost: React.FC = () => {
    
//     // const [post, setPost] = useState<IPost>();

//     const { id } = useParams();

//     // useEffect(() => {
//     //     const fetchData = async () => {
//     //       try {
//     //         const res = await makeRequest.get(`/posts/${id}`);
//     //         setPost(res.data);
//     //       } catch (err) {
//     //         console.log(err);
//     //       }
//     //     };
//     //     fetchData();
//     //   }, [id]);

//     return (
//         <div className='container-show-post'>
//             {post ? (
//                 <Post post={post} key={id} />
//             ) : (
//                 <p>Trying to find the post...</p>
//             )}
//         </div>
//     );
// };

// export default ExtendedPost;



import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom'; // Importa useLocation
import Post from '../post/Post';
import './extended.post.scss';
import { makeRequest } from '../../../axios';
import { IPost } from '../../../models/Ipost';

const ExtendedPost: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);

  // Obtén el estado de la ubicación
  const location = useLocation();
  const postFromLocation = location.state ? location.state.post : null;
  const { id } = useParams();
  
  useEffect(() => {
    // Si se pasó un objeto post en el estado de la ubicación, úsalo
    if (postFromLocation) {
      setPost(postFromLocation);
    } else {
      
      // Si no, realiza una solicitud para obtener los datos del post por su ID
      const fetchData = async () => {
        try {
          const res = await makeRequest.get(`/posts/${id}`);
          setPost(res.data);
        } catch (err) {
          console.log(err);
        }
      };
      fetchData();
    }
  }, [id, postFromLocation]);

  return (
    <div className='container-show-post'>
      {post ? (
        <Post post={post} key={post.id} />
      ) : (
        <p>Trying to find the post...</p>
      )}
    </div>
  );
};

export default ExtendedPost;