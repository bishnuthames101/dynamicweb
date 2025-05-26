import React from 'react';

interface PageTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

const PageTitle: React.FC<PageTitleProps> = ({
  title,
  subtitle,
  centered = false,
  className = '',
}) => {
  const alignmentClass = centered ? 'text-center mx-auto' : '';
  
  return (
    <div className={`mb-8 ${alignmentClass} ${className}`}>
      <h1 className="page-title">{title}</h1>
      {subtitle && <p className="page-subtitle">{subtitle}</p>}
    </div>
  );
};

export default PageTitle;