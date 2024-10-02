import { createContext, useContext } from "react";
import useSidebarState from "./SidebarReducer";

const SidebarContext = createContext(null);
const SidebarDispatchContext = createContext(null);

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
  const { state, dispatch } = useSidebarState();

  return (
    <SidebarContext.Provider value={state}>
      <SidebarDispatchContext.Provider value={dispatch}>
        {children}
      </SidebarDispatchContext.Provider>
    </SidebarContext.Provider>
  );
}

export { SidebarProvider, useSidebarContext, useSidebarDispatch };
