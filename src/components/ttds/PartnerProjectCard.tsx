import React from 'react';
import { Card } from './Card';
import { Tag } from './Tag';
import { ChipStatus } from './ChipStatus';
import { Building2, Code, TrendingUp } from 'lucide-react';

export type ProjectStatus = 'in-progress' | 'completed' | 'in-review';
export type PartnerProjectLayout = 'vertical' | 'horizontal';
export type PartnerProjectSize = 'compact' | 'full';

export interface PartnerProjectCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields (6)
  nonprofitName: string;
  projectTitle: string;
  skillsUsed: string[];
  techStack: string[];
  projectStatus: ProjectStatus;
  impactSummary: string;

  // Optional Configuration
  layout?: PartnerProjectLayout;
  size?: PartnerProjectSize;
  showImage?: boolean;
  imageUrl?: string;
  onCardClick?: () => void;
  onCtaClick?: () => void;
  ctaLabel?: string;
}

export const PartnerProjectCard = React.forwardRef<HTMLDivElement, PartnerProjectCardProps>(
  (
    {
      nonprofitName,
      projectTitle,
      skillsUsed,
      techStack,
      projectStatus,
      impactSummary,
      layout = 'vertical',
      size = 'full',
      showImage = false,
      imageUrl,
      onCardClick,
      onCtaClick,
      ctaLabel,
      className = '',
      ...props
    },
    ref
  ) => {
    // Map project status to chip status variant
    const statusConfig: Record<ProjectStatus, { variant: 'success' | 'warning' | 'info'; label: string }> = {
      'completed': { variant: 'success', label: 'Completed' },
      'in-progress': { variant: 'info', label: 'In Progress' },
      'in-review': { variant: 'warning', label: 'In Review' },
    };

    const currentStatus = statusConfig[projectStatus];

    // Render main content
    const renderContent = () => (
      <>
        {/* Top Section: Status + Organization Name + Project Title */}
        <div className={`flex flex-col ${size === 'compact' ? 'gap-2' : 'gap-3'}`}>
          {/* Status Chip */}
          <div className="flex items-center justify-between gap-2">
            <ChipStatus
              variant={currentStatus.variant}
              label={currentStatus.label}
              icon={true}
            />
          </div>

          {/* Organization Name */}
          <div className="flex items-center gap-2">
            <Building2 className="h-4 w-4 text-slate-500 flex-shrink-0" />
            <p className="text-sm text-slate-600">{nonprofitName}</p>
          </div>

          {/* Project Title */}
          <h3 className="text-slate-900 mt-1">{projectTitle}</h3>
        </div>

        {/* Middle Section: Skills + Tech Stack */}
        <div className={`flex flex-col ${size === 'compact' ? 'gap-3' : 'gap-4'}`}>
          {/* Skills Used */}
          <div>
            <p className="text-xs text-slate-500 mb-2">Skills Applied</p>
            <div className="flex flex-wrap gap-2">
              {skillsUsed.map((skill, index) => (
                <Tag
                  key={`skill-${index}`}
                  variant="trail"
                  label={skill}
                  icon={Code}
                />
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div>
            <p className="text-xs text-slate-500 mb-2">Tech Stack</p>
            <div className="flex flex-wrap gap-2">
              {techStack.map((tech, index) => (
                <Tag
                  key={`tech-${index}`}
                  variant="platform"
                  label={tech}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section: Impact Summary */}
        <div className="flex items-start gap-2 pt-2 border-t border-slate-200">
          <TrendingUp className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-slate-700 leading-relaxed">{impactSummary}</p>
        </div>

        {/* Optional CTA */}
        {ctaLabel && onCtaClick && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onCtaClick();
            }}
            className="w-full mt-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-colors duration-200 text-sm"
            aria-label={ctaLabel}
          >
            {ctaLabel}
          </button>
        )}
      </>
    );

    // Horizontal Layout
    if (layout === 'horizontal') {
      return (
        <div
          ref={ref}
          onClick={onCardClick}
          className={`bg-white border border-slate-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 ${
            onCardClick ? 'cursor-pointer' : ''
          } ${className}`}
          role={onCardClick ? 'button' : undefined}
          tabIndex={onCardClick ? 0 : undefined}
          {...props}
        >
          <div className="flex flex-col md:flex-row gap-6 p-6">
            {/* Optional Image */}
            {showImage && imageUrl && (
              <div className="w-full md:w-48 h-48 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden">
                <img
                  src={imageUrl}
                  alt={projectTitle}
                  className="w-full h-full object-cover"
                />
              </div>
            )}

            {/* Content */}
            <div className="flex-1 flex flex-col gap-4">
              {renderContent()}
            </div>
          </div>
        </div>
      );
    }

    // Vertical Layout (Default)
    return (
      <Card
        ref={ref}
        elevation="low"
        padding={size === 'compact' ? 'tight' : 'normal'}
        onClick={onCardClick}
        className={`${onCardClick ? 'cursor-pointer' : ''} ${className}`}
        role={onCardClick ? 'button' : undefined}
        tabIndex={onCardClick ? 0 : undefined}
        {...props}
      >
        <div className={`flex flex-col ${size === 'compact' ? 'gap-3' : 'gap-4'}`}>
          {/* Optional Image Header */}
          {showImage && imageUrl && (
            <div className={`-m-6 mb-0 ${size === 'compact' ? 'h-32' : 'h-48'} bg-slate-100 rounded-t-lg overflow-hidden`}>
              <img
                src={imageUrl}
                alt={projectTitle}
                className="w-full h-full object-cover"
              />
            </div>
          )}

          {/* Main Content */}
          {renderContent()}
        </div>
      </Card>
    );
  }
);

PartnerProjectCard.displayName = 'PartnerProjectCard';
