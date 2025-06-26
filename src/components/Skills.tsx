
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
  Briefcase,
  Brain,
  Layers,
  Zap
} from 'lucide-react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Programming Languages",
      items: [
        { name: "Python", icon: Code, level: "Expert", color: "#3776ab" },
        { name: "R", icon: BarChart3, level: "Advanced", color: "#276dc3" },
        { name: "SQL", icon: Database, level: "Expert", color: "#00758f" },
        { name: "Bash", icon: Terminal, level: "Intermediate", color: "#4eaa25" }
      ],
      gradient: "from-blue-500/20 to-indigo-500/20",
      borderColor: "border-blue-200",
      iconBg: "bg-blue-100",
      iconColor: "text-blue-700"
    },
    {
      category: "AI & Machine Learning",
      items: [
        { name: "GPT 4.0", icon: Brain, level: "Expert", color: "#10a37f" },
        { name: "Gemini 2.0", icon: Bot, level: "Advanced", color: "#4285f4" },
        { name: "LangChain", icon: Layers, level: "Advanced", color: "#1c3aa9" },
        { name: "HuggingFace", icon: Bot, level: "Intermediate", color: "#ff9d00" },
        { name: "Prompt Engineering", icon: Zap, level: "Expert", color: "#7c3aed" }
      ],
      gradient: "from-purple-500/20 to-pink-500/20",
      borderColor: "border-purple-200",
      iconBg: "bg-purple-100",
      iconColor: "text-purple-700"
    },
    {
      category: "Data Science & Analytics",
      items: [
        { name: "NumPy", icon: BarChart3, level: "Expert", color: "#013243" },
        { name: "Pandas", icon: BarChart3, level: "Expert", color: "#150458" },
        { name: "Scikit-learn", icon: BarChart3, level: "Advanced", color: "#f7931e" },
        { name: "Matplotlib", icon: BarChart3, level: "Advanced", color: "#11557c" },
        { name: "Tableau", icon: BarChart3, level: "Expert", color: "#e97627" },
        { name: "MS Excel", icon: BarChart3, level: "Expert", color: "#217346" }
      ],
      gradient: "from-emerald-500/20 to-teal-500/20",
      borderColor: "border-emerald-200",
      iconBg: "bg-emerald-100",
      iconColor: "text-emerald-700"
    },
    {
      category: "Cloud & DevOps",
      items: [
        { name: "AWS", icon: Cloud, level: "Advanced", color: "#ff9900" },
        { name: "Docker", icon: Server, level: "Intermediate", color: "#2496ed" },
        { name: "Jenkins", icon: Settings, level: "Intermediate", color: "#d33833" },
        { name: "CircleCI", icon: CircleDot, level: "Intermediate", color: "#343434" }
      ],
      gradient: "from-orange-500/20 to-red-500/20",
      borderColor: "border-orange-200",
      iconBg: "bg-orange-100",
      iconColor: "text-orange-700"
    },
    {
      category: "Databases & Storage",
      items: [
        { name: "MySQL", icon: Database, level: "Advanced", color: "#4479a1" },
        { name: "PostgreSQL", icon: Database, level: "Advanced", color: "#336791" },
        { name: "TimescaleDB", icon: Database, level: "Intermediate", color: "#fdb515" },
        { name: "HBase", icon: Database, level: "Intermediate", color: "#d22128" }
      ],
      gradient: "from-cyan-500/20 to-blue-500/20",
      borderColor: "border-cyan-200",
      iconBg: "bg-cyan-100",
      iconColor: "text-cyan-700"
    },
    {
      category: "Tools & Platforms",
      items: [
        { name: "Git", icon: GitBranch, level: "Expert", color: "#f05032" },
        { name: "GitHub", icon: Github, level: "Expert", color: "#181717" },
        { name: "JIRA", icon: Briefcase, level: "Advanced", color: "#0052cc" },
        { name: "Postman", icon: Wrench, level: "Advanced", color: "#ff6c37" }
      ],
      gradient: "from-slate-500/20 to-gray-500/20",
      borderColor: "border-slate-200",
      iconBg: "bg-slate-100",
      iconColor: "text-slate-700"
    }
  ];

  const getLevelColor = (level: string) => {
    switch (level) {
      case 'Expert': return 'bg-green-100 text-green-800 border-green-200';
      case 'Advanced': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 bg-gradient-to-br from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-r from-maroon-200/30 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-r from-steel-blue-200/30 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 sm:mb-16 lg:mb-20 animate-fade-in">
          <div className="inline-block">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-slate-900 mb-4 font-poppins bg-gradient-to-r from-maroon-700 to-steel-blue-600 bg-clip-text text-transparent">
              Skills & Expertise
            </h2>
            <div className="w-24 sm:w-32 h-1 bg-gradient-to-r from-maroon-700 via-maroon-500 to-steel-blue-500 mx-auto rounded-full"></div>
          </div>
          <p className="mt-6 text-lg text-slate-600 max-w-3xl mx-auto leading-relaxed">
            A comprehensive toolkit spanning programming, AI/ML, data science, and cloud technologies
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8">
          {skillCategories.map((skillGroup, index) => (
            <div 
              key={skillGroup.category}
              className={`animate-fade-in group relative bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] p-6 border ${skillGroup.borderColor} overflow-hidden`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Background Gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${skillGroup.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`}></div>

              {/* Category Header */}
              <div className="relative z-10 mb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className={`w-12 h-12 ${skillGroup.iconBg} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                    <Code className={`w-6 h-6 ${skillGroup.iconColor}`} />
                  </div>
                  <h3 className="text-xl font-bold font-poppins text-slate-800 group-hover:text-slate-900 transition-colors duration-300">
                    {skillGroup.category}
                  </h3>
                </div>
                <div className={`w-12 h-1 bg-gradient-to-r ${skillGroup.gradient} rounded-full group-hover:w-16 transition-all duration-300`}></div>
              </div>
              
              {/* Skills List */}
              <div className="relative z-10 space-y-3">
                {skillGroup.items.map((skill, skillIndex) => {
                  const IconComponent = skill.icon;
                  return (
                    <div 
                      key={skillIndex}
                      className="flex items-center justify-between group/item hover:bg-white/50 rounded-lg p-2 transition-all duration-300"
                    >
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 rounded-lg bg-white/80 flex items-center justify-center shadow-sm group-hover/item:shadow-md transition-shadow duration-300">
                          <IconComponent className="w-4 h-4 text-slate-600" />
                        </div>
                        <span className="font-medium text-slate-700 group-hover/item:text-slate-900 transition-colors duration-300">
                          {skill.name}
                        </span>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getLevelColor(skill.level)} transition-all duration-300`}>
                        {skill.level}
                      </span>
                    </div>
                  );
                })}
              </div>

              {/* Skill Count Badge */}
              <div className="absolute top-4 right-4 bg-white/80 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-semibold text-slate-600 border border-white/30">
                {skillGroup.items.length} skills
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16 animate-fade-in">
          <p className="text-slate-600 text-lg mb-6">
            Ready to leverage these skills for your next project?
          </p>
          <a 
            href="#contact" 
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-maroon-700 to-steel-blue-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
          >
            Let's Connect
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
