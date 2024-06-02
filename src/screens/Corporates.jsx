import React, { useEffect, useState } from 'react'

const Corporates = () => {
 const [data, setData] = useState([]);
 const [loading, setLoading] = useState(true);

 const apiEndpoint = "https://api.github.com/users";

 async function getData() {
  try {
   const response = await fetch(apiEndpoint);
   if (!response.ok) {
    throw new Error("Network failed")
   }
   const result = await response.json();

   setData(result)
  } catch (errer) {
   console.log(errer)
  }
  finally {
   setLoading(false)
;  }
 }
 useEffect(function () {
  getData()
 }, [])



 return (
  <div className="p-5">
   <div className="text-center">
    <h2>User List</h2>
   </div>
   <table className="table">
    <thead>
     <tr>
      <th scope="col">Id</th>
      <th scope="col">Login</th>
      <th scope="col">Html_Url</th>
      <th scope="col">Repos_Url</th>
      <th scope="col">Images</th>
      <th scope="col">Action</th>
     </tr>
    </thead>
    <tbody>

     {loading ? (
      <div className="text-center">loading...</div>

     ) : (data.map((obj, key) => {
      return (
       <tr scope="row" key={key}>
        <td>{obj.id}</td>
        <td>{obj.login}</td>
        <td>{obj.html_url}</td>
        <td>{obj.repos_url}</td>
        <td><img src={obj.avatar_url} alt="User Images" width={70} /></td>
        <td>
         <button>Edit</button>
         <button>Delete</button>
        </td>

       </tr>
      )
     })
     )}
    </tbody>

   </table>
  </div>
 )
}

export default Corporates