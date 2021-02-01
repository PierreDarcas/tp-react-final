import React from "react";
import "./AppBar.css";

const AppBar = () => (
    <header>
      <nav className="AppBar">
        <img
          className="AppBar-logo"
          src={logo}
          aria-label="people"
          alt="People"
        />
      </nav>
    </header>
  );
  
  export default AppBar;