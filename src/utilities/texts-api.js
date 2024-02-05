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

export function deleteText(text, id) {
  return sendRequest(`${BASE_URL}/${id}/delete`, 'DELETE', { text })
}

export function getText(id) {
  return sendRequest(`${BASE_URL}/${id}`)
}

export function saveWord(word, textId) {
  return sendRequest(`${BASE_URL}/${textId}/save`, 'POST', { word })
}

export function getSavedWords(textId) {
  return sendRequest(`${BASE_URL}/${textId}/get-saved-words`)
}

export function translateSentence(sentence) {
  return sendRequest(`${BASE_URL}/translate`, 'POST', { sentence })
}

export function simplifyText(content) {
  return sendRequest(`${BASE_URL}/simplify`, 'POST', { content })
}

export function saveSimplifiedText(simplifiedText, textId) {
  return sendRequest(`${BASE_URL}/${textId}/saveSimplified`, 'POST', { simplifiedText })
}

export function removeSimplifiedText(textId) {
  return sendRequest(`${BASE_URL}/${textId}/removeSimplified`, 'POST')
}

export function archiveText(text, id) {
  return sendRequest(`${BASE_URL}/${id}/archive`, 'POST', { text })
}

export function favoriteText(text, id) {
  return sendRequest(`${BASE_URL}/${id}/favorite`, 'POST', { text })
}