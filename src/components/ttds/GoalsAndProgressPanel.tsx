import React from 'react';
import { Target, MapPin, Lightbulb, ArrowRight, Edit2, TrendingUp } from 'lucide-react';
import { Button } from './Button';

export interface GoalsAndProgressPanelProps {
  careerGoal?: string;
  currentFocusTrail?: string;
  nextRecommendation?: string;
  onUpdateGoal?: () => void;
  variant?: 'full' | 'compact';
  showIcons?: boolean;
  showRecommendation?: boolean;
  ctaText?: string;
  ctaVariant?: 'button' | 'link';
  className?: string;
}

export const GoalsAndProgressPanel = React.forwardRef<HTMLDivElement, GoalsAndProgressPanelProps>(
  (
    {
      careerGoal = 'Admin → Consultant',
      currentFocusTrail = 'Guided Trail: Admin Mastery',
      nextRecommendation = 'AI Trail after Admin',
      onUpdateGoal,
      variant = 'full',
      showIcons = true,
      showRecommendation = true,
      ctaText = 'Update Goal',
      ctaVariant = 'button',
      className = '',
    },
    ref
  ) => {
    const isCompact = variant === 'compact';

    const handleUpdateGoal = () => {
      if (onUpdateGoal) {
        onUpdateGoal();
      } else {
        console.log('Update goal clicked');
      }
    };

    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-xl border border-slate-200
          ${isCompact ? 'p-4' : 'p-6'}
          ${className}
        `}
      >
        {/* Panel Title */}
        <div className={`${isCompact ? 'mb-3' : 'mb-4'}`}>
          <h3 className={`text-slate-900 ${isCompact ? 'text-base' : ''}`}>
            Goals & Progress
          </h3>
          {!isCompact && (
            <p className="text-sm text-slate-600 mt-1">
              Your learning direction and next steps
            </p>
          )}
        </div>

        {/* Content Sections */}
        <div className={`space-y-${isCompact ? '3' : '4'}`}>
          {/* Career Goal */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {showIcons && (
                <Target className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} text-emerald-600`} />
              )}
              <p className={`${isCompact ? 'text-xs' : 'text-sm'} text-slate-600`}>
                Career Goal
              </p>
            </div>
            <p className={`${isCompact ? 'text-base' : 'text-lg'} text-slate-900 ${showIcons ? 'pl-7' : ''}`}>
              {careerGoal}
            </p>
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100"></div>

          {/* Current Focus Trail */}
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              {showIcons && (
                <MapPin className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} text-blue-600`} />
              )}
              <p className={`${isCompact ? 'text-xs' : 'text-sm'} text-slate-600`}>
                Current Focus Trail
              </p>
            </div>
            <p className={`${isCompact ? 'text-base' : 'text-lg'} text-slate-900 ${showIcons ? 'pl-7' : ''}`}>
              {currentFocusTrail}
            </p>
          </div>

          {/* Next Recommendation (conditional) */}
          {showRecommendation && (
            <>
              {/* Divider */}
              <div className="border-t border-slate-100"></div>

              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  {showIcons && (
                    <Lightbulb className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} text-amber-600`} />
                  )}
                  <p className={`${isCompact ? 'text-xs' : 'text-sm'} text-slate-600`}>
                    Next Recommendation
                  </p>
                </div>
                <p className={`${isCompact ? 'text-base' : 'text-lg'} text-slate-900 ${showIcons ? 'pl-7' : ''}`}>
                  {nextRecommendation}
                </p>
              </div>
            </>
          )}

          {/* Divider before CTA */}
          <div className="border-t border-slate-100"></div>

          {/* CTA */}
          {ctaVariant === 'button' ? (
            <Button
              variant="secondary"
              size={isCompact ? 'small' : 'medium'}
              onClick={handleUpdateGoal}
              className="w-full sm:w-auto"
            >
              <Edit2 className="h-4 w-4" />
              {ctaText}
            </Button>
          ) : (
            <button
              onClick={handleUpdateGoal}
              className={`
                inline-flex items-center gap-2
                ${isCompact ? 'text-sm' : 'text-base'}
                text-emerald-700 hover:text-emerald-800
                transition-colors
                focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded
              `}
              aria-label={ctaText}
            >
              <Edit2 className="h-4 w-4" />
              <span>{ctaText}</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          )}
        </div>
      </div>
    );
  }
);

GoalsAndProgressPanel.displayName = 'GoalsAndProgressPanel';
