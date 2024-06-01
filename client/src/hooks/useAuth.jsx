// src/hooks/useAuth.js

import { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";

export const useAuth = () => {
  const [isAdmin, setIsAdmin] = useState(true);
  // const navigate = useNavigate();

  useEffect(() => {
    // const user = JSON.parse(localStorage.getItem("user"));
    // if (user && user.role === "admin") {
    //   setIsAdmin(true);
    // } else {
    //   setIsAdmin(false);
    // }
    setIsAdmin(true);
  }, []);

  // const logout = () => {
  //   localStorage.removeItem("user");
  //   setIsAdmin(false);
  //   navigate("/login");
  // };

  return { isAdmin }; //, logout
};
