import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProfileSection from './components/ProfileSection';
import ProjectGrid from './components/ProjectGrid';
import ProjectDetail from './components/ProjectDetail';
import AboutPage from './components/AboutPage';
import FeedPage from './components/FeedPage';
import BlogsPage from './components/BlogsPage';
import BlogDetail from './components/BlogDetail';
import ContactModal from './components/ContactModal'; // 👈 import it
import { mockUser, mockProjects, mockBlogPosts } from './data/mockData';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [selectedProjectId, setSelectedProjectId] = useState<string | null>(null);
  const [selectedBlogId, setSelectedBlogId] = useState<string | null>(null);
  const [isContactModalOpen, setIsContactModalOpen] = useState(false); // 👈 modal state

  const handleNavigate = (page: string) => {
    setCurrentPage(page);
    setSelectedProjectId(null);
    setSelectedBlogId(null);
  };

  const handleProjectClick = (projectId: string) => {
    setSelectedProjectId(projectId);
    setCurrentPage('project-detail');
  };

  const handleBlogClick = (blogId: string) => {
    setSelectedBlogId(blogId);
    setCurrentPage('blog-detail');
  };

  const handleBackToProjects = () => {
    setSelectedProjectId(null);
    setCurrentPage('home');
  };

  const handleBackToBlogs = () => {
    setSelectedBlogId(null);
    setCurrentPage('blogs');
  };

  const selectedProject = selectedProjectId 
    ? mockProjects.find(p => p.id === selectedProjectId)
    : null;

  const selectedBlog = selectedBlogId
    ? mockBlogPosts.find(b => b.id === selectedBlogId)
    : null;

  const renderContent = () => {
    if (currentPage === 'project-detail' && selectedProject) {
      return (
        <ProjectDetail
          project={selectedProject}
          onBack={handleBackToProjects}
          onProjectClick={handleProjectClick}
        />
      );
    }

    if (currentPage === 'blog-detail' && selectedBlog) {
      return (
        <BlogDetail
          blog={selectedBlog}
          onBack={handleBackToBlogs}
          onBlogClick={handleBlogClick}
        />
      );
    }

    switch (currentPage) {
      case 'about':
        return <AboutPage />;
      case 'feed':
        return <FeedPage />;
      case 'blogs':
        return <BlogsPage onBlogClick={handleBlogClick} />;
      case 'home':
      default:
        return (
          <>
            <ProfileSection user={mockUser} />
            <ProjectGrid projects={mockProjects} onProjectClick={handleProjectClick} />
          </>
        );
    }
  };

  const showFooter = !['project-detail', 'blog-detail'].includes(currentPage);

  return (
    <div className="min-h-screen bg-gray-50 relative">
      <Header 
        currentPage={currentPage} 
        onNavigate={handleNavigate} 
        setIsContactModalOpen={setIsContactModalOpen} // 👈 pass the handler
      />
      <main>
        {renderContent()}
      </main>
      {showFooter && <Footer />}

      {/* Modal rendered outside header */}
      <ContactModal 
        isOpen={isContactModalOpen} 
        onClose={() => setIsContactModalOpen(false)} 
      />
    </div>
  );
}

export default App;
