import { Routes, Route } from 'react-router-dom';
import { useState } from 'react';
import './App.scss';
import DemoTextPage from './DemoPage/DemoTextPage';
import AboutPage from './LandingPages/AboutPage/AboutPage';
import ContributePage from './LandingPages/ContributePage/ContributePage';
import BlogPage from './LandingPages/BlogPage/BlogPage';
import PostPage from './LandingPages/BlogPage/PostPage';
import LandingPage from './LandingPages/LandingPage/LandingPage';
import LoginPage from './LandingPages/LoginPage/LoginPage';
import SignupPage from './LandingPages/SignupPage/SignupPage';
import DashboardPage from './KnowNativePage/DashboardPage/DashboardPage';
import AppProvider from './contexts/AppProvider';
import SignupSuccessful from './KnowNativePage/SignupSuccessful/SignupSuccessful';
import LoginSuccessful from './KnowNativePage/LoginSuccessful/LoginSuccessful';
import AddTextPage from './KnowNativePage/AddTextPage/AddTextPage';

function App() {
  return (
    <AppProvider>
      <main className="App">
        <Routes>
          <Route path="/demo" element={<DemoTextPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/contribute" element={<ContributePage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/post/:postId" element={<PostPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/login" element={<LoginPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/login-success" element={<LoginSuccessful />} />
            <Route path="/signup-success" element={<SignupSuccessful />} />
            <Route path="/add-text" element={<AddTextPage />} />
          <Route path="/*" element={<LandingPage />} />
        </Routes>
      </main>
    </AppProvider>
  );
}

export default App;
