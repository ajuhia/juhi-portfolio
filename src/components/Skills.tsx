
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
      category: "AI Tools",
      items: [
        { name: "GPT 4.0", icon: Bot },
        { name: "Gemini 2.0", icon: Bot },
        { name: "LangChain", icon: Bot },
        { name: "ElevenLabs", icon: Bot },
        { name: "Groq", icon: Bot },
        { name: "Hugging Face", icon: Bot },
        { name: "Loveable", icon: Bot },
        { name: "n8n", icon: Settings },
        { name: "Prompt Engineering", icon: Bot }
      ],
      color: "maroon"
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
      color: "steel-blue"
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
      color: "maroon"
    },
    {
      category: "Databases",
      items: [
        { name: "MySQL", icon: Database },
        { name: "PostgreSQL", icon: Database },
        { name: "TimescaleDB", icon: Database },
        { name: "OpenTSDB", icon: Database }
      ],
      color: "steel-blue"
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
      color: "maroon"
    }
  ];

  const renderSkillItem = (skill, skillIndex, color) => {
    const IconComponent = skill.icon;
    return (
      <div 
        key={skillIndex}
        className={`inline-flex items-center space-x-2 px-2.5 py-1 m-0.5 rounded-lg transition-all duration-300 cursor-pointer border border-transparent ${
          color === 'maroon' 
            ? 'bg-maroon-50/30 hover:bg-maroon-100/50 hover:border-maroon-200/20' 
            : 'bg-steel-blue-50/30 hover:bg-steel-blue-100/50 hover:border-steel-blue-200/20'
        }`}
      >
        <div className={`w-3.5 h-3.5 rounded flex items-center justify-center flex-shrink-0 ${
          color === 'maroon' 
            ? 'bg-maroon-100 text-maroon-700' 
            : 'bg-steel-blue-100 text-steel-blue-600'
        } transition-colors duration-300`}>
          <IconComponent className="w-2 h-2" />
        </div>
        <span className="text-slate-700 font-medium text-xs whitespace-nowrap font-poppins">
          {skill.name}
        </span>
      </div>
    );
  };

  const renderSkillBox = (skillGroup, index, customClass = "") => (
    <div 
      key={skillGroup.category}
      className={`animate-fade-in bg-gradient-to-br from-white/60 via-white/80 to-white/60 backdrop-blur-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-500 hover:scale-[1.01] p-3 border border-white/30 group relative overflow-hidden flex flex-col h-full ${customClass}`}
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Background gradients */}
      <div className="absolute inset-0 opacity-20 group-hover:opacity-30 transition-opacity duration-500 rounded-xl">
        <div className={`absolute inset-0 bg-gradient-to-br ${
          skillGroup.color === 'maroon' 
            ? 'from-maroon-100/50 via-transparent to-maroon-50/30' 
            : 'from-steel-blue-100/50 via-transparent to-steel-blue-50/30'
        } rounded-xl`}></div>
      </div>

      {/* Category Header */}
      <div className="text-center mb-2 relative z-10">
        <h3 className={`text-sm font-bold font-poppins mb-2 ${
          skillGroup.color === 'maroon' ? 'text-maroon-700' : 'text-steel-blue-600'
        } group-hover:text-opacity-90 transition-colors duration-300`}>
          {skillGroup.category}
        </h3>
        <div className={`w-8 h-0.5 mx-auto rounded-full transition-all duration-300 group-hover:w-10 ${
          skillGroup.color === 'maroon' 
            ? 'bg-gradient-to-r from-maroon-700 via-maroon-500 to-maroon-300' 
            : 'bg-gradient-to-r from-steel-blue-600 via-steel-blue-400 to-steel-blue-300'
        }`}></div>
      </div>
      
      {/* Skills Container */}
      <div className="flex-grow relative z-10">
        <div className="flex flex-wrap justify-center">
          {skillGroup.items.map((skill, skillIndex) => renderSkillItem(skill, skillIndex, skillGroup.color))}
        </div>
      </div>
    </div>
  );

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
        </div>

        {/* Skills Grid Layout */}
        <div className="space-y-6">
          {/* First Row */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-4">
            {/* First Column - Stacked Programming and Data Engineering Tools */}
            <div className="lg:col-span-1 space-y-4">
              {renderSkillBox(skillCategories[0], 0)} {/* Programming */}
              {renderSkillBox(skillCategories[1], 1)} {/* Data Engineering Tools */}
            </div>
            
            {/* AI Tools */}
            <div className="lg:col-span-1">
              {renderSkillBox(skillCategories[2], 2, "h-full")} {/* AI Tools */}
            </div>
            
            {/* Data Science Tools */}
            <div className="lg:col-span-2">
              {renderSkillBox(skillCategories[3], 3, "h-full")} {/* Data Science Tools */}
            </div>
          </div>

          {/* Second Row - 3 equal boxes */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {renderSkillBox(skillCategories[4], 4)} {/* Cloud & DevOps */}
            {renderSkillBox(skillCategories[5], 5)} {/* Databases */}
            {renderSkillBox(skillCategories[6], 6)} {/* Other Tools */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
