import React from 'react';
import { Button } from './Button';
import { Sparkles } from 'lucide-react';

export type InsightCTAType = 'view-suggestions' | 'quick-quiz' | 'ai-trail-recommendations';
export type InsightDensity = 'full' | 'compact';

export interface PennyInsightRailProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields
  aiCoachingNote: string; // Short AI-generated insight or suggestion
  contextLine: string; // Explains why this insight is being shown
  ctaType: InsightCTAType; // Action type
  
  // Optional Fields
  density?: InsightDensity; // Layout density (default: 'full')
  showPennyLabel?: boolean; // Show "Insight from Penny" label (default: true)
  onCTAClick?: () => void; // CTA click handler
}

const ctaConfig: Record<InsightCTAType, { label: string; variant: 'primary' | 'secondary' }> = {
  'view-suggestions': { label: 'View Suggestions', variant: 'secondary' },
  'quick-quiz': { label: 'Quick Quiz', variant: 'primary' },
  'ai-trail-recommendations': { label: 'AI Trail Recommendations', variant: 'secondary' },
};

export const PennyInsightRail = React.forwardRef<HTMLDivElement, PennyInsightRailProps>(
  (
    {
      aiCoachingNote,
      contextLine,
      ctaType,
      density = 'full',
      showPennyLabel = true,
      onCTAClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const ctaInfo = ctaConfig[ctaType];
    const isCompact = density === 'compact';

    return (
      <div
        ref={ref}
        className={`bg-white border border-slate-200 rounded-lg shadow-sm ${
          isCompact ? 'p-4' : 'p-6'
        } ${className}`}
        {...props}
      >
        <div className={`flex flex-col ${isCompact ? 'gap-3' : 'gap-4'}`}>
          {/* Top Section: Penny Label/Icon */}
          {showPennyLabel && (
            <div className="flex items-center gap-2">
              <Sparkles className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700">Insight from Penny</span>
            </div>
          )}

          {/* Middle Section: AI Coaching Note + Context */}
          <div className={`flex flex-col ${isCompact ? 'gap-2' : 'gap-3'}`}>
            {/* AI Coaching Note */}
            <p className={`text-slate-900 ${isCompact ? '' : ''}`}>
              {aiCoachingNote}
            </p>

            {/* Context Line */}
            <p className="text-sm text-slate-600">
              {contextLine}
            </p>
          </div>

          {/* Bottom Section: CTA */}
          <div className="pt-2">
            <Button
              variant={ctaInfo.variant}
              size={isCompact ? 'small' : 'medium'}
              onClick={onCTAClick}
              className="w-full"
            >
              {ctaInfo.label}
            </Button>
          </div>
        </div>
      </div>
    );
  }
);

PennyInsightRail.displayName = 'PennyInsightRail';
