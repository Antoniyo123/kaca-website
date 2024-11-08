import React from 'react';
import '../CSS/LastProjects.css';
import { Link } from 'react-router-dom';
import arrowRight from '../img/svg-assets/arrow-right.svg';


const LastProjects = () => {
  const projects = [
    {
      id: 1,
      image: require('../img/projects/aqsavivo.png'),
      brandName: 'VIVO',
      brandLogo: require('../img/brand/vivo.png'),
      description: 'Additional description for VIVO project, These changes will make the brand logo and name always visible at the bottom of each card. When hovering, the description will appear below them as both the logo and name move up'
    },
    {
      id: 2,
      image: require('../img/fibemini/Rectangle.png'),
      brandName: 'FibeMini',
      brandLogo: require('../img/brandimg/fibemini-removebg-preview.png'),
      description: 'Amidst the electrifying Lazada Fest 12.12 event, Agatha was honored to join forces with For Skin s Sake, while Aaliyah teamed up with Dear Me Beauty for their popular Hypergloss Lip Balm.'
    },
    {
      id: 3,
      image: require('../img/projects/disney1.png'),
      brandName: 'DISNEY',
      brandLogo: require('../img/brandimg/disney.png'),
      description: 'For the launch of the new Disney’s movie called ‘Cruella’. Nazla is selected to be one of the KOLs for this campaign.'
    },
    {
      id: 4,
      image: require('../img/dior/dior1.png'),
      brandName: 'DIOR',
      brandLogo: require('../img/brandimg/dior copy.png'),
      description: 'Nazla Alifa embodies the elegance and sophistication synonymous with DIOR, effortlessly reflecting the brand’s essence through her unique sense of style and grace'
    },
    {
      id: 5,
      image: require('../img/projects/makeover.png'),
      brandName: 'MAKE OVER',
      brandLogo: require('../img/brandimg/makeover.png'),
      description: "To commemorate Make Over's anniversary, Agatha and Nazla creatively showcase the brand's best-selling products in a distinctive and visually appealing manner."
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
                <span className="arrow-icon">
                <img src={arrowRight} alt="Scroll Right" width={24} height={24} />

                </span>
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
                    {/* <img src={project.brandLogo} alt={`${project.brandName} logo`} className="brand-logo" /> */}
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