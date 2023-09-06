import React, { ReactNode, useContext } from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import AsideLeft from './components/aside/Aside';
import Posts from './pages/posts/Posts';
import Contact from './components/contact/Contact';
import Help from './components/help/Help';
import AboutUs from './components/about-us/AboutUs';
import Register from './components/register/Register';
import Login from './components/login/login3';
import './pages/main-content/main-content.scss';
import CreatePost from './components/createPost/CreatePost';
import { AuthContext } from './context/authContext';
import NotFoundPage from './components/not-found/NotFound';

const Layout = () => {
  return (
    <>
      <NavBar />
      <div className='main-content default-grid'>
        <AsideLeft />
        <CreatePost />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

const App: React.FC = () => {
  
  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }: { children: ReactNode }) =>{
    if ( !currentUser ){
      return <Navigate to="/login"/>
    }
    return children;
  };

  const router = createBrowserRouter([
    {
      path: '/',
      element: <ProtectedRoute><Layout /></ProtectedRoute>,
      children: [
        {
          path: '/',
          element: <Posts />
        },
        {
          path: '/contact',
          element: <Contact />
        },
        {
          path: '/help',
          element: <Help />
        },
        {
          path: '/about',
          element: <AboutUs />
        }
        // {
        //   path:"/profile/:id",
        //   element: <ProfilePage/>
        // }
      ]
    },
    {
      path: '/login',
      element: <Login />
    },
    {
      path: '/register',
      element: <Register />
    },
    {
      path: '/*',
      element: <NotFoundPage />
    }
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;