
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻",
      color: "maroon"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "TimescaleDB", "DynamoDB", "OpenTSDB"],
      icon: "🗄️",
      color: "steel-blue"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda, S3, Redshift, IoT, CloudWatch)", "Docker", "Jenkins", "CircleCI"],
      icon: "☁️",
      color: "maroon"
    },
    {
      category: "Data Engineering",
      items: ["Apache Airflow", "Hive", "HBase", "Oozie", "Zookeeper", "SSIS", "SSAS", "SSRS", "ETL Scripting"],
      icon: "⚡",
      color: "steel-blue"
    },
    {
      category: "Analytics & Machine Learning",
      items: ["NLP", "Predictive Modeling", "Time-Series Forecasting", "Regression Modeling", "MLOps", "Data Visualization", "Tableau", "Excel", "Scikit-learn", "Weights & Biases"],
      icon: "🔍",
      color: "maroon"
    },
    {
      category: "AI & Automation Tools",
      items: ["LangChain", "Gemini (Google AI)", "Groq", "Hugging Face Transformers", "ElevenLabs", "n8n", "Streamlit", "Lovable AI"],
      icon: "🤖",
      color: "steel-blue"
    },
    {
      category: "Collaboration & Utilities",
      items: ["GitHub", "JIRA", "Perforce", "SoapUI"],
      icon: "🛠️",
      color: "maroon"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Responsive grid - stack on mobile, 2 cols on tablet, 3 cols on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="animate-fade-in bg-gradient-to-br from-white/60 via-white/80 to-white/60 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-6 border border-white/30 group relative overflow-hidden"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background gradients moved inside each card */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  skillGroup.color === 'maroon' 
                    ? 'from-maroon-100/60 via-transparent to-maroon-50/40' 
                    : 'from-steel-blue-100/60 via-transparent to-steel-blue-50/40'
                } rounded-2xl`}></div>
                <div className={`absolute inset-0 bg-gradient-to-tr ${
                  skillGroup.color === 'maroon' 
                    ? 'from-transparent via-maroon-50/30 to-transparent' 
                    : 'from-transparent via-steel-blue-50/30 to-transparent'
                } rounded-2xl`}></div>
                <div className="absolute top-2 left-2 w-16 h-16 bg-gradient-to-br from-maroon-200/40 via-maroon-300/20 to-transparent rounded-full blur-xl animate-float opacity-60"></div>
                <div className="absolute bottom-2 right-2 w-20 h-20 bg-gradient-to-br from-steel-blue-200/40 via-steel-blue-300/20 to-transparent rounded-full blur-xl animate-float opacity-50" style={{ animationDelay: '2s' }}></div>
              </div>

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
