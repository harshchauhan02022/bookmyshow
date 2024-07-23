import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";
import '../css/SwitchButton.css';

const ThemeToggleButton = () => {
 const { theme, toggleTheme } = useContext(ThemeContext);

 return (
  <label className="switch">
   <input
    type="checkbox"
    checked={theme === "dark"}
    onChange={toggleTheme}
   />
   <span className="slider round"></span>
  </label>
 );
};

export default ThemeToggleButton;
