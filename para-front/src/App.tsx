import React, { ReactNode, useContext } from 'react';
import { Outlet, createBrowserRouter, RouterProvider, Navigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import NavBar from './components/nav/NavBar';
import Footer from './components/footer/Footer';
import AsideLeft from './components/aside/Aside';
import Posts from './pages/posts/Posts';
import Contact from './pages/contact/Contact';
import Help from './pages/help/Help';
import AboutUs from './pages/about-us/AboutUs';
import Register from './pages/register/Register';
import Login from './pages/login/Login';
import NotFoundPage from './pages/not-found/NotFound';
import CreatePostButton from './pages/create-update-post/createPostButton/CreatePostButton';
import './styles/main-content.scss';
import AsideRight from './components/aside-right/AsideRight';
import ExtendedPost from './pages/posts/extended-post/ExtendedPost';
import { AuthContext } from './context/authContext';
import { configureAxiosWithToken } from './axios';
import Profile from './pages/profile/Profile';
import CreatePost from './pages/create-update-post/create-post/CreatePost';
import UpdatePost from './pages/create-update-post/update-post/UpdatePost';
import UpdateProfile from './pages/update-profile/UpdateProfile';
import MyProfile from './pages/profile/my-profile/MyProfile';


const Layout = () => {
  const location = useLocation();
  const isHome = location.pathname === '/';
  return (
        <> 
          <NavBar />
          <div className={`main-content ${isHome ? 'home-grid' : 'secondary-grid'}`}>
            <AsideLeft />
            <CreatePostButton />
            <Outlet />
          </div>
          <Footer />
        </>
  );
};

const App: React.FC = () => {
  
  const { currentUser } = useContext(AuthContext);
    console.log("El usuario actual es: ", currentUser);

    configureAxiosWithToken();
    
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
          element: 
            <>
              <Posts />
              <AsideRight/>
            </>
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
        },
        {
          path: '/post/:id',
          element: <ExtendedPost/>
        },
        {
          path: '/createpost',
          element: <CreatePost />
        },
        {
          path: '/updatepost/:id',
          element: <UpdatePost />
        },
        {
          path:"/myprofile",
          element: <MyProfile/>
        },
        {
          path:"/updatemyprofile/:id",
          element: <UpdateProfile/>
        },
        {
          path:"/profile/:id",
          element: <Profile/>
        }
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