import { useReducer } from "react";
import {LOAD, ADD, DELETE, UPDATE, CLEAR} from "SavedWordsActions.js"

const initialState = {
  savedWords: []
}

function savedWordsReducer(state, action){
  switch(action.type){
    default:
      throw new Error("invalid action");
  }
}

export default function useSavedWordsState() {
  const [state, dispatch] = useReducer(savedWordsReducer, initialState)
  
  return {state: state, dispatch: dispatch};
}
