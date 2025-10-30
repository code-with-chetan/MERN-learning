import { createContext, useContext } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const setTokenLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };
  return (
    <AuthContext.Provider value={setTokenLS}>{children}</AuthContext.Provider>
  );
};

export const useAuth = () => {
  const tokenData = useContext(AuthContext);
  if (!tokenData) {
    console.log("error in context api", tokenData);
  }
  return tokenData;
};
