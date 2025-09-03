import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getAllCards = async () => {
  return sendRequest(`${BASE_URL}`);
};

export const updateCard = async (cardId, updates) => {
  const payload = {};
  if (updates?.frontProperties?.pinyin !== undefined) {
    payload.reading = updates.frontProperties.pinyin;
  }
  if (updates?.backProperties?.meaning !== undefined) {
    payload.meaning = updates.backProperties.meaning;
  }
  if (updates?.reading !== undefined) {
    payload.reading = updates.reading;
  }
  if (updates?.meaning !== undefined) {
    payload.meaning = updates.meaning;
  }

  return sendRequest(`${BASE_URL}/${cardId}`, 'PUT', payload);
};