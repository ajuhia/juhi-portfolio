
import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: ["Python", "R", "SQL", "Bash"],
      color: "maroon"
    },
    {
      category: "Databases",
      items: ["PostgreSQL", "MySQL", "TimescaleDB", "DynamoDB", "OpenTSDB"],
      color: "steel-blue"
    },
    {
      category: "Cloud & DevOps",
      items: ["AWS (Kinesis, Glue, Lambda, S3, Redshift, IoT, CloudWatch)", "Docker", "Jenkins", "CircleCI"],
      color: "maroon"
    },
    {
      category: "Data Engineering",
      items: ["Apache Airflow", "Hive", "HBase", "Oozie", "Zookeeper", "SSIS", "SSAS", "SSRS", "ETL Scripting"],
      color: "steel-blue"
    },
    {
      category: "Analytics & Machine Learning",
      items: ["NLP", "Predictive Modeling", "Time-Series Forecasting", "Regression Modeling", "MLOps", "Data Visualization", "Tableau", "Excel", "Scikit-learn", "Weights & Biases"],
      color: "maroon"
    },
    {
      category: "AI & Automation Tools",
      items: ["LangChain", "Gemini (Google AI)", "Groq", "Hugging Face Transformers", "ElevenLabs", "n8n", "Streamlit", "Lovable AI"],
      color: "steel-blue"
    },
    {
      category: "Collaboration & Utilities",
      items: ["GitHub", "JIRA", "Perforce", "SoapUI"],
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

        {/* Clean grid layout - responsive columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="animate-fade-in bg-white/70 backdrop-blur-sm rounded-lg shadow-md hover:shadow-lg transition-all duration-300 p-6 border border-white/50 group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Clean category header */}
              <div className="mb-6">
                <h3 className={`text-lg font-bold font-poppins mb-2 ${
                  skillGroup.color === 'maroon' ? 'text-maroon-700' : 'text-steel-blue-600'
                }`}>
                  {skillGroup.category}
                </h3>
                <div className={`w-12 h-0.5 rounded-full ${
                  skillGroup.color === 'maroon' 
                    ? 'bg-maroon-600' 
                    : 'bg-steel-blue-500'
                }`}></div>
              </div>
              
              {/* Vertically stacked skills */}
              <div className="space-y-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <div 
                    key={skillIndex}
                    className={`text-sm text-slate-700 font-medium leading-relaxed transition-colors duration-200 hover:${
                      skillGroup.color === 'maroon' ? 'text-maroon-600' : 'text-steel-blue-600'
                    } cursor-default`}
                  >
                    {skill}
                  </div>
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
