import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { videoData } from '../data/videoData';

const VideoDetail = () => {
  const { id } = useParams<{ id: string }>();
  const [video, setVideo] = useState<any>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const foundVideo = videoData.find(v => v.id === id);
    setVideo(foundVideo);
  }, [id]);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const enterFullscreen = () => {
    if (videoRef.current) {
      if (videoRef.current.requestFullscreen) {
        videoRef.current.requestFullscreen();
      } else if ((videoRef.current as any).webkitRequestFullscreen) {
        (videoRef.current as any).webkitRequestFullscreen();
      } else if ((videoRef.current as any).msRequestFullscreen) {
        (videoRef.current as any).msRequestFullscreen();
      }
    }
  };

  if (!video) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-xl text-slate-600">Video not found</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-900 animate-fade-in-scale">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-8">
        <Link 
          to="/" 
          className="inline-flex items-center space-x-2 text-slate-400 hover:text-white transition-all duration-300 mb-4 sm:mb-8 hover:scale-105 animate-slide-in-left"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Portfolio</span>
        </Link>

        <div className="bg-black rounded-xl sm:rounded-2xl overflow-hidden shadow-2xl animate-fade-in-up animate-delay-200">
          <div className="relative">
            <video
              ref={videoRef}
              src={video.previewVideo}
              className="w-full aspect-video"
              controls={false}
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
              playsInline
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent pointer-events-none" />
            
            <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between text-white">
              <div className="flex items-center space-x-2 sm:space-x-4">
                <button
                  onClick={togglePlay}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                >
                  {isPlaying ? <Pause className="h-5 w-5 sm:h-6 sm:w-6" /> : <Play className="h-5 w-5 sm:h-6 sm:w-6" />}
                </button>
                <button
                  onClick={toggleMute}
                  className="bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
                >
                  {isMuted ? <VolumeX className="h-4 w-4 sm:h-5 sm:w-5" /> : <Volume2 className="h-4 w-4 sm:h-5 sm:w-5" />}
                </button>
              </div>
              
              <button
                onClick={enterFullscreen}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 sm:p-3 transition-all duration-300 hover:scale-110"
              >
                <Maximize className="h-4 w-4 sm:h-5 sm:w-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="mt-4 sm:mt-8 bg-white rounded-xl p-4 sm:p-8 shadow-xl animate-fade-in-up animate-delay-400">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 sm:mb-6 gap-3 sm:gap-0">
            <span className="text-sm font-medium text-orange-600 bg-orange-100 px-4 py-2 rounded-full w-fit font-mono tracking-technical uppercase">
              {video.category}
            </span>
            <span className="text-slate-500 font-mono tracking-technical">{video.date}</span>
          </div>
          
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 text-cinematic tracking-cinematic">
            {video.title}
          </h1>
          
          <p className="text-base sm:text-lg text-slate-600 leading-relaxed mb-6 text-editorial">
            {video.description}
          </p>
          
          <div className="border-t pt-4 sm:pt-6">
            <h3 className="text-lg sm:text-xl font-semibold text-slate-900 mb-3 text-cinematic">Project Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 text-sm">
              <div>
                <span className="font-medium text-slate-700 text-editorial">Duration:</span>
                <span className="ml-2 text-slate-600 font-mono tracking-technical">{video.duration}</span>
              </div>
              <div>
                <span className="font-medium text-slate-700 text-editorial">Category:</span>
                <span className="ml-2 text-slate-600 font-mono tracking-technical">{video.category}</span>
              </div>
              <div>
                <span className="font-medium text-slate-700 text-editorial">Release Date:</span>
                <span className="ml-2 text-slate-600 font-mono tracking-technical">{video.date}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;