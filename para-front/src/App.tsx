import React from 'react';
import './styles/main-content.css';
import './styles/posts-content.css'; 
import './styles/secondary-posts.css'; 
import NavBar from './components/nav/NavBar';
import AsideLeft from './components/aside-left/AsideLeft';
import PrincipalPost from './components/principal-post/PrincipalPost';
import SecondaryPost from './components/secondary-post/SecondaryPost';
import AsideRight from './components/aside-right/AsideRight';
import Footer from './components/footer/Footer';


const App: React.FC = () => {
  return (
    <div className="app">
      <NavBar />

      <div className="main-content">
          <AsideLeft />

          <div className="posts-content">
                <PrincipalPost/>
          
                <div className="secondary-posts">
                  <SecondaryPost
                    title="Scary House In Road 16°. I think i saw a Poltergeist."
                    userName="Lucas Trobato"
                    userTime="16 hours ago"
                    comments={10}
                    likes={3}
                    views={40}/>  
                    <SecondaryPost
                    title="Scary House In Road 16°. I think i saw a Poltergeist."
                    userName="Lucas Trobato"
                    userTime="16 hours ago"
                    comments={10}
                    likes={3}
                    views={40}/>  
                    <SecondaryPost
                    title="Scary House In Road 16°. I think i saw a Poltergeist."
                    userName="Lucas Trobato"
                    userTime="16 hours ago"
                    comments={10}
                    likes={3}
                    views={40}/>  
                </div>
          </div>
          
          <AsideRight />
      </div>

      <Footer />
    </div>
  );
};

export default App;