import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to="/" exact activeStyle={{ background: 'darkblue' , paddingRight: '10px' }}>Home</NavLink>
      <NavLink to="/movies" exact activeStyle={{ background: 'darkblue' , paddingLeft: '10px' }}>Movies</NavLink>
      <NavLink to="/directors" exact activeStyle={{ background: 'darkblue', paddingRight: '10px'}}>Directors</NavLink>
      <NavLink to="/actors" exact activeStyle={{ background: 'darkblue', paddingRight: '10px' }}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
