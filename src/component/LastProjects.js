import React, { useRef, useEffect, useState } from 'react';
import '../CSS/LastProjects.css';
import { Link } from 'react-router-dom';
import arrowRight from '../img/svg-assets/arrow-right.svg';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const LastProjects = () => {
  const scrollContainerRef = useRef(null);
  const [scrollPosition, setScrollPosition] = useState({
    isAtStart: true,
    isAtEnd: false
  });
  const [hoveredProject, setHoveredProject] = useState(null);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleWheel = (e) => {
      if (Math.abs(e.deltaX) > Math.abs(e.deltaY)) {
        e.preventDefault();
        container.scrollLeft += e.deltaX;
        updateScrollPosition();
      }
    };

    const handleTouchStart = (e) => {
      isDown = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    };

    const handleTouchMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
      updateScrollPosition();
    };

    const handleTouchEnd = () => {
      isDown = false;
    };

    const handleScroll = () => {
      updateScrollPosition();
    };

    const updateScrollPosition = () => {
      if (!container) return;
      const isAtStart = container.scrollLeft <= 10;
      const isAtEnd = Math.abs(
        container.scrollWidth - container.clientWidth - container.scrollLeft
      ) <= 10;

      setScrollPosition({ isAtStart, isAtEnd });
    };

    // Add event listeners
    container.addEventListener('wheel', handleWheel, { passive: false });
    container.addEventListener('touchstart', handleTouchStart);
    container.addEventListener('touchmove', handleTouchMove, { passive: false });
    container.addEventListener('touchend', handleTouchEnd);
    container.addEventListener('scroll', handleScroll);

    // Initial check
    updateScrollPosition();

    // Cleanup
    return () => {
      container.removeEventListener('wheel', handleWheel);
      container.removeEventListener('touchstart', handleTouchStart);
      container.removeEventListener('touchmove', handleTouchMove);
      container.removeEventListener('touchend', handleTouchEnd);
      container.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const projects = [
    {
      id: 1,
      image: require('../img/projects/aqsavivo.png'),
      brandName: 'VIVO',
      brandLogo: require('../img/brand/vivo.png'),
      description: 'Additional description for VIVO project, These changes will make the brand logo and name always visible at the bottom of each card. When hovering, the description will appear below them as both the logo and name move up'
    },
    {
      id: 2,
      image: require('../img/fibemini/Rectangle.png'),
      brandName: 'FibeMini',
      brandLogo: require('../img/brandimg/fibemini-removebg-preview.png'),
      description: 'Amidst the electrifying Lazada Fest 12.12 event, Agatha was honored to join forces with For Skin s Sake, while Aaliyah teamed up with Dear Me Beauty for their popular Hypergloss Lip Balm.'
    },
    {
      id: 3,
      image: require('../img/projects/DISNEY HOMEPAGE.jpeg'),
      brandName: 'DISNEY',
      brandLogo: require('../img/brandimg/disney.png'),
      description: "For the launch of the new Disney's movie called 'Cruella'. Nazla is selected to be one of the KOLs for this campaign."
    },
    {
      id: 4,
      image: require('../img/dior/dior1.png'),
      brandName: 'DIOR',
      brandLogo: require('../img/brandimg/dior copy.png'),
      description: "Nazla Alifa embodies the elegance and sophistication synonymous with DIOR, effortlessly reflecting the brand's essence through her unique sense of style and grace"
    },
    {
      id: 5,
      image: require('../img/projects/makeover.png'),
      brandName: 'MAKE OVER',
      brandLogo: require('../img/brandimg/makeover.png'),
      description: "To commemorate Make Over's anniversary, Agatha and Nazla creatively showcase the brand's best-selling products in a distinctive and visually appealing manner."
    }
  ];

  const brandImages = [
    require('../img/brandimg/loreal.png'),
    require('../img/brandimg/permata.png'),
    require('../img/brandimg/puma.png'),
    require('../img/brandimg/samsung.png'),
    require('../img/brandimg/jenius.png'),
    require('../img/brandimg/danamon.png'),
    require('../img/brandimg/netflix.png'),
    require('../img/brandimg/vespa.png'),
    require('../img/brandimg/suzuki.png'),
    require('../img/brandimg/oppo.png'),
    require('../img/brandimg/grab.png'),
    require('../img/brandimg/fibemini-removebg-preview.png'),
    require('../img/brandimg/jw.png'),
    require('../img/brandimg/vespa.png'),
  ];

  const renderNavButtons = () => {
    const { isAtStart, isAtEnd } = scrollPosition;

    return (
      <>
        {(!isAtStart || isAtEnd) && (
          <button 
            className="nav-button prev"
            onClick={() => scrollTo('prev')}
            aria-label="Previous project"
          >
            <ChevronLeft size={32} color="black" className="w-6 h-6" />
          </button>
        )}

        {!isAtEnd && (
          <button 
            className="nav-button next"
            onClick={() => scrollTo('next')}
            aria-label="Next project"
          >
            <ChevronRight size={32} color="black" className="w-6 h-6" />
          </button>
        )}
      </>
    );
  };

  const scrollTo = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = container.offsetWidth;
    const scrollAmount = direction === 'next' ? cardWidth : -cardWidth;

    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  return (
    <div className="project-content-container">
      <div className="project-section">
        <div className="project-gallery-container">
          <div className="photo-gallery-section">
            <div className="video-hover">
              <p className="title-text-video-project">WHAT WE HAVE MANAGED</p>
            </div>
            <div className="see-more-button-project-container">
              <Link to="/deskripsiproject" className="see-more-button-project">
                See More 
                <span className="arrow-icon">
                  <img src={arrowRight} alt="Scroll Right" width={24} height={24} />
                </span>
              </Link>
            </div>
          </div>

          {/* Project Cards dengan horizontal scroll */}
          <div className="carousel-container">
            {renderNavButtons()}

            <div className="project-gallery-wrapper" ref={scrollContainerRef}>
              <div className="project-gallery-scroll">
                {projects.map((project) => (
                  <div
                    key={project.id}
                    className="project-card-view"
                    onMouseEnter={() => setHoveredProject(project.id)}
                    onMouseLeave={() => setHoveredProject(null)}
                  >
                    <img src={project.image} alt={project.brandName} className="project-card-image" />
                    <div className={`card-overlay ${hoveredProject === project.id ? 'show' : ''}`}>
                      <div className="card-info">
                        <p className="brand-name">{project.brandName}</p>
                        {/* <img src={project.brandLogo} alt={project.brandName} className="brand-logo" /> */}
                      </div>
                      <div className="card-description">
                        <p>{project.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Scrolling Brands Section */}
          <div className="brand-scroller">
            <div className="scrolling-images">
              <div className="scrolling-images-group">
                {brandImages.map((image, index) => (
                  <img key={`brand-1-${index}`} src={image} alt={`Brand ${index + 1}`} />
                ))}
              </div>
              <div className="scrolling-images-group">
                {brandImages.map((image, index) => (
                  <img key={`brand-2-${index}`} src={image} alt={`Brand ${index + 1}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProjects;