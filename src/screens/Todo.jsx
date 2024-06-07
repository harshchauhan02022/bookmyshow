import React, { useEffect, useState } from 'react';

const getLocalItem = () => {
 const list = localStorage.getItem('list');
 console.log(list);

 if (list) {
  return JSON.parse(localStorage.getItem('list'));
 } else {
  return [];
 }
};

const Todo = () => {
 const [isButtonDisabled, setIsButtonDisabled] = useState(true);
 const [item, setItem] = useState("");
 const [array, setArray] = useState(getLocalItem());
 const [isEdit, setIsEdit] = useState(false);
 const [editIndex, setEditIndex] = useState(null);
 const [message, setMessage] = useState("");

 const oneChange = (e) => {
  const { value } = e.target;
  let isDisabled = true;
  if (value !== "") {
   isDisabled = false;
  }

  setItem(value);
  setIsButtonDisabled(isDisabled);
  setMessage("");
 };

 const addEditItem = () => {
  const arrayItem = [...array];

  if (array.includes(item) && !isEdit) {
   setMessage("Item already exists!");
   return;
  }

  if (isEdit) {
   arrayItem[editIndex] = item;
   setIsEdit(false);
   setMessage("Item updated successfully!");
  } else {
   arrayItem.push(item);
   setMessage("Item added successfully!");
  }

  setArray(arrayItem);
  setItem("");
  setIsButtonDisabled(true);
 };

 const deleteItem = (index) => {
  const arrayItem = [...array];
  arrayItem.splice(index, 1);
  setArray(arrayItem);
  setMessage("Item deleted successfully!");
 };

 const editItem = (index) => {
  const arrayItem = array[index];
  console.log(">>>>>>>> arrayItem", arrayItem);

  setItem(arrayItem);
  setEditIndex(index);
  setIsEdit(true);
  setMessage("");
 };

 useEffect(() => {
  localStorage.setItem("list", JSON.stringify(array));
 }, [array]);

 return (
  <div className="p-5">
   <div className="text-center">
    <h2>Todo List</h2>
    <input type="text" id="item" value={item} onChange={oneChange} />
    <button disabled={isButtonDisabled} onClick={addEditItem}>
     {isEdit ? "Update" : "Submit"}
    </button>
    {message && <h3>{message}</h3>}
    <table className="table">
     <thead>
      <tr>
       <th>Id</th>
       <th>Value</th>
       <th colSpan={2}>Action</th>
      </tr>
     </thead>
     <tbody>
      {array.length === 0 && (
       <tr>
        <td colSpan="4">No Task Found!</td>
       </tr>
      )}
      {array.map((todo, index) => (
       <tr key={index}>
        <td>{index + 1}</td>
        <td>{todo}</td>
        <td>
         <button onClick={() => deleteItem(index)}>Delete</button>
        </td>
        <td>
         <button onClick={() => editItem(index)}>Edit</button>
        </td>
       </tr>
      ))}
     </tbody>
    </table>
   </div>
  </div>
 );
};

export default Todo;
