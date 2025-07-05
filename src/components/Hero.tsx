import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Linkedin, Github } from 'lucide-react';
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
    // Debug: Log the current base URL and paths
    console.log('Current location:', window.location.href);
    console.log('Base URL:', import.meta.env.BASE_URL);
    console.log('Mode:', import.meta.env.MODE);
    
    // Test image path
    const imagePath = `${import.meta.env.BASE_URL}lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png`;
    console.log('Image path:', imagePath);
    
    // Test resume path
    const resumePath = `${import.meta.env.BASE_URL}lovable-uploads/JuhiAnand.pdf`;
    console.log('Resume path:', resumePath);
  }, []);

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

  const handleLinkedInClick = () => {
    window.open('https://www.linkedin.com/in/juhianand/', '_blank', 'noopener,noreferrer');
  };

  const handleGitHubClick = () => {
    window.open('https://github.com/ajuhia', '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-steel-blue-50 via-slate-50 to-maroon-50 px-4 sm:px-6 lg:px-8">
      {/* Background layers with steel blue and maroon theme */}
      <DynamicGradients />
      <TextureOverlay />
      <BackgroundCircles />
      <ParticleSystem />
      
      <div className="relative z-10 text-center max-w-7xl mx-auto w-full">
        <div className="animate-fade-in">
          {/* Mobile and Desktop Layout */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-8 lg:gap-16 xl:gap-20">
            
            {/* Image Section - Rectangular Profile Avatar */}
            <div className="flex-shrink-0 order-1 lg:order-1">
              <div className="relative group">
                {/* Rectangular image container with soft shadow */}
                <div className="w-80 h-96 sm:w-96 sm:h-[450px] md:w-[420px] md:h-[500px] lg:w-80 lg:h-96 xl:w-96 xl:h-[450px] relative">
                  <div className="w-full h-full rounded-2xl bg-gradient-to-br from-steel-blue-100 to-steel-blue-200 shadow-2xl shadow-steel-blue-300/40 overflow-hidden border-4 border-white/80 relative group-hover:shadow-3xl group-hover:shadow-steel-blue-400/50 transition-all duration-500">
                    <img 
                      src={`${import.meta.env.BASE_URL}lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png`}
                      alt="Juhi Anand"
                      className="w-full h-full object-cover object-top"
                      onError={(e) => {
                        console.error('Image failed to load:', e.currentTarget.src);
                        e.currentTarget.style.display = 'none';
                      }}
                      onLoad={() => {
                        console.log('Image loaded successfully:', `${import.meta.env.BASE_URL}lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png`);
                      }}
                    />
                    {/* Enhanced hover effect with steel blue */}
                    <div className="absolute inset-0 bg-gradient-to-t from-steel-blue-500/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl"></div>
                  </div>
                  
                  {/* Additional soft glow effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-steel-blue-200/30 via-maroon-200/20 to-steel-blue-200/30 blur-xl -z-10 opacity-60"></div>
                </div>
              </div>
            </div>

            {/* Text Content Section */}
            <div className="flex-1 order-2 lg:order-2 text-center lg:text-left max-w-2xl">
              <div className="mb-6 lg:mb-8">
                <p className="text-xl sm:text-2xl lg:text-3xl text-steel-blue-600 font-medium mb-4 lg:mb-6 tracking-wide font-poppins">Hey There!</p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-bold text-slate-900 mb-4 lg:mb-6 font-poppins leading-tight">
                  I'm <span className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 bg-clip-text text-transparent animate-shimmer bg-size-200">Juhi Anand</span>
                </h1>
              </div>
              
              <div className="mb-6 lg:mb-8">
                <p className="text-xl sm:text-2xl lg:text-3xl xl:text-3xl text-steel-blue-700 font-medium font-poppins min-h-[80px] sm:min-h-[100px] leading-relaxed">
                  {currentRoleText}
                  <span className="animate-pulse text-maroon-500">|</span>
                </p>
              </div>
              
              <div className="flex justify-center lg:justify-start items-center gap-4">
                <Button 
                  size="lg" 
                  onClick={handleLinkedInClick}
                  className="bg-gradient-to-r from-blue-600 via-blue-500 to-blue-400 hover:from-blue-700 hover:via-blue-600 hover:to-blue-500 text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-medium font-poppins transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl shadow-blue-300/30 hover:shadow-blue-400/40 rounded-full border-0 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Linkedin className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                  <span className="relative z-10">LinkedIn</span>
                </Button>
                
                <Button 
                  size="lg" 
                  onClick={handleGitHubClick}
                  className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-600 hover:from-gray-900 hover:via-gray-800 hover:to-gray-700 text-white px-6 sm:px-8 py-4 sm:py-5 text-base sm:text-lg font-medium font-poppins transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl shadow-gray-300/30 hover:shadow-gray-400/40 rounded-full border-0 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Github className="mr-2 h-4 w-4 sm:h-5 sm:w-5 relative z-10" />
                  <span className="relative z-10">GitHub</span>
                </Button>
              </div>
            </div>
          </div>

          <div className="animate-bounce mt-8 sm:mt-12 lg:mt-16">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-steel-blue-300/60 bg-white/40 backdrop-blur-sm flex items-center justify-center hover:border-steel-blue-500 hover:bg-steel-blue-50/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronDown className="h-5 w-5 sm:h-6 sm:w-6 text-steel-blue-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
