import sendRequest from './sendRequest';

const BASE_URL = '/api/users';

export async function signUp(userData) {
  return await sendRequest(`${BASE_URL}/signup`, 'POST', userData);
}

export async function logIn(credentials) {
  return await sendRequest(`${BASE_URL}/login`, 'POST', credentials);
}

export function logOut() {
  // Logs out the user by removing the token from the local storage.
}

export function getUser() {
  // This function retrieves the user data from the token stored in the local storage.
  return null;
}

export function getToken() {
    // This function retrieves the token from the local storage.
    // Checks if the token exists, decodes the token and verifies its expiration.
    // If the token is valid, returns it. If not, removes the token from localStorage and returns null.
}