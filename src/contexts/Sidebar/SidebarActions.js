export const EXPAND = "EXPAND";
export const CLOSE = "CLOSE";
export const CHANGE = "CHANGE";

//Is this necessary? They're not really imported anywhere from what I can see.
export const actionExpandSidebar = (category) => ({
  type: EXPAND,
  payload: category,
});
export const actionCloseSidebar = () => ({ type: CLOSE });
export const actionChangeSidebar = (category) => ({
  type: CHANGE,
  payload: category,
});
