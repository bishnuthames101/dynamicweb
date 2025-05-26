import React from 'react';
import Container from './Container';

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  backgroundClass?: string;
  containerClassName?: string;
}

const Section: React.FC<SectionProps> = ({
  children,
  className = '',
  id,
  backgroundClass = 'bg-white',
  containerClassName = '',
}) => {
  return (
    <section className={`section ${backgroundClass} ${className}`} id={id}>
      <Container className={containerClassName}>
        {children}
      </Container>
    </section>
  );
};

export default Section;