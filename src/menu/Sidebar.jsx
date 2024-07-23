import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import '../css/Sidebar.css';
import Signin from "../pages/Singin"; // Signin component ko import karein


const login = "icon/login.png";

const Sidebar = ({ isOpen, toggleSidebar }) => {

 const [showModal, setShowModal] = useState(false);


 const handleShowModal = () => setShowModal(true);
 const handleCloseModal = () => setShowModal(false);


 useEffect(() => {
  const handleClickOutside = (event) => {
   if (isOpen && !document.querySelector('.sidebar').contains(event.target) &&
    !document.querySelector('.hamburger').contains(event.target)) {
    toggleSidebar();
   }
  };

  document.addEventListener('click', handleClickOutside);

  return () => {
   document.removeEventListener('click', handleClickOutside);
  };
 }, [isOpen, toggleSidebar]);

 return (
  <div className={`sidebar ${isOpen ? 'open' : ''}`}>
   <div ><h3><b> Hey!</b></h3></div>  <hr />
   <div className="container-fluid">
    <div className="row">

     <div className="col-md-2">
      <img src={login} alt="Login icon" className="logo-login" />     </div>
     <div className="col-md-6 p-login">
      <p>Unlock special offers &<br />
       great benefits
      </p>
     </div>
     <div className="col-md-4">
      <Button variant="danger" onClick={handleShowModal} className='icon-s-login'>
       Login/Register
      </Button>
     </div>
    </div>
   </div>
   <nav className="sidebar-nav">
    <Link to="/contact" onClick={toggleSidebar}>Notifications</Link>
    <Link to="/contact" onClick={toggleSidebar}>About</Link>
    <Link to="/contact" onClick={toggleSidebar}>Services</Link>
    <Link to="/contact" onClick={toggleSidebar}>Contact</Link>
   </nav>

   <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
     <Modal.Title>Register Now</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Signin />
    </Modal.Body>
   </Modal>

  </div>
 );
};

export default Sidebar;
