import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <h2>This is Header</h2>
      <Link to= '/'>Home</Link>
      <Link to= '/review'>Order Review</Link>
      <Link to = '/contact'>Contact</Link>
      <Link to = '/about'>About</Link>
    </nav>
  );
};

export default Header;
