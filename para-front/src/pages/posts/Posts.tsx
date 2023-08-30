import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './posts.css'
import Post from '../../components/post/Post';


const Posts: React.FC = () => {
    const [posts, setPosts] = useState<Array<any>>([]); // Ajusta el tipo de array según tus datos

    useEffect(() => {
        axios.get('http://localhost:3001/apiforum/posts')
            .then(response => {
                const updatedPosts = response.data.map((post: any) => ({
                    ...post,
                    popularity: (post.reactions.views * 2) + post.reactions.comments + post.reactions.likes,
                }));

                updatedPosts.sort((a: any, b: any) => b.popularity - a.popularity);

                setPosts(updatedPosts);
            })
            .catch(error => {
                console.error('Error fetching posts:', error);
            });
    }, []);

    return (
        <div className='container-posts'>
            {posts.map((data: any, index: number) => (
                <Post
                    key={index}
                    post={data.post}
                    user={data.user}
                    reactions={data.reactions}
                    mostPopular={index === 0} // Indicador para el post más popular
                />
            ))}
        </div>
    );
};
export default Posts;