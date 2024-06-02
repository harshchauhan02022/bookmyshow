import React, { useContext, useState } from 'react'
import { Button } from 'react-bootstrap';
import ThemeContext from '../context/ThemeContext'

const Sports = () => {
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
  }; return (
    <div className={TextColor}>
      <div className="d-flex align-items-center justify-content-center">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-2">
              <h3>Filters</h3>
              <div className="Filters">
                <div onClick={toggleDateDropdown}>
                  <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span>
                  <span>Date</span>

                  {showDateDropdown && (
                    <div style={redTextStyle}>
                      <Button variant="">Today</Button>{' '}
                      <Button variant="">Tomorrow</Button>{' '}
                      <Button variant="">This week</Button>
                    </div>
                  )}
                </div>
              </div>

              <div>
                <div onClick={toggleLanguagesDropdown}>
                  <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span> {/* Changed class name from fa-solid to fas */}
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
                  <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span> {/* Changed class name from fa-solid to fas */}
                  <span>Price</span>
                </div>
                {showPriceDropdown && (
                  <div style={redTextStyle}>
                    <Button variant="">Free</Button>{' '}
                    <Button variant="">0-500</Button>{' '}
                    <Button variant="">501-2000</Button>
                  </div>
                )}
              </div>
              <div onClick={toggleCategoriesDropdown}>
                <span style={{ marginRight: '20px' }}><i className="fas fa-angle-down"></i></span> {/* Changed class name from fa-solod to fas */}
                <span>Categories</span>
              </div>
              {showCategoriesDropdown && (
                <div style={redTextStyle}>
                  <Button variant="">Walking</Button>{' '}
                  <Button variant="">Running</Button>

                </div>
              )}
            </div>
            <div className="col-md-8">
              <h3>Sports In Agra</h3>
              <div>
                <Button variant="success">Walking</Button>{' '}
                <Button variant="success">Running</Button>

              </div>
              <div>

                <img src="/sportsimg/sports1.png" className='events' alt="Plays" />
                <img src="/sportsimg/sports2.png" className='events' alt="Plays" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Sports