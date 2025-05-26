import React, { useState } from 'react';
import { Search } from 'lucide-react';
import Section from '../components/common/Section';
import PageTitle from '../components/common/PageTitle';
import GalleryCard from '../components/GalleryCard';
import { galleryImages } from '../data/mockData';

const Gallery: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  
  // Extract unique categories
  const categories = ['All', ...new Set(galleryImages.map(img => img.category))];
  
  const filteredImages = galleryImages.filter((image) => {
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         image.category.toLowerCase().includes(searchTerm.toLowerCase());
    
    if (activeCategory === 'All') {
      return matchesSearch;
    }
    
    return matchesSearch && image.category === activeCategory;
  });
  
  return (
    <>
      <Section className="pt-12 pb-8">
        <PageTitle 
          title="Photo Gallery" 
          subtitle="Explore memorable moments from various school events and activities."
          centered
        />
        
        {/* Search and Category Filter */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search gallery..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-400 focus:border-primary-400 outline-none"
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
          </div>
          
          <div className="flex flex-wrap justify-center gap-2 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full transition-colors ${
                  activeCategory === category 
                    ? 'bg-primary-500 text-white' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </Section>
      
      <Section>
        {filteredImages.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredImages.map((image) => (
              <GalleryCard
                key={image.id}
                id={image.id}
                title={image.title}
                imageUrl={image.imageUrl}
                category={image.category}
              />
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-gray-600">No images found matching your criteria. Please try different search terms or categories.</p>
          </div>
        )}
      </Section>
    </>
  );
};

export default Gallery;