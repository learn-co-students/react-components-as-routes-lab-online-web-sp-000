import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className="navbar">
    <Link to="/">Home</Link> <br />
    <Link to="/movies">Movies</Link> <br />
    <Link to="/directors">Directors</Link> <br />
    <Link to="/actors">Actors</Link> <br />
    </div>
  );
};

export default NavBar;
