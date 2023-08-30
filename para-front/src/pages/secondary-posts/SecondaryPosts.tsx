import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './secondary-posts.css'
import SecondaryPost from '../../components/secondary-post/SecondaryPost';


const SecondaryPosts: React.FC = () => {
    const [posts, setPosts] = useState<Array<any>>([]); // Ajusta el tipo de array según tus datos

    useEffect(() => {
        axios.get('http://localhost:3001/apiforum/posts')
            .then(response => {
                setPosts(response.data);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div className='secondary-posts'>
             {posts.map((data, index) => (
                <SecondaryPost key={index} post={data.post} user={data.user} reactions={data.reactions} />
            ))}
        </div>
    );
};

export default SecondaryPosts;