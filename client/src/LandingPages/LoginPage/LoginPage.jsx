import { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  return (
    <main>
      <LandingPageNav />
      <div className="login-page-login-form-container">
        <form className="login-page-login-form">
          <label>Email/Username:</label>
          <input type="text" name="email" value={inputValue.email} onChange={handleChange} />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={inputValue.password}
            onChange={handleChange}
          />
          <button type="submit" className="login-page-login-button">
            Login
          </button>
        </form>
        <div>
          <button>Sign in with Google</button>
        </div>
        <Link to="/signup" className="login-page-signup-link">
          Don't have an account? Sign-Up
        </Link>
      </div>
    </main>
  );
}
