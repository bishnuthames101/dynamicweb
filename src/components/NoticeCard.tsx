import React from 'react';
import { Calendar, AlertCircle } from 'lucide-react';
import { Notice } from '../types';
import Card from './common/Card';

interface NoticeCardProps {
  notice: Notice;
}

const NoticeCard: React.FC<NoticeCardProps> = ({ notice }) => {
  const formattedDate = new Date(notice.date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
  
  return (
    <Card className={`p-5 ${notice.important ? 'border-l-4 border-l-accent-500' : ''}`}>
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{notice.title}</h3>
        {notice.important && (
          <span className="inline-flex items-center bg-accent-100 text-accent-700 text-xs px-2 py-1 rounded">
            <AlertCircle size={12} className="mr-1" />
            Important
          </span>
        )}
      </div>
      <p className="text-gray-600 mb-4">{notice.content}</p>
      <div className="flex items-center text-gray-500 text-sm">
        <Calendar size={14} className="mr-1" />
        <span>{formattedDate}</span>
      </div>
    </Card>
  );
};

export default NoticeCard;