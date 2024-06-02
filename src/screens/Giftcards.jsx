import React, { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Giftcards = () => {

 const { textColor } = useContext(ThemeContext);
 return <div className={textColor}>Giftcards</div>;

}

export default Giftcards