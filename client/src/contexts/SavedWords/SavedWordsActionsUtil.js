import { actionDeleteWord } from './SavedWordsActions';
import { deleteText } from '../../utilities/texts-api';

export async function deleteSavedWord(dispatch, wordId) {
  await deleteText(wordId);
  dispatch(actionDeleteWord(wordId));
}
