import React from "react";
import logo from "../img/header_logo.png";

const Header = () => {
  return (
    <div className="header">
      <img src={logo} alt="logo" className="header__img" />
      <h1 className="header__title">MyContacts</h1>
    </div>
  );
};

export default Header;
