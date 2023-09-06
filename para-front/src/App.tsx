import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './pages/main-content/MainContent';
import NotFoundPage from './components/not-found/NotFound';
import Login from './components/login/Login';
// import Register from './components/register-prueba/Register';
import Register from './components/register/Register';
const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/login" element={<Login/>} />
            <Route path="/register" element={<Register/>} />
            <Route path="/*" element={<MainContent />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
      </Router>
    </div>
  );
};
export default App;