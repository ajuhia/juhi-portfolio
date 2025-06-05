
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin } from 'lucide-react';

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

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/2 w-full h-full bg-gradient-to-br from-maroon/5 to-steel-blue/5 rounded-full animate-float"></div>
        <div className="absolute -bottom-1/2 -left-1/2 w-full h-full bg-gradient-to-tr from-steel-blue/5 to-maroon/5 rounded-full animate-float" style={{ animationDelay: '1.5s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        <div className="animate-fade-in">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 font-poppins">
            Hi, I'm <span className="text-maroon">Juhi Anand</span>.
          </h1>
          
          <p className="text-xl sm:text-2xl lg:text-3xl text-steel-blue font-medium mb-8 font-poppins min-h-[80px]">
            {animatedText}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-maroon hover:bg-maroon/90 text-white px-8 py-3 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-lg"
            >
              <Download className="mr-2 h-5 w-5" />
              Download Resume
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
