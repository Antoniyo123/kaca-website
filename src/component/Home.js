import React, { useEffect, useRef, useState } from 'react';
import '../CSS/Home.css';
import NewSection from './NewSection';
import LastProjects from './LastProjects';
import KacaActivity from './KacaActivity';
import AchievementSection from './AchievementSection';
import KacaLandingPage from './KacaLandingPage';
import Footer from './Footer';

const Home = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollTop = useRef(0);
  const isTransitioning = useRef(false);
  const homeRef = useRef(null);

  const scrollToSection = (index) => {
    if (isTransitioning.current || index === activeSection) return;
    if (index < 0 || index >= sectionRefs.current.length) return;

    isTransitioning.current = true;
    setActiveSection(index);
    
    sectionRefs.current[index].scrollIntoView({ behavior: 'smooth' });
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1000);
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (!isTransitioning.current) {
        const st = window.pageYOffset || document.documentElement.scrollTop;
        const newDirection = st > lastScrollTop.current ? 'down' : 'up';
        setScrollDirection(newDirection);
        lastScrollTop.current = st <= 0 ? 0 : st;
      }
    };

    const handleWheel = (e) => {
      e.preventDefault();
      
      if (isTransitioning.current) return;

      const direction = e.deltaY > 0 ? 1 : -1;
      const currentSection = sectionRefs.current[activeSection];
      
      if (!currentSection) return;

      if (currentSection.classList.contains('scrollable-section')) {
        const { scrollTop, scrollHeight, clientHeight } = currentSection;
        const isAtTop = scrollTop === 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        // Hanya pindah section jika di ujung atas/bawah scrollable section
        if (direction < 0 && isAtTop) {
          scrollToSection(activeSection - 1);
        } else if (direction > 0 && isAtBottom) {
          scrollToSection(activeSection + 1);
        }
      } else {
        // Untuk non-scrollable sections, langsung pindah ke section berikutnya/sebelumnya
        scrollToSection(activeSection + direction);
      }
    };

    const handleKeyDown = (e) => {
      if (isTransitioning.current) return;

      if (e.key === 'ArrowUp') {
        e.preventDefault();
        scrollToSection(activeSection - 1);
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        scrollToSection(activeSection + 1);
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [activeSection]);

  const sections = [
    { Component: KacaLandingPage, type: 'snap' },
    { Component: KacaActivity, type: 'snap' },
    { Component: AchievementSection, type: 'snap' },
    { Component: NewSection, type: 'scroll' },
    { Component: LastProjects, type: 'scroll' },
    { Component: Footer, type: 'scroll' }
  ];

  return (
    <div className="home" ref={homeRef}>
      {sections.map(({ Component, type }, index) => (
        <section 
          key={index}
          ref={el => sectionRefs.current[index] = el} 
          className={`
            section 
            ${type === 'scroll' ? 'scrollable-section' : ''}
            ${index === activeSection ? 'active' : ''} 
            ${scrollDirection}
            ${index === 1 ? 'achievement-section' : ''}
            ${index === 2 ? 'new-section' : ''}
          `}
        >
          <div className="section-content">
            <Component scrollDirection={scrollDirection} isActive={index === activeSection} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;