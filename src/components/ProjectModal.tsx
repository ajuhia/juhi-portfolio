
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
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

const ProjectModal = ({ project, isOpen, onClose }: ProjectModalProps) => {
  if (!project) return null;

  const projectDetails = {
    "tiktok-mental-health-analysis": {
      fullDescription: "This project leverages advanced Large Language Models (LLMs) including Gemini and Whisper to analyze TikTok content for mental health indicators. The system processes both video and audio content to detect patterns associated with depression and emotional distress, while also modeling user engagement through statistical learning techniques.",
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
      techStack: ["Google Gemini API", "OpenAI Whisper", "Python", "TensorFlow", "Pandas", "NumPy", "Scikit-learn"]
    },
    "voice-mental-wellness-assistant": {
      fullDescription: "An innovative voice-guided mental health support application that combines conversational AI with emotional intelligence. The system uses ElevenLabs for natural voice synthesis, n8n for workflow automation, and advanced NLP models to provide personalized mental wellness guidance and support.",
      challenges: [
        "Creating natural, empathetic voice interactions",
        "Ensuring user privacy and data security",
        "Integrating multiple AI services seamlessly",
        "Providing accurate mental health guidance without replacing professional care"
      ],
      results: [
        "Achieved 92% user satisfaction in beta testing",
        "Reduced response time to under 2 seconds",
        "Successfully integrated with 5+ mental health APIs",
        "Helped 500+ users in pilot program"
      ],
      techStack: ["n8n Workflow Automation", "Google Gemini", "ElevenLabs Voice AI", "OpenAI Whisper", "Node.js", "React", "PostgreSQL"]
    },
    "job-discovery-agent": {
      fullDescription: "An intelligent job matching and automated outreach system that analyzes resumes against job postings using advanced NLP techniques. The system automatically identifies the best job matches and facilitates recruiter outreach through integrated email automation.",
      challenges: [
        "Accurate resume-job matching algorithms",
        "Scaling email automation without spam issues",
        "Managing rate limits across multiple APIs",
        "Ensuring personalized outreach messages"
      ],
      results: [
        "Improved job matching accuracy by 65%",
        "Automated outreach to 1000+ recruiters",
        "Achieved 23% response rate from recruiters",
        "Reduced job search time by 40% for users"
      ],
      techStack: ["LangChain", "Groq API", "Gmail API", "Streamlit", "Python", "OpenAI GPT", "BeautifulSoup"]
    },
    "airline-visitor-forecasting": {
      fullDescription: "A comprehensive forecasting dashboard that predicts airline visitor patterns using SARIMA (Seasonal AutoRegressive Integrated Moving Average) models. The system processes historical flight data to generate accurate forecasts and presents insights through interactive Tableau visualizations.",
      challenges: [
        "Handling seasonal variations in airline data",
        "Managing large datasets with multiple time series",
        "Creating intuitive visualizations for stakeholders",
        "Ensuring model accuracy across different routes"
      ],
      results: [
        "Achieved 88% forecasting accuracy",
        "Processed 5+ years of historical data",
        "Created 15+ interactive dashboard views",
        "Helped airlines optimize capacity planning"
      ],
      techStack: ["Python", "Pandas", "Statsmodels", "Tableau", "NumPy", "Matplotlib", "Jupyter Notebooks"]
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
    },
    "airline-performance-analysis": {
      fullDescription: "A comprehensive analysis of airline operational performance using 3.65 million flight records. The project benchmarks various performance metrics and provides actionable insights for operational improvements through advanced data visualization and statistical analysis.",
      challenges: [
        "Processing massive datasets efficiently",
        "Identifying meaningful performance patterns",
        "Creating scalable visualization solutions",
        "Ensuring data quality across multiple sources"
      ],
      results: [
        "Processed 3.65M flight records successfully",
        "Identified 12 key performance bottlenecks",
        "Created automated reporting system",
        "Improved on-time performance insights by 35%"
      ],
      techStack: ["Python", "Pandas", "Tableau", "SQL", "NumPy", "Matplotlib", "Apache Spark"]
    },
    "loan-default-risk-modeling": {
      fullDescription: "A sophisticated risk assessment model that predicts loan default probability using ensemble methods including Random Forest and Logistic Regression. The system analyzes borrower characteristics and financial history to provide accurate risk assessments for lending decisions.",
      challenges: [
        "Handling imbalanced datasets with few defaults",
        "Feature engineering from financial data",
        "Ensuring regulatory compliance",
        "Balancing model accuracy with interpretability"
      ],
      results: [
        "Achieved 90% prediction accuracy",
        "Reduced false positive rate by 25%",
        "Processed 100,000+ loan applications",
        "Improved risk assessment speed by 80%"
      ],
      techStack: ["Python", "Scikit-learn", "Pandas", "NumPy", "XGBoost", "Matplotlib", "Seaborn"]
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
            {project.title}
          </DialogTitle>
        </DialogHeader>
        
        <div className="space-y-6">
          {/* Project Image */}
          <div className="relative h-64 overflow-hidden rounded-lg">
            <img 
              src={project.image} 
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
          </div>

          {/* Full Description */}
          <div>
            <h3 className="text-lg font-semibold text-maroon-700 mb-3">Project Overview</h3>
            <p className="text-slate-700 leading-relaxed">{details.fullDescription}</p>
          </div>

          {/* Tech Stack */}
          <div>
            <h3 className="text-lg font-semibold text-maroon-700 mb-3">Technology Stack</h3>
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

          {/* Challenges */}
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

          {/* Results */}
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

          {/* Action Buttons */}
          <div className="flex gap-4 pt-4 border-t">
            <Button 
              className="flex-1 bg-maroon-700 hover:bg-maroon-800 text-white"
              onClick={() => console.log(`View live project: ${project.slug}`)}
            >
              <ExternalLink className="mr-2 h-4 w-4" />
              View Live Project
            </Button>
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
