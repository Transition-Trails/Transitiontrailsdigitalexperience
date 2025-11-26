import React from 'react';
import { X, Sparkles, Lightbulb, Info, Star, Zap } from 'lucide-react';

export type PennyTipPlacement = 'top' | 'bottom' | 'left' | 'right';
export type PennyTipDensity = 'standard' | 'compact';
export type PennyTipIcon = 'sparkles' | 'lightbulb' | 'info' | 'star' | 'zap' | React.ReactNode;

export interface PennyTipProps extends React.HTMLAttributes<HTMLDivElement> {
  // Content (Required)
  tipText: string; // 1-2 line message
  
  // Optional Content
  contextLabel?: string; // "Study Tip", "Navigation", "Reminder", etc.
  ctaText?: string; // Optional CTA link text
  ctaHref?: string; // Optional href for CTA
  onCTAClick?: () => void; // CTA click handler
  
  // Icon
  icon?: PennyTipIcon; // Default: 'sparkles'
  
  // Dismissal
  onDismiss?: () => void; // Called when X is clicked
  showDismiss?: boolean; // Show dismiss X button (default: true)
  
  // Variants
  placement?: PennyTipPlacement; // Affects pointer position (default: 'bottom')
  density?: PennyTipDensity; // 'standard' or 'compact' (default: 'standard')
  showPointer?: boolean; // Show triangular pointer (default: false)
  
  // Style
  variant?: 'neutral' | 'info' | 'accent'; // Background color variant (default: 'neutral')
}

const iconMap = {
  sparkles: Sparkles,
  lightbulb: Lightbulb,
  info: Info,
  star: Star,
  zap: Zap,
};

export const PennyTip = React.forwardRef<HTMLDivElement, PennyTipProps>(
  (
    {
      tipText,
      contextLabel,
      ctaText,
      ctaHref,
      onCTAClick,
      icon = 'sparkles',
      onDismiss,
      showDismiss = true,
      placement = 'bottom',
      density = 'standard',
      showPointer = false,
      variant = 'neutral',
      className = '',
      ...props
    },
    ref
  ) => {
    const isCompact = density === 'compact';
    
    // Resolve icon
    let IconComponent: React.ElementType | null = null;
    let customIcon: React.ReactNode = null;
    
    if (typeof icon === 'string' && icon in iconMap) {
      IconComponent = iconMap[icon as keyof typeof iconMap];
    } else if (typeof icon !== 'string') {
      customIcon = icon;
    }

    // Background colors by variant
    const bgColors = {
      neutral: 'bg-white',
      info: 'bg-blue-50',
      accent: 'bg-emerald-50',
    };

    const borderColors = {
      neutral: 'border-slate-200',
      info: 'border-blue-200',
      accent: 'border-emerald-200',
    };

    const iconColors = {
      neutral: 'text-slate-600',
      info: 'text-blue-600',
      accent: 'text-emerald-600',
    };

    // Pointer positioning
    const pointerStyles = {
      top: 'after:bottom-[-8px] after:left-1/2 after:-translate-x-1/2 after:border-t-8 after:border-l-8 after:border-r-8 after:border-t-white after:border-l-transparent after:border-r-transparent',
      bottom: 'after:top-[-8px] after:left-1/2 after:-translate-x-1/2 after:border-b-8 after:border-l-8 after:border-r-8 after:border-b-white after:border-l-transparent after:border-r-transparent',
      left: 'after:right-[-8px] after:top-1/2 after:-translate-y-1/2 after:border-l-8 after:border-t-8 after:border-b-8 after:border-l-white after:border-t-transparent after:border-b-transparent',
      right: 'after:left-[-8px] after:top-1/2 after:-translate-y-1/2 after:border-r-8 after:border-t-8 after:border-b-8 after:border-r-white after:border-t-transparent after:border-b-transparent',
    };

    const handleCTAClick = (e: React.MouseEvent) => {
      if (onCTAClick) {
        e.preventDefault();
        onCTAClick();
      }
    };

    return (
      <div
        ref={ref}
        role="note"
        aria-live="polite"
        className={`
          ${bgColors[variant]}
          ${borderColors[variant]}
          border rounded-lg shadow-md
          ${isCompact ? 'p-3' : 'p-4'}
          relative
          ${showPointer ? `after:content-[''] after:absolute after:w-0 after:h-0 ${pointerStyles[placement]}` : ''}
          ${className}
        `}
        {...props}
      >
        <div className="flex items-start gap-3">
          {/* Icon Area */}
          <div className="flex-shrink-0 mt-0.5">
            {IconComponent ? (
              <IconComponent 
                className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} ${iconColors[variant]}`}
                aria-hidden="true"
              />
            ) : (
              customIcon
            )}
          </div>

          {/* Content Area */}
          <div className="flex-1 min-w-0">
            {/* Context Label */}
            {contextLabel && (
              <div className={`${isCompact ? 'text-xs' : 'text-xs'} text-slate-600 mb-1`}>
                {contextLabel}
              </div>
            )}

            {/* Tip Text */}
            <div className={`text-slate-900 ${isCompact ? 'text-sm' : 'text-sm'} leading-relaxed`}>
              {tipText}
            </div>

            {/* Optional CTA */}
            {ctaText && (
              <div className="mt-2">
                {ctaHref ? (
                  <a
                    href={ctaHref}
                    onClick={handleCTAClick}
                    className="text-sm text-emerald-700 hover:text-emerald-800 underline transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    {ctaText}
                  </a>
                ) : (
                  <button
                    onClick={onCTAClick}
                    className="text-sm text-emerald-700 hover:text-emerald-800 underline transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded"
                  >
                    {ctaText}
                  </button>
                )}
              </div>
            )}
          </div>

          {/* Dismiss Button */}
          {showDismiss && onDismiss && (
            <button
              onClick={onDismiss}
              aria-label="Dismiss tip"
              className={`
                flex-shrink-0
                ${isCompact ? 'h-5 w-5' : 'h-6 w-6'}
                flex items-center justify-center
                text-slate-400 hover:text-slate-600
                rounded
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
              `}
            >
              <X className={isCompact ? 'h-3.5 w-3.5' : 'h-4 w-4'} />
            </button>
          )}
        </div>
      </div>
    );
  }
);

PennyTip.displayName = 'PennyTip';
