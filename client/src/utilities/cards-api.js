import sendRequest from './send-request';
const BASE_URL = '/api/cards';

export const getAllCards = async () => {
  return sendRequest(`${BASE_URL}`);
};

export function deleteCard(id) {
  return sendRequest(`${BASE_URL}/deleteCard/${id}/delete`, 'DELETE');
}
