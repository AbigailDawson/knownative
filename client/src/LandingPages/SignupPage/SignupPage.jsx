import React, { useState } from 'react';
import './SignupPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import FormInput from '../components/Forms/FormInput/FormInput';
import PasswordValidation from '../components/Forms/PasswordValidation';
import * as authService from '../../services/authService';
import { useAuthContext } from '../../contexts/Auth/AuthProvider';
import { validateInput } from '../../utilities/validation';
import Spinner from '../../ui-components/Spinner/spinner';
import RedirectModal from '../components/LandingPageRedirectModal/RedirectModal';

const SignupPage = () => {
  const [inputValue, setInputValue] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [inputErrors, setInputErrors] = useState({});
  const [errorMsg, setErrorMsg] = useState('');
  const [isPasswordTyping, setIsPasswordTyping] = useState(false);
  const [isConfirmPasswordTyping, setIsConfirmPasswordTyping] = useState(false);
  const [loading, setLoading] = useState(false);
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthContext();

  const formFields = [
    {
      name: 'firstName',
      label: 'First Name',
      type: 'text',
      id: 'signup-firstName',
      htmlFor: 'signup-firstName',
      required: true
    },
    {
      name: 'lastName',
      label: 'Last Name',
      type: 'text',
      id: 'signup-lastName',
      htmlFor: 'signup-lastName',
      required: true
    },
    {
      name: 'username',
      label: 'Username',
      type: 'text',
      id: 'signup-username',
      htmlFor: 'signup-username',
      required: true
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      id: 'signup-email',
      htmlFor: 'signup-email',
      required: true
    },
    {
      name: 'password',
      label: 'Password',
      type: 'password',
      id: 'signup-password',
      htmlFor: 'signup-password',
      required: true
    },
    {
      name: 'confirmPassword',
      label: 'Confirm Password',
      type: 'password',
      id: 'signup-confirmPassword',
      htmlFor: 'signup-confirmPassword',
      pattern: inputValue.password,
      required: true
    }
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
    
    // Clear error for this field when user starts typing
    if (inputErrors[name]) {
      setInputErrors({
        ...inputErrors,
        [name]: ''
      });
    }
  };

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    
    // Use the existing validation utility
    const newErrors = validateInput({ ...inputValue, [fieldName]: fieldValue });
    setInputErrors({ ...inputErrors, [fieldName]: newErrors[fieldName] });
  };

  const validateForm = () => {
    const errors = validateInput(inputValue);
    setInputErrors(errors);
    return Object.keys(errors).length === 0;
  };

  const handlePasswordFocus = () => {
    setIsPasswordTyping(true);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordTyping(true);
  };

  const handleGoogleSignup = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate loading time similar to LoginModal
    const loadingTimer = setTimeout(async () => {
      try {
        // Implement Google signup functionality
        const user = await authService.googleLogin();
        setUser(user);
        setIsSignedUp(true);
        
        // Redirect to dashboard after 3 seconds
        const redirectTimer = setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
        
        return () => clearTimeout(redirectTimer);
      } catch (error) {
        setErrorMsg('Google signup failed. Please try again.');
      } finally {
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(loadingTimer);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    
    // Validate form before submission
    if (!validateForm()) {
      return;
    }
    
    setErrorMsg('');
    setLoading(true);

    // Simulate loading time similar to LoginModal
    const loadingTimer = setTimeout(async () => {
      try {
        const user = await authService.signUp(inputValue);
        setUser(user);
        setIsSignedUp(true);
        
        // Redirect to dashboard after 3 seconds
        const redirectTimer = setTimeout(() => {
          navigate('/dashboard');
        }, 3000);
        
        return () => clearTimeout(redirectTimer);
      } catch (error) {
        // More specific error messages based on error type
        if (error.message.includes('email')) {
          setErrorMsg('This email is already registered. Please use a different email or log in.');
        } else if (error.message.includes('username')) {
          setErrorMsg('This username is already taken. Please choose a different username.');
        } else if (error.message.includes('network')) {
          setErrorMsg('Network error. Please check your connection and try again.');
        } else {
          setErrorMsg(error.message || 'Signup failed. Please try again.');
        }
        
        setInputValue({
          ...inputValue,
          password: '',
          confirmPassword: ''
        });
      } finally {
        setLoading(false);
      }
    }, 1000);
    
    return () => clearTimeout(loadingTimer);
  }

  if (isSignedUp) {
    return <RedirectModal login={false} />;
  }

  return (
    <main className="signup-page__main">
      <LandingPageNav />
      <section className="signup-page__container">
        <h1 className="signup-page__title">Create Your Knownative Account</h1>
        
        {loading ? (
          <div className="signup-page__loading-overlay">
            <Spinner />
          </div>
        ) : (
          <>
            {errorMsg && (
              <div className="signup-page__error-message">
                <h5>
                  <em>{errorMsg}</em>
                </h5>
              </div>
            )}
            
            <form className="signup-page__form" onSubmit={handleSubmit}>
              {formFields.map((input, idx) => (
                <React.Fragment key={idx}>
                  <FormInput
                    key={idx}
                    {...input}
                    value={inputValue[input.name]}
                    onChange={handleChange}
                    errorInputMessage={inputErrors[input.name]}
                    handleBlur={handleBlur}
                    onFocus={
                      input.name === 'password' 
                        ? handlePasswordFocus
                        : input.name === 'confirmPassword' 
                          ? handleConfirmPasswordFocus
                          : undefined
                    }
                  />
                  {input.name === 'password' && (
                    <div
                      className={`password-validation__wrapper 
                        ${isPasswordTyping
                          ? 'password-validation__wrapper--visible'
                          : 'password-validation__wrapper--hidden'
                        }`}>
                      <PasswordValidation password={inputValue.password} />
                    </div>
                  )}
                  {input.name === 'confirmPassword' && (
                    <div
                      className={`password-validation__wrapper 
                        ${isConfirmPasswordTyping
                          ? 'password-validation__wrapper--visible'
                          : 'password-validation__wrapper--hidden'
                        }`}>
                      <PasswordValidation
                        password={inputValue.password}
                        confirmPassword={inputValue.confirmPassword}
                        isConfirmField={true}
                      />
                    </div>
                  )}
                </React.Fragment>
              ))}
              
              <button 
                className="signup-page__button signup-page__button-email" 
                type="submit"
                disabled={loading}
              >
                Sign Up
              </button>
              
              <div className="signup-page__separator">
                <span className="signup-page__separator--text">OR</span>
              </div>
              
              <button 
                className="signup-page__button signup-page__button-google"
                onClick={handleGoogleSignup}
                disabled={loading}
              >
                <img
                  className="signup-page__button-google--icon"
                  src="/images/google-icon.png"
                  alt="Google sign up"
                />
                Sign up with Google
              </button>
              
              <div>
                <Link to="/login" className="signup-text">
                  Already have an account? Log in
                </Link>
              </div>
            </form>
          </>
        )}
      </section>
    </main>
  );
};

export default SignupPage;
