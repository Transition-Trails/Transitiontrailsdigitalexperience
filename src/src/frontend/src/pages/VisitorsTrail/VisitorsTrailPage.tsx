import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';

export const VisitorsTrailPage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Visitor's Trail"
        description="Welcome to the start of your journey. Discover what awaits."
        className="bg-teal-600"
      />
      
      <Section>
        {/* CMS content here - Visitor Information */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">About the Visitor Experience</h2>
          <p className="text-lg text-gray-700 mb-8">
            This trail is designed for guests who are new to our ecosystem. 
            Here you will find general information, introductory videos, and downloadable resources.
          </p>
          
          <div className="grid gap-8 md:grid-cols-2">
            <div className="aspect-video bg-gray-200 rounded flex items-center justify-center">
              <span className="text-gray-400">Video Placeholder</span>
            </div>
            <div className="space-y-4">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="h-4 bg-gray-200 rounded w-full"></div>
              <div className="h-4 bg-gray-200 rounded w-5/6"></div>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
};
