import sendRequest from './send-request';
const BASE_URL = '/api/texts';

export async function tokenizeText(text) {
  return sendRequest(`${BASE_URL}/tokenize`, 'POST', { text });
}

export function getAll() {
  return sendRequest(`${BASE_URL}`);
}

export function addNewText(textData) {
  return sendRequest(`${BASE_URL}/add`, 'POST', textData);
}

export function deleteText(textId, userId) {
  return sendRequest(`${BASE_URL}/${userId}/text/${textId}`, 'DELETE');
}

export function getText(id) {
  return sendRequest(`${BASE_URL}/${id}`);
}

export function saveWord(word, textId) {
  return sendRequest(`${BASE_URL}/${textId}/save`, 'POST', { word });
}

export function getSavedWords(textId) {
  return sendRequest(`${BASE_URL}/${textId}/get-saved-words`);
}

export function translateSentence(sentence) {
  return sendRequest(`${BASE_URL}/translate`, 'POST', { sentence });
}

export function archiveText(text, id) {
  return sendRequest(`${BASE_URL}/${id}/archive`, 'POST', { text });
}

export function favoriteText(text, id) {
  return sendRequest(`${BASE_URL}/${id}/favorite`, 'POST', { text });
}

export const getUserTexts = async () => {
  return sendRequest(`${BASE_URL}/getTexts`, 'GET');
};

export const fetchTexts = async (user, setTexts) => {
  try {
    if (user._id) {
      const texts = await getUserTexts();
      setTexts(texts);
    }
  } catch (error) {
    console.log('Error fetching texts:', error);
  }
};
