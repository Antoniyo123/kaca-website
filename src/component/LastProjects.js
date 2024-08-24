

import React from 'react';
import '../CSS/LastProjects.css';

const LastProjects = () => {
  const projects = [
    {
      id: 1,
      image: require('../img/projects/aqsavivo.png'),
      description: 'VIVO',
    },
    {
      id: 2,
      image: require('../img/projects/nazlaproject.png'),
      description: 'JOHNY WALKER',
    },
    {
      id: 3,
      image: require('../img/projects/puma.png'),
      description: 'PUMA',
    },
    // Add more projects as needed
  ];

  return (
<div className="project-section">
      <div class="header">
        <h1 class="title">WHAT WE HAVE MANAGED</h1>
        <button class="see-more-btn">See More &rarr;</button>
      </div>

      <div className="project-cards-container">
        <div className="project-cards">
          {projects.map((project) => (
            <div key={project.id} className="project-card">
              <img src={project.image} alt={`Proyek ${project.id}`} />
              <div className="project-description">
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default LastProjects;
