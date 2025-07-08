import React from 'react';
import { Film, Award, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';

const About = () => {
  React.useEffect(() => {
    // Trigger animations on mount
    const elements = document.querySelectorAll('.animate-on-mount');
    elements.forEach((el, index) => {
      setTimeout(() => {
        el.classList.add('animate-fade-in-up');
      }, index * 150);
    });
  }, []);

  const clients = [
    'Arte', 'Google', 'Nike', 'Red Bull', 'BMW', 'Adidas', 'KIA', 
    'Vice Magazine', 'Kaltblut Magazine', '3Sat Kultur', 'ZDF', 
    'Mastercard', 'Coca-Cola', 'Puma', 'McDonald\'s'
  ];

  return (
    <div className="min-h-screen py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero Section */}
        <div className="text-center mb-12 sm:mb-16 animate-on-mount opacity-0">
          <div className="w-32 h-32 sm:w-40 sm:h-40 mx-auto mb-6 sm:mb-8 rounded-full overflow-hidden shadow-2xl transition-transform duration-500 hover:scale-105">
            <img
              src="/philippe-gnannt.jpg"
              alt="Philippe Gnannt"
              className="w-full h-full object-cover"
            />
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-slate-900 mb-4 sm:mb-6 text-cinematic tracking-cinematic animate-on-mount opacity-0">
            Philippe Gnannt
          </h1>
          <p className="text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed text-editorial animate-on-mount opacity-0">
            Film Editor
          </p>
        </div>

        {/* About Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 sm:gap-12 mb-12">
          <div className="lg:col-span-2 animate-on-mount opacity-0">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 mb-6 text-cinematic tracking-cinematic">
              About My Work
            </h2>
            <div className="space-y-4 text-editorial">
              <p className="text-slate-600 leading-relaxed text-lg">
                As a film editor, Philippe's work spans across many platforms – 
                from editing documentaries to creating commercials or portraits. 
                Using film to tell unheard stories of people worth hearing about.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Based in Berlin, Philippe brings together technical expertise and creative vision 
                to craft compelling narratives that resonate with audiences across different 
                platforms and mediums.
              </p>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white rounded-xl p-6 shadow-lg animate-on-mount opacity-0 hover-lift">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-cinematic">
                Specializations
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Film className="h-5 w-5 text-orange-600" />
                  <span className="text-slate-700 text-editorial">Documentary Editing</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Award className="h-5 w-5 text-orange-600" />
                  <span className="text-slate-700 text-editorial">Commercial Production</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Film className="h-5 w-5 text-orange-600" />
                  <span className="text-slate-700 text-editorial">Portrait Films</span>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg animate-on-mount opacity-0 hover-lift">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-cinematic">
                Get In Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-orange-600" />
                  <span className="text-slate-700 text-editorial">Berlin, Germany</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-orange-600" />
                  <a href="mailto:studio@philippegnannt.com" className="text-slate-700 hover:text-orange-600 transition-colors duration-300 text-editorial">
                    studio@philippegnannt.com
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-orange-600" />
                  <a href="tel:+4917340328327" className="text-slate-700 hover:text-orange-600 transition-colors duration-300 text-editorial">
                    +49 173 40 28 327
                  </a>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-lg animate-on-mount opacity-0 hover-lift">
              <h3 className="text-lg font-semibold text-slate-900 mb-4 text-cinematic">
                Follow
              </h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-orange-600" />
                  <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors duration-300 text-editorial">
                    Vimeo
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <ExternalLink className="h-5 w-5 text-orange-600" />
                  <a href="#" className="text-slate-700 hover:text-orange-600 transition-colors duration-300 text-editorial">
                    Instagram
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Selected Clients Section */}
        <div className="bg-slate-900 rounded-2xl p-8 sm:p-12 text-white animate-on-mount opacity-0 hover-lift mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cinematic tracking-cinematic">
            Selected Clients
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3 sm:gap-4 text-slate-200">
            {clients.map((client, index) => (
              <div 
                key={client} 
                className="text-sm sm:text-base text-editorial hover:text-orange-400 transition-colors duration-300 text-center sm:text-left"
                style={{ animationDelay: `${index * 50}ms` }}
              >
                {client}
              </div>
            ))}
          </div>
        </div>

        {/* Philosophy Section */}
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-xl animate-on-mount opacity-0 hover-lift">
          <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-cinematic tracking-cinematic text-slate-900">
            Creative Philosophy
          </h2>
          <blockquote className="text-lg sm:text-xl italic leading-relaxed text-slate-600 text-editorial">
            "Every story deserves to be told with authenticity and care. Through film editing, 
            I craft narratives that give voice to the unheard and celebrate the stories of 
            people worth hearing about. Each cut, each transition serves the greater purpose 
            of connecting audiences with genuine human experiences."
          </blockquote>
          <cite className="block mt-4 text-orange-600 font-mono tracking-technical">
            — Philippe Gnannt
          </cite>
        </div>
      </div>
    </div>
  );
};

export default About;