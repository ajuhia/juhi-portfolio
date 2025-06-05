
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const Projects = () => {
  const projects = [
    {
      title: "TikTok Mental Health Analysis",
      description: "Analyzed TikTok videos using LLMs to detect depression signals and predict engagement.",
      tools: "Gemini 2.0, Whisper, NLP, Regression Modeling",
      color: "from-maroon/10 to-maroon/5"
    },
    {
      title: "Job Discovery Agent",
      description: "Automated job search, resume matching, and recruiter outreach using LangChain and Groq.",
      tools: "Streamlit, Serper API, LangChain",
      color: "from-steel-blue/10 to-steel-blue/5"
    },
    {
      title: "Voice-Based Mental Wellness Assistant",
      description: "Built a voice-interactive emotional support agent using n8n and ElevenLabs.",
      tools: "n8n, Whisper, ElevenLabs, Gemini Flash",
      color: "from-maroon/10 to-maroon/5"
    },
    {
      title: "Airline Visitor Forecasting Dashboard",
      description: "Forecasted visitor trends to Australia using SARIMA models and Tableau dashboards.",
      tools: "Python, Tableau",
      color: "from-steel-blue/10 to-steel-blue/5"
    },
    {
      title: "Prostate Cancer Survival Prediction",
      description: "Conducted 7-year survival prediction using regression analysis and clinical data.",
      tools: "Python, EDA",
      color: "from-maroon/10 to-maroon/5"
    },
    {
      title: "Airline Performance Analysis",
      description: "Analyzed 3.65M ORD flight records; built competitive dashboards in Tableau.",
      tools: "Python, Tableau",
      color: "from-steel-blue/10 to-steel-blue/5"
    },
    {
      title: "Loan Default Risk Modeling",
      description: "Predicted loan defaults with 90% accuracy using Random Forest and Logistic Regression.",
      tools: "Python, scikit-learn",
      color: "from-maroon/10 to-maroon/5"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Projects</h2>
          <div className="w-24 h-1 bg-steel-blue mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg"
            >
              <div className={`h-2 bg-gradient-to-r ${project.color} rounded-t-lg`}></div>
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-gray-900 group-hover:text-maroon transition-colors duration-300 font-poppins">
                  {project.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 mb-4 leading-relaxed">
                  {project.description}
                </CardDescription>
                <div className="flex flex-wrap gap-2">
                  {project.tools.split(', ').map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 rounded text-xs font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
