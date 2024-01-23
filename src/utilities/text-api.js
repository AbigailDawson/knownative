import sendRequest from './send-request'
const BASE_URL = '/api/text'

export async function tokenizeText(selection) {
  console.log('selection RECEIVED AT text-api.js: ', selection)
  return sendRequest(`${BASE_URL}`, 'POST', { selection })
}