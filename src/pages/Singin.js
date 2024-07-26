import React, { useState, useEffect } from 'react';
import { showToast } from "../utils/toast";
import useApi from '../api/useApi'; // Ensure correct import
import LoginPopup from '../menu/LoginPopup';

const Signin = () => {
 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [password, setPassword] = useState("");
 const [isButtonDisabled, setIsButtonDisabled] = useState(true);
 const [emailError, setEmailError] = useState("");
 const [successMessage, setSuccessMessage] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;
  if (name === "name") setName(value);
  if (name === "email") setEmail(value);
  if (name === "phone") setPhone(value);
  if (name === "password") setPassword(value);
 };

 useEffect(() => {
  setIsButtonDisabled(!(name && email && phone && password));
 }, [name, email, phone, password]);

 const addSignup = async (e) => {
  e.preventDefault();
  const payload = { name, email, phone, password };

  try {
   console.log("Sending payload:", payload); // Log payload
   const response = await useApi.register(payload);
   console.log("API Response:", response); // Log API response

   if (response && response.data) {
    setSuccessMessage(response.data.message);
    setEmailError("");
    showToast("Signup Successful!", "success");
   } else {
    setEmailError("Unexpected response format");
    showToast("Unexpected response format", "error");
   }
  } catch (error) {
   console.log("API Error:", error); // Log API error
   if (error.response && error.response.data) {
    setEmailError(error.response.data.error || "An unexpected error occurred");
   } else {
    setEmailError("An unexpected error occurred");
   }
   setSuccessMessage("");
   showToast(emailError, "error");
  }
 };

 return (
  <div>
   {successMessage && <p className="text-success">{successMessage}</p>}
   {emailError && <p className="text-danger">{emailError}</p>}
   <form className="signup-form mx-auto" onSubmit={addSignup}>
    <div className="form-group mt-1">
     <label><b>Full name</b></label>
     <input
      id="name"
      name="name"
      type="text"
      onChange={handleChange}
      className="form-control"
      placeholder="Enter name"
     />
    </div>
    <div className="form-group mt-1">
     <label><b>Email Address</b></label>
     <input
      id="email"
      name="email"
      type="email"
      onChange={handleChange}
      className="form-control"
      placeholder="Enter email"
     />
    </div>
    <div className="form-group mt-1">
     <label><b>Phone</b></label>
     <input
      id="phone"
      name="phone"
      type="text"
      onChange={handleChange}
      className="form-control"
      placeholder="Enter phone"
     />
    </div>
    <div className="form-group mt-3">
     <label><b>Password</b></label>
     <input
      id="password"
      name="password"
      type="password"
      onChange={handleChange}
      className="form-control"
      placeholder="Enter password"
     />
    </div>
    <div className="form-check mt-3">
     <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
     <label className="form-check-label" htmlFor="flexCheckDefault">
      By clicking Continue, you agree to OrgMeet’s User Agreement, Privacy Policy, and Cookie Policy.
     </label>
    </div>
    <div className="text-center my-1">
     <button
      type="submit"
      className="btn btn-lg btn-dark"
      disabled={isButtonDisabled}
     >
      Sign up
     </button>
    </div>
    <div className="text-center my-3">
    <LoginPopup />
    </div>
   </form>
  </div>
 );
};

export default Signin;
