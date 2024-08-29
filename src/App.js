// import logo from './logo.svg';
import './index.css';
// import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Talent from './component/Talent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import DeskripsiProject from './component/DeskripsiProject';
import ProjectDetails from './component/ProjectDetails';
import ContactUs from './component/ContactUs';
import Articles from './component/Articles';
import ArticlesDetail from './component/ArticlesDetail';

const sections = [
  { selector: '#hero', bgColor: 'transparent' },
  { selector: '#about', bgColor: '#f0f0f0' },
  { selector: '#services', bgColor: '#e0e0e0' },
  // ... tambahkan section lain sesuai kebutuhan
];

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/talent" element={<Talent />} />
          <Route path="/deskripsiproject" element={<DeskripsiProject />} />
          <Route path="/project/:id" element={<ProjectDetails />} />
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/articles" element={<Articles />} />
          <Route path="/article/:id" element={<ArticlesDetail />} />
        </Routes>
      </div>
      {/* <Home /> */}
    </Router>
    
  );
}

export default App;
