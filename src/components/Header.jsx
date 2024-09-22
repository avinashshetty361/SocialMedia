import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <h1>Social Media Platform</h1>
      <nav>
        <NavLink
          to="/"
          exact
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Home
        </NavLink>
        <NavLink
          to="/create-post"
          className={({ isActive }) => (isActive ? "active-link" : "")}
        >
          Create Post
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
