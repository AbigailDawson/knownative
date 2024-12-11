import sendRequest from './sendRequest';

const BASE_URL = '/api/users';

export async function signUp(userData) {
  return await sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export async function logIn(credentials) {
  return await sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export async function logOut() {
  return await sendRequest(`${BASE_URL}/logout`, 'POST');
}
