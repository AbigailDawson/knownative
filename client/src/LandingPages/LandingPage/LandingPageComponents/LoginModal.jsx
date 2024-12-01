import React, { useState } from 'react';
import Modal from '../../../ui-components/Modal/modal';
import './LoginModal.css';
import { Link } from 'react-router-dom';
import * as authService from '../../../services/authService';
import { useNavigate } from 'react-router-dom';
import { useAuthContext } from '../../../contexts/Auth/AuthProvider';
import { validateLogin } from '../../../utilities/validation';

const LoginModal = ({ setShowModal }) => {
  const [inputValue, setInputValue] = useState({
    email: '',
    password: ''
  });
  const [errorMessage, setErrorMessage] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { setUser } = useAuthContext();

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
    <Modal
      canCloseOnEscapeKey={true}
      setShowModal={setShowModal}
      hasCloseButton={true}
      hasCustomButtons={true}>
      <div className="login-modal-login-form-container">
        <div className="login-modal-container">
          <h1 className="login-modal-header">Log Into Your KnowNative Account</h1>
          <h2 className="login-modal-secondary-text">Lorem ipsum dolor sit amet consectetur.</h2>
          <form className="login-modal-login-form" onSubmit={handleLogin}>
            <div className="login-input-box">
              <input
                type="text"
                name="email"
                value={inputValue.email}
                onChange={handleChange}
                id="login-email"
                className="login-modal-input"
                placeholder=" "
              />
              <label htmlFor="login-email" className="login-label-container">
                <span className="login-label-text">Email Address</span>
              </label>
            </div>

            <div className="login-input-box">
              <input
                type={showPassword ? 'text' : 'password'}
                name="password"
                id="login-password"
                value={inputValue.password}
                onChange={handleChange}
                className="login-modal-input"
                placeholder=" "
              />
              <label htmlFor="login-password" className="login-label-container">
                <span className="login-label-text">Password</span>
              </label>
              <span
                className="material-symbols-outlined icon"
                onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? 'visibility_off' : 'visibility'}
              </span>
            </div>
            {/* Needs functionality */}
            <p className="login-modal-forgot">Forgot Password?</p>
            <div className="login-error-container">
              {errorMessage && <p className="login-error-message">{errorMessage}</p>}
            </div>
            <button type="submit" className="login-modal-login-button login-modal-button">
              Log In
            </button>
          </form>

          <div className="separator">
            <span>OR</span>
          </div>
          <div className="">
            <button className="login-google-button login-modal-button">
              <img
                src="/images/google_icon.svg"
                alt="google sign in"
                className="login-google-icon"
              />
              Log in with Google
            </button>
          </div>
          <Link to="/signup" className="login-modal-signup-link">
            Don't have an account? Sign-Up
          </Link>
        </div>
      </div>
    </Modal>
  );
};

export default LoginModal;
