import React, { useEffect, useRef, useState } from 'react';
import '../CSS/Home.css';
import NewSection from './NewSection';
import LastProjects from './LastProjects';
import KacaActivity from './KacaActivity';
import AchievementSection from './AchievementSection';
import KacaLandingPage from './KacaLandingPage';

const Home = () => {
  const sectionRefs = useRef([]);
  const [activeSection, setActiveSection] = useState(0);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollTop = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollTop.current = st <= 0 ? 0 : st;
    };

    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionRefs.current.findIndex(ref => ref === entry.target);
          setActiveSection(index);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionRefs.current.forEach((section) => {
      if (section) observer.observe(section);
    });

    window.addEventListener('scroll', handleScroll);

    return () => {
      sectionRefs.current.forEach((section) => {
        if (section) observer.unobserve(section);
      });
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='home'>
      {[KacaLandingPage, KacaActivity, AchievementSection, NewSection, LastProjects].map((Section, index) => (
        <section 
          key={index}
          ref={el => sectionRefs.current[index] = el} 
          className={`section ${index === activeSection ? 'active' : ''} ${scrollDirection}`}
        >
          <div className="section-content">
            <Section scrollDirection={scrollDirection} isActive={index === activeSection} />
          </div>
        </section>
      ))}
    </div>
  );
};

export default Home;