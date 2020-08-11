import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="App-header">
        <a href="https://www.capgemini.com/au-en/" className="header__logo">
          <img src={logo} alt="Capgemini Australia" />>
        </a>
      </header>
      <div className="header__subheader">
        Salesforce Credential Holder Directory
      </div>
    </>
  );
}

export default Header;
