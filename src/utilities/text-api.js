import sendRequest from './send-request'
const BASE_URL = '/api/text'

export async function tokenizeText(selection) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { selection })
}

export async function addNewText(newText) {
  console.log('newText RECEIVED AT text-api.js ', newText)
  return sendRequest(`${BASE_URL}/add`, 'POST', newText)
}