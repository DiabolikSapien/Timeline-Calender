// App.js

import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  const [collapsedNavbar, setCollapsedNavbar] = useState(false);
  const [collapsedMiddle, setCollapsedMiddle] = useState(false);

  const toggleNavbar = () => {
    setCollapsedNavbar(!collapsedNavbar);
  };

  const toggleMiddle = () => {
    setCollapsedMiddle(!collapsedMiddle);
  };

  return (
    <div className={`App ${collapsedNavbar ? 'collapsed' : ''}`}>
      {/* Left Vertical Section */}
      <div className="left-section">
        <h2 className="top">T</h2>
        <h2 className="middle">M</h2>
        <h2 className="bottom">B</h2>
      </div>

      <div>
        <nav className="navbar">
          <div className="left-elements">
            <span className="navbar-element">Left Element 1</span>
            <span className="navbar-element">Left Element 2</span>
          </div>

          <div className="center-element">
            <span className="navbar-element">Center Element</span>
          </div>

          <div className="right-elements">
            <span className="navbar-element">Right Element 1</span>
            <span className="navbar-element">Right Element 2</span>
            <span className="navbar-element">Right Element 3</span>
          </div>

          {/* Display the logo only for smaller screens */}
          <div className="navbar-toggle" onClick={toggleNavbar}>
            <img src={logo} alt="Logo" className="logo" />
          </div>
        </nav>

        {/* Popup or Dropdown for smaller screens */}
        {collapsedNavbar && (
          <div className="popup">
            {/* Add your navbar elements here */}
            <span className="navbar-element">Popup Element 1</span>
            <span className="navbar-element">Popup Element 2</span>
            <span className="navbar-element">Popup Element 3</span>
          </div>
        )}

        <div className="vertical-sections">
          <div className="middle-section">
            <div className="middle-toggle" onClick={toggleMiddle}>
              {/* Adjust the icon or content for the middle section toggle */}
              Toggle Middle
            </div>
          </div>

          {collapsedMiddle && (
            <div className="middle-popup">
              {/* Add your middle section content here */}
              <div>Popup Content 1</div>
              <div>Popup Content 2</div>
              <div>Popup Content 3</div>
            </div>
          )}

          <div className="right-section">
            <nav className="second-navbar">
              <span className="second-navbar-element">Second Navbar Element 1</span>
              <span className="second-navbar-element">Second Navbar Element 2</span>
            </nav>
            <div className="main-area">Right</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
