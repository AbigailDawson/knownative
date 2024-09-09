import { SavedWordsProvider } from "./SavedWords/SavedWordsProvider";
import { SidebarProvider } from "./Sidebar/SidebarProvider";

//allows all providers to be in one place
function AppProvider({ children }) {
  return (
    <SavedWordsProvider>
      <SidebarProvider>{children}</SidebarProvider>
    </SavedWordsProvider>
  );
}

export default AppProvider;
