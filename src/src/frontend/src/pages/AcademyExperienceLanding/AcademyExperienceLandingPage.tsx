import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';
import { Button } from '../../components/ui/Button';

export const AcademyExperienceLandingPage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Academy Experience"
        description="Immersive learning for future leaders."
        className="bg-emerald-700"
      />
      
      <Section>
        <div className="flex flex-col-reverse md:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <h2 className="text-3xl font-bold">Transform Your Skills</h2>
            <p className="text-lg text-gray-700">
              Our Academy offers intensive, cohort-based learning experiences designed to accelerate your career.
              Gain hands-on experience with real-world projects.
            </p>
            <ul className="space-y-2">
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Live Workshops
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Mentorship
              </li>
              <li className="flex items-center gap-2">
                <span className="text-emerald-600 font-bold">✓</span> Certification
              </li>
            </ul>
            <Button size="lg">View Course Catalog</Button>
          </div>
          <div className="flex-1">
            <div className="bg-gray-200 rounded-xl h-[400px] flex items-center justify-center">
              <span className="text-gray-500">Academy Image Placeholder</span>
            </div>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
};
