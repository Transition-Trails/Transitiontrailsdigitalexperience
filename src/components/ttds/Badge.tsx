import React from 'react';
import { Sparkles, RefreshCw } from 'lucide-react';

export type BadgeVariant = 'new' | 'updated';

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
  label?: string;
  showIcon?: boolean;
}

export const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  (
    {
      variant = 'new',
      label,
      showIcon = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center gap-1 px-2.5 py-1 rounded-full text-xs uppercase tracking-wide transition-all duration-200';

    const variantConfig = {
      new: {
        styles: 'bg-emerald-600 text-white shadow-sm',
        defaultLabel: 'New',
        icon: <Sparkles className="h-3 w-3" />,
      },
      updated: {
        styles: 'bg-blue-600 text-white shadow-sm',
        defaultLabel: 'Updated',
        icon: <RefreshCw className="h-3 w-3" />,
      },
    };

    const config = variantConfig[variant];
    const displayLabel = label || config.defaultLabel;

    return (
      <div
        ref={ref}
        role="status"
        aria-label={`${displayLabel} content`}
        className={`${baseStyles} ${config.styles} ${className}`}
        {...props}
      >
        {showIcon && config.icon}
        <span>{displayLabel}</span>
      </div>
    );
  }
);

Badge.displayName = 'Badge';
