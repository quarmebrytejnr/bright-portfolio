import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

interface ProjectCardProps {
  project: {
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
  onViewDetails: (projectId: string) => void;
  className?: string;
}

export function ProjectCard({
  project,
  onViewDetails,
  className,
}: ProjectCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className={cn(
        "overflow-hidden project-card transition-transform duration-300 h-full",
        className
      )}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-category={project.category.toLowerCase().replace(/\s+/g, '-')}
    >
      <div className="relative h-48 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-300"
        />
        <div 
          className={cn(
            "absolute inset-0 bg-primary bg-opacity-60 flex items-center justify-center transition-opacity duration-300",
            isHovered ? "opacity-100" : "opacity-0"
          )}
        >
          <button 
            className="bg-white text-primary px-4 py-2 rounded-md font-medium hover:bg-gray-100"
            onClick={() => onViewDetails(project.id)}
          >
            View Details
          </button>
        </div>
      </div>
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-semibold text-primary dark:text-white">{project.title}</h3>
          <Badge variant="secondary" className="text-xs font-medium bg-secondary/10 text-secondary px-2 py-1 rounded-full">
            {project.category}
          </Badge>
        </div>
        <p className="text-gray-700 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <Badge key={index} variant="outline" className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400 rounded-md">
              {tech}
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
