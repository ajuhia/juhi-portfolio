
import React, { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';
import ProjectModal from './ProjectModal';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const projects = [
    {
      title: "TikTok Mental Health Analysis",
      description: "Detected depression and emotional indicators using LLMs; modeled engagement via statistical learning.",
      tools: ["Gemini", "Python"],
      slug: "tiktok-mental-health-analysis",
      featured: true,
      image: "/lovable-uploads/a7d0a835-7259-40e1-b7b1-67ef17ad79a3.png"
    },
    {
      title: "Empathia – AI-Powered Job Application Assistant",
      description: "Enabling inclusive, voice-driven resume and cover letter generation through conversational AI.",
      tools: ["n8n", "ElevenLabs", "GPT-4.0 API"],
      slug: "empathia-voice-resume-builder",
      featured: true,
      image: "/lovable-uploads/17e6d107-cee5-4dc9-be1c-62265da9372f.png"
    },
    {
      title: "Airline Performance Analysis",
      description: "Analyzed 1M+ Alaska Airlines flights to uncover delay and cancellation trends.",
      tools: ["Python", "Tableau"],
      slug: "airline-performance-analysis",
      featured: false,
      image: "/lovable-uploads/e132e6dc-7610-4d84-a49f-36fa35ca6a9c.png"
    },
    {
      title: "Prostate Cancer Survival Prediction",
      description: "Created 7-year outcome prediction model using regression with 88% accuracy.",
      tools: ["Python", "EDA", "Regression"],
      slug: "prostate-cancer-survival-prediction",
      featured: false,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=400&h=250&fit=crop"
    }
  ];

  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  const handleViewProject = (project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedProject(null);
  };

  return (
    <>
      <section id="projects" className="py-24 bg-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_25%_25%,rgba(162,60,60,0.1),transparent_50%)]"></div>
          <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_75%_75%,rgba(106,155,189,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-4 font-poppins">Featured Projects</h2>
              <div className="w-32 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 mx-auto rounded-full"></div>
            </div>
            <p className="text-xl text-slate-600 mt-6 max-w-3xl mx-auto">
              Innovative solutions at the intersection of data science, AI, and real-world impact
            </p>
          </div>

          {/* Featured Projects */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredProjects.map((project, index) => (
              <Card 
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:scale-105 cursor-pointer border-0 shadow-lg overflow-hidden bg-white relative"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-maroon-50/50 to-steel-blue-50/50 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
                </div>
                
                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <CardTitle className="text-xl font-bold text-slate-900 group-hover:text-maroon-700 transition-colors duration-300 font-poppins mb-3">
                        {project.title}
                      </CardTitle>
                      <div className="w-12 h-1 bg-gradient-to-r from-maroon-700 to-steel-blue-500 rounded-full mb-4"></div>
                    </div>
                    <div className="bg-maroon-100 p-2 rounded-lg">
                      <ExternalLink className="h-5 w-5 text-maroon-700" />
                    </div>
                  </div>
                  <CardDescription className="text-slate-600 leading-relaxed text-base">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="relative z-10">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tools.map((tool, toolIndex) => (
                      <span 
                        key={toolIndex}
                        className="px-3 py-1 bg-slate-100/80 backdrop-blur-sm text-slate-700 rounded-full text-sm font-medium border border-slate-200/50 hover:border-maroon-300 transition-colors duration-300"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button 
                      variant="outline"
                      className="flex-1 border-maroon-200 text-maroon-700 hover:bg-maroon-700 hover:text-white transition-all duration-300 rounded-lg"
                      onClick={() => handleViewProject(project)}
                    >
                      <ExternalLink className="mr-2 h-4 w-4" />
                      Learn More
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Other Projects */}
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8 font-poppins text-center">Other Projects</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherProjects.map((project, index) => (
                <Card 
                  key={index}
                  className="group hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer border-0 shadow-md overflow-hidden bg-white"
                >
                  {/* Project Image */}
                  <div className="relative h-32 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                  
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg font-bold text-slate-900 group-hover:text-maroon-700 transition-colors duration-300 font-poppins">
                      {project.title}
                    </CardTitle>
                    <CardDescription className="text-slate-600 leading-relaxed text-sm">
                      {project.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tools.map((tool, toolIndex) => (
                        <span 
                          key={toolIndex}
                          className="px-2 py-1 bg-slate-100 text-slate-700 rounded-full text-xs font-medium"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full border-maroon-200 text-maroon-700 hover:bg-maroon-700 hover:text-white transition-all duration-300"
                      onClick={() => handleViewProject(project)}
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

      <ProjectModal 
        project={selectedProject}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
      />
    </>
  );
};

export default Projects;
