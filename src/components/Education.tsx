
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
    <section id="education" className="py-24 bg-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Education</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div key={index} className="relative flex items-start animate-fade-in">
                {/* Timeline dot */}
                <div className={`absolute left-6 w-4 h-4 rounded-full border-4 ${
                  edu.status === 'current' ? 'bg-maroon-700 border-maroon-700' : 'bg-steel-blue-600 border-steel-blue-600'
                }`}></div>

                {/* Content */}
                <div className="ml-16 bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full border-l-4 border-maroon-700">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-poppins">{edu.institution}</h3>
                      <h4 className="text-lg font-semibold text-steel-blue-600">{edu.degree}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-600">{edu.period}</span>
                      {edu.status === 'current' && (
                        <div className="text-xs font-medium px-2 py-1 rounded-full mt-1 bg-maroon-700/10 text-maroon-700">
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
