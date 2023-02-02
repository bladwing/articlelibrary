import React, { Fragment } from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <Fragment>
      <button
        className="navbar-toggler"
        type="button"
        aria-label="Toggle navigation"
      >
        <i className="fas fa-bars"></i>
      </button>

      <nav className="tm-nav" id="tm-nav">
        <ul>
          <li className="tm-nav-item">
            <Link to="/" className="tm-nav-link">
              <i className="fas fa-home"></i>
              Home
            </Link>
          </li>
          <li className="tm-nav-item">
            <Link to="/create" className="tm-nav-link">
              <i className="fas fa-pen"></i>
              Create Article
            </Link>
          </li>
        </ul>
      </nav>
    </Fragment>
  );
};

export default Menu;
