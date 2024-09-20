import { createContext, useContext } from "react";
import useSidebarState from "./SidebarReducer";

//creating the context
const SidebarContext = createContext(null);
const SidebarDispatchContext = createContext(null);

//custom hooks to use the sidebarContext and its dispatch. Implemented developer error handling just in case we need it
function useSidebarContext() {
  const context = useContext(SidebarContext);
  if (context === undefined) {
    throw new Error("useSidebarContext was used outside of provider");
  }
  return context;
}

function useSidebarDispatch() {
  const context = useContext(SidebarDispatchContext);
  if (context === undefined) {
    throw new Error("useSidebarDispatchContext was used outside of provider");
  }
  return context;
}

function SidebarProvider({ children }) {
  //
  const { state, dispatch } = useSidebarState();

  //will set values to null until the reducer and dispatch fucntions are made.
  return (
    <SidebarContext.Provider value={state}>
      <SidebarDispatchContext.Provider value={dispatch}>
        {children}
      </SidebarDispatchContext.Provider>
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, useSidebarContext, useSidebarDispatch };
