import React from "react";
import {Link} from "react-router-dom";
import "../css/nav.css";

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Tweeto</h1>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/create-post">Create Post</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
