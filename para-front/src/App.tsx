import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainContent from './pages/main-content/MainContent';
import NotFoundPage from './components/not-found/NotFound';

const App: React.FC = () => {
  return (
    <div className="app">
      <Router>
          <Routes>
            <Route path="/*" element={<MainContent />} />
            <Route path="/notfound" element={<NotFoundPage />} />
          </Routes>
      </Router>
    </div>
  );
};
export default App;