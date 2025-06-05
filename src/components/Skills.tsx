
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻",
      gradient: "from-blue-500/10 to-blue-600/5"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda)", "Docker", "Jenkins"],
      icon: "☁️",
      gradient: "from-purple-500/10 to-purple-600/5"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "TimescaleDB", "DynamoDB"],
      icon: "🗄️",
      gradient: "from-green-500/10 to-green-600/5"
    },
    {
      category: "Analytics & AI",
      items: ["NLP", "Time-Series Forecasting", "ML Ops", "Regression Modeling"],
      icon: "🔍",
      gradient: "from-orange-500/10 to-orange-600/5"
    },
    {
      category: "Tools",
      items: ["Tableau", "Grafana", "Apache Airflow", "Hive", "GitHub"],
      icon: "🛠️",
      gradient: "from-red-500/10 to-red-600/5"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_80%,rgba(162,60,60,0.1),transparent_70%)]"></div>
        <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_20%,rgba(106,155,189,0.1),transparent_70%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-steel-blue to-maroon mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Transforming data into insights with cutting-edge technologies and methodologies
          </p>
        </div>

        <div className="animate-fade-in">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skillCategories.map((skillGroup, index) => (
              <div 
                key={skillGroup.category}
                className={`bg-gradient-to-br ${skillGroup.gradient} backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 border border-white/20 group relative overflow-hidden`}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10">
                  <div className="flex items-center mb-8">
                    <div className="text-4xl mr-4 transform group-hover:scale-110 transition-transform duration-300">
                      {skillGroup.icon}
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 font-poppins group-hover:text-maroon transition-colors duration-300">
                      {skillGroup.category}
                    </h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-3">
                    {skillGroup.items.map((skill, skillIndex) => (
                      <span 
                        key={skillIndex}
                        className="px-4 py-2 bg-white/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200/50 hover:border-steel-blue/30 hover:bg-white transition-all duration-300 hover:scale-105 shadow-sm hover:shadow-md"
                      >
                        {skill}
                      </span>
                    ))}
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

export default Skills;
