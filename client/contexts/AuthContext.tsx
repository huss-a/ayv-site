import { useState, useEffect, createContext, useMemo } from "react";
import axios from "axios";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState("heyy");

  return (
    <authContext.Provider value={{ loggedUser, setLoggedUser }}>
      {children}
    </authContext.Provider>
  );
};
// work in prog
export default AuthProvider;
