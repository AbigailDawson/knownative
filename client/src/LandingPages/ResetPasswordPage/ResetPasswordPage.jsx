import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { resetPassword } from '../../services/authService';
import '../LoginPage/LoginPage.scss';

export default function ResetPassword() {
  const [searchParams] = useSearchParams();
  const token = searchParams.get('token');
  const [newPassword, setNewPassword] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
  
    if (!newPassword) {
      setError("Password is required!");
      return;
    }
  
    try {
      await resetPassword({ token, newPassword });
      setMessage('Password reset successfully!');
      setError('');
    } catch (err) {
      setError(err.message || "An error occurred while resetting the password.");
      setMessage('');
    }
  }
  

  return (
    <div className="reset-password-page">
      <h2>Reset Your Password</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="password"
          placeholder="New Password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          required
        />
        <button type="submit">Reset Password</button>
      </form>
      {message && <p className="success">{message}</p>}
      {error && <p className="error">{error}</p>}
    </div>
  );
}
