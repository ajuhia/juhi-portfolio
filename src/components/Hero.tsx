
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-50 px-4 sm:px-6 lg:px-8">
      {/* Background layers */}
      <BackgroundCircles />
      <DynamicGradients />
      <TextureOverlay />
      <ParticleSystem />
      
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          {/* Content without rectangular box */}
          <div className="relative z-10 max-w-6xl mx-auto">
            {/* Mobile and Desktop Layout */}
            <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-12">
              
              {/* Image Section */}
              <div className="flex-shrink-0 order-1 lg:order-1">
                <div className="relative group">
                  <div className="w-48 h-60 sm:w-56 sm:h-72 md:w-64 md:h-80 lg:w-72 lg:h-96 bg-gradient-to-br from-slate-100 to-slate-200 rounded-2xl shadow-2xl border-4 border-white/50 overflow-hidden relative">
                    <img 
                      src="/lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png" 
                      alt="Juhi Anand"
                      className="w-full h-full object-cover"
                    />
                    {/* Enhanced hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-t from-maroon-500/15 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  </div>
                </div>
              </div>

              {/* Text Content Section */}
              <div className="flex-1 order-2 lg:order-2 text-center lg:text-left">
                <div className="mb-6 lg:mb-8">
                  <p className="text-xl sm:text-2xl lg:text-3xl text-steel-blue-600 font-medium mb-4 lg:mb-6 tracking-wide">Hey There!</p>
                  <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 lg:mb-6 font-poppins leading-tight">
                    I'm <span className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 bg-clip-text text-transparent animate-shimmer bg-size-200">Juhi Anand</span>
                  </h1>
                </div>
                
                <div className="mb-8 lg:mb-12">
                  <p className="text-lg sm:text-xl lg:text-2xl xl:text-3xl text-steel-blue-600 font-medium font-poppins min-h-[80px] sm:min-h-[100px] leading-relaxed">
                    {currentRoleText}
                    <span className="animate-pulse text-steel-blue-500">|</span>
                  </p>
                </div>
                
                <div className="flex justify-center lg:justify-start items-center">
                  <Button 
                    size="lg" 
                    className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 hover:from-maroon-800 hover:via-maroon-700 hover:to-maroon-600 text-white px-8 sm:px-12 py-4 sm:py-5 text-base sm:text-lg font-medium transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl shadow-maroon-300/30 hover:shadow-maroon-400/40 rounded-full border-0 relative overflow-hidden group"
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                    <Download className="mr-2 sm:mr-3 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                    <span className="relative z-10">Resume</span>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-bounce mt-6 sm:mt-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border-2 border-slate-300/60 bg-white/30 backdrop-blur-sm flex items-center justify-center hover:border-maroon-500 hover:bg-maroon-50/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
