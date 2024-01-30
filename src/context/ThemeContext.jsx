"use client";
import { createContext, useEffect, useState } from "react";

export const ThemeContext = createContext();

//store in localStorage to prevent  reset on page refresh or close the browser.
const getFromLocalStorage = () => {
  if (typeof window !== "undefined") {
    //value  localstorgae browser
    const value = localStorage.getItem("theme");
    return value || "light";
  }
};

export const ThemeContextProvider = ({ children }) => {
  // State for Light Mode
  const [theme, setTheme] = useState(() => {
    return getFromLocalStorage();
  });

  const toggle = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, toggle }}>
      {children}
    </ThemeContext.Provider>
  );
};
