import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { Button } from "@/components/ui/button";

type ProjectCategory = "all" | "dashboard" | "ml" | "data-engineering";

type Project = {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  technologies: string[];
  details?: {
    fullDescription?: string;
    implementation?: string;
    impact?: string;
    liveUrl?: string;
  };
};

const projects: Project[] = [
  {
    id: "ooh-monitoring",
    title: "OOH Monitoring Dashboard",
    category: "Dashboard",
    description: "Real-time monitoring dashboard for out-of-home advertising campaigns with geospatial visualization and performance tracking.",
    image: "/attached_assets/Screenshot 2024-03-09 014646_1747952668859.png",
    technologies: ["Power BI", "Geospatial", "ETL", "Campaign Analytics"],
    details: {
      fullDescription: "A comprehensive real-time monitoring system for out-of-home advertising campaigns with advanced geospatial visualization capabilities. Features interactive maps showing campaign locations and detailed performance metrics.",
      implementation: "Developed using Power BI with custom geospatial visualizations to track campaign performance across different geographical locations. Implemented automated ETL processes to integrate data from various sources including location data and campaign metrics.",
      impact: "Provided real-time visibility into campaign performance, allowing for immediate optimization and resulting in improved ROI for OOH advertising investments. Enabled location-based decision making for campaign placement.",
      liveUrl: "#"
    }
  },
  {
    id: "digital-performance",
    title: "Digital Performance Dashboard",
    category: "Dashboard",
    description: "Comprehensive dashboard integrating data from Meta and YouTube to track campaign performance metrics and engagement.",
    image: "/attached_assets/Screenshot 2024-03-09 015200_1747952680482.png",
    technologies: ["Power BI", "Meta API", "YouTube API", "Python", "Social Analytics"],
    details: {
      fullDescription: "A comprehensive dashboard solution that integrates data from Meta and YouTube to provide a holistic view of digital campaign performance metrics including reach, engagement, and video views.",
      implementation: "Utilized Meta and YouTube APIs with Python for efficient data extraction, implementing batch processing for large dataset management. Built custom connectors for real-time data ingestion and automated reporting.",
      impact: "Enabled marketers to make data-driven decisions by providing consolidated metrics from multiple platforms in a single view, improving campaign performance and ROI by 25%.",
      liveUrl: "#"
    }
  },
  {
    id: "brand-social-listening",
    title: "Brand Social Listening Dashboard",
    category: "Dashboard",
    description: "AI-powered social listening dashboard tracking brand sentiment, engagement metrics, and competitive analysis.",
    image: "/attached_assets/Screenshot 2024-03-09 015402_1747952689286.png",
    technologies: ["Power BI", "Sentiment Analysis", "Social APIs", "NLP", "Competitive Intelligence"],
    details: {
      fullDescription: "An intelligent social listening platform that monitors brand mentions, sentiment analysis, and competitive positioning across social media platforms with advanced analytics and insights.",
      implementation: "Integrated multiple social media APIs with advanced sentiment analysis using NLP techniques. Built automated data pipelines to collect, process, and visualize social media mentions and engagement metrics.",
      impact: "Provided real-time brand health monitoring, enabling proactive reputation management and strategic decision-making. Improved response time to brand mentions by 80%.",
      liveUrl: "#"
    }
  },
  {
    id: "employee-timesheet",
    title: "Employee Timesheet Analysis",
    category: "Dashboard",
    description: "Comprehensive workforce analytics dashboard tracking employee productivity, target achievement, and resource utilization.",
    image: "/attached_assets/Screenshot 2025-04-14 171258_1747952875787.png",
    technologies: ["Power BI", "HR Analytics", "KPI Tracking", "Resource Management"],
    details: {
      fullDescription: "A detailed workforce analytics platform providing insights into employee productivity, target achievement rates, and resource utilization across different departments and projects.",
      implementation: "Developed comprehensive timesheet tracking system with automated data collection from multiple sources. Created advanced visualizations for target tracking, productivity analysis, and resource optimization.",
      impact: "Improved workforce productivity visibility by 90%, enabled better resource allocation decisions, and helped achieve 61.17% target completion rate across 65 employees.",
      liveUrl: "#"
    }
  },
  {
    id: "afriqom-enterprise-saas",
    title: "Enterprise Data Analytics SaaS Platform",
    category: "Data Engineering",
    description: "Comprehensive enterprise-grade SaaS platform built with Power BI for multi-client data analytics and reporting.",
    image: "/attached_assets/Screenshot 2025-04-20 151059_1747952962052.png",
    technologies: ["Power BI", "SaaS Architecture", "Multi-tenant", "Azure", "Enterprise Analytics"],
    details: {
      fullDescription: "A sophisticated enterprise-grade SaaS platform providing comprehensive data analytics capabilities for multiple clients with customizable dashboards and advanced reporting features.",
      implementation: "Architected a scalable multi-tenant SaaS solution using Power BI and Azure infrastructure. Implemented automated data pipelines, custom visualizations, and client-specific reporting capabilities.",
      impact: "Enabled multiple enterprises to access advanced analytics capabilities without infrastructure investment. Reduced reporting time by 75% and improved decision-making across client organizations.",
      liveUrl: "#"
    }
  },
  {
    id: "afriqom-agri-tracking",
    title: "Afriqom Agri Products Tracking",
    category: "Data Engineering",
    description: "Real-time tracking system for agricultural products across the supply chain with global market analytics.",
    image: "/attached_assets/Screenshot 2025-04-20 151929_1747952966262.png",
    technologies: ["Power BI", "Supply Chain Analytics", "Real-time Tracking", "IoT Integration", "Global Markets"],
    details: {
      fullDescription: "An advanced agricultural supply chain tracking system providing real-time visibility into product movement, quality metrics, and global market conditions for agricultural products.",
      implementation: "Developed a comprehensive tracking system integrating IoT sensors, GPS tracking, and market data APIs. Created real-time dashboards for supply chain visibility and predictive analytics for market trends.",
      impact: "Revolutionized agricultural supply chain transparency, reduced product losses by 30%, and enabled data-driven pricing decisions based on real-time market conditions.",
      liveUrl: "#"
    }
  }
];

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(projects);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [modalOpen, setModalOpen] = useState(false);

  useEffect(() => {
    if (activeCategory === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => 
          project.category.toLowerCase() === activeCategory.replace('-', ' ')
        )
      );
    }
  }, [activeCategory]);

  const handleViewDetails = (projectId: string) => {
    const project = projects.find(p => p.id === projectId);
    if (project) {
      setSelectedProject(project);
      setModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setModalOpen(false);
  };

  return (
    <section id="projects" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-primary dark:text-white">Featured Projects</h2>
          <div className="w-20 h-1 bg-secondary mx-auto mt-4 mb-6"></div>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Explore my portfolio of data analytics and engineering solutions.
          </p>
        </div>
        
        <div className="mb-8 flex justify-center">
          <div className="inline-flex rounded-md shadow-sm" role="group">
            <Button
              onClick={() => setActiveCategory("all")}
              variant={activeCategory === "all" ? "default" : "outline"}
              className={`px-5 py-2.5 text-sm font-medium rounded-l-lg ${
                activeCategory === "all" 
                  ? "bg-secondary text-white" 
                  : "bg-white dark:bg-gray-900 text-primary dark:text-gray-200"
              }`}
            >
              All Projects
            </Button>
            <Button
              onClick={() => setActiveCategory("dashboard")}
              variant={activeCategory === "dashboard" ? "default" : "outline"}
              className={`px-5 py-2.5 text-sm font-medium border-l-0 border-r-0 ${
                activeCategory === "dashboard" 
                  ? "bg-secondary text-white" 
                  : "bg-white dark:bg-gray-900 text-primary dark:text-gray-200"
              }`}
            >
              Dashboards
            </Button>
            <Button
              onClick={() => setActiveCategory("ml")}
              variant={activeCategory === "ml" ? "default" : "outline"}
              className={`px-5 py-2.5 text-sm font-medium border-l-0 border-r-0 ${
                activeCategory === "ml" 
                  ? "bg-secondary text-white" 
                  : "bg-white dark:bg-gray-900 text-primary dark:text-gray-200"
              }`}
            >
              ML Models
            </Button>
            <Button
              onClick={() => setActiveCategory("data-engineering")}
              variant={activeCategory === "data-engineering" ? "default" : "outline"}
              className={`px-5 py-2.5 text-sm font-medium rounded-r-lg ${
                activeCategory === "data-engineering" 
                  ? "bg-secondary text-white" 
                  : "bg-white dark:bg-gray-900 text-primary dark:text-gray-200"
              }`}
            >
              Data Engineering
            </Button>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onViewDetails={handleViewDetails}
            />
          ))}
        </div>
        
        <ProjectModal
          isOpen={modalOpen}
          onClose={handleCloseModal}
          project={selectedProject}
        />
      </div>
    </section>
  );
};

export default Projects;
