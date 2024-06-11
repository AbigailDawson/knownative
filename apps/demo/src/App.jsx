import React from 'react';
import { Routes, Route } from 'react-router-dom';
import DemoTextPage from './pages/DemoTextPage';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/demo" element={<DemoTextPage />} />
      </Routes>
    </div>
  );
}

export default App;