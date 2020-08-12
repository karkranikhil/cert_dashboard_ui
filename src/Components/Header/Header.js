import React, { useEffect, useState } from "react";
import logo from "../../logo.svg";
import "./Header.css";

function Header() {
  return (
    <>
      <header className="row App-header ">
        <a href="https://www.capgemini.com/au-en/" className="">
          <img src={logo} alt="Capgemini Australia" />
        </a>
        <div className="header__subheader">Salesforce Credential Holder Directory</div>
      </header>
    </>
  );
}

export default Header;
