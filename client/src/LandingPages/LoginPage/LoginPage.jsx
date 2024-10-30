import { useState } from 'react';
import './LoginPage.css';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  async function handleLogin(e) {
    e.preventDefault();
    try {
      const user = await authService.logIn(inputValue);
      navigate('/demo');
    } catch (error) {
      setErrorMessage('Invalid credentials.');
      setInputValue((inputValue) => {
        const clearedFields = { ...inputValue };
        for (let field in clearedFields) {
          clearedFields[field] = '';
        }
        return clearedFields;
      });
    }
  }

  return (
    <main>
      <LandingPageNav />
      <div className="login-page-login-form-container">
        <form className="login-page-login-form" onSubmit={handleLogin}>
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
          {errorMessage && <p className="login-error-message">{errorMessage}</p>}
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
