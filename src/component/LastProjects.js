import React from 'react';
import '../CSS/LastProjects.css';
import { Link } from 'react-router-dom';

const LastProjects = () => {
  const projects = [
    {
      id: 1,
      image: require('../img/projects/aqsavivo.png'),
      brandName: 'VIVO',
      brandLogo: require('../img/brand/lamer.png'),
      description: 'Additional description for VIVO project, These changes will make the brand logo and name always visible at the bottom of each card. When hovering, the description will appear below them as both the logo and name move up'
    },
    {
      id: 2,
      image: require('../img/projects/bts2.png'),
      brandName: 'BTS',
      brandLogo: require('../img/brand/dior.png'),
      description: 'Additional description for BTS project'
    },
    {
      id: 3,
      image: require('../img/projects/disney.png'),
      brandName: 'DISNEY',
      brandLogo: require('../img/brand/vivo.png'),
      description: 'Additional description for DISNEY project'
    },
    {
      id: 4,
      image: require('../img/projects/human.png'),
      brandName: 'PROJECT 4',
      brandLogo: require('../img/brand/gucci.png'),
      description: 'Additional description for Project 4'
    },
    {
      id: 5,
      image: require('../img/projects/nazlaproject.png'),
      brandName: 'PROJECT 5',
      brandLogo: require('../img/brand/puma.png'),
      description: 'Additional description for Project 5'
    }
  ];

  return (
    <div className="project-content-container">
      <div className="project-section">
        <div className="project-gallery-container">
          <div className="photo-gallery-section">
            <div className="video-hover">
              <p className="title-text-video">WHAT WE HAVE MANAGED</p>
            </div>
            <div className="see-more-button-container">
              <Link to="/deskripsiproject" className="see-more-button">
                See More 
                <span className="arrow-icon">→</span>
              </Link>
            </div>
          </div>
          {/* Project Cards */}
          <div className="project-gallery-scroll">
            {projects.map((project) => (
              <div key={project.id} className="project-card-view">
                <img src={project.image} alt={project.brandName} className="project-card-image" />
                <div className="card-overlay">
                  <div className="card-info">
                    <p className="brand-name">{project.brandName}</p>
                    <img src={project.brandLogo} alt={`${project.brandName} logo`} className="brand-logo" />
                  </div>
                  <div className="card-description">
                    <p>{project.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Scrolling Brands Section */}
          <div className="brand-scroller">
            <div className="scrolling-images">
              <img src={require('../img/brandimg/loreal.png')} alt="Brand 1" />
              <img src={require('../img/brandimg/permata.png')} alt="Brand 2" />
              <img src={require('../img/brandimg/puma.png')} alt="Brand 3" />
              <img src={require('../img/brandimg/samsung.png')} alt="Brand 4" />
              <img src={require('../img/brandimg/jenius.png')} alt="Brand 5" />
              <img src={require('../img/brandimg/danamon.png')} alt="Brand 5" />
              <img src={require('../img/brandimg/netflix.png')} alt="Brand 5" />
              <img src={require('../img/brandimg/vespa.png')} alt="Brand 5" />
              <img src={require('../img/brandimg/suzuki.png')} alt="Brand 5" />
              <img src={require('../img/brandimg/oppo.png')} alt="Brand 5" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LastProjects;