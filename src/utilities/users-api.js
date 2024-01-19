import sendRequest from './send-request'

// all code responsible for making fetch requests to the server
const BASE_URL = '/api/users' // if you see something with /api/ it's returning JSON data. its not responsible for rendering any kind of page or template, it's just responsible for sending back JSON data. it tells you about the endpoint. you can have api endpoints like this and non-api endpoints on the server. when you see this expect to get JSON data back. 
// this is the base url for all requests we make on this module

export function signUp(userData) { 
  return sendRequest(BASE_URL, 'POST', userData)
} 

export function logIn(credentials) {
  return sendRequest(`${BASE_URL}/login`, 'POST', credentials)
}

export function checkToken() {
  return sendRequest(`${BASE_URL}/check-token`)
}