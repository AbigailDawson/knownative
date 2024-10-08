export const EXPAND = "EXPAND";
export const CLOSE = "CLOSE";
export const CHANGE = "CHANGE";

export const actionExpandSidebar = (category) => ({
  type: EXPAND,
  data: category,
});
export const actionCloseSidebar = () => ({ type: CLOSE });
export const actionChangeSidebar = (category) => ({
  type: CHANGE,
  data: category,
});
