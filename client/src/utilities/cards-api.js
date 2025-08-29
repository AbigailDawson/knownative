import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getAllCards = async () => {
  return sendRequest(`${BASE_URL}`);
};