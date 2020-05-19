import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <div className="navbar">
        <NavLink to="/about">About</NavLink>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/movies">Movies</NavLink>
        <NavLink to="/directors">Directors</NavLink>
        <NavLink to="/actors">Actors</NavLink>
      </div>
    </div>
  );
};

export default NavBar;




// <div class="container">
//                <nav>
// <Link to="/">Home</Link>
// <Link to="/dashboard">Dashboard</Link>
//                </nav>
//                <Route
//                    path="/"
//                    component={HomeComponent}
//                    exact
//                />
//                <Route
//                    path="/dashboard"
//                    component={DashboardComponent}
//                />
//            </div>
