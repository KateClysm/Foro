//módulos
import React from 'react';
import { Outlet, createBrowserRouter, RouterProvider } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
//componentes y pages
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
import CreatePostButton from './pages/createPost/createPostButton/CreatePostButton';
import CreatePost from './pages/createPost/CreatePost2';
//lógica
//estilos
import './styles/main-content.scss';
import AsideRight from './components/aside-right/AsideRight';
import ExtendedPost from './pages/posts/extended-post/ExtendedPost';


//estructura básica de la página
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

//componente App
const App: React.FC = () => {
  
  //si no se está logueado, redirecciona a login,si se está logueado habilita las rutas hijas
  // const { currentUser } = useContext(AuthContext);
  // const ProtectedRoute = ({ children }: { children: ReactNode }) =>{
  //   if ( !currentUser ){
  //     return <Navigate to="/login"/>
  //   }
  //   return children;
  // };

  //creación del ruteo
  const router = createBrowserRouter([
    {
      path: '/', 
      // element: <ProtectedRoute><Layout /></ProtectedRoute>,  //rutas privadas
       element: <Layout />,
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

  //devuelve el ruteo
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default App;