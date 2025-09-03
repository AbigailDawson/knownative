import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getAllCards = async () => {
  return sendRequest(`${BASE_URL}`);
};

// Update a card by its ID
export const updateCard = async (cardId, updates) => {
  const payload = {
    reading: updates?.frontProperties?.pinyin ?? updates?.reading ?? '',
    meaning: updates?.backProperties?.meaning ?? updates?.meaning ?? '',
  };

  return sendRequest(`${BASE_URL}/${cardId}`, 'PUT', payload);
};