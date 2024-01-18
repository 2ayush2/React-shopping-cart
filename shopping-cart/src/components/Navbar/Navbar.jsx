import React from "react";
import { Link } from "react-router-dom";
import "./navbar.css";

export const Navbar = () => {
  return (
    <>
      <div className="navbar">
        <Link to="/Shop">Shop</Link>
        <Link to="/Cart">Cart</Link>
      </div>
    </>
  );
};
