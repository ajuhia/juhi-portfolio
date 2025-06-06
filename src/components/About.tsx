
import React from 'react';
import TextureOverlay from './TextureOverlay';
import DynamicGradients from './DynamicGradients';
import ParticleSystem from './ParticleSystem';

const About = () => {
  return (
    <section id="about" className="py-32 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden min-h-screen flex items-center">
      <TextureOverlay />
      <DynamicGradients />
      <ParticleSystem />

      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.15),transparent_60%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.15),transparent_60%)]"></div>
      </div>

      <div className="max-w-8xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10 w-full">
        <div className="text-center mb-24">
          <div className="inline-block">
            <h2 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-slate-900 mb-6 font-poppins tracking-tight">
              About Me
            </h2>
            <div className="w-40 h-1.5 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full shadow-lg"></div>
            <div className="w-24 h-0.5 bg-gradient-to-r from-steel-blue-400 to-maroon-400 mx-auto rounded-full mt-2 opacity-70"></div>
          </div>
        </div>

        <div className="flex justify-center">
          <div className="animate-fade-in max-w-6xl w-full">
            <div className="bg-white/90 backdrop-blur-lg p-12 lg:p-16 rounded-3xl shadow-2xl border border-slate-200/50 hover:shadow-3xl transition-all duration-500 hover:scale-[1.02] relative overflow-hidden">
              {/* Enhanced background pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(162,60,60,0.1)_25%,transparent_25%),linear-gradient(-45deg,rgba(106,155,189,0.1)_25%,transparent_25%),linear-gradient(45deg,transparent_75%,rgba(162,60,60,0.1)_75%),linear-gradient(-45deg,transparent_75%,rgba(106,155,189,0.1)_75%)]" style={{ backgroundSize: '20px 20px', backgroundPosition: '0 0, 0 10px, 10px -10px, -10px 0px' }}></div>
              </div>

              {/* Decorative corner elements */}
              <div className="absolute top-0 left-0 w-20 h-20 bg-gradient-to-br from-maroon-200 to-transparent rounded-br-full opacity-30"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 bg-gradient-to-tl from-steel-blue-200 to-transparent rounded-tl-full opacity-30"></div>

              <div className="relative z-10">
                <p className="text-xl lg:text-2xl text-slate-700 leading-relaxed font-poppins space-y-8">
                  <span className="block">
                    Hi! I'm a tech enthusiast who believes in the power of technology to drive meaningful change and solve real-world problems.
                  </span>
                  
                  <span className="block">
                    My journey into tech has always been guided by curiosity—curiosity about how systems interact, how data can inform better decisions, and how thoughtful design can transform technical solutions into meaningful impact. Whether it's building scalable infrastructure, uncovering insights from complex data, or applying technology to everyday challenges, I find purpose in creating systems that are both intelligent and human-centered.
                  </span>
                  
                  <span className="block">
                    Currently, I'm pursuing my <span className="font-semibold text-steel-blue-600 bg-steel-blue-50 px-3 py-1 rounded-lg">Master's in Business Analytics at the University of Illinois Chicago</span>, where I'm exploring everything from data science and machine learning to cloud technologies and artificial intelligence. Every project I take on is a chance to learn, collaborate, and build something useful.
                  </span>
                  
                  <span className="block">
                    Outside of academics and work, I'm passionate about mentoring and community engagement. I've supported student growth through Mentor-Together and contributed to Corporate Social Responsibility programs—because I believe meaningful innovation starts with empathy and inclusion.
                  </span>
                  
                  <span className="block">
                    Right now, I'm diving deeper into the world of AI—curious, excited, and always learning. If you're passionate about <span className="font-semibold text-maroon-700 bg-maroon-50 px-3 py-1 rounded-lg">analytics, responsible tech, or building tools that make a difference</span>, let's connect. 🚀
                  </span>
                </p>

                {/* Call to action buttons */}
                <div className="flex flex-col sm:flex-row gap-4 mt-12 justify-center">
                  <button className="bg-gradient-to-r from-maroon-600 to-maroon-700 text-white px-8 py-4 rounded-xl font-semibold hover:from-maroon-700 hover:to-maroon-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    View My Projects
                  </button>
                  <button className="bg-gradient-to-r from-steel-blue-500 to-steel-blue-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-steel-blue-600 hover:to-steel-blue-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                    Let's Connect
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
