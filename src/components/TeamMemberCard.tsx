import React from 'react';
import Card from './common/Card';

interface TeamMemberCardProps {
  name: string;
  position: string;
  imageUrl: string;
}

const TeamMemberCard: React.FC<TeamMemberCardProps> = ({ name, position, imageUrl }) => {
  return (
    <Card className="overflow-hidden group text-center">
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold">{name}</h3>
        <p className="text-gray-600">{position}</p>
      </div>
    </Card>
  );
};

export default TeamMemberCard;