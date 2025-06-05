
import React from 'react';

const Experience = () => {
  const experiences = [
    {
      title: "Data Engineer",
      company: "VRM Tech",
      period: "Oct 2020 – Apr 2021",
      description: "Migrated legacy ETL pipelines to AWS serverless infrastructure using Glue, Lambda, and Kinesis. Reduced latency from 15 minutes to under 1 minute. Developed Grafana dashboards and built forecasting models for high-frequency energy data.",
      type: "Full-time"
    },
    {
      title: "Data Science Intern",
      company: "VRM Tech",
      period: "Jul 2020 – Sep 2020",
      description: "Explored air quality vs. green infrastructure data, contributing to green asset deployment in urban areas. Built a real-time dashboard system using TimescaleDB, Grafana, and PostgreSQL.",
      type: "Internship"
    },
    {
      title: "Software Developer",
      company: "Amdocs",
      period: "Jun 2014 – Jul 2019",
      description: "Designed and deployed CDR processing automation to reduce backlog by 50%. Led integration of CI/CD pipelines in Agile teams and supported telecom CRM and Order Management systems in production.",
      type: "Full-time"
    }
  ];

  return (
    <section id="experience" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Experience</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon-500 to-steel-blue-500 mx-auto"></div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Timeline line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-300"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative flex items-start animate-fade-in">
                {/* Timeline dot */}
                <div className="absolute left-6 w-4 h-4 bg-steel-blue-600 border-4 border-steel-blue-600 rounded-full"></div>

                {/* Content */}
                <div className="ml-16 bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 w-full border-l-4 border-steel-blue-600">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 font-poppins">{exp.title}</h3>
                      <h4 className="text-lg font-semibold text-maroon-600">{exp.company}</h4>
                    </div>
                    <div className="text-right">
                      <span className="text-sm font-medium text-gray-600">{exp.period}</span>
                      <div className={`text-xs font-medium px-2 py-1 rounded-full mt-1 ${
                        exp.type === 'Internship' 
                          ? 'bg-maroon-600/10 text-maroon-600' 
                          : 'bg-steel-blue-600/10 text-steel-blue-600'
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
