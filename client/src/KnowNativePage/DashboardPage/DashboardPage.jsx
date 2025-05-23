import './DashboardPage.scss';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ui-components/Button/button';
import { getUserTexts } from '../../utilities/texts-api';
import DashboardNavbar from '../components/DashboardNavbar';
import AddTextSlideout from '../AddTextPage/AddTextSlideout';
import Spinner from '../../ui-components/Spinner/spinner';

const mockData = [
  {
    _id: 1,
    title: '駕駛執照',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Oct 29, 2024'
  },
  {
    _id: 2,
    title: '銷售促進',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Oct 25, 2024'
  },
  {
    _id: 3,
    title: '開計程車',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 4,
    title: '開計程車',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 5,
    title: '開計程車',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 6,
    title: '開計程車',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 7,
    title: '快遞服務',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 8,
    title: '開計程車',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 9,
    title: '乘車券',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      },
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 10,
    title: '計畫書',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [
      {
        text: 'asdfasdfasd',
        status: 'active',
        frontProperties: 'asdfasdf',
        backProperties: 'aslfjasd;f'
      }
    ],
    lastOpened: 'Feb 25, 2025'
  },
  {
    _id: 11,
    title: '開發者',
    content:
      '每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，所以我也交了好幾個朋友。真是什麼樣的人都有啊！',
    cards: [],
    lastOpened: 'Feb 25, 2025'
  }
];

export default function DashboardPage() {
  const { user, loading } = useAuthContext();
  const navigate = useNavigate();
  const [itemsToShow, setItemsToShow] = useState(3);
  const [fadeIn, setFadeIn] = useState(false);
  const [fadeOut, setFadeOut] = useState(false);
  const [sortColumn, setSortColumn] = useState('title');
  const [sortDirection, setSortDirection] = useState('asc');
  const [isAddTextOpen, setIsAddTextOpen] = useState(false);
  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);

  const [texts, setTexts] = useState([]);
  const [error, setError] = useState(null);

  const showMoreItems = (amount) => {
    setItemsToShow((prev) => prev + amount);
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
  };

  const showLessItems = (amount) => {
    if (itemsToShow > 3) {
      setFadeOut(true); // Start fade-out animation

      const listContainer = document.querySelector('.dashboard__table-container');
      const firstVisibleItem = document.querySelector('.dashboard__table-container__item-row');

      if (!listContainer || !firstVisibleItem) return;

      const startScroll = window.scrollY;
      const endScroll = firstVisibleItem.getBoundingClientRect().top + window.scrollY - 20;
      const duration = 500;
      let startTime;

      const smoothScroll = (timestamp) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);

        if (progress < 1) {
          requestAnimationFrame(smoothScroll);
        } else {
          setTimeout(() => {
            setItemsToShow((prev) => {
              const newAmount = Math.max(prev - amount, 3);
              return newAmount;
            });
            setFadeOut(false);
          }, 10);
        }
      };

      requestAnimationFrame(smoothScroll);
    }
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
      } else if (sortColumn === 'cards' && Array.isArray(a.cards) && Array.isArray(b.cards)) {
        comparison = a.cards.length - b.cards.length;
      }

      return sortDirection === 'asc' ? comparison : -comparison;
    });
  };

  const handleSort = (column) => {
    const newDirection = sortColumn === column && sortDirection === 'asc' ? 'content' : 'asc';
    setSortColumn(column);
    setSortDirection(newDirection);
  };

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

  useEffect(() => {
    const fetchTexts = async () => {
      try {
        if (user._id) {
          const texts = await getUserTexts();
          setTexts(texts);
        }
      } catch (error) {
        console.log('Error fetching texts:', error);
      }
    };
    fetchTexts();
  }, [user]);

  if (loading) {
    return (
      <div className="dashboard">
        <div className="dashboard__main">
          <div className="dashboard__loading-overlay">
            <Spinner />
          </div>
        </div>
      </div>
    );
  }

  if (!user) {
    return (
      <div>
        <p>
          User not logged in. Please log in <Link to="/login">here</Link>.
        </p>
      </div>
    );
  }

  return (
    <div className="dashboard">
      <DashboardNavbar activeTab="Dashboard" />
      <div className="dashboard__main">
        <div className="dashboard__user-info">
          <div className="dashboard__user-dropdown">
            <button
              className="dashboard__user-dropdown-options"
              onClick={() => setIsUserDropdownOpen((prev) => !prev)}>
              <p className="dashboard__user-name">{user.username}</p>
              <img
                className="dashboard__user-profile-pic"
                src="/images/square-logo.png"
                alt="User profile picture."
              />
              <p className="dashboard__user-dropdown-icon">{isUserDropdownOpen ? '┓' : '┕'}</p>
            </button>

            {isUserDropdownOpen && (
              <div className="dashboard__user-dropdown-panel">
                <p>
                  <strong>
                    {user.firstName} {user.lastName}
                  </strong>
                </p>
                <p>Joined {new Date(user.createdAt).toLocaleDateString()}</p>
              </div>
            )}
          </div>
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

        {texts.length !== 0 ? (
          <div>
            <div className="dashboard__title dashboard__title--subtitle">
              <h4>Jump back in</h4>
            </div>
            <div className="dashboard dashboard__card">
              <div className="dashboard__card__sub-container">
                <div className="dashboard__card__icon">
                  <RoundIcon iconName="book_2" color="teal" />
                </div>
                <div className="dashboard__card__last-opened-content">
                  <h2 className="dashboard__card-title">開計程車</h2>
                  <p className="dashboard dashboard__card-body">
                    每天我要到許多地方去，也會遇到很多人。有些人喜歡叫我「左轉」、「右轉」、「停」；
                    有些人會把髒東西留在我的車上。不過也有一些不錯的人，可以從他們身上學到很多東西，
                    所以我也交了好幾個朋友。真是什麼樣的人都有啊！
                  </p>
                </div>
              </div>
              <div className="dashboard__card-button">
                <Button
                  iconName="&#xe41d;"
                  iconStyling="reusable-button__icon-flip"
                  buttonVariant="tertiary"
                  buttonText="Review"
                  buttonOnClickFunc={() => console.log('click click')}
                />
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
              buttonOnClickFunc={() => setIsAddTextOpen(true)}
            />
          </div>
          {texts.length !== 0 ? (
            <div>
              <table className="dashboard__table-container">
                <thead>
                  <tr>
                    <th></th>
                    <th onClick={() => handleSort('title')}>
                      <span className="dashboard__sortable-header">
                        <span>Name</span>
                        <span
                          className={`material-symbols-outlined dashboard__table-container__sort-arrow ${
                            sortColumn === 'title'
                              ? sortDirection === 'asc'
                                ? 'dashboard__table-container__rotate-up'
                                : 'dashboard__table-container__rotate-down'
                              : 'dashboard__table-container__sort-inactive'
                          }`}>
                          arrow_drop_down
                        </span>
                      </span>
                    </th>
                    <th onClick={() => handleSort('cards')}>
                      <span className="dashboard__sortable-header">
                        <span>Cards</span>
                        <span
                          className={`material-symbols-outlined dashboard__table-container__sort-arrow ${
                            sortColumn === 'cards'
                              ? sortDirection === 'asc'
                                ? 'dashboard__table-container__rotate-up'
                                : 'dashboard__table-container__rotate-down'
                              : 'dashboard__table-container__sort-inactive'
                          }`}>
                          arrow_drop_down
                        </span>
                      </span>
                    </th>
                    <th onClick={() => handleSort('lastOpened')}>
                      <span className="dashboard__sortable-header">
                        <span>Last Opened </span>
                        <span
                          className={`material-symbols-outlined dashboard__table-container__sort-arrow ${
                            sortColumn === 'lastOpened'
                              ? sortDirection === 'asc'
                                ? 'dashboard__table-container__rotate-up'
                                : 'dashboard__table-container__rotate-down'
                              : 'dashboard__table-container__sort-inactive'
                          }`}>
                          arrow_drop_down
                        </span>
                      </span>
                    </th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {sortData(texts.slice(0, itemsToShow)).map((item, index) => (
                    <tr
                      key={item._id}
                      className={`dashboard__table-container__item-row 
                        ${fadeIn && index >= itemsToShow - 5 ? 'dashboard__table-container__fade-in' : ''}
                        ${fadeOut && index >= itemsToShow - 5 ? 'dashboard__table-container__fade-out' : ''}`}>
                      <td>
                        <RoundIcon iconName="book_2" color="blue" />
                      </td>
                      <td>
                        <button
                          className="dashboard__table-container__name dashboard__link"
                          onClick={() => navigate(`/text/${item._id}`, { state: { text: item } })}
                        >
                          {item.title}
                        </button>
                        <div className="dashboard__table-container__desc">{item.content}</div>
                      </td>
                      <td className={item.cards.length === 0 ? 'dashboard--text-red' : ''}>
                        {item.cards.length}
                      </td>
                      <td>{item.lastOpened}</td>
                      <td>
                        <Button
                          iconName="&#xe41d;"
                          iconStyling="reusable-button__icon-flip"
                          buttonVariant="tertiary"
                          buttonText="Review"
                          buttonOnClickFunc={() => navigate(`/text/${item._id}`, { state: { text: item } })}
                          disabled={item.cards.length === 0}
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {texts.length > 3 && (
                <div className="dashboard__view-container">
                  <button
                    disabled={itemsToShow >= texts.length}
                    className="dashboard__view-button"
                    onClick={() => showMoreItems(5)}>
                    View More
                    <span className="material-symbols-outlined">keyboard_arrow_down</span>
                  </button>
                  <button
                    disabled={itemsToShow <= 3}
                    className={`dashboard__view-button`}
                    onClick={() => showLessItems(5)}>
                    View Less
                    <span className="material-symbols-outlined">keyboard_arrow_up</span>
                  </button>
                </div>
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
      <div
        className={`dashboard__overlay ${isAddTextOpen ? 'dashboard__overlay--active' : ''}`}
        onClick={() => setIsAddTextOpen(false)}></div>
      <AddTextSlideout isOpen={isAddTextOpen} onClose={() => setIsAddTextOpen(false)} />
    </div>
  );
}
