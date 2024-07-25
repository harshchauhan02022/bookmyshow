import React, { useState } from 'react';
import '../css/Sidebar.css'; // Ensure Sidebar CSS is imported
import { Modal, Button } from 'react-bootstrap';
import Login from "../pages/Login"; // Import the Login component

const LoginPopup = () => {
 const [showModal, setShowModal] = useState(false);
 const handleShowModal = () => setShowModal(true);
 const handleCloseModal = () => setShowModal(false);

 return (
  <div>
   <Button variant="danger" onClick={handleShowModal}>
    Login
   </Button>
   <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
     <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <Login />
    </Modal.Body>
   </Modal>
  </div>
 );
};

export default LoginPopup;
