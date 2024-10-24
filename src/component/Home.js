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
  
  // Deteksi browser Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  const scrollToSection = (index) => {
    if (isTransitioning.current || index === activeSection) return;
    if (index < 0 || index >= sectionRefs.current.length) return;

    isTransitioning.current = true;
    setActiveSection(index);
    
    // Optimasi scroll untuk Safari
    const scrollOptions = {
      behavior: isSafari ? 'auto' : 'smooth',
      block: 'start',
    };

    if (isSafari) {
      // Gunakan scrollTo untuk Safari dengan animasi manual
      const targetElement = sectionRefs.current[index];
      const start = window.pageYOffset;
      const target = targetElement.offsetTop;
      const distance = target - start;
      const duration = 1000;
      let startTime = null;

      const animation = currentTime => {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const progress = Math.min(timeElapsed / duration, 1);
        
        // Fungsi easing
        const ease = t => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
        
        window.scrollTo(0, start + distance * ease(progress));

        if (timeElapsed < duration) {
          requestAnimationFrame(animation);
        }
      };

      requestAnimationFrame(animation);
    } else {
      sectionRefs.current[index].scrollIntoView(scrollOptions);
    }
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1000);
  };

  useEffect(() => {
    // Normalisasi scroll untuk Safari
    const normalizeWheel = (e) => {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;

      let sX = 0, sY = 0;
      
      // Normalisasi deltaY
      if ('deltaY' in e) {
        sY = e.deltaY;
        if (e.deltaMode === 1) sY *= LINE_HEIGHT;
        if (e.deltaMode === 2) sY *= PAGE_HEIGHT;
      }
      
      return {
        spinX: sX,
        spinY: sY,
        pixelX: PIXEL_STEP * sX,
        pixelY: PIXEL_STEP * sY
      };
    };

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

      const normalized = normalizeWheel(e);
      const direction = normalized.spinY > 0 ? 1 : -1;
      const currentSection = sectionRefs.current[activeSection];
      
      if (!currentSection) return;

      if (currentSection.classList.contains('scrollable-section')) {
        const { scrollTop, scrollHeight, clientHeight } = currentSection;
        const isAtTop = scrollTop === 0;
        const isAtBottom = Math.ceil(scrollTop + clientHeight) >= scrollHeight;

        if (direction < 0 && isAtTop) {
          scrollToSection(activeSection - 1);
        } else if (direction > 0 && isAtBottom) {
          scrollToSection(activeSection + 1);
        }
      } else {
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

    // Touch events untuk mobile Safari
    let touchStartY = 0;
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isTransitioning.current) return;
      
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > 50) { // threshold
        if (diff > 0) {
          scrollToSection(activeSection + 1);
        } else {
          scrollToSection(activeSection - 1);
        }
        touchStartY = touchEndY;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('touchstart', handleTouchStart);
    window.addEventListener('touchmove', handleTouchMove);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
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
    <div className={`home ${isSafari ? 'safari' : ''}`} ref={homeRef}>
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
          style={{
            WebkitTransform: 'translate3d(0,0,0)', // Safari performance fix
            transform: 'translate3d(0,0,0)',
          }}
        >
          <div className="section-content">
            <Component 
              scrollDirection={scrollDirection} 
              isActive={index === activeSection}
            />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;