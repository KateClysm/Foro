import React from 'react';
import PrincipalPost from '../../components/principal-post/PrincipalPost';
import postsData from '../../data/postsData';
import SecondaryPosts from '../secondary-posts/SecondaryPosts';
import './posts-content.css'


const PostsContent: React.FC = () => {
    const firstPost = postsData[0];
    return (

        <div className='posts-content'>
            <PrincipalPost post={firstPost} />
            <SecondaryPosts/>
        </div>
        
    );


};

export default PostsContent;