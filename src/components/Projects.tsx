import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const Projects = () => {
  const projects = [
    {
      title: "TikTok Mental Health Analysis",
      description: "Detected depression and emotional indicators using LLMs; modeled engagement via statistical learning.",
      tools: ["Gemini", "Whisper", "Python"],
      slug: "tiktok-mental-health-analysis",
      featured: true
    },
    {
      title: "Voice-Based Mental Wellness Assistant",
      description: "Voice-guided mental health support tool using ElevenLabs and n8n.",
      tools: ["n8n", "Gemini", "ElevenLabs", "Whisper"],
      slug: "voice-mental-wellness-assistant",
      featured: true
    },
    {
      title: "Job Discovery Agent",
      description: "Automated resume-job matching and recruiter outreach via Groq and LangChain.",
      tools: ["LangChain", "Groq", "Gmail API", "Streamlit"],
      slug: "job-discovery-agent",
      featured: false
    },
    {
      title: "Airline Visitor Forecasting Dashboard",
      description: "Built SARIMA-based forecasting models; visualized insights in Tableau.",
      tools: ["Python", "Tableau"],
      slug: "airline-visitor-forecasting",
      featured: false
    },
    {
      title: "Prostate Cancer Survival Prediction",
      description: "Created 7-year outcome prediction model using regression with 88% accuracy.",
      tools: ["Python", "EDA", "Regression"],
      slug: "prostate-cancer-survival-prediction",
      featured: false
    },
    {
      title: "Airline Performance Analysis",
      description: "Benchmarked 3.65M flight records for operational performance insights.",
      tools: ["Python", "Tableau"],
      slug: "airline-performance-analysis",
      featured: false
    },
    {
      title: "Loan Default Risk Modeling",
      description: "Risk modeling using Random Forest and Logistic Regression with 90% accuracy.",
      tools: ["Python", "scikit-learn"],
      slug: "loan-default-risk-modeling",
      featured: false
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-24 bg-gradient-to-b from-gray-50/50 to-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-20 left-10 w-72 h-72 bg-gradient-to-br from-maroon/10 to-transparent rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 bg-gradient-to-br from-steel-blue/10 to-transparent rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-block">
            <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4 font-poppins">Featured Projects</h2>
            <div className="w-32 h-1 bg-gradient-to-r from-maroon to-steel-blue mx-auto rounded-full"></div>
          </div>
          <p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto">
            Innovative solutions at the intersection of data science, AI, and real-world impact
          </p>
        </div>

        {/* Featured Projects */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <Card 
              key={index}
              className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-0 shadow-lg overflow-hidden bg-white/80 backdrop-blur-sm relative"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-maroon/5 to-steel-blue/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <CardTitle className="text-xl font-bold text-gray-900 group-hover:text-maroon transition-colors duration-300 font-poppins mb-3">
                      {project.title}
                    </CardTitle>
                    <div className="w-12 h-1 bg-gradient-to-r from-maroon to-steel-blue rounded-full mb-4"></div>
                  </div>
                  <div className="bg-maroon/10 p-2 rounded-lg">
                    <ExternalLink className="h-5 w-5 text-maroon" />
                  </div>
                </div>
                <CardDescription className="text-gray-600 leading-relaxed text-base">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tools.map((tool, toolIndex) => (
                    <span 
                      key={toolIndex}
                      className="px-3 py-1 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full text-sm font-medium border border-gray-200/50 hover:border-maroon/30 transition-colors duration-300"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <Button 
                    variant="outline"
                    className="flex-1 border-maroon/20 text-maroon hover:bg-maroon hover:text-white transition-all duration-300 rounded-lg"
                    onClick={() => console.log(`Navigate to project: ${project.slug}`)}
                  >
                    <ExternalLink className="mr-2 h-4 w-4" />
                    View Project
                  </Button>
                  <Button 
                    variant="outline"
                    size="icon"
                    className="border-steel-blue/20 text-steel-blue hover:bg-steel-blue hover:text-white transition-all duration-300 rounded-lg"
                  >
                    <Github className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-2xl font-bold text-gray-900 mb-8 font-poppins text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-md overflow-hidden bg-white"
              >
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg font-bold text-gray-900 group-hover:text-steel-blue transition-colors duration-300 font-poppins">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-600 leading-relaxed text-sm">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-2 py-1 bg-gray-100 text-gray-700 rounded-full text-xs font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <Button 
                    variant="outline"
                    size="sm"
                    className="w-full border-steel-blue/20 text-steel-blue hover:bg-steel-blue hover:text-white transition-all duration-300"
                    onClick={() => console.log(`Navigate to project: ${project.slug}`)}
                  >
                    Learn More
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
