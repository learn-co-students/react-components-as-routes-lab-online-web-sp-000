import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
    <div className="navbar">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/actors">Actors</NavLink>
        <NavLink to="/directors">Directors</NavLink>
        <NavLink to="/movies">Movies</NavLink>
    </div>
  );
};

export default NavBar;

// <nav>
//   <ul>
//     <li>
//       <Link to="/">Home</Link>
//     </li>
//     <li>
//       <Link to="/about">Actors</Link>
//     </li>
//     <li>
//       <Link to="/users">Directors</Link>
//     </li>
//     <li>
//       <Link to="/users">Movies</Link>
//     </li>
//   </ul>
// </nav>
