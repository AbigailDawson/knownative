import { AuthProvider } from './Auth/AuthProvider';
import { SavedWordsProvider } from './SavedWords/SavedWordsProvider';
import { SidebarProvider } from './Sidebar/SidebarProvider';

//allows all providers to be in one place
function AppProvider({ children }) {
  return (
    <AuthProvider>
      <SavedWordsProvider>
        <SidebarProvider>
          {children}
        </SidebarProvider>
      </SavedWordsProvider>
    </AuthProvider>);
}

export default AppProvider;
