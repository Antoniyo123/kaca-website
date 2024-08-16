import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleServices = () => {
    setIsServicesOpen(!isServicesOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
        <img src={require('../img/kaca-logo.png')} alt="Photo 1" className="logo-nav" />
         
        </Link>
        <div className={`menu-icon ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <ul className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <li className="nav-item">
            <Link to="/" className="nav-link" onClick={toggleMenu}>Home</Link>
          </li>
          <li className="nav-item">
            <Link to="/talent" className="nav-link" onClick={toggleMenu}>Talent</Link>
          </li>
          {/* <li className="nav-item">
            <div className="nav-link services-link" onClick={toggleServices}>
              Services
              <span className={`dropdown-arrow ${isServicesOpen ? 'open' : ''}`}>▼</span>
            </div>
            <ul className={`dropdown-menu ${isServicesOpen ? 'show' : ''}`}>
              <li><Link to="/services/web-development" onClick={() => { toggleMenu(); toggleServices(); }}>Web Development</Link></li>
              <li><Link to="/services/mobile-development" onClick={() => { toggleMenu(); toggleServices(); }}>Mobile Development</Link></li>
              <li><Link to="/services/ui-ux-design" onClick={() => { toggleMenu(); toggleServices(); }}>UI/UX Design</Link></li>
            </ul>
          </li> */}
          <li className="nav-item">
            <Link to="/portfolio" className="nav-link" onClick={toggleMenu}>Portfolio</Link>
          </li>
          <li className="nav-item">
            <Link to="/blog" className="nav-link" onClick={toggleMenu}>Blog</Link>
          </li>
          <li className="nav-item">
            <Link to="/contact" className="nav-link" onClick={toggleMenu}>Contact</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;