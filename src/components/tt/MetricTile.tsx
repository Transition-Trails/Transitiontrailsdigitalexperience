import React from 'react';
import { Card } from '../ttds/Card';
import { LucideIcon } from 'lucide-react';

export type MetricLayout = 'vertical' | 'horizontal';
export type MetricDensity = 'default' | 'compact';

export interface TTMetricTileProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  value: string; // Primary metric value (e.g., "147+", "32 Projects", "1,200 Hours")
  label: string; // Metric label (e.g., "Interns Supported", "Nonprofit Projects")

  // Optional Fields
  subtext?: string; // Supporting text (e.g., "Since 2024", "This year")
  icon?: LucideIcon; // Optional icon component from lucide-react
  iconColor?: string; // Custom icon color (Tailwind class)
  
  // Variants
  layout?: MetricLayout;
  density?: MetricDensity;
  
  // Additional Styling
  accentColor?: string; // Accent color for metric value (Tailwind class)
}

export const TTMetricTile = React.forwardRef<HTMLDivElement, TTMetricTileProps>(
  (
    {
      value,
      label,
      subtext,
      icon: Icon,
      iconColor = 'text-emerald-600',
      layout = 'vertical',
      density = 'default',
      accentColor,
      className = '',
      ...props
    },
    ref
  ) => {
    const isVertical = layout === 'vertical';
    const isCompact = density === 'compact';

    // TTDS Spacing tokens
    const spacing = {
      default: {
        gap: isVertical ? 'gap-4' : 'gap-6',
        iconSize: 'w-10 h-10',
        padding: 'normal' as const,
      },
      compact: {
        gap: isVertical ? 'gap-3' : 'gap-4',
        iconSize: 'w-8 h-8',
        padding: 'tight' as const,
      },
    };

    const currentSpacing = isCompact ? spacing.compact : spacing.default;

    // Typography classes based on TTDS tokens
    const valueClass = isCompact
      ? 'text-4xl text-slate-900' // ttds-type-heading-lg
      : 'text-5xl text-slate-900'; // Display variant

    const labelClass = 'text-base text-slate-700'; // ttds-type-body-md
    const subtextClass = 'text-sm text-slate-500'; // ttds-type-body-sm / caption

    return (
      <Card
        ref={ref}
        elevation="low"
        padding={currentSpacing.padding}
        className={`${className}`}
        {...props}
      >
        <div
          className={`flex ${isVertical ? 'flex-col' : 'flex-row items-center'} ${currentSpacing.gap}`}
          role="group"
          aria-label={`${label}: ${value}${subtext ? ` ${subtext}` : ''}`}
        >
          {/* Optional Icon */}
          {Icon && (
            <div
              className={`flex-shrink-0 ${iconColor}`}
              aria-hidden="true"
            >
              <Icon className={currentSpacing.iconSize} strokeWidth={1.5} />
            </div>
          )}

          {/* Content Container */}
          <div className={`flex flex-col ${isVertical ? 'gap-2' : 'gap-1'} flex-1 min-w-0`}>
            {/* Metric Value */}
            <div
              className={`${valueClass} ${accentColor || ''} leading-none tracking-tight`}
              aria-label={`Value: ${value}`}
            >
              {value}
            </div>

            {/* Metric Label */}
            <div className={`${labelClass} leading-snug`}>
              {label}
            </div>

            {/* Optional Supporting Text */}
            {subtext && (
              <div className={`${subtextClass} leading-relaxed`}>
                {subtext}
              </div>
            )}
          </div>
        </div>
      </Card>
    );
  }
);

TTMetricTile.displayName = 'TTMetricTile';
