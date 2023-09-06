import React, { useEffect, useState } from 'react';
import './posts.scss';
import Post from '../../components/post/Post';
import { useQuery } from '@tanstack/react-query';
import { makeRequest } from '../../axios';
import { useLocation } from 'react-router-dom';


const Posts: React.FC = () => {
    const [posts, setPosts] = useState([])
    const cat = useLocation().search;

    useEffect(() => {
        const fetchData = async () => {
          try {
            const res = await makeRequest.get(`/posts${cat}`).then((res) => {
                return res.data;
            });
            setPosts(res);
          } catch (err) {
            console.log(err);
          }
        };
        fetchData();
      }, [cat]);

    return (
        <div className='container-posts'>
        {/* testing */}
            {
                posts.map((post:any) => (
                    <Post post={post} key={post.id} />
                ))
            }
        </div>
    );
};
export default Posts;