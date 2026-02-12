import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import './navbar.css'

const Navbar = () => (
  <header className="navbar">
    <div className="navbar__inner">
      <Link to="/" className="navbar__logo">DevSpace</Link>

      <nav className="navbar__nav" aria-label="Main navigation">
        <NavLink to="/" end className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Home</NavLink>
        <NavLink to="/signup" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sign Up</NavLink>
        <NavLink to="/signin" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Sign In</NavLink>
        <NavLink to="/dashboard" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Dashboard</NavLink>
        <NavLink to="/props" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Props</NavLink>
        <NavLink to="/productupload" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Product Upload</NavLink>
        <NavLink to="/formik" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>Formik</NavLink>
      </nav>
    </div>
  </header>
)

export default Navbar