import { createContext, useContext } from "react";
import useSavedWordsState from "./SavedWordsReducer";

//creating the context
const SavedWordsContext = createContext(null);
const SavedWordsDispatchContext = createContext(null);

//custom hooks to use the savedWordsContext and its dispatch. Implemented developer error handling just in case we need it
function useSavedWordsContext() {
  const context = useContext(SavedWordsContext);
  if (context === undefined) {
    throw new Error("useSavedWordsContext was used outside of provider");
  }
  return context;
}

function useSavedWordsDispatch() {
  const context = useContext(SavedWordsDispatchContext);
  if (context === undefined) {
    throw new Error(
      "useSavedWordsDispatchContext was used outside of provider"
    );
  }
  return context;
}

function SavedWordsProvider({ children }) {
  //destructured state and dispatch from usedWordState
  const { state, dispatch } = useSavedWordsState();

  //will set values to null until the reducer and dispatch fucntions are made.
  return (
    <SavedWordsContext.Provider value={state}>
      <SavedWordsDispatchContext.Provider value={dispatch}>
        {children}
      </SavedWordsDispatchContext.Provider>
    </SavedWordsContext.Provider>
  );
}

export { SavedWordsProvider, useSavedWordsContext, useSavedWordsDispatch };
