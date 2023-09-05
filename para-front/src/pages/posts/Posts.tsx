import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './posts.scss';
import Post from '../../components/post/Post';


const Posts: React.FC = () => {
    //Lógica de renderización de los posteos según una metríca de popularidad principalmente en las 'views'

    const [posts, setPosts] = useState<Array<any>>([]);
    
    useEffect(() => {
        axios.get('http://localhost:8800/apiForum/posts/post')
            .then(response => {
                const updatedPosts = response.data.map((post: any) => ({
                    ...post, //método de propagación, crea una copia de la variable que esta mapeando
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
                    mostPopular={index === 0} 
                />
            ))}
        </div>
    );
};
export default Posts;