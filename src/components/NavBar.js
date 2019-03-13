import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  <ul>
    {props.routes.map((page,i ) => (
      <li>
        <NavLink key={i} to={`/${page === "home" ? '' : page}`} exact>
          {page[0].toUpperCase() + page.slice(1)}
        </NavLink>
      </li>
    ))}
  </ul>
);

export default NavBar;
