import { actionDeleteWord } from './SavedWordsActions';
import { deleteCard } from '../../utilities/cards-api';

export async function deleteSavedCard(dispatch, cardId) {
  await deleteCard(cardId);
  dispatch(actionDeleteWord(cardId));
}
