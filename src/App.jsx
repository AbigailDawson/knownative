import { Routes, Route } from 'react-router-dom';
import './App.css';
import DemoTextPage from './demo/demo-pages/DemoTextPage/DemoTextPage';
import AboutPage from './HomePages/AboutPage/AboutPage';
import ContributePage from './HomePages/ContributePage/ContributePage';
import LandingPage from './HomePages/LandingPage/LandingPage';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/demo" element={<DemoTextPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
