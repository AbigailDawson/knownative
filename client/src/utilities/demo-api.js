import sendRequest from './send-request'
const BASE_URL = '/api/tokenizer'

export function translateSentence(sentence) {
  return sendRequest(`${BASE_URL}/translate`, 'POST', { sentence })
}

export async function tokenizeText(text) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { text })
}