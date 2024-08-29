import React from 'react';
import '../CSS/DeskripsiProject.css';
import ProjectCard from './ProjectCard';

const DeskripsiProject = () => {
  const projects = [
    { id: 1, title: "Project 1", image: require('../img/projectdetail/project1.png'), description: "Description for Project 1" },
    { id: 2, title: "Project 2", image: require('../img/projectdetail/project2.png'), description: "Description for Project 2" },
    { id: 3, title: "Project 3", image: require('../img/projectdetail/project3.png'), description: "Description for Project 3" },
    { id: 4, title: "Project 4", image: require('../img/projectdetail/project4.png'), description: "Description for Project 4" },
    { id: 5, title: "Project 5", image: require('../img/projectdetail/project5.png'), description: "Description for Project 5" },
    { id: 6, title: "Project 6", image: require('../img/projectdetail/project6.png'), description: "Description for Project 6" },
  ];

  return (
    <div className='home-container-project'>
      <div className="project-grid-container">
        <h2>We Work with Global & Indonesia's Leading Brands</h2>
        <div className="project-grid">
          {projects.map((project) => (
            <div key={project.id} className={`project-${project.id}`}>
              <ProjectCard 
                id={project.id}
                title={project.title} 
                image={project.image}
                description={project.description} 
              />
            </div>
          ))}
        </div>
        <button className="see-more-btn">See More ↓</button>
      </div>
    </div>
  );
};

export default DeskripsiProject;