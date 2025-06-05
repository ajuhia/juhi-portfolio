
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">About Me</h2>
          <div className="w-24 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Profile Photo */}
          <div className="animate-fade-in">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gray-200 rounded-full shadow-lg overflow-hidden border-4 border-white">
                <div className="w-full h-full flex items-center justify-center text-gray-400">
                  <div className="text-center">
                    <div className="text-6xl mb-4">👤</div>
                    <p className="text-lg font-medium">Profile Image</p>
                    <p className="text-sm">Placeholder</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* About Text */}
          <div className="animate-fade-in">
            <div className="space-y-6">
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                Hi Everyone! I'm Juhi Anand, a data engineer and analytics professional passionate about 
                transforming data into intelligent, impactful systems. With a strong foundation in computer 
                science and a deep curiosity for machine learning and cloud-based automation, I thrive at 
                the intersection of engineering and problem-solving.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                I'm currently pursuing my Master's in Business Analytics at the University of Illinois Chicago, 
                constantly experimenting with innovative ways to make data more accessible, insightful, and usable.
              </p>
              
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                When I'm not coding or exploring new technologies, I enjoy giving back through mentorship 
                and community work—helping bridge gaps in opportunity and access through tech.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
