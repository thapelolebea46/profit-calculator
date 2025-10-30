import React from "react";
import "./Navbar.scss";
import { Link } from "react-router-dom";

export default function Navbar({ label = "Home", path = "/" }) {
  return (
    <nav className="navbar">
      <Link to={path} className="nav-link">
        {label}
      </Link>
    </nav>
  );
}
