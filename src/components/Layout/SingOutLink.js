import React from "react";
import { Link } from "react-router-dom";
const SingOutLink = () => {
  return (
    <ul>
      <li>
        <Link to="/signup" className="nav_menu">
          Signup
        </Link>
      </li>
      <li>
        <Link to="/signin" className="nav_menu">
          Login
        </Link>
      </li>
    </ul>
  );
};

export default SingOutLink;
