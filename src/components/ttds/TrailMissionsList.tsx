import React from 'react';
import { Map, Target, CheckCircle, Clock, ChevronRight } from 'lucide-react';
import { Button } from './Button';

export interface TrailMission {
  id: string;
  title: string;
  trailName: string;
  status: 'in-progress' | 'completed' | 'locked';
  progress?: number; // 0-100
  dueDate?: string;
  estimatedTime?: string;
}

export interface TrailMissionsListProps {
  missions?: TrailMission[];
  variant?: 'compact' | 'full';
  showTitle?: boolean;
  title?: string;
  maxItems?: number;
  onMissionClick?: (missionId: string) => void;
  onViewAllClick?: () => void;
  className?: string;
}

const defaultMissions: TrailMission[] = [
  {
    id: '1',
    title: 'Complete Data Model Fundamentals',
    trailName: 'Salesforce Admin Trail',
    status: 'in-progress',
    progress: 65,
    dueDate: '2025-12-01',
    estimatedTime: '2h',
  },
  {
    id: '2',
    title: 'Build Your First Flow',
    trailName: 'Automation Specialist',
    status: 'in-progress',
    progress: 30,
    dueDate: '2025-12-05',
    estimatedTime: '3h',
  },
  {
    id: '3',
    title: 'Security & Sharing Settings',
    trailName: 'Salesforce Admin Trail',
    status: 'locked',
    estimatedTime: '1.5h',
  },
];

export const TrailMissionsList = React.forwardRef<HTMLDivElement, TrailMissionsListProps>(
  (
    {
      missions = defaultMissions,
      variant = 'full',
      showTitle = true,
      title = 'Active Missions',
      maxItems,
      onMissionClick,
      onViewAllClick,
      className = '',
    },
    ref
  ) => {
    const isCompact = variant === 'compact';
    const displayMissions = maxItems ? missions.slice(0, maxItems) : missions;

    const getStatusIcon = (status: TrailMission['status']) => {
      switch (status) {
        case 'completed':
          return <CheckCircle className="h-4 w-4 text-emerald-600" />;
        case 'in-progress':
          return <Target className="h-4 w-4 text-blue-600" />;
        case 'locked':
          return <Clock className="h-4 w-4 text-slate-400" />;
      }
    };

    const getStatusColor = (status: TrailMission['status']) => {
      switch (status) {
        case 'completed':
          return 'bg-emerald-50 text-emerald-700 border-emerald-200';
        case 'in-progress':
          return 'bg-blue-50 text-blue-700 border-blue-200';
        case 'locked':
          return 'bg-slate-50 text-slate-500 border-slate-200';
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
              <Map className="h-5 w-5 text-emerald-600" />
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

        {/* Missions List */}
        <div className={`space-y-3 ${!showTitle ? '' : ''}`}>
          {displayMissions.length === 0 ? (
            <div className="py-8 text-center">
              <Map className="h-12 w-12 text-slate-300 mx-auto mb-3" />
              <p className="text-slate-500">No active missions</p>
              <p className="text-sm text-slate-400 mt-1">Start a new trail to begin learning</p>
            </div>
          ) : (
            displayMissions.map((mission) => (
              <div
                key={mission.id}
                onClick={() => onMissionClick?.(mission.id)}
                className={`
                  border rounded-lg p-4 transition-all cursor-pointer
                  ${getStatusColor(mission.status)}
                  ${mission.status === 'locked' ? 'opacity-60 cursor-not-allowed' : 'hover:shadow-md'}
                `}
                role="button"
                tabIndex={mission.status === 'locked' ? -1 : 0}
                aria-disabled={mission.status === 'locked'}
              >
                {/* Mission Title & Status */}
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex-1 min-w-0">
                    <h4 className="text-slate-900 mb-1">{mission.title}</h4>
                    <p className="text-sm text-slate-600">{mission.trailName}</p>
                  </div>
                  <div className="flex-shrink-0">{getStatusIcon(mission.status)}</div>
                </div>

                {/* Progress Bar (for in-progress missions) */}
                {mission.status === 'in-progress' && mission.progress !== undefined && (
                  <div className="mt-3">
                    <div className="flex items-center justify-between mb-1.5">
                      <span className="text-xs text-slate-600">Progress</span>
                      <span className="text-xs text-slate-700">{mission.progress}%</span>
                    </div>
                    <div className="w-full bg-slate-200 rounded-full h-2">
                      <div
                        className="bg-emerald-600 h-2 rounded-full transition-all duration-300"
                        style={{ width: `${mission.progress}%` }}
                        role="progressbar"
                        aria-valuenow={mission.progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                      />
                    </div>
                  </div>
                )}

                {/* Meta Info */}
                <div className="flex items-center gap-4 mt-3 text-xs text-slate-600">
                  {mission.estimatedTime && (
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{mission.estimatedTime}</span>
                    </div>
                  )}
                  {mission.dueDate && mission.status === 'in-progress' && (
                    <div className="flex items-center gap-1">
                      <span>Due {new Date(mission.dueDate).toLocaleDateString()}</span>
                    </div>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* View All Button (if there are more items) */}
        {maxItems && missions.length > maxItems && onViewAllClick && (
          <div className="mt-4 pt-4 border-t border-slate-200">
            <Button
              variant="secondary"
              size="small"
              onClick={onViewAllClick}
              className="w-full"
            >
              View All Missions ({missions.length})
            </Button>
          </div>
        )}
      </div>
    );
  }
);

TrailMissionsList.displayName = 'TrailMissionsList';
