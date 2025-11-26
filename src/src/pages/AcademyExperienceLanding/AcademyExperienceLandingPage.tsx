import React from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { DigitalExperienceLogin } from '../../components/integrations/SalesforceLogin';
import { GraduationCap, Users, Trophy, Compass } from 'lucide-react';

/**
 * AcademyExperienceLandingPage Component
 * Main portal for the Transition Trails Academy learning experience
 * LWC Conversion: c-academy-experience-landing-page
 */
export const AcademyExperienceLandingPage: React.FC = () => {
  const academyFeatures = [
    {
      icon: GraduationCap,
      title: 'Structured Learning Paths',
      description: 'Follow proven curricula designed by transition experts and veterans',
    },
    {
      icon: Users,
      title: 'Mentorship & Community',
      description: 'Connect with mentors and peers who understand your journey',
    },
    {
      icon: Trophy,
      title: 'Track Your Progress',
      description: 'Earn badges, celebrate milestones, and visualize your growth',
    },
    {
      icon: Compass,
      title: 'Personalized Guidance',
      description: 'Get recommendations tailored to your goals and experience',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="academy_experience_hero"
            title="Transition Trails Academy"
            subtitle="Your comprehensive digital learning experience for successful military transition"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <CMSRegion regionName="academy_overview">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl mb-4">Welcome to the Academy</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                The Transition Trails Academy is your complete learning environment, providing
                structured paths, expert guidance, and community support throughout your transition journey.
              </p>
            </div>
          </CMSRegion>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {academyFeatures.map((feature) => {
              const Icon = feature.icon;
              return (
                <Card key={feature.title}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[var(--color-primary)]/10">
                        <Icon size={24} color="var(--color-primary)" />
                      </div>
                      <div>
                        <CardTitle>{feature.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-[var(--color-neutral-700)]">{feature.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl mb-4">Choose Your Learning Path</h2>
              <p className="text-lg text-[var(--color-neutral-700)] mb-6">
                Whether you're just starting to explore transition resources or ready for advanced
                specialization, we have a trail designed for you.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2" />
                  <div>
                    <p className="font-semibold">Visitor Trail</p>
                    <p className="text-sm text-[var(--color-neutral-700)]">No login required - start exploring immediately</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2" />
                  <div>
                    <p className="font-semibold">Guided Trail</p>
                    <p className="text-sm text-[var(--color-neutral-700)]">Comprehensive, structured learning with mentorship</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2" />
                  <div>
                    <p className="font-semibold">Trail of Mastery</p>
                    <p className="text-sm text-[var(--color-neutral-700)]">Advanced specialization in key domains</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[var(--color-primary)] mt-2" />
                  <div>
                    <p className="font-semibold">Explorer's Journey</p>
                    <p className="text-sm text-[var(--color-neutral-700)]">Self-directed resource discovery</p>
                  </div>
                </div>
              </div>
            </div>

            <Card>
              <CardHeader>
                <CardTitle className="text-center">Access Your Academy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-neutral-700)] mb-6 text-center">
                  Sign in to access your personalized dashboard, track your progress, and continue your learning journey
                </p>
                <DigitalExperienceLogin />
                
                <div className="mt-6 text-center">
                  <p className="text-sm text-[var(--color-neutral-700)] mb-4">
                    New to Transition Trails?
                  </p>
                  <Link to="/visitors-trail">
                    <Button variant="outline">
                      Start with Visitor Trail
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          </div>
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <CMSRegion regionName="academy_stats">
            <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg p-12 text-white">
              <h2 className="text-3xl text-center mb-12">Academy by the Numbers</h2>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                <div>
                  <p className="text-5xl font-bold mb-2">10,000+</p>
                  <p>Active Learners</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">50+</p>
                  <p>Learning Modules</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">500+</p>
                  <p>Expert Mentors</p>
                </div>
                <div>
                  <p className="text-5xl font-bold mb-2">95%</p>
                  <p>Success Rate</p>
                </div>
              </div>
            </div>
          </CMSRegion>
        </Container>
      </section>
    </SiteLayout>
  );
};
