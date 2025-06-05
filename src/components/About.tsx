
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-24 bg-gradient-to-b from-white to-gray-50/50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.2),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-poppins">About Me</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon to-steel-blue mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Enhanced Profile Photo */}
          <div className="animate-fade-in order-2 lg:order-1">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-maroon/20 to-steel-blue/20 rounded-full blur-3xl transform rotate-6"></div>
              <div className="relative w-96 h-96 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 rounded-full shadow-2xl overflow-hidden border-8 border-white">
                <div className="w-full h-full flex items-center justify-center text-gray-400 bg-gradient-to-br from-white to-gray-100">
                  <div className="text-center">
                    <div className="text-8xl mb-6 opacity-80">👤</div>
                    <p className="text-xl font-semibold text-gray-600">Juhi Anand</p>
                    <p className="text-sm text-gray-500 mt-2">Data Engineer & Analytics Professional</p>
                  </div>
                </div>
              </div>
              {/* Decorative Elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-maroon/20 to-transparent rounded-full"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-steel-blue/20 to-transparent rounded-full"></div>
            </div>
          </div>

          {/* Enhanced About Text */}
          <div className="animate-fade-in order-1 lg:order-2">
            <div className="space-y-8">
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                  Hi Everyone! I'm <span className="font-semibold text-maroon">Juhi Anand</span>, a data engineer and analytics professional passionate about 
                  transforming data into intelligent, impactful systems. With a strong foundation in computer 
                  science and a deep curiosity for machine learning and cloud-based automation, I thrive at 
                  the intersection of engineering and problem-solving.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                  I'm currently pursuing my <span className="font-semibold text-steel-blue">Master's in Business Analytics</span> at the University of Illinois Chicago, 
                  constantly experimenting with innovative ways to make data more accessible, insightful, and usable.
                </p>
              </div>
              
              <div className="bg-white/60 backdrop-blur-sm p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300">
                <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                  When I'm not coding or exploring new technologies, I enjoy giving back through <span className="font-semibold text-maroon">mentorship 
                  and community work</span>—helping bridge gaps in opportunity and access through tech.
                </p>
              </div>

              {/* Stats or Highlights */}
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center p-6 bg-gradient-to-br from-maroon/10 to-maroon/5 rounded-xl">
                  <div className="text-2xl font-bold text-maroon">5+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
                <div className="text-center p-6 bg-gradient-to-br from-steel-blue/10 to-steel-blue/5 rounded-xl">
                  <div className="text-2xl font-bold text-steel-blue">10+</div>
                  <div className="text-sm text-gray-600">Projects Completed</div>
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
