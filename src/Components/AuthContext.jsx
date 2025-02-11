import React, { createContext, useState, useContext, useEffect } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  // Check localStorage for user data on initial load
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const login = (userName, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const user = users.find((u) => u.userName === userName && u.password === password);
    if (user) {
      setUser(user);
      localStorage.setItem("user", JSON.stringify(user)); // Store logged-in user in localStorage
      return true; // Login successful
    }
    return false; // Login failed
  };

  const signup = (userName, password) => {
    const users = JSON.parse(localStorage.getItem("users")) || [];
    const userExists = users.some((u) => u.userName === userName);
    if (userExists) {
      return false; // User already exists
    }
    const newUser = { userName, password };
    users.push(newUser);
    localStorage.setItem("users", JSON.stringify(users)); // Store new user in localStorage
    setUser(newUser);
    localStorage.setItem("user", JSON.stringify(newUser)); // Store logged-in user in localStorage
    return true; // Signup successful
  };

//   const logout = () => {
//     setUser(null);
//     localStorage.removeItem("user"); // Clear logged-in user from localStorage
//   };

  return (
    <AuthContext.Provider value={{ user, login, signup, }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);