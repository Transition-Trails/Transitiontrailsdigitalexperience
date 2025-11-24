import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Hero } from '../../components/ui/Hero';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  return (
    <SiteLayout>
      <Hero 
        title="Welcome to Transition Trails"
        description="Embark on your digital journey through our immersive experiences."
        ctaText="Start Exploring"
        ctaLink="/visitors-trail"
        className="bg-[var(--color-primary)]" 
      />
      
      <Section>
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Choose Your Path</h2>
          <p className="text-gray-600">Select the experience that best fits your goals.</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* CMS content here - Featured Paths */}
          <Card title="Visitor's Trail">
            <p className="mb-4 text-sm text-gray-500">Explore freely and discover what we have to offer.</p>
            <Link to="/visitors-trail">
              <Button variant="secondary" size="sm" className="w-full">View Trail</Button>
            </Link>
          </Card>

          <Card title="Guided Trail">
            <p className="mb-4 text-sm text-gray-500">A structured path with step-by-step guidance.</p>
            <Link to="/guided-trail">
              <Button variant="secondary" size="sm" className="w-full">View Trail</Button>
            </Link>
          </Card>

          <Card title="Trail of Mastery">
            <p className="mb-4 text-sm text-gray-500">Advanced curriculum for deep learning.</p>
            <Link to="/trail-of-mastery">
              <Button variant="secondary" size="sm" className="w-full">View Trail</Button>
            </Link>
          </Card>

          <Card title="Explorer's Journey">
            <p className="mb-4 text-sm text-gray-500">Chart your own course across the map.</p>
            <Link to="/explorers-journey">
              <Button variant="secondary" size="sm" className="w-full">View Trail</Button>
            </Link>
          </Card>
        </div>
      </Section>

      <Section background="gray">
        {/* CMS content here - Latest Updates */}
        <h2 className="text-2xl font-bold mb-6">Latest Updates</h2>
        <div className="bg-white p-8 rounded shadow-sm">
          <p className="italic text-gray-500">Dynamic content loading from Salesforce CMS...</p>
        </div>
      </Section>
    </SiteLayout>
  );
};
