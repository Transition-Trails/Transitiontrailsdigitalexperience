import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';
import { Card } from '../../components/ui/Card';

export const ContactUsPage: React.FC = () => {
  return (
    <SiteLayout>
      <Section className="pt-20">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-3xl font-bold mb-2 text-center">Contact Us</h1>
          <p className="text-gray-500 text-center mb-8">We'd love to hear from you. Send us a message below.</p>
          
          <Card>
            {/* CMS content here - Form Integration Placeholder */}
            <form className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
                  <input id="firstName" className="w-full px-3 py-2 border rounded-md" placeholder="Jane" />
                </div>
                <div className="space-y-2">
                  <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
                  <input id="lastName" className="w-full px-3 py-2 border rounded-md" placeholder="Doe" />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <input id="email" type="email" className="w-full px-3 py-2 border rounded-md" placeholder="jane@example.com" />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <textarea id="message" rows={4} className="w-full px-3 py-2 border rounded-md" placeholder="How can we help?" />
              </div>

              <Button type="submit" className="w-full">Send Message</Button>
            </form>
          </Card>
        </div>
      </Section>
    </SiteLayout>
  );
};
