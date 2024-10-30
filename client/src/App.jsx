import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.css';
import DemoTextPage from './DemoPage/DemoTextPage';
import AboutPage from './LandingPages/AboutPage/AboutPage';
import ContributePage from './LandingPages/ContributePage/ContributePage';
import LandingPage from './LandingPages/LandingPage/LandingPage';
import LoginPage from './LandingPages/LoginPage/LoginPage';
import SignupPage from './LandingPages/SignupPage/SignupPage';

function App() {
  const [user, setUser] = useState();

  return (
    <main className="App">
      <Routes>
        <Route path="/demo" element={<DemoTextPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage setUser={setUser}/>} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
