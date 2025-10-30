import React from "react";
import "./Navbar.scss";

export default function Navbar({ label = "Home", path = "/" }) {
  return (
    <nav className="navbar">
      <a href={path} className="nav-link">
        {label}
      </a>
    </nav>
  );
}
