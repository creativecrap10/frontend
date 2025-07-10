import React, { useEffect } from 'react';
import { X, Eye, Heart, Share2, ExternalLink, Calendar, Star, ArrowLeft, ArrowRight } from 'lucide-react';
import { Project } from '../types';
import { mockUser, mockProjects } from '../data/mockData';

interface ProjectDetailModalProps {
  project: Project | null;
  isOpen: boolean;
  onClose: () => void;
  onProjectClick: (projectId: string) => void;
}

const ProjectDetailModal: React.FC<ProjectDetailModalProps> = ({ 
  project, 
  isOpen, 
  onClose, 
  onProjectClick 
}) => {
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (isOpen) {
      document.addEventListener('keydown', handleEscape);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen || !project) return null;

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const relatedProjects = mockProjects
    .filter(p => p.id !== project.id)
    .slice(0, 6);

  const currentIndex = mockProjects.findIndex(p => p.id === project.id);
  const nextProject = mockProjects[currentIndex + 1];
  const prevProject = mockProjects[currentIndex - 1];

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 flex justify-center items-start bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="relative w-[80%] p-6 bg-gray-900 rounded-xl overflow-y-auto text-white max-h-[100vh] scrollbar-thin scrollbar-thumb-gray-600 scrollbar-track-transparent">
        {/* Floating Action Icons */}
        <div className="fixed right-6 top-1/4 z-50 space-y-4">
          <button
            onClick={onClose}
            className="w-12 h-12 rounded-full bg-red-600 hover:bg-red-500 flex items-center justify-center"
          >
            <X size={20} className="text-white" />
          </button>
          {prevProject && (
            <button
              onClick={() => onProjectClick(prevProject.id)}
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
            >
              <ArrowLeft size={20} className="text-white" />
            </button>
          )}
          {nextProject && (
            <button
              onClick={() => onProjectClick(nextProject.id)}
              className="w-12 h-12 rounded-full bg-gray-700 hover:bg-gray-600 flex items-center justify-center"
            >
              <ArrowRight size={20} className="text-white" />
            </button>
          )}
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
            <Heart className="text-red-500" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
            <Share2 className="text-blue-500" />
          </button>
          <button className="w-12 h-12 rounded-full bg-white flex items-center justify-center hover:scale-110 transition">
            <ExternalLink className="text-green-500" />
          </button>
        </div>

        <div className="flex justify-between items-center mb-6">
          <div className="flex items-center gap-3">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <div className="font-bold text-white">{mockUser.name}</div>
              <div className="text-sm font-semibold text-gray-400">UI/UX Designer</div>
            </div>
          </div>
        </div>

        <div className="space-y-4">
          {project.images.map((img, i) => (
            <img
              key={i}
              src={img || project.thumbnail}
              alt={project.title}
              className="rounded-lg w-full h-auto object-cover"
            />
          ))}
        </div>

        <div className="mt-6 space-y-4">
          <h1 className="text-3xl font-bold text-white">{project.title}</h1>
          <div className="flex flex-wrap gap-4 text-sm text-gray-400">
            <span className="flex items-center gap-1"><Calendar size={16} /> {formatDate(project.date)}</span>
            <span className="flex items-center gap-1"><Eye size={16} /> {formatNumber(project.views)} views</span>
            <span className="flex items-center gap-1"><Heart size={16} /> {formatNumber(project.likes)} likes</span>
            <span className="bg-blue-500 text-white px-2 py-1 rounded-full text-xs">{project.category}</span>
          </div>
          <p className="text-lg text-gray-200 leading-relaxed">{project.description}</p>
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, idx) => (
              <span key={idx} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">{tool}</span>
            ))}
          </div>
        </div>

        <div className="mt-6 space-y-6">
          {project.problem && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">The Challenge</h2>
              <p className="text-gray-300">{project.problem}</p>
            </div>
          )}
          {project.solution && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">The Solution</h2>
              <p className="text-gray-300">{project.solution}</p>
            </div>
          )}
          {project.process && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Design Process</h2>
              <p className="text-gray-300">{project.process}</p>
            </div>
          )}
          {project.results && (
            <div>
              <h2 className="text-xl font-semibold text-white mb-2">Results & Impact</h2>
              <p className="text-gray-300">{project.results}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;
