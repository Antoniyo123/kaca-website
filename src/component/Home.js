import React from 'react';
import '../CSS/Home.css';
import NewSection from './NewSection';
import LastProjects from './LastProjects';
import KacaActivity from './KacaActivity';
import AchievementSection from './AchievementSection';
import KacaLandingPage from './KacaLandingPage';

const Home = () => {
  return (
    <div>
      <section id="hero">
        <KacaLandingPage />
      </section>

      <section id="about" className="section-2">
        <KacaActivity />
        <AchievementSection />
        <NewSection />
        <LastProjects />
      </section>
    </div>
  );
};

export default Home;
