// import logo from './logo.svg';
import './index.css';
// import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Talent from './component/Talent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
          {/* Tambahkan route lain sesuai kebutuhan */}
        </Routes>
      </div>
      {/* <Home /> */}
    </Router>
    
  );
}

export default App;
