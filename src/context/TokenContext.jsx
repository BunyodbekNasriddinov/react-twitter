import { createContext, useState } from "react";

export const TokentContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState("");

  return (
    <TokentContext.Provider value={(token, setToken)}>
      {children}
    </TokentContext.Provider>
  );
};
