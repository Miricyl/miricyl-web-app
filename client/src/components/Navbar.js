import React from "react";
import "../styles/global.css";
import Logo from "../assets/BoostLogo.png";

const NavBar = ({ showHelpButton = true, onHelpButtonPressed }) => {
  const donateButton = 'https://www.miricyl.org/donate/';
  return (
    <>
      <div className="navbar-container">
        <div className="navbar-wrapper">
          <div>
            <a href="/" className="navbar-link">
              {/* <img
                className="navbar-logo"
                src={Logo}
                alt="logo"
                test-id="logo"
              /> */}
              <h1 className="navbar-logo">Miricyl</h1>
            </a>

          </div>

          {/* showHelpButton && (
            <button
              className="help-button"
              id="help-button"
              onClick={() => onHelpButtonPressed()}
            >
              Help Now!
            </button>
          ) */}
           <a href={donateButton} className="help-button" id="help-button" target="_blank">Help Now!</a>
        </div>
      </div>
    </>
  );
};

export default NavBar;
