import React, { useState, useContext } from "react";
import { Link, useNavigate } from "react-router-dom"
import InnerHeader from "./InnerHeader";
import ThemeToggleButton from "./ThemeToggleButton";
import ThemeContext from "../context/ThemeContext";
import Sidebar from "../menu/Sidebar"; // Sidebar component ko import karein
import '../css/Sidebar.css'; // Agar abhi tak Sidebar CSS import nahi kiya hai toh import karein
import SingPopup from "../menu/SingPopup";
const logo = "/logo.png";

function Header() {
  const { textColor } = useContext(ThemeContext);
  const navigate = useNavigate();
  const userEmail = localStorage.getItem("email");

  const [isSidebarOpen, setIsSidebarOpen] = useState(false); // Sidebar state
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen); // Sidebar toggle function

  // User ko logout karne wala function
  const logout = async () => {
    await localStorage.clear();
    navigate("/");
  };

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
                <p className="userEmail">{userEmail}&nbsp;&nbsp;</p>
                <button
                  onClick={logout}
                  type="button"
                  className="btn btn-danger btn-sm me-2"
                >
                  Logout
                </button>
              </>
              )  :  (
              <SingPopup />
            )}
            {/* Sidebar toggle button */}
            <button
              className="navbar-toggler hamburger"
              type="button"
              onClick={toggleSidebar} // Sidebar toggle function ka use karein
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </nav>
      <InnerHeader />
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} /> Sidebar component ka use karein
    </div>
  );
}
export default Header;
