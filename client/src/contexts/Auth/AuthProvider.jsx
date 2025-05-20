import { useState, useEffect, createContext, useContext } from 'react';

const AuthContext = createContext(null);

//create the auth context
function useAuthContext() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('useAuthContext was used outside of the provider.');
  }
  return context;
}

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getUser() {
      try {
        const res = await fetch('api/users/getUser', {
          method: 'GET',
          credentials: 'include'
        });

        if (!res.ok) {
          throw new Error(`Failed to fetch user: ${res.status} ${res.statusText}`);
        }

        const user = await res.json();
        setUser(user);
      } catch (err) {
        console.error(err.message);
        setUser(null);
      } finally {
        setLoading(false);
      }
    }
    getUser();
  }, []);

  return <AuthContext.Provider value={{ user, setUser, loading }}>{children}</AuthContext.Provider>;
}

export { AuthProvider, useAuthContext };
