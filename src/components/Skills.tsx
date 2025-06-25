
import React from 'react';
import { 
  Database, 
  Cloud, 
  Code, 
  Bot, 
  BarChart3, 
  Wrench, 
  Settings,
  Python,
  Git,
  Github,
  Mysql,
  Postgresql,
  Docker,
  Aws,
  CircleDot,
  Jenkins,
  Jira,
  Youtube
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: [
        { name: "Python", icon: Python },
        { name: "R", icon: Code },
        { name: "SQL", icon: Database },
        { name: "Bash", icon: Code }
      ],
      color: "maroon"
    },
    {
      category: "AI Tools",
      items: [
        { name: "GPT 4.0", icon: Bot },
        { name: "Gemini 2.0 (Google AI)", icon: Bot },
        { name: "LangChain", icon: Bot },
        { name: "ElevenLabs", icon: Bot },
        { name: "Groq", icon: Bot },
        { name: "Hugging Face Transformers", icon: Bot },
        { name: "Loveable", icon: Bot },
        { name: "n8n", icon: Settings },
        { name: "Prompt Engineering", icon: Bot }
      ],
      color: "steel-blue"
    },
    {
      category: "Data Science Tools",
      items: [
        { name: "ETL Scripting", icon: BarChart3 },
        { name: "NumPy", icon: BarChart3 },
        { name: "Pandas", icon: BarChart3 },
        { name: "Scikit-learn", icon: BarChart3 },
        { name: "Matplotlib", icon: BarChart3 },
        { name: "Seaborn", icon: BarChart3 },
        { name: "Beautiful Soup", icon: Code },
        { name: "Weights & Biases", icon: BarChart3 },
        { name: "MS Excel", icon: BarChart3 },
        { name: "Tableau", icon: BarChart3 },
        { name: "SSAS", icon: Database },
        { name: "SSRS", icon: BarChart3 }
      ],
      color: "maroon"
    },
    {
      category: "Data Engineering Tools",
      items: [
        { name: "Apache Airflow", icon: Settings },
        { name: "Hive", icon: Database },
        { name: "HBase", icon: Database },
        { name: "Zookeeper", icon: Settings },
        { name: "Oozie", icon: Settings },
        { name: "SSIS", icon: Database }
      ],
      color: "steel-blue"
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Amazon Web Services (AWS)", icon: Aws },
        { name: "Docker", icon: Docker },
        { name: "CircleCI", icon: CircleDot },
        { name: "Jenkins", icon: Jenkins },
        { name: "Grafana", icon: BarChart3 }
      ],
      color: "maroon"
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: Mysql },
        { name: "PostgreSQL", icon: Postgresql },
        { name: "TimescaleDB", icon: Database },
        { name: "OpenTSDB", icon: Database }
      ],
      color: "steel-blue"
    },
    {
      category: "Other Tools",
      items: [
        { name: "Git", icon: Git },
        { name: "GitHub", icon: Github },
        { name: "JIRA", icon: Jira },
        { name: "SoapUI", icon: Wrench },
        { name: "Postman", icon: Wrench }
      ],
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
              {/* Background gradients */}
              <div className="absolute inset-0 opacity-30 group-hover:opacity-40 transition-opacity duration-500 rounded-2xl">
                <div className={`absolute inset-0 bg-gradient-to-br ${
                  skillGroup.color === 'maroon' 
                    ? 'from-maroon-100/60 via-transparent to-maroon-50/40' 
                    : 'from-steel-blue-100/60 via-transparent to-steel-blue-50/40'
                } rounded-2xl`}></div>
              </div>

              {/* Category Header */}
              <div className="text-center mb-6 relative z-10">
                <h3 className={`text-xl font-bold font-poppins mb-4 ${
                  skillGroup.color === 'maroon' ? 'text-maroon-700' : 'text-steel-blue-600'
                } group-hover:text-opacity-90 transition-colors duration-300`}>
                  {skillGroup.category}
                </h3>
                <div className={`w-12 h-1 mx-auto rounded-full transition-all duration-300 group-hover:w-16 ${
                  skillGroup.color === 'maroon' 
                    ? 'bg-gradient-to-r from-maroon-700 via-maroon-500 to-maroon-300' 
                    : 'bg-gradient-to-r from-steel-blue-600 via-steel-blue-400 to-steel-blue-300'
                }`}></div>
              </div>
              
              {/* Skills List */}
              <div className="space-y-3 relative z-10">
                {skillGroup.items.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skillIndex}
                      className="flex items-center space-x-3 p-2 rounded-lg hover:bg-white/30 transition-all duration-300 group/item"
                    >
                      <div className={`w-8 h-8 rounded-lg flex items-center justify-center ${
                        skillGroup.color === 'maroon' 
                          ? 'bg-maroon-100 text-maroon-700 group-hover/item:bg-maroon-200' 
                          : 'bg-steel-blue-100 text-steel-blue-600 group-hover/item:bg-steel-blue-200'
                      } transition-colors duration-300`}>
                        <IconComponent className="w-4 h-4" />
                      </div>
                      <span className="text-slate-700 font-medium text-sm group-hover/item:text-slate-900 transition-colors duration-300">
                        {skill.name}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
