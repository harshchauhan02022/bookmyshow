import React, { useContext } from 'react'
import ThemeContext from "../context/ThemeContext";


function ForgotPassword() {
 const { textColor } = useContext(ThemeContext);

 return (
  <div className={textColor}>
   <div class="row justify-content-center">
    <div class="col-md-3 Continue-forgotpassword">
     <h2>Find your account</h2><hr />
     <h6 className='mt-3'>Enter your email address or mobile phone number</h6>
     <div>
      <input type="text" placeholder="Email address and Phone number" class="form-control text-center" />
     </div>
     <p className='mt-2'>You may receive <b>WhatsApp</b> and <b>SMS</b> notifications from us for security and login purposes.</p>
     <button class="btn btn-primary Continue mb-4">Continue</button>
    </div>
   </div>
  </div>

 )
}

export default ForgotPassword