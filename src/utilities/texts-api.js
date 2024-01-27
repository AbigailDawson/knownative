import sendRequest from './send-request'
const BASE_URL = '/api/texts'

export async function tokenizeText(text) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { text })
}

export function getAll() {
  return sendRequest(`${BASE_URL}`)
}

export function addNewText(textData) {
  return sendRequest(`${BASE_URL}/add`, 'POST', textData)
}

export function getText(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

export function saveWord(word, textId) {
  return sendRequest(`${BASE_URL}/${textId}/save`, 'POST', {word})
}