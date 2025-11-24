import React from 'react';
import { cn } from '../../utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
}

export const Card: React.FC<CardProps> = ({ 
  className, 
  title,
  children, 
  ...props 
}) => {
  return (
    <div 
      className={cn(
        "bg-white rounded-lg border border-[var(--color-neutral-200)] shadow-sm overflow-hidden",
        className
      )} 
      {...props}
    >
      {title && (
        <div className="px-6 py-4 border-b border-[var(--color-neutral-200)]">
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
      )}
      <div className="p-6">
        {children}
      </div>
    </div>
  );
};
