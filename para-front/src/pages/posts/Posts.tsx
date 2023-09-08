import React, { useEffect, useState } from 'react';
import './posts.scss';
import Post from '../../components/post/Post';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { IPost } from '../../models/Ipost';

const Posts: React.FC = () => {
  
   const [posts, setPosts] = useState<IPost[]>([]);
   const [message, setMessage] = useState('');
  // const cat = useLocation().search;
   const cat = useLocation().search || 'notfound'; // Establece 'all' como valor predeterminado si no hay categoría seleccionada

  const fetchData = async () => {
    try {
      const res = await makeRequest.get(`/posts${cat}`);
      const responseData = res.data.arrayPosts;
      const responseMessage = res.data.message;
      
      //verifica si responseData es un array
      //verificación es exitosa, se configura setPosts con responseData. Si no, se muestra un mensaje de error en la consola.
      if (Array.isArray(responseData) && responseData.every(item => typeof item === 'object')) {
        setPosts(responseData);
        setMessage(responseMessage);
      } 
      return console.error("Response is not an array of objects:", responseData);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(); 
  }, [cat]); 

  return (
    <div className='container-posts'>
      <h2>{message}</h2>
       {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}
    </div>
  );
};
export default Posts;


// const fetchData = async () => {
//   try {
//     const res = await makeRequest.get(`/posts${cat}`);
//     const responseData = res.data;

//     if (Array.isArray(responseData) && responseData.every(item => typeof item === 'object')) {
//       setPosts(responseData);
//     } else {
//       console.error("Response is not an array of objects:", responseData);
//     }
//   } catch (err) {
//     console.log(err);
//   }
// };