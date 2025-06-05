
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻",
      color: "maroon"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda)", "Docker", "Jenkins"],
      icon: "☁️",
      color: "steel-blue"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "TimescaleDB", "DynamoDB"],
      icon: "🗄️",
      color: "maroon"
    },
    {
      category: "Analytics & AI",
      items: ["NLP", "Time-Series Forecasting", "ML Ops", "Regression Modeling"],
      icon: "🔍",
      color: "steel-blue"
    },
    {
      category: "Tools",
      items: ["Tableau", "Grafana", "Apache Airflow", "Hive", "GitHub"],
      icon: "🛠️",
      color: "maroon"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gray-50 relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="animate-fade-in bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 p-8 border border-gray-100"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center mb-6">
                <span className="text-5xl block mb-4">{skillGroup.icon}</span>
                <h3 className={`text-2xl font-bold font-poppins ${
                  skillGroup.color === 'maroon' ? 'text-maroon-700' : 'text-steel-blue-600'
                }`}>
                  {skillGroup.category}
                </h3>
                <div className={`w-16 h-1 mx-auto mt-3 rounded-full ${
                  skillGroup.color === 'maroon' 
                    ? 'bg-gradient-to-r from-maroon-700 to-maroon-300' 
                    : 'bg-gradient-to-r from-steel-blue-600 to-steel-blue-300'
                }`}></div>
              </div>
              
              <div className="flex flex-wrap gap-3 justify-center">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-4 py-2 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-sm ${
                      skillGroup.color === 'maroon' 
                        ? 'bg-gradient-to-r from-maroon-700 to-maroon-600 hover:from-maroon-800 hover:to-maroon-700' 
                        : 'bg-gradient-to-r from-steel-blue-600 to-steel-blue-500 hover:from-steel-blue-700 hover:to-steel-blue-600'
                    }`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
