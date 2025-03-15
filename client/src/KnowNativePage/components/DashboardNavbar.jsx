import React from 'react';
import './DashboardNavbar.scss';
import * as authService from './../../services/authService';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { useNavigate } from 'react-router-dom';

const DashboardNavbar = ({ activeTab }) => {
  const { setUser } = useAuthContext();
  const navigate = useNavigate();

  async function handleLogOut() {
    try {
      await authService.logOut();
      setUser(null);
      navigate('/');
    } catch (error) {
      console.error(error.message);
      alert('There was an issue logging out. Please try again.');
    }
  }

  return (
    <div className="dashboard-nav__side-nav">
      <div className="dashboard-nav__side-nav-links-container">
        <a href="../" className="dashboard-nav__logo-container">
          <img
            src="/images/globe-logo.png"
            alt="KnowNative logo."
            className="dashboard-nav__logo"
          />
        </a>
        <ul className="dashboard-nav__nav-links">
          <li className={`dashboard-nav__nav-item${activeTab === 'Dashboard' ? '--active' : ''}`}>
            <span
              className={`material-symbols-outlined dashboard-nav__dash-icon dashboard-nav__nav-icon${activeTab === 'Dashboard' ? '--active' : ''}`}>
              dashboard
            </span>
            <a
              className={`dashboard-nav__link dashboard-nav__link${activeTab === 'Dashboard' ? '--active' : ''}`}
              href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className={`dashboard-nav__nav-item${activeTab === 'Study' ? '--active' : ''}`}>
            <span
              className={`material-symbols-outlined dashboard-nav__flipped dashboard-nav__nav-icon${activeTab === 'Study' ? '--active' : ''}`}>
              &#xe41d;
            </span>

            <a
              className={`dashboard-nav__link dashboard-nav__link${activeTab === 'Study' ? '--active' : ''}`}
              href="/">
              Study
            </a>
          </li>
          <li className={`dashboard-nav__nav-item${activeTab === 'Resources' ? '--active' : ''}`}>
            <span
              className={`material-symbols-outlined dashboard-nav__nav-icon${activeTab === 'Resources' ? '--active' : ''}`}>
              info
            </span>
            <a
              className={`dashboard-nav__link dashboard-nav__link${activeTab === 'Resources' ? '--active' : ''}`}
              href="/">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="dashboard-nav__nav-footer">
        <ul className="dashboard-nav__nav-links">
          <li className="dashboard-nav__nav-item">
            <span className={'material-symbols-outlined dashboard-nav__nav-icon'}>logout</span>
            <button className="dashboard-nav__link dashboard-nav__button" onClick={handleLogOut}>
              Logout
            </button>
          </li>
          <li className="dashboard-nav__nav-item">
            <img src="/images/github-light-icon.svg" alt="" />
            <a
              className="dashboard-nav__link"
              href="https://github.com/AbigailDawson/knownative"
              target="_blank"
              rel="noopener noreferrer">
              GitHub
            </a>
          </li>
          <li className="dashboard-nav__nav-item">
            <span className="material-symbols-outlined dashboard-nav__nav-icon">help</span>
            <a className="dashboard-nav__link" href="/">
              Contact Us
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardNavbar;
