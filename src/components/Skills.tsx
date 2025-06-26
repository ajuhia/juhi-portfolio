
import React from 'react';
import { 
  Database, 
  Cloud, 
  Code, 
  Bot, 
  BarChart3, 
  Wrench, 
  Settings,
  Terminal,
  GitBranch,
  Github,
  CircleDot,
  Server,
  Briefcase
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming",
      items: [
        { name: "Python", icon: Code },
        { name: "R", icon: BarChart3 },
        { name: "SQL", icon: Database },
        { name: "Bash", icon: Terminal }
      ],
      color: "maroon",
      hoverBg: "hover:bg-maroon-100/60"
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
      color: "steel-blue",
      hoverBg: "hover:bg-steel-blue-100/60"
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
      color: "steel-blue",
      hoverBg: "hover:bg-steel-blue-100/60"
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
      color: "maroon",
      hoverBg: "hover:bg-maroon-100/60"
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "Amazon Web Services (AWS)", icon: Cloud },
        { name: "Docker", icon: Server },
        { name: "CircleCI", icon: CircleDot },
        { name: "Jenkins", icon: Settings },
        { name: "Grafana", icon: BarChart3 }
      ],
      color: "maroon",
      hoverBg: "hover:bg-maroon-100/60"
    },
    {
      category: "Databases & Other Tools",
      items: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "TimescaleDB", icon: Database },
        { name: "OpenTSDB", icon: Database },
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Github },
        { name: "JIRA", icon: Briefcase },
        { name: "SoapUI", icon: Wrench },
        { name: "Postman", icon: Wrench }
      ],
      color: "steel-blue",
      hoverBg: "hover:bg-steel-blue-100/60"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Skills Grid - 2x3 Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className="animate-fade-in bg-gradient-to-br from-white/60 via-white/80 to-white/60 backdrop-blur-lg rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 p-6 border border-white/30 group relative overflow-hidden flex flex-col min-h-[400px]"
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
              
              {/* Skills - Horizontal Layout with Flex Wrap */}
              <div className="flex-grow relative z-10">
                <div className="flex flex-wrap gap-3 justify-center text-justify">
                  {skillGroup.items.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skillIndex}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${skillGroup.hoverBg} group/item border border-transparent hover:border-white/30 hover:shadow-md`}
                      >
                        <div className={`w-6 h-6 rounded flex items-center justify-center flex-shrink-0 ${
                          skillGroup.color === 'maroon' 
                            ? 'bg-maroon-100 text-maroon-700 group-hover/item:bg-maroon-200' 
                            : 'bg-steel-blue-100 text-steel-blue-600 group-hover/item:bg-steel-blue-200'
                        } transition-colors duration-300`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-slate-700 font-medium text-lg group-hover/item:text-slate-900 transition-colors duration-300 whitespace-nowrap font-poppins">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
