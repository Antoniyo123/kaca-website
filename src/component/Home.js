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
  const [isLoading, setIsLoading] = useState(true);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  
  // Tambahkan ref untuk akumulasi scroll
  const scrollAccumulator = useRef(0);
  const SCROLL_THRESHOLD = 100; // Atur threshold sesuai kebutuhan

  const scrollToSection = (index) => {
    if (isTransitioning.current || index === activeSection) return;
    if (index < 0 || index >= sectionRefs.current.length) return;

    isTransitioning.current = true;
    setActiveSection(index);
    
    const scrollOptions = {
      behavior: isSafari ? 'auto' : 'smooth',
      block: 'start',
    };

    if (isSafari) {
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
    
    // Reset scroll accumulator setelah perpindahan section
    scrollAccumulator.current = 0;
    
    setTimeout(() => {
      isTransitioning.current = false;
    }, 1000);
  };

  useEffect(() => {
    document.body.style.overflowX = 'hidden';
    
    const normalizeWheel = (e) => {
      const PIXEL_STEP = 10;
      const LINE_HEIGHT = 40;
      const PAGE_HEIGHT = 800;

      let sY = 0;
      
      if ('deltaY' in e) {
        sY = e.deltaY;
        if (e.deltaMode === 1) sY *= LINE_HEIGHT;
        if (e.deltaMode === 2) sY *= PAGE_HEIGHT;
      }
      
      return sY;
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

      // Normalisasi nilai scroll
      const scrollValue = normalizeWheel(e);
      
      // Akumulasi scroll
      scrollAccumulator.current += scrollValue;

      // Cek apakah scroll sudah mencapai threshold
      if (Math.abs(scrollAccumulator.current) >= SCROLL_THRESHOLD) {
        const direction = scrollAccumulator.current > 0 ? 1 : -1;
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
        
        // Reset accumulator setelah perpindahan
        scrollAccumulator.current = 0;
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

    let touchStartY = 0;
    const TOUCH_THRESHOLD = 50; // Threshold untuk touch events
    
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0].clientY;
    };

    const handleTouchMove = (e) => {
      if (isTransitioning.current) return;
      
      const touchEndY = e.touches[0].clientY;
      const diff = touchStartY - touchEndY;
      
      if (Math.abs(diff) > TOUCH_THRESHOLD) {
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
      document.body.style.overflowX = '';
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
    { Component: NewSection, type: 'scroll', className: 'NewSection dark-section' },
    { Component: LastProjects, type: 'scroll', className: 'lastProjects dark-section' },
    { Component: Footer, type: 'scroll' }
  ];

  return (
<div 
      className={`home ${isSafari ? 'safari' : ''}`} 
      ref={homeRef}
      style={{
        overflowX: 'hidden',
        position: 'relative',
        width: '100vw',
      }}
    >
{sections.map(({ Component, type, className }, index) => (
  <section 
    key={index}
    ref={el => sectionRefs.current[index] = el} 
    className={`
      section 
      ${type === 'scroll' ? 'scrollable-section' : ''}
      ${index === activeSection ? 'active' : ''} 
      ${scrollDirection}
      ${className}
    `}
    style={{
      WebkitOverflowScrolling: 'touch',
      WebkitTransform: 'translate3d(0,0,0)',
      transform: 'translate3d(0,0,0)',
      overflowX: className === 'lastProjects' ? 'visible' : 'hidden' // Allow horizontal scroll for LastProjects
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