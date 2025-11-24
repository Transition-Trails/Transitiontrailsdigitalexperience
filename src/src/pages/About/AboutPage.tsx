import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { Target, Heart, Users, Award } from 'lucide-react';

/**
 * AboutPage Component
 * Organization mission, values, and team information
 * LWC Conversion: c-about-page
 */
export const AboutPage: React.FC = () => {
  const values = [
    {
      icon: Target,
      title: 'Mission-Focused',
      description: 'Supporting every service member through their transition journey',
    },
    {
      icon: Heart,
      title: 'Veteran-Centered',
      description: 'Built by veterans, for veterans, with deep understanding',
    },
    {
      icon: Users,
      title: 'Community-Driven',
      description: 'Fostering connections, mentorship, and peer support',
    },
    {
      icon: Award,
      title: 'Excellence-Oriented',
      description: 'Delivering high-quality resources and expert guidance',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="about_hero"
            title="About Transition Trails"
            subtitle="Empowering military transitions through comprehensive, compassionate support"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container size="md">
          <CMSRegion regionName="about_mission" contentType="text">
            <div className="prose max-w-none">
              <h2 className="text-3xl mb-6 text-center">Our Mission</h2>
              <p className="text-lg text-[var(--color-neutral-700)] text-center mb-8">
                Transition Trails exists to ensure every service member has access to the resources,
                guidance, and community support they need to successfully navigate their military transition
                and thrive in civilian life.
              </p>
            </div>
          </CMSRegion>
        </Container>
      </section>

      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container>
          <h2 className="text-3xl mb-12 text-center">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <Card key={value.title} className="text-center">
                  <CardContent className="pt-6">
                    <div className="inline-flex p-4 rounded-full bg-[var(--color-primary)]/10 mb-4">
                      <Icon size={32} color="var(--color-primary)" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-[var(--color-neutral-700)]">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="slds-section">
        <Container size="md">
          <CMSRegion regionName="about_story" contentType="text">
            <div className="prose max-w-none">
              <h2 className="text-3xl mb-6 text-center">Our Story</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                Founded by veterans who experienced the challenges of military transition firsthand,
                Transition Trails was created to bridge the gap between military service and civilian success.
                We understand that transition isn't just about finding a job—it's about finding purpose,
                community, and a path forward.
              </p>
              <p className="text-lg text-[var(--color-neutral-700)] mt-4">
                Our platform combines cutting-edge learning technology with time-tested transition best practices,
                all delivered through a supportive community of peers and mentors who've walked this path before.
              </p>
            </div>
          </CMSRegion>
        </Container>
      </section>

      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container>
          <CMSRegion regionName="about_impact">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
              <div>
                <p className="text-5xl font-bold text-[var(--color-primary)] mb-2">10K+</p>
                <p className="text-lg text-[var(--color-neutral-700)]">Veterans Supported</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[var(--color-primary)] mb-2">500+</p>
                <p className="text-lg text-[var(--color-neutral-700)]">Expert Mentors</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[var(--color-primary)] mb-2">95%</p>
                <p className="text-lg text-[var(--color-neutral-700)]">Success Rate</p>
              </div>
            </div>
          </CMSRegion>
        </Container>
      </section>
    </SiteLayout>
  );
};
