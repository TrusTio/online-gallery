import React from "react";
import { signIn } from "components/api/gallery";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState(null);

  const login = async ({ username, password }) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const user = await signIn({ username, password });
      setUser(user);
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };
  return (
    <AuthContext.Provider
      value={{ user, loading, error, login }}
    >
        {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
