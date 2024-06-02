import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";


const Singin = () => {
 const { textColor } = useContext(ThemeContext);
 return (
  <div className={textColor}>
   <div className="vh-100 d-flex  justify-content-center">
    <div className="container-fluid">
     <div className="row">
      <div className="col-lg-6 col-sm-6 p-0">
       <img src="/banner/register-banner.jpg" className="register" alt="Register Banner" />
      </div>
      <div className="col-lg-5 col-sm-6">
       <div className="mt-3">
        <div className="text-center">
         <h1><b>Sign up</b></h1>
        </div>

        <form className="signup-form mx-auto">
         <div className="form-group mt-3">
          <label><b>Full name</b></label>
          <input id="name" type="name" className="form-control" placeholder="Enter name" />
         </div>
         <div className="form-group mt-3">
          <label><b>Email Address</b></label>
          <input id="email" type="email" className="form-control" placeholder="Enter email" />
         </div>
         <div className="form-group mt-3">
          <label><b>Password</b></label>
          <input id="password" type="password" className="form-control" placeholder="Enter password" />
         </div>
         <div className="form-check mt-3">
          <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
          <label className="form-check-label" htmlFor="flexCheckDefault">
           By clicking Continue, you agree to OrgMeet’s User Agreement, Privacy Policy, and Cookie Policy.
          </label>
         </div>
         <div className="text-center my-3">
          <button type="button" className="btn btn-lg btn-primary">Sing up</button>
         </div>
         <div className="text-center">
          <div>
           <button className="btn btn-light btn-lg mb-2"><img src="./icon/google.png" alt="Google Icon" className="google-icon" style={{ height: '50px' }} /> <b>Create with Google</b></button>
          </div>

         </div>
        </form>
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
};



export default Singin