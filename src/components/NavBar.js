import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      <NavBar to="/">Home</NavBar>
      <NavBar to="/movies">Movies</NavBar>
      <NavBar to="/directors">Directors</NavBar>
      <NavBar to="/actors">Actors</NavBar>
    </div>
  );
};

export default NavBar;
