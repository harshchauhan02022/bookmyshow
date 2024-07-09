import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (name === "email") {
      setEmail(value);
    }
    else if (name === "password") {
      setPassword(value);
    }
  };

  useEffect(() => {
    if (email && password) {
      setIsButtonDisabled(false);
    } else {
      setIsButtonDisabled(true);
    }
  }, [email, password]);

  const login = (event) => {
    event.preventDefault(); // Prevent form submission
    const payload = { email, password };

    axios.post("http://localhost:9000/api/users/login", payload)
      .then(async (response) => {
        console.log(response);
        await localStorage.setItem("email", email);
        await localStorage.setItem("token", response.data.token);
        clearForm();
        navigate("/"); // Redirect to the home page
      })
      .catch((error) => {
        if (error.response && error.response.status === 401) {
          console.log("Error while login", error.response.data.message);
          setError(error.response.data.message);
        } else {
          console.log("Error while login", error.message);
          setError("An error occurred. Please try again later.");
        }
      });
  };

  const clearForm = () => {
    setEmail("");
    setPassword("");
    setIsButtonDisabled(true);
    setError("");
  };

  return (
    <div className="container-login">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-7 col-sm-6 p-0 login">
            <img src="/banner/login-banner.jpg" alt="Login Banner" />
          </div>
          <div className="col-lg-5 col-sm-6">
            <div className="mt-3">
              <div className="text-center">
                <h1><b>Welcome Back</b></h1>
              </div>
              <p style={{ color: "red" }}>{error}</p>
              <form className="signup-form mx-auto" onSubmit={login}>
                <div className="form-group mt-5">
                  <label><b>Email Address</b></label>
                  <input
                    name="email"
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={email}
                    autoComplete="off"
                  />
                </div>
                <div className="form-group mt-3">
                  <label><b>Password</b></label>
                  <input
                    name="password"
                    type="password"
                    className="form-control"
                    id="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={password}
                    autoComplete="off"
                  />
                </div>
                <div className="mb-3 text-end">
                  <Link to="/forgot-password">Forgot Password</Link>
                </div>
                <div className="pt-3 text-center">
                  <button
                    disabled={isButtonDisabled}
                    type="submit"
                    className="btn btn-primary w-100"
                  >
                    Login
                  </button>
                </div>
                <div className="mt-3 text-center">OR</div>
                <div className="pt-3 google-connect-login">
                  <button className="google-icon"><img src="/icon/google.png" className="google" alt="Google Icon" /> <b>Create with Google</b></button>
                </div>
                <div className="mt-3 text-center">
                  <Link to="/signin" className="btn btn-lg btn-dark">Register</Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
