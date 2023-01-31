import React from "react";

const Logo = () => {
  return (
    <div className="tm-site-header">
      <div className="mb-3 mx-auto tm-site-logo">
        <i className="fas fa-times fa-2x"></i>
      </div>
     <a href="/" rel="noopener noreferrer" className="text-center" style={{textDecoration: "none"}}> <h1>Tim Blog</h1></a>
    </div>
  );
};

export default Logo;
