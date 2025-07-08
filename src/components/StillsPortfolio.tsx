import React, { useState } from 'react';
import { Camera, Calendar, Eye } from 'lucide-react';

interface StillImage {
  id: string;
  title: string;
  description: string;
  image: string;
  date: string;
  category: string;
  location?: string;
}

const stillsData: StillImage[] = [
  {
    id: '1',
    title: 'Behind the Scenes: DAVID ALABA',
    description: 'Intimate still moments captured during the filming of the DAVID ALABA portrait series.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2024',
    category: 'Sports Photography',
    location: 'Munich'
  },
  {
    id: '2',
    title: 'AHU DURAL Studio Session',
    description: 'Candid moments from the artist portrait session, capturing creative energy and artistic expression.',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2024',
    category: 'Artist Portrait',
    location: 'Berlin'
  },
  {
    id: '3',
    title: 'Friendship Moments',
    description: 'Still frames from ODE TO FRIENDSHIP, showcasing the authentic connections between people.',
    image: 'https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2023',
    category: 'Documentary',
    location: 'Various'
  },
  {
    id: '4',
    title: 'NEYMAR JR. Action Shots',
    description: 'Dynamic still photography capturing the intensity and skill of one of football\'s greatest talents.',
    image: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2023',
    category: 'Sports Photography',
    location: 'Paris'
  },
  {
    id: '5',
    title: 'ASH - Character Study',
    description: 'Powerful portrait work from the ASH project, exploring themes of transformation and identity.',
    image: 'https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2023',
    category: 'Character Portrait',
    location: 'Hamburg'
  },
  {
    id: '6',
    title: 'Production Stills',
    description: 'Behind-the-scenes photography from various film projects, documenting the creative process.',
    image: 'https://images.pexels.com/photos/417074/pexels-photo-417074.jpeg?auto=compress&cs=tinysrgb&w=1200',
    date: '2022',
    category: 'Behind the Scenes',
    location: 'Various'
  }
];

const StillsPortfolio = () => {
  const [selectedImage, setSelectedImage] = useState<StillImage | null>(null);

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
            Still Photography
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed px-4 text-editorial animate-fade-in-up animate-delay-200">
            Moments frozen in time. Each photograph tells a story, 
            capturing the essence of light, emotion, and narrative in a single frame.
          </p>
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {stillsData.map((still, index) => (
            <div
              key={still.id}
              className="group cursor-pointer animate-on-mount opacity-0"
              style={{ animationDelay: `${(index + 2) * 100}ms` }}
              onClick={() => setSelectedImage(still)}
            >
              <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-500 ease-out hover:scale-[1.02] sm:hover:scale-105 hover-lift">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={still.image} 
                    alt={still.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 ease-out"
                  />
                  
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400 ease-out" />
                  
                  <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 opacity-0 group-hover:opacity-100 transition-all duration-400 ease-out transform translate-y-2 group-hover:translate-y-0">
                    <div className="flex items-center justify-between text-white">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span className="text-xs sm:text-sm font-mono tracking-technical">{still.date}</span>
                      </div>
                      <Eye className="h-4 w-4 sm:h-5 sm:w-5 text-orange-400 transition-transform duration-300 group-hover:scale-110" />
                    </div>
                  </div>
                </div>
                
                <div className="p-4 sm:p-6">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs sm:text-sm font-medium text-orange-600 bg-orange-100 px-2 sm:px-3 py-1 rounded-full font-mono tracking-technical uppercase">
                      {still.category}
                    </span>
                    {still.location && (
                      <span className="text-xs sm:text-sm text-slate-500 font-mono tracking-technical">
                        {still.location}
                      </span>
                    )}
                  </div>
                  
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors duration-300 line-clamp-2 text-cinematic tracking-cinematic">
                    {still.title}
                  </h3>
                  
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-2 sm:line-clamp-3 text-editorial">
                    {still.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Modal */}
        {selectedImage && (
          <div 
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4 overflow-auto"
            onClick={() => setSelectedImage(null)}
          >
            <div className="max-w-5xl w-full max-h-full relative flex flex-col justify-center">
              <img 
                src={selectedImage.image} 
                alt={selectedImage.title}
                className="max-w-full max-h-[80vh] object-contain rounded-lg mx-auto"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 sm:p-6 rounded-b-lg">
                <div className="text-white">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2 gap-2">
                    <span className="text-xs sm:text-sm font-medium text-orange-400 bg-orange-400/20 px-2 sm:px-3 py-1 rounded-full font-mono tracking-technical uppercase w-fit">
                      {selectedImage.category}
                    </span>
                    <span className="text-xs sm:text-sm font-mono tracking-technical">{selectedImage.date}</span>
                  </div>
                  <h3 className="text-lg sm:text-2xl font-bold mb-2 text-cinematic tracking-cinematic">
                    {selectedImage.title}
                  </h3>
                  <p className="text-sm sm:text-base text-slate-200 text-editorial">
                    {selectedImage.description}
                  </p>
                  {selectedImage.location && (
                    <p className="text-xs sm:text-sm text-slate-300 mt-2 font-mono tracking-technical">
                      📍 {selectedImage.location}
                    </p>
                  )}
                </div>
              </div>
              {/* Close button for mobile */}
              <button 
                className="absolute top-4 right-4 text-white bg-black/50 rounded-full p-2 sm:hidden"
                onClick={() => setSelectedImage(null)}
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default StillsPortfolio;