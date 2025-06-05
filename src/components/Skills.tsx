
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻",
      bgColor: "bg-maroon-50",
      borderColor: "border-maroon-200",
      textColor: "text-maroon-600"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda)", "Docker", "Jenkins"],
      icon: "☁️",
      bgColor: "bg-steel-blue-50",
      borderColor: "border-steel-blue-200",
      textColor: "text-steel-blue-600"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "TimescaleDB", "DynamoDB"],
      icon: "🗄️",
      bgColor: "bg-maroon-50",
      borderColor: "border-maroon-200",
      textColor: "text-maroon-600"
    },
    {
      category: "Analytics & AI",
      items: ["NLP", "Time-Series Forecasting", "ML Ops", "Regression Modeling"],
      icon: "🔍",
      bgColor: "bg-steel-blue-50",
      borderColor: "border-steel-blue-200",
      textColor: "text-steel-blue-600"
    },
    {
      category: "Tools",
      items: ["Tableau", "Grafana", "Apache Airflow", "Hive", "GitHub"],
      icon: "🛠️",
      bgColor: "bg-maroon-50",
      borderColor: "border-maroon-200",
      textColor: "text-maroon-600"
    }
  ];

  // Split skills into two columns
  const leftColumn = skillCategories.slice(0, 3);
  const rightColumn = skillCategories.slice(3);

  return (
    <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Skills & Expertise</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-maroon-500 to-steel-blue-500 mx-auto"></div>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 max-w-6xl mx-auto">
          {/* Left Column */}
          <div className="flex-1 space-y-6">
            {leftColumn.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className={`${skillGroup.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border ${skillGroup.borderColor}`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skillGroup.icon}</span>
                  <h3 className={`text-lg font-bold ${skillGroup.textColor} font-poppins`}>
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Right Column */}
          <div className="flex-1 space-y-6">
            {rightColumn.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className={`${skillGroup.bgColor} p-6 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border ${skillGroup.borderColor}`}
              >
                <div className="flex items-center mb-4">
                  <span className="text-3xl mr-3">{skillGroup.icon}</span>
                  <h3 className={`text-lg font-bold ${skillGroup.textColor} font-poppins`}>
                    {skillGroup.category}
                  </h3>
                </div>
                
                <div className="flex flex-wrap gap-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-3 py-1 bg-white text-gray-700 rounded-full text-sm font-medium border border-gray-200"
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
