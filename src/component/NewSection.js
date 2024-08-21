import React from 'react';
import '../CSS/Section/Section.css'

const NewSection = () => {
    return (
        <div className="content-container">
            <div className="new-section">
                {/* <h2>We can bring your ideas to life in ways that</h2>
                <p>Let’s create something extraordinary—with us, where your vision meets our creativity!</p> */}

                <div className="photo-gallery-container">
                    <div className="photo-gallery-section">
                        <div className="video-hover">
                            <p className="title-text-video">Our Talents</p>
                            <p className="underline-text">________</p>
                        </div>
                        <div className="photo-gallery">
                            <img src={require('../img/talent/nazla-talent.png')} alt="Photo 1" className="wide-photo-talent" />
                            <img src={require('../img/talent/rachel-talent.png')} alt="Photo 2" className="wide-photo-talent" />
                            <img src={require('../img/talent/aqsa-talent.png')} alt="Photo 3" className="wide-photo-talent" />
                            <img src={require('../img/talent/agatha-talent.png')} alt="Photo 4" className="wide-photo-talent" />
                            <img src={require('../img/talent/aaliyah-talent.png')} alt="Photo 5" className="wide-photo-talent" />
                        </div>
                    </div>
                    <div className="see-more-button-container">
                        <button className="see-more-button">
                            See More 
                            <span className="arrow-icon">→</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;
