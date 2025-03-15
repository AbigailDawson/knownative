import React from 'react';
import './DashboardNavbar.scss';

const DashboardNavbar = () => {
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
          <li className="dashboard-nav__nav-item">
            <span class="material-symbols-outlined dashboard-nav__browse-icon">dashboard</span>
            <a className="dashboard-nav__link dashboard-nav__link--active" href="/dashboard">
              Dashboard
            </a>
          </li>
          <li className="dasboard__nav-item">
            <span class="material-symbols-outlined">&#xe41d;</span>

            <a className="dashboard-nav__link" href="/">
              Cards
            </a>
          </li>
          <li className="dashboard-nav__nav-item">
            <span class="material-symbols-outlined">info</span>
            <a className="dashboard-nav__link" href="/">
              Resources
            </a>
          </li>
        </ul>
      </div>
      <div className="dashboard-nav__nav-footer">
        <ul className="dashboard-nav__nav-links">
          <li className="dashboard-nav__nav-item">
            <span class="material-symbols-outlined">logout</span>
            <button className="dashboard-nav__link" onClick={handleLogOut}>
              Logout
            </button>
          </li>
          <li className="dashboard-nav__nav-item">
            <img src="/images/github-light-icon.svg" alt="" />
            <a className="dashboard-nav__link" href="/">
              GitHub
            </a>
          </li>
          <li className="dashboard-nav__nav-item">
            <span class="material-symbols-outlined">help</span>
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
