import React, { useState } from 'react';
import '../css/Sidebar.css'; // Agar abhi tak Sidebar CSS import nahi kiya hai toh import karein
import { Modal, Button } from 'react-bootstrap';
import Signin from "../pages/Singin"; // Signin component ko import karein


const SingPopup = () => {

  const [showModal, setShowModal] = useState(false);
  // const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  // const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Sidebar toggle function

  return (
    <div>
      <Button variant="danger" onClick={handleShowModal}>
        Sign up
      </Button>

      {/* <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> Sidebar component ka use karein */}

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
