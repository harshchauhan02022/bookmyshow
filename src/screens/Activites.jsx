import React, { useContext } from 'react'
import ThemeContext from '../context/ThemeContext'

const Activites = () => {
 const {TextColor} =useContext(ThemeContext);
  return (
    <div className={TextColor}>Activites</div>
  )
}

export default Activites