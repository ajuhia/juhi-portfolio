import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';
import ParticleSystem from './ParticleSystem';
import DynamicGradients from './DynamicGradients';
import TextureOverlay from './TextureOverlay';
import BackgroundCircles from './BackgroundCircles';

const Hero = () => {
  const [currentRoleText, setCurrentRoleText] = useState('');
  const [currentRoleIndex, setCurrentRoleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [isTyping, setIsTyping] = useState(true);

  const roles = [
    'Business Analytics Graduate',
    'Data × AI Enthusiast', 
    'Data Engineer',
    'Backend Developer'
  ];

  useEffect(() => {
    const currentRole = roles[currentRoleIndex];
    let timeoutId: NodeJS.Timeout;

    if (isTyping && !isDeleting) {
      // Typing animation
      if (currentRoleText.length < currentRole.length) {
        timeoutId = setTimeout(() => {
          setCurrentRoleText(currentRole.slice(0, currentRoleText.length + 1));
        }, 100);
      } else {
        // Finished typing, wait then start deleting
        timeoutId = setTimeout(() => {
          setIsDeleting(true);
        }, 2000);
      }
    } else if (isDeleting) {
      // Deleting animation
      if (currentRoleText.length > 0) {
        timeoutId = setTimeout(() => {
          setCurrentRoleText(currentRoleText.slice(0, -1));
        }, 50);
      } else {
        // Finished deleting, move to next role
        setIsDeleting(false);
        setCurrentRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
      }
    }

    return () => clearTimeout(timeoutId);
  }, [currentRoleText, currentRoleIndex, isDeleting, isTyping, roles]);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-warm-beige-50 via-cream-50 to-coffee-brown-50 px-4 sm:px-6 lg:px-8">
      {/* Background layers with warm beige and brown theme */}
      <DynamicGradients />
      <TextureOverlay />
      <BackgroundCircles />
      <ParticleSystem />
      
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          <div className="bg-white/60 backdrop-blur-lg rounded-3xl p-6 sm:p-8 md:p-12 lg:p-16 border border-coffee-brown-200/50 shadow-2xl shadow-coffee-brown-300/20 relative overflow-hidden mx-auto max-w-6xl">
            {/* Enhanced background gradients inside the text box with beige and brown */}
            <div className="absolute inset-0">
              {/* Primary gradient mesh with warm beige and coffee brown */}
              <div className="absolute inset-0 bg-gradient-to-br from-warm-beige-100/50 via-transparent to-coffee-brown-100/50 rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-cream-50/40 to-transparent rounded-3xl"></div>
              <div className="absolute inset-0 bg-gradient-to-bl from-coffee-brown-50/45 via-transparent to-warm-beige-50/35 rounded-3xl"></div>
              
              {/* Enhanced animated floating elements with theme colors */}
              <div className="absolute top-4 left-4 w-20 h-20 sm:w-32 sm:h-32 bg-gradient-to-br from-warm-beige-200/50 via-warm-beige-300/30 to-transparent rounded-full blur-2xl animate-float opacity-70"></div>
              <div className="absolute bottom-4 right-4 w-24 h-24 sm:w-40 sm:h-40 bg-gradient-to-br from-coffee-brown-200/50 via-coffee-brown-300/30 to-transparent rounded-full blur-2xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
              <div className="absolute top-1/3 right-1/4 w-16 h-16 sm:w-24 sm:h-24 bg-gradient-to-br from-cream-300/40 via-cream-400/20 to-transparent rounded-full blur-xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
              <div className="absolute bottom-1/4 left-1/3 w-18 h-18 sm:w-28 sm:h-28 bg-gradient-to-br from-earth-brown-300/40 via-earth-brown-400/20 to-transparent rounded-full blur-2xl animate-float opacity-55" style={{ animationDelay: '3s' }}></div>
              
              {/* Additional mesh overlay for depth */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent rounded-3xl"></div>
            </div>

            <div className="relative z-10">
              {/* Mobile and Desktop Layout */}
              <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
                
                {/* Image Section */}
                <div className="flex-shrink-0 order-1 lg:order-1">
                  <div className="relative group">
                    <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-gradient-to-br from-warm-beige-100 to-coffee-brown-200 rounded-2xl shadow-2xl border-4 border-white/60 overflow-hidden relative">
                      <img 
                        src="/lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png" 
                        alt="Juhi Anand"
                        className="w-full h-full object-cover"
                      />
                      {/* Enhanced hover effect with coffee brown */}
                      <div className="absolute inset-0 bg-gradient-to-t from-coffee-brown-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    </div>
                  </div>
                </div>

                {/* Text Content Section */}
                <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
                  <div className="mb-6 lg:mb-8">
                    <p className="text-xl sm:text-2xl lg:text-3xl text-coffee-brown-600 font-medium mb-4 lg:mb-6 tracking-wide">Hey There!</p>
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-earth-brown-900 mb-4 lg:mb-6 font-poppins leading-tight">
                      I'm <span className="bg-gradient-to-r from-coffee-brown-700 via-coffee-brown-600 to-earth-brown-500 bg-clip-text text-transparent animate-shimmer bg-size-200">Juhi Anand</span>
                    </h1>
                  </div>
                  
                  <div className="mb-8 lg:mb-12">
                    <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-coffee-brown-700 font-medium font-poppins min-h-[80px] sm:min-h-[100px] leading-relaxed">
                      {currentRoleText}
                      <span className="animate-pulse text-warm-beige-500">|</span>
                    </p>
                  </div>
                  
                  <div className="flex justify-center lg:justify-start items-center">
                    <Button 
                      size="lg" 
                      className="bg-gradient-to-r from-coffee-brown-700 via-coffee-brown-600 to-earth-brown-500 hover:from-coffee-brown-800 hover:via-coffee-brown-700 hover:to-earth-brown-600 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl shadow-coffee-brown-300/30 hover:shadow-coffee-brown-400/40 rounded-full border-0 relative overflow-hidden group"
                    >
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                      <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                      <span className="relative z-10">Resume</span>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-bounce mt-6 sm:mt-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-coffee-brown-300/60 bg-white/40 backdrop-blur-sm flex items-center justify-center hover:border-coffee-brown-500 hover:bg-warm-beige-50/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-coffee-brown-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
