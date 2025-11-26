import React from 'react';
import { Trophy, Map, Target, Award, Star, TrendingUp } from 'lucide-react';

export interface LearnerStat {
  id: string;
  label: string;
  value: number;
  icon?: React.ReactNode;
  trend?: number; // Optional: percentage change
}

export interface LearnerStatsPanelProps {
  stats?: LearnerStat[];
  variant?: 'compact' | 'full';
  layout?: 'grid' | 'horizontal';
  showIcons?: boolean;
  showTitle?: boolean;
  title?: string;
  className?: string;
}

const defaultStats: LearnerStat[] = [
  { id: 'points', label: 'Total Points', value: 2450, icon: <Star className="h-5 w-5" /> },
  { id: 'trails', label: 'Trails Completed', value: 8, icon: <Map className="h-5 w-5" /> },
  { id: 'missions', label: 'Missions Completed', value: 24, icon: <Target className="h-5 w-5" /> },
  { id: 'capstones', label: 'Capstones Done', value: 3, icon: <Trophy className="h-5 w-5" /> },
  { id: 'badges', label: 'Badges Earned', value: 12, icon: <Award className="h-5 w-5" /> },
];

export const LearnerStatsPanel = React.forwardRef<HTMLDivElement, LearnerStatsPanelProps>(
  (
    {
      stats = defaultStats,
      variant = 'full',
      layout = 'grid',
      showIcons = true,
      showTitle = true,
      title = 'Your Progress',
      className = '',
    },
    ref
  ) => {
    const isCompact = variant === 'compact';
    const isGrid = layout === 'grid';

    // Format large numbers with commas
    const formatNumber = (num: number): string => {
      return num.toLocaleString();
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
        {/* Title */}
        {showTitle && (
          <div className={`${isCompact ? 'mb-3' : 'mb-4'}`}>
            <h3 className={`text-slate-900 ${isCompact ? 'text-base' : ''}`}>
              {title}
            </h3>
            {!isCompact && (
              <p className="text-sm text-slate-600 mt-1">
                Track your learning journey across trails and achievements
              </p>
            )}
          </div>
        )}

        {/* Stats Grid/Horizontal */}
        <div
          className={`
            ${isGrid 
              ? 'grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4'
              : 'flex flex-wrap gap-6'
            }
          `}
        >
          {stats.map((stat) => (
            <div
              key={stat.id}
              className={`
                ${isCompact ? 'space-y-1' : 'space-y-2'}
                ${!isGrid ? 'flex-1 min-w-[120px]' : ''}
              `}
            >
              {/* Icon + Label */}
              <div className="flex items-center gap-2">
                {showIcons && stat.icon && (
                  <div className="text-emerald-600">
                    {stat.icon}
                  </div>
                )}
                <p className={`text-slate-600 ${isCompact ? 'text-xs' : 'text-sm'}`}>
                  {stat.label}
                </p>
              </div>

              {/* Value */}
              <div className="flex items-baseline gap-2">
                <p className={`text-slate-900 ${isCompact ? 'text-xl' : 'text-2xl'}`}>
                  {formatNumber(stat.value)}
                </p>
                
                {/* Optional Trend Indicator */}
                {stat.trend !== undefined && stat.trend > 0 && (
                  <span className="flex items-center gap-1 text-xs text-emerald-600">
                    <TrendingUp className="h-3 w-3" />
                    +{stat.trend}%
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
);

LearnerStatsPanel.displayName = 'LearnerStatsPanel';
