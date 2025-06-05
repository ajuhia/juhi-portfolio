
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Download, Mail, Linkedin, ChevronDown } from 'lucide-react';

const Hero = () => {
  const [animatedText, setAnimatedText] = useState('');
  const fullText = 'Data Engineer | AI Enthusiast | Problem Solver | Tech Innovator';
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
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-slate-50 via-emerald-50/30 to-slate-100">
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-64 h-64 bg-gradient-to-br from-emerald-200/40 to-transparent rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-br from-slate-200/40 to-transparent rounded-full blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-gradient-to-br from-emerald-300/30 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto">
        <div className="animate-fade-in">
          <div className="mb-8">
            <p className="text-lg sm:text-xl text-slate-600 font-medium mb-6 tracking-wide">Hello there! Welcome to my world</p>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 font-poppins leading-tight">
              I'm <span className="bg-gradient-to-r from-emerald-600 to-emerald-500 bg-clip-text text-transparent">Juhi Anand</span>
            </h1>
          </div>
          
          <div className="mb-12">
            <p className="text-xl sm:text-2xl lg:text-3xl text-slate-700 font-medium font-poppins min-h-[100px] leading-relaxed">
              {animatedText}
              <span className="animate-pulse text-emerald-500">|</span>
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-16">
            <Button 
              size="lg" 
              className="bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-700 hover:to-emerald-600 text-white px-10 py-4 text-lg font-medium transition-all duration-300 hover:scale-105 shadow-xl hover:shadow-2xl rounded-full border-0"
            >
              <Download className="mr-3 h-5 w-5" />
              Download Resume
            </Button>
            
            <div className="flex gap-4">
              <a 
                href="mailto:ajuhi31@gmail.com"
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-slate-200"
              >
                <Mail className="h-6 w-6 text-emerald-600" />
              </a>
              <a 
                href="https://linkedin.com/in/juhianand"
                target="_blank"
                rel="noopener noreferrer"
                className="w-14 h-14 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white transition-all duration-300 hover:scale-110 shadow-lg hover:shadow-xl border border-slate-200"
              >
                <Linkedin className="h-6 w-6 text-slate-600" />
              </a>
            </div>
          </div>

          <div className="animate-bounce">
            <button 
              onClick={() => scrollToSection('about')}
              className="w-12 h-12 rounded-full border-2 border-slate-300 flex items-center justify-center hover:border-emerald-500 hover:bg-emerald-50 transition-all duration-300"
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
