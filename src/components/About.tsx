
import React from 'react';

const About = () => {
  const skills = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻"
    },
    {
      category: "Data Tools",
      items: ["Apache Airflow", "Hive", "SSIS", "Tableau", "Grafana"],
      icon: "📊"
    },
    {
      category: "Cloud Platforms",
      items: ["AWS (Kinesis, Glue, Lambda, S3, Redshift)", "Docker"],
      icon: "☁️"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "TimescaleDB", "DynamoDB"],
      icon: "🗄️"
    },
    {
      category: "Analytics",
      items: ["NLP", "Time-Series Forecasting", "Regression", "EDA"],
      icon: "🔍"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">About Me</h2>
          <div className="w-24 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* About Text */}
          <div className="animate-fade-in">
            <div className="bg-gray-50 p-8 rounded-2xl shadow-lg">
              <p className="text-lg text-gray-700 leading-relaxed font-poppins">
                I'm currently pursuing my Master's in Business Analytics at the University of Illinois Chicago. 
                I bring over 5 years of experience across software development, data engineering, and cloud-based analytics. 
                My work spans industries and countries—applying advanced machine learning, scalable data pipelines, 
                and data visualization to solve meaningful problems.
              </p>
            </div>
          </div>

          {/* Skills Grid */}
          <div className="animate-fade-in">
            <h3 className="text-2xl font-bold text-gray-900 mb-8 font-poppins">Skills & Expertise</h3>
            <div className="grid gap-6">
              {skills.map((skillGroup, index) => (
                <div 
                  key={skillGroup.category}
                  className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-steel-blue hover:shadow-xl transition-all duration-300 hover:scale-105"
                >
                  <div className="flex items-center mb-3">
                    <span className="text-2xl mr-3">{skillGroup.icon}</span>
                    <h4 className="text-lg font-semibold text-maroon font-poppins">{skillGroup.category}</h4>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
