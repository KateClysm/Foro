import React from 'react';
import { Navigate, Route, Routes, useLocation} from 'react-router-dom';
// import './main-content.css';
import './main-content.scss'
import NavBar from '../../components/nav/NavBar';
import Footer from '../../components/footer/Footer';
import AsideLeft from '../../components/aside/Aside';
import AboutUs from '../../components/about-us/AboutUs';
import Contact from '../../components/contact/Contact';
import Login from '../../components/login/Login';
import Register from '../../components/register/Register';
import Help from '../../components/help/Help';
import Posts from '../posts/Posts';
import CreatePost from '../../components/createPost/CreatePost';
import ShowPost from '../../components/post/show-post/ShowPost';

const MainContent: React.FC = () => {
  const location = useLocation();
  const isHomePage = location.pathname === '/' || location.pathname.match(/^\/post\/\d+$/);
  const gridClass = isHomePage ? 'default-grid' : 'secondary-grid';
  
  return (
   <>
        <NavBar/>
        <div className={`main-content ${gridClass}`}>
            <AsideLeft/>
            <CreatePost />
            <Routes>
                <Route path="/post/:postId" element={<ShowPost/>} />
                <Route path="/" element={<Posts/>} />
                <Route path="/about" element={<AboutUs/>}/>
                <Route path="/contact" element={<Contact/>}/>
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/help" element={<Help/>} />
                <Route path="/*" element={<Navigate to="/notfound" />} />
            </Routes>
        </div>
        <Footer/>
   </>
  );
};
export default MainContent;