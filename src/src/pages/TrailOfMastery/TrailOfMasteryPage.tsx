import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { Award, TrendingUp, Users, Briefcase } from 'lucide-react';

/**
 * TrailOfMasteryPage Component
 * Advanced learning tracks for specialization
 * LWC Conversion: c-trail-of-mastery-page
 */
export const TrailOfMasteryPage: React.FC = () => {
  const tracks = [
    {
      id: 1,
      icon: Briefcase,
      title: 'Career Mastery',
      description: 'Advanced career development and leadership skills',
      modules: 8,
      hours: 20,
      level: 'Advanced',
    },
    {
      id: 2,
      icon: TrendingUp,
      title: 'Entrepreneurship Track',
      description: 'Start and scale your own business',
      modules: 10,
      hours: 25,
      level: 'Advanced',
    },
    {
      id: 3,
      icon: Users,
      title: 'Leadership Development',
      description: 'Transition your military leadership to civilian contexts',
      modules: 6,
      hours: 15,
      level: 'Intermediate',
    },
    {
      id: 4,
      icon: Award,
      title: 'Industry Certifications',
      description: 'Prepare for professional certifications and credentials',
      modules: 12,
      hours: 30,
      level: 'Advanced',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="mastery_trail_hero"
            title="Trail of Mastery"
            subtitle="Deepen your expertise with specialized, advanced learning tracks"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <CMSRegion regionName="mastery_trail_overview">
            <div className="mb-12 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl mb-4">Specialize and Excel</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                The Trail of Mastery offers deep-dive learning experiences in specialized domains.
                Build expertise that sets you apart in your chosen field.
              </p>
            </div>
          </CMSRegion>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {tracks.map((track) => {
              const Icon = track.icon;
              return (
                <Card key={track.id} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[var(--color-success)]/10">
                        <Icon size={24} color="var(--color-success)" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-xs px-2 py-1 bg-[var(--color-success)]/20 text-[var(--color-success)] rounded-full font-semibold">
                            {track.level}
                          </span>
                        </div>
                        <CardTitle>{track.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-[var(--color-neutral-700)]">{track.description}</p>
                    <div className="flex gap-4 text-sm text-[var(--color-neutral-600)] mb-4">
                      <span>{track.modules} modules</span>
                      <span>•</span>
                      <span>{track.hours} hours</span>
                    </div>
                    <Button variant="primary" className="w-full">
                      Enroll in Track
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container size="md">
          <div className="bg-white rounded-lg shadow-md p-8 text-center">
            <h3 className="text-2xl mb-4">Prerequisites</h3>
            <p className="text-[var(--color-neutral-700)] mb-6">
              The Trail of Mastery is recommended for those who have completed the Guided Trail
              or have equivalent transition experience.
            </p>
            <Button variant="outline">
              View Prerequisites
            </Button>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
