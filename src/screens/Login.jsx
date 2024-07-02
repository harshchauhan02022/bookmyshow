import React from 'react'
import { Link } from 'react-router-dom';

const Login = () => {
 return (
  <div className="container-login">
   <div className="container-fluid">
    <div className="row">
     <div className="col-lg-7 col-sm-6 p-0 login">
      <img src="/banner/login-banner.jpg"  alt="Login Banner" />
     </div>
     <div className="col-lg-5 col-sm-6">
      <div className="mt-3">
       <div className="text-center">
        <h1><b>Welcome Back</b></h1>
       </div>

       <form className="signup-form mx-auto">
        <div className="form-group mt-5">
         <label><b>Email Address</b></label>
         <input id="email" type="email" className="form-control" placeholder="Enter email" />
        </div>
        <div className="form-group mt-3">
         <label><b>Password</b></label>
         <input id="password" type="password" className="form-control" placeholder="Enter password" />
        </div>
        <div className="pt-3 text-center">
                <button type="button" className="btn btn-lg btn-dark">Login</button>
              </div>
        <div className="mt-3 text-center">OR</div>
        <div className="pt-3">
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

export default Login