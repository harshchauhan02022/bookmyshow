import React, { useEffect, useState } from 'react';

const Corporates = () => {
   const [data, setData] = useState([]);
   const [loading, setLoading] = useState(true);

   const apiEndpoint = "https://api.github.com/users";

   async function getData() {
      try {
         const response = await fetch(apiEndpoint);
         if (!response.ok) {
            throw new Error("Network failed");
         }
         const result = await response.json();
         setData(result);
      } catch (error) {
         console.log(">>>> error while fetching data", error);
      } finally {
         setLoading(false);
      }
   }

   useEffect(() => {
      getData();
   }, []);

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
                  <tr>
                     <td colSpan="6" className="text-center">loading...</td>
                  </tr>
               ) : (
                  data.map((obj) => (
                     <tr key={obj.id}>
                        <th scope="row">{obj.id}</th>
                        <td>{obj.login}</td>
                        <td><a href={obj.html_url}>{obj.html_url}</a></td>
                        <td><a href={obj.repos_url}>{obj.repos_url}</a></td>
                        <td><img src={obj.avatar_url} alt="User Images" width={70} /></td>
                        <td>
                           <button>Edit</button>
                           <button className="ms-1">Delete</button>
                        </td>
                     </tr>
                  ))
               )}
            </tbody>
         </table>
      </div>
   );
}

export default Corporates;
