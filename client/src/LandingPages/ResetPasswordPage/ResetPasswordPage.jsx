import { useState } from 'react';
import { resetPassword } from '../../services/authService';
import { useSearchParams, useNavigate } from 'react-router-dom';
import LandingPageNav from '../components/LandingPageHeader/LandingPageNav';
import LandingPageFooter from '../components/LandingPageFooter/LandingPageFooter';
import FormInput from '../components/Forms/FormInput/FormInput';
import PasswordValidation from '../components/Forms/PasswordValidation';
import Spinner from '../../ui-components/Spinner/spinner';
import './ResetPasswordPage.scss';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({});
  const [isPasswordTyping, setIsPasswordTyping] = useState(false);
  const [isConfirmPasswordTyping, setIsConfirmPasswordTyping] = useState(false);
  const navigate = useNavigate();

  const validatePassword = (password) => {
    if (!password) {
      return 'Password is required';
    } else if (password.length < 8) {
      return 'Password must be at least 8 characters long';
    }
    return '';
  };

  const validateConfirmPassword = (password, confirmPassword) => {
    if (!confirmPassword) {
      return 'Please confirm your password';
    } else if (password !== confirmPassword) {
      return 'Passwords do not match';
    }
    return '';
  };

  const handleBlur = (field) => {
    if (field === 'newPassword') {
      const error = validatePassword(newPassword);
      setInputErrors(prev => ({ ...prev, newPassword: error }));
    } else if (field === 'confirmPassword') {
      const error = validateConfirmPassword(newPassword, confirmPassword);
      setInputErrors(prev => ({ ...prev, confirmPassword: error }));
    }
  };

  const handlePasswordFocus = () => {
    setIsPasswordTyping(true);
  };

  const handleConfirmPasswordFocus = () => {
    setIsConfirmPasswordTyping(true);
  };

  async function handleSubmit(e) {
    e.preventDefault();
  
    const passwordError = validatePassword(newPassword);
    const confirmError = validateConfirmPassword(newPassword, confirmPassword);
    
    if (passwordError || confirmError) {
      setInputErrors({
        newPassword: passwordError,
        confirmPassword: confirmError
      });
      return;
    }
    
    setLoading(true);
    
    try {
      await resetPassword({ token, newPassword });
      setMessage('Password reset successfully! You will be redirected to login page.');
      setError('');
      setTimeout(() => {
        navigate('/login');
      }, 3000);
    } catch (err) {
      setError(err.message || "An error occurred while resetting the password. The link may have expired.");
      setMessage('');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      <LandingPageNav />
      <div className="reset-password-page">
        <div className="reset-password-container">
          <h1 className="reset-password-title">Reset Your Password</h1>
          <p className="reset-password-description">
            Please enter your new password below.
          </p>
          
          {loading ? (
            <div className="reset-password-loading">
              <Spinner />
            </div>
          ) : (
            <form className="reset-password-form" onSubmit={handleSubmit}>
              <FormInput
                name="newPassword"
                label="New Password"
                type="password"
                id="reset-password"
                htmlFor="reset-password"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                onBlur={() => handleBlur('newPassword')}
                onFocus={handlePasswordFocus}
                errorInputMessage={inputErrors.newPassword}
                required={true}
              />
              
              <div className={`password-validation__wrapper ${isPasswordTyping ? 'password-validation__wrapper--visible' : 'password-validation__wrapper--hidden'}`}>
                <PasswordValidation password={newPassword} />
              </div>
              
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
                id="confirm-password"
                htmlFor="confirm-password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                onBlur={() => handleBlur('confirmPassword')}
                onFocus={handleConfirmPasswordFocus}
                errorInputMessage={inputErrors.confirmPassword}
                required={true}
              />
              
              <div className={`password-validation__wrapper ${isConfirmPasswordTyping ? 'password-validation__wrapper--visible' : 'password-validation__wrapper--hidden'}`}>
                <PasswordValidation 
                  password={newPassword}
                  confirmPassword={confirmPassword}
                  isConfirmField={true}
                />
              </div>
              
              <button type="submit" className="reset-password-button">Reset Password</button>
              
              {message && <p className="reset-password-message reset-password-message--success">{message}</p>}
              {error && <p className="reset-password-message reset-password-message--error">{error}</p>}
              
              {!token && (
                <p className="reset-password-message reset-password-message--error">
                  Invalid or missing reset token. Please request a new password reset link.
                </p>
              )}
            </form>
          )}
        </div>
      </div>
      <LandingPageFooter />
    </>
  );
}
