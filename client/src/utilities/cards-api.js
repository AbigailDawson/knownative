import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getAllCards = async () => {
  return sendRequest(`${BASE_URL}`);
};

// Update a card by its ID
export const updateCard = async (cardId, updates) => {
  return sendRequest(`${BASE_URL}/${cardId}`, 'PUT', updates);
};