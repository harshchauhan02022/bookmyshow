import React, { useState, useContext, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import InnerHeader from "./InnerHeader";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemeContext from "../context/ThemeContext";
import { Modal, Button } from 'react-bootstrap';
import useApi from "../api/useApi";
import Signin from "../pages/Singin"; // Import the Signin component

const logo = "/logo.png";

function Header() {
  const { textColor } = useContext(ThemeContext);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  const [showModal, setShowModal] = useState(false);

  function getProfile() {
    const promise = useApi.userProfile();
    promise
      .then(async function (response) {
        console.log(">>>>>>> profile response", response);
      })
      .catch((error) => {
        console.log(">>>>>>> profile error", error.message);
      });
  }

  useEffect(() => {
    getProfile();
  }, []);

  const logout = async () => {
    await localStorage.clear();
    navigate("/login");
  };

  const handleShowModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  return (
    <div className={textColor}>
      <nav className="navbar" aria-label="First navbar example">
        <div className="container">
          <div className="d-flex justify-content-start align-items-center">
            <Link className="navbar-brand" to="/">
              <img src={logo} alt={"logo"} />{" "}
            </Link>
            <form className="col-8">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </form>
          </div>
          <ThemeToggleButton />

          <div className="d-flex justify-content-start align-items-center">
            {userEmail ? (
              <>
                <p>{userEmail}&nbsp;&nbsp;</p>
                <button
                  onClick={logout}
                  type="button"
                  className="btn btn-danger btn-sm me-2"
                >
                  Logout
                </button>
              </>
            ) : (
              <Button variant="dark" onClick={handleShowModal}>
                Sign up
              </Button>
            )}

            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasNavbarDark"
              aria-controls="offcanvasNavbarDark"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
          <div
            className="offcanvas offcanvas-end text-bg-white"
            tabIndex="-1"
            id="offcanvasNavbarDark"
            aria-labelledby="offcanvasNavbarDarkLabel"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarDarkLabel">
                Offcanvas
              </h5>
              <button
                type="button"
                className="btn-close btn-close-dark"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
          </div>
        </div>
      </nav>
      <InnerHeader />

      <Modal show={showModal} onHide={handleCloseModal}>
        <Modal.Header closeButton>
          <Modal.Title>Sign up</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Signin />
        </Modal.Body>
      </Modal>
    </div>
  );
}

export default Header;
