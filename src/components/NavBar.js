import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className="navbar">
      <NavLink to="/" activeStyle={{ color: 'dodgerblue', margin: '1rem', textDecoration: 'none' }}>Home</NavLink>
      <NavLink to="/movies" activeStyle={{ color: 'red', margin: '1rem', textDecoration: 'none' }}>Movies</NavLink>
      <NavLink to="/actors" activeStyle={{ color: 'lightgreen', margin: '1rem', textDecoration: 'none' }}>Actors</NavLink>
      <NavLink to="/directors" activeStyle={{ color: 'yellow', margin: '1rem', textDecoration: 'none' }}>Directors</NavLink>
    </div>
  )
}

export default NavBar
