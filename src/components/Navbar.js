import React from 'react'
import './stylesheets/Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = () => {

  return (
<div id="Navbar">
    <NavLink to="/"> 
        <img src={require("../components/assets/logo-01.png")} alt="logo" id='logo'/> 
    </NavLink>
    <ul>
        <li>
          <NavLink to="/signup">Create Account</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
    </ul>
</div>
  )
}

export default Navbar