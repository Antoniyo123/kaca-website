import React from 'react';
import '../CSS/TalentPage.css';
import Talent from './Talent';
import TalentCarousel from './TalentCarousel';
// import PersonalProfile from './PersonalProfile';

const TalentPage = () => {
  return (
    <div>
      <section id="hero" className="talent-container">
        <Talent />
        {/* <TalentCarousel /> */}
      </section>
    </div>
  );
};

export default TalentPage;
