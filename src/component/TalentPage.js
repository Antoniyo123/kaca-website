import React from 'react';
import '../CSS/TalentPage.css';
import Talent from './Talent';
// import PersonalProfile from './PersonalProfile';

const TalentPage = () => {
  return (
    <div>
      <section id="hero" className="talent-container">
        <Talent />
      </section>
      {/* <section id="next-page" className='talent-next-description'>
        <PersonalProfile/>
      </section> */}
    </div>
  );
};

export default TalentPage;
