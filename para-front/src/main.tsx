import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/styles.scss'
import App from './App';
import { AuthContextProvider } from './context/authContext';


ReactDOM.createRoot(document.getElementById('root')!).render(

  //envuelvo a app en auth context provider para poder utilizar rutas privadas y verificar si un usuario está loggeado o no antes de hacer peticiones referentes a posteos.

  <React.StrictMode>
    <AuthContextProvider>
      <App/>
    </AuthContextProvider>
    
  </React.StrictMode>,
)
