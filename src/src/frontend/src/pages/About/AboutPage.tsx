import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Section } from '../../components/ui/Section';

export const AboutPage: React.FC = () => {
  return (
    <SiteLayout>
      <Section className="pt-20">
        <h1 className="text-4xl font-bold mb-8">About Transition Trails</h1>
        
        <div className="prose prose-lg max-w-4xl">
          {/* CMS content here */}
          <p className="lead text-xl text-gray-600 mb-6">
            Transition Trails is an innovative platform designed to guide users through complex digital transformation journeys.
          </p>
          
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
          </p>
          
          <h3 className="text-2xl font-bold mt-8 mb-4">Our Mission</h3>
          <p>
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </Section>
    </SiteLayout>
  );
};
