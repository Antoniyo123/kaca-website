// import logo from './logo.svg';
import './App.css';
import Navbar from './component/Navbar';
import Home from './component/Home'
import Talent from './component/Talent';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

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
