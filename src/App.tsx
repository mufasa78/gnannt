import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FilmPortfolio from './components/FilmPortfolio';
import StillsPortfolio from './components/StillsPortfolio';
import About from './components/About';
import VideoDetail from './components/VideoDetail';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-50">
        <Navigation />
        <Routes>
          <Route path="/" element={<FilmPortfolio />} />
          <Route path="/film" element={<FilmPortfolio />} />
          <Route path="/stills" element={<StillsPortfolio />} />
          <Route path="/about" element={<About />} />
          <Route path="/video/:id" element={<VideoDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;