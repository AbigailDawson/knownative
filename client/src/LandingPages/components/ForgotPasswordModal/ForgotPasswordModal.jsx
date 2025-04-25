import { useState } from 'react';
import { forgotPassword } from '../../../services/authService';
import Modal from '../../../ui-components/Modal/modal.jsx';
import FormInput from '../Forms/FormInput/FormInput.jsx';
import Spinner from '../../../ui-components/Spinner/spinner';
import './ForgotPasswordModal.scss';

export default function ForgotPasswordModal({ setShowModal }) {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [inputErrors, setInputErrors] = useState({});

  const validateEmail = (email) => {
    if (!email) {
      return 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      return 'Please enter a valid email address';
    }
    return '';
  };

  const handleBlur = () => {
    const error = validateEmail(email);
    setInputErrors({ email: error });
  };

  async function handleSubmit(e) {
    e.preventDefault();
    
    const error = validateEmail(email);
    if (error) {
      setInputErrors({ email: error });
      return;
    }
    
    setLoading(true);
    
    try {
      await forgotPassword({ email });
      setMessage('Reset link sent! Check your email.');
      setError('');
    } catch (err) {
      setError(err.message || 'An error occurred. Please try again.');
      setMessage('');
    } finally {
      setLoading(false);
    }
  }

  return (
    <>
      {loading ? (
        <div className="forgot-password-modal__loading-overlay">
          <Spinner />
        </div>
      ) : (
        <Modal
          canCloseOnEscapeKey={true}
          modalTitle="" // This prop needs to be updated.
          setShowModal={setShowModal}
          hasCloseButton={true}
          hasCustomButtons={true}
          >
          <div className="forgot-password-modal-container">
            <h1 className="forgot-password-modal__title">Forgot Your Password?</h1>
            <p className="forgot-password-modal__description">
              Enter your email address below and we'll send you a link to reset your password.
            </p>
            <form className='forgot-password-modal__form' onSubmit={handleSubmit}>
              <FormInput
                name="email"
                label="Email Address"
                type="email"
                id="forgot-password-email"
                htmlFor="forgot-password-email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onBlur={handleBlur}
                errorInputMessage={inputErrors.email}
                required={true}
              />
              <button className='forgot-password-modal__button' type="submit">Send Reset Link</button>
            </form>
            {message && <p className="forgot-password-modal__message--success">{message}</p>}
            {error && <p className="forgot-password-modal__message--error">{error}</p>}
          </div>
        </Modal>
      )}
    </>
  );
}