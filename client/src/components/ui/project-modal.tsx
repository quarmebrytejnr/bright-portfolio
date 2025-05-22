import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink } from "lucide-react";

interface ProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
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
  } | null;
}

export function ProjectModal({ isOpen, onClose, project }: ProjectModalProps) {
  if (!project) return null;

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl w-full max-h-[90vh] overflow-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-bold text-primary dark:text-white">
            {project.title}
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <div className="mb-6">
            <img 
              src={project.image} 
              alt={project.title} 
              className="w-full h-auto rounded-lg"
            />
          </div>
          <div className="space-y-4">
            <div>
              <Badge className="inline-block px-3 py-1 bg-secondary/10 text-secondary rounded-full">
                {project.category}
              </Badge>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-primary dark:text-white mb-2">Description</h4>
              <p className="text-gray-700 dark:text-gray-300">
                {project.details?.fullDescription || project.description}
              </p>
            </div>
            {project.details?.implementation && (
              <div>
                <h4 className="text-lg font-semibold text-primary dark:text-white mb-2">Implementation Details</h4>
                <p className="text-gray-700 dark:text-gray-300">{project.details.implementation}</p>
              </div>
            )}
            {project.details?.impact && (
              <div>
                <h4 className="text-lg font-semibold text-primary dark:text-white mb-2">Results & Impact</h4>
                <p className="text-gray-700 dark:text-gray-300">{project.details.impact}</p>
              </div>
            )}
            <div className="flex flex-wrap gap-2 pt-2">
              <h4 className="text-sm font-semibold text-primary dark:text-white w-full mb-1">Technologies:</h4>
              {project.technologies.map((tech, index) => (
                <Badge key={index} variant="outline" className="px-2 py-1 bg-gray-100 dark:bg-gray-800 text-xs font-medium text-gray-600 dark:text-gray-400">
                  {tech}
                </Badge>
              ))}
            </div>
            {project.details?.liveUrl && (
              <div className="pt-4">
                <a 
                  href={project.details.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="inline-flex items-center px-4 py-2 bg-secondary text-white rounded hover:bg-secondary/90"
                >
                  <ExternalLink className="mr-2 h-4 w-4" /> View Live Dashboard
                </a>
              </div>
            )}
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={onClose}>Close</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
