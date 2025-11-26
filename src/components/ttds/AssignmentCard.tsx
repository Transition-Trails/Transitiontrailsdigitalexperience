import React from 'react';
import { Card } from './Card';
import { ChipStatus } from './ChipStatus';
import { Tag } from './Tag';
import { User, FileText, Link as LinkIcon, Download } from 'lucide-react';

export type SubmissionStatus = 'not-started' | 'in-progress' | 'submitted' | 'returned' | 'completed';

export interface AssignmentResource {
  type: 'file' | 'link' | 'requirement';
  label: string;
  url?: string;
}

export interface AssignmentCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  description: string; // Longer description of the assignment
  coachName: string; // Who assigned it
  submissionStatus: SubmissionStatus; // Current submission state
  
  // Optional Fields
  resources?: AssignmentResource[]; // Attached files, links, requirements
  rubricGrade?: string; // Optional rubric/grade indicator (e.g., "85/100", "A", "Pass")
  title?: string; // Optional title (some assignments may have titles)
  
  // Layout Options
  truncateDescription?: boolean; // Force 3-4 line truncation (default: true)
  onResourceClick?: (resource: AssignmentResource) => void;
}

const submissionStatusConfig: Record<SubmissionStatus, { 
  label: string; 
  chipStatus: 'notStarted' | 'inProgress' | 'submitted' | 'completed' | 'returned';
}> = {
  'not-started': { label: 'Not Started', chipStatus: 'notStarted' },
  'in-progress': { label: 'In Progress', chipStatus: 'inProgress' },
  'submitted': { label: 'Submitted', chipStatus: 'submitted' },
  'returned': { label: 'Returned', chipStatus: 'returned' },
  'completed': { label: 'Completed', chipStatus: 'completed' },
};

const resourceIcons = {
  file: FileText,
  link: LinkIcon,
  requirement: Download,
};

export const AssignmentCard = React.forwardRef<HTMLDivElement, AssignmentCardProps>(
  (
    {
      description,
      coachName,
      submissionStatus,
      resources = [],
      rubricGrade,
      title,
      truncateDescription = true,
      onResourceClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const statusInfo = submissionStatusConfig[submissionStatus];

    return (
      <Card
        ref={ref}
        elevation="low"
        padding="normal"
        className={`flex flex-col h-full ${className}`}
        {...props}
      >
        <div className="flex flex-col gap-4">
          {/* Top Section: Title (Optional) + Description */}
          <div className="flex flex-col gap-2">
            {title && (
              <h3 className="text-slate-900">{title}</h3>
            )}
            <p className={`text-slate-600 ${truncateDescription ? 'line-clamp-4' : ''}`}>
              {description}
            </p>
          </div>

          {/* Resource Section */}
          {resources.length > 0 && (
            <div className="flex flex-col gap-2">
              <h4 className="text-xs text-slate-500 uppercase tracking-wide">Resources</h4>
              <div className="flex flex-wrap gap-2">
                {resources.map((resource, index) => {
                  const IconComponent = resourceIcons[resource.type];
                  return (
                    <button
                      key={`${resource.label}-${index}`}
                      onClick={() => onResourceClick?.(resource)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-md text-sm transition-colors"
                      type="button"
                    >
                      <IconComponent className="h-3.5 w-3.5" />
                      <span>{resource.label}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* Coach & Status Section */}
          <div className="flex flex-col gap-3 pt-2 border-t border-slate-200">
            {/* Coach Name */}
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <User className="h-4 w-4 text-slate-500" />
              <span>Coach: <span className="text-slate-900">{coachName}</span></span>
            </div>

            {/* Submission Status & Rubric */}
            <div className="flex items-center gap-2 flex-wrap">
              <ChipStatus status={statusInfo.chipStatus} label={statusInfo.label} />
              {rubricGrade && (
                <Tag variant="default" label={`Grade: ${rubricGrade}`} />
              )}
            </div>
          </div>
        </div>
      </Card>
    );
  }
);

AssignmentCard.displayName = 'AssignmentCard';
