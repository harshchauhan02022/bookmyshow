import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Button, Form } from "react-bootstrap";
import { addBlogsAPI } from '../../Api'

const AddBlog = () => {

 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("")
 const [isButtonDisabled, setIsButtonDisabled] = useState(true);

 useEffect(() => {
  if (title !== "" && description !== "") {
   setIsButtonDisabled(false);
  }
 }, [title, description]);

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "title") {
   setTitle(value);
  }
  else if (name === "description") {
   setDescription(value);
  }
 };

 const addBlog = async () => {
  try {
   const payload = {
    title,
    description,
   };
   const response = await axios.post(addBlogsAPI, payload)
   console.log("blog response", response);
  } catch (error) {
   console.log("Error while adding blog", error)
  }
 };
 return (
  <>
   <div className="col-md-6">
    <Form className="p-5">
     <h1 className="text-center">Add Blog</h1>
     <input
      type="text"
      placeholder="Title"
      className="form-control mb-2"
      name="title"
      onChange={handleChange}
     />
     <textarea
      placeholder="Description"
      className="form-control mb-2"
      name="description"
      onChange={handleChange}
     ></textarea>
     <Button onClick={addBlog} disabled={isButtonDisabled}>
      Submit
     </Button>
    </Form>
   </div>
  </>
 )
}

export default AddBlog