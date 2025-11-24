import React from 'react';
import { cn } from '../../utils';
import { Button } from './Button';

interface HeroProps {
  title: string;
  description?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: string;
  className?: string;
}

export const Hero: React.FC<HeroProps> = ({
  title,
  description,
  ctaText,
  ctaLink,
  backgroundImage,
  className,
}) => {
  return (
    <div 
      className={cn(
        "relative w-full py-20 md:py-32 lg:py-48 flex items-center",
        className
      )}
      style={backgroundImage ? { backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover', backgroundPosition: 'center' } : undefined}
    >
      {backgroundImage && (
        <div className="absolute inset-0 bg-black/50" />
      )}
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-3xl space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white">
            {title}
          </h1>
          {description && (
            <p className="text-lg md:text-xl text-[var(--color-neutral-200)]">
              {description}
            </p>
          )}
          {ctaText && (
            <Button 
              variant="primary" 
              size="lg"
              onClick={() => window.location.href = ctaLink || '#'}
            >
              {ctaText}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};
