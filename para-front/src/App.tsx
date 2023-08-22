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

import postsData from './data/postsData';

const App: React.FC = () => {

  const firstPost = postsData[0]; 

  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <AsideLeft />
        <div className="posts-content">

            <PrincipalPost post={firstPost} />

            <div className="secondary-posts">
                {postsData.map((postData, index) => (
                  <SecondaryPost key={index} post={postData} />
                ))}
            </div>

        </div> 

        <AsideRight/> 
      </div>
      <Footer />
    </div>
  );
};

export default App;