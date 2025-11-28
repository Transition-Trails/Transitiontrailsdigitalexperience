import React from 'react';
import { ComponentResult } from './SearchResults';
import { FilterCategory, FilterStatus } from './FilterPanel';

// Component database
export const COMPONENT_DATABASE: ComponentResult[] = [
  // Primitives
  { id: 'button', name: 'Button', category: 'Primitives', description: 'Four variants (Primary, Secondary, Ghost, IconOnly) with multiple states and sizes', href: '#buttons', docStatus: 'complete', tags: ['Interactive', 'Accessibility'] },
  { id: 'textinput', name: 'Text Input', category: 'Primitives', description: 'Standard text input with label, helper text, and error states', href: '#inputs', docStatus: 'complete', tags: ['Form', 'Accessibility'] },
  { id: 'textarea', name: 'Text Area', category: 'Primitives', description: 'Multi-line text input for longer content', href: '#inputs', docStatus: 'none', tags: ['Form'] },
  { id: 'select', name: 'Select Input', category: 'Primitives', description: 'Dropdown selection with label and validation', href: '#inputs', docStatus: 'none', tags: ['Form'] },
  { id: 'search', name: 'Search Input', category: 'Primitives', description: 'Text input optimized for search with icon', href: '#inputs', docStatus: 'none', tags: ['Form', 'Interactive'] },
  { id: 'checkbox', name: 'Checkbox', category: 'Primitives', description: 'Checkbox input with label and validation', href: '#controls', docStatus: 'none', tags: ['Form', 'Accessibility'] },
  { id: 'radio', name: 'Radio', category: 'Primitives', description: 'Radio button input with label', href: '#controls', docStatus: 'none', tags: ['Form', 'Accessibility'] },
  { id: 'switch', name: 'Switch', category: 'Primitives', description: 'Toggle switch for binary options', href: '#controls', docStatus: 'none', tags: ['Form', 'Interactive'] },
  { id: 'card', name: 'Card', category: 'Primitives', description: 'Flexible card container with elevation and padding variants', href: '#cards', docStatus: 'complete', tags: ['Layout', 'Data Display'] },
  { id: 'panel', name: 'Panel', category: 'Primitives', description: 'Base panel component with header and content areas', href: '#cards', docStatus: 'none', tags: ['Layout'] },
  { id: 'modal', name: 'Modal', category: 'Primitives', description: 'Dialog overlay for focused interactions', href: '#overlay', docStatus: 'none', tags: ['Interactive', 'Feedback'] },
  { id: 'toast', name: 'Toast', category: 'Primitives', description: 'Temporary notification messages', href: '#overlay', docStatus: 'none', tags: ['Feedback'] },
  { id: 'chip-status', name: 'Chip Status', category: 'Primitives', description: 'Status indicators with color coding', href: '#chips', docStatus: 'none', tags: ['Data Display'] },
  { id: 'chip-level', name: 'Chip Level', category: 'Primitives', description: 'Level indicators for difficulty or proficiency', href: '#chips', docStatus: 'none', tags: ['Data Display'] },
  { id: 'badge', name: 'Badge', category: 'Primitives', description: 'Notification badges with counts', href: '#chips', docStatus: 'none', tags: ['Data Display'] },
  { id: 'tag', name: 'Tag', category: 'Primitives', description: 'Category or label tags', href: '#chips', docStatus: 'none', tags: ['Data Display'] },
  { id: 'stepper', name: 'Stepper', category: 'Primitives', description: 'Multi-step progress indicator', href: '#stepper', docStatus: 'none', tags: ['Navigation', 'Data Display'] },
  { id: 'tooltip', name: 'Tooltip', category: 'Primitives', description: 'Contextual help text on hover', href: '#tooltip', docStatus: 'none', tags: ['Feedback'] },
  { id: 'skeleton', name: 'Skeleton', category: 'Primitives', description: 'Loading placeholders for content', href: '#skeleton', docStatus: 'none', tags: ['Feedback'] },

  // Navigation
  { id: 'header', name: 'Header', category: 'Navigation', description: 'Site-wide navigation header with logo and menu', href: '#header', docStatus: 'none', tags: ['Navigation', 'Layout'] },
  { id: 'tabstrip', name: 'Tab Strip', category: 'Navigation', description: 'Horizontal tabs for content organization', href: '#tabstrip', docStatus: 'none', tags: ['Navigation'] },
  { id: 'breadcrumbs', name: 'Breadcrumbs', category: 'Navigation', description: 'Navigation path with chevron separators', href: '#breadcrumbs', docStatus: 'none', tags: ['Navigation'] },
  { id: 'pagination', name: 'Pagination', category: 'Navigation', description: 'Page navigation with ellipses for long lists', href: '#pagination', docStatus: 'none', tags: ['Navigation'] },

  // Panels
  { id: 'learner-stats', name: 'Learner Stats Panel', category: 'Panels', description: 'Dashboard widget showing learner statistics and progress', href: '#learner-stats', docStatus: 'none', tags: ['Data Display', 'Layout'] },
  { id: 'goals-progress', name: 'Goals & Progress Panel', category: 'Panels', description: 'Track goals and completion status', href: '#goals-progress', docStatus: 'none', tags: ['Data Display'] },
  { id: 'skills-certs', name: 'Skills & Certs Panel', category: 'Panels', description: 'Display earned skills and certifications', href: '#skills-certs', docStatus: 'none', tags: ['Data Display'] },
  { id: 'penny-insight', name: 'Penny Insight Rail', category: 'Panels', description: 'AI-powered insights sidebar', href: '#penny-insight', docStatus: 'none', tags: ['Data Display', 'Interactive'] },
  { id: 'badges-credits', name: 'Badges & Credits Panel', category: 'Panels', description: 'Gamification rewards display', href: '#badges-credits', docStatus: 'none', tags: ['Data Display'] },
  { id: 'penny-tip', name: 'Penny Tip', category: 'Panels', description: 'Quick tips from AI assistant', href: '#penny-tip', docStatus: 'none', tags: ['Feedback'] },

  // Domain Cards
  { id: 'partner-project', name: 'Partner Project Card', category: 'Domain Cards', description: 'Showcase partner projects with details', href: '#partner-project', docStatus: 'none', tags: ['Data Display'] },
  { id: 'event-session', name: 'Event Session Card', category: 'Domain Cards', description: 'Display event details and registration', href: '#event-session', docStatus: 'none', tags: ['Data Display', 'Interactive'] },
  { id: 'roadmap-item', name: 'Roadmap Item Card', category: 'Domain Cards', description: 'Feature roadmap items with status', href: '#roadmap-item', docStatus: 'none', tags: ['Data Display'] },
  { id: 'learning-activity', name: 'Learning Activity Card', category: 'Domain Cards', description: 'Interactive learning content cards', href: '#learning-activity', docStatus: 'none', tags: ['Data Display', 'Interactive'] },
  { id: 'assignment', name: 'Assignment Card', category: 'Domain Cards', description: 'Assignment details with due dates', href: '#assignment', docStatus: 'none', tags: ['Data Display'] },
  { id: 'community-post', name: 'Community Post Card', category: 'Domain Cards', description: 'Social feed post with engagement', href: '#community-post', docStatus: 'none', tags: ['Data Display', 'Interactive'] },
  { id: 'program-overview', name: 'Program Overview Card', category: 'Domain Cards', description: 'Program information and enrollment', href: '#program-overview', docStatus: 'none', tags: ['Data Display'] },
  { id: 'ai-trail', name: 'AI Trail Card', category: 'Domain Cards', description: 'AI-powered learning path card', href: '#ai-trail', docStatus: 'none', tags: ['Data Display', 'Interactive'] },
  { id: 'citizen-platform', name: 'Citizen Platform Card', category: 'Domain Cards', description: 'Salesforce platform feature card', href: '#citizen-platform', docStatus: 'none', tags: ['Data Display'] },
  { id: 'trail-mission', name: 'Trail Mission Card', category: 'Domain Cards', description: 'Mission objectives and rewards', href: '#trail-mission', docStatus: 'none', tags: ['Data Display'] },
  { id: 'trail-path', name: 'Trail Path Card', category: 'Domain Cards', description: 'Learning path with milestones', href: '#trail-path', docStatus: 'none', tags: ['Data Display'] },

  // Sections
  { id: 'metric-tile', name: 'Metric Tile', category: 'Sections', description: 'Large metric display for impact', href: '#metric-tile', docStatus: 'none', tags: ['Data Display'] },
  { id: 'donate-section', name: 'Donate Section', category: 'Sections', description: 'Donation tiers and CTA', href: '#donate-section', docStatus: 'none', tags: ['Interactive', 'Layout'] },
  { id: 'feature-roadmap', name: 'Feature Roadmap Section', category: 'Sections', description: 'Product roadmap timeline', href: '#feature-roadmap', docStatus: 'none', tags: ['Data Display', 'Layout'] },

  // Templates
  { id: 'vision-donor', name: 'Vision/Donor Page', category: 'Templates', description: 'Full page template for vision and donations', href: '#vision-donor', docStatus: 'none', tags: ['Layout'] },
  { id: 'dashboard', name: 'Dashboard Template', category: 'Templates', description: 'Learner dashboard layout', href: '#dashboard', docStatus: 'none', tags: ['Layout'] },
  { id: 'program-overview-template', name: 'Program Overview Template', category: 'Templates', description: 'Program details page layout', href: '#program-overview-template', docStatus: 'none', tags: ['Layout'] },
  { id: 'learning-center', name: 'Learning Center Template', category: 'Templates', description: 'Activity catalog with filters', href: '#learning-center', docStatus: 'none', tags: ['Layout'] },
  { id: 'community-feed', name: 'Community Feed Template', category: 'Templates', description: 'Social feed layout', href: '#community-feed', docStatus: 'none', tags: ['Layout'] },

  // Site Pages
  { id: 'site-home', name: 'Home Page', category: 'Site Pages', description: 'Public homepage with hero and features', href: '#site-home', docStatus: 'none', tags: ['Layout'] },
  { id: 'site-about', name: 'About Page', category: 'Site Pages', description: 'Organization information', href: '#site-about', docStatus: 'none', tags: ['Layout'] },
  { id: 'site-programs', name: 'Programs Page', category: 'Site Pages', description: 'Program catalog', href: '#site-programs', docStatus: 'none', tags: ['Layout'] },
  { id: 'site-contact', name: 'Contact Page', category: 'Site Pages', description: 'Contact form and information', href: '#site-contact', docStatus: 'none', tags: ['Layout', 'Form'] },

  // Salesforce
  { id: 'salesforce-handoff', name: 'Salesforce Handoff Board', category: 'Salesforce', description: 'Engineering handoff documentation for LWC conversion', href: '#salesforce-handoff', docStatus: 'none', tags: ['Data Display'] },
];

export function useComponentSearch() {
  const [searchQuery, setSearchQuery] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState<FilterCategory>('all');
  const [selectedStatus, setSelectedStatus] = React.useState<FilterStatus>('all');
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  const filteredResults = React.useMemo(() => {
    let results = COMPONENT_DATABASE;

    // Filter by search query
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      results = results.filter(
        (component) =>
          component.name.toLowerCase().includes(query) ||
          component.description.toLowerCase().includes(query) ||
          component.category.toLowerCase().includes(query) ||
          component.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    // Filter by category
    if (selectedCategory !== 'all') {
      const categoryMap: Record<FilterCategory, string[]> = {
        all: [],
        primitives: ['Primitives'],
        navigation: ['Navigation'],
        panels: ['Panels'],
        cards: ['Domain Cards'],
        sections: ['Sections'],
        templates: ['Templates'],
        pages: ['Site Pages'],
        salesforce: ['Salesforce']
      };
      
      const categories = categoryMap[selectedCategory];
      if (categories) {
        results = results.filter((component) => categories.includes(component.category));
      }
    }

    // Filter by documentation status
    if (selectedStatus !== 'all') {
      results = results.filter((component) => component.docStatus === selectedStatus);
    }

    // Filter by tags
    if (selectedTags.length > 0) {
      results = results.filter((component) =>
        selectedTags.every((tag) => component.tags?.includes(tag))
      );
    }

    return results;
  }, [searchQuery, selectedCategory, selectedStatus, selectedTags]);

  const handleClearSearch = React.useCallback(() => {
    setSearchQuery('');
  }, []);

  const handleToggleTag = React.useCallback((tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  }, []);

  const handleClearFilters = React.useCallback(() => {
    setSelectedCategory('all');
    setSelectedStatus('all');
    setSelectedTags([]);
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    selectedCategory,
    setSelectedCategory,
    selectedStatus,
    setSelectedStatus,
    selectedTags,
    handleToggleTag,
    handleClearSearch,
    handleClearFilters,
    filteredResults,
    totalResults: COMPONENT_DATABASE.length
  };
}
