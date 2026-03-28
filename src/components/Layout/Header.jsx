import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu, FiX, FiCompass } from 'react-icons/fi';
import './Header.css';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="header">
      <div className="container">
        <div className="logo">
          <FiCompass className="logo-icon" />
          <h1>SkyLife Travel</h1>
        </div>
        
        <div className="menu-icon" onClick={toggleMenu}>
          {isOpen ? <FiX /> : <FiMenu />}
        </div>
        
        <nav className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <ul>
            <li><Link to="/" onClick={closeMenu}>Home</Link></li>
            <li><Link to="/about" onClick={closeMenu}>About</Link></li>
            <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
            <li><Link to="/tours" onClick={closeMenu}>Tours</Link></li>
            <li><Link to="/heliflight" onClick={closeMenu}>Heliflight</Link></li>
            <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
            <li><Link to="/login" onClick={closeMenu}>Login</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;