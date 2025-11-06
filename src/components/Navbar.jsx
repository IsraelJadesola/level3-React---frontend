import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
    <nav>
        <h3>Home</h3>
        <ul>
            <li>< Link to="/">Home</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="signin">Signin</Link></li>
            <li><Link to="dashboard">Dashboard</Link></li>
        </ul>
    </nav>
  )
}

export default Navbar