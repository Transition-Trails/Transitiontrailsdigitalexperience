import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { Button } from './Button';
import { Calendar, User, Video, ExternalLink } from 'lucide-react';

export type SessionState = 'upcoming' | 'completed';
export type SessionType = 'trail-talk' | 'study-group' | 'partner-qa' | 'cohort-session' | 'workshop';

export interface EventSessionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields (5)
  title: string;
  dateTime: string;
  host: string;
  sessionType: SessionType;
  
  // State determines CTA
  state?: SessionState;
  
  // Optional Configuration
  hostAvatar?: string;
  onCtaClick?: () => void;
  ctaLabel?: string; // Override default CTA label
}

const sessionTypeConfig: Record<SessionType, { label: string; variant: 'trail' | 'topic' | 'platform' | 'default' }> = {
  'trail-talk': { label: 'Trail Talk', variant: 'trail' },
  'study-group': { label: 'Study Group', variant: 'topic' },
  'partner-qa': { label: 'Partner Q&A', variant: 'platform' },
  'cohort-session': { label: 'Cohort Session', variant: 'default' },
  'workshop': { label: 'Workshop', variant: 'topic' },
};

export const EventSessionCard = React.forwardRef<HTMLDivElement, EventSessionCardProps>(
  (
    {
      title,
      dateTime,
      host,
      sessionType,
      state = 'upcoming',
      hostAvatar,
      onCtaClick,
      ctaLabel,
      className = '',
      ...props
    },
    ref
  ) => {
    const typeInfo = sessionTypeConfig[sessionType];
    
    // Default CTA labels based on state
    const defaultCtaLabel = state === 'upcoming' ? 'Join Session' : 'View Recording';
    const finalCtaLabel = ctaLabel || defaultCtaLabel;
    
    // CTA icon based on state
    const ctaIcon = state === 'upcoming' ? <Video className="h-4 w-4" /> : <ExternalLink className="h-4 w-4" />;

    return (
      <Card
        ref={ref}
        elevation="low"
        padding="normal"
        className={`flex flex-col h-full ${className}`}
        {...props}
      >
        <div className="flex flex-col gap-4 flex-1">
          {/* Top Section: Session Type Chip */}
          <div className="flex items-center gap-2">
            <Tag
              variant={typeInfo.variant}
              label={typeInfo.label}
            />
          </div>

          {/* Title */}
          <div>
            <h3 className="text-slate-900">{title}</h3>
          </div>

          {/* Date & Time */}
          <div className="flex items-center gap-2">
            <Calendar className="h-4 w-4 text-slate-500 flex-shrink-0" />
            <p className="text-sm text-slate-600">{dateTime}</p>
          </div>

          {/* Host Section */}
          <div className="flex items-center gap-3">
            {hostAvatar ? (
              <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                <img
                  src={hostAvatar}
                  alt={host}
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                <User className="h-4 w-4 text-emerald-700" />
              </div>
            )}
            <p className="text-sm text-slate-600">Hosted by {host}</p>
          </div>

          {/* Spacer to push CTA to bottom */}
          <div className="flex-1" />

          {/* CTA Button */}
          <div className="pt-2 border-t border-slate-200">
            <Button
              variant="primary"
              size="medium"
              fullWidth
              iconLeft={ctaIcon}
              onClick={onCtaClick}
              aria-label={finalCtaLabel}
            >
              {finalCtaLabel}
            </Button>
          </div>
        </div>
      </Card>
    );
  }
);

EventSessionCard.displayName = 'EventSessionCard';
