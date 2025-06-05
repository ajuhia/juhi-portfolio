
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
          <div className="w-24 h-1 bg-gradient-to-r from-maroon-900 to-steel-blue-900 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start animate-fade-in">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  edu.status === 'current' ? 'bg-maroon-900 border-maroon-900' : 'bg-steel-blue-900 border-steel-blue-900'
                }`}></div>

                {/* Content */}
                <div className="ml-16 bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full border-l-4 border-maroon-900">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-poppins">{edu.institution}</h3>
                      <h4 className="text-lg font-semibold text-steel-blue-900">{edu.degree}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-600">{edu.period}</span>
                      {edu.status === 'current' && (
                        <div className="text-xs font-medium px-2 py-1 rounded-full mt-1 bg-maroon-900/10 text-maroon-900">
                          Currently Pursuing
                        </div>
                      )}
                    </div>
                  </div>
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
