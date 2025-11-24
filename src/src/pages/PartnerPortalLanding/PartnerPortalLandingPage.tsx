import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { PartnerPortalLogin } from '../../components/integrations/SalesforceLogin';
import { Users, FileText, BarChart, Handshake } from 'lucide-react';

/**
 * PartnerPortalLandingPage Component
 * Landing page for partner organizations
 * LWC Conversion: c-partner-portal-landing-page
 */
export const PartnerPortalLandingPage: React.FC = () => {
  const features = [
    {
      icon: Users,
      title: 'Collaboration Tools',
      description: 'Work together with other partner organizations to maximize impact',
    },
    {
      icon: FileText,
      title: 'Resource Sharing',
      description: 'Access and contribute to shared resources and best practices',
    },
    {
      icon: BarChart,
      title: 'Impact Analytics',
      description: 'Track your organization\'s impact and reach within the community',
    },
    {
      icon: Handshake,
      title: 'Referral Network',
      description: 'Connect veterans with the right resources and partner services',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="partner_portal_hero"
            title="Partner Portal"
            subtitle="Collaborate, share resources, and amplify your impact"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <CMSRegion regionName="partner_portal_overview">
            <div className="text-center mb-12 max-w-3xl mx-auto">
              <h2 className="text-3xl mb-4">Empowering Partner Organizations</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                The Partner Portal provides organizations with tools and resources to better serve
                transitioning service members through coordinated, effective support.
              </p>
            </div>
          </CMSRegion>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {features.map((feature) => {
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

          {/* Login Section */}
          <div className="max-w-xl mx-auto">
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Partner Access</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-neutral-700)] mb-6 text-center">
                  Sign in to access the full partner portal with collaboration tools, analytics, and resource management
                </p>
                <PartnerPortalLogin />
              </CardContent>
            </Card>

            {/* Become a Partner CTA */}
            <div className="mt-8 text-center">
              <p className="text-sm text-[var(--color-neutral-700)] mb-4">
                Not yet a partner organization?
              </p>
              <Button variant="outline">
                Learn About Partnership
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container>
          <CMSRegion regionName="partner_testimonials">
            <div className="text-center">
              <h2 className="text-3xl mb-12">Partner Success Stories</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[1, 2, 3].map((i) => (
                  <Card key={i}>
                    <CardContent className="pt-6">
                      <p className="text-[var(--color-neutral-700)] italic mb-4">
                        "The Partner Portal has transformed how we coordinate services and track our impact in supporting military transitions."
                      </p>
                      <p className="font-semibold">Partner Organization {i}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </CMSRegion>
        </Container>
      </section>
    </SiteLayout>
  );
};
