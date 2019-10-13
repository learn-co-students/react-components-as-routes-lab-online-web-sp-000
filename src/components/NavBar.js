import React from 'react';
import { NavLink } from 'react-router-dom';


      // <Navlink> Home <NavLink/>

const NavBar = () => {
  return (
    <div className="navbar">
       <NavLink to="/">Home</NavLink>
       <NavLink to="/actors">Actors</NavLink>
       <NavLink to="/movies">Movies</NavLink>
       <NavLink to="/directors">Directors</NavLink>
    </div>
  );
};

export default NavBar;
