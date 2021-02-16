import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <h1>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/movies">Movies</NavLink>
      <NavLink to="/actors">Actors</NavLink>
      <NavLink to="/directors">Directors</NavLink>
      </h1>
    </div>
  );
};

export default NavBar;
