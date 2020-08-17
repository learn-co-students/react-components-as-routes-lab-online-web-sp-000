import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className='navbar'>
        <NavLink to='/'>Home</NavLink>
        <NavLink to='/actors'>Actors</NavLink>
        <NavLink to='/directors'>Directors</NavLink>
        <NavLink to='/movies'>Movies</NavLink>
      </div>
    </div>
  );
};

export default NavBar;
