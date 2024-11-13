import React, { useState } from 'react';
import '../CSS/DeskripsiProject.css';
import ProjectCard from './ProjectCard';
import arrowDownIcon from '../img/svg-assets/arrow-down.svg';

const DeskripsiProject = () => {
  const allProjects = [
    { id: 1, title: "DIOR", image: require('../img/projectdetail/DIOR THUMBNAIL.png'), brand: require('../img/brandimg/vivo.png') },
    { id: 2, title: "SAMSUNG", image: require('../img/projectdetail/SAMSUNG THUMBNAIL.png'), brand: require('../img/brandimg/fibemini.png')  },
    { id: 3, title: "VIVO", image: require('../img/projectdetail/VIVO THUMBNAIL.png'), brand: require('../img/brandimg/lazada.png') },
    { id: 4, title: "Johnie Walker", image: require('../img/projectdetail/JW THUMBNAIL.png'), brand: require('../img/brandimg/jw.png')  },
    { id: 5, title: "FibeMini", image: require('../img/projectdetail/FIBEMINI THUMBNAIL.png'), brand: require('../img/brandimg/stevemadden.png')  },
    { id: 6, title: "Puma", image: require('../img/projectdetail/PUMA THUMBNAIL.png'), brand: require('../img/brandimg/puma.png')  },


    // { id: 4, title: "Project 10", image: require('../img/projectdetail/project4.png'), description: "Description for Project 4" },
    // { id: 5, title: "Project 11", image: require('../img/projectdetail/project1.png'), description: "Description for Project 5" },
    // { id: 6, title: "Project 12", image: require('../img/projectdetail/project6.png'), description: "Description for Project 6" },
  ];

  const otherProjects = [
    { id: 7, title: "LAZADA", image: require('../img/projectdetail/LAZADA THUMBNAIL.png'), brand: require('../img/brandimg/disney.png')  },
    { id: 8, title: "LV", image: require('../img/projectdetail/LV THUMBNAIL.png'), brand: require('../img/brandimg/lv.png')  },
    { id: 9, title: "STEVE MADDEN", image: require('../img/projectdetail/STEVE MADDEN THUMBNAIL.png'), brand: require('../img/brandimg/samsung.png')  },
    { id: 10, title: "MISTSUBISHI", image: require('../img/projectdetail/MITSHUBISHI THUMBNAIL.png'), brand: require('../img/brandimg/dior copy.png')  },
    //     { id: 4},
    // { id: 5 },
  ];

  // const [visibleProjects, setVisibleProjects] = useState(12);

  // const loadMoreProjects = () => {
  //   setVisibleProjects(prevVisible => Math.min(prevVisible + 12, allProjects.length));
  // };

  return (
    <div className='home-container-project'>
      <div className="project-grid-container">
        <h2>We Work with Global & Indonesia's Leading Brands</h2>
        <div className="project-grid">
          {allProjects.slice().map((project) => (
            <div key={project.id} className={`project-${project.id}`}>
              <ProjectCard 
                id={project.id}
                title={project.title} 
                image={project.image}
                // description={project.brand} 
              />
            </div>
          ))}
        </div>
        <div className="project-grid-new">
          {otherProjects.slice().map((project) => (
            <div key={project.id} className={`project-${project.id}`}>
              <ProjectCard 
                id={project.id}
                title={project.title} 
                image={project.image}
                // description={project.brand} 
              />
            </div>
          ))}
        </div>
        
        {/* {visibleProjects < allProjects.length && (
          <button className="see-more-btn" onClick={loadMoreProjects}>
            See More
            <img src={arrowDownIcon} alt="Arrow Down" className="see-more-icon" />
          </button>
        )} */}
      </div>
    </div>
  );
};

export default DeskripsiProject;
