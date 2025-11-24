import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';

export const PartnerPortalLandingPage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Partner Portal"
        description="Collaborate, manage resources, and grow with us."
        className="bg-blue-900"
      />
      
      <Section>
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl font-bold mb-4">Welcome Partners</h2>
          <p className="text-gray-600">
            Access exclusive tools and resources designed to help you succeed in our ecosystem.
            Login to access your dedicated dashboard.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3 text-center">
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">1</div>
            <h3 className="font-bold mb-2">Resource Library</h3>
            <p className="text-sm text-gray-500">Download marketing materials and guides.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">2</div>
            <h3 className="font-bold mb-2">Lead Management</h3>
            <p className="text-sm text-gray-500">Track and manage your referrals.</p>
          </div>
          <div className="p-6 border rounded-lg">
            <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-xl">3</div>
            <h3 className="font-bold mb-2">Support</h3>
            <p className="text-sm text-gray-500">Get direct access to our partner success team.</p>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
};
