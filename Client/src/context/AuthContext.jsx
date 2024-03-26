import { createContext, useState } from "react";

export const AuthProvider = createContext();

// eslint-disable-next-line react/prop-types
const AuthContext = ({ children }) => {
  const [Auth, setAuth] = useState(
    JSON.parse(localStorage.getItem("chat-user")) || null
  );
  return (
    <AuthProvider.Provider value={{ Auth, setAuth }}>
      {children}
    </AuthProvider.Provider>
  );
};

export default AuthContext;
