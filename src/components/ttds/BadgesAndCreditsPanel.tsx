import React from 'react';
import { Award, Trophy, Star, Users, BookOpen, Zap, ExternalLink } from 'lucide-react';
import { Button } from './Button';
import { Tooltip } from './Tooltip';

export type CreditCategory = {
  id: string;
  label: string;
  amount: number;
  icon?: React.ReactNode;
};

export type Badge = {
  id: string;
  title: string;
  icon: React.ReactNode;
  earned: boolean;
  description?: string;
};

export type CreditsStructure = 'total' | 'breakdown';
export type BadgeCount = 'few' | 'many';
export type PanelDensity = 'default' | 'compact';

export interface BadgesAndCreditsPanelProps extends React.HTMLAttributes<HTMLDivElement> {
  // Credits (Required)
  totalCredits?: number; // Total credits earned
  creditCategories?: CreditCategory[]; // Optional breakdown
  creditsStructure?: CreditsStructure; // 'total' or 'breakdown'
  
  // Badges (Required)
  badges?: Badge[]; // Array of badge objects
  maxVisibleBadges?: number; // Max badges to show before overflow (default: 6)
  
  // CTA (Required)
  ctaText?: string; // CTA button/link text
  ctaHref?: string; // Optional href for link
  onCTAClick?: () => void; // Click handler
  
  // Variants
  density?: PanelDensity; // 'default' or 'compact'
  
  // Display Options
  showCreditIcon?: boolean; // Show icon next to credits
}

const defaultBadges: Badge[] = [
  { id: '1', title: 'First Steps', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true, description: 'Completed your first learning activity' },
  { id: '2', title: 'Trail Blazer', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true, description: 'Finished 5 trails' },
  { id: '3', title: 'Community Helper', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true, description: 'Helped 10 peers' },
  { id: '4', title: 'Knowledge Seeker', icon: <BookOpen className="h-5 w-5 text-purple-500" />, earned: true, description: 'Earned 100 credits' },
];

export const BadgesAndCreditsPanel = React.forwardRef<HTMLDivElement, BadgesAndCreditsPanelProps>(
  (
    {
      totalCredits = 125,
      creditCategories = [],
      creditsStructure = 'total',
      badges = defaultBadges,
      maxVisibleBadges = 6,
      ctaText = 'View All Achievements',
      ctaHref,
      onCTAClick,
      density = 'default',
      showCreditIcon = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const isCompact = density === 'compact';
    const earnedBadges = badges.filter(b => b.earned);
    const visibleBadges = earnedBadges.slice(0, maxVisibleBadges);
    const overflowCount = earnedBadges.length - maxVisibleBadges;
    const hasOverflow = overflowCount > 0;

    const handleCTAClick = () => {
      if (onCTAClick) {
        onCTAClick();
      }
    };

    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-xl border border-slate-200 shadow-sm
          ${isCompact ? 'p-4' : 'p-6'}
          ${className}
        `}
        {...props}
      >
        <div className={`flex flex-col ${isCompact ? 'gap-4' : 'gap-5'}`}>
          {/* Top Section: Credits Summary */}
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h3 className={`text-slate-900 ${isCompact ? 'text-base' : ''}`}>
                Credits & Achievements
              </h3>
              {showCreditIcon && (
                <Award className={`${isCompact ? 'h-5 w-5' : 'h-6 w-6'} text-emerald-600`} />
              )}
            </div>

            {/* Credits Display */}
            {creditsStructure === 'total' ? (
              // Total Credits Only
              <div className="flex items-baseline gap-2">
                <span className="text-emerald-700" style={{ fontSize: isCompact ? '2rem' : '2.5rem', fontWeight: 700, lineHeight: 1 }}>
                  {totalCredits}
                </span>
                <span className="text-slate-600">Credits</span>
              </div>
            ) : (
              // Category Breakdown
              <div className="space-y-2">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-emerald-700" style={{ fontSize: isCompact ? '1.75rem' : '2rem', fontWeight: 700, lineHeight: 1 }}>
                    {totalCredits}
                  </span>
                  <span className="text-slate-600">Total Credits</span>
                </div>
                <div className="grid grid-cols-1 gap-2">
                  {creditCategories.map((category) => (
                    <div
                      key={category.id}
                      className="flex items-center justify-between py-1.5 px-3 bg-slate-50 rounded-lg border border-slate-200"
                    >
                      <div className="flex items-center gap-2">
                        {category.icon && (
                          <span className="text-slate-600">{category.icon}</span>
                        )}
                        <span className="text-sm text-slate-700">{category.label}</span>
                      </div>
                      <span className="text-sm text-slate-900">{category.amount}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100"></div>

          {/* Middle Section: Badges */}
          <div className="space-y-3">
            <h4 className={`${isCompact ? 'text-sm' : 'text-base'} text-slate-700`}>
              Recent Badges
            </h4>

            {earnedBadges.length === 0 ? (
              <div className="text-center py-4">
                <p className="text-sm text-slate-500">No badges earned yet</p>
              </div>
            ) : (
              <div className="flex flex-wrap gap-2">
                {visibleBadges.map((badge) => (
                  <Tooltip key={badge.id} content={badge.description || badge.title}>
                    <div
                      className={`
                        flex items-center justify-center
                        ${isCompact ? 'h-12 w-12' : 'h-14 w-14'}
                        bg-slate-50 rounded-lg border border-slate-200
                        hover:border-emerald-300 hover:bg-emerald-50
                        transition-colors cursor-pointer
                      `}
                      role="img"
                      aria-label={badge.title}
                    >
                      {badge.icon}
                    </div>
                  </Tooltip>
                ))}
                
                {/* Overflow Indicator */}
                {hasOverflow && (
                  <div
                    className={`
                      flex items-center justify-center
                      ${isCompact ? 'h-12 w-12' : 'h-14 w-14'}
                      bg-slate-100 rounded-lg border border-slate-300
                      text-slate-700 cursor-pointer
                      hover:bg-slate-200 transition-colors
                    `}
                    onClick={handleCTAClick}
                    role="button"
                    aria-label={`View ${overflowCount} more badges`}
                  >
                    <span className="text-sm">+{overflowCount}</span>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-slate-100"></div>

          {/* Bottom Section: CTA */}
          <div>
            {ctaHref ? (
              <a
                href={ctaHref}
                onClick={handleCTAClick}
                className="flex items-center justify-center gap-2 text-sm text-emerald-700 hover:text-emerald-800 transition-colors group"
              >
                {ctaText}
                <ExternalLink className="h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
              </a>
            ) : (
              <Button
                variant="secondary"
                size={isCompact ? 'small' : 'medium'}
                onClick={handleCTAClick}
                className="w-full"
              >
                {ctaText}
              </Button>
            )}
          </div>
        </div>
      </div>
    );
  }
);

BadgesAndCreditsPanel.displayName = 'BadgesAndCreditsPanel';
