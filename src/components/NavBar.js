import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const stlye = {marginRight: "5px"}
  return (
    <div className="navbar">
      <NavLink to='/' style={stlye}>Home</NavLink>
      <NavLink to='/movies' style={stlye}>Movies</NavLink>
      <NavLink to='/directors' style={stlye}>Directors</NavLink>
      <NavLink to='/actors' style={stlye}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
