import React from 'react';
import { Route, Routes} from 'react-router-dom';
import './main-content.css';
import NavBar from '../../components/nav/NavBar';
import Footer from '../../components/footer/Footer';
import AsideLeft from '../../components/aside-left/AsideLeft';
import PostsContent from '../posts-content/PostsContent';
import AsideRight from '../../components/aside-right/AsideRight';
import AboutUs from '../../components/about-us/AboutUs';
import NotFoundPage from '../../components/not-found/NotFound';

const MainContent: React.FC = () => {
  return (
    <Routes>
      
          <Route path="/" element={
            <>
                <NavBar/>
                <div className='main-content'>
                    <AsideLeft/>
                    <PostsContent/>
                    <AsideRight/>
                </div>
                <Footer/>
            </>
          } />

          <Route path="/about" element={
             <>
             <NavBar/>
             <div className='main-content'>
                 <AsideLeft/>
                 <AboutUs/>
             </div>
             <Footer/>
            </>
          }/>

          <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
};
export default MainContent;