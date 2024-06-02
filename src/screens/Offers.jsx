import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Offers = () => {

 const { textColor } = useContext(ThemeContext);
 return <div className={textColor}>Offers</div>;

}

export default Offers