import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ThemeContext from "../context/ThemeContext";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../css/Events.css'; // Import the custom CSS

const Plays = () => {
 const { TextColor } = useContext(ThemeContext);

 const [showDateDropdown, setShowDateDropdown] = useState(false);
 const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);
 const [showPriceDropdown, setShowPriceDropdown] = useState(false);
 const [showCategoriesDropdown, setShowCategoriesDropdown] = useState(false);

 const toggleDateDropdown = () => {
  setShowDateDropdown(!showDateDropdown);
 };

 const toggleLanguagesDropdown = () => {
  setShowLanguagesDropdown(!showLanguagesDropdown);
 };
 const togglePriceDropdown = () => {
  setShowPriceDropdown(!showPriceDropdown);
 };
 const toggleCategoriesDropdown = () => {
  setShowCategoriesDropdown(!showCategoriesDropdown);
 };

 const darkTextStyle = {
  color: 'dark',
 };

 return (
  <div className={TextColor}>
   <div className="d-flex align-items-center justify-content-center events-background">
    <div className="container-fluid">
     <div className="row">
      <div className="col-md-2 all-files">
       <h3>Filters</h3>
       <div className="navbar-nav flex-column">
        <div className="nav-item dropdown">
         <div className="d-flex justify-content-between align-items-center">
          <Button variant="link" className="nav-link dropdown-toggle" onClick={toggleDateDropdown} style={darkTextStyle}>
           Date
          </Button>
          <Button variant="link" className="clear-btn">Clear</Button>
         </div>
         {showDateDropdown && (
          <div className="dropdown-menu show">
           <Button variant="">Today</Button>{' '}
           <Button variant="">Tomorrow</Button>{' '}
           <Button variant="">This week</Button>{' '}
          </div>
         )}
        </div>
        <div className="nav-item dropdown">
         <div className="d-flex justify-content-between align-items-center">
          <Button variant="link" className="nav-link dropdown-toggle" onClick={toggleLanguagesDropdown} style={darkTextStyle}>
           Languages
          </Button>
          <Button variant="link" className="clear-btn">Clear</Button>
         </div>
         {showLanguagesDropdown && (
          <div className="dropdown-menu show">
           <Button variant="">English</Button>{' '}
           <Button variant="">Hindi</Button>{' '}
           <Button variant="">Punjabi</Button>{' '}
          </div>
         )}
        </div>
        <div className="nav-item dropdown">
         <div className="d-flex justify-content-between align-items-center">
          <Button variant="link" className="nav-link dropdown-toggle" onClick={togglePriceDropdown} style={darkTextStyle}>
           Price
          </Button>
          <Button variant="link" className="clear-btn">Clear</Button>
         </div>
         {showPriceDropdown && (
          <div className="dropdown-menu show">
           <Button variant="">Free</Button>{' '}
           <Button variant="">0-500</Button>{' '}
           <Button variant="">501-2000</Button>{' '}
          </div>
         )}
        </div>
        <div className="nav-item dropdown">
         <div className="d-flex justify-content-between align-items-center">
          <Button variant="link" className="nav-link dropdown-toggle" onClick={toggleCategoriesDropdown} style={darkTextStyle}>
           Categories
          </Button>
          <Button variant="link" className="clear-btn">Clear</Button>
         </div>
         {showCategoriesDropdown && (
          <div className="dropdown-menu show">
           <Button variant="">Comedy Shows</Button>{' '}
           <Button variant="">WorkShops</Button>{' '}
           <Button variant="">Kids</Button>{' '}
           <Button variant="">Music Shows</Button>{' '}
           <Button variant="">Screenings</Button>{' '}
          </div>
         )}
        </div>
       </div>
      </div>
      <div className="col-md-8">
       <h3>Events In Agra</h3> 
       <div className="buttonBox">
        <Button className="success">Comedy Shows</Button>{' '}
        <Button className="success">WorkShops</Button>{' '}
        <Button className="success">Kids</Button>{' '}
        <Button className="success">Music Shows</Button>{' '}
        <Button className="success">Screenings</Button>{' '}
       </div>
       <div className="events-container">
        <img src="/events/plays.png" className='events1' alt="Plays" />
       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Plays;
