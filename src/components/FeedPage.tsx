import React, { useState } from 'react';
import { Heart, MessageCircle, Share2, MoreHorizontal, Image as ImageIcon, Type } from 'lucide-react';
import { mockFeedPosts, mockUser } from '../data/mockData';
import { FeedPost } from '../types';

const FeedPage = () => {
  const [posts, setPosts] = useState(mockFeedPosts);
  const [newPost, setNewPost] = useState('');
  const [postType, setPostType] = useState<'text' | 'image'>('text');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return '1 day ago';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.ceil(diffDays / 7)} weeks ago`;
    return `${Math.ceil(diffDays / 30)} months ago`;
  };

  const handleLike = (postId: string) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, likes: post.likes + 1 }
        : post
    ));
  };

  const handleNewPost = () => {
    if (newPost.trim()) {
      const post: FeedPost = {
        id: Date.now().toString(),
        type: postType,
        content: newPost,
        likes: 0,
        comments: 0,
        date: new Date().toISOString()
      };
      setPosts([post, ...posts]);
      setNewPost('');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">My Design Feed</h1>
          <p className="text-lg text-gray-600">Daily thoughts, sketches, and design inspiration</p>
        </div>

        {/* Create Post */}
        <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
          <div className="flex items-start space-x-4">
            <img
              src={mockUser.avatar}
              alt={mockUser.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div className="flex-1">
              <textarea
                value={newPost}
                onChange={(e) => setNewPost(e.target.value)}
                placeholder="Share your thoughts, sketches, or design insights..."
                className="w-full p-4 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                rows={3}
              />
              <div className="flex items-center justify-between mt-4">
                <div className="flex space-x-2">
                  <button
                    onClick={() => setPostType('text')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      postType === 'text' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <Type className="h-4 w-4" />
                    <span>Text</span>
                  </button>
                  <button
                    onClick={() => setPostType('image')}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-lg transition-colors ${
                      postType === 'image' 
                        ? 'bg-blue-100 text-blue-600' 
                        : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                    }`}
                  >
                    <ImageIcon className="h-4 w-4" />
                    <span>Image</span>
                  </button>
                </div>
                <button
                  onClick={handleNewPost}
                  disabled={!newPost.trim()}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  Post
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Feed Posts */}
        <div className="space-y-6">
          {posts.map((post) => (
            <div key={post.id} className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
              {/* Post Header */}
              <div className="p-6 pb-4">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <img
                      src={mockUser.avatar}
                      alt={mockUser.name}
                      className="w-10 h-10 rounded-full object-cover"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-900">{mockUser.name}</h3>
                      <p className="text-sm text-gray-600">{formatDate(post.date)}</p>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600 hover:bg-gray-100 rounded-lg transition-colors">
                    <MoreHorizontal className="h-5 w-5" />
                  </button>
                </div>

                {/* Post Content */}
                <p className="text-gray-800 leading-relaxed mb-4">{post.content}</p>
              </div>

              {/* Post Image */}
              {post.image && (
                <div className="px-6 pb-4">
                  <img
                    src={post.image}
                    alt="Post content"
                    className="w-full rounded-lg object-cover"
                  />
                </div>
              )}

              {/* Post Actions */}
              <div className="px-6 py-4 border-t border-gray-100">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-6">
                    <button
                      onClick={() => handleLike(post.id)}
                      className="flex items-center space-x-2 text-gray-600 hover:text-red-500 transition-colors group"
                    >
                      <Heart className="h-5 w-5 group-hover:fill-current" />
                      <span className="text-sm font-medium">{post.likes}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-blue-500 transition-colors">
                      <MessageCircle className="h-5 w-5" />
                      <span className="text-sm font-medium">{post.comments}</span>
                    </button>
                    <button className="flex items-center space-x-2 text-gray-600 hover:text-green-500 transition-colors">
                      <Share2 className="h-5 w-5" />
                      <span className="text-sm font-medium">Share</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More */}
        <div className="text-center mt-12">
          <button className="bg-white border-2 border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-blue-600 hover:text-blue-600 transition-all duration-200 font-medium">
            Load More Posts
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeedPage;