
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Business Analytics Graduate | Data × AI Enthusiast | Data Engineer | Backend Developer';
  const words = fullText.split(' ');

  useEffect(() => {
    let wordIndex = 0;
    const interval = setInterval(() => {
      if (wordIndex < words.length) {
        setAnimatedText(words.slice(0, wordIndex + 1).join(' '));
        wordIndex++;
      } else {
        clearInterval(interval);
      }
    }, 300);

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
      {/* Enhanced Background with Gradient Mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(162,60,60,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(106,155,189,0.08),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(162,60,60,0.06),transparent_50%)]"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-maroon/10 to-transparent rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-gradient-to-br from-steel-blue/10 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-br from-maroon/5 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <div className="animate-fade-in">
          {/* Main Heading with Enhanced Typography */}
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-steel-blue/80 font-medium mb-4 tracking-wide">Welcome to my digital space</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
              Hi, I'm <span className="bg-gradient-to-r from-maroon to-maroon/80 bg-clip-text text-transparent">Juhi Anand</span>.
            </h1>
          </div>
          
          {/* Animated Subtitle with Better Styling */}
          <div className="mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-steel-blue font-medium font-poppins min-h-[100px] leading-relaxed">
              {animatedText}
              <span className="animate-pulse">|</span>
            </p>
          </div>
          
          {/* Enhanced CTA Section */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-maroon to-maroon/90 hover:from-maroon/90 hover:to-maroon text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-full border-0"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <a 
                href="mailto:ajuhi31@gmail.com"
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Mail className="h-6 w-6 text-maroon" />
              </a>
              <a 
                href="https://linkedin.com/in/juhianand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl"
              >
                <Linkedin className="h-6 w-6 text-steel-blue" />
              </a>
            </div>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-12 h-12 rounded-full border-2 border-gray-300 flex items-center justify-center hover:border-maroon transition-colors duration-300"
            >
              <ChevronDown className="h-5 w-5 text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
