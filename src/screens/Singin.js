import React, { useContext, useState, useEffect } from 'react';
import ThemeContext from "../context/ThemeContext";
import { Link } from "react-router-dom";
import axios from 'axios';

const Signin = () => {
 const { textColor } = useContext(ThemeContext);

 const [name, setName] = useState("");
 const [email, setEmail] = useState("");
 const [phone, setPhone] = useState("");
 const [password, setPassword] = useState("");
 const [isButtonDisabled, setIsButtonDisabled] = useState(true);
 const [emailError, setEmailError] = useState("");
 const [successMessage, setSuccessMessage] = useState("");

 const handleChange = (e) => {
  const { name, value } = e.target;

  if (name === "name") {
   setName(value);
  } else if (name === "email") {
   setEmail(value);
  } else if (name === "phone") {
   setPhone(value);
  } else if (name === "password") {
   setPassword(value);
  }
 };

 useEffect(() => {
  if (name !== "" && email !== "" && phone !== "" && password !== "") {
   setIsButtonDisabled(false);
  } else {
   setIsButtonDisabled(true);
  }
 }, [name, email, phone, password]);

 const addSignup = async (e) => {
  e.preventDefault();

  const payload = {
   name,
   email,
   phone,
   password,
  };

  try {
   const response = await axios.post("http://localhost:9000/api/users/register", payload);
   if (response && response.data) {
    setSuccessMessage(response.data.message);
    setEmailError("");
   } else {
    setEmailError("Unexpected response format");
   }
  } catch (error) {
   if (error.response && error.response.data) {
    setEmailError(error.response.data.error || "An unexpected error occurred");
   } else {
    setEmailError("An unexpected error occurred");
   }
   setSuccessMessage("");
  }

 };

 return (
  <div className={textColor}>
   <div className="vh-100 d-flex justify-content-center">
    <div className="container-fluid">
     <div className="row container-row">
      <div className="col-lg-6 col-sm-6 p-0 register">
       <img src="/banner/register-banner.jpg" alt="Register Banner" />
      </div>
      <div className="col-lg-6 col-sm-6 signup-users">
       <div className="mt-2">
        <div className="text-center">
         <h1><b>Sign up</b></h1>
        </div>

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
          <div>
           <button className="btn btn-light btn-lg google-connect-singin">
            <img src="./icon/google.png" alt="Google Icon" className="google-icon google-singin" />
            <b>Create with Google</b>
           </button>
          </div>
          <div className="text-center my-3">
           <Link to="/login" className="btn btn-lg btn-dark">Login</Link>
          </div>
         </div>
        </form>
        {successMessage && <p className="text-success">{successMessage}</p>}
        {emailError && <p className="text-danger">{emailError}</p>}
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};

export default Signin;
