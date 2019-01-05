import React from "react";
import { NavLink } from "react-router-dom";

const link = {
  width: "100px",
  padding: "12px",
  margin: "0 6px 6px",
  background: "blue",
  textDecoration: "none",
  color: "white"
};

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact activeStyle={{ background: "darkgreen" }}>
        Home
      </NavLink>
      <NavLink
        to="/movies"
        exact
        style={link}
        activeStyle={{ background: "darkgreen" }}
      >
        Movies
      </NavLink>
      <NavLink
        to="/directors"
        exact
        style={link}
        activeStyle={{ background: "darkgreen" }}
      >
        Directors
      </NavLink>
      <NavLink
        to="/actors"
        exact
        style={link}
        activeStyle={{ background: "darkgreen" }}
      >
        Actors
      </NavLink>
    </div>
  );
};

export default NavBar;

// This component needs to render 4 < NavLink > components.
// They will be for /, /movies, /directors, /actors < -- in this order
// (test checks for this).
