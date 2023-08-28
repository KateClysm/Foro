import React from 'react';
import { Navigate, Route, Routes} from 'react-router-dom';
import './main-content.css';
import NavBar from '../../components/nav/NavBar';
import Footer from '../../components/footer/Footer';
import AsideLeft from '../../components/aside-left/AsideLeft';
import PostsContent from '../posts-content/PostsContent';
import AsideRight from '../../components/aside-right/AsideRight';
import AboutUs from '../../components/about-us/AboutUs';
import Contact from '../../components/contact/Contact';
import ForumComponent from '../../components/forum-component/ForumComponent';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';

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

                <Route path="/posts" element={
                  <>
                      <ForumComponent/>
                      <AsideRight/>
                  </>
                } />

                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/*" element={<Navigate to="/notfound" />} />
            </Routes>
        </div>
       
        <Footer/>
   </>
  );
};
export default MainContent;