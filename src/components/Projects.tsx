
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const Projects = () => {
  const projects = [
    {
      title: "TikTok Mental Health Analysis",
      description: "Detected depression and emotional indicators using LLMs; modeled engagement via statistical learning.",
      tools: ["Gemini", "Whisper", "Python"],
      slug: "tiktok-mental-health-analysis"
    },
    {
      title: "Voice-Based Mental Wellness Assistant",
      description: "Voice-guided mental health support tool using ElevenLabs and n8n.",
      tools: ["n8n", "Gemini", "ElevenLabs", "Whisper"],
      slug: "voice-mental-wellness-assistant"
    },
    {
      title: "Job Discovery Agent",
      description: "Automated resume-job matching and recruiter outreach via Groq and LangChain.",
      tools: ["LangChain", "Groq", "Gmail API", "Streamlit"],
      slug: "job-discovery-agent"
    },
    {
      title: "Airline Visitor Forecasting Dashboard",
      description: "Built SARIMA-based forecasting models; visualized insights in Tableau.",
      tools: ["Python", "Tableau"],
      slug: "airline-visitor-forecasting"
    },
    {
      title: "Prostate Cancer Survival Prediction",
      description: "Created 7-year outcome prediction model using regression with 88% accuracy.",
      tools: ["Python", "EDA", "Regression"],
      slug: "prostate-cancer-survival-prediction"
    },
    {
      title: "Airline Performance Analysis",
      description: "Benchmarked 3.65M flight records for operational performance insights.",
      tools: ["Python", "Tableau"],
      slug: "airline-performance-analysis"
    },
    {
      title: "Loan Default Risk Modeling",
      description: "Risk modeling using Random Forest and Logistic Regression with 90% accuracy.",
      tools: ["Python", "scikit-learn"],
      slug: "loan-default-risk-modeling"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">Projects</h2>
          <div className="w-24 h-1 bg-maroon mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-lg overflow-hidden bg-white"
            >
              <CardHeader className="pb-4">
                <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-maroon transition-colors duration-300 font-poppins mb-3">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <Button 
                  variant="outline"
                  className="w-full border-maroon text-maroon hover:bg-maroon hover:text-white transition-all duration-300"
                  onClick={() => console.log(`Navigate to project: ${project.slug}`)}
                >
                  Read More
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
