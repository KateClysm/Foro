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
// import ShowPost from './components/show-post/ShowPost';
// import AboutUs from './components/about-us/AboutUs';
// import Contact from './components/contact/Contact';
// import NotFoundPage from './components/not-found/NotFound';

const App: React.FC = () => {
  const firstPost = postsData[0]; 

  return (
    <div className="app">
      <NavBar />
      <div className="main-content">
        <AsideLeft />
        <div className="posts-content">
            {/* <ShowPost post={firstPost} /> */}
            <PrincipalPost post={firstPost} />

            <div className="secondary-posts">
                {postsData.map((postData, index) => (
                  <SecondaryPost key={index} post={postData} />
                ))}
            </div>
        </div> 
        {/* <AboutUs/> */}
        {/* <Contact/> */}
        <AsideRight/> 
      </div>
      <Footer />
      {/* <NotFoundPage/> */}
    </div>
  );
};
export default App;