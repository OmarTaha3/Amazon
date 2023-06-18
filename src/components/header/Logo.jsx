import React from "react";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";

const Logo = () => {
  return (
    <Link to='/'>
      <div className="headerHover">
        <img className="w-24 mt-2" src={logo} alt="logo" />
      </div>
    </Link>
  );
};

export default Logo;
