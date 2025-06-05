
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-white to-slate-100">
      {/* Enhanced Mesh Gradient Background */}
      <div className="absolute inset-0">
        {/* Primary gradient mesh */}
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-100/60 via-transparent to-steel-blue-100/60"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-maroon-50/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-steel-blue-50/50 via-transparent to-maroon-50/30"></div>
        
        {/* Animated floating elements with enhanced gradients */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-br from-maroon-200/50 via-maroon-300/30 to-transparent rounded-full blur-3xl animate-float opacity-70"></div>
        <div className="absolute bottom-20 right-10 w-[32rem] h-[32rem] bg-gradient-to-br from-steel-blue-200/50 via-steel-blue-300/30 to-transparent rounded-full blur-3xl animate-float opacity-70" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-gradient-to-br from-maroon-300/40 via-maroon-400/20 to-transparent rounded-full blur-2xl animate-float opacity-60" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-gradient-to-br from-steel-blue-300/35 via-steel-blue-400/20 to-transparent rounded-full blur-3xl animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
        
        {/* Additional mesh overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="bg-gradient-to-br from-white/40 via-white/60 to-white/40 backdrop-blur-lg rounded-3xl p-8 sm:p-12 lg:p-16 border border-white/30 shadow-2xl shadow-maroon-200/20">
            <div className="mb-8">
              <p className="text-lg sm:text-xl text-slate-600 font-medium mb-6 tracking-wide">Hello there! Welcome to my world</p>
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 font-poppins leading-tight">
                I'm <span className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 bg-clip-text text-transparent animate-shimmer bg-size-200">Juhi Anand</span>
              </h1>
            </div>
            
            <div className="mb-12">
              <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-medium font-poppins min-h-[100px] leading-relaxed">
                {animatedText}
                <span className="animate-pulse text-maroon-500">|</span>
              </p>
            </div>
            
            <div className="flex justify-center items-center mb-16">
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 hover:from-maroon-800 hover:via-maroon-700 hover:to-maroon-600 text-white px-12 py-5 text-lg font-medium transition-all duration-500 hover:scale-105 shadow-2xl hover:shadow-3xl shadow-maroon-300/30 hover:shadow-maroon-400/40 rounded-full border-0 relative overflow-hidden group"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
                <Download className="mr-3 h-5 w-5 relative z-10" />
                <span className="relative z-10">Resume</span>
              </Button>
            </div>
          </div>

          <div className="animate-bounce mt-8">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-12 h-12 rounded-full border-2 border-slate-300/60 bg-white/30 backdrop-blur-sm flex items-center justify-center hover:border-maroon-500 hover:bg-maroon-50/50 transition-all duration-300 shadow-lg hover:shadow-xl"
            >
              <ChevronDown className="h-5 w-5 text-slate-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
