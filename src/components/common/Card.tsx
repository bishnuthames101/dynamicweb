import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
}

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverable = true,
}) => {
  const baseClasses = 'card';
  const hoverableClass = hoverable ? 'hover:shadow-lg' : '';
  const cursorClass = onClick ? 'cursor-pointer' : '';
  
  return (
    <div 
      className={`${baseClasses} ${hoverableClass} ${cursorClass} ${className}`}
      onClick={onClick}
    >
      {children}
    </div>
  );
};

export default Card;