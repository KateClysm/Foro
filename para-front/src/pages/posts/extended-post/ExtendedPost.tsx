import React, { useEffect, useState } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import Post from '../post/Post';
import './extended-post.scss';
import { makeRequest } from '../../../axios';
import { IPost } from '../../../models/IPost';

const ExtendedPost: React.FC = () => {
  const [post, setPost] = useState<IPost | null>(null);
  const [postId, setPostId] = useState<string | undefined >(undefined);
  const [loadedOnce, setLoadedOnce] = useState(false); 
  const { id } = useParams();

  const location = useLocation();
  const postFromLocation = location.state ? location.state.post : null;

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (postFromLocation && !loadedOnce) {
          setPost(postFromLocation);
          setPostId(postFromLocation.id);
          setLoadedOnce(true);
          return;
        }
        //else
        const res = await makeRequest.get(`/posts/${id}`);
        setPost(res.data.data);
        setPostId(id);
        setLoadedOnce(true);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [id, postFromLocation]);

  return (
    <div className='container-show-post'>
      {post !== null ? (
        <Post post={post} key={postId} />
      ) : (
        <p>Finding post...</p>
      )}
    </div>
  );
};

export default ExtendedPost;