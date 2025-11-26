import React from 'react';
import { Button } from '../ttds/Button';
import { LucideIcon } from 'lucide-react';

export type ProgramType = 'intern' | 'associate' | 'membership' | 'visitor';
export type DescriptionDensity = 'full' | 'compact';
export type CTAStyle = 'button' | 'link';

export interface TTProgramOverviewCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  programName: string; // e.g., "Guided Trail – Admin"
  whoItsFor: string; // e.g., "For aspiring Salesforce Admins..."
  duration: string; // e.g., "6 months", "Self-paced", "8–12 weeks"
  programType: ProgramType; // intern | associate | membership | visitor
  
  // Optional Fields
  outcomes?: string[]; // 3-5 bullet points of key outcomes
  ctaLabel?: string; // Default: "Learn More"
  icon?: LucideIcon; // Optional icon for program type
  
  // Event Handlers
  onCTAClick?: () => void;
  
  // Variants
  density?: DescriptionDensity; // full (with outcomes) | compact (no outcomes)
  ctaStyle?: CTAStyle; // button | link
}

// Program type styling configuration
const programTypeConfig: Record<ProgramType, { label: string; bgColor: string; textColor: string; accentColor: string }> = {
  intern: {
    label: 'Intern Program',
    bgColor: 'bg-emerald-100',
    textColor: 'text-emerald-800',
    accentColor: 'border-emerald-200',
  },
  associate: {
    label: 'Associate Track',
    bgColor: 'bg-blue-100',
    textColor: 'text-blue-800',
    accentColor: 'border-blue-200',
  },
  membership: {
    label: 'Membership',
    bgColor: 'bg-violet-100',
    textColor: 'text-violet-800',
    accentColor: 'border-violet-200',
  },
  visitor: {
    label: 'Visitor Access',
    bgColor: 'bg-slate-100',
    textColor: 'text-slate-800',
    accentColor: 'border-slate-200',
  },
};

export const TTProgramOverviewCard = React.forwardRef<HTMLDivElement, TTProgramOverviewCardProps>(
  (
    {
      programName,
      whoItsFor,
      duration,
      programType,
      outcomes = [],
      ctaLabel = 'Learn More',
      icon: Icon,
      onCTAClick,
      density = 'full',
      ctaStyle = 'button',
      className = '',
      ...props
    },
    ref
  ) => {
    const typeConfig = programTypeConfig[programType];
    const showOutcomes = density === 'full' && outcomes.length > 0;

    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col gap-5 hover:shadow-md transition-shadow ${className}`}
        {...props}
      >
        {/* Top Section: Program Name + Type Chip */}
        <div className="flex flex-col gap-3">
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-xl text-slate-900 leading-tight flex-1">
              {programName}
            </h3>
            {Icon && (
              <div className={`p-2 rounded-lg ${typeConfig.bgColor}`}>
                <Icon className={`w-5 h-5 ${typeConfig.textColor}`} />
              </div>
            )}
          </div>
          
          {/* Program Type Chip */}
          <div className="flex items-center gap-2">
            <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm ${typeConfig.bgColor} ${typeConfig.textColor}`}>
              {typeConfig.label}
            </span>
          </div>
        </div>

        {/* Middle Metadata Row: Who It's For + Duration */}
        <div className="flex flex-col gap-2">
          <div className="text-sm text-slate-700 leading-relaxed">
            {whoItsFor}
          </div>
          <div className="flex items-center gap-2 text-sm text-slate-600">
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <span>{duration}</span>
          </div>
        </div>

        {/* Outcomes Section (Full Density Only) */}
        {showOutcomes && (
          <div className="flex flex-col gap-2">
            <div className="text-sm text-slate-700">
              Key Outcomes:
            </div>
            <ul className="space-y-2" role="list">
              {outcomes.map((outcome, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                  <svg className="w-4 h-4 mt-0.5 flex-shrink-0 text-emerald-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="flex-1 leading-relaxed">{outcome}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Bottom Section: CTA */}
        <div className="mt-auto pt-2">
          {ctaStyle === 'button' ? (
            <Button
              variant="primary"
              size="md"
              onClick={onCTAClick}
              className="w-full"
              aria-label={`${ctaLabel} about ${programName}`}
            >
              {ctaLabel}
            </Button>
          ) : (
            <button
              onClick={onCTAClick}
              className="text-emerald-700 hover:text-emerald-800 text-sm inline-flex items-center gap-1 group transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded px-1 -mx-1"
              aria-label={`${ctaLabel} about ${programName}`}
            >
              <span>{ctaLabel}</span>
              <svg className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    );
  }
);

TTProgramOverviewCard.displayName = 'TTProgramOverviewCard';
