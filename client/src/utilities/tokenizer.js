import sendRequest from './send-request'
const BASE_URL = '/api/tokenizer'

export async function tokenizeText(text) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { text })
}