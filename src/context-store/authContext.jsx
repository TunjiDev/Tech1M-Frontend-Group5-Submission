import React, { createContext, useState, useEffect, useCallback } from "react";

let logoutTimer;

const AuthContext = createContext({
  fullName: "",
  role: "",
  token: "",
  isLoggedIn: false,
  login: (token) => {},
  logout: () => {},
  userFunc: (fullName, role) => {},
});

const calculateRemainingTime = (expirationTime) => {
  const currentTime = new Date().getTime();
  const adjustedExpirationTime = new Date(expirationTime).getTime();

  const remainingDuration = adjustedExpirationTime - currentTime;

  return remainingDuration;
};

const retrieveStoredToken = () => {
  const storedToken = localStorage.getItem("token");
  const storedExpirationDate = localStorage.getItem("expirationTime");
  const storedFullName = localStorage.getItem("fullName");
  const storedRole = localStorage.getItem("role");

  const remainingTime = calculateRemainingTime(storedExpirationDate);

  if (remainingTime <= 60000) {
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    return null;
  }

  return {
    token: storedToken,
    duration: remainingTime,
    fullName: storedFullName,
    role: storedRole,
  };
};

export const AuthContextProvider = (props) => {
  const tokenData = retrieveStoredToken();
  let initialToken;
  let initialName;
  let initialRole;

  if (tokenData) {
    initialToken = tokenData.token;
    initialName = tokenData.fullName;
    initialRole = tokenData.role;
  }
  const [token, setToken] = useState(initialToken);
  const [fullName, setFullName] = useState(initialName);
  const [role, setRole] = useState(initialRole);

  const userIsLoggedIn = !!token;

  const logoutHandler = useCallback(() => {
    setToken(null);
    localStorage.removeItem("token");
    localStorage.removeItem("expirationTime");

    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const loginHandler = (token, expirationTime) => {
    setToken(token);
    localStorage.setItem("token", token);
    localStorage.setItem("expirationTime", expirationTime);

    const remainingTime = calculateRemainingTime(expirationTime);

    logoutTimer = setTimeout(logoutHandler, remainingTime);
  };

  const userDetailsHandler = (fullName, role) => {
    setFullName(fullName);
    setRole(role);
    localStorage.setItem("fullName", fullName);
    localStorage.setItem("role", role);
  };

  useEffect(() => {
    if (tokenData) {
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);

  const contextValue = {
    fullName: fullName,
    role: role,
    isLoggedIn: userIsLoggedIn,
    login: loginHandler,
    logout: logoutHandler,
    userFunc: userDetailsHandler,
  };

  return <AuthContext.Provider value={contextValue}>{props.children}</AuthContext.Provider>;
};

export default AuthContext;
