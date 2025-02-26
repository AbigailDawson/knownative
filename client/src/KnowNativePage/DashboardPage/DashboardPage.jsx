import './DashboardPage.scss';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import * as authService from './../../services/authService';
import Button from '../../ui-components/Button/button';

const mockData = [
  {
    id: 1,
    name: '駕駛執照',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 10,
    lastOpened: 'Oct 29, 2024'
  },
  {
    id: 2,
    name: '銷售促進',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Oct 25, 2024'
  },
  {
    id: 3,
    name: '開計程車',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 0,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 4,
    name: '開計程車',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 5,
    name: '開計程車',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 6,
    name: '開計程車',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 0,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 7,
    name: '快遞服務',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 8,
    name: '開計程車',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 9,
    name: '乘車券',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 10,
    name: '計畫書',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  },
  {
    id: 11,
    name: '開發者',
    desc: '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: 8,
    lastOpened: 'Feb 25, 2025'
  }
];

export default function DashboardPage() {
  const { user, setUser } = useAuthContext();
  const navigate = useNavigate();
  const [itemsToShow, setItemsToShow] = useState(3);
  const [fadeIn, setFadeIn] = useState(false);
  const [sortColumn, setSortColumn] = useState('name');
  const [sortDirection, setSortDirection] = useState('asc');

  const loadMoreItems = () => {
    setItemsToShow((prev) => {
      const newCount = prev + 5;
      setFadeIn(true);
      requestAnimationFrame(() => {
        window.scrollTo({
          top: document.body.scrollHeight,
          behavior: 'smooth'
        });
      });

      setTimeout(() => {
        setFadeIn(false);
      }, 500);

      return newCount;
    });
  };

  const sortData = (data) => {
    return data.sort((a, b) => {
      let comparison = 0;

      if (typeof a[sortColumn] === 'string' && typeof b[sortColumn] === 'string') {
        comparison = a[sortColumn].localeCompare(b[sortColumn], 'zh-Hant', {
          sensitivity: 'base'
        });
      } else if (typeof a[sortColumn] === 'number' && typeof b[sortColumn] === 'number') {
        comparison = a[sortColumn] - b[sortColumn];
      } else if (a[sortColumn] instanceof Date && b[sortColumn] instanceof Date) {
        comparison = a[sortColumn] - b[sortColumn];
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  };

  const handleSort = (column) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'desc' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);
  };

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

        {mockData.length !== 0 ? (
          <div>
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
          </div>
        ) : (
          <></>
        )}
        {/* Library */}
        <div className="dashboard__library">
          <div className="dashboard__title dashboard__library-container">
            <h4>Library</h4>
            <Button
              iconName="new_window"
              iconStyling="dashboard-button__icon-flip"
              buttonVariant="primary"
              buttonText="Add Text"
              buttonOnClickFunc={() => console.log('click click')}
            />
          </div>
          {mockData.length !== 0 ? (
            <div>
              <table className="dashboard__table-container">
                <thead>
                  <tr>
                    <th></th>
                    <th onClick={() => handleSort('name')}>
                      <span className="dashboard__sortable-header">
                        <span>Name</span>
                        {sortColumn === 'name' && (
                          <span
                            className={`material-symbols-outlined dashboard__table-container__sort-arrow ${
                              sortDirection === 'asc'
                                ? 'dashboard__table-container__rotate-up'
                                : 'dashboard__table-container__rotate-down'
                            }`}>
                            arrow_drop_down
                          </span>
                        )}
                      </span>
                    </th>
                    <th onClick={() => handleSort('cards')}>
                      <span className="dashboard__sortable-header">
                        <span>Cards</span>
                        {sortColumn === 'cards' && (
                          <span
                            className={`material-symbols-outlined dashboard__table-container__sort-arrow ${
                              sortDirection === 'asc'
                                ? 'dashboard__table-container__rotate-up'
                                : 'dashboard__table-container__rotate-down'
                            }`}>
                            arrow_drop_down
                          </span>
                        )}
                      </span>
                    </th>
                    <th onClick={() => handleSort('lastOpened')}>
                      <span className="dashboard__sortable-header">
                        <span>Last Opened </span>
                        {sortColumn === 'lastOpened' && (
                          <span
                            className={`material-symbols-outlined dashboard__table-container__sort-arrow ${
                              sortDirection === 'asc'
                                ? 'dashboard__table-container__rotate-down'
                                : 'dashboard__table-container__rotate-up'
                            }`}>
                            arrow_drop_down
                          </span>
                        )}
                      </span>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortData(mockData.slice(0, itemsToShow)).map((item, index) => (
                    <tr
                      key={item.id}
                      className={`dashboard__table-container__item-row ${fadeIn && index >= itemsToShow - 5 ? 'dashboard__table-container__fade-in' : ''}`}>
                      <td>
                        <RoundIcon iconName="book_2" color="blue" />
                      </td>
                      <td>
                        <div className="dashboard__table-container__name">{item.name}</div>
                        <div className="dashboard__table-container__desc">{item.desc}</div>
                      </td>
                      <td className={item.cards === 0 ? 'dashboard--text-red' : ''}>
                        {item.cards}
                      </td>
                      <td>{item.lastOpened}</td>
                      <td>
                        <Button
                          iconName="&#xe41d;"
                          iconStyling="dashboard-button__icon-flip"
                          buttonVariant="tertiary"
                          buttonText="Review"
                          buttonOnClickFunc={() => console.log('click click')}
                          disabled={item.cards === 0 ? true : false}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {itemsToShow < mockData.length && ( // Only show button if there are more items to load
                <button className="dashboard__view-more-button" onClick={loadMoreItems}>
                  View More
                  <span className="material-symbols-outlined">keyboard_arrow_down</span>
                </button>
              )}
            </div>
          ) : (
            <div className="dashboard__no-text-library">
              <img src="/images/no_text_library.svg" />
              <div>
                <p className="dashboard--bold dashboard__no-text-library__text-margin">
                  Nothing here yet!
                </p>
                <p>
                  Add your own text, or <u>use a sample text</u>
                </p>
              </div>
            </div>
          )}
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
