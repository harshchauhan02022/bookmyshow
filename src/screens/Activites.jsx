import React, { useContext, useState } from 'react';
import ThemeContext from '../context/ThemeContext';
import { Button } from 'react-bootstrap';

const Activites = () => {
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

  const redTextStyle = {
    color: 'red',
  };

  return (
    <div className={`p-3 ${TextColor}`}>
      <div className="container">
        <div className="row">
          <div className="col-lg-3 col-md-4 col-12 mb-3">
            <h3>Filters</h3>
            <div className="Filters">
              <div onClick={toggleDateDropdown} className="mb-3">
                <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span>
                <span>Date</span>
                {showDateDropdown && (
                  <div style={redTextStyle}>
                    <Button variant="link">Today</Button>{' '}
                    <Button variant="link">Tomorrow</Button>{' '}
                    <Button variant="link">This week</Button>{' '}
                  </div>
                )}
              </div>
              <div onClick={toggleLanguagesDropdown} className="mb-3">
                <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span>
                <span>Languages</span>
                {showLanguagesDropdown && (
                  <div style={redTextStyle}>
                    <Button variant="link">English</Button>{' '}
                    <Button variant="link">Hindi</Button>{' '}
                    <Button variant="link">Punjabi</Button>{' '}
                  </div>
                )}
              </div>
              <div onClick={togglePriceDropdown} className="mb-3">
                <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span>
                <span>Price</span>
                {showPriceDropdown && (
                  <div style={redTextStyle}>
                    <Button variant="link">Free</Button>{' '}
                    <Button variant="link">0-500</Button>{' '}
                    <Button variant="link">501-2000</Button>{' '}
                  </div>
                )}
              </div>
              <div onClick={toggleCategoriesDropdown} className="mb-3">
                <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span>
                <span>Categories</span>
                {showCategoriesDropdown && (
                  <div style={redTextStyle}>
                    <Button variant="link">Food and Drinks</Button>{' '}
                    <Button variant="link">Parties</Button>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="col-lg-9 col-md-8 col-12">
            <h3>Activities In Agra</h3>
            <div className="mb-3">
              <Button variant="info" className="me-2 mb-2">Food and Drinks</Button>
              <Button variant="info" className="mb-2">Parties</Button>
            </div>
            <div className="row">
              <div className="col-md-4 col-6 mb-3">
                <img src="activite/activites1.png" className="img-fluid events" alt="Plays" />
              </div>
              <div className="col-md-4 col-6 mb-3">
                <img src="activite/activites2.png" className="img-fluid events" alt="Plays" />
              </div>
              <div className="col-md-4 col-6 mb-3">
                <img src="activite/activites3.png" className="img-fluid events" alt="Plays" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Activites;
