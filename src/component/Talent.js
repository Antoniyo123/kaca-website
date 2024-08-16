import React from 'react';
import '../CSS/Talent.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'; // Import icons from react-icons

const Talent = () => {
    return (
        <div className="talent-container">
            <div className="talent-card-wrapper">
                <div className="talent-card">
                    <div className="photo-and-description">
                        <div className="photo-card">
                            <div className="photo-overlay">
                                <img src={require('../img/talent/talent-1.png')} alt="Talent" className="talent-photo" />
                                <button className="view-more-button left-button">
                                    <FaArrowLeft size={50} color="white" className="arrow-icon" />
                                </button>
                                <button className="view-more-button right-button">
                                    <FaArrowRight size={50} color="white" className="arrow-icon" />
                                </button>
                            </div>
                        </div>
                        <div className="description">
                            <h1>Talent Name</h1>
                            <p>Description about the talent goes here. This text provides more details about the person or item depicted in the photo.</p>
                            <div className="body-details">
                                <p><strong>Height:</strong> 180 cm</p>
                                <p><strong>Weight:</strong> 75 kg</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* New section for talent navigation */}
            <section className="talent-nav-section">
                <nav className="talent-nav">
                    <a href="#talent1" className="nav-link1">Talent 1</a>
                    <a href="#talent2" className="nav-link1">Talent 2</a>
                    <a href="#talent3" className="nav-link1">Talent 3</a>
                    <a href="#talent4" className="nav-link1">Talent 4</a>
                </nav>
            </section>
        </div>
    );
};

export default Talent;
