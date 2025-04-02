import sendRequest from './send-request'
const BASE_URL = `${import.meta.env.VITE_API_BASE_URL}/api/demo`

export function translateSentence(sentence) {
  return sendRequest(`${BASE_URL}/translate`, 'POST', { sentence })
}

export async function tokenizeText(text) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { text })
}