import React from 'react';
import { Button } from '../ttds/Button';
import { LucideIcon } from 'lucide-react';

export type DifficultyLevel = 'beginner' | 'intermediate' | 'advanced';
export type PlatformCategory = 'forms' | 'work-os' | 'automation' | 'email-marketing' | 'design' | 'database' | 'productivity';
export type DensityLevel = 'default' | 'compact';

export interface TTCitizenPlatformCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  platformName: string; // e.g., "Canva", "Airtable", "Notion"
  category: PlatformCategory; // Forms, Work OS, Automation, Email Marketing
  difficulty: DifficultyLevel; // Beginner, Intermediate, Advanced
  xpPoints: number; // e.g., 20, 50, 100
  
  // Optional Fields
  impactFocus?: string; // e.g., "Nonprofit operations", "Marketing & campaigns"
  platformIcon?: LucideIcon; // Optional icon for the platform
  ctaLabel?: string; // Default: "Learn More"
  
  // Event Handlers
  onCTAClick?: () => void;
  
  // Variants
  density?: DensityLevel; // default | compact
  showImpact?: boolean; // Show/hide impact focus line
}

// Helper functions for styling
const getCategoryLabel = (category: PlatformCategory): string => {
  const labels: Record<PlatformCategory, string> = {
    'forms': 'Forms',
    'work-os': 'Work OS',
    'automation': 'Automation',
    'email-marketing': 'Email Marketing',
    'design': 'Design',
    'database': 'Database',
    'productivity': 'Productivity'
  };
  return labels[category];
};

const getCategoryStyles = (category: PlatformCategory): string => {
  const styles: Record<PlatformCategory, string> = {
    'forms': 'bg-orange-100 text-orange-800 border-orange-200',
    'work-os': 'bg-purple-100 text-purple-800 border-purple-200',
    'automation': 'bg-blue-100 text-blue-800 border-blue-200',
    'email-marketing': 'bg-pink-100 text-pink-800 border-pink-200',
    'design': 'bg-violet-100 text-violet-800 border-violet-200',
    'database': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'productivity': 'bg-slate-100 text-slate-800 border-slate-200'
  };
  return styles[category];
};

const getDifficultyLabel = (difficulty: DifficultyLevel): string => {
  const labels: Record<DifficultyLevel, string> = {
    'beginner': 'Beginner',
    'intermediate': 'Intermediate',
    'advanced': 'Advanced'
  };
  return labels[difficulty];
};

const getDifficultyStyles = (difficulty: DifficultyLevel): string => {
  const styles: Record<DifficultyLevel, string> = {
    'beginner': 'bg-emerald-100 text-emerald-800 border-emerald-200',
    'intermediate': 'bg-amber-100 text-amber-800 border-amber-200',
    'advanced': 'bg-rose-100 text-rose-800 border-rose-200'
  };
  return styles[difficulty];
};

export const TTCitizenPlatformCard = React.forwardRef<HTMLDivElement, TTCitizenPlatformCardProps>(
  (
    {
      platformName,
      category,
      difficulty,
      xpPoints,
      impactFocus,
      platformIcon,
      ctaLabel = 'Learn More',
      onCTAClick,
      density = 'default',
      showImpact = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const Icon = platformIcon;
    const isCompact = density === 'compact';
    const displayImpact = showImpact && impactFocus;

    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col ${
          isCompact ? 'p-4 gap-3' : 'p-5 gap-4'
        } ${className}`}
        {...props}
      >
        {/* Platform Name + Icon */}
        <div className="flex items-center gap-3">
          {Icon && (
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center flex-shrink-0">
              <Icon className="w-6 h-6 text-slate-700" aria-hidden="true" />
            </div>
          )}
          <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} text-slate-900 leading-tight flex-1`}>
            {platformName}
          </h3>
        </div>

        {/* Category + Difficulty Chips */}
        <div className="flex flex-wrap items-center gap-2">
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border ${getCategoryStyles(category)}`}
            role="status"
            aria-label={`Category: ${getCategoryLabel(category)}`}
          >
            {getCategoryLabel(category)}
          </span>
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border ${getDifficultyStyles(difficulty)}`}
            role="status"
            aria-label={`Difficulty: ${getDifficultyLabel(difficulty)}`}
          >
            {getDifficultyLabel(difficulty)}
          </span>
        </div>

        {/* XP Points */}
        <div className="flex items-center gap-2">
          <svg 
            className="w-5 h-5 text-amber-500" 
            fill="currentColor" 
            viewBox="0 0 20 20"
            aria-hidden="true"
          >
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
          </svg>
          <span className="text-slate-900" aria-label={`${xpPoints} experience points`}>
            {xpPoints} XP
          </span>
        </div>

        {/* Impact Focus (Optional) */}
        {displayImpact && (
          <div className={`text-sm text-slate-600 ${isCompact ? 'line-clamp-2' : 'line-clamp-3'}`}>
            {impactFocus}
          </div>
        )}

        {/* CTA Button */}
        <div className="mt-auto pt-2">
          <Button
            variant="secondary"
            size={isCompact ? 'sm' : 'md'}
            onClick={onCTAClick}
            className="w-full"
            aria-label={`${ctaLabel} about ${platformName}`}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    );
  }
);

TTCitizenPlatformCard.displayName = 'TTCitizenPlatformCard';
