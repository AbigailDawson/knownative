import { useState } from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { validateLogin } from '../../utilities/validation';
import FormInput from '../components/Forms/FormInput/FormInput';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
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
      htmlFor: 'login-password',
      pattern: '^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{6,20}$'
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

    const error = validateLogin(inputValue);
    if (error) {
      setErrorMessage(error);
      return;
    }

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
            {/* <div className="login-page__input-box">
              <input
                type="text"
                name="email"
                value={inputValue.email}
                onChange={handleChange}
                id="login-email"
                className="login-page__input"
                placeholder=" "
              />
              <label htmlFor="login-email" className="login-page__label-container">
                <span className="">Email Address</span>
              </label>
            </div>

            <div className="login-page__input-box">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="login-password"
                value={inputValue.password}
                onChange={handleChange}
                className="login-page__input"
                placeholder=" "
              />
              <label htmlFor="login-password" className="login-page__label-container">
                <span className="">Password</span>
              </label>
              <span
                className="login-page__icon material-symbols-outlined"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </div> */}

            {/* Needs functionality */}
            <p className="login-page__forgot">Forgot Password?</p>
            <div className="login-page__error-container">
              {errorMessage && <p className="login-page__error-message">{errorMessage}</p>}
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
