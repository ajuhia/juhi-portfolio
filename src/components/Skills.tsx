
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda)", "Docker", "Jenkins"],
      icon: "☁️"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "TimescaleDB", "DynamoDB"],
      icon: "🗄️"
    },
    {
      category: "Analytics & AI",
      items: ["NLP", "Time-Series Forecasting", "ML Ops", "Regression Modeling"],
      icon: "🔍"
    },
    {
      category: "Tools",
      items: ["Tableau", "Grafana", "Apache Airflow", "Hive", "GitHub"],
      icon: "🛠️"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Skills</h2>
          <div className="w-24 h-1 bg-steel-blue mx-auto"></div>
        </div>

        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className="bg-gray-50 p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border-l-4 border-steel-blue/50"
              >
                <div className="flex items-center mb-6">
                  <span className="text-3xl mr-4">{skillGroup.icon}</span>
                  <h3 className="text-xl font-bold text-gray-900 font-poppins">{skillGroup.category}</h3>
                </div>
                <div className="flex flex-wrap gap-3">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-4 py-2 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200 hover:border-steel-blue/30 transition-colors"
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
    </section>
  );
};

export default Skills;
