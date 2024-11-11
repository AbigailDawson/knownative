import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext was used outside of the provider.');
  }
  return context;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    //if user is found after searching, set that as user.
    //if user is not found after searching, set that suer
  }, []);
  return <AuthContext.Provider value={(user, setUser)}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuthContext };
