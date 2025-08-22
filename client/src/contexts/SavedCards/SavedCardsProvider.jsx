// This provider manages the state of saved cards in the application.
// It provides the saved cards data and functions to update it.

import { createContext, useContext } from "react";

// Creating the context
const SavedCardsContext = createContext();

// Creating a custom hook to use the SavedCardsContext and it's dispatch function.
export const useSavedCards = () => {
  return useContext(SavedCardsContext);
};


