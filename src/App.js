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
import Loading from './component/Loader'; // Pastikan path import ini benar
import './index.css';

function App() {
  return (
    <Router>
      <AppWithLoading />
    </Router>
  );
}

const AppWithLoading = () => {
  const [loading, setLoading] = useState(false);  // Set initial state to false
  const location = useLocation();

  useEffect(() => {
    setLoading(true);  // Set loading to true when location changes
    
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, [location]);

  return (
    <div className="App">
      <Navbar />
      {loading && <Loading />} {/* Loading component will show when loading is true */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/talent" element={<TalentPage />} />
        <Route path="/deskripsiproject" element={<DeskripsiProject />} />
        <Route path="/project/:id" element={<ProjectDetails />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/article/:id" element={<ArticlesDetail />} />
        <Route path="/ProjectCard" element={<ProjectCard />} />
      </Routes>
    </div>
  );
};

export default App;