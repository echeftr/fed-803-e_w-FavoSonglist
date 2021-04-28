import React from "react";
import "../App.css";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <nav>
        <ul className="nav-links">
          <Link to="/app">
            <li className="nav-links-li">Home</li>
          </Link>
          <Link to="/about">
            <li className="nav-links-li">About</li>
          </Link>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
