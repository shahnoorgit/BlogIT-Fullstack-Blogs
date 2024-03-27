import { createContext, useState } from "react";

export const AuthProvider = createContext();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [Auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  const isAuth = localStorage.getItem("chat-user") ? true : false;
  return (
    <AuthProvider.Provider value={{ Auth, setAuth, isAuth }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
