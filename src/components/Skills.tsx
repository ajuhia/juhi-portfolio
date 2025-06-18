import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: ["Python", "R", "SQL", "Bash"],
      icon: "💻",
      color: "maroon",
      size: "medium"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "TimescaleDB", "DynamoDB", "OpenTSDB"],
      icon: "🗄️",
      color: "steel-blue",
      size: "large"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda, S3, Redshift, IoT, CloudWatch)", "Docker", "Jenkins", "CircleCI"],
      icon: "☁️",
      color: "maroon",
      size: "large"
    },
    {
      category: "Data Engineering",
      items: ["Apache Airflow", "Hive", "HBase", "Oozie", "Zookeeper", "SSIS", "SSAS", "SSRS", "ETL Scripting"],
      icon: "⚡",
      color: "steel-blue",
      size: "extra-large"
    },
    {
      category: "Analytics & ML",
      items: ["NLP", "Predictive Modeling", "Time-Series Forecasting", "Regression Modeling", "MLOps", "Data Visualization", "Tableau", "Excel", "Scikit-learn", "Weights & Biases"],
      icon: "🔍",
      color: "maroon",
      size: "extra-large"
    },
    {
      category: "AI Tools",
      items: ["LangChain", "Gemini (Google AI)", "Groq", "Hugging Face Transformers", "ElevenLabs", "n8n", "Streamlit", "Lovable AI"],
      icon: "🤖",
      color: "steel-blue",
      size: "large"
    },
    {
      category: "Collaboration",
      items: ["GitHub", "JIRA", "Perforce", "SoapUI"],
      icon: "🛠️",
      color: "maroon",
      size: "small"
    }
  ];

  const getSizeClasses = (size: string) => {
    switch (size) {
      case 'small':
        return 'masonry-small';
      case 'medium':
        return 'masonry-medium';
      case 'large':
        return 'masonry-large';
      case 'extra-large':
        return 'masonry-xl';
      default:
        return 'masonry-medium';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-maroon-200/40 via-maroon-300/20 to-transparent rounded-full blur-2xl animate-float"></div>
        <div className="absolute top-32 right-20 w-40 h-40 bg-gradient-to-br from-steel-blue-200/40 via-steel-blue-300/20 to-transparent rounded-full blur-2xl animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/4 w-28 h-28 bg-gradient-to-br from-maroon-200/30 via-maroon-300/15 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-32 right-1/3 w-36 h-36 bg-gradient-to-br from-steel-blue-200/30 via-steel-blue-300/15 to-transparent rounded-full blur-xl animate-float" style={{ animationDelay: '6s' }}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto">
            A comprehensive toolkit spanning data engineering, machine learning, and modern development practices
          </p>
        </div>

        {/* Masonry Grid */}
        <div className="masonry-grid">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className={`masonry-item ${getSizeClasses(skillGroup.size)} animate-fade-in bg-gradient-to-br from-white/80 via-white/90 to-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-105 p-6 border border-white/40 group relative overflow-hidden`}
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Background Pattern */}
              <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  skillGroup.color === 'maroon' 
                    ? 'from-maroon-100/50 via-transparent to-maroon-50/30' 
                    : 'from-steel-blue-100/50 via-transparent to-steel-blue-50/30'
                } rounded-2xl`}></div>
                <div className="absolute top-3 right-3 w-12 h-12 bg-gradient-to-br from-maroon-200/30 via-maroon-300/15 to-transparent rounded-full blur-lg animate-float opacity-60"></div>
                <div className="absolute bottom-3 left-3 w-16 h-16 bg-gradient-to-br from-steel-blue-200/30 via-steel-blue-300/15 to-transparent rounded-full blur-lg animate-float opacity-50" style={{ animationDelay: '3s' }}></div>
              </div>

              {/* Hover Gradient Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl ${
                skillGroup.color === 'maroon' 
                  ? 'bg-gradient-to-br from-maroon-500 to-maroon-700' 
                  : 'bg-gradient-to-br from-steel-blue-500 to-steel-blue-700'
              }`}></div>
              
              {/* Content */}
              <div className="relative z-10">
                <div className="text-center mb-4">
                  <span className="text-3xl sm:text-4xl block mb-3 group-hover:scale-110 transition-transform duration-300">{skillGroup.icon}</span>
                  <h3 className={`text-lg sm:text-xl font-bold font-poppins ${
                    skillGroup.color === 'maroon' ? 'text-maroon-700' : 'text-steel-blue-700'
                  } group-hover:text-opacity-90 transition-colors duration-300`}>
                    {skillGroup.category}
                  </h3>
                  <div className={`w-8 h-0.5 mx-auto mt-2 rounded-full transition-all duration-300 group-hover:w-12 ${
                    skillGroup.color === 'maroon' 
                      ? 'bg-gradient-to-r from-maroon-700 via-maroon-500 to-maroon-400' 
                      : 'bg-gradient-to-r from-steel-blue-700 via-steel-blue-500 to-steel-blue-400'
                  }`}></div>
                </div>
                
                <div className="flex flex-wrap gap-2 justify-center">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className={`px-2.5 py-1 rounded-full text-white font-medium shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105 text-xs ${
                        skillGroup.color === 'maroon' 
                          ? 'bg-gradient-to-r from-maroon-700 via-maroon-600 to-maroon-500 hover:from-maroon-800 hover:via-maroon-700 hover:to-maroon-600' 
                          : 'bg-gradient-to-r from-steel-blue-700 via-steel-blue-600 to-steel-blue-500 hover:from-steel-blue-800 hover:via-steel-blue-700 hover:to-steel-blue-600'
                      }`}
                      style={{ animationDelay: `${(index * 0.15) + (skillIndex * 0.05)}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Featured Badge for larger categories */}
                {(skillGroup.size === 'large' || skillGroup.size === 'extra-large') && (
                  <div className="mt-4 text-center">
                    <span className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs font-medium ${
                      skillGroup.color === 'maroon' 
                        ? 'bg-maroon-100 text-maroon-800 border border-maroon-200' 
                        : 'bg-steel-blue-100 text-steel-blue-800 border border-steel-blue-200'
                    }`}>
                      ⭐ Core Expertise
                    </span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
