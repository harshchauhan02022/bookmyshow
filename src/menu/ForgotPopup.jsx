import React, { useState } from 'react';
import '../css/Sidebar.css'; // Ensure Sidebar CSS is imported
import { Modal, Button } from 'react-bootstrap';
import ForgotPassword from '../pages/ForgotPassword';

const ForgotPopup = () => {
 const [showModal, setShowModal] = useState(false);
 const handleShowModal = () => setShowModal(true);
 const handleCloseModal = () => setShowModal(false);

 return (
  <div>
   <Button variant="Light" onClick={handleShowModal}>
   ForgotPassword
   </Button>
   <Modal show={showModal} onHide={handleCloseModal}>
    <Modal.Header closeButton>
     <Modal.Title>Login</Modal.Title>
    </Modal.Header>
    <Modal.Body>
     <ForgotPassword />
    </Modal.Body>
   </Modal>
  </div>
 );
}

export default ForgotPopup