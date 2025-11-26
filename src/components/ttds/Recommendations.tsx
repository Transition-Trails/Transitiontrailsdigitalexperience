import React from 'react';
import { Lightbulb, ArrowRight, Star, TrendingUp, BookOpen } from 'lucide-react';

export interface Recommendation {
  id: string;
  title: string;
  type: 'trail' | 'skill' | 'resource' | 'event';
  description: string;
  reason?: string;
  priority?: 'high' | 'medium' | 'low';
  url?: string;
}

export interface RecommendationsProps {
  recommendations?: Recommendation[];
  variant?: 'compact' | 'full';
  showTitle?: boolean;
  title?: string;
  maxItems?: number;
  onRecommendationClick?: (recommendationId: string) => void;
  className?: string;
}

const defaultRecommendations: Recommendation[] = [
  {
    id: '1',
    title: 'Salesforce Admin Trail',
    type: 'trail',
    description: 'Build foundational admin skills',
    reason: 'Based on your current progress',
    priority: 'high',
  },
  {
    id: '2',
    title: 'Data Modeling',
    type: 'skill',
    description: 'Master object relationships',
    reason: 'Complements your current trail',
    priority: 'medium',
  },
  {
    id: '3',
    title: 'Career Workshop',
    type: 'event',
    description: 'Resume & interview prep',
    reason: 'Popular with learners like you',
    priority: 'medium',
  },
];

export const Recommendations = React.forwardRef<HTMLDivElement, RecommendationsProps>(
  (
    {
      recommendations = defaultRecommendations,
      variant = 'full',
      showTitle = true,
      title = 'Recommended for You',
      maxItems,
      onRecommendationClick,
      className = '',
    },
    ref
  ) => {
    const isCompact = variant === 'compact';
    const displayRecommendations = maxItems
      ? recommendations.slice(0, maxItems)
      : recommendations;

    const getTypeIcon = (type: Recommendation['type']) => {
      switch (type) {
        case 'trail':
          return <BookOpen className="h-4 w-4" />;
        case 'skill':
          return <Star className="h-4 w-4" />;
        case 'resource':
          return <Lightbulb className="h-4 w-4" />;
        case 'event':
          return <TrendingUp className="h-4 w-4" />;
      }
    };

    const getTypeColor = (type: Recommendation['type']) => {
      switch (type) {
        case 'trail':
          return 'text-blue-600 bg-blue-50';
        case 'skill':
          return 'text-purple-600 bg-purple-50';
        case 'resource':
          return 'text-amber-600 bg-amber-50';
        case 'event':
          return 'text-emerald-600 bg-emerald-50';
      }
    };

    const getPriorityIndicator = (priority?: Recommendation['priority']) => {
      if (!priority || priority === 'low') return null;
      
      return (
        <div
          className={`
            h-2 w-2 rounded-full
            ${priority === 'high' ? 'bg-emerald-500' : 'bg-blue-500'}
          `}
          title={`${priority.charAt(0).toUpperCase() + priority.slice(1)} priority`}
        />
      );
    };

    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-lg border border-slate-200 shadow-sm
          ${isCompact ? 'p-4' : 'p-5'}
          ${className}
        `}
      >
        {/* Header */}
        {showTitle && (
          <div className="flex items-center gap-2 mb-4">
            <Lightbulb className="h-4 w-4 text-emerald-600" />
            <h3 className="text-slate-900">{title}</h3>
          </div>
        )}

        {/* Recommendations List */}
        <div className="space-y-3">
          {displayRecommendations.length === 0 ? (
            <div className="py-6 text-center">
              <Lightbulb className="h-10 w-10 text-slate-300 mx-auto mb-2" />
              <p className="text-sm text-slate-500">No recommendations yet</p>
            </div>
          ) : (
            displayRecommendations.map((rec) => (
              <div
                key={rec.id}
                onClick={() => onRecommendationClick?.(rec.id)}
                className={`
                  border border-slate-200 rounded-lg p-3 transition-all cursor-pointer
                  hover:shadow-md hover:border-slate-300 group
                `}
                role="button"
                tabIndex={0}
              >
                {/* Type Icon & Priority */}
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className={`p-1.5 rounded-md ${getTypeColor(rec.type)}`}>
                    {getTypeIcon(rec.type)}
                  </div>
                  {getPriorityIndicator(rec.priority)}
                </div>

                {/* Title */}
                <h4 className="text-slate-900 text-sm mb-1.5 group-hover:text-emerald-700 transition-colors">
                  {rec.title}
                </h4>

                {/* Description */}
                <p className="text-xs text-slate-600 mb-2 line-clamp-2">
                  {rec.description}
                </p>

                {/* Reason */}
                {rec.reason && (
                  <p className="text-xs text-slate-500 italic">
                    {rec.reason}
                  </p>
                )}

                {/* Arrow Icon on Hover */}
                <div className="flex items-center justify-end mt-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <ArrowRight className="h-4 w-4 text-emerald-600" />
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer Message */}
        {displayRecommendations.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-200">
            <p className="text-xs text-slate-500 text-center">
              Recommendations update based on your progress
            </p>
          </div>
        )}
      </div>
    );
  }
);

Recommendations.displayName = 'Recommendations';
