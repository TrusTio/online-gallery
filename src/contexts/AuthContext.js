import React from "react";
import { signIn, signUp, signOut } from "components/api/gallery";

const AuthContext = React.createContext();

export const AuthContextProvider = ({ children, userData }) => {
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [user, setUser] = React.useState(userData);

  const login = async ({ username, password }) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const response = await signIn({ username, password });
      setUser(response?.data);

      if (response.status === 200) {
        setUser(response?.data);
      } else {
      }
    } catch (err) {
      setError(err?.response?.data?.message);
    } finally {
      setLoading(false);
    }
  };

  const createAccount = async ({ username, email, password }) => {
    try {
      await signUp({ username, email, password });
    } catch (err) {
      console.log(JSON.stringify(err));
      setError(err?.response?.data?.message);
      console.log(error);
    }
  };

  const logout = async () => {
    try {
      await signOut();
      setUser(null);
    } catch (err) {
      console.log(JSON.stringify(err));
      setError(err?.response?.data?.message);
      console.log(error);
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        loading,
        error,
        login,
        createAccount,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return React.useContext(AuthContext);
};
