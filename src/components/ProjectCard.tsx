import React from 'react';
import { Code, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  codeUrl: string;
  demoUrl: string;
}

interface ProjectCardProps {
  project: Project;
  onClick: () => void;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onClick }) => {
  return (
    <div 
      className="bg-gradient-to-b from-purple-900/20 to-transparent border border-purple-500/20 rounded-2xl overflow-hidden hover:transform hover:scale-105 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/20 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-6 space-y-4">
        <h3 className="text-xl font-bold text-white">{project.title}</h3>
        
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span 
              key={index}
              className="text-xs px-3 py-1 bg-purple-600 text-white rounded-full"
            >
              {tech}
            </span>
          ))}
        </div>

        <div className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
          <img 
            src={project.image} 
            alt={project.title}
            className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
          />
        </div>

        <p className="text-gray-300 text-sm leading-relaxed">
          {project.description}
        </p>

        <div className="flex space-x-3 pt-4" onClick={(e) => e.stopPropagation()}>
          <a 
            href={project.codeUrl}
            className="flex items-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-2 rounded-full text-sm transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Code size={16} />
            <span>Code</span>
          </a>
          <a 
            href={project.demoUrl}
            className="flex items-center space-x-2 bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-full text-sm transition-colors duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <ExternalLink size={16} />
            <span>Explora AI</span>
          </a>
        </div>
        
        <div className="pt-2">
          <p className="text-purple-400 text-sm font-medium">Clique para ver mais detalhes →</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;