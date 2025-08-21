import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getCards = async () => {
  return sendRequest(`${BASE_URL}`);
};