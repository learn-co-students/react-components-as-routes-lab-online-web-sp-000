import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <nav>
        <NavLink to ='/'>Home</NavLink>
        <NavLink to ='/actors'>Actors</NavLink>
        <NavLink to ='/directors'>Directors</NavLink>
        <NavLink to ='/movies'>Movies</NavLink>
      </nav>     
    </div>
  );
};

export default NavBar;
