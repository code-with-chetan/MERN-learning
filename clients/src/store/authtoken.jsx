import { createContext, useContext, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  let isLoggedIn = !!token;

  const setTokenLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };

  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  return (
    <AuthContext.Provider value={{ setTokenLS, LogOutUser, isLoggedIn }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const tokenData = useContext(AuthContext);
  if (!tokenData) {
    console.log("error in context api", tokenData);
  }
  return tokenData;
};
