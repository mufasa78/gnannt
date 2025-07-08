import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Play, Clock, Calendar } from 'lucide-react';

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  previewVideo: string;
  duration: string;
  date: string;
  category: string;
}

interface VideoCardProps {
  video: Video;
}

const VideoCard: React.FC<VideoCardProps> = ({ video }) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    setIsHovered(true);
    // Only auto-play on larger screens to avoid mobile data issues
    if (videoRef.current && typeof window !== 'undefined' && window.innerWidth >= 768) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && typeof window !== 'undefined' && window.innerWidth >= 768) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleClick = (e: React.MouseEvent) => {
    // Prevent navigation if clicking on mobile to play video
    if (typeof window !== 'undefined' && window.innerWidth < 768 && !isHovered) {
      e.preventDefault();
      setIsHovered(true);
      if (videoRef.current) {
        videoRef.current.play();
      }
    }
  };

  return (
    <Link to={`/video/${video.id}`} className="group" onClick={handleClick}>
      <div 
        className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover-lift"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <div className="relative aspect-video overflow-hidden">
          <img 
            src={video.thumbnail} 
            alt={video.title}
            className={`w-full h-full object-cover transition-all duration-500 ease-out ${
              isHovered ? 'opacity-0' : 'opacity-100'
            }`}
          />
          <video
            ref={videoRef}
            src={video.previewVideo}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ease-out ${
              isHovered ? 'opacity-100' : 'opacity-0'
            }`}
            muted
            loop
            playsInline
            preload="metadata"
          />
          
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent transition-opacity duration-300" />
          
          <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4">
            <div className="flex items-center justify-between text-white">
              <div className="flex items-center space-x-2">
                <Clock className="h-4 w-4" />
                <span className="text-xs sm:text-sm font-mono tracking-technical">{video.duration}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Play className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 transition-transform duration-300 group-hover:scale-110" />
              </div>
            </div>
          </div>
        </div>
        
        <div className="p-4 sm:p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-100 px-2 sm:px-3 py-1 rounded-full font-mono tracking-technical uppercase">
              {video.category}
            </span>
            <div className="flex items-center text-slate-500 text-xs sm:text-sm">
              <Calendar className="h-4 w-4 mr-1" />
              <span className="font-mono tracking-technical">{video.date}</span>
            </div>
          </div>
          
          <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 text-cinematic tracking-cinematic">
            {video.title}
          </h3>
          
          <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 text-editorial">
            {video.description}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default VideoCard;