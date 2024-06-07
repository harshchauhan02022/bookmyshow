import React, { useRef } from "react";



const Test = () => {
 const inputRef = useRef()
 const selectRef = useRef()

 const testButton = () => {
  console.log("inputRef", inputRef.current.value)
  console.log("selectRef", selectRef.current.value)
 }
 return
 <div>
  <input type="text" />
  <select name="select">
   <option>Yes</option>
   <option>No</option>
  </select>
  <button type="button" onClick={testButton}>submit</button>
 </div>
}
export default Test