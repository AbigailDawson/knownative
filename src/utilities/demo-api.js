import sendRequest from './send-request'
const BASE_URL = '/api/demo'

export function generateEasierText(content) {
  return sendRequest(`${BASE_URL}/generate`, 'POST', { content })
}