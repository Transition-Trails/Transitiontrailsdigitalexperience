import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';

export const GuidedTrailPage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Guided Trail"
        description="Your structured path to success. Follow the steps below."
        className="bg-indigo-600"
      />
      
      <Section>
        <div className="flex flex-col md:flex-row gap-8">
          <aside className="w-full md:w-1/4">
            {/* CMS content here - Sidebar Navigation */}
            <div className="bg-gray-50 p-4 rounded border">
              <h3 className="font-bold mb-4">Modules</h3>
              <ul className="space-y-2">
                <li className="font-medium text-[var(--color-primary)]">1. Introduction</li>
                <li className="text-gray-600">2. Core Concepts</li>
                <li className="text-gray-600">3. Practical Application</li>
                <li className="text-gray-600">4. Assessment</li>
              </ul>
            </div>
          </aside>
          
          <main className="flex-1">
            {/* CMS content here - Module Content */}
            <h2 className="text-2xl font-bold mb-4">Module 1: Introduction</h2>
            <div className="prose max-w-none mb-8">
              <p>
                Welcome to the guided trail. In this section, we will cover the basics of the program.
                Please ensure you have completed the prerequisites before continuing.
              </p>
            </div>
            
            <div className="flex justify-between items-center border-t pt-6">
              <Button variant="ghost" disabled>Previous</Button>
              <Button>Next Module</Button>
            </div>
          </main>
        </div>
      </Section>
    </SiteLayout>
  );
};
