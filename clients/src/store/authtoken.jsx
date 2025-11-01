import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState();
  const [services, setServices] = useState();
  let isLoggedIn = !!token;

  const setTokenLS = (serverToken) => {
    localStorage.setItem("token", serverToken);
  };

  const LogOutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  // jwt authentication getting user data from the backened.
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

  // getting services data from the database
  const servicesData = async () => {
    try {
      const response = await fetch(`http://localhost:4000/api/data/services`, {
        method: "GET",
      });
      if (response.ok) {
        const data = await response.json();
        console.log(`services data`, data.msg);
        setServices(data.msg);
      }
    } catch (error) {
      console.log(`error comes in services data fetch:`, error.message);
    }
  };

  useEffect(() => {
    if (token) {
      userDataBK();
      servicesData();
    }
  }, [token]);

  return (
    <AuthContext.Provider
      value={{ setTokenLS, LogOutUser, isLoggedIn, user, services }}
    >
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
