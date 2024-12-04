import { SessionContext } from "./SessionContext";
import { useContext, useEffect, useState } from "react";

export const useSession = () => {
  const context = useContext(SessionContext);
  if (!context) {
    throw new Error("usePersonas must be used with SessionProvider");
  }
  return context;
};

export const SessionContextProvider = ({ children }) => {
  const [isLoggedIn, setLoggedIn] = useState(() =>
    localStorage.getItem("session")
  );

  const [user, setUser] = useState(() => {
    const session = localStorage.getItem("session");
    return session ? JSON.parse(session).user : null;
  });

  const login = (userData) => {
    setLoggedIn(true);
    setUser(userData);
    localStorage.setItem(
      "session",
      JSON.stringify({ isLoggedIn: true, user: userData })
    );
  };

  const logout = () => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("session");
  };

  return (
    <SessionContext.Provider
      value={{
        isLoggedIn,
        user,
        login,
        logout,
      }}>
      {children}
    </SessionContext.Provider>
  );
};
