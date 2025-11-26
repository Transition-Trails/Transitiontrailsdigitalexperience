import React from 'react';
import { Header, HeaderNavItem } from '../../ttds/Header';
import { LearnerStatsPanel, LearnerStat } from '../../ttds/LearnerStatsPanel';
import { TrailMissionsList, TrailMission } from '../../ttds/TrailMissionsList';
import { EventsList, Event } from '../../ttds/EventsList';
import { PennyInsightRail, InsightCTAType, InsightDensity } from '../../ttds/PennyInsightRail';
import { QuickLinks, QuickLink } from '../../ttds/QuickLinks';
import { Recommendations, Recommendation } from '../../ttds/Recommendations';

export interface DashboardTemplateProps {
  // Header Props
  headerLogo?: React.ReactNode;
  headerNavItems?: HeaderNavItem[];
  pageTitle?: string;
  pageSubtitle?: string;
  
  // Main Column Props
  learnerStats?: LearnerStat[];
  trailMissions?: TrailMission[];
  events?: Event[];
  
  // Right Rail Props
  pennyInsight?: {
    aiCoachingNote: string;
    contextLine: string;
    ctaType: InsightCTAType;
    density?: InsightDensity;
  };
  quickLinks?: QuickLink[];
  recommendations?: Recommendation[];
  
  // Template Variants
  variant?: 'learner' | 'coach';
  layout?: 'with-rail' | 'full-width';
  
  // Event Handlers
  onMissionClick?: (missionId: string) => void;
  onEventClick?: (eventId: string) => void;
  onPennyCtaClick?: () => void;
  onQuickLinkClick?: (linkId: string) => void;
  onRecommendationClick?: (recommendationId: string) => void;
  
  className?: string;
}

export const DashboardTemplate = React.forwardRef<HTMLDivElement, DashboardTemplateProps>(
  (
    {
      headerLogo,
      headerNavItems,
      pageTitle = 'Dashboard',
      pageSubtitle = 'Welcome back to your learning journey',
      learnerStats,
      trailMissions,
      events,
      pennyInsight,
      quickLinks,
      recommendations,
      variant = 'learner',
      layout = 'with-rail',
      onMissionClick,
      onEventClick,
      onPennyCtaClick,
      onQuickLinkClick,
      onRecommendationClick,
      className = '',
    },
    ref
  ) => {
    const hasRightRail = layout === 'with-rail';
    const isCoach = variant === 'coach';

    return (
      <div ref={ref} className={`min-h-screen bg-slate-50 ${className}`}>
        {/* Header Region */}
        <Header
          logo={headerLogo}
          navItems={headerNavItems}
          showUserArea={true}
          showUtilities={true}
        />

        {/* Main Content Area */}
        <main className="max-w-[1440px] mx-auto px-6 py-8">
          {/* Page Header */}
          <div className="mb-8">
            <h1 className="text-slate-900 mb-2">{pageTitle}</h1>
            <p className="text-slate-600">{pageSubtitle}</p>
          </div>

          {/* Two-Column Layout: Main + Right Rail */}
          <div
            className={`
              grid gap-8
              ${hasRightRail 
                ? 'grid-cols-1 lg:grid-cols-[1fr_320px]' 
                : 'grid-cols-1'
              }
            `}
          >
            {/* Main Column (Left) */}
            <div className="space-y-6">
              {/* 1. Learner Stats Panel */}
              <LearnerStatsPanel
                stats={learnerStats}
                variant="full"
                layout="grid"
                showIcons={true}
                showTitle={true}
                title={isCoach ? 'Coach Overview' : 'Your Progress'}
              />

              {/* 2. Trail Missions List */}
              <TrailMissionsList
                missions={trailMissions}
                variant="full"
                showTitle={true}
                title={isCoach ? 'Active Coaching Sessions' : 'Active Missions'}
                maxItems={5}
                onMissionClick={onMissionClick}
              />

              {/* 3. Events List */}
              <EventsList
                events={events}
                variant="full"
                showTitle={true}
                title="Upcoming Events"
                maxItems={4}
                onEventClick={onEventClick}
              />
            </div>

            {/* Right Rail */}
            {hasRightRail && (
              <aside className="space-y-6">
                {/* 1. Penny Insight Rail */}
                {pennyInsight && (
                  <PennyInsightRail
                    aiCoachingNote={pennyInsight.aiCoachingNote}
                    contextLine={pennyInsight.contextLine}
                    ctaType={pennyInsight.ctaType}
                    density={pennyInsight.density || 'full'}
                    showPennyLabel={true}
                    onCTAClick={onPennyCtaClick}
                  />
                )}

                {/* 2. Quick Links */}
                <QuickLinks
                  links={quickLinks}
                  variant="full"
                  showTitle={true}
                  onLinkClick={onQuickLinkClick}
                />

                {/* 3. Recommendations */}
                <Recommendations
                  recommendations={recommendations}
                  variant="full"
                  showTitle={true}
                  maxItems={3}
                  onRecommendationClick={onRecommendationClick}
                />
              </aside>
            )}
          </div>
        </main>
      </div>
    );
  }
);

DashboardTemplate.displayName = 'DashboardTemplate';


// ============================================================================
// SHOWCASE / DOCUMENTATION COMPONENT
// ============================================================================

export const DashboardTemplateShowcase: React.FC = () => {
  // Mock data for Learner Dashboard
  const learnerStats: LearnerStat[] = [
    { id: 'points', label: 'Total Points', value: 2450 },
    { id: 'trails', label: 'Trails Completed', value: 8 },
    { id: 'missions', label: 'Missions Completed', value: 24 },
    { id: 'capstones', label: 'Capstones Done', value: 3 },
    { id: 'badges', label: 'Badges Earned', value: 12 },
  ];

  const trailMissions: TrailMission[] = [
    {
      id: '1',
      title: 'Complete Data Model Fundamentals',
      trailName: 'Salesforce Admin Trail',
      status: 'in-progress',
      progress: 65,
      dueDate: '2025-12-01',
      estimatedTime: '2h',
    },
    {
      id: '2',
      title: 'Build Your First Flow',
      trailName: 'Automation Specialist',
      status: 'in-progress',
      progress: 30,
      dueDate: '2025-12-05',
      estimatedTime: '3h',
    },
  ];

  const events: Event[] = [
    {
      id: '1',
      title: 'Intro to Salesforce Admin',
      type: 'workshop',
      date: '2025-11-28',
      time: '2:00 PM EST',
      isVirtual: true,
      attendees: 24,
      maxAttendees: 30,
      registered: true,
    },
    {
      id: '2',
      title: 'Career Coaching Session',
      type: 'coaching',
      date: '2025-11-30',
      time: '10:00 AM EST',
      isVirtual: true,
      registered: false,
    },
  ];

  const pennyInsight = {
    aiCoachingNote: 'You\'re making great progress on your Admin Trail! Consider taking a quick quiz to reinforce what you\'ve learned.',
    contextLine: 'Based on your recent activity in Data Model Fundamentals',
    ctaType: 'quick-quiz' as InsightCTAType,
    density: 'full' as InsightDensity,
  };

  const quickLinks: QuickLink[] = [
    { id: 'learning', label: 'Learning Center', href: '/learning' },
    { id: 'community', label: 'Community Forum', href: '/community', badge: '3' },
    { id: 'achievements', label: 'My Achievements', href: '/achievements' },
    { id: 'events', label: 'All Events', href: '/events' },
    { id: 'support', label: 'Get Help', href: '/support' },
  ];

  const recommendations: Recommendation[] = [
    {
      id: '1',
      title: 'Salesforce Admin Trail',
      type: 'trail',
      description: 'Build foundational admin skills',
      reason: 'Based on your current progress',
      priority: 'high',
    },
    {
      id: '2',
      title: 'Data Modeling',
      type: 'skill',
      description: 'Master object relationships',
      reason: 'Complements your current trail',
      priority: 'medium',
    },
  ];

  const headerNavItems: HeaderNavItem[] = [
    { id: 'dashboard', label: 'Dashboard', href: '/dashboard', active: true },
    { id: 'learning', label: 'Learning', href: '/learning' },
    { id: 'community', label: 'Community', href: '/community' },
    { id: 'portfolio', label: 'Portfolio', href: '/portfolio' },
  ];

  // Mock data for Coach Dashboard
  const coachStats: LearnerStat[] = [
    { id: 'learners', label: 'Active Learners', value: 32 },
    { id: 'sessions', label: 'Sessions This Month', value: 18 },
    { id: 'completion', label: 'Avg. Completion Rate', value: 87 },
    { id: 'feedback', label: 'Avg. Rating', value: 4.8 },
  ];

  const coachMissions: TrailMission[] = [
    {
      id: '1',
      title: 'Review Sarah\'s Portfolio Project',
      trailName: 'Capstone Review',
      status: 'in-progress',
      progress: 40,
      dueDate: '2025-11-29',
      estimatedTime: '1h',
    },
  ];

  const coachPennyInsight = {
    aiCoachingNote: 'Three learners need feedback on their recent assignments. Consider scheduling follow-up sessions.',
    contextLine: 'Based on recent submissions and progress tracking',
    ctaType: 'view-suggestions' as InsightCTAType,
  };

  return (
    <div className="space-y-16 pb-16">
      {/* Section Header */}
      <div className="space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-100 text-emerald-800 rounded-full text-sm">
          <span>TTA-112</span>
        </div>
        <h2 className="text-slate-900">Template 2: Dashboard with Right Rail</h2>
        <p className="text-slate-600 max-w-3xl">
          A comprehensive dashboard template featuring Header, Main Column (LearnerStatsPanel,
          TrailMissionsList, EventsList), and Right Rail (PennyInsightRail, QuickLinks,
          Recommendations). Supports Learner and Coach variants with responsive behavior.
        </p>
      </div>

      {/* Learner Dashboard - Light Theme */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-900">Learner Dashboard</h3>
            <p className="text-sm text-slate-600 mt-1">
              Default view with all components populated
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Light Theme
          </span>
        </div>
        <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
          <DashboardTemplate
            variant="learner"
            layout="with-rail"
            headerNavItems={headerNavItems}
            pageTitle="Learner Dashboard"
            pageSubtitle="Welcome back, Alex! You're making great progress."
            learnerStats={learnerStats}
            trailMissions={trailMissions}
            events={events}
            pennyInsight={pennyInsight}
            quickLinks={quickLinks}
            recommendations={recommendations}
            onMissionClick={(id) => console.log('Mission clicked:', id)}
            onEventClick={(id) => console.log('Event clicked:', id)}
            onPennyCtaClick={() => console.log('Penny CTA clicked')}
            onQuickLinkClick={(id) => console.log('Quick link clicked:', id)}
            onRecommendationClick={(id) => console.log('Recommendation clicked:', id)}
          />
        </div>
      </div>

      {/* Coach Dashboard - Light Theme */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-900">Coach Dashboard</h3>
            <p className="text-sm text-slate-600 mt-1">
              Variant for coaches with adjusted content and terminology
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            Light Theme
          </span>
        </div>
        <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
          <DashboardTemplate
            variant="coach"
            layout="with-rail"
            headerNavItems={headerNavItems}
            pageTitle="Coach Dashboard"
            pageSubtitle="Manage your learners and track their progress"
            learnerStats={coachStats}
            trailMissions={coachMissions}
            events={events}
            pennyInsight={coachPennyInsight}
            quickLinks={quickLinks}
            recommendations={recommendations}
          />
        </div>
      </div>

      {/* Full Width Layout (No Right Rail) */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-900">Full Width Layout</h3>
            <p className="text-sm text-slate-600 mt-1">
              Dashboard without right rail for focused workflows
            </p>
          </div>
          <span className="text-xs text-slate-500 bg-slate-100 px-3 py-1 rounded-full">
            No Right Rail
          </span>
        </div>
        <div className="border-2 border-slate-200 rounded-xl overflow-hidden">
          <DashboardTemplate
            variant="learner"
            layout="full-width"
            headerNavItems={headerNavItems}
            pageTitle="Dashboard - Full Width"
            pageSubtitle="Maximized space for content focus"
            learnerStats={learnerStats}
            trailMissions={trailMissions}
            events={events}
          />
        </div>
      </div>

      {/* Dark Theme Example */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-slate-900">Dark Theme Support</h3>
            <p className="text-sm text-slate-600 mt-1">
              All components support dark mode styling
            </p>
          </div>
          <span className="text-xs text-white bg-slate-800 px-3 py-1 rounded-full">
            Dark Theme
          </span>
        </div>
        <div className="border-2 border-slate-800 rounded-xl overflow-hidden dark">
          <DashboardTemplate
            variant="learner"
            layout="with-rail"
            headerNavItems={headerNavItems}
            pageTitle="Learner Dashboard"
            pageSubtitle="Welcome back, Alex! You're making great progress."
            learnerStats={learnerStats}
            trailMissions={trailMissions}
            events={events}
            pennyInsight={pennyInsight}
            quickLinks={quickLinks}
            recommendations={recommendations}
          />
        </div>
      </div>

      {/* Component Architecture Documentation */}
      <div className="space-y-6 bg-slate-50 rounded-xl p-8 border border-slate-200">
        <h3 className="text-slate-900">Template Architecture</h3>
        
        <div className="grid md:grid-cols-3 gap-6">
          {/* Header Region */}
          <div className="space-y-3">
            <h4 className="text-slate-900">1. Header Region</h4>
            <div className="text-sm text-slate-600 space-y-2">
              <p>• TTDS Header component</p>
              <p>• Logo + Navigation</p>
              <p>• User area + Utilities</p>
              <p>• Mobile responsive</p>
            </div>
          </div>

          {/* Main Column */}
          <div className="space-y-3">
            <h4 className="text-slate-900">2. Main Column</h4>
            <div className="text-sm text-slate-600 space-y-2">
              <p>• LearnerStatsPanel</p>
              <p>• TrailMissionsList</p>
              <p>• EventsList</p>
              <p>• Flexible width</p>
            </div>
          </div>

          {/* Right Rail */}
          <div className="space-y-3">
            <h4 className="text-slate-900">3. Right Rail</h4>
            <div className="text-sm text-slate-600 space-y-2">
              <p>• PennyInsightRail</p>
              <p>• QuickLinks</p>
              <p>• Recommendations</p>
              <p>• Fixed 320px width</p>
            </div>
          </div>
        </div>

        {/* Responsive Behavior */}
        <div className="space-y-3 pt-6 border-t border-slate-300">
          <h4 className="text-slate-900">Responsive Behavior</h4>
          <div className="grid md:grid-cols-3 gap-4 text-sm text-slate-600">
            <div>
              <p className="text-slate-900 mb-1">Desktop (lg+)</p>
              <p>Two columns side-by-side</p>
              <p>Right rail 320px fixed width</p>
            </div>
            <div>
              <p className="text-slate-900 mb-1">Tablet (md-lg)</p>
              <p>Right rail moves below main</p>
              <p>Stacked layout</p>
            </div>
            <div>
              <p className="text-slate-900 mb-1">Mobile (sm)</p>
              <p>Single column</p>
              <p>All components stacked</p>
            </div>
          </div>
        </div>

        {/* TTDS Tokens Used */}
        <div className="space-y-3 pt-6 border-t border-slate-300">
          <h4 className="text-slate-900">TTDS Tokens Used</h4>
          <div className="grid md:grid-cols-2 gap-4 text-sm text-slate-600">
            <div>
              <p className="text-slate-900 mb-2">Spacing</p>
              <p>• Page padding: 24px (px-6)</p>
              <p>• Section gaps: 32px (gap-8)</p>
              <p>• Component gaps: 24px (space-y-6)</p>
            </div>
            <div>
              <p className="text-slate-900 mb-2">Colors</p>
              <p>• Background: slate-50</p>
              <p>• Surface: white</p>
              <p>• Accent: emerald-600</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
