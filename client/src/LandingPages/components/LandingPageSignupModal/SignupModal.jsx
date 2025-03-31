import React, { useState } from 'react';
import Modal from '../../../ui-components/Modal/modal';
import '../../SignupPage/SignupPage.scss';
import { Link, useNavigate } from 'react-router-dom';
import FormInput from '../Forms/FormInput/FormInput';
import PasswordValidation from '../Forms/PasswordValidation';
import * as authService from '../../../services/authService';
import { useAuthContext } from '../../../contexts/Auth/AuthProvider';
import { validateInput } from '../../../utilities/validation';
import RedirectModal from '../LandingPageRedirectModal/RedirectModal';
import { Box, CircularProgress } from '@mui/material';

const SignupModal = ({ setShowModal }) => {
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
  const [isRegistered, setIsRegistered] = useState(false);
  const [loading, setLoading] = useState(false);
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
    setInputValue({ ...inputValue, [e.target.name]: e.target.value });
  };

  const handleBlur = (e) => {
    const fieldName = e.target.name;
    const fieldValue = e.target.value;
    const newErrors = validateInput({ ...inputValue, [fieldName]: fieldValue });
    setInputErrors({ ...inputErrors, [fieldName]: newErrors[fieldName] });
  };

  const handlePasswordFocus = () => {
    setIsPasswordTyping(true);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordTyping(true);
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    setLoading(true);

    const loadingTimer = setTimeout(async () => {
      try {
        const user = await authService.signUp(inputValue);
        setUser(user);
        setIsRegistered(true);
        const timer = setTimeout(() => {
          navigate('/dashboard');
        }, 3000);

        return () => clearTimeout(timer);
      } catch (err) {
        setInputValue({
          ...inputValue,
          password: '',
          confirmPassword: ''
        });
        setErrorMsg(err.message);
      } finally {
        setLoading(false);
      };
    }, 3000);

    return () => clearTimeout(loadingTimer);
  };

  if (!isRegistered) {
    return (
      <>
        {loading ? (
          <div className="signup-page__loading-overlay">
            <svg width={0} height={0}>
              <defs>
                <linearGradient id="my_gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#333" />
                  <stop offset="100%" stopColor="transparent" />
                </linearGradient>
              </defs>
            </svg>
            <Box>
              <CircularProgress
                variant="indeterminate"
                disableShrink
                sx={{
                  'svg circle': { stroke: 'url(#my_gradient)' }
                }}
                size={80}
                thickness={4}
              />
            </Box>
          </div>
        ) : (
          <Modal
            canCloseOnEscapeKey={true}
            setShowModal={setShowModal}
            hasCloseButton={true}
            hasCustomButtons={true}>
            <main className='signup-page__main'>
              <section className="signup-page__container">
                <h1 className="signup-page__title">Create Your Knownative Account</h1>
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
                        onFocus={input.name === 'password' ? handlePasswordFocus
                          : input.name === 'confirmPassword' ? handleConfirmPasswordFocus
                            : undefined}
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
                      {
                        input.name === 'confirmPassword' && (
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
                        )
                      }
                    </React.Fragment>
                  ))}
                  <button className="signup-page__button signup-page__button-email" type="submit">
                    Sign Up
                  </button>
                  <div className="signup-page__separator">
                    <span className="signup-page__separator--text">OR</span>
                  </div>
                  <button className="signup-page__button signup-page__button-google">
                    <img
                      className="signup-page__button-google--icon"
                      src="../../../public/images/google-icon.png"
                      alt="google sign in"
                    />
                    Sign up with Google
                  </button>
                  <div>
                    <Link to="/login" className="signup-page__login-link">
                      Already have an account? Log in
                    </Link>
                  </div>
                </form>
              </section>
            </main>
          </Modal>
        )}
      </>
    );
  } else {
    return (
      <RedirectModal login={false} />
    )
  };


};

export default SignupModal;