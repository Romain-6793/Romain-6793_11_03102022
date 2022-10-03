import React from "react";
import { Link } from "react-router-dom";
import '../styles/Navbar.css'

function Navbar() {
  return (
    <nav className ="hidden-navbar">
      <ul>
        <li>
          <Link to="/">Accueil</Link>
        </li>
        <li>
          <Link to="/about">A propos</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;