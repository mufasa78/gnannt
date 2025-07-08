import React from 'react';
import { Link } from 'react-router-dom';
import { Film, Camera, User, Menu, X } from 'lucide-react';

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  // Close mobile menu when clicking outside
  React.useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const nav = document.querySelector('nav');
      if (nav && !nav.contains(event.target as Node)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  // Close mobile menu on window resize
  React.useEffect(() => {
    const handleResize = () => {
      if (typeof window !== 'undefined' && window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
      }
    };

    if (typeof window !== 'undefined') {
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  return (
    <nav className="bg-slate-900 text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 animate-fade-in-scale">
          <Link to="/" className="flex items-center space-x-3 hover:text-orange-400 transition-all duration-300 hover:scale-105">
            <img
              src="/PG-logo.jpg"
              alt="Philippe Gnannt Logo"
              className="h-8 w-8 rounded-full object-cover border-2 border-transparent hover:border-orange-400 transition-all duration-300"
            />
            <span className="text-lg sm:text-xl font-bold text-cinematic tracking-cinematic">Philippe Gnannt</span>
          </Link>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 animate-slide-in-right">
            <Link 
              to="/film" 
              className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 hover:scale-105 text-transition"
            >
              <Film className="h-4 w-4" />
              <span>Film</span>
            </Link>
            <Link 
              to="/stills" 
              className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 hover:scale-105 text-transition"
            >
              <Camera className="h-4 w-4" />
              <span>Stills</span>
            </Link>
            <Link 
              to="/about" 
              className="flex items-center space-x-1 hover:text-orange-400 transition-all duration-300 hover:scale-105 text-transition"
            >
              <User className="h-4 w-4" />
              <span>About</span>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-md hover:bg-slate-800 transition-all duration-300 hover:scale-105 bg-transition"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-slate-700 animate-fade-in-scale">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link 
                to="/film" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-all duration-300 bg-transition animate-slide-in-left"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Film className="h-4 w-4" />
                <span>Film</span>
              </Link>
              <Link 
                to="/stills" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-all duration-300 bg-transition animate-slide-in-left animate-delay-100"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Camera className="h-4 w-4" />
                <span>Stills</span>
              </Link>
              <Link 
                to="/about" 
                className="flex items-center space-x-2 px-3 py-2 rounded-md hover:bg-slate-800 transition-all duration-300 bg-transition animate-slide-in-left animate-delay-200"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <User className="h-4 w-4" />
                <span>About</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;