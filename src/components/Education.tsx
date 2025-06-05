
import React from 'react';

const Education = () => {
  const education = [
    {
      institution: "University of Illinois Chicago, USA",
      degree: "MS in Business Analytics",
      period: "2024–2025",
      status: "current"
    },
    {
      institution: "University College Dublin, Ireland",
      degree: "MSc in Computer Science",
      period: "2019–2020",
      status: "completed"
    },
    {
      institution: "RGPV University, India",
      degree: "Bachelor of Engineering in Computer Science",
      period: "2010–2014",
      status: "completed"
    }
  ];

  return (
    <section id="education" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Education</h2>
          <div className="w-24 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  edu.status === 'current' ? 'bg-maroon border-maroon' : 'bg-steel-blue border-steel-blue'
                }`}></div>

                {/* Content */}
                <div className="ml-16 bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                    <h3 className="text-xl font-bold text-gray-900 font-poppins">{edu.institution}</h3>
                    <span className={`text-sm font-medium px-3 py-1 rounded-full ${
                      edu.status === 'current' 
                        ? 'bg-maroon text-white' 
                        : 'bg-steel-blue text-white'
                    }`}>
                      {edu.period}
                    </span>
                  </div>
                  <p className="text-lg text-gray-700 font-medium">{edu.degree}</p>
                  {edu.status === 'current' && (
                    <p className="text-sm text-maroon font-medium mt-2">Currently Pursuing</p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
