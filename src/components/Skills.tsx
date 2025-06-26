
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
      primaryColor: "maroon",
      gradientFrom: "from-maroon-600",
      gradientTo: "to-maroon-400",
      bgHover: "hover:bg-maroon-50/80",
      textColor: "text-maroon-700",
      iconBg: "bg-maroon-100",
      iconColor: "text-maroon-700",
      iconHover: "group-hover/item:bg-maroon-200",
      borderHover: "hover:border-maroon-200"
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
      primaryColor: "steel-blue",
      gradientFrom: "from-steel-blue-600",
      gradientTo: "to-steel-blue-400",
      bgHover: "hover:bg-steel-blue-50/80",
      textColor: "text-steel-blue-700",
      iconBg: "bg-steel-blue-100",
      iconColor: "text-steel-blue-700",
      iconHover: "group-hover/item:bg-steel-blue-200",
      borderHover: "hover:border-steel-blue-200"
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
      primaryColor: "maroon",
      gradientFrom: "from-maroon-600",
      gradientTo: "to-pink-500",
      bgHover: "hover:bg-pink-50/80",
      textColor: "text-maroon-700",
      iconBg: "bg-pink-100",
      iconColor: "text-maroon-700",
      iconHover: "group-hover/item:bg-pink-200",
      borderHover: "hover:border-pink-200"
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
      primaryColor: "steel-blue",
      gradientFrom: "from-steel-blue-600",
      gradientTo: "to-cyan-500",
      bgHover: "hover:bg-cyan-50/80",
      textColor: "text-steel-blue-700",
      iconBg: "bg-cyan-100",
      iconColor: "text-steel-blue-700",
      iconHover: "group-hover/item:bg-cyan-200",
      borderHover: "hover:border-cyan-200"
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
      primaryColor: "maroon",
      gradientFrom: "from-maroon-600",
      gradientTo: "to-orange-500",
      bgHover: "hover:bg-orange-50/80",
      textColor: "text-maroon-700",
      iconBg: "bg-orange-100",
      iconColor: "text-maroon-700",
      iconHover: "group-hover/item:bg-orange-200",
      borderHover: "hover:border-orange-200"
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "TimescaleDB", icon: Database },
        { name: "OpenTSDB", icon: Database }
      ],
      primaryColor: "steel-blue",
      gradientFrom: "from-steel-blue-600",
      gradientTo: "to-teal-500",
      bgHover: "hover:bg-teal-50/80",
      textColor: "text-steel-blue-700",
      iconBg: "bg-teal-100",
      iconColor: "text-steel-blue-700",
      iconHover: "group-hover/item:bg-teal-200",
      borderHover: "hover:border-teal-200"
    },
    {
      category: "Other Tools",
      items: [
        { name: "Git", icon: GitBranch },
        { name: "GitHub", icon: Github },
        { name: "JIRA", icon: Briefcase },
        { name: "SoapUI", icon: Wrench },
        { name: "Postman", icon: Wrench }
      ],
      primaryColor: "maroon",
      gradientFrom: "from-maroon-600",
      gradientTo: "to-purple-500",
      bgHover: "hover:bg-purple-50/80",
      textColor: "text-maroon-700",
      iconBg: "bg-purple-100",
      iconColor: "text-maroon-700",
      iconHover: "group-hover/item:bg-purple-200",
      borderHover: "hover:border-purple-200"
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-[0.02]">
        <div className="absolute inset-0 bg-gradient-to-br from-maroon-500 via-transparent to-steel-blue-500"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-poppins">
              Skills & Expertise
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-maroon-600 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise across various domains
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className={`animate-fade-in bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] p-6 border border-white/40 group relative overflow-hidden flex flex-col min-h-[320px] ${skillGroup.borderHover}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background Overlay */}
              <div className={`absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity duration-500 bg-gradient-to-br ${skillGroup.gradientFrom} ${skillGroup.gradientTo} rounded-2xl`}></div>

              {/* Category Header */}
              <div className="text-center mb-6 relative z-10">
                <h3 className={`text-xl sm:text-2xl font-bold font-poppins mb-4 ${skillGroup.textColor} group-hover:text-opacity-90 transition-all duration-300`}>
                  {skillGroup.category}
                </h3>
                <div className={`w-12 h-1 mx-auto rounded-full transition-all duration-500 group-hover:w-20 bg-gradient-to-r ${skillGroup.gradientFrom} ${skillGroup.gradientTo}`}></div>
              </div>
              
              {/* Skills Grid Layout */}
              <div className="flex-grow relative z-10">
                <div className="grid grid-cols-1 gap-3">
                  {skillGroup.items.map((skill, skillIndex) => {
                    const IconComponent = skill.icon;
                    return (
                      <div 
                        key={skillIndex}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer ${skillGroup.bgHover} group/item border border-transparent hover:border-white/30 transform hover:translate-x-1`}
                      >
                        <div className={`w-8 h-8 rounded-lg flex items-center justify-center flex-shrink-0 ${skillGroup.iconBg} ${skillGroup.iconColor} ${skillGroup.iconHover} transition-all duration-300 shadow-sm`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <span className="text-slate-700 font-medium text-sm group-hover/item:text-slate-900 transition-colors duration-300 flex-1">
                          {skill.name}
                        </span>
                        <div className="w-2 h-2 rounded-full bg-slate-300 group-hover/item:bg-slate-400 transition-colors duration-300 opacity-60"></div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Category Footer */}
              <div className="mt-4 pt-4 border-t border-slate-200/50 relative z-10">
                <div className="flex items-center justify-between">
                  <span className="text-xs text-slate-500 font-medium">
                    {skillGroup.items.length} Skills
                  </span>
                  <div className={`w-6 h-1 rounded-full bg-gradient-to-r ${skillGroup.gradientFrom} ${skillGroup.gradientTo} opacity-60 group-hover:opacity-100 transition-opacity duration-300`}></div>
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
