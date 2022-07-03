import React from "react";
import { Link } from "react-router-dom";
import "../style/navbar.css";

export const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to='/'>
        <div className="logo">
          <img src={require("../images/logo-no-background.jpeg")} alt="logo" />
        </div>
      </Link>
    </nav>
  );
};
