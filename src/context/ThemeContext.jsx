// context/ThemeContext.js
import React, { useState, createContext } from "react";

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
 const [theme, setTheme] = useState(localStorage.getItem("themeMode") || "light");
 const [textColor, setTextColor] = useState(theme === "light" ? "black-text" : "white-text");

 const toggleTheme = () => {
  const themeMode = theme === "light" ? "dark" : "light";
  setTheme(themeMode);
  setTextColor(themeMode === "light" ? "black-text" : "white-text");
  localStorage.setItem("themeMode", themeMode);
 };

 return (
  <ThemeContext.Provider value={{ theme, toggleTheme, textColor }}>
   {children}
  </ThemeContext.Provider>
 );
};

export default ThemeContext;
