import React from 'react';
import { cn } from '../../utils';

/**
 * Card Component
 * SLDS-inspired card container
 * LWC Conversion: Maps to lightning-card
 */
interface CardProps {
  children: React.ReactNode;
  className?: string;
  padding?: 'none' | 'sm' | 'md' | 'lg';
  shadow?: boolean;
}

export const Card: React.FC<CardProps> = ({
  children,
  className,
  padding = 'md',
  shadow = true,
}) => {
  const paddings = {
    none: '',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-[var(--color-neutral-200)]',
        shadow && 'shadow-sm',
        paddings[padding],
        className
      )}
    >
      {children}
    </div>
  );
};

/**
 * CardHeader Component
 */
interface CardHeaderProps {
  children: React.ReactNode;
  className?: string;
}

export const CardHeader: React.FC<CardHeaderProps> = ({ children, className }) => {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
};

/**
 * CardTitle Component
 */
interface CardTitleProps {
  children: React.ReactNode;
  className?: string;
}

export const CardTitle: React.FC<CardTitleProps> = ({ children, className }) => {
  return (
    <h3 className={cn('font-semibold text-lg', className)}>
      {children}
    </h3>
  );
};

/**
 * CardContent Component
 */
interface CardContentProps {
  children: React.ReactNode;
  className?: string;
}

export const CardContent: React.FC<CardContentProps> = ({ children, className }) => {
  return (
    <div className={cn('text-[var(--color-neutral-700)]', className)}>
      {children}
    </div>
  );
};

/**
 * CardFooter Component
 */
interface CardFooterProps {
  children: React.ReactNode;
  className?: string;
}

export const CardFooter: React.FC<CardFooterProps> = ({ children, className }) => {
  return (
    <div className={cn('mt-4 pt-4 border-t border-[var(--color-neutral-200)]', className)}>
      {children}
    </div>
  );
};
