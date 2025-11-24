import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';

export const ExplorersJourneyPage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Explorer's Journey"
        description="Chart your own path. The map is open."
        className="bg-orange-600"
      />
      
      <Section>
        <div className="relative w-full h-[600px] bg-gray-100 rounded-lg border border-gray-300 flex items-center justify-center overflow-hidden">
          {/* Placeholder for Interactive Map */}
          <div className="absolute inset-0 bg-[url('https://placehold.co/1200x600/e2e8f0/94a3b8?text=Interactive+Map+Placeholder')] bg-cover bg-center opacity-50"></div>
          <div className="relative z-10 text-center p-8 bg-white/80 backdrop-blur-sm rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-2">Interactive Map</h3>
            <p className="text-gray-600">
              This region will contain the interactive SVG or Leaflet map component.
            </p>
          </div>
        </div>
      </Section>

      <Section background="gray">
        {/* CMS content here - Location Highlights */}
        <h2 className="text-2xl font-bold mb-6">Popular Destinations</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="bg-white p-4 rounded shadow-sm">
              <div className="h-24 bg-gray-200 rounded mb-2"></div>
              <div className="font-bold">Location Name {i}</div>
            </div>
          ))}
        </div>
      </Section>
    </SiteLayout>
  );
};
