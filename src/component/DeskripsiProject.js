import React, { useState } from 'react';
import '../CSS/DeskripsiProject.css';
import ProjectCard from './ProjectCard';
import arrowDownIcon from '../img/svg-assets/arrow-down.svg';

const DeskripsiProject = () => {
  const allProjects = [
    { id: 1, title: "VIVO", image: require('../img/projects/aqsavivo.png'), brand: require('../img/brandimg/vivo.png') },
    { id: 2, title: "Fibemini", image: require('../img/projectdetail/project2.png'), brand: require('../img/brandimg/fibemini.png')  },
    { id: 3, title: "LAZADA", image: require('../img/projectdetail/project3.png'), brand: require('../img/brandimg/lazada.png') },
    { id: 4, title: "Johnie Walker", image: require('../img/projectdetail/project4.png'), brand: require('../img/brandimg/jw.png')  },
    { id: 5, title: "SteveMadden", image: require('../img/projectdetail/project1.png'), brand: require('../img/brandimg/stevemadden.png')  },
    { id: 6, title: "Puma", image: require('../img/projectdetail/project6.png'), brand: require('../img/brandimg/puma.png')  },
    { id: 7, title: "Mitsubishi", image: require('../img/projectdetail/project1.png'), brand: require('../img/brandimg/disney.png')  },
    { id: 8, title: "LV", image: require('../img/projectdetail/project2.png'), brand: require('../img/brandimg/lv.png')  },
    { id: 9, title: "Samsung", image: require('../img/projectdetail/project3.png'), brand: require('../img/brandimg/samsung.png')  },
    { id: 10, title: "DIOR", image: require('../img/projectdetail/project3.png'), brand: require('../img/brandimg/dior copy.png')  },

    // { id: 4, title: "Project 10", image: require('../img/projectdetail/project4.png'), description: "Description for Project 4" },
    // { id: 5, title: "Project 11", image: require('../img/projectdetail/project1.png'), description: "Description for Project 5" },
    // { id: 6, title: "Project 12", image: require('../img/projectdetail/project6.png'), description: "Description for Project 6" },
  ];

  const [visibleProjects, setVisibleProjects] = useState(6);

  const loadMoreProjects = () => {
    setVisibleProjects(prevVisible => Math.min(prevVisible + 12, allProjects.length));
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
                title={project.title} 
                image={project.image}
                description={project.brand} 
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
