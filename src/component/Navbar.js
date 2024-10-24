import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';
import { Link } from 'react-router-dom';
// import ProjectCard from './ProjectCard';

const NavItem = ({ label, isActive, onClick }) => (
  <div className={`nav-item ${isActive ? 'active' : ''}`} onClick={onClick}>
    <span>{label}</span>
  </div>
);

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDarkPage = location.pathname.startsWith('/project/');
  const isTransparentNav = location.pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (label) => {
    setActiveItem(label);
    setIsMenuOpen(false);
  };

  const logoClass = isHomePage
    ? isScrolled
      ? 'navbar-logo navbar-logo-small'
      : 'navbar-logo navbar-logo-large'
    : 'navbar-logo navbar-logo-small';

    return (
      <>
<nav className={`navbar 
      ${isScrolled ? 'scrolled' : ''} 
      ${isHomePage ? 'home' : ''} 
      ${isDarkPage ? 'dark' : ''}`}>
  <div className="navbar-container">
    <div className="navbar-top">
      <div className="navbar-brand">
        <Link to="/">
          <img 
            src={require('../img/kaca-logo.png')} 
            alt="KACA Logo" 
            className={logoClass}
          />
        </Link>
      </div>
    </div>
  </div>
</nav>
<div className="menu-toggle" onClick={toggleMenu}>
  {isMenuOpen ? 'Close' : 'Menu'}
</div>

  
        {/* Navbar Menu */}
        <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
          <Link to="/" onClick={() => handleItemClick('HOME')}>
            <NavItem label="HOME" isActive={activeItem === 'HOME'} />
          </Link>
          <Link to="/talent" onClick={() => handleItemClick('TALENT')}>
            <NavItem label="TALENT" isActive={activeItem === 'TALENT'} />
          </Link>
          <Link to="/deskripsiproject" onClick={() => handleItemClick('PROJECTCARD')}>
            <NavItem label="PROJECTS" isActive={activeItem === 'PROJECTCARD'} /> {/* Sesuaikan isActive dengan 'PROJECTCARD' */}
          </Link>
          <Link to="/articles" onClick={() => handleItemClick('ARTICLES')}>
            <NavItem label="ARTICLES" isActive={activeItem === 'ARTICLES'} />
          </Link>
          <Link to="/contact-us" onClick={() => handleItemClick('CONTACT')}>
            <NavItem label="CONTACT" isActive={activeItem === 'CONTACT'} />
          </Link>
        </div>

      </>
    );
};

export default Navbar;