import NavBar from '../../components/nav/NavBar';
import AsideLeft from '../../components/aside/Aside';
import Footer from '../../components/footer/Footer';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className='main-content'>
        <AsideLeft />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;