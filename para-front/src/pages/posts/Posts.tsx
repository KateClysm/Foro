import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { makeRequest } from '../../axios'; 
import { IPost } from '../../models/IPost';
import Post from './post/Post';
import './posts.scss';


const Posts: React.FC = () => {

   const [posts, setPosts] = useState<IPost[]>([]);
   const [message, setMessage] = useState('');

  const param = useLocation().search.replace('?cat=', '') || 'home';

  const fetchData = async () => {
    try {
      const res = await makeRequest.get(`/posts/?cat=${param}`);
      const responseData = res.data.arrayPosts;
      const responseMessage = res.data.message;
      
      if (Array.isArray(responseData) && responseData.every(item => typeof item === 'object')) {
        setPosts(responseData);
        setMessage(responseMessage);
      }
    } catch (err) {
      console.log(err);
    }
  };
    
    useEffect(() => {
      fetchData();
    }, [param]); 

    return (
      <div className='container-posts'>
        {param !== 'home' && (
          <h2 className='title-cat-selected'>{message}</h2>
        )}
        {posts.map((post) => (
          <Post post={post} key={post.id} />
        ))}

        {param === 'home' && ( 
          <div className="container-button">
            <NavLink to="/?cat=all" >
                <button className='show-all-posts-button'>Show All Posts</button>
            </NavLink>
          </div>
        )}
      </div>
    );
  };

export default Posts;
