import React from "react";
import "./header.scss";
import Logo from './../../assets/logo.png'

const Header = (props) => {
  return (
    <header className="header" data-test="headerComponent">
      <div className="wrap">
        <div className="logo">
          <img className="logoIMG" src={Logo} alt="logo" data-test="logoIMG"/>
        </div>
      </div>
    </header>
  );
};

export default Header;
