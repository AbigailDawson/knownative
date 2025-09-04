import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getAllCards = async () => {
  return sendRequest(`${BASE_URL}`);
};

// Updates either or both fields
export const updateCard = async (cardId, updates) => {
  const payload = {
    reading: updates.frontProperties.pinyin,
    meaning: updates.backProperties.meaning,
  };

  return sendRequest(`${BASE_URL}/${cardId}`, 'PUT', payload);
};