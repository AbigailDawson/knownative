import sendRequest from './send-request'
const BASE_URL = '/api/texts'

export async function tokenizeText(selection) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { selection })
}

export function getAll() {
  return sendRequest(`${BASE_URL}`)
}

export function addNewText(textData) {
  return sendRequest(`${BASE_URL}/add`, 'POST', textData)
}