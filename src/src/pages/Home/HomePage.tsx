import React from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { ArrowRight, Map, Compass, Trophy, Sparkles } from 'lucide-react';

/**
 * HomePage Component
 * Main landing page showcasing all learning trails
 * LWC Conversion: c-home-page with CMS content regions
 */
export const HomePage: React.FC = () => {
  const trails = [
    {
      id: 'visitors',
      icon: Map,
      title: 'Visitor Trail',
      description: 'Start your journey with foundational knowledge and orientation. Perfect for newcomers exploring transition resources.',
      path: '/visitors-trail',
      color: 'var(--color-primary)',
    },
    {
      id: 'guided',
      icon: Compass,
      title: 'Guided Trail',
      description: 'Structured learning path with expert guidance. For those ready to commit to comprehensive transition planning.',
      path: '/guided-trail',
      color: 'var(--color-accent)',
    },
    {
      id: 'mastery',
      icon: Trophy,
      title: 'Trail of Mastery',
      description: 'Advanced skills and specialized knowledge. Deepen your expertise in specific transition domains.',
      path: '/trail-of-mastery',
      color: 'var(--color-success)',
    },
    {
      id: 'explorer',
      icon: Sparkles,
      title: "Explorer's Journey",
      description: 'Self-directed exploration and discovery. Create your own path through curated resources.',
      path: '/explorers-journey',
      color: 'var(--color-secondary)',
    },
  ];

  return (
    <SiteLayout>
      {/* Hero Section - CMS Region */}
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="home_hero"
            title="Your Transition Journey Starts Here"
            subtitle="Discover personalized learning paths designed to support military transitions with expert guidance and community support"
          />
        </Container>
      </section>

      {/* Trails Overview Section */}
      <section className="slds-section">
        <Container>
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl mb-4">Choose Your Trail</h2>
            <p className="text-lg text-[var(--color-neutral-700)] max-w-2xl mx-auto">
              Each trail is designed to meet you where you are in your transition journey. Select the path that best fits your current needs and goals.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {trails.map((trail) => {
              const Icon = trail.icon;
              return (
                <Card key={trail.id} className="hover:shadow-md transition-shadow">
                  <CardHeader>
                    <div className="flex items-start gap-4">
                      <div
                        className="p-3 rounded-lg"
                        style={{ backgroundColor: `${trail.color}20` }}
                      >
                        <Icon size={24} style={{ color: trail.color }} />
                      </div>
                      <div className="flex-1">
                        <CardTitle>{trail.title}</CardTitle>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4">{trail.description}</p>
                    <Link to={trail.path}>
                      <Button variant="outline" className="w-full group">
                        Explore Trail
                        <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      {/* How It Works - CMS Region */}
      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container>
          <CMSRegion regionName="home_how_it_works" contentType="card-grid">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl mb-4">How It Works</h2>
              <p className="text-lg text-[var(--color-neutral-700)] max-w-2xl mx-auto">
                Our platform guides you through every step of your transition journey
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Choose Your Path', description: 'Select the learning trail that matches your goals and experience level' },
                { step: '2', title: 'Learn & Grow', description: 'Access curated content, expert guidance, and community support' },
                { step: '3', title: 'Track Progress', description: 'Monitor your journey and celebrate milestones along the way' },
              ].map((item) => (
                <div key={item.step} className="text-center">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[var(--color-primary)] text-white text-2xl font-bold mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                  <p className="text-[var(--color-neutral-700)]">{item.description}</p>
                </div>
              ))}
            </div>
          </CMSRegion>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="slds-section">
        <Container>
          <div className="bg-gradient-to-r from-[var(--color-primary)] to-[var(--color-secondary)] rounded-lg p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl mb-4">Ready to Begin?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Join thousands of service members who have successfully navigated their transition with Transition Trails
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/visitors-trail">
                <Button size="lg" className="bg-white text-[var(--color-primary)] hover:bg-[var(--color-neutral-100)]">
                  Start Visitor Trail
                </Button>
              </Link>
              <Link to="/contact-us">
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
