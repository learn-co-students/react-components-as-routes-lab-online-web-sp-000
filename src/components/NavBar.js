import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  return (
    <div className="navbar">
      {/*{code here}*/}
      <NavLink to="/" exact style={link} activeStyle={{backround: "bluegreen"} }>Home</NavLink>       
      <NavLink to="/movies" style={link} activeStyle={{background: "bluegreen"}}>Movies</NavLink>
      <NavLink to="/directors" style={link} activeStyle={{background: "bluegreen"}}>Directors</NavLink>
      <NavLink to="/actors" style={link} activeStyle={{background: "bluegreen"}}>Actors</NavLink>

    </div>
  );
};

export default NavBar;
