import React, { useState, useRef, useEffect } from 'react';
import '../CSS/Section/KacaActivity.css';
import Liquid from '../img/svg-assets/liquid.svg'; // Import SVG

const KacaActivity = () => {
   const [activeService, setActiveService] = useState(0);
  const liquidRef = useRef(null);

  useEffect(() => {
    if (liquidRef.current) {
      const liquid = liquidRef.current;
      let previousTimestamp = null;

      const animateLiquid = (timestamp) => {
        if (previousTimestamp === null) {
          previousTimestamp = timestamp;
        }

        const deltaTime = timestamp - previousTimestamp;
        previousTimestamp = timestamp;

        const scaleX = 1 + Math.sin(timestamp * 0.001) * 0.04; // Increase the scale factor
        const scaleY = 0.9 + Math.cos(timestamp * 0.001) * 0.04; // Increase the scale factor
        liquid.style.transform = `translateY(${Math.sin(timestamp * 0.0004) * 10}px) scaleX(${scaleX}) scaleY(${scaleY})`;
        liquid.style.opacity = `1`; // Remove the blinking effect
      };

      const animationLoop = () => {
        requestAnimationFrame(animationLoop);
        animateLiquid(performance.now());
      };

      animationLoop();
    }
  }, []);

  const services = [
    {
      title: 'Boost Your Brand Awareness',
      content: 'Advertise your brand to a large audience through our talents\' social media.',
      image: require('../img/bg/ring.png'),
      imageWidth: '135px', // Set the desired width
      imageHeight: '126px', // Set the desired height
      svgWidth: '265px',
      svgHeight: '230px',
    },
    {
      title: 'Connect with Nationwide Influencer & Content Creators',
      content: "We have an extensive network of amazing and reputable content creators throughout Indonesia, which spread all over big cities like Jakarta, Bandung, Yogyakarta, Surabaya, Bali, etc.",
      image: require('../img/kacaActivity/section 2 glass.png'),
      imageWidth: '165px',
      imageHeight: '150px',
      svgWidth: '265px',
      svgHeight: '230px',
    },
    {
      title: 'Massive Increase Your Audience',
      content: "Advertise your brand, campaign, and get more than 100.000 views through our talents social media.",
      image: require('../img/kacaActivity/spiral.png'),
      imageWidth: '165px',
      imageHeight: '150px',
      svgWidth: '265px',
      svgHeight: '230px',
    },
  ];

  return (
    <div className="services-section">
      <div className="background-photo"></div>
      <h1>We Can Help You to</h1>
      <div className="services-container">
        <div className="services-list">
          {services.map((service, index) => (
            <div
              key={index}
              className={`service-item ${activeService === index ? 'active' : ''}`}
              onMouseEnter={() => setActiveService(index)}
            >
              {service.title}
            </div>
          ))}
        </div>
        <div className="service-content">
          <div className="image-wrapper">
            <img
              src={services[activeService].image}
              alt={services[activeService].title}
              className="service-image-main"
              style={{
                width: services[activeService].imageWidth,
                height: services[activeService].imageHeight,
              }}
            />
            <div className="hover-background">
            <img
                src={Liquid}
                alt="Liquid SVG"
                className="service-svg-image"
                ref={liquidRef}
                style={{
                  width: services[activeService].svgWidth,
                  height: services[activeService].svgHeight,
                  filter: 'none', // Remove the white effect
                }}
              />
            </div>
          </div>
          <p>{services[activeService].content}</p>
        </div>
      </div>
    </div>
  );
};

export default KacaActivity;