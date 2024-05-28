
import React, { useContext } from "react";
 import ThemeContext from "../context/ThemeContext";

const  Event = () => {
 const { textColor } = useContext(ThemeContext);
 return <div className={textColor}>Event</div>;
};

export default Event;
