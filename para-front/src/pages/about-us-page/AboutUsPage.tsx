import React from 'react';
import { Route, Routes} from 'react-router-dom';
import '../main-content/main-content.css';
import NavBar from '../../components/nav/NavBar';
import Footer from '../../components/footer/Footer';
import AsideLeft from '../../components/aside-left/AsideLeft';
import AboutUs from '../../components/about-us/AboutUs';

const MainContent: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={
        <>
          <NavBar/>
          <div className='main-content'>
            <AsideLeft/>
            <AboutUs/>
          </div>
          <Footer/>
        </>
      } />
    </Routes>
  );
};
export default MainContent;