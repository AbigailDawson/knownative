import React, { useState, useReducer } from 'react';
import Modal from '../../../ui-components/Modal/modal';
import './LoginModal.scss';
import { Link } from 'react-router-dom';
import * as authService from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/Auth/AuthProvider';
import FormInput from '../Forms/FormInput/FormInput';
import RedirectModal from '../LandingPageRedirectModal/RedirectModal';
import Spinner from '../../../ui-components/Spinner/spinner';
import ForgotPasswordModal from '../ForgotPasswordModal/ForgotPasswordModal';

// Modal states
const MODAL_STATES = {
  LOGIN: 'LOGIN',
  FORGOT_PASSWORD: 'FORGOT_PASSWORD',
  NONE: 'NONE'
};

// Our Modal Reducer function takes care of the opening and closing of the modals.
const modalReducer = (state, action) => {
  switch (action.type) {
    case 'SHOW_LOGIN':
      return MODAL_STATES.LOGIN;
    case 'SHOW_FORGOT_PASSWORD':
      return MODAL_STATES.FORGOT_PASSWORD;
    case 'CLOSE_ALL':
      return MODAL_STATES.NONE;
    default:
      return state;
  }
};

const LoginModal = ({ setShowModal, openSignupModal }) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [loading, setLoading] = useState(false);
  const [currentModal, dispatchModal] = useReducer(modalReducer, MODAL_STATES.LOGIN);

  const navigate = useNavigate();
  const { setUser } = useAuthContext();

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
    setLoading(true);

    const loadingTimer = setTimeout(async () => {
      try {
        const user = await authService.logIn(inputValue);
        setUser(user);
        setIsLoggedIn(true);
        const timer = setTimeout(() => {
          navigate('/dashboard');
        }, 3000);

        return () => clearTimeout(timer);
      } catch (error) {
        setErrorMessage('Invalid credentials.');
        setInputValue((inputValue) => {
          const clearedFields = { ...inputValue };
          for (let field in clearedFields) {
            clearedFields[field] = '';
          }
          return clearedFields;
        });
      } finally {
        setLoading(false);
      }
    }, 1000);

    return () => clearTimeout(loadingTimer);
  };

  const handleSignupClick = (e) => {
    e.preventDefault();
    if (openSignupModal) {
      openSignupModal();
    }
  };

  const handleForgotPasswordClick = (e) => {
    e.preventDefault();
    dispatchModal({ type: 'SHOW_FORGOT_PASSWORD' });
  };

  const handleCloseForgotPassword = () => {
    dispatchModal({ type: 'SHOW_LOGIN' });
  };

  const handleCloseAllModals = () => {
    setShowModal(false);
  };

  if (!isLoggedIn) {
    return (
      <>
        {loading ? (
          <div className="login-modal__loading-overlay">
            <Spinner />
          </div>
        ) : (
          <>
            {currentModal === MODAL_STATES.LOGIN && (
              <Modal
                canCloseOnEscapeKey={true}
                setShowModal={handleCloseAllModals}
                hasCloseButton={true}
                hasCustomButtons={true}>
                <div className="login-modal__login-form-container">
                  <div className="login-modal__container">
                    <h1 className="login-modal__header">Log Into Your KnowNative Account</h1>
                    <h2 className="login-modal__secondary-text">Lorem ipsum dolor sit amet consectetur.</h2>
                    <form className="login-page__form" onSubmit={handleLogin}>
                      {formFields.map((input, idx) => (
                        <FormInput
                          key={idx}
                          {...input}
                          value={inputValue[input.name]}
                          onChange={handleChange}
                        />
                      ))}

                      <a href="#" onClick={handleForgotPasswordClick} className="login-page__forgot">
                        Forgot Password?
                      </a>
                      <div className="login-page__error-container">
                        {errorMessage && (
                          <div>
                            <img
                              className="login-page__error-symbol"
                              src="/images/error_note.svg"
                              alt="error symbol"
                            />{' '}
                            <p className="login-page__error-message login-modal__no-margin">{errorMessage}</p>{' '}
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
                    <a href="#" className="login-page__signup-link" onClick={handleSignupClick}>
                      Don't have an account? Sign-Up
                    </a>
                  </div>
                </div>
              </Modal>
            )}

            {currentModal === MODAL_STATES.FORGOT_PASSWORD && (
              <ForgotPasswordModal setShowModal={handleCloseForgotPassword} />
            )}
          </>
        )}
      </>
    );
  } else {
    return (
      <RedirectModal login={true} />
    );
  }
};

export default LoginModal;
