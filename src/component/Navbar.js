import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="kaca-landing-page">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        {!isMenuOpen && (
          <Link to="/">
            <img src={require('../img/kaca-logo.png')} alt="Logo" className={`logo-image ${isScrolled ? 'scrolled' : ''}`} />
          </Link>
        )}
      <div className={`hamburger-menu ${isMenuOpen ? 'open' : ''}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
        <div className="red-color"></div>
        <div></div>
        <div></div>
      </div>
      </nav>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
  <ul className="menu-items">
    <li>
      <Link to="/talent">Talents</Link>
    </li>
    <li>
      <Link to="/projects">Projects</Link>
    </li>
    <li>
      <Link to="/articles">Articles</Link>
    </li>
    <li>
      <Link to="/contact-us">Contact Us</Link>
    </li>
  </ul>
</div>

      {/* <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li>Talents</li>
          <li>Projects</li>
          <li>Articles</li>
          <li>Contact Us</li>
        </ul>
      </div> */}
    </div>
  );
};

export default Navbar;
