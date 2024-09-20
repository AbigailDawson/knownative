export const EXPAND = "EXPAND";
export const CLOSE = "CLOSE";
export const CHANGE = "CHANGE";

//necessary? They're not really imported anywhere
export const actionExpandSidebar = () => ({ type: EXPAND, value: true });
export const actionCloseSidebar = () => ({ type: CLOSE, value: false });
export const actionChangeSidebar = (category) => ({
  type: CHANGE,
  category: category,
});
