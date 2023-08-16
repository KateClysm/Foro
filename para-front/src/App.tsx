import React from 'react'
import './styles/main-content.css';
import './styles/posts-content.css'; 
import './styles/secondary-posts.css'; 
import NavBar from './components/nav/NavBar';
import AsideLeft from './components/aside-left/AsideLeft';
import SecondaryPost from './components/secondary-post/SecondaryPost';
import PrincipalPost from './components/principal-post/PrincipalPost';
import AsideRight from './components/aside-right/AsideRight';
import Footer from './components/footer/Footer';

import posts from './data/postsData'; // Importa el arreglo de posts


const App: React.FC = () => {

  const firstPost = posts[0]; // Obtén el primer objeto del arreglo

  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <AsideLeft />
        <div className="posts-content">

            <PrincipalPost post={firstPost} /> {/* Pasa el primer objeto como prop */}

            <div className="secondary-posts">
                {posts.map((post, index) => (
                  <SecondaryPost key={index} post={post} />
                ))}
            </div>

        </div> 
        <AsideRight /> 
      </div>
      <Footer />
    </div>
  );
};

export default App;