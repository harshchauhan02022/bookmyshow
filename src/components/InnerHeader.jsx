import React from "react";
import { Link } from "react-router-dom";

const InnerHeader = () => {
 return (
  <nav className="navbar navbar-expand-lg navbar-light bg-light">
   <div className="container">
    <button
     className="navbar-toggler"
     type="button"
     data-bs-toggle="collapse"
     data-bs-target="#navbarSupportedContent"
     aria-controls="navbarSupportedContent"
     aria-expanded="false"
     aria-label="Toggle navigation"
    >
     <span className="navbar-toggler-icon"></span>
    </button>
    <div
     className="collapse navbar-collapse d-flex justify-content-between"
     id="navbarSupportedContent"
    >
     <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
       <Link to={"/movies"} className="nav-link">
        Movies
       </Link>
      </li>
      <li className="nav-item">
       <Link to={"/stream"} className="nav-link">
        Stream
       </Link>
      </li>

      <li className="nav-item">
       <Link to={"/events"} className="nav-link">
        Events
       </Link>
      </li>
      <li className="nav-item">
       <Link to={"/plays"} className="nav-link">
        Plays
       </Link>
      </li>
      <li className="nav-item">
       <Link to={"/sports"} className="nav-link">
        Sports
       </Link>
      </li>
      <li className="nav-item"><Link to={"/activites"} className="nav-link">
       Activites
      </Link>
      </li>
      <li className="nav-item"><Link to={"/todo"} className="nav-link">
       Todo
      </Link>
      </li>
      <li className="nav-item"><Link to={"/addblogs"} className="nav-link">
       AddBlogs
      </Link>
      </li>
      <Link className="nav-link" to="blogs">
       Blogs
      </Link>
     </ul>

     <ul className="navbar-nav mb-2 mb-lg-0">
      <li className="nav-item">
       <Link to={"/listYourShow"} className="nav-link">
        ListYourShow
       </Link>
      </li>
      <li className="nav-item">
       <Link to={"/corporates"} className="nav-link">
        Corporates
       </Link>
      </li>

      <li className="nav-item"> <Link to={"/offers"} className="nav-link">
       Offers
      </Link>
      </li>
      <li className="nav-item"> <Link to={"/giftcards"} className="nav-link">
       Gift cards
      </Link>
      </li>
     </ul>
    </div>
   </div>
  </nav>
 );
};

export default InnerHeader;