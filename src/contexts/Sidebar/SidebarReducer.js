import { useReducer } from "react";
import { EXPAND, CLOSE, CHANGE } from "./SidebarActions";

//the initial state
const initialState = { expanded: false, category: null };
//the actual reducer function

//I chose to just hardcode "true" for expanded in the EXPAND action and "false" for expanded in the CLOSE action because I feel like those actions should always expand or close the sidebar if you call their respective dispatch function. No need to really store it in the payload
const sidebarReducer = function (state, action) {
  switch (action.type) {
    case EXPAND:
      return { expanded: true, category: action.payload };
    case CLOSE:
      return { expanded: false, category: null };
    case CHANGE:
      return { ...state, category: action.payload };
    default:
      throw new Error("invalid action");
  }
};

export default function useSidebarState() {
  const [state, dispatch] = useReducer(sidebarReducer, initialState);
  return { state, dispatch };
}
