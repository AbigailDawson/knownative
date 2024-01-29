import sendRequest from './send-request'
const BASE_URL = '/api/words'

export function updateMeaning(word, formData) {
  return sendRequest(`${BASE_URL}/${word._id}/update`, 'POST', { word, meaning: formData })
}