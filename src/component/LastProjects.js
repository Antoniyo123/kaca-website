import React from 'react';
import '../CSS/LastProjects.css';
import { Link } from 'react-router-dom';

const LastProjects = () => {

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
          <div className="brand-scroller">
            <div className="scrolling-images">
              <img className='lv' src={require('../img/brandimg/lv.png')} alt="Brand 1" />
              <img src={require('../img/brandimg/lazada.png')} alt="Brand 2" />
              <img src={require('../img/brandimg/pepsodent.png')} alt="Brand 3" />
              <img src={require('../img/brandimg/UOB.png')} alt="Brand 4" />
              <img src={require('../img/brandimg/bukalapak.png')} alt="Brand 5" />
            </div>
          </div>
          {/* Project Cards */}
          <div className="project-gallery">
            <div className="project-card-view">
              <img src={require('../img/projects/aqsavivo.png')} alt="Project 1" className="project-card-image" />
              <div className="card-hover">
                <p>Project 1 Description</p>
              </div>
            </div>
            <div className="project-card-view">
              <img src={require('../img/projects/bts2.png')} alt="Project 2" className="-view-image" />
              <div className="card-hover">
                <p>Project 2 Description</p>
              </div>
            </div>
            <div className="project-card-view">
              <img src={require('../img/projects/disney.png')} alt="Project 3" className="project-card-image" />
              <div className="card-hover">
                <p>Project 3 Description</p>
              </div>
            </div>
            <div className="project-card-view">
              <img src={require('../img/talent/aalyah-talent.png')} alt="Project 4" className="project-card-image" />
              <div className="card-hover">
                <p>Project 4 Description</p>
              </div>
            </div>
            <div className="project-card-view">
              <img src={require('../img/talent/rachel-talent.png')} alt="Project 5" className="project-card-image" />
              <div className="card-hover">
                <p>Project 5 Description</p>
              </div>
            </div>
          </div>
          
          {/* Scrolling Brands Section */}
          <div className="brand-scroller">
            <div className="scrolling-images">
              <img className='lv' src={require('../img/brandimg/lv.png')} alt="Brand 1" />
              <img src={require('../img/brandimg/lazada.png')} alt="Brand 2" />
              <img src={require('../img/brandimg/pepsodent.png')} alt="Brand 3" />
              <img src={require('../img/brandimg/UOB.png')} alt="Brand 4" />
              <img src={require('../img/brandimg/bukalapak.png')} alt="Brand 5" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default LastProjects;
