import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';

export type ActivityType = 'study-group' | 'peer-review' | 'capstone';

export interface LearningActivityCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  activityType: ActivityType;
  title: string;
  
  // Optional Fields
  description?: string; // 1-2 sentence summary, auto-truncated
  tags?: string[]; // Skills, tools, or category tags
  
  // Future-ready metadata (not implemented yet, but structurally supported)
  // duration?: string;
  // facilitator?: string;
  // progress?: number;
  
  // Layout Options
  truncateDescription?: boolean; // Force 3-line truncation (default: true)
}

const activityTypeConfig: Record<ActivityType, { label: string; variant: 'trail' | 'topic' | 'platform' }> = {
  'study-group': { label: 'Study Group', variant: 'trail' },
  'peer-review': { label: 'Peer Review', variant: 'topic' },
  'capstone': { label: 'Capstone Project', variant: 'platform' },
};

export const LearningActivityCard = React.forwardRef<HTMLDivElement, LearningActivityCardProps>(
  (
    {
      activityType,
      title,
      description,
      tags = [],
      truncateDescription = true,
      className = '',
      ...props
    },
    ref
  ) => {
    const activityInfo = activityTypeConfig[activityType];

    return (
      <Card
        ref={ref}
        elevation="low"
        padding="normal"
        className={`flex flex-col h-full ${className}`}
        {...props}
      >
        <div className="flex flex-col gap-3">
          {/* Top Section: Activity Type Tag */}
          <div>
            <Tag
              variant={activityInfo.variant}
              label={activityInfo.label}
            />
          </div>

          {/* Middle Section: Title + Description */}
          <div className="flex flex-col gap-2">
            <h3 className="text-slate-900">{title}</h3>
            {description && (
              <p className={`text-slate-600 ${truncateDescription ? 'line-clamp-3' : ''}`}>
                {description}
              </p>
            )}
          </div>

          {/* Bottom Section: Tags (Skills/Tools/Category) */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2">
              {tags.map((tag, index) => (
                <Tag
                  key={`${tag}-${index}`}
                  variant="default"
                  label={tag}
                />
              ))}
            </div>
          )}
        </div>
      </Card>
    );
  }
);

LearningActivityCard.displayName = 'LearningActivityCard';
