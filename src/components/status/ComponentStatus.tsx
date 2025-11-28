import React from 'react';
import { CheckCircle2, Construction, FileEdit, Zap, Circle } from 'lucide-react';

export type ComponentStatusType = 'complete' | 'in-progress' | 'needs-lwc' | 'salesforce-ready' | 'planned';

export interface ComponentStatusBadgeProps {
  status: ComponentStatusType;
  size?: 'sm' | 'md' | 'lg';
  showLabel?: boolean;
}

export const ComponentStatusBadge: React.FC<ComponentStatusBadgeProps> = ({ 
  status, 
  size = 'md',
  showLabel = true 
}) => {
  const getStatusConfig = (status: ComponentStatusType) => {
    switch (status) {
      case 'complete':
        return {
          icon: CheckCircle2,
          label: 'Complete',
          emoji: '✅',
          color: 'text-emerald-700',
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          description: 'Design + Code Complete'
        };
      case 'in-progress':
        return {
          icon: Construction,
          label: 'In Progress',
          emoji: '🚧',
          color: 'text-amber-700',
          bg: 'bg-amber-50',
          border: 'border-amber-200',
          description: 'Active Development'
        };
      case 'needs-lwc':
        return {
          icon: FileEdit,
          label: 'Needs LWC',
          emoji: '📝',
          color: 'text-blue-700',
          bg: 'bg-blue-50',
          border: 'border-blue-200',
          description: 'Needs Salesforce Conversion'
        };
      case 'salesforce-ready':
        return {
          icon: Zap,
          label: 'Salesforce Ready',
          emoji: '⚡',
          color: 'text-purple-700',
          bg: 'bg-purple-50',
          border: 'border-purple-200',
          description: 'LWC Available'
        };
      case 'planned':
        return {
          icon: Circle,
          label: 'Planned',
          emoji: '⭕',
          color: 'text-slate-700',
          bg: 'bg-slate-50',
          border: 'border-slate-200',
          description: 'Future Development'
        };
    }
  };

  const config = getStatusConfig(status);
  const Icon = config.icon;

  const sizeClasses = {
    sm: 'px-2 py-0.5 text-xs gap-1',
    md: 'px-2.5 py-1 text-xs gap-1.5',
    lg: 'px-3 py-1.5 text-sm gap-2'
  };

  const iconSizes = {
    sm: 'h-3 w-3',
    md: 'h-3.5 w-3.5',
    lg: 'h-4 w-4'
  };

  return (
    <div 
      className={`inline-flex items-center rounded border ${config.bg} ${config.border} ${sizeClasses[size]}`}
      title={config.description}
    >
      <span className="text-base leading-none">{config.emoji}</span>
      {showLabel && (
        <span className={`${config.color}`} style={{ fontWeight: 600 }}>
          {config.label}
        </span>
      )}
    </div>
  );
};

export interface ComponentMetadata {
  id: string;
  name: string;
  category: 'primitive' | 'navigation' | 'panel' | 'card' | 'section' | 'template';
  status: ComponentStatusType;
  designComplete: boolean;
  codeComplete: boolean;
  lwcAvailable: boolean;
  salesforceObjectsMapped: boolean;
  description?: string;
  dependencies?: string[];
  tags?: string[];
}

export const componentRegistry: ComponentMetadata[] = [
  // Primitives
  {
    id: 'button',
    name: 'Button',
    category: 'primitive',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: false,
    description: 'Primary, Secondary, Tertiary, Ghost, and Danger variants',
    tags: ['interaction', 'form']
  },
  {
    id: 'text-input',
    name: 'Text Input',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Standard text input with label, error states, and helper text',
    tags: ['form', 'input']
  },
  {
    id: 'textarea',
    name: 'Text Area',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Multi-line text input',
    tags: ['form', 'input']
  },
  {
    id: 'select',
    name: 'Select Input',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Dropdown select with label and error states',
    tags: ['form', 'input']
  },
  {
    id: 'search-input',
    name: 'Search Input',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Search input with icon and clear functionality',
    tags: ['search', 'input']
  },
  {
    id: 'checkbox',
    name: 'Checkbox',
    category: 'primitive',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: false,
    description: 'Checkbox with label and indeterminate state',
    tags: ['form', 'control']
  },
  {
    id: 'radio',
    name: 'Radio',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Radio button with label',
    tags: ['form', 'control']
  },
  {
    id: 'switch',
    name: 'Switch',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Toggle switch with label',
    tags: ['form', 'control']
  },
  {
    id: 'card',
    name: 'Card',
    category: 'primitive',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: false,
    description: 'Container with elevation and padding variants',
    tags: ['layout', 'container']
  },
  {
    id: 'panel',
    name: 'Panel',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Surface container for content sections',
    tags: ['layout', 'container']
  },
  {
    id: 'modal',
    name: 'Modal',
    category: 'primitive',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Overlay dialog with backdrop, focus trap, ESC support, and size variants',
    tags: ['overlay', 'dialog', 'documented']
  },
  {
    id: 'toast',
    name: 'Toast',
    category: 'primitive',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Notification toasts with success, warning, error, and info variants',
    tags: ['notification', 'feedback', 'documented']
  },
  {
    id: 'chip-status',
    name: 'Chip Status',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Status indicators with variants',
    tags: ['status', 'indicator']
  },
  {
    id: 'chip-level',
    name: 'Chip Level',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Skill level indicators',
    tags: ['level', 'indicator']
  },
  {
    id: 'badge',
    name: 'Badge',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Notification badges and counts',
    tags: ['notification', 'count']
  },
  {
    id: 'tag',
    name: 'Tag',
    category: 'primitive',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: false,
    description: 'Category tags with multiple variants',
    tags: ['category', 'label']
  },
  {
    id: 'stepper',
    name: 'Stepper',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Multi-step progress indicator',
    tags: ['progress', 'navigation']
  },
  {
    id: 'tooltip',
    name: 'Tooltip',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Hover tooltips with position variants',
    tags: ['overlay', 'help']
  },
  {
    id: 'skeleton',
    name: 'Skeleton',
    category: 'primitive',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Loading state placeholders',
    tags: ['loading', 'placeholder']
  },
  
  // Navigation
  {
    id: 'header',
    name: 'Header',
    category: 'navigation',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Global navigation header with responsive mobile menu and user area',
    tags: ['navigation', 'layout', 'documented']
  },
  {
    id: 'tabstrip',
    name: 'Tab Strip',
    category: 'navigation',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Horizontal tab navigation',
    tags: ['navigation', 'tabs']
  },
  {
    id: 'breadcrumbs',
    name: 'Breadcrumbs',
    category: 'navigation',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Hierarchical navigation path',
    tags: ['navigation', 'path']
  },
  {
    id: 'pagination',
    name: 'Pagination',
    category: 'navigation',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Page navigation with smart ellipsis and first/last controls',
    tags: ['navigation', 'control', 'documented']
  },

  // Panels
  {
    id: 'learner-stats',
    name: 'Learner Stats Panel',
    category: 'panel',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Dashboard stats overview',
    tags: ['dashboard', 'stats'],
    dependencies: ['Contact', 'Program_Enrollment__c']
  },
  {
    id: 'goals-progress',
    name: 'Goals & Progress Panel',
    category: 'panel',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Goal tracking and progress',
    tags: ['dashboard', 'progress'],
    dependencies: ['Goal__c', 'Milestone__c']
  },
  {
    id: 'skills-certs',
    name: 'Skills & Certifications Panel',
    category: 'panel',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Skills and certifications display',
    tags: ['dashboard', 'skills'],
    dependencies: ['Skill__c', 'Certification__c']
  },
  {
    id: 'penny-insight',
    name: 'Penny Insights Rail',
    category: 'panel',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'AI-powered insights sidebar',
    tags: ['ai', 'insights'],
    dependencies: ['AI_Insight__c']
  },
  {
    id: 'badges-credits',
    name: 'Badges & Credits Panel',
    category: 'panel',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Achievements and credits display',
    tags: ['dashboard', 'achievements'],
    dependencies: ['Badge__c', 'Credit__c']
  },
  {
    id: 'penny-tip',
    name: 'Penny Tip',
    category: 'panel',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Quick tips from Penny AI',
    tags: ['ai', 'tips']
  },

  // Cards
  {
    id: 'partner-project',
    name: 'Partner Project Card',
    category: 'card',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Partner project showcase',
    tags: ['project', 'partner'],
    dependencies: ['Project__c', 'Account']
  },
  {
    id: 'event-session',
    name: 'Event Session Card',
    category: 'card',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Event and session display',
    tags: ['event', 'calendar'],
    dependencies: ['Event__c', 'Session__c']
  },
  {
    id: 'roadmap-item',
    name: 'Roadmap Item Card',
    category: 'card',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Product roadmap items with status tracking and audience tags',
    tags: ['roadmap', 'feature', 'documented'],
    dependencies: ['Platform_Feature__c', 'Feature_Audience__c', 'Feature_Release__c']
  },
  {
    id: 'learning-activity',
    name: 'Learning Activity Card',
    category: 'card',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Learning activities and resources',
    tags: ['learning', 'activity'],
    dependencies: ['Learning_Activity__c']
  },
  {
    id: 'assignment',
    name: 'Assignment Card',
    category: 'card',
    status: 'salesforce-ready',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: true,
    salesforceObjectsMapped: true,
    description: 'Assignment tracking',
    tags: ['assignment', 'task'],
    dependencies: ['Assignment__c']
  },
  {
    id: 'community-post',
    name: 'Community Post Card',
    category: 'card',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Community feed posts with author info and engagement metrics',
    tags: ['community', 'social', 'documented'],
    dependencies: ['Community_Post__c', 'Post_Reply__c', 'Post_Tag__c', 'User']
  },
  {
    id: 'program-overview',
    name: 'Program Overview Card',
    category: 'card',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Program pathways with duration, outcomes, and enrollment CTAs',
    tags: ['program', 'overview', 'documented'],
    dependencies: ['Learning_Program__c', 'Program_Outcome__c', 'Program_Enrollment__c']
  },
  {
    id: 'ai-trail',
    name: 'AI Trail Card',
    category: 'card',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'AI learning trails with platform integrations and capstone projects',
    tags: ['trail', 'ai', 'documented']
  },
  {
    id: 'citizen-platform',
    name: 'Citizen Platform Card',
    category: 'card',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Citizen developer platforms with difficulty levels and XP points',
    tags: ['platform', 'citizen', 'documented']
  },
  {
    id: 'trail-mission',
    name: 'Trail Mission Card',
    category: 'card',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Mission-based learning paths',
    tags: ['trail', 'mission']
  },
  {
    id: 'trail-path',
    name: 'Trail Path Card',
    category: 'card',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Learning path progression',
    tags: ['trail', 'path']
  },

  // Sections
  {
    id: 'metric-tile',
    name: 'Metric Tile',
    category: 'section',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Impact metric display',
    tags: ['metrics', 'stats']
  },
  {
    id: 'donate-section',
    name: 'Donation CTA Section',
    category: 'section',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Donation call-to-action',
    tags: ['donation', 'cta']
  },
  {
    id: 'feature-roadmap',
    name: 'Feature Roadmap Section',
    category: 'section',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Feature roadmap display',
    tags: ['roadmap', 'features']
  },

  // Templates
  {
    id: 'vision-donor',
    name: 'Vision/Donor Page',
    category: 'template',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Vision and donor landing page',
    tags: ['template', 'page']
  },
  {
    id: 'dashboard',
    name: 'Dashboard Template',
    category: 'template',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Learner dashboard layout',
    tags: ['template', 'dashboard'],
    dependencies: ['Contact', 'Multiple custom objects']
  },
  {
    id: 'program-overview-template',
    name: 'Program Overview Template',
    category: 'template',
    status: 'complete',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: false,
    description: 'Program overview page layout',
    tags: ['template', 'program']
  },
  {
    id: 'learning-center',
    name: 'Learning Center Template',
    category: 'template',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Learning center grid layout',
    tags: ['template', 'learning'],
    dependencies: ['Learning_Activity__c']
  },
  {
    id: 'community-feed',
    name: 'Community Feed Template',
    category: 'template',
    status: 'needs-lwc',
    designComplete: true,
    codeComplete: true,
    lwcAvailable: false,
    salesforceObjectsMapped: true,
    description: 'Community feed layout',
    tags: ['template', 'community'],
    dependencies: ['Post__c', 'Comment__c']
  }
];

export const getStatusStats = () => {
  const total = componentRegistry.length;
  const complete = componentRegistry.filter(c => c.status === 'complete').length;
  const inProgress = componentRegistry.filter(c => c.status === 'in-progress').length;
  const needsLWC = componentRegistry.filter(c => c.status === 'needs-lwc').length;
  const salesforceReady = componentRegistry.filter(c => c.status === 'salesforce-ready').length;
  const planned = componentRegistry.filter(c => c.status === 'planned').length;

  return {
    total,
    complete,
    inProgress,
    needsLWC,
    salesforceReady,
    planned,
    percentComplete: Math.round((complete / total) * 100),
    percentSalesforceReady: Math.round((salesforceReady / total) * 100)
  };
};

export const getComponentsByCategory = (category: ComponentMetadata['category']) => {
  return componentRegistry.filter(c => c.category === category);
};

export const getComponentsByStatus = (status: ComponentStatusType) => {
  return componentRegistry.filter(c => c.status === status);
};

export const getComponentById = (id: string) => {
  return componentRegistry.find(c => c.id === id);
};

export const getDocumentationProgress = () => {
  const total = componentRegistry.length;
  
  // Components with complete status or salesforce-ready are considered documented
  const fullyDocumented = componentRegistry.filter(c => 
    c.status === 'complete' || c.status === 'salesforce-ready'
  ).length;
  
  // Components that are in-progress are partially documented
  const partiallyDocumented = componentRegistry.filter(c => 
    c.status === 'in-progress'
  ).length;
  
  return {
    total,
    documented: fullyDocumented,
    partial: partiallyDocumented
  };
};
