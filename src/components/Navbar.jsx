import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav style={{
      backgroundColor: '#ffffff',
      padding: '1rem 2rem',
      boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
      position: 'sticky',
      top: 0,
      zIndex: 1000,
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
    }}>
      <h3 style={{
        margin: 0,
        color: '#2c3e50',
        fontSize: '1.5rem',
        fontWeight: 'bold',
      }}>Home</h3>
      
      <ul style={{
        listStyle: 'none',
        margin: 0,
        padding: 0,
        display: 'flex',
        gap: '2rem',
      }}>
        <li><Link to="/" style={linkStyle}>Home</Link></li>
        <li><Link to="/signup" style={linkStyle}>Signup</Link></li>
        <li><Link to="signin" style={linkStyle}>Signin</Link></li>
        <li><Link to="dashboard" style={linkStyle}>Dashboard</Link></li>
      </ul>
    </nav>
  )
}

const linkStyle = {
  textDecoration: 'none',
  color: '#34495e',
  fontWeight: '500',
  fontSize: '1rem',
  transition: 'color 0.3s ease',
  padding: '0.5rem 0',
  position: 'relative',
  ':hover': {
    color: '#3498db',
  }
}

export default Navbar