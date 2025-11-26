import React from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { VisitorTrailSignupForm } from '../../components/integrations/JotformEmbed';
import { BookOpen, Video, FileText, Users } from 'lucide-react';

/**
 * VisitorsTrailPage Component
 * Entry-level learning path for newcomers
 * LWC Conversion: c-visitors-trail-page
 */
export const VisitorsTrailPage: React.FC = () => {
  const modules = [
    {
      id: 1,
      icon: BookOpen,
      title: 'Understanding Military Transition',
      description: 'Learn the basics of transition planning and available resources',
      duration: '30 min',
      type: 'Article',
    },
    {
      id: 2,
      icon: Video,
      title: 'Introduction to Our Platform',
      description: 'Video walkthrough of all features and learning paths',
      duration: '15 min',
      type: 'Video',
    },
    {
      id: 3,
      icon: FileText,
      title: 'Transition Timeline Checklist',
      description: 'Downloadable guide for planning your transition journey',
      duration: '10 min',
      type: 'Download',
    },
    {
      id: 4,
      icon: Users,
      title: 'Community Introduction',
      description: 'Meet other transitioning service members and mentors',
      duration: '20 min',
      type: 'Interactive',
    },
  ];

  return (
    <SiteLayout>
      {/* Hero - CMS Region */}
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="visitors_trail_hero"
            title="Visitor Trail"
            subtitle="Start your transition journey with foundational knowledge and resources"
          />
        </Container>
      </section>

      {/* Overview Section */}
      <section className="slds-section">
        <Container size="md">
          <CMSRegion regionName="visitors_trail_overview" contentType="text">
            <div className="prose max-w-none">
              <h2 className="text-3xl mb-4">Welcome to Your First Steps</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                The Visitor Trail is designed for those just beginning to explore transition resources. 
                No account required - simply browse, learn, and discover what Transition Trails has to offer.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 my-8">
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <p className="text-3xl font-bold text-[var(--color-primary)]">4</p>
                  <p className="text-sm text-[var(--color-neutral-700)]">Learning Modules</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <p className="text-3xl font-bold text-[var(--color-primary)]">~75 min</p>
                  <p className="text-sm text-[var(--color-neutral-700)]">Total Duration</p>
                </div>
                <div className="text-center p-4 bg-[var(--color-neutral-50)] rounded-lg">
                  <p className="text-3xl font-bold text-[var(--color-primary)]">Free</p>
                  <p className="text-sm text-[var(--color-neutral-700)]">No Account Needed</p>
                </div>
              </div>
            </div>
          </CMSRegion>
        </Container>
      </section>

      {/* Learning Modules - CMS Region */}
      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container>
          <h2 className="text-3xl mb-8 text-center">Learning Modules</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modules.map((module) => {
              const Icon = module.icon;
              return (
                <Card key={module.id}>
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-lg bg-[var(--color-primary)]/10">
                        <Icon size={24} color="var(--color-primary)" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-semibold text-[var(--color-primary)] uppercase">
                            {module.type}
                          </span>
                          <span className="text-xs text-[var(--color-neutral-600)]">
                            {module.duration}
                          </span>
                        </div>
                        <CardTitle>{module.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{module.description}</p>
                    <Button variant="outline" size="sm">
                      Start Module
                    </Button>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Signup CTA - Jotform Integration */}
      <section className="slds-section">
        <Container size="md">
          <div className="bg-white rounded-lg shadow-md p-8">
            <div className="text-center mb-8">
              <h2 className="text-3xl mb-4">Ready for More?</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                Sign up to access the full Guided Trail with personalized support and tracking
              </p>
            </div>
            
            <VisitorTrailSignupForm />
            
            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--color-neutral-700)] mb-4">
                Already have an account?
              </p>
              <Link to="/sign-in">
                <Button variant="ghost">
                  Sign In
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
