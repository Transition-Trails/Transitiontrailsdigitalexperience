import React from 'react';
import { Button } from '../../ttds/Button';
import { SelectInput } from '../../ttds/SelectInput';
import { Tag } from '../../ttds/Tag';
import { TTTrailPathCard, TTTrailPathCardProps } from '../TrailPathCard';
import { TTCitizenPlatformCard, TTCitizenPlatformCardProps } from '../CitizenPlatformCard';
import { LearningActivityCard, LearningActivityCardProps } from '../../ttds/LearningActivityCard';
import { X, SlidersHorizontal } from 'lucide-react';

// Filter types
export type TrailFilter = 'all' | 'admin' | 'developer' | 'business-analyst' | 'architect';
export type PlatformFilter = 'forms' | 'work-os' | 'automation' | 'email-marketing' | 'design' | 'database' | 'productivity';
export type ActivityFilter = 'study-group' | 'peer-review' | 'capstone';

export interface FilterState {
  trails: TrailFilter[];
  platforms: PlatformFilter[];
  activities: ActivityFilter[];
}

// Content types for the grid
export type ContentItem = 
  | { type: 'trail'; data: TTTrailPathCardProps }
  | { type: 'platform'; data: TTCitizenPlatformCardProps }
  | { type: 'activity'; data: LearningActivityCardProps };

export interface TTLearningCenterTemplateProps {
  // Page Header
  title?: string;
  subtitle?: string;
  
  // Filters
  showFilters?: boolean;
  onFilterChange?: (filters: FilterState) => void;
  
  // Content
  content: ContentItem[];
  
  // Variants
  theme?: 'light' | 'dark';
  filterVariant?: 'default' | 'with-chips' | 'active';
  contentFilter?: 'all' | 'trails' | 'platforms' | 'activities';
}

export const TTLearningCenterTemplate = React.forwardRef<HTMLDivElement, TTLearningCenterTemplateProps>(
  (
    {
      title = 'Learning Center',
      subtitle = 'Browse Trails, Platforms, and Activities',
      showFilters = true,
      onFilterChange,
      content,
      theme = 'light',
      filterVariant = 'default',
      contentFilter = 'all',
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    
    // State for filters
    const [filters, setFilters] = React.useState<FilterState>({
      trails: [],
      platforms: [],
      activities: [],
    });
    
    const [showFilterBar, setShowFilterBar] = React.useState(true);

    // Theme classes
    const bgClass = isDark ? 'bg-slate-900' : 'bg-slate-50';
    const textPrimaryClass = isDark ? 'text-slate-50' : 'text-slate-900';
    const textSecondaryClass = isDark ? 'text-slate-300' : 'text-slate-700';
    const textMutedClass = isDark ? 'text-slate-400' : 'text-slate-600';
    const filterBgClass = isDark ? 'bg-slate-800' : 'bg-white';
    const filterBorderClass = isDark ? 'border-slate-700' : 'border-slate-200';

    // Handle filter changes
    const handleTrailsChange = (value: string) => {
      const newFilters = { ...filters, trails: [value as TrailFilter] };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handlePlatformsChange = (value: string) => {
      const newFilters = { ...filters, platforms: [value as PlatformFilter] };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const handleActivitiesChange = (value: string) => {
      const newFilters = { ...filters, activities: [value as ActivityFilter] };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const clearFilters = () => {
      const newFilters = { trails: [], platforms: [], activities: [] };
      setFilters(newFilters);
      onFilterChange?.(newFilters);
    };

    const hasActiveFilters = filters.trails.length > 0 || filters.platforms.length > 0 || filters.activities.length > 0;

    // Filter content based on contentFilter prop
    const filteredContent = React.useMemo(() => {
      if (contentFilter === 'all') return content;
      return content.filter(item => {
        if (contentFilter === 'trails') return item.type === 'trail';
        if (contentFilter === 'platforms') return item.type === 'platform';
        if (contentFilter === 'activities') return item.type === 'activity';
        return true;
      });
    }, [content, contentFilter]);

    return (
      <div ref={ref} className={`w-full min-h-screen ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16">
          {/* Page Header */}
          <div className="mb-12">
            <h1 
              className={`text-4xl md:text-5xl mb-4 ${textPrimaryClass}`}
              style={{ fontWeight: 600 }}
            >
              {title}
            </h1>
            <p 
              className={`text-lg md:text-xl ${textSecondaryClass}`}
              style={{ fontWeight: 400 }}
            >
              {subtitle}
            </p>
          </div>

          {/* Filters Bar */}
          {showFilters && showFilterBar && (
            <div className={`mb-10 p-6 rounded-lg border ${filterBgClass} ${filterBorderClass}`}>
              <div className="flex flex-col gap-6">
                {/* Filter Header */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <SlidersHorizontal className={`w-5 h-5 ${textMutedClass}`} />
                    <h2 
                      className={`text-lg ${textPrimaryClass}`}
                      style={{ fontWeight: 600 }}
                    >
                      Filters
                    </h2>
                  </div>
                  {hasActiveFilters && (
                    <button
                      onClick={clearFilters}
                      className={`text-sm ${isDark ? 'text-emerald-400 hover:text-emerald-300' : 'text-emerald-700 hover:text-emerald-800'} transition-colors`}
                      style={{ fontWeight: 500 }}
                    >
                      Clear all
                    </button>
                  )}
                </div>

                {/* Filter Controls */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  {/* Trails Filter */}
                  <div className="flex flex-col gap-2">
                    <label 
                      className={`text-sm ${textSecondaryClass}`}
                      style={{ fontWeight: 600 }}
                    >
                      Trails
                    </label>
                    <SelectInput
                      value={filters.trails[0] || ''}
                      onChange={(e) => handleTrailsChange(e.target.value)}
                      options={[
                        { label: 'All Trails', value: '' },
                        { label: 'Admin', value: 'admin' },
                        { label: 'Developer', value: 'developer' },
                        { label: 'Business Analyst', value: 'business-analyst' },
                        { label: 'Architect', value: 'architect' },
                      ]}
                      placeholder="Select trail..."
                    />
                  </div>

                  {/* Platforms Filter */}
                  <div className="flex flex-col gap-2">
                    <label 
                      className={`text-sm ${textSecondaryClass}`}
                      style={{ fontWeight: 600 }}
                    >
                      Platforms
                    </label>
                    <SelectInput
                      value={filters.platforms[0] || ''}
                      onChange={(e) => handlePlatformsChange(e.target.value)}
                      options={[
                        { label: 'All Platforms', value: '' },
                        { label: 'Forms', value: 'forms' },
                        { label: 'Work OS', value: 'work-os' },
                        { label: 'Automation', value: 'automation' },
                        { label: 'Email Marketing', value: 'email-marketing' },
                        { label: 'Design', value: 'design' },
                        { label: 'Database', value: 'database' },
                        { label: 'Productivity', value: 'productivity' },
                      ]}
                      placeholder="Select platform..."
                    />
                  </div>

                  {/* Activities Filter */}
                  <div className="flex flex-col gap-2">
                    <label 
                      className={`text-sm ${textSecondaryClass}`}
                      style={{ fontWeight: 600 }}
                    >
                      Activities
                    </label>
                    <SelectInput
                      value={filters.activities[0] || ''}
                      onChange={(e) => handleActivitiesChange(e.target.value)}
                      options={[
                        { label: 'All Activities', value: '' },
                        { label: 'Study Groups', value: 'study-group' },
                        { label: 'Peer Review', value: 'peer-review' },
                        { label: 'Capstone Projects', value: 'capstone' },
                      ]}
                      placeholder="Select activity..."
                    />
                  </div>
                </div>

                {/* Active Filter Chips */}
                {(filterVariant === 'with-chips' || filterVariant === 'active') && hasActiveFilters && (
                  <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-200 dark:border-slate-700">
                    {filters.trails.map((trail) => (
                      <Tag
                        key={trail}
                        variant="trail"
                        onRemove={() => {
                          const newFilters = { ...filters, trails: [] };
                          setFilters(newFilters);
                          onFilterChange?.(newFilters);
                        }}
                      >
                        Trail: {trail}
                      </Tag>
                    ))}
                    {filters.platforms.map((platform) => (
                      <Tag
                        key={platform}
                        variant="platform"
                        onRemove={() => {
                          const newFilters = { ...filters, platforms: [] };
                          setFilters(newFilters);
                          onFilterChange?.(newFilters);
                        }}
                      >
                        Platform: {platform}
                      </Tag>
                    ))}
                    {filters.activities.map((activity) => (
                      <Tag
                        key={activity}
                        variant="topic"
                        onRemove={() => {
                          const newFilters = { ...filters, activities: [] };
                          setFilters(newFilters);
                          onFilterChange?.(newFilters);
                        }}
                      >
                        Activity: {activity}
                      </Tag>
                    ))}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Content Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {filteredContent.map((item, index) => {
              if (item.type === 'trail') {
                return <TTTrailPathCard key={`trail-${index}`} {...item.data} />;
              }
              if (item.type === 'platform') {
                return <TTCitizenPlatformCard key={`platform-${index}`} {...item.data} />;
              }
              if (item.type === 'activity') {
                return <LearningActivityCard key={`activity-${index}`} {...item.data} />;
              }
              return null;
            })}
          </div>

          {/* Empty State */}
          {filteredContent.length === 0 && (
            <div className="text-center py-16">
              <p className={`text-lg ${textMutedClass}`} style={{ fontWeight: 400 }}>
                No content found. Try adjusting your filters.
              </p>
            </div>
          )}
        </div>
      </div>
    );
  }
);

TTLearningCenterTemplate.displayName = 'TTLearningCenterTemplate';

// Showcase Component
export function LearningCenterTemplateShowcase() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [filterVariant, setFilterVariant] = React.useState<'default' | 'with-chips' | 'active'>('default');
  const [contentFilter, setContentFilter] = React.useState<'all' | 'trails' | 'platforms' | 'activities'>('all');

  // Example content items
  const content: ContentItem[] = [
    // Trail Path Cards
    {
      type: 'trail',
      data: {
        title: 'Salesforce Admin',
        difficulty: 'beginner',
        xpTotal: 300,
        icon: '🎯',
        description: 'Master Salesforce administration fundamentals and earn your certification',
        isNew: true,
        ctaLabel: 'Start Trail',
        onCtaClick: () => console.log('Salesforce Admin clicked'),
      },
    },
    {
      type: 'trail',
      data: {
        title: 'Platform Developer',
        difficulty: 'advanced',
        xpTotal: 500,
        icon: '💻',
        description: 'Build custom applications with Apex, Lightning Web Components, and APIs',
        ctaLabel: 'Start Trail',
        onCtaClick: () => console.log('Platform Developer clicked'),
      },
    },
    {
      type: 'trail',
      data: {
        title: 'Business Analyst',
        difficulty: 'intermediate',
        xpTotal: 250,
        icon: '📊',
        description: 'Learn to gather requirements and design business solutions',
        ctaLabel: 'Start Trail',
        onCtaClick: () => console.log('Business Analyst clicked'),
      },
    },
    
    // Citizen Platform Cards
    {
      type: 'platform',
      data: {
        platformName: 'Canva',
        category: 'design',
        difficulty: 'beginner',
        xpPoints: 20,
        impactFocus: 'Nonprofit marketing & campaigns',
        ctaLabel: 'Learn More',
        onCTAClick: () => console.log('Canva clicked'),
      },
    },
    {
      type: 'platform',
      data: {
        platformName: 'Airtable',
        category: 'database',
        difficulty: 'intermediate',
        xpPoints: 50,
        impactFocus: 'Program management & tracking',
        ctaLabel: 'Learn More',
        onCTAClick: () => console.log('Airtable clicked'),
      },
    },
    {
      type: 'platform',
      data: {
        platformName: 'Zapier',
        category: 'automation',
        difficulty: 'intermediate',
        xpPoints: 40,
        impactFocus: 'Workflow automation',
        ctaLabel: 'Learn More',
        onCTAClick: () => console.log('Zapier clicked'),
      },
    },
    
    // Learning Activity Cards
    {
      type: 'activity',
      data: {
        activityType: 'study-group',
        title: 'Admin Certification Study Group',
        description: 'Join fellow learners preparing for the Salesforce Admin certification exam',
        tags: ['Salesforce', 'Admin', 'Certification'],
      },
    },
    {
      type: 'activity',
      data: {
        activityType: 'peer-review',
        title: 'Lightning Component Code Review',
        description: 'Get feedback on your Lightning Web Components from experienced developers',
        tags: ['LWC', 'Code Review', 'Developer'],
      },
    },
    {
      type: 'activity',
      data: {
        activityType: 'capstone',
        title: 'Nonprofit CRM Implementation',
        description: 'Build a complete CRM solution for a real nonprofit organization',
        tags: ['Nonprofit', 'CRM', 'Project'],
      },
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      {/* Controls */}
      <div className={`p-6 rounded-lg border ${theme === 'dark' ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'}`}>
        <div className="flex flex-col gap-6">
          <div>
            <h3 className={`text-lg mb-3 ${theme === 'dark' ? 'text-slate-100' : 'text-slate-900'}`} style={{ fontWeight: 600 }}>
              Template Controls
            </h3>
          </div>

          {/* Filter Variant Selection */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Filter Variant
            </label>
            <div className="flex flex-wrap gap-3">
              {(['default', 'with-chips', 'active'] as const).map((v) => (
                <Button
                  key={v}
                  variant={filterVariant === v ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setFilterVariant(v)}
                >
                  {v === 'default' ? 'Default' : v === 'with-chips' ? 'With Chips' : 'Active Filters'}
                </Button>
              ))}
            </div>
          </div>

          {/* Content Filter */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Content Filter
            </label>
            <div className="flex flex-wrap gap-3">
              {(['all', 'trails', 'platforms', 'activities'] as const).map((v) => (
                <Button
                  key={v}
                  variant={contentFilter === v ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setContentFilter(v)}
                >
                  {v === 'all' ? 'All Content' : v === 'trails' ? 'Trails Only' : v === 'platforms' ? 'Platforms Only' : 'Activities Only'}
                </Button>
              ))}
            </div>
          </div>

          {/* Theme Toggle */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Theme
            </label>
            <div className="flex gap-3">
              <Button
                variant={theme === 'light' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setTheme('light')}
              >
                Light
              </Button>
              <Button
                variant={theme === 'dark' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setTheme('dark')}
              >
                Dark
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Template Preview */}
      <div className="rounded-lg overflow-hidden border border-slate-200 shadow-sm">
        <TTLearningCenterTemplate
          title="Learning Center"
          subtitle="Browse Trails, Platforms, and Activities"
          showFilters={true}
          content={content}
          theme={theme}
          filterVariant={filterVariant}
          contentFilter={contentFilter}
          onFilterChange={(filters) => console.log('Filters changed:', filters)}
        />
      </div>
    </div>
  );
}
