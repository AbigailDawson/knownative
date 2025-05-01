import './CardPage.scss';
import { useEffect, useState } from 'react';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { Link, useNavigate } from 'react-router-dom';
import Button from '../../ui-components/Button/button';
import { getUserTexts } from '../../utilities/texts-api';
import DashboardNavbar from '../components/DashboardNavbar';
import AddTextSlideout from '../AddTextPage/AddTextSlideout';

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

export default function CardPage() {
  const { user } = useAuthContext();
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
          console.log(user);
          const texts = await getUserTexts(user._id);
          setTexts(texts);
          console.log(texts);
        }
      } catch (error) {
        console.log('Error fetching texts:', error);
      }
    };
    fetchTexts();
  }, [user]);

  return user ? (
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
          <h1>Cards</h1>
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
      </div>
      <div
        className={`dashboard__overlay ${isAddTextOpen ? 'dashboard__overlay--active' : ''}`}
        onClick={() => setIsAddTextOpen(false)}></div>
      <AddTextSlideout isOpen={isAddTextOpen} onClose={() => setIsAddTextOpen(false)} />
    </div>
  ) : (
    <div>
      <p>
        User not logged in. Please log in <Link to="/login">here</Link>.
      </p>
    </div>
  );
}
