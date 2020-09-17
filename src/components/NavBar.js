import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <header>
      <div className="navbar">
        <NavLink to="/" activeClassName="is-active" exact={true}>Home </NavLink>
        <NavLink to="/movies" activeClassName="is-active">Movies </NavLink>
        <NavLink to="/directors" activeClassName="is-active">Directors </NavLink>
        <NavLink to="/actors" activeClassName="is-active">Actors </NavLink>
      </div>
    </header>
  );
};

export default NavBar;
