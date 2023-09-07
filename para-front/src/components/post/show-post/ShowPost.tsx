import React from 'react';
import { useLocation } from 'react-router-dom';
import './show-post.scss'
import Post from '../Post';

const ShowPost: React.FC = () => {
    const location = useLocation();

    // Accede a los datos del post desde location.state
    const { post } = location.state;

    return (
        <div className='container-show-post'>
            <Post post={post} />
        </div>
    );
};

export default ShowPost;