import { actionDeleteWord } from './SavedWordsActions';
import { deleteCard } from '../../utilities/cards-api';

export async function deleteSavedWord(dispatch, wordId) {
  await deleteCard(wordId);
  dispatch(actionDeleteWord(wordId));
}
