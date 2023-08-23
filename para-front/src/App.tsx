import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './pages/main-content/main-content.css';
import MainContent from './pages/main-content/MainContent';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
        
          <Routes>
            <Route path="/*" element={<MainContent />} />
          </Routes>
         
        
      </Router>
    </div>
  );
};

export default App;