import sendRequest from './sendRequest';

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL + 'api/users';

export async function signUp(userData) {
  console.log("Full request body:", userData);
  return await sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export async function logIn(credentials) {
  console.log("Full request body:", credentials);
  return await sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function logOut() {
  return await sendRequest(`${BASE_URL}/logout`, 'POST');
}

export async function forgotPassword(data) {
  console.log("Full request body:", data);
  return await sendRequest(`${BASE_URL}/forgot-password`, 'POST', data);
}

export async function resetPassword(data) {
  console.log("Full request body:", { token: data.token, newPassword: data.newPassword });
  return await sendRequest(`${BASE_URL}/reset-password/${data.token}`, 'POST', { newPassword: data.newPassword });
}

// In ResetPasswordPage.jsx
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
