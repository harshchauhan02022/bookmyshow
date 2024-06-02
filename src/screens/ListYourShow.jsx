import React, { useState } from 'react'

const ListYourShow = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 const apiEndpoint = "https://jsonplaceholder.typicode.com/users";

 async function fetchUserList() {

  try {
   const response = await fetch(apiEndpoint);
   if (!response.ok) {
    throw new Error("Nerwork failed");
   }
   const result = await response.json();

   setData(result);
  }
  catch (error) {
   console.log(">>>> error while fetching data", error);
  }
  finally {
   // loading
   setLoading(false);
  }
 }
 fetchUserList();
 return (
  <div className="p-5">
   <div className="text-center">
    <h2>User List</h2>
   </div>
   <table className="table">
    <thead>
     <tr>
      <th scope="col">Id</th>
      <th scope="col">Name</th>
      <th scope="col">Username</th>
      <th scope="col">Email</th>
      <th scope="col">Action</th>
     </tr>
    </thead>

    <tbody>
     {loading ? (
      <div className="text-center">loading...</div>
     ) : (
      data.map((obj, key) => {
       return (
        <tr scope="row" key={key}>
         <td>{obj.id}</td>
         <td>{obj.name}</td>
         <td>{obj.username}</td>
         <td>{obj.email}</td>
         <td>
          <button>Edit</button>
          <button className="ms-1">Delete</button>
         </td>
        </tr>
       );
      })
     )}
    </tbody>

   </table>

  </div>
 )
}

export default ListYourShow