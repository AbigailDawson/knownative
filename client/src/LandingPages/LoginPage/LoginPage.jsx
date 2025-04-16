import { useState } from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import FormInput from '../components/Forms/FormInput/FormInput';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const navigate = useNavigate();
  const { setUser } = useAuthContext();

  // Add more form fields as needed here:
  const formFields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      id: 'login-email',
      htmlFor: 'login-email'
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      id: 'login-password',
      htmlFor: 'login-password'
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
  };

  async function handleLogin(e) {
    e.preventDefault();
    setErrorMessage('');

    try {
      const user = await authService.logIn(inputValue);
      setUser(user);
      navigate('/login-success');
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
      <div className="login-page__form-container">
        <div className="login-page__container">
          <h1 className="login-page__header">Log in to view your dashboard</h1>
          <form className="login-page__form" onSubmit={handleLogin}>
            {formFields.map((input, idx) => (
              <FormInput
                key={idx}
                {...input}
                value={inputValue[input.name]}
                onChange={handleChange}
              />
            ))}

            {/* Needs functionality */}
            <Link to="/forgot-password" className="login-page__forgot">Forgot Password?</Link>
            <div className="login-page__error-container">
              {errorMessage && (
                <div>
                  <img
                    className="login-page__error-symbol"
                    src="/images/error_note.svg"
                    alt="error symbol"
                  />{' '}
                  <p className="login-page__error-message">{errorMessage}</p>{' '}
                </div>
              )}
            </div>
            <button type="submit" className="login-page__button--primary login-page__button">
              Log In
            </button>
          </form>

          <div className="login-page__separator">
            <span className="login-page__separator__text">OR</span>
          </div>
          <div className="">
            <button className="login-page__button--google login-page__button">
              <img
                src="/images/google_icon.svg"
                alt="google sign in"
                className="login-page__google-icon"
              />
              Log in with Google
            </button>
          </div>
          <Link to="/signup" className="login-page__signup-link">
            Don't have an account? Sign-Up
          </Link>
        </div>
      </div>
    </main>
  );
}
