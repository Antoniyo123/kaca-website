import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ('../CSS/Navbar.css');

// Modified NavItem component with image support
const NavItem = ({ label, isActive, onClick, imageSrc }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`nav-item ${isActive ? 'active' : ''} ${isHovered ? 'hovered' : ''}`}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {imageSrc && <img src={imageSrc} alt={label} className="nav-item-image" />}
      <span>{label}</span>
    </div>
  );
};

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('HOME');
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isDarkPage = location.pathname.startsWith('/project/');

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
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''} ${isDarkPage ? 'dark' : ''}`}>
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
      {isMenuOpen ? (
          <img 
            src={require('../img/bg/x-toogle.png')} 
            alt="Close Menu" 
            className="menu-icon close-icon"
          />
        ) : (
          'MENU'
        )}
      </div>

      <div className={`navbar-menu ${isMenuOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => handleItemClick('HOME')}>
          <NavItem 
            label="HOME" 
            imageSrc={require('../img/navbar/ring.png')} 

            isActive={activeItem === 'HOME'} 
          />
        </Link>
        <Link to="/talent" onClick={() => handleItemClick('TALENT')}>
          <NavItem 
            label="TALENT" 
            imageSrc={require('../img/navbar/head.png')} 

            isActive={activeItem === 'TALENT'} 

          />
        </Link>
        <Link to="/deskripsiproject" onClick={() => handleItemClick('PROJECTCARD')}>
          <NavItem 
            label="PROJECTS" 
            imageSrc={require('../img/navbar/butterfly.png')} 

            isActive={activeItem === 'PROJECTCARD'} 

          />
        </Link>
        <Link to="/articles" onClick={() => handleItemClick('ARTICLES')}>
          <NavItem 
            label="ARTICLES" 
            imageSrc={require('../img/navbar/bird.png')} 

            isActive={activeItem === 'ARTICLES'} 
          />
        </Link>
        <Link to="/contact-us" onClick={() => handleItemClick('CONTACT')}>
          <NavItem 
            label="CONTACT" 
            imageSrc={require('../img/navbar/rantai.png')} 
            isActive={activeItem === 'CONTACT'} 
          />
        </Link>
      </div>
    </>
  );
};

export default Navbar;