import React, { useState } from 'react';

const Events = () => {
 const [showDateDropdown, setShowDateDropdown] = useState(false);
 const [showLanguagesDropdown, setShowLanguagesDropdown] = useState(false);

 const toggleDateDropdown = () => {
  setShowDateDropdown(!showDateDropdown);
 };

 const toggleLanguagesDropdown = () => {
  setShowLanguagesDropdown(!showLanguagesDropdown);
 };

 const redTextStyle = {
  color: 'red',
 };

 return (
  <div className="d-flex align-items-center justify-content-center">
   <div className="container-fluid">
    <div className="row">
     <div className="col-md-2">
      <h3>Filters</h3>
      <div className="Filters">
       <div onClick={toggleDateDropdown}>
        <span style={{ marginRight: '20px' }}>˅</span>
        <span>Date</span>

        {showDateDropdown && (
         <div style={redTextStyle}>
          <div>Today</div>
          <div>Tomorrow</div>
          <div>This week</div>
         </div>
        )}
       </div>
      </div>

      <div>
       <div onClick={toggleLanguagesDropdown}>
        <span style={{ marginRight: '20px' }}>˅</span>
        <span>Languages</span>
       </div>
       {showLanguagesDropdown && (
        <div style={redTextStyle}>
         <div>English</div>
         <div>Hindi</div>
         <div>Punjabi</div>
        </div>
       )}
      </div>
     </div>
     <div className="col-md-6">
      <h3>Event In Agra</h3>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Events;
