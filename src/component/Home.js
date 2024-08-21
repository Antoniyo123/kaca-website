
import React from 'react';
import '../CSS/Home.css';
import NewSection from './NewSection';
// import Activity from './Activity';
// import Bts from'./Bts';
import LastProjects from './LastProjects';
import KacaActivity from './KacaActivity';
import AchievementSection from './AchievementSection';
import KacaLandingPage from './KacaLandingPage';

const Home = () => {
  return (
    <div className="home-container">
      <KacaLandingPage />
      {/* <div className="introduction">
          <p>Your one stop creative solution providing top</p>
          <p>leading talents and digital marketing needs.</p>
      </div>
      <div className="text-introduction">
          <p>We are a talent management and influencer marketing agency that has set an exemplary</p>
          <p>standard for delivering astute, sharp-focused, and individualized representation that</p>
          <p>ensures success at all stages of its collaborators. Our goal is to build solid and lasting</p>
          <p>relationships between talented people and the creative industries to create impactful</p>
          <p>stories in this digital age.</p>
      </div>
      <div className="full-width-photos-container">
  <div className="full-width-photos">
    <div className="photo-container">
      <img src={require('../img/aqsa.png')} alt="Foto 1" />
    </div>
    <div className="photo-container">
      <img src={require('../img/nazla.png')} alt="Foto 2" />
    </div>
    <div className="photo-container">
      <img src={require('../img/agatha.png')} alt="Foto 3" />
    </div>
  </div>

</div> */}

      <div className='section-2'>
        <KacaActivity />
        <AchievementSection/>
      {/* <Activity /> */}
      <NewSection />
      {/* <Bts /> */}
      <LastProjects />

      </div>
    </div>
    
  );
};

export default Home;