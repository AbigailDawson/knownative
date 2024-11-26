import { AuthProvider } from './Auth/AuthProvider';

//allows all providers to be in one place
function AppProvider({ children }) {
  return <AuthProvider>{children}</AuthProvider>;
}

export default AppProvider;
