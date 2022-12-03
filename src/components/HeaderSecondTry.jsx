import React from "react";
import phoneIcon from "../images/phone-solid.svg";
import '../sass/header.css'
const Header = () => {
  return (
    <header>
      <div className="container">
        <h1>Pizza Best</h1>
        <p className="adress">tanta, elgharbiea , egypt</p>
        <div className="phone f-2">
          <img src={phoneIcon} alt="" className="icon" />
          01029949333
        </div>
      </div>
    </header>
  );
};

export default Header;
