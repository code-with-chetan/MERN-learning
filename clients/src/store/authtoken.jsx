import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  let isLoggedIn = !!token;

  const setTokenLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };

  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  const userDataBK = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/auth/user`, {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.ok) {
        const userData = await response.json();
        console.log("userData token:", userData);
        setUser(userData);
      }
    } catch (error) {
      console.log(`error from user Data jwt:`, error.message);
    }
  };

  // jwt authentication getting user data from the backened.
  useEffect(() => {
    if (token) {
      userDataBK();
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ setTokenLS, LogOutUser, isLoggedIn, user }}>
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
