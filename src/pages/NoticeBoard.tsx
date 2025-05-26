import React, { useState } from 'react';
import { Search, AlertCircle, Filter } from 'lucide-react';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import NoticeCard from '../components/NoticeCard';
import { notices } from '../data/mockData';

const NoticeBoard: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterImportant, setFilterImportant] = useState(false);
  
  const filteredNotices = notices.filter((notice) => {
    const matchesSearch = notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         notice.content.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (filterImportant) {
      return matchesSearch && notice.important;
    }
    
    return matchesSearch;
  }).sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  
  return (
    <>
      <Section className="pt-12 pb-8">
        <PageTitle 
          title="Notice Board" 
          subtitle="Stay updated with the latest announcements and events at our school."
          centered
        />
        
        {/* Search and Filter */}
        <div className="max-w-3xl mx-auto mt-8 flex flex-col md:flex-row gap-4">
          <div className="relative flex-grow">
            <input
              type="text"
              placeholder="Search notices..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="flex items-center">
            <button 
              className={`flex items-center px-4 py-2 rounded-lg border transition-colors ${
                filterImportant ? 'bg-accent-100 text-accent-700 border-accent-200' : 'bg-white border-gray-300 text-gray-700'
              }`}
              onClick={() => setFilterImportant(!filterImportant)}
            >
              <AlertCircle size={16} className="mr-2" />
              Important Only
            </button>
          </div>
        </div>
      </Section>
      
      <Section>
        {filteredNotices.length > 0 ? (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-5xl mx-auto">
            {filteredNotices.map((notice) => (
              <NoticeCard key={notice.id} notice={notice} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <AlertCircle size={48} className="mx-auto text-gray-400 mb-4" />
            <h3 className="text-xl font-semibold mb-2">No Notices Found</h3>
            <p className="text-gray-600">
              {searchTerm ? 'No notices match your search criteria.' : 'There are no notices available at the moment.'}
            </p>
            {searchTerm && (
              <button 
                className="mt-4 text-primary-600 hover:text-primary-700"
                onClick={() => setSearchTerm('')}
              >
                Clear search
              </button>
            )}
          </div>
        )}
      </Section>
    </>
  );
};

export default NoticeBoard;