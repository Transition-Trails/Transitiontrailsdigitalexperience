import React from 'react';
import { cn } from '../../utils';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  background?: 'white' | 'gray';
}

export const Section: React.FC<SectionProps> = ({ 
  className, 
  background = 'white',
  children, 
  ...props 
}) => {
  return (
    <section 
      className={cn(
        "py-12 md:py-16 lg:py-20",
        background === 'gray' ? "bg-[var(--color-neutral-100)]" : "bg-white",
        className
      )} 
      {...props}
    >
      <div className="container mx-auto px-4 md:px-6">
        {children}
      </div>
    </section>
  );
};
