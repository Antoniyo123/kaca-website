import React, { useRef, useState } from 'react';
import '../CSS/Section/Section.css';
import { Link } from 'react-router-dom';
import arrowLeft from '../img/svg-assets/arrow-left.svg';
import arrowRight from '../img/svg-assets/arrow-right.svg';


const NewSection = () => {
    const galleryRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);

    const scrollLeft = () => {
        galleryRef.current.scrollBy({ left: -200, behavior: 'smooth' });
    };

    const scrollRight = () => {
        galleryRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };

    // Event when touch starts
    const handleTouchStart = (e) => {
        setTouchStartX(e.touches[0].clientX);
    };

    // Event when touch moves
    const handleTouchMove = (e) => {
        setTouchEndX(e.touches[0].clientX);
    };

    // Event when touch ends (detect swipe)
    const handleTouchEnd = () => {
        if (touchStartX - touchEndX > 50) {
            // Swiped left
            scrollRight();
        } else if (touchStartX - touchEndX < -50) {
            // Swiped right
            scrollLeft();
        }
    };

    return (
        <div className="content-container">
            <div className="new-section">
                {/* Existing Photo Gallery */}
                <div className="photo-gallery-container">
                    <div className="photo-gallery-section-talent">
                        <div className="video-hover">
                            <p className="title-text-video">Our Talents</p>
                        </div>
                        <div className="see-more-button-container">
                            <Link to="/talent" className="see-more-button">
                                See More 
                            <span className="arrow-icon">
                                <img src={arrowRight} alt="Scroll Right" width={24} height={24} />

                            </span>
                            </Link>
                        </div>
                    </div>
                    <div className="photo-gallery">
                        <img src={require('../img/our-talent/nazla1.png')} alt="Photo 1" className="wide-photo-talent" />
                        <img src={require('../img/our-talent/aaliyah1.png')} alt="Photo 2" className="wide-photo-talent" />
                        <img src={require('../img/our-talent/aqsa1.png')} alt="Photo 3" className="wide-photo-talent" />
                        <img src={require('../img/our-talent/agatha1.png')} alt="Photo 4" className="wide-photo-talent" />
                        <img src={require('../img/our-talent/rachel1.png')} alt="Photo 5" className="wide-photo-talent" />
                    </div>
                </div>

                {/* New Content */}
                <div className="new-content">
                    <div className="new-content-text">
                        <p>
                        In addition to our exceptional talent pool, we also offer access to the extensive resources of the KACA Network talents.
                        </p>
                    </div>
                    <div className="horizontal-gallery-wrapper"
                        onTouchStart={handleTouchStart}
                        onTouchMove={handleTouchMove}
                        onTouchEnd={handleTouchEnd}>
                        <div className="horizontal-gallery" ref={galleryRef}>
                            <img src={require('../img/our-talent/KacaNetwork/rsz_aero.jpg')} alt="Photo 6" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/rsz_angie.jpg')} alt="Photo 7" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/rsz_daffa.jpg')} alt="Photo 8" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/rsz_dindra.jpg')} alt="Photo 9" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/GENU.jpg')} alt="Photo 10" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/JEHIAN.jpg')} alt="Photo 11" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/JEROME.jpg')} alt="Photo 12" className="horizontal-photo" />
                            <img src={require('../img/our-talent/KacaNetwork/JEROME.jpg')} alt="Photo 12" className="horizontal-photo" />
                        </div>
                        <div className="gallery-controls">
    
    <button className="slider-arrow left-slide" onClick={scrollLeft}>
        <img src={arrowLeft} alt="Scroll Left" width={24} height={24} />
    </button>
    <button className="slider-arrow right-slide" onClick={scrollRight}>
        <img src={arrowRight} alt="Scroll Right" width={24} height={24} />
    </button>
</div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default NewSection;
