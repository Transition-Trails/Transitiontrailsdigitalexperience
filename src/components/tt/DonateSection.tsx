import React from 'react';
import { TTMetricTile } from './MetricTile';
import { Button } from '../ttds/Button';
import { LucideIcon } from 'lucide-react';

export type DonateAlignment = 'centered' | 'left';
export type MetricsCount = 2 | 3 | 4;
export type GivingTiersCount = 3 | 4;
export type DonateBackground = 'light' | 'dark';

export interface MetricData {
  value: string;
  label: string;
  subtext?: string;
  icon?: LucideIcon;
  iconColor?: string;
}

export interface GivingTier {
  amount: string; // e.g., "$25", "$50", "$100"
  label?: string; // Optional description like "Supporter" or "Champion"
}

export interface TTDonateSectionProps extends React.HTMLAttributes<HTMLElement> {
  // Required Fields
  headline: string; // Short story headline
  
  // Optional Fields
  supportingText?: string; // Optional supporting sentence
  metrics: MetricData[]; // 2-4 impact metrics
  givingTiers: GivingTier[]; // 3-4 suggested giving levels
  donateButtonLabel?: string; // CTA button label
  microcopy?: string; // Optional text beneath button (e.g., "Tax-deductible 501(c)(3) gift")
  
  // Event Handlers
  onDonate?: () => void;
  onSelectTier?: (tier: GivingTier) => void;
  selectedTier?: string; // Track selected tier amount
  
  // Variants
  alignment?: DonateAlignment;
  background?: DonateBackground;
}

export const TTDonateSection = React.forwardRef<HTMLElement, TTDonateSectionProps>(
  (
    {
      headline,
      supportingText,
      metrics = [],
      givingTiers = [],
      donateButtonLabel = 'Donate',
      microcopy,
      onDonate,
      onSelectTier,
      selectedTier,
      alignment = 'centered',
      background = 'light',
      className = '',
      ...props
    },
    ref
  ) => {
    const isCentered = alignment === 'centered';
    const isDark = background === 'dark';

    // Background and text colors based on variant
    const bgColor = isDark ? 'bg-slate-800' : 'bg-gradient-to-br from-slate-50 to-emerald-50/30';
    const headlineColor = isDark ? 'text-white' : 'text-slate-900';
    const supportingColor = isDark ? 'text-slate-300' : 'text-slate-700';
    const microcopyColor = isDark ? 'text-slate-400' : 'text-slate-600';

    // Layout classes
    const alignmentClass = isCentered ? 'items-center text-center' : 'items-start text-left';
    const metricsGridClass = 
      metrics.length === 2 ? 'grid-cols-1 md:grid-cols-2' :
      metrics.length === 3 ? 'grid-cols-1 md:grid-cols-3' :
      'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

    const givingGridClass = 
      givingTiers.length === 3 ? 'grid-cols-3' :
      'grid-cols-2 md:grid-cols-4';

    return (
      <section
        ref={ref}
        className={`${bgColor} rounded-lg p-8 md:p-12 lg:p-16 ${className}`}
        aria-label="Donation call to action"
        {...props}
      >
        <div className={`flex flex-col ${alignmentClass} gap-10 max-w-6xl mx-auto`}>
          {/* Top Section: Story */}
          <div className={`flex flex-col ${alignmentClass} gap-4 max-w-3xl`}>
            {/* Headline */}
            <h2 className={`text-3xl md:text-4xl ${headlineColor} leading-tight`}>
              {headline}
            </h2>
            
            {/* Supporting Text */}
            {supportingText && (
              <p className={`text-lg ${supportingColor} leading-relaxed`}>
                {supportingText}
              </p>
            )}
          </div>

          {/* Middle Section: Impact Metrics */}
          {metrics.length > 0 && (
            <div 
              className={`grid ${metricsGridClass} gap-6 w-full`}
              role="region"
              aria-label="Impact metrics"
            >
              {metrics.map((metric, index) => (
                <TTMetricTile
                  key={index}
                  value={metric.value}
                  label={metric.label}
                  subtext={metric.subtext}
                  icon={metric.icon}
                  iconColor={metric.iconColor}
                  layout="vertical"
                  density="default"
                />
              ))}
            </div>
          )}

          {/* Giving Levels Section */}
          {givingTiers.length > 0 && (
            <div 
              className="flex flex-col gap-4 w-full max-w-2xl"
              role="region"
              aria-label="Suggested giving levels"
            >
              <div className={`text-base ${supportingColor}`}>
                Choose an amount:
              </div>
              <div className={`grid ${givingGridClass} gap-3`}>
                {givingTiers.map((tier, index) => {
                  const isSelected = selectedTier === tier.amount;
                  return (
                    <button
                      key={index}
                      onClick={() => onSelectTier?.(tier)}
                      className={`
                        px-6 py-4 rounded-lg border-2 transition-all
                        focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2
                        ${isSelected
                          ? isDark
                            ? 'bg-emerald-600 border-emerald-600 text-white'
                            : 'bg-emerald-600 border-emerald-600 text-white'
                          : isDark
                            ? 'bg-slate-700 border-slate-600 text-white hover:bg-slate-600 hover:border-slate-500'
                            : 'bg-white border-slate-300 text-slate-900 hover:border-emerald-400 hover:bg-emerald-50'
                        }
                      `}
                      aria-label={`Select ${tier.amount} donation tier${tier.label ? `, ${tier.label}` : ''}`}
                      aria-pressed={isSelected}
                    >
                      <div className="text-2xl">{tier.amount}</div>
                      {tier.label && (
                        <div className={`text-sm mt-1 ${isSelected ? 'text-emerald-100' : isDark ? 'text-slate-400' : 'text-slate-600'}`}>
                          {tier.label}
                        </div>
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Bottom Section: Donate CTA */}
          <div className={`flex flex-col ${alignmentClass} gap-3`}>
            <Button
              variant="primary"
              size="lg"
              onClick={onDonate}
              className="px-8 py-3 text-lg"
              aria-label={donateButtonLabel}
            >
              {donateButtonLabel}
            </Button>
            
            {/* Optional Microcopy */}
            {microcopy && (
              <p className={`text-sm ${microcopyColor}`}>
                {microcopy}
              </p>
            )}
          </div>
        </div>
      </section>
    );
  }
);

TTDonateSection.displayName = 'TTDonateSection';
