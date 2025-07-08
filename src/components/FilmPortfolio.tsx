import React from 'react';
import VideoCard from './VideoCard';
import { videoData } from '../data/videoData';

const FilmPortfolio = () => {
  React.useEffect(() => {
    // Trigger animations on mount
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in-up');
      }, index * 100);
    });
  }, []);

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 animate-fade-in-up">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-4 sm:mb-6 px-4 text-cinematic tracking-cinematic">
            Bewegtbild Portfolio
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 text-editorial animate-fade-in-up animate-delay-200">
            Discover stories that move. Every frame crafted with passion, 
            every narrative designed to connect and inspire.
          </p>
        </div>

        {/* Video Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {videoData.map((video, index) => (
            <div 
              key={video.id} 
              className="animate-on-mount opacity-0"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FilmPortfolio;