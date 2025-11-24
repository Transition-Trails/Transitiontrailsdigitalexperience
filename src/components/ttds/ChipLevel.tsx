import React from 'react';

export type ChipLevelVariant = 'beginner' | 'intermediate' | 'advanced';

export interface ChipLevelProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: ChipLevelVariant;
  label?: string;
  disabled?: boolean;
}

export const ChipLevel = React.forwardRef<HTMLDivElement, ChipLevelProps>(
  (
    {
      variant = 'beginner',
      label,
      disabled = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const baseStyles = 'inline-flex items-center px-3 py-1 rounded-lg text-sm border-2 transition-all duration-200';

    const variantConfig = {
      beginner: {
        styles: 'bg-green-50 border-green-200 text-green-800',
        defaultLabel: 'Beginner',
      },
      intermediate: {
        styles: 'bg-yellow-50 border-yellow-200 text-yellow-800',
        defaultLabel: 'Intermediate',
      },
      advanced: {
        styles: 'bg-purple-50 border-purple-200 text-purple-800',
        defaultLabel: 'Advanced',
      },
    };

    const config = variantConfig[variant];
    const displayLabel = label || config.defaultLabel;
    const disabledStyles = disabled ? 'opacity-50 cursor-not-allowed' : '';

    return (
      <div
        ref={ref}
        role="status"
        aria-label={`Skill level: ${displayLabel}`}
        className={`${baseStyles} ${config.styles} ${disabledStyles} ${className}`}
        {...props}
      >
        <span>{displayLabel}</span>
      </div>
    );
  }
);

ChipLevel.displayName = 'ChipLevel';
