import { useState } from 'react';
import './LoginPage.scss';
import { Link } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import * as authService from '../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import FormInput from '../components/Forms/FormInput/FormInput';
import Spinner from '../../ui-components/Spinner/spinner';
import RedirectModal from '../components/LandingPageRedirectModal/RedirectModal';

export default function LoginPage() {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [inputErrors, setInputErrors] = useState({});
  const [errorMessage, setErrorMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthContext();

  // Add more form fields as needed here:
  const formFields = [
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      id: 'login-email',
      htmlFor: 'login-email',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      id: 'login-password',
      htmlFor: 'login-password',
      required: true
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
    
    // Clear error for this field when user starts typing
    if (inputErrors[name]) {
      setInputErrors({
        ...inputErrors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    
    // Basic validation
    let newErrors = { ...inputErrors };
    
    if (name === 'email') {
      if (!value) {
        newErrors.email = 'Email is required';
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        newErrors.email = 'Please enter a valid email address';
      } else {
        newErrors.email = '';
      }
    }
    
    if (name === 'password') {
      if (!value) {
        newErrors.password = 'Password is required';
      } else {
        newErrors.password = '';
      }
    }
    
    setInputErrors(newErrors);
  };

  const validateForm = () => {
    const errors = {};
    
    if (!inputValue.email) {
      errors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(inputValue.email)) {
      errors.email = 'Please enter a valid email address';
    }
    
    if (!inputValue.password) {
      errors.password = 'Password is required';
    }
    
    setInputErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handleForgotPassword = (e) => {
    e.preventDefault();
    navigate('/forgot-password');
  };

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate loading time similar to LoginModal
    const loadingTimer = setTimeout(async () => {
      try {
        // Implement Google login functionality
        const user = await authService.googleLogin();
        setUser(user);
        setIsLoggedIn(true);
        
        // Redirect to dashboard after 3 seconds
        const redirectTimer = setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
        
        return () => clearTimeout(redirectTimer);
      } catch (error) {
        setErrorMessage('Google login failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(loadingTimer);
  };

  async function handleLogin(e) {
    e.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setErrorMessage('');
    setLoading(true);

    // Simulate loading time similar to LoginModal
    const loadingTimer = setTimeout(async () => {
      try {
        const user = await authService.logIn(inputValue);
        setUser(user);
        setIsLoggedIn(true);
        
        // Redirect to dashboard after 3 seconds
        const redirectTimer = setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
        
        return () => clearTimeout(redirectTimer);
      } catch (error) {
        // More specific error messages based on error type
        if (error.message.includes('credentials')) {
          setErrorMessage('Invalid email or password. Please try again.');
        } else if (error.message.includes('network')) {
          setErrorMessage('Network error. Please check your connection and try again.');
        } else {
          setErrorMessage(error.message || 'Login failed. Please try again.');
        }
        
        setInputValue({
          ...inputValue,
          password: ''
        });
      } finally {
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(loadingTimer);
  }

  if (isLoggedIn) {
    return <RedirectModal login={true} />;
  }

  return (
    <main>
      <LandingPageNav />
      <div className="login-page__form-container">
        <div className="login-page__container">
          <h1 className="login-page__header">Log in to view your dashboard</h1>
          
          {loading ? (
            <div className="login-page__loading-overlay">
              <Spinner />
            </div>
          ) : (
            <>
              <form className="login-page__form" onSubmit={handleLogin}>
                {formFields.map((input, idx) => (
                  <FormInput
                    key={idx}
                    {...input}
                    value={inputValue[input.name]}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    errorInputMessage={inputErrors[input.name]}
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
              
              <div>
                <button 
                  className="login-page__button--google login-page__button"
                  onClick={handleGoogleLogin}
                  disabled={loading}
                >
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
            </>
          )}
        </div>
      </div>
    </main>
  );
}
