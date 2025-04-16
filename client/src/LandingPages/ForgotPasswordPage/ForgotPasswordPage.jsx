import { useState } from 'react';
import { forgotPassword } from '../../services/authService';
import '../LoginPage/LoginPage.scss';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await forgotPassword({ email });
      setMessage('Reset link sent! Check your email.');
      setError('');
    } catch (err) {
      setError(err.message);
      setMessage('');
    }
  }

  return (
    <div className="forgot-password-page">
      <h2>Forgot Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Send Reset Link</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
