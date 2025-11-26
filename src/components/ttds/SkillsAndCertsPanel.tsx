import React from 'react';
import { Award, Code, Wrench, Plus, CheckCircle } from 'lucide-react';
import { Tag } from './Tag';
import { Button } from './Button';

export interface Certification {
  id: string;
  name: string;
  earned?: boolean;
}

export interface Skill {
  id: string;
  name: string;
  variant?: 'default' | 'trail' | 'platform' | 'topic';
}

export interface Tool {
  id: string;
  name: string;
}

export interface SkillsAndCertsPanelProps {
  certifications?: Certification[];
  skills?: Skill[];
  tools?: Tool[];
  variant?: 'full' | 'compact';
  layout?: 'single' | 'two-column';
  showCertIcons?: boolean;
  showSectionIcons?: boolean;
  collapsedSkills?: boolean;
  maxSkillsPreview?: number;
  showCTA?: boolean;
  ctaText?: string;
  onCTAClick?: () => void;
  className?: string;
}

export const SkillsAndCertsPanel = React.forwardRef<HTMLDivElement, SkillsAndCertsPanelProps>(
  (
    {
      certifications = [
        { id: '1', name: 'Salesforce Admin', earned: true },
        { id: '2', name: 'AI Associate', earned: true },
        { id: '3', name: 'Sales Cloud Consultant', earned: false },
      ],
      skills = [
        { id: '1', name: 'Reporting', variant: 'topic' },
        { id: '2', name: 'Automation', variant: 'trail' },
        { id: '3', name: 'Experience Cloud', variant: 'platform' },
        { id: '4', name: 'Agile/Scrum', variant: 'default' },
        { id: '5', name: 'User Support', variant: 'default' },
      ],
      tools = [
        { id: '1', name: 'Notion' },
        { id: '2', name: 'Jotform' },
        { id: '3', name: 'Canva' },
        { id: '4', name: 'Mailchimp' },
        { id: '5', name: 'Slack' },
        { id: '6', name: 'Google Workspace' },
      ],
      variant = 'full',
      layout = 'single',
      showCertIcons = true,
      showSectionIcons = true,
      collapsedSkills = false,
      maxSkillsPreview = 3,
      showCTA = false,
      ctaText = 'Update Skills',
      onCTAClick,
      className = '',
    },
    ref
  ) => {
    const [isSkillsExpanded, setIsSkillsExpanded] = React.useState(!collapsedSkills);
    const isCompact = variant === 'compact';
    const isTwoColumn = layout === 'two-column';

    const handleCTAClick = () => {
      if (onCTAClick) {
        onCTAClick();
      } else {
        console.log('Update skills clicked');
      }
    };

    const visibleSkills = collapsedSkills && !isSkillsExpanded 
      ? skills.slice(0, maxSkillsPreview) 
      : skills;

    const hasMoreSkills = skills.length > maxSkillsPreview && collapsedSkills;

    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-xl border border-slate-200
          ${isCompact ? 'p-4' : 'p-6'}
          ${className}
        `}
      >
        {/* Panel Title */}
        <div className={`${isCompact ? 'mb-3' : 'mb-4'}`}>
          <h3 className={`text-slate-900 ${isCompact ? 'text-base' : ''}`}>
            Skills & Certifications
          </h3>
          {!isCompact && (
            <p className="text-sm text-slate-600 mt-1">
              Your technical expertise and credentials
            </p>
          )}
        </div>

        {/* Content Sections */}
        <div className={`space-y-${isCompact ? '4' : '5'}`}>
          {/* Salesforce Certifications Section */}
          {certifications.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {showSectionIcons && (
                  <Award className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} text-emerald-600`} />
                )}
                <h4 className={`${isCompact ? 'text-sm' : 'text-base'} text-slate-700`}>
                  Salesforce Certifications
                </h4>
              </div>
              <div className={isTwoColumn ? 'grid grid-cols-2 gap-2' : 'space-y-2'}>
                {certifications.map((cert) => (
                  <div
                    key={cert.id}
                    className={`
                      flex items-center gap-2
                      ${isCompact ? 'px-2 py-1.5' : 'px-3 py-2'}
                      bg-slate-50 rounded-lg border border-slate-200
                      ${cert.earned ? 'border-emerald-300 bg-emerald-50' : ''}
                    `}
                  >
                    {showCertIcons && (
                      <CheckCircle
                        className={`
                          ${isCompact ? 'h-3.5 w-3.5' : 'h-4 w-4'} 
                          flex-shrink-0
                          ${cert.earned ? 'text-emerald-600' : 'text-slate-400'}
                        `}
                      />
                    )}
                    <span
                      className={`
                        ${isCompact ? 'text-xs' : 'text-sm'}
                        ${cert.earned ? 'text-emerald-900' : 'text-slate-700'}
                      `}
                    >
                      {cert.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          {certifications.length > 0 && skills.length > 0 && (
            <div className="border-t border-slate-100"></div>
          )}

          {/* Skills Section */}
          {skills.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {showSectionIcons && (
                    <Code className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} text-blue-600`} />
                  )}
                  <h4 className={`${isCompact ? 'text-sm' : 'text-base'} text-slate-700`}>
                    Skills
                  </h4>
                </div>
                {hasMoreSkills && (
                  <button
                    onClick={() => setIsSkillsExpanded(!isSkillsExpanded)}
                    className="text-xs text-emerald-700 hover:text-emerald-800 transition-colors"
                    aria-label={isSkillsExpanded ? 'Show fewer skills' : 'Show all skills'}
                  >
                    {isSkillsExpanded ? 'Show less' : `+${skills.length - maxSkillsPreview} more`}
                  </button>
                )}
              </div>
              <div className="flex flex-wrap gap-2">
                {visibleSkills.map((skill) => (
                  <Tag
                    key={skill.id}
                    label={skill.name}
                    variant={skill.variant || 'default'}
                  />
                ))}
              </div>
            </div>
          )}

          {/* Divider */}
          {skills.length > 0 && tools.length > 0 && (
            <div className="border-t border-slate-100"></div>
          )}

          {/* Tools & Platforms Section */}
          {tools.length > 0 && (
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                {showSectionIcons && (
                  <Wrench className={`${isCompact ? 'h-4 w-4' : 'h-5 w-5'} text-purple-600`} />
                )}
                <h4 className={`${isCompact ? 'text-sm' : 'text-base'} text-slate-700`}>
                  Tools & Platforms
                </h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {tools.map((tool) => (
                  <Tag
                    key={tool.id}
                    label={tool.name}
                    variant="default"
                  />
                ))}
              </div>
            </div>
          )}

          {/* CTA (optional) */}
          {showCTA && (
            <>
              <div className="border-t border-slate-100"></div>
              <Button
                variant="secondary"
                size={isCompact ? 'small' : 'medium'}
                onClick={handleCTAClick}
                className="w-full sm:w-auto"
                iconLeft={<Plus className="h-4 w-4" />}
              >
                {ctaText}
              </Button>
            </>
          )}
        </div>
      </div>
    );
  }
);

SkillsAndCertsPanel.displayName = 'SkillsAndCertsPanel';