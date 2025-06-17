
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { ExternalLink, Github, X } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tools: string[];
  slug: string;
  featured: boolean;
  image: string;
  fullDescription?: string;
  challenges?: string[];
  results?: string[];
  techStack?: string[];
}

interface ProjectModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
}

interface ProjectDetails {
  fullDescription: string;
  subtitle?: string;
  modelingApproach?: string;
  keyFeatures?: string[];
  toolsAndTechniques?: string | string[];
  challenges: string[];
  results: string[];
  impactAndUseCase?: string;
  techStack: string[];
  dashboardLink?: string;
  overview?: string;
  approach?: string;
}

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const projectDetails: Record<string, ProjectDetails> = {
    "tiktok-mental-health-analysis": {
      fullDescription: "This project explores the intersection of mental health, social media, and artificial intelligence. Using a curated dataset of TikTok videos related to depression, the goal was to assess how emotional and psychological signals expressed through video, audio, and text influence viewer engagement. By leveraging the power of multimodal large language models (LLMs), the study aimed to detect mental health cues and understand the dynamics of audience interaction with emotionally charged content.",
      modelingApproach: "Engagement trends such as likes, comments, and shares were analyzed in relation to video content, user characteristics, and AI-derived emotional signals. Custom prompting strategies were developed to extract nuanced insights from multimodal data. The analysis combined traditional features with deep emotional indicators to identify patterns linked to viewer interaction and response.",
      toolsAndTechniques: [
        "Multimodal LLMs (Gemini 2.0 Flash) for structured emotion and symptom extraction",
        "Exploratory Data Analysis and demographic profiling",
        "Python, Pandas, Scikit-learn, Seaborn, and other python libraries",
        "Statistical learning models for engagement prediction",
        "Custom prompting strategies for emotion detection",
        "Ethical AI practices for mental health content analysis"
      ],
      challenges: [
        "Processing multimodal data (video, audio, text) at scale",
        "Ensuring ethical AI practices in mental health detection",
        "Balancing accuracy with privacy concerns",
        "Handling real-time data processing from social media platforms"
      ],
      results: [
        "Successfully identified depression indicators with 85% accuracy",
        "Processed over 10,000 TikTok videos for analysis",
        "Developed engagement prediction model with 78% precision",
        "Created ethical guidelines for mental health AI applications"
      ],
      techStack: ["Google Gemini 2.0 Flash", "Python", "Pandas", "NumPy", "Scikit-learn", "Seaborn"]
    },
    "empathia-voice-resume-builder": {
      fullDescription: "Empathia is an AI-powered job application assistant designed to support individuals — especially those with accessibility needs — in building professional resumes and cover letters through natural voice interaction. The assistant guides users through a structured, spoken dialogue and transforms their responses into job-ready documents without the need for manual typing or formatting.",
      subtitle: "Enabling inclusive, voice-driven resume and cover letter generation through conversational AI",
      overview: "Empathia is an AI-powered job application assistant designed to support individuals — especially those with accessibility needs — in building professional resumes and cover letters through natural voice interaction. The assistant guides users through a structured, spoken dialogue and transforms their responses into job-ready documents without the need for manual typing or formatting.",
      approach: "This project was built with a modular, voice-first design philosophy. It leverages conversational AI, automation workflows, and large language models to streamline the resume and cover letter creation process. The focus was on delivering a seamless, inclusive experience for users who benefit from voice-enabled tools and accessible document generation.",
      keyFeatures: [
        "Voice-Based Interaction: Users speak their answers through a friendly conversational flow",
        "Automated Document Generation: Produces tailored resumes and cover letters from user input",
        "Inclusive Accessibility Focus: Designed with cognitive, visual, and motor accessibility in mind",
        "Multi-Agent System: Orchestrates document creation using specialized AI components",
        "Output Delivery: Final documents are formatted and sent to the user for immediate use"
      ],
      impactAndUseCase: "Empathia makes resume-building more accessible for job seekers with cognitive, visual, or mobility challenges by replacing complex forms with a patient, guided voice interaction. It empowers users to focus on what they can do and how they contribute — not on what they need to overcome.",
      challenges: [],
      results: [],
      techStack: ["n8n Workflow Automation", "ElevenLabs Voice AI", "GPT-4.0 API", "Custom LLM Prompt Engineering", "Voice UI Design", "DOC Generation"]
    },
    "airline-performance-analysis": {
      fullDescription: "Delays and cancellations are among the most disruptive aspects of air travel — but what if we could understand *where* and *why* they occur? This dashboard analyzes one year of Alaska Airlines' flight performance data to uncover hidden patterns in delays and cancellations. Presented as an interactive Tableau Story, it provides a clear, narrative-driven view of operational performance, helping both airline stakeholders and travelers gain actionable insight.",
      subtitle: "Uncovering delay and cancellation patterns from over 1 million flight records",
      overview: "Delays and cancellations are among the most disruptive aspects of air travel — but what if we could understand *where* and *why* they occur? This dashboard analyzes one year of Alaska Airlines' flight performance data to uncover hidden patterns in delays and cancellations. Presented as an interactive Tableau Story, it provides a clear, narrative-driven view of operational performance, helping both airline stakeholders and travelers gain actionable insight.",
      approach: "I worked with a dataset of over **1 million flight records**, cleaning and preprocessing it using **Python** to ensure consistency and accuracy. Using **Tableau**, I designed a multi-step Story that presents flight performance trends, delay causes, and monthly variations in a structured, visual format. Each page builds on the previous to guide users through Alaska Airlines' operational metrics in a clear, digestible way.",
      keyFeatures: [
        "Performance Summary: Total flights, on-time arrivals, delays, and cancellations",
        "Monthly Trends: Visualization of Alaska Airlines' performance across the calendar year",
        "Delay Cause Breakdown: Categorization of delays (carrier, weather, NAS, security, late aircraft)",
        "Cancellations Overview: Month-wise analysis of cancellation rates",
        "Competitor Comparison: Alaska benchmarked against other airlines at key origin airports",
        "Narrative-Driven Insights: Structured Tableau Story with guided, non-filtered exploration"
      ],
      impactAndUseCase: "The final dashboard offers a data-backed view of Alaska Airlines' reliability over time. It helps identify operational bottlenecks, benchmark against competitors, and inform improvement strategies. By combining large-scale data processing in Python with Tableau's storytelling capabilities, this project transforms raw flight data into a tool for strategic decision-making.",
      challenges: [
        "Processing massive datasets efficiently",
        "Identifying meaningful performance patterns",
        "Creating scalable visualization solutions",
        "Ensuring data quality across multiple sources"
      ],
      results: [
        "Processed 1M+ flight records successfully",
        "Identified key performance bottlenecks",
        "Created automated reporting system",
        "Improved on-time performance insights"
      ],
      techStack: ["Python", "Tableau"],
      dashboardLink: "https://public.tableau.com/app/profile/juhi.anand/viz/Alaskaon-timeperformance/Story1"
    },
    "prostate-cancer-survival-prediction": {
      fullDescription: "A machine learning model designed to predict 7-year survival outcomes for prostate cancer patients. The system uses advanced regression techniques and comprehensive patient data analysis to provide accurate prognosis predictions for medical professionals.",
      challenges: [
        "Handling sensitive medical data with strict privacy requirements",
        "Dealing with imbalanced datasets",
        "Ensuring model interpretability for medical use",
        "Validating results with medical professionals"
      ],
      results: [
        "Achieved 88% prediction accuracy",
        "Analyzed data from 5,000+ patients",
        "Reduced prediction time from days to minutes",
        "Validated by oncology experts"
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter Notebooks"]
    }
  };

  const details = projectDetails[project.slug as keyof typeof projectDetails] || {
    fullDescription: project.description,
    challenges: ["Coming soon..."],
    results: ["Coming soon..."],
    techStack: project.tools
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-slate-900 font-poppins mb-4">
            {project.slug === "empathia-voice-resume-builder" ? "Empathia – AI-Powered Job Application Assistant" : 
             project.slug === "airline-performance-analysis" ? "Alaska Airlines – On-Time Performance Dashboard" :
             project.title}
          </DialogTitle>
          {details.subtitle && (
            <p className="text-lg text-slate-600 mb-4">{details.subtitle}</p>
          )}
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image - Enhanced for Empathia with proper aspect ratio control */}
          <div className="relative overflow-hidden rounded-lg">
            {project.slug === "empathia-voice-resume-builder" ? (
              <AspectRatio ratio={16 / 9} className="bg-muted">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-contain rounded-lg"
                  style={{ maxHeight: 'none' }}
                />
              </AspectRatio>
            ) : project.slug === "tiktok-mental-health-analysis" ? (
              <img 
                src={project.image} 
                alt={project.title}
                className="w-full h-auto object-contain"
              />
            ) : (
              <div className="relative h-64">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
              </div>
            )}
          </div>

          {/* Project Overview */}
          <div>
            <h3 className="text-lg font-semibold text-maroon-700 mb-3">
              {project.slug === "empathia-voice-resume-builder" ? "Project Overview" : "Overview"}
            </h3>
            <p className="text-slate-700 leading-relaxed">
              {details.overview || details.fullDescription}
            </p>
          </div>

          {/* Approach */}
          {(project.slug === "empathia-voice-resume-builder" || project.slug === "airline-performance-analysis") && details.approach && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">Approach</h3>
              <p className="text-slate-700 leading-relaxed">{details.approach}</p>
            </div>
          )}

          {/* Modeling Approach (for TikTok project) */}
          {project.slug === "tiktok-mental-health-analysis" && details.modelingApproach && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">Modeling Approach</h3>
              <p className="text-slate-700 leading-relaxed">{details.modelingApproach}</p>
            </div>
          )}

          {/* Tools & Techniques (for TikTok project) */}
          {project.slug === "tiktok-mental-health-analysis" && details.toolsAndTechniques && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">Tools & Techniques</h3>
              {Array.isArray(details.toolsAndTechniques) ? (
                <ul className="space-y-2">
                  {details.toolsAndTechniques.map((technique, index) => (
                    <li key={index} className="flex items-start">
                      <span className="text-maroon-700 mr-2">•</span>
                      <span className="text-slate-700">{technique}</span>
                    </li>
                  ))}
                </ul>
              ) : (
                <p className="text-slate-700 leading-relaxed">{details.toolsAndTechniques}</p>
              )}
            </div>
          )}

          {/* Key Features */}
          {details.keyFeatures && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">Key Features</h3>
              <ul className="space-y-3">
                {details.keyFeatures.map((feature, index) => (
                  <li key={index} className="text-slate-700 leading-relaxed">
                    {project.slug === "empathia-voice-resume-builder" ? (
                      <>
                        <strong className="text-slate-900">{feature.split(':')[0]}:</strong>
                        {feature.split(':').slice(1).join(':')}
                      </>
                    ) : (
                      <div className="flex items-start">
                        <span className="text-maroon-700 mr-2">•</span>
                        <span>{feature}</span>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Impact & Use Case */}
          {details.impactAndUseCase && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">
                {project.slug === "airline-performance-analysis" ? "Impact / Outcome" : "Impact & Use Case"}
              </h3>
              <p className="text-slate-700 leading-relaxed">{details.impactAndUseCase}</p>
            </div>
          )}

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-maroon-700 mb-3">
              {project.slug === "empathia-voice-resume-builder" ? "Technology Stack" : "Tech Stack"}
            </h3>
            <div className="flex flex-wrap gap-2">
              {details.techStack.map((tech, index) => (
                <span 
                  key={index}
                  className="px-3 py-1 bg-steel-blue-100 text-steel-blue-700 rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Challenges - excluded for TikTok and Empathia projects */}
          {project.slug !== "tiktok-mental-health-analysis" && project.slug !== "empathia-voice-resume-builder" && details.challenges.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">Key Challenges</h3>
              <ul className="space-y-2">
                {details.challenges.map((challenge, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-maroon-700 mr-2">•</span>
                    <span className="text-slate-700">{challenge}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Results - excluded for TikTok and Empathia projects */}
          {project.slug !== "tiktok-mental-health-analysis" && project.slug !== "empathia-voice-resume-builder" && details.results.length > 0 && (
            <div>
              <h3 className="text-lg font-semibold text-maroon-700 mb-3">Key Results</h3>
              <ul className="space-y-2">
                {details.results.map((result, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-steel-blue-600 mr-2">✓</span>
                    <span className="text-slate-700">{result}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            {project.slug === "airline-performance-analysis" && details.dashboardLink ? (
              <Button 
                className="flex-1 bg-maroon-700 hover:bg-maroon-800 text-white"
                onClick={() => window.open(details.dashboardLink, '_blank')}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Dashboard
              </Button>
            ) : (
              <Button 
                className="flex-1 bg-maroon-700 hover:bg-maroon-800 text-white"
                onClick={() => console.log(`View live project: ${project.slug}`)}
              >
                <ExternalLink className="mr-2 h-4 w-4" />
                View Live Project
              </Button>
            )}
            <Button 
              variant="outline"
              className="border-steel-blue-600 text-steel-blue-600 hover:bg-steel-blue-600 hover:text-white"
              onClick={() => console.log(`View source code: ${project.slug}`)}
            >
              <Github className="mr-2 h-4 w-4" />
              Source Code
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectModal;
