import React from 'react';
import { X, Github, ExternalLink, Calendar, Users, Star } from 'lucide-react';

export interface ProjectDetails {
    title: string;
    description: string;
    longDescription: string;
    technologies: string[];
    image: string;
    images: string[];
    codeUrl: string;
    demoUrl: string;
    features: string[];
    challenges: string[];
    duration: string;
    team: string;
    status: string;
}

interface ProjectModalProps {
    project: ProjectDetails | null;
    isOpen: boolean;
    onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, isOpen, onClose }) => {
    if (!isOpen || !project) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/80 backdrop-blur-sm"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-purple-500/20">
                {/* Header */}
                <div className="sticky top-0 bg-gray-900/95 backdrop-blur-sm border-b border-purple-500/20 p-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-800 rounded-full transition-colors duration-300"
                    >
                        <X size={24} className="text-gray-400" />
                    </button>
                </div>

                <div className="p-6 space-y-8">
                    {/* Project Images */}
                    <div className="grid md:grid-cols-2 gap-4">
                        {project.images.map((image, index) => (
                            <div key={index} className="aspect-video bg-gray-800 rounded-lg overflow-hidden">
                                <img
                                    src={image}
                                    alt={`${project.title} - Imagem ${index + 1}`}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Project Info */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="md:col-span-2 space-y-6">
                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Sobre o Projeto</h3>
                                <p className="text-gray-300 leading-relaxed">{project.longDescription}</p>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Principais Funcionalidades</h3>
                                <ul className="space-y-2">
                                    {project.features.map((feature, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <Star size={16} className="text-purple-500 mt-1 flex-shrink-0" />
                                            <span className="text-gray-300">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h3 className="text-xl font-semibold text-white mb-3">Desafios Superados</h3>
                                <ul className="space-y-2">
                                    {project.challenges.map((challenge, index) => (
                                        <li key={index} className="flex items-start space-x-2">
                                            <div className="w-2 h-2 bg-pink-500 rounded-full mt-2 flex-shrink-0" />
                                            <span className="text-gray-300">{challenge}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-3">Tecnologias</h3>
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
                            </div>

                            <div className="space-y-4">
                                <div className="flex items-center space-x-3">
                                    <Calendar size={18} className="text-purple-500" />
                                    <div>
                                        <p className="text-sm text-gray-400">Duração</p>
                                        <p className="text-white">{project.duration}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <Users size={18} className="text-purple-500" />
                                    <div>
                                        <p className="text-sm text-gray-400">Equipe</p>
                                        <p className="text-white">{project.team}</p>
                                    </div>
                                </div>

                                <div className="flex items-center space-x-3">
                                    <div className="w-4 h-4 bg-green-500 rounded-full" />
                                    <div>
                                        <p className="text-sm text-gray-400">Status</p>
                                        <p className="text-white">{project.status}</p>
                                    </div>
                                </div>
                            </div>

                            <div className="space-y-3 pt-4">
                                <a
                                    href={project.codeUrl}
                                    className="flex items-center justify-center space-x-2 bg-gray-800 hover:bg-gray-700 px-4 py-3 rounded-lg text-sm transition-colors duration-300 w-full"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <Github size={18} />
                                    <span>Ver Código</span>
                                </a>
                                <a
                                    href={project.demoUrl}
                                    className="flex items-center justify-center space-x-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 px-4 py-3 rounded-lg text-sm transition-colors duration-300 w-full"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    <ExternalLink size={18} />
                                    <span>Ver Demo</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjectModal;
