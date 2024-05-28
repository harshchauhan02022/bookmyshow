import React, {useContext} from 'react'
import ThemeContext from '../context/ThemeContext'

const Sports = () => {
 const { TextColor } = useContext(ThemeContext);
  return (
    <div className={TextColor}>Sports</div>
  )
}

export default Sports