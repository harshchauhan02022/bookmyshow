import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";


const Singin = () => {
 const { textColor } = useContext(ThemeContext);
 return <div className={textColor}>Singin</div>;
};



export default Singin