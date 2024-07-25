import React, { useState } from 'react';
import '../css/Sidebar.css'; // Agar abhi tak Sidebar CSS import nahi kiya hai toh import karein
import { Modal, Button } from 'react-bootstrap';
import Signin from "../pages/Singin"; // Signin component ko import karein

const SingPopup = () => {
  const [showModal, setShowModal] = useState(false);
  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div>
      <Button variant="danger" onClick={handleShowModal}>
        Sign up
      </Button>
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

export default SingPopup;
