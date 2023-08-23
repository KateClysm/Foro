import React from 'react';
import './secondary-posts.css'
import postsData from '../../data/postsData';
import SecondaryPost from '../../components/secondary-post/SecondaryPost';


const SecondaryPosts: React.FC = () => {
    return (
        <div className='secondary-posts'>
             {postsData.map((postData, index) => (
                  <SecondaryPost key={index} post={postData} />
                ))}
        </div>
    );


};

export default SecondaryPosts;