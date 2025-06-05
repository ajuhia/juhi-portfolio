
import React from 'react';
import { Mail, Linkedin } from 'lucide-react';

const Connect = () => {
  return (
    <section id="connect" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center animate-fade-in">
          <h2 className="text-4xl font-bold text-gray-900 mb-8 font-poppins">Feel Free to Connect with Me</h2>
          
          <div className="max-w-4xl mx-auto space-y-6 mb-12">
            <p className="text-xl text-gray-700 leading-relaxed font-poppins">
              Passionate about solving real-world problems with data pipelines, AI, and intelligent systems.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-poppins">
              Skilled in Python, SQL, R, and cloud-native development with AWS.
            </p>
            <p className="text-xl text-gray-700 leading-relaxed font-poppins">
              I build robust, maintainable backends and analytical frameworks that scale.
            </p>
          </div>

          <div className="flex justify-center space-x-8">
            <a 
              href="mailto:ajuhi31@gmail.com"
              className="w-16 h-16 bg-maroon/10 rounded-full flex items-center justify-center hover:bg-maroon/20 transition-all duration-300 hover:scale-110"
            >
              <Mail className="h-8 w-8 text-maroon" />
            </a>
            <a 
              href="https://linkedin.com/in/juhianand"
              target="_blank"
              rel="noopener noreferrer"
              className="w-16 h-16 bg-steel-blue/10 rounded-full flex items-center justify-center hover:bg-steel-blue/20 transition-all duration-300 hover:scale-110"
            >
              <Linkedin className="h-8 w-8 text-steel-blue" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Connect;
