import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form } from "react-bootstrap";
import axios from "axios";
import { addPostAPI } from "../../Api";

const AddBlog = () => {
 const navigate = useNavigate();
 const [title, setTitle] = useState("");
 const [description, setDescription] = useState("");
 const [isButtonDisabled, setIsButtonDisabled] = useState(true);
 const [currentId, setCurrentId] = useState(() => {

  const savedId = localStorage.getItem("currentId");
  return savedId ? parseInt(savedId, 10) : 1;
 });

 useEffect(() => {
  if (title !== "" && description !== "") {
   setIsButtonDisabled(false);
  } else {
   setIsButtonDisabled(true);
  }
 }, [title, description]);

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "title") {
   setTitle(value);
  } else if (name === "description") {
   setDescription(value);
  }
 };

 // add blog function
 const addBlog = async () => {
  try {
   // Payload or request params to add new blog
   const payload = {
    id: currentId,
    title,
    description,
    date: new Date().toISOString(),
   };

   // Api call to add new blog
   const response = await axios.post(addPostAPI, payload);

   if (response) {
    // Increment and save the current ID
    const newId = currentId + 1;
    setCurrentId(newId);
    localStorage.setItem("currentId", newId.toString());

    // Navigate to blogs page
    navigate("/blogs");
   }

   console.log(">>> add blog response", response);
  } catch (error) {
   console.error("Error while adding blog", error);
   alert("There was an error adding the blog. Please try again.");
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
      value={title}
     />
     <textarea
      placeholder="Description"
      className="form-control mb-2"
      name="description"
      onChange={handleChange}
      value={description}
     ></textarea>
     <Button onClick={addBlog} disabled={isButtonDisabled}>
      Submit
     </Button>
    </Form>
   </div>
  </>
 );
};

export default AddBlog;
