import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';

export const TrailOfMasteryPage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Trail of Mastery"
        description="Advanced challenges for experienced practitioners."
        className="bg-purple-700"
      />
      
      <Section>
        {/* CMS content here - Mastery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[1, 2, 3, 4, 5, 6].map((item) => (
            <Card key={item} className="hover:shadow-md transition-shadow">
              <div className="h-40 bg-gray-200 mb-4 rounded-t-lg -mx-6 -mt-6"></div>
              <h3 className="text-xl font-bold mb-2">Mastery Challenge #{item}</h3>
              <p className="text-gray-600 mb-4">Complete this complex scenario to earn your badge.</p>
              <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded">
                Advanced
              </span>
            </Card>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
};
