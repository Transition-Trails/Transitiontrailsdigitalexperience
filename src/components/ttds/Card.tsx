import React from 'react';

export type CardElevation = 'none' | 'low' | 'medium' | 'high';
export type CardPadding = 'none' | 'tight' | 'normal' | 'spacious';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  elevation?: CardElevation;
  padding?: CardPadding;
  header?: React.ReactNode;
  footer?: React.ReactNode;
  children?: React.ReactNode;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  (
    {
      elevation = 'low',
      padding = 'normal',
      header,
      footer,
      children,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'bg-white rounded-lg border border-slate-200 transition-shadow duration-200';

    const elevationStyles: Record<CardElevation, string> = {
      none: 'shadow-none',
      low: 'shadow-sm hover:shadow-md',
      medium: 'shadow-md hover:shadow-lg',
      high: 'shadow-lg hover:shadow-xl',
    };

    const paddingStyles: Record<CardPadding, string> = {
      none: 'p-0',
      tight: 'p-3',
      normal: 'p-6',
      spacious: 'p-8',
    };

    return (
      <div
        ref={ref}
        className={`${baseStyles} ${elevationStyles[elevation]} ${paddingStyles[padding]} ${className}`}
        {...props}
      >
        {header && (
          <div className={`card-header ${padding !== 'none' ? '-mt-2 mb-4 pb-4 border-b border-slate-200' : ''}`}>
            {header}
          </div>
        )}
        {children && (
          <div className="card-body">
            {children}
          </div>
        )}
        {footer && (
          <div className={`card-footer ${padding !== 'none' ? '-mb-2 mt-4 pt-4 border-t border-slate-200' : ''}`}>
            {footer}
          </div>
        )}
      </div>
    );
  }
);

Card.displayName = 'Card';
