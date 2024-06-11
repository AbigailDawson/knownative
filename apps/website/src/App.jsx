import React from 'react';
import { Routes, Route } from 'react-router-dom';
import AboutPage from '../../packages/shared/components/AboutPage';
import AuthPage from '../../packages/shared/components/AuthPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<AuthPage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </div>
  );
}

export default App;