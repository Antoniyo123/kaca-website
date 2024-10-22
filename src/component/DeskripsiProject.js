import React, { useState } from 'react';
import '../CSS/DeskripsiProject.css';
import ProjectCard from './ProjectCard';
import arrowDownIcon from '../img/svg-assets/arrow-down.svg';

const DeskripsiProject = () => {
  const allProjects = [
    { id: 1, title: "Project 1", image: require('../img/projectdetail/project1.png'), description: "Description for Project 1", brand: require('../img/brand/dior.png') },
    { id: 2, title: "Project 2", image: require('../img/projectdetail/project2.png'), description: "Description for Project 2" },
    { id: 3, title: "Project 3", image: require('../img/projectdetail/project3.png'), description: "Description for Project 3" },
    { id: 4, title: "Project 4", image: require('../img/projectdetail/project4.png'), description: "Description for Project 4" },
    { id: 5, title: "Project 5", image: require('../img/projectdetail/project1.png'), description: "Description for Project 5" },
    { id: 6, title: "Project 6", image: require('../img/projectdetail/project6.png'), description: "Description for Project 6" },
    { id: 7, title: "Project 7", image: require('../img/projectdetail/project1.png'), description: "Description for Project 1" },
    { id: 8, title: "Project 8", image: require('../img/projectdetail/project2.png'), description: "Description for Project 2" },
    { id: 9, title: "Project 9", image: require('../img/projectdetail/project3.png'), description: "Description for Project 3" },
    // { id: 4, title: "Project 10", image: require('../img/projectdetail/project4.png'), description: "Description for Project 4" },
    // { id: 5, title: "Project 11", image: require('../img/projectdetail/project1.png'), description: "Description for Project 5" },
    // { id: 6, title: "Project 12", image: require('../img/projectdetail/project6.png'), description: "Description for Project 6" },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 3, allProjects.length));
  };

  return (
    <div className='home-container-project'>
      <div className="project-grid-container">
        <h2>We Work with Global & Indonesia's Leading Brands</h2>
        <div className="project-grid">
          {allProjects.slice(0, visibleProjects).map((project) => (
            <div key={project.id} className={`project-${project.id}`}>
              <ProjectCard 
                id={project.id}
                title={project.title.brand} 
                image={project.image}
                description={project.description} 
              />
            </div>
          ))}
        </div>
        {visibleProjects < allProjects.length && (
          <button className="see-more-btn" onClick={loadMoreProjects}>
            See More
            <img src={arrowDownIcon} alt="Arrow Down" className="see-more-icon" />
          </button>
        )}
      </div>
    </div>
  );
};

export default DeskripsiProject;
