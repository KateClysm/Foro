// frontend/src/components/ForumComponent.js
import { useState, useEffect } from 'react';
import axios from 'axios';
import './forum-component.css'

interface Post {
  id: number;
  title: string;
  // Otras propiedades
}

const ForumComponent: React.FC = () => {
  
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    // Hacer una solicitud GET al backend
    axios.get('http://localhost:3001/apiforum/posts')
      .then(response => {
        setPosts(response.data);
      })
      .catch(error => {
        console.error('Error fetching posts:', error);
      });
  }, []);

  return (
    <div className='postCardContainer'>
      {posts.map(post => (
        <div className='postCard' key={post.id}>{post.title}</div>
      ))}
    </div>
  );
}

export default ForumComponent;