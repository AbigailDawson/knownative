import { useReducer } from "react";
import {LOAD, ADD, DELETE, UPDATE, CLEAR} from "SavedWordsActions.js"

const initialState = {
  savedWords: []
}

function savedWordsReducer(state, action){
  switch(action.type){
    case LOAD:
      return {...state, savedWords: action.data};
    case ADD:
      return {};
    case DELETE:
      return {...state, savedWords: state.savedWords.filter((item) => item._id !== action.id)};
    case UPDATE:
      return {...state, savedWords: updateWord([...state.savedWords], action.data)};
    case CLEAR:
      return {...state, savedWords: action.data};
    default:
      throw new Error("invalid action");
  }
}

function updateWord(savedWords, updatedData) {
  try {
    const targetWord = savedWords.find(word => word._id === updatedData.id);
    targetWord.meaning = updatedData.meaning;
    targetWord.charGroup = updatedData.term;
    targetWord.pinyin = updatedData.reading;
    return savedWords
  } catch (error) {
    console.error(error);
  }
}

export default function useSavedWordsState() {
  const [state, dispatch] = useReducer(savedWordsReducer, initialState)

  return {state: state, dispatch: dispatch};
}
