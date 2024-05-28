import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Plays = () => {
 const { TextColor } =  useContext(ThemeContext);
  return (
    <div className={TextColor}>Plays</div>
  )
}

export default Plays