import { useState, useEffect, createContext, useMemo } from "react";
import axios from "axios";
import User from "../Types/User";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [loggedUser, setLoggedUser] = useState<User | { msg: string }>(null);

  const getCurrentUser = async () => {
    try {
      const res = await axios.get<User>(
        process.env.NEXT_PUBLIC_BACKEND_URL + "/user",
        { withCredentials: true }
      );
      if (res.data.msg !== "Not logged in") return setLoggedUser(res.data);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    (async () => await getCurrentUser())();
  }, []);

  return (
    <authContext.Provider value={[loggedUser, setLoggedUser]}>
      {children}
    </authContext.Provider>
  );
};
// work in prog
export default AuthProvider;
