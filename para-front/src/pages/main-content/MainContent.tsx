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
import Contact from '../../components/contact/Contact';

const MainContent: React.FC = () => {
  return (
   <>
        <NavBar/>
        <div className='main-content'>
            <AsideLeft/>
            <Routes>
                
                <Route path="/" element={
                  <>
                      <PostsContent/>
                      <AsideRight/>
                  </>
                } />

                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>

                <Route path="*" element={<NotFoundPage />} />
            </Routes>
        </div>
       
        <Footer/>
   </>
  );
};
export default MainContent;