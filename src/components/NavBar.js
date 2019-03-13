import React from 'react';
import { NavLink } from 'react-router-dom';

const link = {
  width:'200px',
  padding: '24px',
  margin: '0 6px 6px',
  background: 'black',
  textDecoration: 'none',
  color: 'white'
}

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" exact style={link} activeStyle={{background: 'yellow', color: 'black'}}>Home</NavLink>
      <NavLink to="/movies" exact style={link} activeStyle={{background: 'yellow', color: 'black'}}>Movies</NavLink>
      <NavLink to="/directors" exact style={link} activeStyle={{background: 'yellow', color: 'black'}}>Directors</NavLink>
      <NavLink to="/actors" exact style={link} activeStyle={{background: 'yellow', color: 'black'}}>Actors</NavLink>
    </div>
  );
};

export default NavBar;
