// import React, { useState } from 'react';
// import LoginPopup from './LoginPopup';
// import SingPopup from './SingPopup';

// const ParentComponent = () => {
//  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
//  const [isSingModalOpen, setIsSingModalOpen] = useState(false);

//  const handleShowLoginModal = () => {
//   setIsLoginModalOpen(true);
//   setIsSingModalOpen(false);
//  };

//  const handleShowSingModal = () => {
//   setIsSingModalOpen(true);
//   setIsLoginModalOpen(false);
//  };

//  return (
//   <div>
//    <h1>Welcome to Our Application</h1>
//    <button onClick={handleShowLoginModal}>Open Login Popup</button>
//    <button onClick={handleShowSingModal}>Open Signup Popup</button>

//    <LoginPopup showModal={isLoginModalOpen} handleClose={() => setIsLoginModalOpen(false)} />
//    <SingPopup showModal={isSingModalOpen} handleClose={() => setIsSingModalOpen(false)} />
//   </div>
//  );
// };

// export default ParentComponent;
