import * as usersAPI from './users-api'

// LOGIN
export async function logIn(userData) {
  const token = await usersAPI.logIn(userData)
  localStorage.setItem('token', token)
  return getUser()
}

export async function signUp(userData) { 
  const token = await usersAPI.signUp(userData)
  localStorage.setItem('token', token) 
  return getUser()
}

// RETRIEVE A TOKEN
export function getToken() {
  const token = localStorage.getItem('token') 
  if (!token) return null
  const payload = JSON.parse(atob(token.split('.')[1]))
  if (payload.exp < Date.now() / 1000) {
    localStorage.removeItem('token')
    return null
  }
  return token
}

// EXTRACT THE USER FROM A TOKEN
export function getUser() {
  const token = getToken()
  return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

// LOGOUT
export function logOut() {
  localStorage.removeItem('token')
}

export function checkToken() {
  return usersAPI.checkToken().then(dateStr => new Date(dateStr))
}