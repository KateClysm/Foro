import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import App from './App';

//importación de react router dom
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* uso de react router dom */}
    <BrowserRouter>
        <App/>
    </BrowserRouter>
   
  </React.StrictMode>,
)
