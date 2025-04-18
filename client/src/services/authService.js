import sendRequest from './sendRequest';

const BASE_URL = import.meta.env.VITE_SERVER_BASE_URL + 'api/users';

export async function signUp(userData) {
  return await sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export async function logIn(credentials) {
  return await sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function logOut() {
  return await sendRequest(`${BASE_URL}/logout`, 'POST');
}

export async function forgotPassword(data) {
  return await sendRequest(`${BASE_URL}/forgot-password`, 'POST', data);
}

export async function resetPassword(data) {
  return await sendRequest(`${BASE_URL}/reset-password/${data.token}`, 'POST', { password: data.newPassword });
}
