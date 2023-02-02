import React from "react";
import './logo.scss'

const Logo = () => {
  return (
    <div className="tm-site-header">
      <div className="mb-3 mx-auto tm-site-logo">
        <i className="fas fa-times fa-2x"></i>
      </div>
     <a href="/" rel="noopener noreferrer"> <h1>Tim Blog</h1></a>
    </div>
  );
};

export default Logo;
