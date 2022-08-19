import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-wrapper">
      <div className="navbar-link-wrapper">
        <Link className="navbar-link" to="/catFact">
          Cat Fact
        </Link>
        <Link className="navbar-link" to="/bitcoin">
          Bitcoin
        </Link>
        <Link className="navbar-link" to="/dogImage">
          Dog Image
        </Link>
      </div>
    </div>
  );
};

export default NavBar;
