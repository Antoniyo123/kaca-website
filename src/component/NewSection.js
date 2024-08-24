import React, { useRef } from 'react';
import '../CSS/Section/Section.css';

const NewSection = () => {
    const galleryRef = useRef(null);

    const scrollLeft = () => {
        galleryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    return (
        <div className="content-container">
            <div className="new-section">
                {/* Existing Photo Gallery */}
                <div className="photo-gallery-container">
                    <div className="photo-gallery-section">
                        <div className="video-hover">
                            <p className="title-text-video">Our Talents</p>
                        </div>
                        <div className="see-more-button-container">
                            <button className="see-more-button">
                                See More 
                                <span className="arrow-icon">→</span>
                            </button>
                        </div>
                    </div>
                    <div className="photo-gallery">
                        <img src={require('../img/talent/nazla-talent.png')} alt="Photo 1" className="wide-photo-talent" />
                        <img src={require('../img/talent/aqsa-talent.png')} alt="Photo 2" className="wide-photo-talent" />
                        <img src={require('../img/talent/agatha-talent.png')} alt="Photo 3" className="wide-photo-talent" />
                        <img src={require('../img/talent/aalyah-talent.png')} alt="Photo 4" className="wide-photo-talent" />
                        <img src={require('../img/talent/rachel-talent.png')} alt="Photo 5" className="wide-photo-talent" />
                    </div>
                </div>

                {/* New Content */}
                <div className="new-content">
                    <div className="new-content-text">
                        <p>
                            In addition to our exceptional talent pool, we also offer access to the extensive resources of the KACA Network, providing you with a diverse range of talent options to fulfill any needs for your campaign.
                        </p>
                    </div>
                    <div className="horizontal-gallery-wrapper">
                        <div className="horizontal-gallery" ref={galleryRef}>
                            <img src={require('../img/talent/jerome.png')} alt="Photo 6" className="horizontal-photo" />
                            <img src={require('../img/talent/aero.png')} alt="Photo 7" className="horizontal-photo" />
                            <img src={require('../img/talent/artis2.png')} alt="Photo 8" className="horizontal-photo" />
                            <img src={require('../img/talent/artis3.png')} alt="Photo 9" className="horizontal-photo" />
                            <img src={require('../img/talent/randy.png')} alt="Photo 9" className="horizontal-photo" />
                            <img src={require('../img/talent/image.png')} alt="Photo 9" className="horizontal-photo" />
                            <img src={require('../img/talent/jeje.png')} alt="Photo 9" className="horizontal-photo" />
                            <img src={require('../img/talent/jerome.png')} alt="Photo 9" className="horizontal-photo" />
                            <img src={require('../img/talent/randy.png')} alt="Photo 9" className="horizontal-photo" />
                        </div>
                        <div className="gallery-controls">
                        <div className="dots-container">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                        <button className="slider-arrow left-slide" onClick={scrollLeft}>←</button>
                        <button className="slider-arrow right-slide" onClick={scrollRight}>→</button>
                    </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;
