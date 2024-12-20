import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Navbar from './component/Navbar';
import Home from './component/Home';
import DeskripsiProject from './component/DeskripsiProject';
import ProjectDetails from './component/ProjectDetails';
import ContactUs from './component/ContactUs';
import Articles from './component/Articles';
import ArticlesDetail from './component/ArticlesDetail';
import TalentPage from './component/TalentPage';
import ProjectCard from './component/ProjectCard';
import PersonalProfile1 from './component/PersonalProfile1';
import Loading from './component/Loader';
import SplashScreen from './component/SplashScreen';
import './index.css';
import './App.css';
import Talent from './component/Talent';

function App() {
  const [showSplash, setShowSplash] = useState(true);

  if (showSplash) {
    return <SplashScreen onLoadingComplete={() => setShowSplash(false)} />;
  }

  return (
    <Router>
      <AppWithLoading />
    </Router>
  );
}

const AppWithLoading = () => {
  const [loading, setLoading] = useState(false);
  const [showContent, setShowContent] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    setShowContent(false);
    
    const loadingTimer = setTimeout(() => {
      setLoading(false);
      setShowContent(true);
    }, 2000);

    return () => clearTimeout(loadingTimer);
  }, [location]);

  const renderRoute = (Component, props = {}) => (
    showContent ? (
      <div className="animated-page">
        <Component {...props} />
      </div>
    ) : null
  );

  return (
    <div className="App">
            <Navbar />
            {loading && <Loading />}
            <main className={`main-content ${showContent ? 'show' : ''}`}>
                <Routes>
                    <Route path="/" element={renderRoute(Home)} />
                    <Route path="/talent">
                        <Route index element={renderRoute(TalentPage)} />
                        <Route path=":name" element={renderRoute(Talent)} />
                    </Route>
                    <Route path="/deskripsiproject" element={renderRoute(DeskripsiProject)} />
                    <Route path="/project/:id" element={renderRoute(ProjectDetails)} />
                    <Route path="/contact-us" element={renderRoute(ContactUs)} />
                    <Route path="/articles" element={renderRoute(Articles)} />
                    <Route path="/article/:id" element={renderRoute(ArticlesDetail)} />
                    <Route path="/ProjectCard" element={renderRoute(ProjectCard)} />
                </Routes>
            </main>
        </div>
  );
};

export default App;