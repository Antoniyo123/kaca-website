import React, { useState } from 'react';
import '../CSS/Section/KacaActivity.css';
import Liquid from '../img/svg-assets/liquid.svg'; // Import SVG

const KacaActivity = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Boost Your Brand Awareness",
      content: "Advertise your brand to a large audience through our talents' social media.",
      image: require('../img/bg/ring.png'),
    },
    {
      title: "Connect with Nationwide Influencer & Content Creators",
      content: "Description for connecting with influencers...",
      image: require('../img/kacaActivity/round.png'),
    },
    {
      title: "Massive Increase Your Audience",
      content: "Description for increasing your audience...",
      image: require('../img/kacaActivity/spiral.png'),
    }
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
              className="service-image"
            />
            <img 
              src={Liquid} 
              alt="Liquid SVG"
              className="hover-background"
            />
          </div>
          <p>{services[activeService].content}</p>
        </div>
      </div>
    </div>
  );
};

export default KacaActivity;
