import React from 'react'
import './stylesheets/Navbar.css'
import { NavLink } from 'react-router-dom'


const Navbar = ({ loggedIn, logoutUser }) => {

  const logout = e => {
    e.preventDefault();
    logoutUser();
  }

const loggedInLinks = () => {
  return(
    <ul>
        <li><NavLink to="/profile">My Profile</NavLink></li>
        <li><NavLink to="/feed">Find My Dog</NavLink></li>
        <li><a href="#" onClick={ logout }>Logout</a></li>
    </ul>
  )
}

const loggedOutLinks = () => {
  return(
    <ul>
        <li>
          <NavLink to="/signup">Create Account</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
    </ul>
  )
}

  return (
<div id="Navbar">
    <NavLink to="/"><img src={require("../components/assets/logo-01.png")} alt="logo" id='logo'/></NavLink>
    { loggedIn ? loggedInLinks() : loggedOutLinks() }
</div>
  )
}

export default Navbar