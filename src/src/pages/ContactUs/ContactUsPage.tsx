import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardContent } from '../../components/ui/Card';
import { CMSHero } from '../../components/cms/CMSRegion';
import { ContactForm } from '../../components/integrations/JotformEmbed';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

/**
 * ContactUsPage Component
 * Contact information and form
 * LWC Conversion: c-contact-us-page with Jotform/Salesforce Forms integration
 */
export const ContactUsPage: React.FC = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: 'Email',
      value: 'support@transitiontrails.org',
      description: 'Response within 24 hours',
    },
    {
      icon: Phone,
      title: 'Phone',
      value: '1-800-TRAILS-1',
      description: 'Mon-Fri, 9am-5pm EST',
    },
    {
      icon: MapPin,
      title: 'Office',
      value: 'Arlington, VA',
      description: 'By appointment only',
    },
    {
      icon: MessageCircle,
      title: 'Chat',
      value: 'Live chat available',
      description: 'Mon-Fri, 9am-7pm EST',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="contact_hero"
            title="Contact Us"
            subtitle="We're here to help. Reach out with questions, feedback, or partnership inquiries"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Methods */}
            <div className="space-y-6">
              <h2 className="text-2xl font-semibold mb-4">Get in Touch</h2>
              {contactMethods.map((method) => {
                const Icon = method.icon;
                return (
                  <Card key={method.title}>
                    <CardContent className="pt-6">
                      <div className="flex items-start gap-4">
                        <div className="p-2 rounded-lg bg-[var(--color-primary)]/10">
                          <Icon size={24} color="var(--color-primary)" />
                        </div>
                        <div>
                          <h3 className="font-semibold mb-1">{method.title}</h3>
                          <p className="text-[var(--color-primary)] font-medium mb-1">
                            {method.value}
                          </p>
                          <p className="text-sm text-[var(--color-neutral-700)]">
                            {method.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl font-semibold mb-4">Send us a Message</h2>
              <Card>
                <CardContent className="pt-6">
                  <ContactForm />
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>

      <section className="slds-section bg-[var(--color-neutral-50)]">
        <Container size="md">
          <div className="text-center">
            <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-[var(--color-neutral-700)] mb-6">
              Before reaching out, check our FAQ section for quick answers to common questions
            </p>
            <a
              href="#"
              className="text-[var(--color-primary)] hover:underline font-medium"
            >
              Visit FAQ →
            </a>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
