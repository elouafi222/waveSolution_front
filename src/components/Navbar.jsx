import React from 'react'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <header id="header" className="fixed-top">
    <div className="container d-flex align-items-center">
      <h1 className="logo me-auto"><NavLink to="/">WaveSolution</NavLink></h1>
      <NavLink to="/login" className="appointment-btn scrollto">Login</NavLink>
    </div>
  </header>
  )
}

export default Navbar