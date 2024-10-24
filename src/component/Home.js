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

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      setScrollDirection(st > lastScrollTop.current ? 'down' : 'up');
      lastScrollTop.current = st <= 0 ? 0 : st;

      // Handle transition between Achievement and New Section
      const achievementSection = sectionRefs.current[2];
      const newSection = sectionRefs.current[3];
      
      if (achievementSection && newSection) {
        const achievementRect = achievementSection.getBoundingClientRect();
        const newSectionRect = newSection.getBoundingClientRect();
        
        if (achievementRect.bottom <= window.innerHeight * 0.5 && 
            newSectionRect.top <= window.innerHeight) {
          document.documentElement.style.scrollSnapType = 'none';
          isTransitioning.current = true;
        } else if (achievementRect.top >= window.innerHeight * 0.5 || 
                   newSectionRect.bottom <= 0) {
          document.documentElement.style.scrollSnapType = 'y proximity';
          isTransitioning.current = false;
        }
      }
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting && !isTransitioning.current) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, {
      threshold: 0.6,
      rootMargin: '-20% 0px'
    });

    sectionRefs.current.forEach((section) => {
      if (section) {
        observer.observe(section);
      }
    });

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
      document.documentElement.style.scrollSnapType = 'y proximity';
    };
  }, []);

  const sections = [
    { Component: KacaLandingPage, type: 'snap' },
    { Component: KacaActivity, type: 'snap' },
    { Component: AchievementSection, type: 'snap' },
    { Component: NewSection, type: 'scroll' },
    { Component: LastProjects, type: 'scroll' },
    { Component: Footer, type: 'scroll' }
  ];

  return (
    <div className='home'>
      {sections.map(({ Component, type }, index) => (
        <section 
          key={index}
          ref={el => sectionRefs.current[index] = el} 
          className={`
            section 
            ${type === 'scroll' ? 'scrollable-section' : ''}
            ${index === activeSection ? 'active' : ''} 
            ${scrollDirection}
            ${index === 2 ? 'achievement-section' : ''}
            ${index === 3 ? 'new-section' : ''}
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