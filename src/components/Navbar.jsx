import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {/* Spacer to prevent content from going under fixed navbar */}
      <div style={{ height: '70px' }} />
      
      <nav style={{
        backgroundColor: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.85)',
        padding: '1rem 2rem',
        boxShadow: isScrolled ? '0 4px 20px rgba(0,0,0,0.2)' : 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        transition: 'all 0.3s ease-in-out',
        backdropFilter: 'blur(10px)',
        height: '70px',
      }}>
        <Link to="/" style={logoStyle}>
          <h3 style={{
            margin: 0,
            background: 'linear-gradient(45deg, #60A5FA, #34D399)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            fontSize: '2.8rem',
            fontWeight: '800',
            letterSpacing: '-0.5px',
            textShadow: '0 2px 10px rgba(96, 165, 250, 0.2)',
          }}>DevSpace</h3>
        </Link>
        
        <ul style={{
          listStyle: 'none',
          margin: 0,
          padding: 0,
          display: 'flex',
          gap: '2rem',
          alignItems: 'center',
        }}>
          {[
            { path: '/', label: 'Home' },
            { path: '/signup', label: 'Sign Up' },
            { path: '/signin', label: 'Sign In' },
            { path: '/props', label: 'Props' },
            { path: '/dashboard', label: 'Dashboard' },
            { path: '/productUpload', label: 'Product Upload' },
            { path: '/formik', label: 'Formik' },
          ].map((item) => (
            <li key={item.path}>
              <Link 
                to={item.path} 
                style={{
                  ...linkBaseStyle,
                  ...(location.pathname === item.path ? activeLink : inactiveLink)
                }}
              >
                {item.label}
                <span style={linkUnderline} />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}

const logoStyle = {
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
  gap: '0.5rem',
}

const linkBaseStyle = {
  textDecoration: 'none',
  fontSize: '1.4rem',
  padding: '0.8rem 1.4rem',
  position: 'relative',
  transition: 'all 0.3s ease',
  cursor: 'pointer',
  borderRadius: '6px',
  fontWeight: '600',
  letterSpacing: '0.5px',
}

const activeLink = {
  color: '#60A5FA',
  backgroundColor: 'rgba(96, 165, 250, 0.15)',
  textShadow: '0 0 20px rgba(96, 165, 250, 0.3)',
}

const inactiveLink = {
  color: '#E2E8F0',
  '&:hover': {
    backgroundColor: 'rgba(226, 232, 240, 0.1)',
    color: '#60A5FA',
  }
}

const linkUnderline = {
  content: '""',
  position: 'absolute',
  bottom: '0',
  left: '50%',
  width: '0',
  height: '2px',
  backgroundColor: '#60A5FA',
  transition: 'all 0.3s ease',
  transform: 'translateX(-50%)',
  boxShadow: '0 0 10px rgba(96, 165, 250, 0.5)',
}

export default Navbar