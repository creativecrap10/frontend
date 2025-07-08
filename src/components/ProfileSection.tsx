import React from 'react';
import { MapPin, Globe, Check, Users, FolderOpen, UserPlus, Dribbble, Linkedin, Twitter } from 'lucide-react';
import { User } from '../types';
import ContactModal from './ContactModal';

interface ProfileSectionProps {
  user: User;
}

const ProfileSection: React.FC<ProfileSectionProps> = ({ user }) => {
  const [isContactModalOpen, setIsContactModalOpen] = React.useState(false);

  const formatNumber = (num: number) => {
    if (num >= 1000000) {
      return (num / 1000000).toFixed(1) + 'M';
    } else if (num >= 1000) {
      return (num / 1000).toFixed(1) + 'K';
    }
    return num.toString();
  };

  return (
    <div className="bg-gradient-to-br from-blue-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-12">
          {/* Profile Image */}
          <div className="flex-shrink-0 mx-auto lg:mx-0 mb-8 lg:mb-0">
            <div className="relative">
              <div className="w-40 h-40 rounded-full bg-gradient-to-br from-blue-400 to-purple-600 p-1">
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full rounded-full object-cover"
                />
              </div>
              <div className="absolute bottom-2 right-2 bg-white rounded-full p-2 shadow-lg">
                <div className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                  <div className="w-2 h-2 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1 text-center lg:text-left">
            <div className="mb-6">
              <div className="flex items-center justify-center lg:justify-start space-x-3 mb-3">
                <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">{user.name}</h1>
                {user.verified && (
                  <div className="bg-blue-600 rounded-full p-1.5">
                    <Check className="h-5 w-5 text-white" />
                  </div>
                )}
              </div>
              <p className="text-xl text-gray-600 mb-4">UI/UX Designer & Visual Storyteller</p>
            </div>

            <p className="text-gray-700 text-lg mb-6 max-w-2xl leading-relaxed">{user.bio}</p>

            <div className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8 text-gray-600">
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-600" />
                <span>{user.location}</span>
              </div>
              <div className="flex items-center space-x-2">
                <Globe className="h-5 w-5 text-blue-600" />
                <a href={`https://${user.website}`} className="text-blue-600 hover:text-blue-800 transition-colors">
                  {user.website}
                </a>
              </div>
            </div>

            {/* Stats */}
            <div className="flex justify-center lg:justify-start space-x-12 mb-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{formatNumber(user.followers)}</div>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Followers</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{formatNumber(user.following)}</div>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <UserPlus className="h-4 w-4" />
                  <span className="text-sm">Following</span>
                </div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900 mb-1">{user.projects}</div>
                <div className="flex items-center justify-center space-x-1 text-gray-600">
                  <FolderOpen className="h-4 w-4" />
                  <span className="text-sm">Projects</span>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex justify-center lg:justify-start space-x-4 mb-8">
              <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <Dribbble className="h-5 w-5 text-pink-500" />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <Linkedin className="h-5 w-5 text-blue-600" />
              </a>
              <a href="#" className="p-3 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-1">
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <button 
                onClick={() => setIsContactModalOpen(true)}
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-blue-700 hover:to-purple-700 transition-all duration-200 font-medium shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
              >
                Hire Me
              </button>
              <button className="border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium">
                Download CV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
};

export default ProfileSection;