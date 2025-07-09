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
  // Handle escape key
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
      className="fixed inset-0 z-50 overflow-y-auto bg-black/80 backdrop-blur-sm"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen px-4 py-8">
        <div 
          className="relative bg-white rounded-2xl shadow-2xl max-w-6xl mx-auto animate-scaleIn"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 rounded-t-2xl z-10">
            <div className="flex items-center justify-between p-6">
              <div className="flex items-center space-x-4">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-semibold text-gray-900">{mockUser.name}</h3>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-2">
                {/* Navigation arrows */}
                {prevProject && (
                  <button
                    onClick={() => onProjectClick(prevProject.id)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                    title="Previous project"
                  >
                    <ArrowLeft className="h-5 w-5" />
                  </button>
                )}
                {nextProject && (
                  <button
                    onClick={() => onProjectClick(nextProject.id)}
                    className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all"
                    title="Next project"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </button>
                )}
                
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                
                <button className="p-2 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all">
                  <Heart className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                  <Share2 className="h-5 w-5" />
                </button>
                <button className="p-2 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-all">
                  <ExternalLink className="h-5 w-5" />
                </button>
                
                <div className="w-px h-6 bg-gray-300 mx-2"></div>
                
                <button
                  onClick={onClose}
                  className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full transition-all"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Content */}
          <div className="max-h-[80vh] overflow-y-auto">
            {/* Hero Section */}
            <div className="p-8 pb-6">
              {/* Featured Badge */}
              {project.featured && (
                <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1.5 rounded-full text-sm font-medium mb-4">
                  <Star className="h-3 w-3" />
                  <span>Featured</span>
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 leading-tight">
                {project.title}
              </h1>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-6">
                <div className="flex items-center space-x-1">
                  <Calendar className="h-4 w-4" />
                  <span>{formatDate(project.date)}</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Eye className="h-4 w-4" />
                  <span>{formatNumber(project.views)} views</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Heart className="h-4 w-4" />
                  <span>{formatNumber(project.likes)} likes</span>
                </div>
                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium">
                  {project.category}
                </div>
              </div>

              {/* Description */}
              <p className="text-lg text-gray-700 leading-relaxed mb-6">
                {project.description}
              </p>

              {/* Tools */}
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tools.map((tool, index) => (
                  <span
                    key={index}
                    className="bg-gray-100 text-gray-700 px-3 py-1.5 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            {/* Cover Image */}
            <div className="px-8 mb-8">
              <div className="relative rounded-xl overflow-hidden shadow-lg">
                <img
                  src={project.images[0] || project.thumbnail}
                  alt={project.title}
                  className="w-full h-64 lg:h-96 object-cover"
                />
              </div>
            </div>

            {/* Content Sections */}
            <div className="px-8 space-y-8 mb-8">
              {project.problem && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">The Challenge</h2>
                  <p className="text-gray-700 leading-relaxed">{project.problem}</p>
                </section>
              )}

              {project.solution && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">The Solution</h2>
                  <p className="text-gray-700 leading-relaxed">{project.solution}</p>
                </section>
              )}

              {project.process && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Design Process</h2>
                  <p className="text-gray-700 leading-relaxed">{project.process}</p>
                </section>
              )}

              {/* Additional Images */}
              {project.images.length > 1 && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-6">Project Gallery</h2>
                  <div className="space-y-6">
                    {project.images.slice(1).map((image, index) => (
                      <div key={index} className="rounded-xl overflow-hidden shadow-md">
                        <img
                          src={image}
                          alt={`${project.title} - Image ${index + 2}`}
                          className="w-full h-auto object-cover"
                        />
                      </div>
                    ))}
                  </div>
                </section>
              )}

              {project.results && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-3">Results & Impact</h2>
                  <p className="text-gray-700 leading-relaxed">{project.results}</p>
                </section>
              )}
            </div>

            {/* Project Details Sidebar Info */}
            <div className="px-8 mb-8">
              <div className="bg-gray-50 rounded-xl p-6">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Role</h4>
                    <p className="text-gray-900 font-medium">UI/UX Designer</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Year</h4>
                    <p className="text-gray-900 font-medium">{new Date(project.date).getFullYear()}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Duration</h4>
                    <p className="text-gray-900 font-medium">2-3 weeks</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-600 mb-1">Category</h4>
                    <p className="text-gray-900 font-medium">{project.category}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* More Projects */}
            <div className="border-t border-gray-100 p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-gray-900">More Projects by Me</h2>
                <button
                  onClick={onClose}
                  className="text-blue-600 hover:text-blue-800 font-medium text-sm"
                >
                  View All Projects
                </button>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {relatedProjects.map((relatedProject) => (
                  <div
                    key={relatedProject.id}
                    onClick={() => onProjectClick(relatedProject.id)}
                    className="group cursor-pointer"
                  >
                    <div className="relative aspect-[4/3] rounded-lg overflow-hidden mb-3">
                      <img
                        src={relatedProject.thumbnail}
                        alt={relatedProject.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </div>
                    <h3 className="font-medium text-gray-900 text-sm group-hover:text-blue-600 transition-colors line-clamp-2">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center space-x-3 text-xs text-gray-600 mt-1">
                      <div className="flex items-center space-x-1">
                        <Eye className="h-3 w-3" />
                        <span>{formatNumber(relatedProject.views)}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="h-3 w-3" />
                        <span>{formatNumber(relatedProject.likes)}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailModal;