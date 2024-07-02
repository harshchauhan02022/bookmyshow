import React, { useState } from "react";

const Test = () => {
 const [name, setName] = useState("");
 const [collage, setCollage] = useState("");
 const [subject, setSubject] = useState("");
 const [submittedData, setSubmittedData] = useState(null);

 const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "name") {
   setName(value);
  } else if (name === "collage") {
   setCollage(value);
  } else if (name === "subject") {
   setSubject(value);
  }
 };
 const handleSubmit = (e) => {
  e.preventDefault();
  setSubmittedData({ name, collage, subject });
 };

 return (
  <div className="container">
   <div className="row">
    <div className="col-md-4">
     <form onSubmit={handleSubmit}>
      <div className="form-group">
       <label htmlFor="name">Name</label>
       <input
        type="text"
        className="form-control"
        placeholder="Enter your name"
        id="name"
        name="name"
        value={name}
        onChange={handleChange}
       />
      </div>
      <div className="form-group">
       <label htmlFor="collage">Collage</label>
       <input
        type="text"
        className="form-control"
        placeholder="Enter your collage"
        id="collage"
        name="collage"
        value={collage}
        onChange={handleChange}
       />
      </div>
      <div className="form-group">
       <label htmlFor="subject">Subject</label>
       <input
        type="text"
        className="form-control"
        placeholder="Enter your subject"
        id="subject"
        name="subject"
        value={subject}
        onChange={handleChange}
       />
      </div>
      <button type="submit" className="btn btn-primary">
       Submit
      </button>
     </form>
    </div>
    <div className="col-md-8">
     <h1>Form Data</h1>
     {submittedData && (
      <table className="table table-bordered">
       <thead>
        <tr>
         <th>Name</th>
         <th>Collage</th>
         <th>Subject</th>
        </tr>
       </thead>
       <tbody>
        <tr>
         <td>{submittedData.name}</td>
         <td>{submittedData.collage}</td>
         <td>{submittedData.subject}</td>
        </tr>
       </tbody>
      </table>
     )}
    </div>
   </div>
  </div>
 );
};

export default Test;
