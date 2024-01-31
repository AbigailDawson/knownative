import { getToken } from './users-service' // this is the function that retrieves the token from localStorage if there is one (and if it's not expired) -- will return either a valid token or null

export default async function sendRequest(url, method = 'GET', payload = null) {
  console.log('request sent')
  // Fetch accepts an options object as the 2nd argument used to include a data payload, set headers, etc. method and payload are default parameters -- if we don't pass something in when we call this function, these are the default values that will be sent for method and payload
  const options = { method }; // first check if there is some other method in the request
  if (payload) { // check for a payload, if we have a payload we should set it up as follows:
    options.headers = { 'Content-Type': 'application/json' }
    options.body = JSON.stringify(payload)
  }

  // after checking if there is a payload, grab the token
  const token = getToken() // will either grab a token or null
  if (token) {
    options.headers = options.headers || {}
    // if we have options.headers from the payload check above, set options.headers to that. however if the above block did not run, just set it to an empty object.
    options.headers.Authorization = `Bearer ${token}`
    // often, authorization headers start with the keyword 'bearer'
  }

  const res = await fetch(url, options) // make the fetch call
  // res.ok will be false if the status code set to 4xx in the controller action
  console.log(res)
  if (res.ok) return res.json() // if it's all good, we send back the json object
  throw new Error('Bad Request')
}