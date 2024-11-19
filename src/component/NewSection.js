import React, { useRef, useState } from 'react';
import '../CSS/Section/Section.css';
import { Link, useNavigate } from 'react-router-dom';
import arrowLeft from '../img/svg-assets/arrow-left.svg';
import arrowRight from '../img/svg-assets/arrow-right.svg';

const NewSection = () => {
    const galleryRef = useRef(null);
    const [touchStartX, setTouchStartX] = useState(0);
    const [touchEndX, setTouchEndX] = useState(0);
    const navigate = useNavigate();
    const [currentSlide, setCurrentSlide] = useState(0);
    // const [selectedTalent, setSelectedTalent] = useState(null);

    const handleScroll = () => {
        if (galleryRef.current) {
            const scrollPosition = galleryRef.current.scrollLeft;
            const itemWidth = galleryRef.current.offsetWidth;
            const newSlide = Math.round(scrollPosition / itemWidth);
            setCurrentSlide(newSlide);
        }
    };
    const talents = [
        { name: 'nazla', image: 'NAZLA.png' },
        { name: 'aaliyah', image: 'AALIYAH.png' },
        { name: 'aqsa', image: 'AQSA.png' },
        { name: 'agatha', image: 'AGATHA.png' },
        { name: 'rachel', image: 'RACHEL.png' }
    ];
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

    // Updated to pass the talent name to PersonalProfile1
    const handleTalentClick = (talentName) => {
        navigate(`/talent/${talentName.toLowerCase()}`, { 
            state: { fromGallery: true }
        });
    };


    return (
        <div className="content-container">
            <div className="new-section">
                {/* Main Talents Photo Gallery */}
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
                    <div 
                    className="photo-gallery" 
                    ref={galleryRef}
                    onScroll={handleScroll}
                >
                    {talents.map((talent, index) => (
                        <Link
                            key={talent.name}
                            to={`/talent/${talent.name}`}
                            className="photo-wrapper"
                            state={{ fromGallery: true }}
                        >
                            <img
                                src={require(`../img/our-talent/${talent.image}`)}
                                alt={talent.name}
                                className="wide-photo-talent"
                            />
                        </Link>
                    ))}
                </div>
                </div>

                {/* KACA Network Section */}
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
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/rsz_aero.jpg')} alt="Aero" className="horizontal-photo" />
                            </div>
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/rsz_angie.jpg')} alt="Angie" className="horizontal-photo" />
                            </div>
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/rsz_daffa.jpg')} alt="Daffa" className="horizontal-photo" />
                            </div>
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/rsz_dindra.jpg')} alt="Dindra" className="horizontal-photo" />
                            </div>
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/GENU.jpg')} alt="Genu" className="horizontal-photo" />
                            </div>
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/JEHIAN.jpg')} alt="Jehian" className="horizontal-photo" />
                            </div>
                            <div className="photo-wrapper">
                                <img src={require('../img/our-talent/KacaNetwork/JEROME.jpg')} alt="Jerome" className="horizontal-photo" />
                            </div>
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