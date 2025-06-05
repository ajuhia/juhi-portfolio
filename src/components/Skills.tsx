
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
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 via-white to-slate-100 relative overflow-hidden">
      {/* Enhanced background with mesh gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-100/40 via-transparent to-steel-blue-100/40"></div>
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-maroon-50/30 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-bl from-steel-blue-50/40 via-transparent to-maroon-50/20"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.08),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.08),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Single row with 5 columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 xl:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="animate-fade-in bg-gradient-to-br from-white/60 via-white/80 to-white/60 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-6 border border-white/30 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay on hover */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl ${
                skillGroup.color === 'maroon' 
                  ? 'bg-gradient-to-br from-maroon-500 to-maroon-700' 
                  : 'bg-gradient-to-br from-steel-blue-500 to-steel-blue-700'
              }`}></div>
              
              <div className="text-center mb-6 relative z-10">
                <span className="text-4xl block mb-4 group-hover:scale-110 transition-transform duration-300">{skillGroup.icon}</span>
                <h3 className={`text-xl font-bold font-poppins ${
                  skillGroup.color === 'maroon' ? 'text-maroon-700' : 'text-steel-blue-600'
                } group-hover:text-opacity-90 transition-colors duration-300`}>
                  {skillGroup.category}
                </h3>
                <div className={`w-12 h-1 mx-auto mt-3 rounded-full transition-all duration-300 group-hover:w-16 ${
                  skillGroup.color === 'maroon' 
                    ? 'bg-gradient-to-r from-maroon-700 via-maroon-500 to-maroon-300' 
                    : 'bg-gradient-to-r from-steel-blue-600 via-steel-blue-400 to-steel-blue-300'
                }`}></div>
              </div>
              
              <div className="flex flex-wrap gap-2 justify-center relative z-10">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className={`px-3 py-1.5 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs ${
                      skillGroup.color === 'maroon' 
                        ? 'bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 hover:from-maroon-800 hover:via-maroon-700 hover:to-maroon-600' 
                        : 'bg-gradient-to-r from-steel-blue-600 via-steel-blue-500 to-steel-blue-400 hover:from-steel-blue-700 hover:via-steel-blue-600 hover:to-steel-blue-500'
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
