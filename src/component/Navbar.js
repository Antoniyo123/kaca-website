import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState(null);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    setActiveLink(location.pathname);
    setIsMenuOpen(false);
  }, [location]);

  const handleMenuItemClick = (path) => {
    setActiveLink(path);
    setIsMenuOpen(false);
  };

  const isHomePage = location.pathname === '/';

  return (
    <div className="kaca-landing-page">
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="navbar-content">
          {!isMenuOpen && (
            <Link to="/">
              <img
                src={require('../img/kaca-logo.png')}
                alt="Logo"
                className={`logo-image ${isScrolled ? 'scrolled' : ''} ${isHomePage ? '' : 'other-page'}`}
                style={{ width: isHomePage ? '310px' : '108px' }}
              />
            </Link>
          )}
          <div
            className={`hamburger-menu ${isMenuOpen ? 'open' : ''} ${isScrolled ? 'scrolled' : ''}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="red-color"></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </nav>
      <div className={`menu-overlay ${isMenuOpen ? 'open' : ''}`}>
        <ul className="menu-items">
          <li className={activeLink === '/talent' ? 'active' : ''}>
            <Link to="/talent" onClick={() => handleMenuItemClick('/talent')}>Talents</Link>
          </li>
          <li className={activeLink === '/projects' ? 'active' : ''}>
            <Link to="/deskripsiproject" onClick={() => handleMenuItemClick('/deskripsiproject')}>Projects</Link>
          </li>
          <li className={activeLink === '/articles' ? 'active' : ''}>
            <Link to="/articles" onClick={() => handleMenuItemClick('/articles')}>Articles</Link>
          </li>
          <li className={activeLink === '/contact-us' ? 'active' : ''}>
            <Link to="/contact-us" onClick={() => handleMenuItemClick('/contact-us')}>Contact Us</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;