import './DashboardPage.scss';
import { useEffect } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from './../../services/authService';

const mockData = [
  {
    id: 1,
    name: 'React Basics',
    preview: 'An introduction to React fundamentals...',
    cards: 10,
    lastOpened: '2025-02-21'
  },
  {
    id: 2,
    name: 'Advanced Hooks',
    preview: 'Exploring useReducer and useMemo...',
    cards: 8,
    lastOpened: '2025-02-19'
  }
];

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

        {/* Library */}
        <div className="dashboard__library">
          <div className="dashboard__title dashboard__title--subtitle">
            <h4>Library</h4>
          </div>
          <table className="dashboard__table-container">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Cards</th>
                <th>Last Opened</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {mockData.map((item) => (
                <tr key={item.id} className="dashboard__table-container__item-row">
                  <td>
                    <RoundIcon iconName="book_2" color="blue" />
                  </td>
                  <td>
                    <div className="name">{item.name}</div>
                    <div className="preview">{item.preview}</div>
                  </td>
                  <td>{item.cards}</td>
                  <td>{item.lastOpened}</td>
                  <td>
                    <button className="review-btn">Review</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
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
