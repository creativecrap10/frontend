import React from 'react';
import { ArrowLeft, Eye, Heart, Clock, ExternalLink, Share2, Calendar, User, Star } from 'lucide-react';
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
    .slice(0, 4);

  return (
    <div className="min-h-screen bg-white">
      {/* Fixed Header */}
      <div className="sticky top-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onBack}
              className="flex items-center space-x-2 text-gray-600 hover:text-blue-600 transition-colors group"
            >
              <ArrowLeft className="h-5 w-5 group-hover:-translate-x-1 transition-transform" />
              <span className="font-medium">Back to Projects</span>
            </button>
            
            <div className="flex items-center space-x-3">
              <button className="p-2.5 text-gray-600 hover:text-red-500 hover:bg-red-50 rounded-full transition-all">
                <Heart className="h-5 w-5" />
              </button>
              <button className="p-2.5 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-full transition-all">
                <Share2 className="h-5 w-5" />
              </button>
              <button className="p-2.5 text-gray-600 hover:text-green-600 hover:bg-green-50 rounded-full transition-all">
                <ExternalLink className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Hero Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Project Header */}
        <div className="mb-12">
          {/* Featured Badge */}
          {project.featured && (
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-medium mb-6">
              <Star className="h-4 w-4" />
              <span>Featured Project</span>
            </div>
          )}

          {/* Title */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {project.title}
          </h1>

          {/* Meta Info */}
          <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
            <div className="flex items-center space-x-2">
              <Calendar className="h-4 w-4" />
              <span>{formatDate(project.date)}</span>
            </div>
            <div className="flex items-center space-x-2">
              <Eye className="h-4 w-4" />
              <span>{formatNumber(project.views)} views</span>
            </div>
            <div className="flex items-center space-x-2">
              <Heart className="h-4 w-4" />
              <span>{formatNumber(project.likes)} likes</span>
            </div>
            <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
              {project.category}
            </div>
          </div>

          {/* Description */}
          <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mb-8">
            {project.description}
          </p>

          {/* Tools */}
          <div className="flex flex-wrap gap-2">
            {project.tools.map((tool, index) => (
              <span
                key={index}
                className="bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium hover:bg-gray-200 transition-colors"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Main Cover Image */}
        <div className="mb-16">
          <div className="relative rounded-2xl overflow-hidden shadow-2xl">
            <img
              src={project.images[0] || project.thumbnail}
              alt={project.title}
              className="w-full h-[400px] lg:h-[600px] object-cover"
            />
          </div>
        </div>

        {/* Project Details Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-16">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            {project.problem && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Challenge</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.problem}</p>
              </section>
            )}

            {project.solution && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">The Solution</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.solution}</p>
              </section>
            )}

            {project.process && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Design Process</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.process}</p>
              </section>
            )}

            {project.results && (
              <section>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Results & Impact</h2>
                <p className="text-lg text-gray-700 leading-relaxed">{project.results}</p>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-8">
            {/* Project Stats */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Project Stats</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Views</span>
                  <span className="font-semibold text-gray-900">{formatNumber(project.views)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Likes</span>
                  <span className="font-semibold text-gray-900">{formatNumber(project.likes)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Category</span>
                  <span className="font-semibold text-gray-900">{project.category}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-gray-600">Date</span>
                  <span className="font-semibold text-gray-900">{formatDate(project.date)}</span>
                </div>
              </div>
            </div>

            {/* Tools Used */}
            <div className="bg-gray-50 rounded-2xl p-6">
              <h3 className="text-lg font-bold text-gray-900 mb-4">Tools Used</h3>
              <div className="space-y-2">
                {project.tools.map((tool, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                    <span className="text-gray-700">{tool}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Author Card */}
            <div className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-2xl p-6">
              <div className="flex items-center space-x-4 mb-4">
                <img
                  src={mockUser.avatar}
                  alt={mockUser.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-bold text-gray-900">{mockUser.name}</h3>
                  <p className="text-sm text-gray-600">UI/UX Designer</p>
                </div>
              </div>
              <p className="text-gray-700 text-sm mb-4">{mockUser.bio}</p>
              <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium">
                Follow
              </button>
            </div>
          </div>
        </div>

        {/* Additional Images Gallery */}
        {project.images.length > 1 && (
          <section className="mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Project Gallery</h2>
            <div className="space-y-8">
              {project.images.slice(1).map((image, index) => (
                <div key={index} className="rounded-2xl overflow-hidden shadow-lg">
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
      </div>

      {/* Related Projects */}
      {relatedProjects.length > 0 && (
        <div className="bg-gray-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">More Projects</h2>
              <p className="text-lg text-gray-600">Explore other projects in {project.category}</p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {relatedProjects.map((relatedProject) => (
                <div
                  key={relatedProject.id}
                  onClick={() => onProjectClick(relatedProject.id)}
                  className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 cursor-pointer overflow-hidden group"
                >
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={relatedProject.thumbnail}
                      alt={relatedProject.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <div className="text-xs text-blue-600 font-medium mb-2">{relatedProject.category}</div>
                    <h3 className="font-bold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors">
                      {relatedProject.title}
                    </h3>
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <div className="flex items-center space-x-3">
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