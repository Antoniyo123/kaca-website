import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import '../CSS/Navbar.css';

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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''}`}>
        <div className="navbar-container">
          <div className="navbar-top">
            <div className="navbar-brand">
              <img 
                src={require('../img/kaca-logo.png')} 
                alt="KACA Logo" 
                className={logoClass}
              />
            </div>
          </div>
        </div>
      </nav>
      <div className="menu-toggle" onClick={toggleMenu}>
        {isMenuOpen ? 'CLOSE' : 'MENU'}
      </div>
      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <NavItem label="HOME" isActive={activeItem === 'HOME'} onClick={() => handleItemClick('HOME')} />
        <NavItem label="TALENT" isActive={activeItem === 'TALENT'} onClick={() => handleItemClick('TALENT')} />
        <NavItem label="PROJECTS" isActive={activeItem === 'PROJECTS'} onClick={() => handleItemClick('PROJECTS')} />
        <NavItem label="ARTICLES" isActive={activeItem === 'ARTICLES'} onClick={() => handleItemClick('ARTICLES')} />
        <NavItem label="CONTACT" isActive={activeItem === 'CONTACT'} onClick={() => handleItemClick('CONTACT')} />
      </div>
    </>
  );
};

export default Navbar;