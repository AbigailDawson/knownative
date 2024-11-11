import './DashboardPage.css';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link } from 'react-router-dom';

export default function DashboardPage() {
  const { user } = useAuthContext();

  return user ? (
    <div className="dashboard">
      <div className="dashboard side-nav">
        <div className="nav-main-container">
          <a href="../" className="dashboard logo-container">
            <img src="/images/square-logo.png" alt="KnowNative logo." className="dashboard logo" />
            <h4>KnowNative</h4>
          </a>
          <ul className="nav-links">
            <li>
              <a className="link active" href="/dashboard">
                Dashboard
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Cards
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Library
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Progress
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Resources
              </a>
            </li>
          </ul>
        </div>
        <div className="nav-footer-container">
          <ul className="nav-links">
            <li>
              <a className="link" href="/">
                Logout
              </a>
            </li>
            <li>
              <a className="link" href="/">
                GitHub
              </a>
            </li>
            <li>
              <a className="link" href="/">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="main-container">
        <div className="user-info">
          <button>
            <p>Abigail</p>
            <img
              className="user-profile-picture"
              src="/images/square-logo.png"
              alt="User profile picture."
            />
            <p className="user-profile-dropdown">┕</p>
          </button>
        </div>
        <div className="dashboard header-container">
          {/*Just added user.username for testing of the token. Please adjust as needed. */}
          <h1>{`${user.username}'s Dashboard`}</h1>
        </div>
        <div className="stats-container">
          <div className="stat">
            <p>Level</p>
            <h2>TOCFL2</h2>
            <p>Beginner</p>
          </div>
          <div className="stat">
            <p>Texts</p>
            <h2>21</h2>
            <p className="hidden">Spacing Text</p>
          </div>
          <div className="stat">
            <p>Cards</p>
            <h2>154</h2>
            <p className="hidden">Spacing Text</p>
          </div>
          <div className="stat">
            <p>Streak</p>
            <h2>12 Days</h2>
            <p className="hidden">Spacing Text</p>
          </div>
        </div>
        <div className="dashboard subtitle">
          <h4>Jump back in</h4>
        </div>
        <div>
          <div className="sub-container">
            <div className="dashboard sub-content">
              <h2 className="dashboard card-title">開計程車</h2>
              <p className="dashboard card-body">
                每天我要到許多地方去，也會遇到很多人。有些人喜款叫我「左轉」、「右轉」、「停」...
              </p>
            </div>
            <button>Study</button>
          </div>
        </div>
        <div className="dashboard subtitle">
          <h4>Recently added</h4>
        </div>
        <div className="recently-added">
          <div className="sub-container">
            <div className="dashboard sub-content">
              <h2 className="dashboard card-title">信用卡雌然很方便</h2>
              <p className="dashboard card-body">
                信用卡雏然很方便，但是不小心的话，一下子就會花掉很多绕，所以現在還不了錢的人越来越多。…
              </p>
            </div>
            <button>Study</button>
          </div>
          <div className="sub-container">
            <div className="dashboard sub-content">
              <h2 className="dashboard card-title">信用卡雌然很方便</h2>
              <p className="dashboard card-body">
                信用卡雏然很方便，但是不小心的话，一下子就會花掉很多绕，所以現在還不了錢的人越来越多。…
              </p>
            </div>
            <button>Study</button>
          </div>
        </div>
        <div className="dashboard card-buttons">
          <button className="add-item-button">+ Add text</button>
          <button className="view-all-button">View all</button>
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
