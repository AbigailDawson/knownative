import { useReducer } from "react";
import { EXPAND, CLOSE, CHANGE } from "./SidebarActions";

//the initial state
const initialState = { expanded: false, category: null };
//the actual reducer function

const sidebarReducer = function (state, action) {
  switch (action.type) {
    case EXPAND:
      return { expanded: true, category: action.data };
    case CLOSE:
      return { expanded: false, category: null };
    case CHANGE:
      return { ...state, category: action.data };
    default:
      throw new Error("invalid action");
  }
};

export default function useSidebarState() {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);
  return { state, dispatch };
}
