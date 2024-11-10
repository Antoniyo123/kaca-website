import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Link } from 'react-router-dom';
import ('../CSS/Navbar.css');

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
  const [isInDarkSection, setIsInDarkSection] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';
  const isProjectDetail = location.pathname.startsWith('/project/');
  const isTalentPage = location.pathname === '/talent';

  useEffect(() => {
    const handleScroll = () => {
      const newIsScrolled = window.scrollY > 50;
      setIsScrolled(newIsScrolled);
      
      const navbarHeight = 80;
      const scrollPosition = window.scrollY + navbarHeight;
      
      let isInDark = false;
      
      if (isHomePage) {
        // Check for dark sections in Home page
        const newSection = document.querySelector('.NewSection');
        const lastProjects = document.querySelector('.lastProjects');
        
        if (newSection || lastProjects) {
          // Check NewSection
          if (newSection) {
            const newSectionRect = newSection.getBoundingClientRect();
            const newSectionTop = newSection.offsetTop;
            const newSectionBottom = newSectionTop + newSectionRect.height;
            if (scrollPosition >= newSectionTop && scrollPosition <= newSectionBottom) {
              isInDark = true;
            }
          }
          
          // Check LastProjects
          if (lastProjects) {
            const projectsRect = lastProjects.getBoundingClientRect();
            const projectsTop = lastProjects.offsetTop;
            const projectsBottom = projectsTop + projectsRect.height;
            if (scrollPosition >= projectsTop && scrollPosition <= projectsBottom) {
              isInDark = true;
            }
          }
        }
      } else if (isTalentPage) {
        // Check for PersonalProfile section in Talent page
        const personalProfile = document.querySelector('.personal-profile-wrapper');
        if (personalProfile) {
          const profileRect = personalProfile.getBoundingClientRect();
          const profileTop = personalProfile.offsetTop;
          const profileBottom = profileTop + profileRect.height;
          
          if (scrollPosition >= profileTop && scrollPosition <= profileBottom) {
            isInDark = true;
          }
        }
      }
      
      setIsInDarkSection(isInDark);
    };

    // Set initial dark section state
    if (isProjectDetail) {
      setIsInDarkSection(true);
    } else if (!isHomePage && !isTalentPage) {
      setIsInDarkSection(false);
    }

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage, isProjectDetail, isTalentPage]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleItemClick = (label) => {
    setActiveItem(label);
    setIsMenuOpen(false);
  };

  const shouldShowGoldLogo = isProjectDetail || isInDarkSection;

  const logoClass = `navbar-logo ${
    isHomePage 
      ? isScrolled 
        ? 'navbar-logo-small' 
        : 'navbar-logo-large'
      : 'navbar-logo-small'
  } ${shouldShowGoldLogo ? 'gold-logo' : ''}`;

  return (
    <>
      <nav className={`navbar ${isScrolled ? 'scrolled' : ''} ${isHomePage ? 'home' : ''} ${shouldShowGoldLogo ? 'in-dark-section' : ''}`}>
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