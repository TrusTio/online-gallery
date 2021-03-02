import React from "react";
import { signIn, signUp } from "components/api/gallery";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState(null);
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);

  const login = async ({ username, password }) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const response = await signIn({ username, password });
      setUser(response?.data);

      if (response.status === 200) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async ({ username, email, password }) => {
    try {
      const user = await signUp({ username, email, password });
      setUser(user);
    } catch (err) {
      console.log(JSON.stringify(err));
      setError(err?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, loading, error, login, createAccount, isAuthenticated }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
