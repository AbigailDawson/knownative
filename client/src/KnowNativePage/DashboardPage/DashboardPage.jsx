import './DashboardPage.scss';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from './../../services/authService';

export default function DashboardPage() {
  const { user, setUser } = useAuthContext();
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

  const RoundIcon = ({ isImage, src, iconName, color }) => {
    return (
      <div
        className={`dashboard__round-${isImage ? 'image' : 'icon'} dashboard__icon-color--${color} ${color === 'green' ? 'dashboard__round-icon--flipped' : ''}`}>
        {isImage ? (
          <img src={src} alt="icon" />
        ) : (
          <span className="material-symbols-outlined">{iconName}</span>
        )}
      </div>
    );
  };

  return user ? (
    <div className="dashboard">
      <div className="dashboard__side-nav">
        <div className="dashboard__side-nav-links-container">
          <a href="../" className="dashboard__logo-container">
            <img src="/images/square-logo.png" alt="KnowNative logo." className="dashboard__logo" />
            <h4>KnowNative</h4>
          </a>
          <ul className="dashboard__nav-links">
            <li className="dashboard__nav-item">
              <a className="dashboard__link dashboard__link--active" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li className="dasboard__nav-item">
              <a className="dashboard__link" href="/">
                Cards
              </a>
            </li>
            <li className="dashboard__nav-item">
              <a className="dashboard__link" href="/">
                Library
              </a>
            </li>
            <li className="dashboard__nav-item">
              <a className="dashboard__link" href="/">
                Progress
              </a>
            </li>
            <li className="dashboard__nav-item">
              <a className="dashboard__link" href="/">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="dashboard__nav-footer">
          <ul className="dashboard__nav-links">
            <li className="dashboard__nav-item">
              <button className="dashboard__link" onClick={handleLogOut}>
                Logout
              </button>
            </li>
            <li className="dashboard__nav-item">
              <a className="dashboard__link" href="/">
                GitHub
              </a>
            </li>
            <li className="dashboard__nav-item">
              <a className="dashboard__link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="dashboard__main">
        <div className="dashboard__user-info">
          <button className="dashboard__user-dropdown-options">
            <p className="dashboard__user-name">{user.username}</p>
            <img
              className="dashboard__user-profile-pic"
              src="/images/square-logo.png"
              alt="User profile picture."
            />
            <p className="dashboard__user-dropdown-icon">┕</p>
          </button>
        </div>
        <div className="dashboard__title">
          {/*Just added user.username for testing of the token. Please adjust as needed. */}
          <h1>Dashboard</h1>
        </div>

        {/* Stats */}
        <div className="dashboard__stats-container">
          <div className="dashboard__stat">
            <RoundIcon iconName="book_2" color="blue" />
            <div className="dashboard__stat__stat-info">
              <h3 className="">21</h3>
              <span className="dashboard__stat__label">Texts</span>
            </div>
          </div>

          <div className="dashboard__stat">
            <RoundIcon iconName="&#xe41d;" color="green" />
            <div className="dashboard__stat__stat-info">
              <h3>154</h3>
              <span className="dashboard__stat__label">Cards</span>
            </div>
          </div>

          <div className="dashboard__stat">
            <RoundIcon iconName="&#xe80c;" color="yellow" />
            <div className="dashboard__stat__stat-info">
              <h3>2145</h3>
              <span className="dashboard__stat__label">Minutes studied</span>
            </div>
          </div>

          <div className="dashboard__stat">
            <RoundIcon isImage={true} src="/images/fire-icon.svg" color="red" />
            <div className="dashboard__stat__stat-info">
              <h3>8</h3>
              <span className="dashboard__stat__label">Day streak</span>
            </div>
          </div>
        </div>

        <div className="dashboard__title dashboard__title--subtitle">
          <h4>Jump back in</h4>
        </div>
        <div>
          <div className="dashboard__sub-container">
            <div className="dashboard dashboard__card">
              <h2 className="dashboard dashboard__card-title">開計程車</h2>
              <p className="dashboard dashboard__card-body">
                每天我要到許多地方去，也會遇到很多人。有些人喜款叫我「左轉」、「右轉」、「停」...
              </p>
            </div>
            <button className="dashboard__study-button">Study</button>
          </div>
        </div>
        <div className="dashboard__title dashboard__title--subtitle">
          <h4>Recently added</h4>
        </div>
        <div className="dashboard__recently-added">
          <div className="dashboard dashboard__recently-added-content">
            <div className="dashboard dashboard__card">
              <h2 className="dashboard dashboard__card-title">信用卡雌然很方便</h2>
              <p className="dashboard dashboard__card-body">
                信用卡雏然很方便，但是不小心的话，一下子就會花掉很多绕，所以現在還不了錢的人越来越多。…
              </p>
            </div>
            <button className="dashboard__study-button">Study</button>
          </div>
          <div className="dashboard__sub-container">
            <div className="dashboard dashboard__card">
              <h2 className="dashboard dashboard__card-title">信用卡雌然很方便</h2>
              <p className="dashboard dashboard__card-body">
                信用卡雏然很方便，但是不小心的话，一下子就會花掉很多绕，所以現在還不了錢的人越来越多。…
              </p>
            </div>
            <button className="dashboard__study-button">Study</button>
          </div>
        </div>
        <div className="dashboard dashboard__card-buttons">
          <button
            className="dashboard__card-buttons--add-item"
            onClick={() => navigate('/add-text')}>
            + Add text
          </button>
          <button className="dashboard__card-buttons--view-all">View all</button>
        </div>
      </div>
    </div>
  ) : (
    <div>
      <p>
        User not logged in. Please log in <Link to="/login">here</Link>.
      </p>
    </div>
  );
}
