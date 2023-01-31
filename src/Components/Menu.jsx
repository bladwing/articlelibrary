import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <nav className="tm-nav" id="tm-nav">
        <ul>
          <li className="tm-nav-item active">
            <Link to="/" className="tm-nav-link">
              <i className="fas fa-home"></i>
              Blog Home
            </Link>
          </li>
          <li className="tm-nav-item">
            <Link to="/create" className="tm-nav-link">
              <i className="fas fa-pen"></i>
              Create
            </Link>
          </li>
          <li className="tm-nav-item">
            <Link to="/something" className="tm-nav-link">
              <i className="fas fa-pen"></i>
              Something
            </Link>
          </li>
          <li className="tm-nav-item">
            <Link to="/contact" className="tm-nav-link">
              <i className="fas fa-pen"></i>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
