import axios from 'axios';
import React, { useState, useEffect, useContext } from 'react';
import { Link, useNavigate } from "react-router-dom";
import ThemeContext from "../context/ThemeContext";
import { ThreeDots } from 'react-loader-spinner';
import { showToast } from "../utils/toast";

const Login = () => {
  const { textColor } = useContext(ThemeContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isButtonDisabled, setIsButtonDisabled] = useState(true);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  useEffect(() => {
    setIsButtonDisabled(!(email && password));
  }, [email, password]);
  const login = async (event) => {
    event.preventDefault();
    setLoading(true);
    const payload = { email, password };
    try {
      const response = await axios.post("http://localhost:9000/api/users/login", payload);
      setLoading(false);
      await localStorage.setItem("email", email);
      await localStorage.setItem("token", response.data.token);
      clearForm();
      showToast("Login Successfully!", "success");
      navigate("/movies");
    } catch (error) {
      setLoading(false);
      if (error.response && error.response.status === 401) {
        showToast(error.response.data.message, "error");
      } else {
        console.error("Error while login", error.message);
        showToast(error.message, "error");
      }
    }
  };
  const clearForm = () => {
    setEmail("");
    setPassword("");
    setIsButtonDisabled(true);
    setError("");
  };

  return (
    <div className={textColor}>
      <div className="container-login">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-7 col-sm-6 p-0 login">
              <img src="/banner/login-icon.jpg" alt="Login Banner" />
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
                    <Link to="/forgotPassword">Forgot Password</Link>
                  </div>
                  <div className="pt-3 text-center">
                    <button
                      disabled={isButtonDisabled}
                      type="submit"
                      className="btn btn-primary w-100"
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      Login&nbsp;
                      {loading && (
                        <div className="loader">
                          <ThreeDots height="30" width="30" color="#fff" />
                        </div>
                      )}
                    </button>
                  </div>
                  <div className="mt-3 text-center">OR</div>
                  <div className="pt-3 google-connect-login">
                    <button className="google-icon">
                      <img src="/icon/google.png" className="google" alt="Google Icon" />
                      <b>Create with Google</b>
                    </button>
                  </div>
                  <div className="mt-3 text-center pb-3">
                    <Link to="/signin" className="btn btn-lg btn-dark">Register</Link>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
