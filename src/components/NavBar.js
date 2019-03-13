import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = props => (
  <div className="navBar">
    <ul>
      {props.routes.map((page, i) => (
        <li key={i.toString()}>
          <NavLink to={`/${page === "home" ? "" : page}`} exact>
            {page[0].toUpperCase() + page.slice(1)}
          </NavLink>
        </li>
      ))}
    </ul>
  </div>
);

export default NavBar;
