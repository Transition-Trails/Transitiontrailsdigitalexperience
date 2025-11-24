import React, { useState } from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSHero, CMSRegion } from '../../components/cms/CMSRegion';
import { Search, Filter, BookmarkPlus } from 'lucide-react';

/**
 * ExplorersJourneyPage Component
 * Self-directed learning and resource discovery
 * LWC Conversion: c-explorers-journey-page
 */
export const ExplorersJourneyPage: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    'All Resources',
    'Career Planning',
    'Financial Planning',
    'Education & Training',
    'Health & Wellness',
    'Family Support',
    'Legal & Benefits',
  ];

  const resources = [
    {
      id: 1,
      title: 'Resume Writing Masterclass',
      category: 'Career Planning',
      type: 'Video Course',
      duration: '2 hours',
      level: 'Beginner',
    },
    {
      id: 2,
      title: 'VA Benefits Navigator',
      category: 'Legal & Benefits',
      type: 'Interactive Tool',
      duration: '30 min',
      level: 'All Levels',
    },
    {
      id: 3,
      title: 'Networking for Veterans',
      category: 'Career Planning',
      type: 'Article Series',
      duration: '1 hour',
      level: 'Intermediate',
    },
    {
      id: 4,
      title: 'Financial Fitness Toolkit',
      category: 'Financial Planning',
      type: 'Download',
      duration: '15 min',
      level: 'Beginner',
    },
    {
      id: 5,
      title: 'Mindfulness for Transitions',
      category: 'Health & Wellness',
      type: 'Audio Program',
      duration: '45 min',
      level: 'All Levels',
    },
    {
      id: 6,
      title: 'GI Bill Decision Guide',
      category: 'Education & Training',
      type: 'Interactive',
      duration: '20 min',
      level: 'Beginner',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <CMSHero
            regionName="explorer_journey_hero"
            title="Explorer's Journey"
            subtitle="Discover resources at your own pace, create your personalized learning path"
          />
        </Container>
      </section>

      <section className="slds-section">
        <Container>
          <CMSRegion regionName="explorer_search_intro">
            <div className="mb-8 text-center max-w-3xl mx-auto">
              <h2 className="text-3xl mb-4">Explore Our Resource Library</h2>
              <p className="text-lg text-[var(--color-neutral-700)]">
                Browse hundreds of curated resources, save favorites, and build your custom learning journey
              </p>
            </div>
          </CMSRegion>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 mb-6">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-[var(--color-neutral-500)]" size={20} />
                <input
                  type="text"
                  placeholder="Search resources..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-[var(--color-neutral-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
                />
              </div>
              <Button variant="outline" className="flex items-center gap-2">
                <Filter size={20} />
                Filters
              </Button>
            </div>

            {/* Category Tabs */}
            <div className="flex gap-2 overflow-x-auto pb-2">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category.toLowerCase().replace(' ', '-'))}
                  className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition-colors ${
                    selectedCategory === category.toLowerCase().replace(' ', '-')
                      ? 'bg-[var(--color-primary)] text-white'
                      : 'bg-[var(--color-neutral-100)] text-[var(--color-neutral-700)] hover:bg-[var(--color-neutral-200)]'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>

          {/* Resource Grid - CMS Region */}
          <CMSRegion regionName="explorer_resources" contentType="card-grid">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.map((resource) => (
                <Card key={resource.id}>
                  <CardHeader>
                    <div className="flex items-start justify-between mb-2">
                      <span className="text-xs px-2 py-1 bg-[var(--color-primary)]/10 text-[var(--color-primary)] rounded-full font-semibold">
                        {resource.type}
                      </span>
                      <button className="text-[var(--color-neutral-500)] hover:text-[var(--color-primary)]">
                        <BookmarkPlus size={20} />
                      </button>
                    </div>
                    <CardTitle className="text-base">{resource.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2 text-sm text-[var(--color-neutral-700)] mb-4">
                      <div className="flex justify-between">
                        <span>Category:</span>
                        <span className="font-medium">{resource.category}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Duration:</span>
                        <span className="font-medium">{resource.duration}</span>
                      </div>
                      <div className="flex justify-between">
                        <span>Level:</span>
                        <span className="font-medium">{resource.level}</span>
                      </div>
                    </div>
                    <Button variant="outline" size="sm" className="w-full">
                      View Resource
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CMSRegion>

          <div className="mt-8 text-center">
            <Button variant="outline" size="lg">
              Load More Resources
            </Button>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
