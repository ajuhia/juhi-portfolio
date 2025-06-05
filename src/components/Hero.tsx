
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Business Analytics Graduate | Data × AI Enthusiast | Data Engineer | Backend Developer';

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= fullText.length) {
        setAnimatedText(fullText.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, 50);

    return () => clearInterval(interval);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?ixlib=rb-4.0.3&auto=format&fit=crop&w=2074&q=80"
          alt="Background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900/60 via-slate-800/40 to-slate-900/60"></div>
      </div>

      {/* Enhanced Background Elements */}
      <div className="absolute inset-0 z-5">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-maroon-200/30 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-steel-blue-200/30 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-maroon-300/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-white/90 font-medium mb-6 tracking-wide">Hello there! Welcome to my world</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 font-poppins leading-tight">
              I'm <span className="bg-gradient-to-r from-maroon-400 to-maroon-300 bg-clip-text text-transparent">Juhi Anand</span>
            </h1>
          </div>
          
          <div className="mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-white/90 font-medium font-poppins min-h-[100px] leading-relaxed">
              {animatedText}
              <span className="animate-pulse text-maroon-400">|</span>
            </p>
          </div>
          
          <div className="flex justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-maroon-700 to-maroon-600 hover:from-maroon-800 hover:to-maroon-700 text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-full border-0"
            >
              <Download className="mr-3 h-5 w-5" />
              Resume
            </Button>
          </div>

          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-12 h-12 rounded-full border-2 border-white/30 flex items-center justify-center hover:border-maroon-400 hover:bg-maroon-400/20 transition-all duration-300"
            >
              <ChevronDown className="h-5 w-5 text-white/80" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
