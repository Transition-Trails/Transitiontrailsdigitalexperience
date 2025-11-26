import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { ChipStatus } from './ChipStatus';
import { Button } from './Button';
import { ExternalLink } from 'lucide-react';

export type RoadmapStatus = 'planned' | 'in-progress' | 'done';
export type RoadmapAudience = 'learners' | 'nonprofits' | 'donors' | 'admins';

export interface RoadmapItemCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields (5)
  featureName: string;
  description: string;
  audiences: RoadmapAudience[]; // One or more audiences
  status: RoadmapStatus;
  
  // Optional Fields
  liveExampleUrl?: string; // Only shown if feature is shipped
  liveExampleLabel?: string; // Override default "View Live Example"
  onLiveExampleClick?: () => void; // Click handler for live example link
  
  // Layout Options
  truncateDescription?: boolean; // Truncate to 3-4 lines
}

const statusConfig: Record<RoadmapStatus, { label: string; variant: 'planned' | 'in-progress' | 'completed' }> = {
  'planned': { label: 'Planned', variant: 'planned' },
  'in-progress': { label: 'In Progress', variant: 'in-progress' },
  'done': { label: 'Done', variant: 'completed' },
};

const audienceConfig: Record<RoadmapAudience, { label: string; variant: 'trail' | 'topic' | 'platform' | 'default' }> = {
  'learners': { label: 'Learners', variant: 'trail' },
  'nonprofits': { label: 'Nonprofits', variant: 'topic' },
  'donors': { label: 'Donors', variant: 'platform' },
  'admins': { label: 'Admins', variant: 'default' },
};

export const RoadmapItemCard = React.forwardRef<HTMLDivElement, RoadmapItemCardProps>(
  (
    {
      featureName,
      description,
      audiences,
      status,
      liveExampleUrl,
      liveExampleLabel = 'View Live Example',
      onLiveExampleClick,
      truncateDescription = false,
      className = '',
      ...props
    },
    ref
  ) => {
    const statusInfo = statusConfig[status];
    const hasLiveExample = Boolean(liveExampleUrl || onLiveExampleClick);

    return (
      <Card
        ref={ref}
        elevation="low"
        padding="normal"
        className={`flex flex-col h-full ${className}`}
        {...props}
      >
        <div className="flex flex-col gap-4">
          {/* Top Section: Feature Name + Status Chip */}
          <div className="flex items-start justify-between gap-3">
            <h3 className="text-slate-900 flex-1">{featureName}</h3>
            <ChipStatus
              status={statusInfo.variant}
              label={statusInfo.label}
            />
          </div>

          {/* Middle Section: Description */}
          <div>
            <p className={`text-slate-600 ${truncateDescription ? 'line-clamp-3' : ''}`}>
              {description}
            </p>
          </div>

          {/* Meta Section: Audience Tags */}
          <div className="flex flex-wrap gap-2">
            {audiences.map((audience) => {
              const audienceInfo = audienceConfig[audience];
              return (
                <Tag
                  key={audience}
                  variant={audienceInfo.variant}
                  label={audienceInfo.label}
                />
              );
            })}
          </div>

          {/* Bottom Section: Live Example Link (Conditional) */}
          {hasLiveExample && (
            <div className="pt-2 border-t border-slate-200">
              {liveExampleUrl ? (
                <a
                  href={liveExampleUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded transition-colors"
                  onClick={onLiveExampleClick}
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{liveExampleLabel}</span>
                </a>
              ) : (
                <button
                  onClick={onLiveExampleClick}
                  className="inline-flex items-center gap-2 text-sm text-emerald-600 hover:text-emerald-700 hover:underline focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 rounded transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  <span>{liveExampleLabel}</span>
                </button>
              )}
            </div>
          )}
        </div>
      </Card>
    );
  }
);

RoadmapItemCard.displayName = 'RoadmapItemCard';
