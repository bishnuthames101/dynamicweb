import React, { useState } from 'react';
import { X } from 'lucide-react';
import Card from './common/Card';

interface GalleryCardProps {
  id: number;
  title: string;
  imageUrl: string;
  category: string;
}

const GalleryCard: React.FC<GalleryCardProps> = ({ id, title, imageUrl, category }) => {
  const [isOpen, setIsOpen] = useState(false);
  
  const openModal = () => {
    setIsOpen(true);
    document.body.style.overflow = 'hidden';
  };
  
  const closeModal = () => {
    setIsOpen(false);
    document.body.style.overflow = 'auto';
  };
  
  return (
    <>
      <Card className="overflow-hidden group" onClick={openModal}>
        <div className="relative h-56 overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
            <h3 className="text-white font-medium text-lg">{title}</h3>
            <p className="text-white text-sm opacity-80">{category}</p>
          </div>
        </div>
      </Card>
      
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-80 p-4 animate-fade-in">
          <div className="relative max-w-4xl w-full bg-white rounded-lg overflow-hidden shadow-xl animate-slide-in">
            <button
              className="absolute top-4 right-4 text-white bg-black bg-opacity-50 hover:bg-opacity-70 rounded-full p-2 transition-colors z-10"
              onClick={closeModal}
            >
              <X size={20} />
            </button>
            <div className="flex flex-col md:flex-row">
              <div className="md:w-2/3 h-64 md:h-auto">
                <img
                  src={imageUrl}
                  alt={title}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="p-6 md:w-1/3">
                <h3 className="text-2xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-500 mb-4">{category}</p>
                <p className="text-gray-700">
                  {`Photo taken during ${title.toLowerCase()} event at our school.`}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default GalleryCard;