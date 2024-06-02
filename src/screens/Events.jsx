import React, { useState, useContext } from 'react';
import Button from 'react-bootstrap/Button';
import ThemeContext from "../context/ThemeContext";

const Events = () => {
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
 }
 const toggleCategoriesDropdown = () => {
  setShowCategoriesDropdown(!showCategoriesDropdown);
 }

 const redTextStyle = {
  color: 'red',
 };

 return (
  <div className={TextColor}>
   <div className="d-flex align-items-center justify-content-center">
    <div className="container-fluid">
     <div className="row">
      <div className="col-md-2">
       <h3>Filters</h3>
       <div>
        <div onClick={toggleDateDropdown}>
         <span style={{ marginRight: '20px' }}><i className="fa-solid fa-angle-down"></i></span>
         <span>Date</span>

         {showDateDropdown && (
          <div style={redTextStyle}>
           <Button variant="">Today</Button>{' '}
           <Button variant="">Tomorrow</Button>{' '}
           <Button variant="">This week</Button>{' '}
          </div>
         )}
        </div>
       </div>

       <div>
        <div onClick={toggleLanguagesDropdown}>
         <span style={{ marginRight: '20px' }}><i class="fa-solid fa-angle-down"></i></span>
         <span>Languages</span>
        </div>
        {showLanguagesDropdown && (
         <div style={redTextStyle}>
          <Button variant="">English</Button>{' '}
          <Button variant="">Hindi</Button>{' '}
          <Button variant="">Punjabi</Button>{' '}
         </div>
        )}
       </div>

       <div>
        <div onClick={togglePriceDropdown}>
         <span style={{ marginRight: '20px' }}><i class="fa-solid fa-angle-down"></i></span>
         <span>Price</span>
        </div>
        {showPriceDropdown && (
         <div style={redTextStyle}>
          <Button variant="">Free</Button>{' '}
          <Button variant="">0-500</Button>{' '}
          <Button variant="">501-2000</Button>{' '}
         </div>
        )}
       </div>
       <div onClick={toggleCategoriesDropdown}>
        <span style={{ marginRight: '20px' }}><i class="fa fa-solod fa-angle-down"></i></span>
        <span>Categories</span>
       </div>
       {showCategoriesDropdown && (
        <div style={redTextStyle}>
         <Button variant="">Comedy Shows</Button>{' '}
         <Button variant="">WorkShops</Button>{' '}
         <Button variant="">Kids</Button>{' '}
         <Button variant="">Music Shows</Button>{' '}
         <Button variant="">Screenings</Button>{' '}
        </div>
       )}
      </div>
      <div className="col-md-8">
       <h3>Event In Agra</h3>
       <div>
        <>
         <Button variant="success">Comedy Shows</Button>{' '}
         <Button variant="success">WorkShops</Button>{' '}
         <Button variant="success">Kids</Button>{' '}
         <Button variant="success">Music Shows</Button>{' '}
         <Button variant="success">Screenings</Button>{' '}

        </>
       </div>
       <div>

        <img src="/events/events1.png" alt="Images" className='events' />
        <img src="/events/events2.png" alt="Images" className='events' />
        <img src="/events/events3.png" alt="Images" className='events' />
        <img src="/events/events4.png" alt="Images" className='events' />

       </div>
      </div>
     </div>
    </div>
   </div>
  </div>
 );
}

export default Events;
