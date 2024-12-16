import React, { useState, useEffect, useRef } from 'react';
import '../CSS/KacaLandingPage.css';

const KacaLandingPage = () => {
  const slides = [
    { type: 'video', src: require('../video/SECTION1.mp4') },
    { type: 'video', src: require('../video/SECTION2.mp4') },
    { type: 'video', src: require('../video/SECTION3.mp4') },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const videoRefs = useRef([]);
  const intervalRef = useRef(null);
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const getVideoClass = () => {
    if (windowWidth > 1200) return 'full-width-video';
    if (windowWidth > 768) return 'tablet-video';
    return 'mobile-video';
  };

  const nextSlide = () => {
    if (sliding) return;
    
    setSliding(true);
    setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
    
    // Reset sliding state after animation completes
    setTimeout(() => {
      setSliding(false);
    }, 3000); // Match this with CSS transition duration
  };

  const initializeVideo = async (videoElement, index) => {
    if (!videoElement) return;

    try {
      videoElement.currentTime = 0;
      videoElement.muted = true;
      videoElement.playsInline = true;
      videoElement.preload = 'auto';

      if (isSafari) {
        videoElement.setAttribute('webkit-playsinline', 'true');
      }

      // Only play the active video
      if (index === activeIndex) {
        await videoElement.play();
      } else {
        videoElement.pause();
        videoElement.currentTime = 0;
      }
    } catch (error) {
      console.error(`Error initializing video ${index}:`, error);
    }
  };

  useEffect(() => {
    // Initialize videos when component mounts
    videoRefs.current.forEach((video, index) => {
      if (video) {
        video.load();
        initializeVideo(video, index);
      }
    });

    // Set up the interval for automatic sliding
    intervalRef.current = setInterval(nextSlide, 15000); // 15 seconds interval

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  useEffect(() => {
    // Handle video changes when activeIndex changes
    videoRefs.current.forEach((video, index) => {
      if (!video) return;

      if (index === activeIndex) {
        initializeVideo(video, index);
      } else {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeIndex]);

  const renderSlide = (slide, index) => {
    const isActive = index === activeIndex;
    
    if (slide.type === 'video') {
      return (
        <video
          key={index}
          ref={el => videoRefs.current[index] = el}
          src={slide.src}
          className={`slide-item ${isActive ? 'active' : ''}`}
          muted
          loop
          playsInline
          preload="auto"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
        />
      );
    }
    return null;
  };

  return (
    <div className={`home-container ${isSafari ? 'safari' : ''}`}>
      <div className="container">
        <div className="text-content-home">
          <div className="intro-content">
            <h1>Your one stop creative solution,</h1>
            <h2>providing top leading talents and digital marketing needs.</h2>
            <p>
              We are a talent management and influencer marketing agency that has set an exemplary standard for delivering astute, sharp-focused, and individualized representation that ensures success at all stages of its collaborators. Our goal is to build solid and lasting relationships between talented people and the creative industries to create impactful stories in this digital age.
            </p>
          </div>
        </div>

        <div className="background-image">
        <div className={`slideshow ${sliding ? 'sliding' : ''}`}>
        {slides.map((slide, index) => (
          <video
            key={index}
            ref={el => videoRefs.current[index] = el}
            src={slide.src}
            className={`slide-item ${getVideoClass()} ${index === activeIndex ? 'active' : ''}`}
            // ... other existing props
          />
        ))}
      </div>
        </div>
      </div>
      <div className="landing-page-background"></div>
    </div>
  );
};

export default KacaLandingPage;