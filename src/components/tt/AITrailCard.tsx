import React from 'react';
import { Button } from '../ttds/Button';
import { LucideIcon } from 'lucide-react';

export type DetailLevel = 'full' | 'compact';

export interface TTAITrailCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  trailName: string; // e.g., "AI Specialist Trail"
  platformIntegrations: Array<{
    name: string;
    icon?: LucideIcon;
    color?: string; // e.g., "text-blue-600", "text-purple-600"
  }>; // Salesforce, Jotform, Canva, Zapier
  
  // Optional Fields
  modules?: string[]; // 3-5 modules like "AI Foundations", "Prompt Engineering"
  capstoneTitle?: string; // e.g., "AI-Driven Nonprofit Solution"
  badgeTitle?: string; // Default: "AI Innovation Leader"
  ctaLabel?: string; // Default: "View AI Trail"
  
  // Flags
  isNew?: boolean; // Show NEW chip
  showIcons?: boolean; // Display platform icons
  
  // Event Handlers
  onCTAClick?: () => void;
  
  // Variants
  detailLevel?: DetailLevel; // full | compact
}

export const TTAITrailCard = React.forwardRef<HTMLDivElement, TTAITrailCardProps>(
  (
    {
      trailName,
      platformIntegrations,
      modules = [],
      capstoneTitle = 'AI-Driven Nonprofit Solution',
      badgeTitle = 'AI Innovation Leader',
      ctaLabel = 'View AI Trail',
      isNew = false,
      showIcons = true,
      onCTAClick,
      detailLevel = 'full',
      className = '',
      ...props
    },
    ref
  ) => {
    const isFull = detailLevel === 'full';

    return (
      <div
        ref={ref}
        className={`bg-white rounded-lg border border-slate-200 shadow-sm p-6 flex flex-col gap-5 hover:shadow-md transition-shadow ${className}`}
        {...props}
      >
        {/* Top Section: Trail Title + Optional NEW Chip */}
        <div className="flex items-start justify-between gap-3">
          <div className="flex-1">
            <h3 className="text-xl text-slate-900 leading-tight">
              {trailName}
            </h3>
          </div>
          {isNew && (
            <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs bg-emerald-100 text-emerald-800 border border-emerald-200">
              NEW
            </span>
          )}
        </div>

        {/* Integrations Section */}
        <div className="flex flex-col gap-2">
          <div className="text-sm text-slate-700">
            Platform Integrations
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {platformIntegrations.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <div
                  key={index}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-slate-100 border border-slate-200 rounded-md text-sm text-slate-700"
                >
                  {showIcons && Icon && (
                    <Icon className={`w-4 h-4 ${platform.color || 'text-slate-600'}`} />
                  )}
                  <span>{platform.name}</span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Modules Section (Full Detail Only) */}
        {isFull && modules.length > 0 && (
          <div className="flex flex-col gap-2">
            <div className="text-sm text-slate-700">
              Learning Modules
            </div>
            <ul className="space-y-1.5" role="list">
              {modules.map((module, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-600">
                  <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-1.5 flex-shrink-0" />
                  <span className="flex-1 leading-relaxed">{module}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Capstone Section (Full Detail Only) */}
        {isFull && capstoneTitle && (
          <div className="bg-gradient-to-br from-emerald-50 to-blue-50 border border-emerald-200 rounded-lg p-4">
            <div className="flex items-start gap-2">
              <svg className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
              </svg>
              <div className="flex-1">
                <div className="text-xs text-emerald-700 mb-0.5">Capstone Project</div>
                <div className="text-sm text-slate-800">{capstoneTitle}</div>
              </div>
            </div>
          </div>
        )}

        {/* Badge Section (Full Detail Only) */}
        {isFull && badgeTitle && (
          <div className="flex justify-center py-2">
            <div className="inline-flex items-center gap-2 px-4 py-2.5 bg-gradient-to-br from-amber-100 via-yellow-100 to-amber-100 border-2 border-amber-300 rounded-lg shadow-sm">
              <svg className="w-6 h-6 text-amber-600" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <span className="text-sm text-amber-900" role="img" aria-label={`Earn badge: ${badgeTitle}`}>
                {badgeTitle}
              </span>
            </div>
          </div>
        )}

        {/* CTA Section */}
        <div className="mt-auto pt-2">
          <Button
            variant="primary"
            size="md"
            onClick={onCTAClick}
            className="w-full"
            aria-label={`${ctaLabel} - ${trailName}`}
          >
            {ctaLabel}
          </Button>
        </div>
      </div>
    );
  }
);

TTAITrailCard.displayName = 'TTAITrailCard';
