import React from 'react'
import { NavLink } from 'react-router-dom'

const NavBar = () => {
  return (
    <div className='navbar'>
      <NavLink to='/'>Home</NavLink>
      &nbsp;|&nbsp;
      <NavLink to='/movies'>Movies</NavLink>
      &nbsp;|&nbsp;
      <NavLink to='/directors'>Directors</NavLink>
      &nbsp;|&nbsp;
      <NavLink to='/actors'>Actors</NavLink>
    </div>
  )
}

export default NavBar
