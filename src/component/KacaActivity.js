import React, { useState } from 'react';
import '../CSS/Section/KacaActivity.css';

const KacaActivity = () => {
  const [activeService, setActiveService] = useState(0);

  const services = [
    {
      title: "Boost Your Brand Awareness",
      content: "Advertise your brand to large audience through our talents social media.",
  image: require('../img/kacaActivity/ring.png')

    },
    {
      title: "Connect with Nationwide Influencer & Content Creators",
      content: "Description for connecting with influencers...",
  image: require('../img/kacaActivity/ring.png')

    },
    {
      title: "Massive Increase Your Audience",
      content: "Description for increasing your audience...",
    image: require('../img/kacaActivity/ring.png')

    }
  ];

  return (
    <div className="services-section">
      <h1>We Can Help You to,</h1>
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
          {/* <p>{services[activeService].content.split(' ').slice(0, services[activeService].content.split(' ').length / 2).join(' ')}</p> */}
          <img src={services[activeService].image} alt={services[activeService].title} />
          <p>{services[activeService].content.split(' ').slice(services[activeService].content.split(' ').length / 2).join(' ')}</p>
        </div>
      </div>
    </div>
  );
};

export default KacaActivity;