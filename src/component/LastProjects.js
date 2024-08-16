import React, { useState, useRef, useEffect } from 'react';
import '../CSS/LastProjects.css';

const LastProjects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isAnimating, setIsAnimating] = useState(true);
  const galleryRef = useRef(null);

  const projects = [
    { id: 1, image: 'disney.png', description: 'Disney' },
    { id: 2, image: 'human.png', description: 'lucy in the sky' },
    { id: 3, image: 'movie.png', description: 'Adidas' },
    { id: 4, image: 'movie.png', description: 'Another Project' },
    { id: 5, image: 'bts2.png', description: 'Another Project' },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  useEffect(() => {
    const gallery = galleryRef.current;
    let startX;
    let scrollLeft;

    const handleTouchStart = (e) => {
      startX = e.touches[0].pageX - gallery.offsetLeft;
      scrollLeft = gallery.scrollLeft;
      setIsAnimating(false);
    };

    const handleTouchMove = (e) => {
      if (!startX) return;
      const x = e.touches[0].pageX - gallery.offsetLeft;
      const walk = (x - startX) * 2;
      gallery.scrollLeft = scrollLeft - walk;
    };

    const handleTouchEnd = () => {
      startX = null;
      setTimeout(() => setIsAnimating(true), 5000); // Resume animation after 5 seconds
    };

    const handleScroll = () => {
      setIsAnimating(false);
      clearTimeout(gallery.scrollTimeout);
      gallery.scrollTimeout = setTimeout(() => setIsAnimating(true), 5000);
    };

    gallery.addEventListener('touchstart', handleTouchStart);
    gallery.addEventListener('touchmove', handleTouchMove);
    gallery.addEventListener('touchend', handleTouchEnd);
    gallery.addEventListener('scroll', handleScroll);

    return () => {
      gallery.removeEventListener('touchstart', handleTouchStart);
      gallery.removeEventListener('touchmove', handleTouchMove);
      gallery.removeEventListener('touchend', handleTouchEnd);
      gallery.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="wrapper">
      <h2 className="title">Last Project</h2>
      <div className="content-container" ref={galleryRef}>
        <div className="project-gallery-section">
          <div className={`project-gallery ${isAnimating ? 'animate' : ''}`}>
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`project-card ${hoveredIndex === index ? 'hover' : hoveredIndex !== null && (hoveredIndex === index - 1 || hoveredIndex === index + 1) ? 'shrink' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={handleMouseLeave}
              >
                <img
                  src={require(`../img/projects/${project.image}`)}
                  alt={`Project ${project.id}`}
                  className="project-image"
                />
                <p className="project-description">{project.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProjects;