
import React from 'react';
import { Code, Database, Cloud, Brain, BarChart3, Users } from 'lucide-react';

const SkillsGrid = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: <Code className="h-8 w-8 text-maroon-700" />,
      skills: ["Python", "R", "SQL", "JavaScript", "TypeScript", "Java", "C++"],
      color: "from-maroon-100 to-maroon-200"
    },
    {
      title: "Data & Analytics",
      icon: <BarChart3 className="h-8 w-8 text-steel-blue-600" />,
      skills: ["Machine Learning", "Statistical Analysis", "Data Visualization", "Predictive Modeling", "A/B Testing"],
      color: "from-steel-blue-100 to-steel-blue-200"
    },
    {
      title: "Cloud & Infrastructure",
      icon: <Cloud className="h-8 w-8 text-maroon-700" />,
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform", "Linux"],
      color: "from-maroon-100 to-maroon-200"
    },
    {
      title: "Database Technologies",
      icon: <Database className="h-8 w-8 text-steel-blue-600" />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Redis", "Snowflake", "BigQuery"],
      color: "from-steel-blue-100 to-steel-blue-200"
    },
    {
      title: "AI & Machine Learning",
      icon: <Brain className="h-8 w-8 text-maroon-700" />,
      skills: ["TensorFlow", "PyTorch", "Scikit-learn", "NLP", "Computer Vision", "Deep Learning"],
      color: "from-maroon-100 to-maroon-200"
    },
    {
      title: "Collaboration & Leadership",
      icon: <Users className="h-8 w-8 text-steel-blue-600" />,
      skills: ["Team Leadership", "Project Management", "Mentoring", "Cross-functional Collaboration", "Agile/Scrum"],
      color: "from-steel-blue-100 to-steel-blue-200"
    }
  ];

  return (
    <section id="skills" className="py-24 bg-gradient-to-br from-slate-50 to-white relative overflow-hidden">
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_20%,rgba(162,60,60,0.1),transparent_50%)]"></div>
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_80%,rgba(106,155,189,0.1),transparent_50%)]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Skills & Expertise</h2>
          <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {skillCategories.map((category, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 border border-slate-100"
            >
              <div className={`w-16 h-16 bg-gradient-to-br ${category.color} rounded-xl flex items-center justify-center mb-6 mx-auto`}>
                {category.icon}
              </div>
              
              <h3 className="text-xl font-bold text-slate-900 mb-6 text-center font-poppins">
                {category.title}
              </h3>
              
              <div className="flex flex-wrap gap-2 justify-center">
                {category.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex}
                    className="px-3 py-1 bg-slate-100 text-slate-700 rounded-full text-sm font-medium hover:bg-slate-200 transition-colors"
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

export default SkillsGrid;
