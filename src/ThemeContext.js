import React from "react";

export const ThemeContext = React.createContext();

export const ThemeStorage = ({ children }) => {
  const [dark, setDark] = React.useState(false);

  return (
    <ThemeContext.Provider
      value={{
        dark,
        setDark,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
