import React from 'react';
import { Button } from '../ttds/Button';
import { Eye, Upload, CheckCircle, Clock, AlertCircle } from 'lucide-react';

export type MissionType = 'daily' | 'sprint' | 'capstone';
export type MissionStatus = 'not-started' | 'in-progress' | 'complete';
export type MissionDensity = 'full' | 'compact';

export interface TTTrailMissionCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  title: string; // e.g., "Complete Dashboard Build"
  missionType: MissionType; // daily | sprint | capstone
  points: number; // XP value, e.g., 25
  status: MissionStatus; // not-started | in-progress | complete
  programName: string; // e.g., "Guided Trail", "AI Trail", "BA Track"
  
  // Optional Fields
  dueDate?: string; // e.g., "Due today", "Due in 3 days", "Nov 28, 2025"
  isOverdue?: boolean; // Indicates if mission is overdue
  progressPercent?: number; // Optional progress bar percentage (0-100)
  
  // Event Handlers
  onView?: () => void;
  onSubmit?: () => void;
  onMarkComplete?: () => void;
  
  // Variants
  density?: MissionDensity; // full | compact (show/hide action buttons)
  showDueDate?: boolean; // Show/hide due date (default: true if dueDate provided)
  showActions?: boolean; // Override to show/hide actions regardless of density
}

// Helper functions
const getMissionTypeLabel = (type: MissionType): string => {
  const labels: Record<MissionType, string> = {
    'daily': 'Daily Mission',
    'sprint': 'Sprint',
    'capstone': 'Capstone'
  };
  return labels[type];
};

const getMissionTypeStyles = (type: MissionType): string => {
  const styles: Record<MissionType, string> = {
    'daily': 'bg-blue-100 text-blue-800 border-blue-200',
    'sprint': 'bg-purple-100 text-purple-800 border-purple-200',
    'capstone': 'bg-amber-100 text-amber-800 border-amber-200'
  };
  return styles[type];
};

const getStatusLabel = (status: MissionStatus): string => {
  const labels: Record<MissionStatus, string> = {
    'not-started': 'Not Started',
    'in-progress': 'In Progress',
    'complete': 'Complete'
  };
  return labels[status];
};

const getStatusStyles = (status: MissionStatus): string => {
  const styles: Record<MissionStatus, string> = {
    'not-started': 'bg-slate-100 text-slate-700 border-slate-200',
    'in-progress': 'bg-emerald-100 text-emerald-700 border-emerald-200',
    'complete': 'bg-green-100 text-green-800 border-green-200'
  };
  return styles[status];
};

const getStatusIcon = (status: MissionStatus) => {
  const icons: Record<MissionStatus, React.ReactNode> = {
    'not-started': <Clock className="w-3.5 h-3.5" aria-hidden="true" />,
    'in-progress': <AlertCircle className="w-3.5 h-3.5" aria-hidden="true" />,
    'complete': <CheckCircle className="w-3.5 h-3.5" aria-hidden="true" />
  };
  return icons[status];
};

const getProgramStyles = (programName: string): string => {
  // Simple color mapping based on program name keywords
  const name = programName.toLowerCase();
  if (name.includes('guided')) return 'bg-indigo-100 text-indigo-800 border-indigo-200';
  if (name.includes('ai')) return 'bg-purple-100 text-purple-800 border-purple-200';
  if (name.includes('ba') || name.includes('business')) return 'bg-rose-100 text-rose-800 border-rose-200';
  if (name.includes('explorer')) return 'bg-teal-100 text-teal-800 border-teal-200';
  return 'bg-slate-100 text-slate-700 border-slate-200';
};

export const TTTrailMissionCard = React.forwardRef<HTMLDivElement, TTTrailMissionCardProps>(
  (
    {
      title,
      missionType,
      points,
      status,
      programName,
      dueDate,
      isOverdue = false,
      progressPercent,
      onView,
      onSubmit,
      onMarkComplete,
      density = 'full',
      showDueDate = true,
      showActions,
      className = '',
      ...props
    },
    ref
  ) => {
    const isCompact = density === 'compact';
    const displayActions = showActions !== undefined ? showActions : !isCompact;
    const displayDueDate = showDueDate && dueDate;
    const showProgress = status === 'in-progress' && progressPercent !== undefined;

    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-slate-200 shadow-sm hover:shadow-md transition-shadow flex flex-col ${
          isCompact ? 'p-4 gap-3' : 'p-5 gap-4'
        } ${className}`}
        role="article"
        aria-label={`${getMissionTypeLabel(missionType)}: ${title}`}
        {...props}
      >
        {/* Header Row: Title + Status */}
        <div className="flex items-start justify-between gap-3">
          <h3 className={`${isCompact ? 'text-lg' : 'text-xl'} text-slate-900 leading-tight flex-1`}>
            {title}
          </h3>
          <span
            className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs border flex-shrink-0 ${getStatusStyles(status)}`}
            role="status"
            aria-label={`Status: ${getStatusLabel(status)}`}
          >
            {getStatusIcon(status)}
            <span>{getStatusLabel(status)}</span>
          </span>
        </div>

        {/* Progress Bar (Optional - only for in-progress) */}
        {showProgress && (
          <div className="w-full bg-slate-100 rounded-full h-2" aria-hidden="true">
            <div
              className="bg-emerald-500 h-2 rounded-full transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        )}

        {/* Metadata Row: Mission Type + Points + Due Date */}
        <div className="flex flex-wrap items-center gap-2 text-sm">
          {/* Mission Type */}
          <span
            className={`inline-flex items-center px-2.5 py-1 rounded-full text-xs border ${getMissionTypeStyles(missionType)}`}
            role="status"
            aria-label={`Type: ${getMissionTypeLabel(missionType)}`}
          >
            {getMissionTypeLabel(missionType)}
          </span>

          {/* Points */}
          <span className="inline-flex items-center gap-1.5 text-slate-700" aria-label={`${points} experience points`}>
            <svg 
              className="w-4 h-4 text-amber-500" 
              fill="currentColor" 
              viewBox="0 0 20 20"
              aria-hidden="true"
            >
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <span>+{points} XP</span>
          </span>

          {/* Due Date */}
          {displayDueDate && (
            <span 
              className={`inline-flex items-center gap-1.5 ${
                isOverdue ? 'text-rose-700' : 'text-slate-600'
              }`}
              aria-label={`Due date: ${dueDate}${isOverdue ? ' (overdue)' : ''}`}
            >
              <Clock className="w-4 h-4" aria-hidden="true" />
              <span className={isOverdue ? 'font-medium' : ''}>{dueDate}</span>
            </span>
          )}
        </div>

        {/* Program Tag */}
        <div>
          <span
            className={`inline-flex items-center px-3 py-1.5 rounded-md text-sm border ${getProgramStyles(programName)}`}
            role="status"
            aria-label={`Program: ${programName}`}
          >
            {programName}
          </span>
        </div>

        {/* Action Row */}
        {displayActions && (
          <div className="flex items-center gap-2 pt-2 border-t border-slate-100">
            {onView && (
              <Button
                variant="secondary"
                size={isCompact ? 'sm' : 'md'}
                onClick={onView}
                className="flex-1"
                aria-label={`View ${title}`}
              >
                <Eye className="w-4 h-4 mr-2" aria-hidden="true" />
                View
              </Button>
            )}

            {onSubmit && status !== 'complete' && (
              <Button
                variant="primary"
                size={isCompact ? 'sm' : 'md'}
                onClick={onSubmit}
                className="flex-1"
                aria-label={`Submit ${title}`}
              >
                <Upload className="w-4 h-4 mr-2" aria-hidden="true" />
                Submit
              </Button>
            )}

            {onMarkComplete && status !== 'complete' && (
              <Button
                variant="primary"
                size={isCompact ? 'sm' : 'md'}
                onClick={onMarkComplete}
                className="flex-1"
                aria-label={`Mark ${title} as complete`}
              >
                <CheckCircle className="w-4 h-4 mr-2" aria-hidden="true" />
                Complete
              </Button>
            )}

            {status === 'complete' && (
              <div className="flex-1 text-center py-2 text-sm text-emerald-700">
                ✓ Mission Complete!
              </div>
            )}
          </div>
        )}
      </div>
    );
  }
);

TTTrailMissionCard.displayName = 'TTTrailMissionCard';
