import React, { useEffect, useState } from 'react';
import './posts.scss';
import Post from '../../components/post/Post';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';
import { IPost } from '../../models/Ipost';

const Posts: React.FC = () => {
  
   const [posts, setPosts] = useState<IPost[]>([]);
  const cat = useLocation().search;

  const fetchData = async () => {
    try {
      const res = await makeRequest.get(`/posts${cat}`);
      const responseData = res.data.arrayPosts;
      
      //verifica si responseData es un array
      //verificación es exitosa, se configura setPosts con responseData. Si no, se muestra un mensaje de error en la consola.
      if (Array.isArray(responseData) && responseData.every(item => typeof item === 'object')) {
        setPosts(responseData);
      } else {
        console.error("Response is not an array of objects:", responseData);
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchData(); // Llama a fetchData cuando el componente se monta
  }, [cat]); // Asegura que se llame cuando 'cat' cambie

  return (
    <div className='container-posts'>
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