export const LOAD = "LOAD";
export const ADD = "ADD";
export const DELETE = "DELETE";
export const UPDATE = "UPDATE";
export const CLEAR = "CLEAR";

// load a user's saved words into state
export const actionLoadWords = (words) => ({type: LOAD, data: words});

// add a new saved word
export const actionAddWord = (word) => ({type: ADD, data: word});

// delete an existing saved word
export const actionDeleteWord = (id) => ({type: DELETE, id: id});

// edit an existing saved word
export const actionUpdateWord = (data) => ({type: UPDATE, data: data});

// delete all saved words
export const actionClearWords = () => ({type: CLEAR, data: []});