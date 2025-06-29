
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

  const handleResumeClick = () => {
    const resumePath = `${import.meta.env.BASE_URL}lovable-uploads/JuhiAnand.pdf`;
    console.log('Attempting to open resume at:', resumePath);
    
    // Try to open the resume
    const link = document.createElement('a');
    link.href = resumePath;
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    
    // Check if the file exists before opening
    fetch(resumePath, { method: 'HEAD' })
      .then(response => {
        console.log('Resume file check:', response.status, response.statusText);
        if (response.ok) {
          link.click();
        } else {
          console.error('Resume file not found at:', resumePath);
          alert('Resume file is currently unavailable. Please try again later.');
        }
      })
      .catch(error => {
        console.error('Error checking resume file:', error);
        // Try to open anyway in case it's a CORS issue
        link.click();
      });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-steel-blue-50 via-slate-50 to-maroon-50 px-4 sm:px-6 lg:px-8">
      {/* Background layers with steel blue and maroon theme */}
      <DynamicGradients />
      <TextureOverlay />
      <BackgroundCircles />
      <ParticleSystem />
      
      <div className="relative z-10 text-center max-w-6xl mx-auto w-full">
        <div className="animate-fade-in">
          {/* Clean, open layout without rectangular container */}
          <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16">
            
            {/* Circular Image Section */}
            <div className="flex-shrink-0 order-1 lg:order-1">
              <div className="relative group">
                <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl shadow-steel-blue-300/30 border-4 border-white/80 backdrop-blur-sm relative">
                  <img 
                    src={`${import.meta.env.BASE_URL}lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png`}
                    alt="Juhi Anand"
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    onError={(e) => {
                      console.error('Image failed to load:', e.currentTarget.src);
                      e.currentTarget.style.display = 'none';
                    }}
                    onLoad={() => {
                      console.log('Image loaded successfully:', `${import.meta.env.BASE_URL}lovable-uploads/ba038dc4-f455-4256-b475-f0116c619339.png`);
                    }}
                  />
                  {/* Subtle hover overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-steel-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
                </div>
                {/* Additional soft shadow ring */}
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-steel-blue-200/20 to-maroon-200/20 blur-2xl -z-10 scale-110 opacity-60"></div>
              </div>
            </div>

            {/* Text Content Section with consistent font styling */}
            <div className="flex-1 order-2 lg:order-2 text-center lg:text-left max-w-2xl">
              <div className="mb-8 lg:mb-10">
                <p className="text-2xl sm:text-3xl lg:text-4xl text-steel-blue-600 font-poppins font-medium mb-6 lg:mb-8 tracking-wide">
                  Hey There!
                </p>
                <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-poppins font-bold text-slate-900 mb-6 lg:mb-8 leading-tight">
                  I'm <span className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 bg-clip-text text-transparent animate-shimmer bg-size-200">Juhi Anand</span>
                </h1>
              </div>
              
              <div className="mb-10 lg:mb-12">
                <p className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-steel-blue-700 font-poppins font-medium min-h-[100px] sm:min-h-[120px] leading-relaxed">
                  {currentRoleText}
                  <span className="animate-pulse text-maroon-500">|</span>
                </p>
              </div>
              
              {/* Centered Resume Button */}
              <div className="flex justify-center">
                <Button 
                  size="lg" 
                  onClick={handleResumeClick}
                  className="bg-gradient-to-r from-steel-blue-700 via-steel-blue-600 to-steel-blue-500 hover:from-steel-blue-800 hover:via-steel-blue-700 hover:to-steel-blue-600 text-white px-10 sm:px-14 py-5 sm:py-6 text-lg sm:text-xl font-poppins font-medium transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl shadow-steel-blue-300/30 hover:shadow-steel-blue-400/40 rounded-full border-0 relative overflow-hidden group"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                  <Download className="mr-3 h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
                  <span className="relative z-10">Check Resume</span>
                </Button>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="animate-bounce mt-12 sm:mt-16">
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
