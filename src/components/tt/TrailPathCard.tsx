import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

export type TrailDifficulty = 'beginner' | 'intermediate' | 'advanced';
export type TrailDensity = 'default' | 'compact';

export interface TTTrailPathCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  title: string; // Path name (e.g., "Salesforce Admin", "AI Specialist")
  difficulty: TrailDifficulty; // Beginner, Intermediate, Advanced
  xpTotal: number; // Total XP for this path (e.g., 300)
  icon: React.ReactNode; // Icon representing the discipline
  description: string; // 1-2 line description of the path
  
  // Optional Fields
  isNew?: boolean; // Show "NEW" chip for newly launched paths
  ctaLabel?: string; // CTA button text (default: "View Trail")
  ctaVariant?: 'primary' | 'secondary' | 'link'; // CTA button style
  
  // Variants
  density?: TrailDensity; // default | compact
  theme?: 'light' | 'dark';
  
  // Event Handlers
  onCtaClick?: () => void;
}

// Helper: Get difficulty chip styling
const getDifficultyStyles = (difficulty: TrailDifficulty): { bg: string; text: string; border: string; label: string } => {
  const styles: Record<TrailDifficulty, { bg: string; text: string; border: string; label: string }> = {
    'beginner': {
      bg: 'bg-emerald-100',
      text: 'text-emerald-700',
      border: 'border-emerald-200',
      label: 'Beginner'
    },
    'intermediate': {
      bg: 'bg-blue-100',
      text: 'text-blue-700',
      border: 'border-blue-200',
      label: 'Intermediate'
    },
    'advanced': {
      bg: 'bg-purple-100',
      text: 'text-purple-700',
      border: 'border-purple-200',
      label: 'Advanced'
    }
  };
  return styles[difficulty];
};

// Helper: Get theme-specific styles
const getThemeStyles = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    return {
      card: 'bg-slate-800 border-slate-700',
      title: 'text-slate-100',
      description: 'text-slate-300',
      xp: 'text-slate-400',
      iconBg: 'bg-slate-700/50'
    };
  }
  return {
    card: 'bg-white border-slate-200',
    title: 'text-slate-900',
    description: 'text-slate-600',
    xp: 'text-slate-600',
    iconBg: 'bg-slate-50'
  };
};

// Helper: Get CTA button styles
const getCtaStyles = (variant: 'primary' | 'secondary' | 'link', theme: 'light' | 'dark') => {
  if (variant === 'primary') {
    return theme === 'dark'
      ? 'bg-blue-600 hover:bg-blue-700 text-white border-transparent'
      : 'bg-blue-600 hover:bg-blue-700 text-white border-transparent';
  }
  if (variant === 'secondary') {
    return theme === 'dark'
      ? 'bg-slate-700 hover:bg-slate-600 text-slate-100 border-slate-600'
      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 border-slate-200';
  }
  // link variant
  return theme === 'dark'
    ? 'bg-transparent hover:bg-slate-700 text-blue-400 border-transparent'
    : 'bg-transparent hover:bg-slate-50 text-blue-600 border-transparent';
};

export const TTTrailPathCard = React.forwardRef<HTMLDivElement, TTTrailPathCardProps>(
  (
    {
      title,
      difficulty,
      xpTotal,
      icon,
      description,
      isNew = false,
      ctaLabel = 'View Trail',
      ctaVariant = 'primary',
      density = 'default',
      theme = 'light',
      onCtaClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const difficultyStyle = getDifficultyStyles(difficulty);
    const themeStyle = getThemeStyles(theme);
    const ctaStyle = getCtaStyles(ctaVariant, theme);
    const isCompact = density === 'compact';

    return (
      <div
        ref={ref}
        className={`${themeStyle.card} rounded-lg border shadow-sm hover:shadow-md transition-shadow ${isCompact ? 'p-4' : 'p-6'} ${className}`}
        role="article"
        aria-labelledby={`trail-${title.replace(/\s+/g, '-').toLowerCase()}`}
        tabIndex={0}
        {...props}
      >
        {/* Top Area: Icon, Title, NEW Chip */}
        <div className={`flex items-start gap-4 ${isCompact ? 'mb-3' : 'mb-4'}`}>
          {/* Icon */}
          <div
            className={`${themeStyle.iconBg} rounded-lg ${isCompact ? 'p-2.5' : 'p-3'} flex-shrink-0`}
            aria-hidden="true"
          >
            <div className={`${isCompact ? 'w-5 h-5' : 'w-6 h-6'} ${themeStyle.title}`}>
              {icon}
            </div>
          </div>

          {/* Title + NEW Chip */}
          <div className="flex-1 min-w-0">
            <div className="flex items-start gap-2 flex-wrap">
              <h3
                id={`trail-${title.replace(/\s+/g, '-').toLowerCase()}`}
                className={`${isCompact ? 'text-lg' : 'text-xl'} ${themeStyle.title} leading-tight`}
              >
                {title}
              </h3>
              {isNew && (
                <span
                  className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-amber-100 to-orange-100 text-amber-700 rounded-full text-xs border border-amber-200 flex-shrink-0"
                  role="status"
                  aria-label="New learning path"
                >
                  <Sparkles className="w-3 h-3" aria-hidden="true" />
                  <span>NEW</span>
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Mid Area: Difficulty Chip, XP, Description */}
        <div className={`space-y-3 ${isCompact ? 'mb-3' : 'mb-4'}`}>
          {/* Difficulty + XP */}
          <div className="flex items-center gap-3 flex-wrap">
            <span
              className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border ${difficultyStyle.bg} ${difficultyStyle.text} ${difficultyStyle.border}`}
              role="status"
              aria-label={`Difficulty: ${difficultyStyle.label}`}
            >
              {difficultyStyle.label}
            </span>
            <span className={`text-sm ${themeStyle.xp}`} aria-label={`${xpTotal} experience points`}>
              {xpTotal} XP
            </span>
          </div>

          {/* Description */}
          {!isCompact && (
            <p className={`text-sm ${themeStyle.description} leading-relaxed`}>
              {description}
            </p>
          )}
        </div>

        {/* Bottom Area: CTA Button */}
        <button
          onClick={onCtaClick}
          className={`w-full flex items-center justify-center gap-2 ${isCompact ? 'px-3 py-2 text-sm' : 'px-4 py-2.5 text-sm'} rounded-md border transition-colors ${ctaStyle}`}
          aria-label={`${ctaLabel} for ${title}`}
        >
          <span>{ctaLabel}</span>
          <ArrowRight className={`${isCompact ? 'w-4 h-4' : 'w-4 h-4'}`} aria-hidden="true" />
        </button>
      </div>
    );
  }
);

TTTrailPathCard.displayName = 'TTTrailPathCard';
