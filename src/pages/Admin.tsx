import React, { useState } from 'react';
import { User, Lock, AlertCircle, Plus, Pencil, Trash2, Image, Mail, School } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import Card from '../components/common/Card';
import { notices, galleryImages } from '../data/mockData';

const Admin: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('notices');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  
  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!username || !password) {
      setError('Please enter both username and password');
      return;
    }
    
    setError('');
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      setIsLoading(false);
      setIsLoggedIn(true);
    }, 1000);
  };

  if (!isLoggedIn) {
    return (
      <Section className="min-h-[calc(100vh-300px)] flex items-center justify-center py-16">
        <div className="max-w-md w-full mx-auto">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">Admin Login</h1>
            <p className="text-gray-600">Sign in to access the admin dashboard</p>
          </div>
          
          <div className="bg-white rounded-lg shadow-lg p-8">
            {error && (
              <div className="mb-6 bg-red-50 text-red-700 p-4 rounded-lg flex items-start">
                <AlertCircle size={20} className="mr-2 flex-shrink-0 mt-0.5" />
                <p>{error}</p>
              </div>
            )}
            
            <form onSubmit={handleLogin}>
              <div className="mb-6">
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">
                  Username
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <User size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="username"
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                    placeholder="admin"
                  />
                </div>
              </div>
              
              <div className="mb-6">
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">
                  Password
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock size={18} className="text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
                    placeholder="••••••••"
                  />
                </div>
              </div>
              
              <Button
                type="submit"
                variant="primary"
                fullWidth
                disabled={isLoading}
              >
                {isLoading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>
            
            <div className="mt-6 text-center text-sm text-gray-600">
              <p>For demo purposes, any non-empty username and password will work.</p>
            </div>
          </div>
        </div>
      </Section>
    );
  }

  return (
    <Section className="py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold">Admin Dashboard</h1>
        <Button 
          variant="outline" 
          onClick={() => setIsLoggedIn(false)}
        >
          Logout
        </Button>
      </div>

      {/* Navigation Tabs */}
      <div className="flex border-b border-gray-200 mb-8">
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'notices'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('notices')}
        >
          Notices
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'gallery'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('gallery')}
        >
          Gallery
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'messages'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('messages')}
        >
          Messages
        </button>
        <button
          className={`px-4 py-2 font-medium ${
            activeTab === 'settings'
              ? 'text-primary-600 border-b-2 border-primary-600'
              : 'text-gray-500 hover:text-gray-700'
          }`}
          onClick={() => setActiveTab('settings')}
        >
          Settings
        </button>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-lg shadow-sm p-6">
        {activeTab === 'notices' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Notices</h2>
              <Button variant="primary" className="flex items-center">
                <Plus size={16} className="mr-2" />
                Add Notice
              </Button>
            </div>
            
            <div className="space-y-4">
              {notices.map((notice) => (
                <Card key={notice.id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-1">{notice.title}</h3>
                      <p className="text-sm text-gray-600">{notice.content}</p>
                      <p className="text-xs text-gray-500 mt-2">
                        Posted on: {new Date(notice.date).toLocaleDateString()}
                      </p>
                    </div>
                    <div className="flex space-x-2">
                      <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg">
                        <Pencil size={16} />
                      </button>
                      <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'gallery' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Manage Gallery</h2>
              <Button variant="primary" className="flex items-center">
                <Image size={16} className="mr-2" />
                Upload Images
              </Button>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {galleryImages.map((image) => (
                <Card key={image.id} className="overflow-hidden">
                  <div className="relative h-48">
                    <img
                      src={image.imageUrl}
                      alt={image.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute top-2 right-2 flex space-x-2">
                      <button className="p-2 bg-white rounded-lg shadow-md text-blue-600 hover:bg-blue-50">
                        <Pencil size={16} />
                      </button>
                      <button className="p-2 bg-white rounded-lg shadow-md text-red-600 hover:bg-red-50">
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </div>
                  <div className="p-4">
                    <h3 className="font-semibold">{image.title}</h3>
                    <p className="text-sm text-gray-600">{image.category}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">Contact Messages</h2>
              <div className="flex items-center text-gray-600">
                <Mail size={16} className="mr-2" />
                <span>15 unread messages</span>
              </div>
            </div>
            
            <div className="space-y-4">
              {[1, 2, 3].map((id) => (
                <Card key={id} className="p-4">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-semibold mb-1">John Doe</h3>
                      <p className="text-sm text-gray-600">
                        Inquiry about admission process for Grade 5
                      </p>
                      <p className="text-xs text-gray-500 mt-2">
                        Received: {new Date().toLocaleDateString()}
                      </p>
                    </div>
                    <Button variant="outline" size="sm">
                      Reply
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'settings' && (
          <div>
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-semibold">School Settings</h2>
              <div className="flex items-center text-gray-600">
                <School size={16} className="mr-2" />
                <span>Last updated: {new Date().toLocaleDateString()}</span>
              </div>
            </div>
            
            <div className="space-y-6 max-w-2xl">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  School Name
                </label>
                <input
                  type="text"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  defaultValue="EduSite Dynamic"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Contact Email
                </label>
                <input
                  type="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  defaultValue="info@edusite.com.np"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Phone Number
                </label>
                <input
                  type="tel"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  defaultValue="+977 01-4123456"
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Address
                </label>
                <textarea
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows={3}
                  defaultValue="Kathmandu, Nepal"
                />
              </div>
              
              <Button variant="primary">
                Save Changes
              </Button>
            </div>
          </div>
        )}
      </div>
    </Section>
  );
};

export default Admin;