import React from 'react';
import { Clock, BookOpen } from 'lucide-react';
import Card from './common/Card';

interface CourseCardProps {
  title: string;
  description: string;
  imageUrl: string;
  duration: string;
  level: string;
}

const CourseCard: React.FC<CourseCardProps> = ({
  title,
  description,
  imageUrl,
  duration,
  level,
}) => {
  return (
    <Card className="h-full flex flex-col">
      <div className="relative h-48 overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
      </div>
      <div className="p-5 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold mb-2 text-gray-800">{title}</h3>
        <p className="text-gray-600 mb-4 flex-grow">{description}</p>
        <div className="flex flex-wrap items-center text-sm text-gray-500 gap-4">
          <div className="flex items-center">
            <Clock size={16} className="mr-1 text-primary-500" />
            <span>{duration}</span>
          </div>
          <div className="flex items-center">
            <BookOpen size={16} className="mr-1 text-primary-500" />
            <span>{level}</span>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default CourseCard;