import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { CheckCircle, Lock } from 'lucide-react';

/**
 * GuidedTrailPage Component
 * Structured learning path with expert guidance
 * LWC Conversion: c-guided-trail-page with progress tracking
 */
export const GuidedTrailPage: React.FC = () => {
  const phases = [
    {
      id: 1,
      title: 'Phase 1: Foundation',
      modules: ['Self-Assessment', 'Goal Setting', 'Resource Mapping'],
      status: 'completed',
      progress: 100,
    },
    {
      id: 2,
      title: 'Phase 2: Planning',
      modules: ['Resume Building', 'Networking Strategy', 'Skill Translation'],
      status: 'in-progress',
      progress: 60,
    },
    {
      id: 3,
      title: 'Phase 3: Execution',
      modules: ['Job Search', 'Interview Prep', 'Negotiation Skills'],
      status: 'locked',
      progress: 0,
    },
    {
      id: 4,
      title: 'Phase 4: Integration',
      modules: ['First 90 Days', 'Professional Development', 'Long-term Success'],
      status: 'locked',
      progress: 0,
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="guided_trail_hero"
            title="Guided Trail"
            subtitle="Comprehensive, structured learning path with expert mentorship"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <CMSRegion regionName="guided_trail_overview">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl mb-4">Your Structured Journey</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                The Guided Trail provides a comprehensive, step-by-step path through your transition.
                Work at your own pace with expert guidance and peer support.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
              <div className="text-center p-6 bg-[var(--color-neutral-50)] rounded-lg">
                <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">12</p>
                <p className="text-sm text-[var(--color-neutral-700)]">Total Modules</p>
              </div>
              <div className="text-center p-6 bg-[var(--color-neutral-50)] rounded-lg">
                <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">8-12</p>
                <p className="text-sm text-[var(--color-neutral-700)]">Weeks Duration</p>
              </div>
              <div className="text-center p-6 bg-[var(--color-neutral-50)] rounded-lg">
                <p className="text-4xl font-bold text-[var(--color-primary)] mb-2">1:1</p>
                <p className="text-sm text-[var(--color-neutral-700)]">Mentor Support</p>
              </div>
            </div>
          </CMSRegion>

          <div className="space-y-6">
            {phases.map((phase) => (
              <Card key={phase.id} className={phase.status === 'locked' ? 'opacity-60' : ''}>
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      {phase.status === 'completed' && <CheckCircle color="var(--color-success)" />}
                      {phase.status === 'locked' && <Lock color="var(--color-neutral-500)" />}
                      <CardTitle>{phase.title}</CardTitle>
                    </div>
                    <span className="text-sm text-[var(--color-neutral-700)]">
                      {phase.progress}% Complete
                    </span>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="mb-4 bg-[var(--color-neutral-200)] rounded-full h-2">
                    <div
                      className="bg-[var(--color-primary)] h-2 rounded-full transition-all"
                      style={{ width: `${phase.progress}%` }}
                    />
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {phase.modules.map((module) => (
                      <span
                        key={module}
                        className="px-3 py-1 bg-[var(--color-neutral-100)] rounded-full text-sm"
                      >
                        {module}
                      </span>
                    ))}
                  </div>
                  <Button
                    variant={phase.status === 'locked' ? 'ghost' : 'primary'}
                    disabled={phase.status === 'locked'}
                  >
                    {phase.status === 'locked' ? 'Locked' : phase.status === 'completed' ? 'Review' : 'Continue'}
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
