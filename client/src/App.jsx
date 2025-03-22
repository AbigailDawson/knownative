import { Routes, Route } from 'react-router-dom';
import './App.scss';
import DemoTextPage from './DemoPage/DemoTextPage';
import AboutPage from './LandingPages/AboutPage/AboutPage';
import ContributePage from './LandingPages/ContributePage/ContributePage';
import BlogPage from './LandingPages/BlogPage/BlogPage';
import PostPage from './LandingPages/BlogPage/PostPage';
import LandingPage from './LandingPages/LandingPage/LandingPage';

function App() {
  return (
    <main className="App">
      <Routes>
        <Route path="/demo" element={<DemoTextPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contribute" element={<ContributePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/post/:postId" element={<PostPage />} />
        <Route path="/*" element={<LandingPage />} />
      </Routes>
    </main>
  );
}

export default App;
