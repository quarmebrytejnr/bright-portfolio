import { useState, useEffect } from "react";
import { ProjectCard } from "@/components/ui/project-card";
import { ProjectModal } from "@/components/ui/project-modal";
import { Button } from "@/components/ui/button";
import dashboard1 from "@/assets/dashboard1.svg";
import dashboard2 from "@/assets/dashboard2.svg";
import dashboard3 from "@/assets/dashboard3.svg";
import dashboard4 from "@/assets/dashboard4.svg";

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
    id: "publicis-oneview",
    title: "Publicis OneView",
    category: "Dashboard",
    description: "An end-to-end dashboard consolidating key digital and media metrics across platforms with automated data pipelines.",
    image: dashboard1,
    technologies: ["Power BI", "Azure", "Python", "MySQL", "Microsoft Fabric"],
    details: {
      fullDescription: "An end-to-end PowerBI dashboard consolidating key digital and media metrics across platforms with automated data pipeline management. This centralized reporting tool provides real-time access to critical KPIs for faster decision-making.",
      implementation: "Architected a cloud-based infrastructure on Azure, integrating multiple APIs and a MySQL database for efficient data pipeline management. Implemented automated data extraction and consolidation processes using Python and Microsoft Fabric.",
      impact: "Reduced manual reporting time by 70% for cross-functional teams and improved decision-making efficiency, resulting in a 25% increase in campaign optimization speed.",
      liveUrl: "#"
    }
  },
  {
    id: "ooh-monitoring",
    title: "OOH Monitoring Dashboard",
    category: "Dashboard",
    description: "Real-time monitoring dashboard for out-of-home advertising campaigns with geospatial visualization.",
    image: dashboard3,
    technologies: ["Power BI", "Geospatial", "ETL"],
    details: {
      fullDescription: "A comprehensive real-time monitoring system for out-of-home advertising campaigns with advanced geospatial visualization capabilities.",
      implementation: "Developed using Power BI with custom geospatial visualizations to track campaign performance across different geographical locations. Implemented automated ETL processes to integrate data from various sources.",
      impact: "Provided real-time visibility into campaign performance, allowing for immediate optimization and resulting in improved ROI for OOH advertising investments.",
      liveUrl: "#"
    }
  },
  {
    id: "revenue-forecast",
    title: "Revenue Forecast Project",
    category: "ML Model",
    description: "Predictive revenue forecasting system using time series analysis that contributed to 5% revenue growth.",
    image: dashboard2,
    technologies: ["ARIMA", "Python", "Azure Synapse", "Time Series"],
    details: {
      fullDescription: "A cross-functional project to develop and deploy a Machine Learning Model to predict direct revenue, improving financial planning and commercial decision-making.",
      implementation: "Led a team of 6 Data Analysts, Data Scientists, and Data Engineers to build the forecasting system. Applied regression modeling and time series models like ARIMA, deployed on Azure Synapse.",
      impact: "Promoted transparency and accountability while helping the FP&A and Commercial teams adequately prepare and improve commercial efforts, subsequently leading to a 5% growth in revenue.",
      liveUrl: "#"
    }
  },
  {
    id: "fraud-detection",
    title: "Fraud Detection Model",
    category: "ML Model",
    description: "ML model to identify and flag fraudulent transactions by agents on a digital payment platform, saving $62,500/month.",
    image: dashboard4,
    technologies: ["Neural Networks", "Logistic Regression", "Python", "Azure ML"],
    details: {
      fullDescription: "A fraud detection model designed to identify and flag fraudulent transactions by agents on the Vodafone Cash digital payment platform, significantly reducing financial losses.",
      implementation: "Led a team of Data Analysts and Revenue Assurance Specialists to develop the model. Used Neural Networks and Logistic Regression to build the model, which was later deployed as a Power BI embedded dashboard for operational teams.",
      impact: "Cut monthly expenditure by 30%, resulting in ~$62,500+ savings monthly, and helped improve the services on the platform by reducing fraudulent activities.",
      liveUrl: "#"
    }
  },
  {
    id: "digital-performance",
    title: "Digital Performance Dashboard",
    category: "Dashboard",
    description: "Comprehensive dashboard integrating data from Meta and YouTube to track campaign performance metrics.",
    image: dashboard1,
    technologies: ["Power BI", "Meta API", "YouTube API", "Python"],
    details: {
      fullDescription: "A comprehensive dashboard solution that integrates data from Meta and YouTube to provide a holistic view of digital campaign performance metrics.",
      implementation: "Utilized Google Analytics API and Python for efficient data extraction, implementing batch processing for large dataset management. Built custom connectors to Meta and YouTube APIs for real-time data ingestion.",
      impact: "Enabled marketers to make data-driven decisions by providing consolidated metrics from multiple platforms in a single view, improving campaign performance and ROI.",
      liveUrl: "#"
    }
  },
  {
    id: "afriqom-databoard",
    title: "Afriqom Databoard",
    category: "Data Engineering",
    description: "Enterprise Data Analytics SaaS for real-time tracking of agricultural products across the supply chain.",
    image: dashboard4,
    technologies: ["SaaS", "Real-time Analytics", "Azure", "Power BI"],
    details: {
      fullDescription: "An Enterprise Data Analytics Software as a Service platform designed for real-time tracking of agricultural products across the supply chain, providing valuable insights for agribusinesses.",
      implementation: "Developed a cloud-based infrastructure using Azure services for data processing and storage. Implemented real-time analytics capabilities with streaming data processing for up-to-the-minute insights.",
      impact: "Enabled agricultural businesses to make informed decisions based on real-time data, optimizing supply chain operations and reducing waste.",
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
