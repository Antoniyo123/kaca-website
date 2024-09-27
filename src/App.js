
import './index.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeskripsiProject from './component/DeskripsiProject';
import ProjectDetails from './component/ProjectDetails';
import ContactUs from './component/ContactUs';
import Articles from './component/Articles';
import ArticlesDetail from './component/ArticlesDetail';
import TalentPage from './component/TalentPage';
import ProjectCard from './component/ProjectCard';



function App() {
  return (
<Router>
  <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/talent" element={<TalentPage />} />
      <Route path="/deskripsiproject" element={<DeskripsiProject />} />
      <Route path="/project/:id" element={<ProjectDetails />} />
      <Route path="/contact-us" element={<ContactUs />} />
      <Route path="/articles" element={<Articles />} />
      <Route path="/article/:id" element={<ArticlesDetail />} />
      <Route path="/ProjectCard" element={<ProjectCard />} /> {/* Ini adalah route untuk ProjectCard */}
    </Routes>
  </div>
</Router>

    
  );
}

export default App;
