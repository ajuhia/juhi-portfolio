
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "VRM Tech – Ireland",
      description: "Built AWS serverless pipelines for time-series energy forecasting.",
      period: "Oct 2020 – Apr 2021",
      type: "Full-time"
    },
    {
      title: "Data Science Intern",
      company: "VRM Tech – Ireland",
      description: "Created data dashboards and alerts for environmental metrics.",
      period: "Jul 2020 – Sep 2020",
      type: "Internship"
    },
    {
      title: "Software Developer",
      company: "Amdocs – India",
      description: "Led CI/CD delivery and cluster-level automation for telecom data systems.",
      period: "Jun 2014 – Jul 2019",
      type: "Full-time"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Experience</h2>
          <div className="w-24 h-1 bg-steel-blue mx-auto"></div>
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-steel-blue border-4 border-steel-blue rounded-full"></div>

                {/* Content */}
                <div className="ml-16 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full border-l-4 border-steel-blue">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-poppins">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-maroon">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-600">{exp.period}</span>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full mt-1 ${
                        exp.type === 'Internship' 
                          ? 'bg-maroon/10 text-maroon' 
                          : 'bg-steel-blue/10 text-steel-blue'
                      }`}>
                        {exp.type}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
