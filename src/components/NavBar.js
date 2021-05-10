import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div className='navbar'>
      {
        <nav>
          <ul>
            <li>
              <NavLink to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink to='/movies'>Movies</NavLink>
            </li>
            <li>
              <NavLink to='/directors'>Directors</NavLink>
            </li>
            <li>
              <NavLink to='/actors'>Actors</NavLink>
            </li>
          </ul>
        </nav>
    }
    </div>
  );
};

export default NavBar;

// This component needs to render 4 `<NavLink>` components. They will be for __/,
// /movies, /directors, /actors__ <-- in this order(test checks for this).