import React from 'react';

export type TooltipPosition = 'top' | 'bottom' | 'left' | 'right';

export interface TooltipProps {
  content: string;
  position?: TooltipPosition;
  children: React.ReactNode;
  className?: string;
}

export const Tooltip = React.forwardRef<HTMLSpanElement, TooltipProps>(
  ({ content, position = 'top', children, className = '' }, ref) => {
    const [isVisible, setIsVisible] = React.useState(false);

    const positionStyles = {
      top: {
        tooltip: 'bottom-full left-1/2 -translate-x-1/2 mb-2',
        arrow: 'top-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-b-transparent border-t-slate-900',
      },
      bottom: {
        tooltip: 'top-full left-1/2 -translate-x-1/2 mt-2',
        arrow: 'bottom-full left-1/2 -translate-x-1/2 border-l-transparent border-r-transparent border-t-transparent border-b-slate-900',
      },
      left: {
        tooltip: 'right-full top-1/2 -translate-y-1/2 mr-2',
        arrow: 'left-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-r-transparent border-l-slate-900',
      },
      right: {
        tooltip: 'left-full top-1/2 -translate-y-1/2 ml-2',
        arrow: 'right-full top-1/2 -translate-y-1/2 border-t-transparent border-b-transparent border-l-transparent border-r-slate-900',
      },
    };

    const styles = positionStyles[position];

    return (
      <span
        ref={ref}
        className={`relative inline-flex ${className}`}
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}
        onFocus={() => setIsVisible(true)}
        onBlur={() => setIsVisible(false)}
      >
        {children}
        {isVisible && (
          <span
            role="tooltip"
            className={`
              absolute z-50 px-3 py-2 text-xs text-white bg-slate-900 rounded-lg
              whitespace-nowrap shadow-lg pointer-events-none
              ${styles.tooltip}
              animate-in fade-in duration-200
            `}
          >
            {content}
            {/* Arrow */}
            <span
              className={`
                absolute w-0 h-0 border-4
                ${styles.arrow}
              `}
              aria-hidden="true"
            />
          </span>
        )}
      </span>
    );
  }
);

Tooltip.displayName = 'Tooltip';