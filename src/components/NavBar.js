import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
      {/*{code here}*/}	      <NavLink to="/">Home</NavLink> &nbsp;
      <NavLink to="/movies">Movies</NavLink> &nbsp;
      <NavLink to="/directors">Directors</NavLink> &nbsp;
      <NavLink to="/actors">Actors</NavLink> &nbsp;
    </div>
  );
};

export default NavBar;
