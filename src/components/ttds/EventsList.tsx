import React from 'react';
import { Calendar, MapPin, Users, Clock, Video, ExternalLink } from 'lucide-react';
import { Button } from './Button';

export interface Event {
  id: string;
  title: string;
  type: 'workshop' | 'coaching' | 'webinar' | 'meetup';
  date: string;
  time: string;
  location?: string;
  isVirtual?: boolean;
  attendees?: number;
  maxAttendees?: number;
  registered?: boolean;
}

export interface EventsListProps {
  events?: Event[];
  variant?: 'compact' | 'full';
  showTitle?: boolean;
  title?: string;
  maxItems?: number;
  onEventClick?: (eventId: string) => void;
  onRegisterClick?: (eventId: string) => void;
  onViewAllClick?: () => void;
  className?: string;
}

const defaultEvents: Event[] = [
  {
    id: '1',
    title: 'Intro to Salesforce Admin',
    type: 'workshop',
    date: '2025-11-28',
    time: '2:00 PM EST',
    isVirtual: true,
    attendees: 24,
    maxAttendees: 30,
    registered: true,
  },
  {
    id: '2',
    title: 'Career Coaching Session',
    type: 'coaching',
    date: '2025-11-30',
    time: '10:00 AM EST',
    isVirtual: true,
    registered: false,
  },
  {
    id: '3',
    title: 'Community Meetup',
    type: 'meetup',
    date: '2025-12-02',
    time: '6:00 PM EST',
    location: 'Portland, OR',
    isVirtual: false,
    attendees: 15,
    maxAttendees: 25,
    registered: false,
  },
];

export const EventsList = React.forwardRef<HTMLDivElement, EventsListProps>(
  (
    {
      events = defaultEvents,
      variant = 'full',
      showTitle = true,
      title = 'Upcoming Events',
      maxItems,
      onEventClick,
      onRegisterClick,
      onViewAllClick,
      className = '',
    },
    ref
  ) => {
    const isCompact = variant === 'compact';
    const displayEvents = maxItems ? events.slice(0, maxItems) : events;

    const getEventTypeColor = (type: Event['type']) => {
      switch (type) {
        case 'workshop':
          return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'coaching':
          return 'bg-purple-50 text-purple-700 border-purple-200';
        case 'webinar':
          return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        case 'meetup':
          return 'bg-amber-50 text-amber-700 border-amber-200';
      }
    };

    const getEventTypeLabel = (type: Event['type']) => {
      return type.charAt(0).toUpperCase() + type.slice(1);
    };

    const formatDate = (dateString: string) => {
      const date = new Date(dateString);
      const today = new Date();
      const tomorrow = new Date(today);
      tomorrow.setDate(tomorrow.getDate() + 1);

      if (date.toDateString() === today.toDateString()) {
        return 'Today';
      } else if (date.toDateString() === tomorrow.toDateString()) {
        return 'Tomorrow';
      } else {
        return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
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
        {/* Header */}
        {showTitle && (
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-emerald-600" />
              <h3 className="text-slate-900">{title}</h3>
            </div>
            {onViewAllClick && (
              <button
                onClick={onViewAllClick}
                className="text-sm text-emerald-600 hover:text-emerald-700 transition-colors"
              >
                View All
              </button>
            )}
          </div>
        )}

        {/* Events List */}
        <div className={`space-y-3 ${!showTitle ? '' : ''}`}>
          {displayEvents.length === 0 ? (
            <div className="py-8 text-center">
              <Calendar className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No upcoming events</p>
              <p className="text-sm text-slate-400 mt-1">Check back soon for new opportunities</p>
            </div>
          ) : (
            displayEvents.map((event) => (
              <div
                key={event.id}
                onClick={() => onEventClick?.(event.id)}
                className={`
                  border border-slate-200 rounded-lg p-4 transition-all cursor-pointer
                  hover:shadow-md hover:border-slate-300
                  ${event.registered ? 'bg-emerald-50/30' : 'bg-white'}
                `}
                role="button"
                tabIndex={0}
              >
                {/* Event Type Badge */}
                <div className="flex items-start justify-between gap-3 mb-3">
                  <span
                    className={`
                      inline-flex items-center px-2.5 py-1 rounded-md text-xs border
                      ${getEventTypeColor(event.type)}
                    `}
                  >
                    {getEventTypeLabel(event.type)}
                  </span>
                  {event.registered && (
                    <span className="text-xs text-emerald-700 bg-emerald-100 px-2 py-1 rounded-md">
                      Registered
                    </span>
                  )}
                </div>

                {/* Event Title */}
                <h4 className="text-slate-900 mb-3">{event.title}</h4>

                {/* Event Details */}
                <div className="space-y-2 text-sm text-slate-600">
                  {/* Date & Time */}
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4 text-slate-400" />
                    <span>
                      {formatDate(event.date)} at {event.time}
                    </span>
                  </div>

                  {/* Location */}
                  <div className="flex items-center gap-2">
                    {event.isVirtual ? (
                      <>
                        <Video className="h-4 w-4 text-slate-400" />
                        <span>Virtual Event</span>
                      </>
                    ) : (
                      <>
                        <MapPin className="h-4 w-4 text-slate-400" />
                        <span>{event.location || 'Location TBD'}</span>
                      </>
                    )}
                  </div>

                  {/* Attendees */}
                  {event.attendees !== undefined && (
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-slate-400" />
                      <span>
                        {event.attendees} attending
                        {event.maxAttendees && ` (${event.maxAttendees - event.attendees} spots left)`}
                      </span>
                    </div>
                  )}
                </div>

                {/* Action Button */}
                {!event.registered && (
                  <div className="mt-4 pt-3 border-t border-slate-200">
                    <Button
                      variant="secondary"
                      size="small"
                      onClick={(e) => {
                        e.stopPropagation();
                        onRegisterClick?.(event.id);
                      }}
                      className="w-full"
                    >
                      Register for Event
                    </Button>
                  </div>
                )}
              </div>
            ))
          )}
        </div>

        {/* View All Button */}
        {maxItems && events.length > maxItems && onViewAllClick && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <Button
              variant="secondary"
              size="small"
              onClick={onViewAllClick}
              className="w-full"
            >
              View All Events ({events.length})
            </Button>
          </div>
        )}
      </div>
    );
  }
);

EventsList.displayName = 'EventsList';
