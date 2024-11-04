import React, { useState, useEffect, useRef } from 'react';
import '../CSS/KacaLandingPage.css';

const KacaLandingPage = () => {
  const slides = [
    { type: 'video', src: require('../video/SECTION1.mp4') },
    { type: 'video', src: require('../video/SECTION2.mp4') },
    { type: 'video', src: require('../video/SECTION3.mp4') },
    // { type: 'image', src: require('../img/aaliyah.png') },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [sliding, setSliding] = useState(false);
  const videoRefs = useRef(new Array(slides.length));
  const [isVideoLoaded, setIsVideoLoaded] = useState(false);
  
  // Deteksi Safari
  const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);

  useEffect(() => {
    // Preload videos for Safari
    if (isSafari) {
      slides.forEach((slide, index) => {
        if (slide.type === 'video') {
          const video = document.createElement('video'); // Fix here
          video.src = slide.src;
          video.load();
        }
      });
    }
  
    const interval = setInterval(() => {
      nextSlide();
    }, 14000);
  
    return () => clearInterval(interval);
  }, []);
  

  useEffect(() => {
    const handleVideoPlay = async () => {
      if (slides[activeIndex].type === 'video') {
        const videoElement = videoRefs.current[activeIndex];
        
        if (videoElement) {
          try {
            videoElement.currentTime = 0;
            
            // Reset video state
            videoElement.pause();
            videoElement.load();
            
            // Safari-specific setup
            if (isSafari) {
              videoElement.preload = 'auto';
              videoElement.playsinline = true;
              videoElement.setAttribute('webkit-playsinline', 'true');
              videoElement.muted = true;
            }

            // Tunggu video loaded
            await new Promise((resolve) => {
              videoElement.addEventListener('loadedmetadata', resolve, { once: true });
              videoElement.load();
            });

            // Play video dengan error handling
            const playPromise = videoElement.play();
            if (playPromise !== undefined) {
              try {
                await playPromise;
                setIsVideoLoaded(true);
              } catch (error) {
                console.log("Autoplay prevented:", error);
                // Fallback untuk Safari: coba play lagi setelah user interaction
                if (isSafari) {
                  const playOnInteraction = () => {
                    videoElement.play();
                    document.removeEventListener('touchstart', playOnInteraction);
                    document.removeEventListener('click', playOnInteraction);
                  };
                  document.addEventListener('touchstart', playOnInteraction);
                  document.addEventListener('click', playOnInteraction);
                }
              }
            }
          } catch (error) {
            console.error("Video playback error:", error);
          }
        }
      }
    };

    handleVideoPlay();
  }, [activeIndex, isSafari]);

  const nextSlide = () => {
    setSliding(true);
    setTimeout(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % slides.length);
      setSliding(false);
    }, 3000);
  };

  const goToSlide = (index) => {
    if (index !== activeIndex) {
      setActiveIndex(index);
    }
  };

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
          webkit-playsinline="true"
          preload="auto"
          controlsList="nodownload"
          onContextMenu={(e) => e.preventDefault()}
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
          }}
        />
      );
    } else {
      return (
        <img 
          key={index}
          src={slide.src} 
          alt={`Slide ${index + 1}`} 
          className={`slide-item ${isActive ? 'active' : ''}`}
        />
      );
    }
  };

  return (
    
    <div className={`home-container ${isSafari ? 'safari' : ''}`}>
      <div className="container">
        <div className="text-content-home">
          <div className="intro-content">
            <h1>
              Your one stop creative solution,
            </h1>
            <h2>
              providing top leading talents and digital marketing needs.
            </h2>
            <p>
              We are a talent management and influencer marketing agency that has set an exemplary standard for delivering astute, sharp-focused, and individualized representation that ensures success at all stages of its collaborators. Our goal is to build solid and lasting relationships between talented people and the creative industries to create impactful stories in this digital age.
            </p>
          </div>
        </div>

        <div className="background-image">
          <div className={`slideshow ${sliding ? 'sliding' : ''}`}>
            {slides.map((slide, index) => renderSlide(slide, index))}
          </div>
          
          {/* <div className="square-indicators">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`square ${index === activeIndex ? 'active' : ''}`}
                onClick={() => goToSlide(index)}
              />
            ))}
          </div> */}
        </div>
      </div>
      <div className="landing-page-background">
        
      </div>
    </div>
  );
};

export default KacaLandingPage;