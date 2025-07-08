import React from 'react';
import { ArrowLeft, Eye, Heart, Clock, ExternalLink, Share2 } from 'lucide-react';
import { Project } from '../types';
import { mockUser, mockProjects } from '../data/mockData';

interface ProjectDetailProps {
  project: Project;
  onBack: () => void;
  onProjectClick: (projectId: string) => void;
}

const ProjectDetail: React.FC<ProjectDetailProps> = ({ project, onBack, onProjectClick }) => {
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
    .filter(p => p.id !== project.id && p.category === project.category)
    .slice(0, 3);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors"
            >
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Projects</span>
            </button>
            
            <div className="flex items-center space-x-4">
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-all">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="bg-gradient-to-br from-blue-50 to-purple-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-blue-800 text-sm font-medium px-4 py-2 rounded-full mb-4">
              {project.category}
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6">
              {project.title}
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
              {project.description}
            </p>
            
            {/* Stats */}
            <div className="flex justify-center space-x-8 mb-8">
              <div className="flex items-center space-x-2 text-gray-600">
                <Eye className="h-5 w-5" />
                <span className="font-medium">{formatNumber(project.views)} views</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Heart className="h-5 w-5" />
                <span className="font-medium">{formatNumber(project.likes)} likes</span>
              </div>
              <div className="flex items-center space-x-2 text-gray-600">
                <Clock className="h-5 w-5" />
                <span className="font-medium">{formatDate(project.date)}</span>
              </div>
            </div>

            {/* Tools */}
            <div className="flex flex-wrap justify-center gap-2">
              {project.tools.map((tool, index) => (
                <span
                  key={index}
                  className="bg-white text-gray-700 px-4 py-2 rounded-full text-sm font-medium shadow-sm"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Cover Image */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl">
          <img
            src={project.images[0] || project.thumbnail}
            alt={project.title}
            className="w-full h-96 lg:h-[600px] object-cover"
          />
        </div>
      </div>

      {/* Content Sections */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {project.problem && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Problem & Goal</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.problem}</p>
          </section>
        )}

        {project.solution && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Solution</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.solution}</p>
          </section>
        )}

        {project.process && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Design Process</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.process}</p>
          </section>
        )}

        {/* Additional Images */}
        {project.images.length > 1 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Design Showcase</h2>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-xl overflow-hidden shadow-lg">
                  <img
                    src={image}
                    alt={`${project.title} - Image ${index + 2}`}
                    className="w-full h-64 lg:h-80 object-cover"
                  />
                </div>
              ))}
            </div>
          </section>
        )}

        {project.results && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Results & Impact</h2>
            <p className="text-lg text-gray-700 leading-relaxed">{project.results}</p>
          </section>
        )}
      </div>

      {/* Author Section */}
      <div className="bg-white border-t border-gray-200">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-24 h-24 rounded-full object-cover"
            />
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{mockUser.name}</h3>
              <p className="text-gray-600 mb-4">{mockUser.bio}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                Follow
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Related Projects</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => onProjectClick(relatedProject.id)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden"
                >
                  <img
                    src={relatedProject.thumbnail}
                    alt={relatedProject.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="text-sm text-blue-600 font-medium mb-2">{relatedProject.category}</div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">{relatedProject.title}</h3>
                    <p className="text-gray-600 text-sm">{relatedProject.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail;