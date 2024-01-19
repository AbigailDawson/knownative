// use this module for all non-react code that doesn't involve making fetch requests

import * as usersAPI from './users-api' // for more on this import method, see the line at the top of the SignUpFormFunc.jsx module. this bundles all the functions that we're going to use from users-api

// LOGIN
export async function logIn(userData) {
  const token = await usersAPI.logIn(userData)
  localStorage.setItem('token', token)
  return getUser()
}

export async function signUp(userData) { // contains logic specific to signing up that doesn't involve making a fetch request. instead it relies on the usersAPI to make the fetch request FOR us (see users-api)
  const token = await usersAPI.signUp(userData) // pass in userData that got passed in to this function. this is a different function fron the one in the line above. it's going to call from the users-api module
  // JSON WEB TOKEN AUTHENTICATION! 
  // different from oauth and django. on our server, in order to indicate that someone is currently logged in, our server is going to create a web token. instead of responding with a user object, it sends a response that is a web token. this token will have the user object ENCODED in the token. it also reflects that someone is indeed logged in. so our browser is going to keep track of whether someone is logged in or not (UNLIKE our server keeping track of a 'session')
  // LOCAL STORAGE! 
  // a storage object that exists in the browser and represents your browser's local storage. we are using the setItem() method which takes 2 arguments:
  // (1) the name to represent what we're storing
  // (2) the actual piece of data we're storing
  // local storage ONLY stores and retrieves STRINGS --> object could be a string using JSON.STRINGIFY(obj)
  localStorage.setItem('token', token) 
  return getUser() // do this instead of returning the token, because this is the function that checks the token status and extracts the user
}

// RETRIEVE A TOKEN
export function getToken() {
  const token = localStorage.getItem('token') // grab the token from localStorage and store it in the variable. IF there is no token, this will return NULL (no one is logged in)
  if (!token) return null // localStorage is empty, no user logged in
  const payload = JSON.parse(atob(token.split('.')[1]))
  // pass in a stringified JSON object
  // grab payload from web token by parsing it into a js object
  // now we can check the exp property to see if it's expired
  // A JWT's exp is expressed in seconds, not milliseconds, so convert
  if (payload.exp < Date.now() / 1000) { // if this is the case, we are dealing with an invalid token. so we want to remove it from localStorage and return null
    localStorage.removeItem('token')
    return null
  }
  return token
}

// EXTRACT THE USER FROM A TOKEN
export function getUser() {
  const token = getToken() // this will either return with a token or null
  // if there is a token, return the user in the payload. if there is not, return null.
  // to get the user, split the token apart to get the user part of the token
  // need to use .user because the object it gets parsed into has 3 parties, the user, the iat and the exp. so we need to grab just .user
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

// LOGOUT FUNCTIONALITY
export function logOut() {
  localStorage.removeItem('token') // all we need to do is remove the token
}

export function checkToken() {
  return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}