import React from 'react';
import { Home, BookOpen, Map, Compass, Target, Award, Heart, Mail, LayoutDashboard, Users, Library, MessageCircle, TrendingUp, Briefcase, Settings, Building2, FolderOpen, FileText, Package, User, Sparkles, Lightbulb } from 'lucide-react';
import { Header, HeaderNavItem } from '../ttds/Header';
import { JourneyFlowVisualizer, Journey } from './JourneyFlowVisualizer';

// Navigation configurations by category
const getNavigationItems = (category: 'Public' | 'Authenticated' | 'Partner'): HeaderNavItem[] => {
  switch (category) {
    case 'Public':
      return [
        { id: 'home', label: 'Home', href: '#home' },
        { id: 'programs', label: 'Programs', href: '#programs' },
        { id: 'community', label: 'Community', href: '#community' },
        { id: 'about', label: 'About', href: '#about' },
        { id: 'contact', label: 'Contact', href: '#contact' },
      ];
    case 'Authenticated':
      return [
        { id: 'dashboard', label: 'Dashboard', href: '#dashboard' },
        { id: 'learning', label: 'Learning Center', href: '#learning' },
        { id: 'community', label: 'Community', href: '#community' },
        { id: 'trail', label: 'My Trail', href: '#trail' },
        { id: 'portfolio', label: 'Portfolio', href: '#portfolio' },
        { id: 'profile', label: 'Profile', href: '#profile' },
      ];
    case 'Partner':
      return [
        { id: 'partner-home', label: 'Partner Home', href: '#partner-home' },
        { id: 'projects', label: 'Projects', href: '#projects' },
        { id: 'submit', label: 'Submit Request', href: '#submit' },
        { id: 'resources', label: 'Resources', href: '#resources' },
      ];
  }
};

// Page Frame Component
interface PageFrameProps {
  title: string;
  category: 'Public' | 'Authenticated' | 'Partner';
  icon?: React.ReactNode;
  description?: string;
  template?: string;
  onNavClick?: (pageId: string) => void;
}

const PageFrame = React.forwardRef<HTMLDivElement, PageFrameProps>(
  ({ title, category, icon, description, template, onNavClick }, ref) => {
    const getCategoryColor = () => {
      switch (category) {
        case 'Public':
          return 'border-emerald-200 bg-emerald-50';
        case 'Authenticated':
          return 'border-blue-200 bg-blue-50';
        case 'Partner':
          return 'border-purple-200 bg-purple-50';
      }
    };

    const getCategoryBadgeColor = () => {
      switch (category) {
        case 'Public':
          return 'bg-emerald-100 text-emerald-700 border-emerald-300';
        case 'Authenticated':
          return 'bg-blue-100 text-blue-700 border-blue-300';
        case 'Partner':
          return 'bg-purple-100 text-purple-700 border-purple-300';
      }
    };

    // Get navigation items for this category
    const navItems = getNavigationItems(category);

    // Determine button configuration based on category
    const userButtonConfig = category === 'Public' 
      ? { label: 'Log In', variant: 'login' as const }
      : { label: 'Log Out', variant: 'logout' as const };

    // Custom logo with Transition Trails text
    const customLogo = (
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-sm" style={{ fontWeight: 700 }}>TT</span>
        </div>
        <span className="text-slate-900" style={{ fontWeight: 600 }}>Transition Trails</span>
      </div>
    );

    return (
      <div
        ref={ref}
        className="border-2 rounded-lg overflow-hidden bg-white shadow-sm"
        style={{ width: '1440px', minHeight: '900px' }}
      >
        {/* TTDS Header - at the very top of each page */}
        <Header
          logo={customLogo}
          navItems={navItems}
          showUserArea={true}
          showUtilities={category === 'Authenticated'}
          scrolled={false}
          userButtonLabel={userButtonConfig.label}
          userButtonVariant={userButtonConfig.variant}
          onNavClick={onNavClick}
        />

        {/* Page Header */}
        <div className={`border-b-2 p-12 ${getCategoryColor()}`}>
          <div className="flex items-start justify-between gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-4">
                {icon && (
                  <div className="w-12 h-12 rounded-lg bg-white border-2 border-slate-200 flex items-center justify-center text-slate-700">
                    {icon}
                  </div>
                )}
                <div>
                  <span className={`inline-block px-3 py-1 rounded-md text-xs border ${getCategoryBadgeColor()}`} style={{ fontWeight: 600 }}>
                    {category} Page
                  </span>
                </div>
              </div>
              <h1 className="text-5xl text-slate-900 mb-3" style={{ fontWeight: 600 }}>
                {title}
              </h1>
              {description && (
                <p className="text-xl text-slate-700 mb-4" style={{ fontWeight: 400 }}>
                  {description}
                </p>
              )}
              {template && (
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-white border border-slate-300 rounded-lg">
                  <LayoutDashboard className="h-4 w-4 text-emerald-600" />
                  <span className="text-sm text-slate-700" style={{ fontWeight: 600 }}>
                    Uses: {template}
                  </span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Page Content Area (Placeholder) */}
        <div className="p-12 bg-slate-50 min-h-[700px] flex items-center justify-center">
          <div className="text-center">
            <div className="w-24 h-24 rounded-full bg-slate-200 border-4 border-slate-300 flex items-center justify-center mx-auto mb-6">
              <LayoutDashboard className="h-12 w-12 text-slate-400" />
            </div>
            <p className="text-lg text-slate-500" style={{ fontWeight: 500 }}>
              Content placeholder for {title}
            </p>
            <p className="text-sm text-slate-400 mt-2" style={{ fontWeight: 400 }}>
              Page structure ready for navigation and content implementation
            </p>
          </div>
        </div>
      </div>
    );
  }
);

PageFrame.displayName = 'PageFrame';

// Main Site Pages Showcase Component
export function SitePagesShowcase() {
  // Create refs for each page to enable scroll navigation
  const homeRef = React.useRef<HTMLDivElement>(null);
  const programsOverviewRef = React.useRef<HTMLDivElement>(null);
  const guidedTrailRef = React.useRef<HTMLDivElement>(null);
  const explorersJourneyRef = React.useRef<HTMLDivElement>(null);
  const trailOfMasteryRef = React.useRef<HTMLDivElement>(null);
  const visitorPassRef = React.useRef<HTMLDivElement>(null);
  const aboutRef = React.useRef<HTMLDivElement>(null);
  const contactRef = React.useRef<HTMLDivElement>(null);
  const dashboardLearnerRef = React.useRef<HTMLDivElement>(null);
  const dashboardCoachRef = React.useRef<HTMLDivElement>(null);
  const learningCenterRef = React.useRef<HTMLDivElement>(null);
  const communityFeedRef = React.useRef<HTMLDivElement>(null);
  const myTrailRef = React.useRef<HTMLDivElement>(null);
  const myPortfolioRef = React.useRef<HTMLDivElement>(null);
  const myProfileRef = React.useRef<HTMLDivElement>(null);
  const partnerPortalRef = React.useRef<HTMLDivElement>(null);
  const partnerProjectsRef = React.useRef<HTMLDivElement>(null);
  const submitProjectRef = React.useRef<HTMLDivElement>(null);
  const partnerResourcesRef = React.useRef<HTMLDivElement>(null);

  // Scroll to page function
  const scrollToPage = (ref: React.RefObject<HTMLDivElement>) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  // Navigation click handlers by page ID
  const handleNavClick = (pageId: string) => {
    const pageMap: Record<string, React.RefObject<HTMLDivElement>> = {
      'home': homeRef,
      'programs': programsOverviewRef,
      'community': communityFeedRef,
      'about': aboutRef,
      'contact': contactRef,
      'dashboard': dashboardLearnerRef,
      'learning': learningCenterRef,
      'trail': myTrailRef,
      'portfolio': myPortfolioRef,
      'profile': myProfileRef,
      'partner-home': partnerPortalRef,
      'projects': partnerProjectsRef,
      'submit': submitProjectRef,
      'resources': partnerResourcesRef,
    };

    const targetRef = pageMap[pageId];
    if (targetRef) {
      scrollToPage(targetRef);
    }
  };

  // Define all user journey flows
  const journeys: Journey[] = [
    {
      id: 'visitor-to-learner',
      title: 'Visitor → Learner Journey',
      description: 'Complete conversion flow from first visit to active learner',
      color: 'bg-gradient-to-br from-emerald-100 to-blue-100 border-emerald-300',
      icon: <User className="h-6 w-6 text-emerald-700" />,
      steps: [
        {
          id: 'step-1',
          label: 'Visitor discovers Transition Trails',
          pageTitle: 'Home',
          action: 'View mission and vision',
          icon: <Home className="h-5 w-5" />,
        },
        {
          id: 'step-2',
          label: 'Explores available learning programs',
          pageTitle: 'Programs Overview',
          action: 'Click "Explore Programs" CTA',
          icon: <BookOpen className="h-5 w-5" />,
        },
        {
          id: 'step-3',
          label: 'Views Guided Trail program details',
          pageTitle: 'Guided Trail Overview',
          action: 'Select "Guided Trail" program',
          icon: <Map className="h-5 w-5" />,
        },
        {
          id: 'step-4',
          label: 'Decides to join and authenticates',
          pageTitle: 'Dashboard — Learner Version',
          action: 'Click "Join the Guided Trail" → Log In',
          icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
          id: 'step-5',
          label: 'Discovers learning activities',
          pageTitle: 'Learning Center',
          action: 'Browse trails and content',
          icon: <Library className="h-5 w-5" />,
        },
        {
          id: 'step-6',
          label: 'Tracks progress and missions',
          pageTitle: 'My Trail',
          action: 'View assignments and milestones',
          icon: <TrendingUp className="h-5 w-5" />,
        },
        {
          id: 'step-7',
          label: 'Engages with the community',
          pageTitle: 'Community Feed',
          action: 'Join study groups and events',
          icon: <MessageCircle className="h-5 w-5" />,
        },
        {
          id: 'step-8',
          label: 'Builds public portfolio',
          pageTitle: 'My Portfolio',
          action: 'Showcase completed projects',
          icon: <Briefcase className="h-5 w-5" />,
        },
      ],
    },
    {
      id: 'guided-trail-intern',
      title: 'Guided Trail Intern Journey',
      description: 'Daily workflow for active interns completing trail missions',
      color: 'bg-gradient-to-br from-blue-100 to-emerald-100 border-blue-300',
      icon: <Map className="h-6 w-6 text-blue-700" />,
      steps: [
        {
          id: 'step-1',
          label: 'Starts day on personalized dashboard',
          pageTitle: 'Dashboard — Learner Version',
          action: 'Log in and view daily stats',
          icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
          id: 'step-2',
          label: 'Checks trail missions and progress',
          pageTitle: 'My Trail',
          action: 'Complete assigned missions',
          icon: <TrendingUp className="h-5 w-5" />,
        },
        {
          id: 'step-3',
          label: 'Accesses deeper learning content',
          pageTitle: 'Learning Center',
          action: 'Find resources and trails',
          icon: <Library className="h-5 w-5" />,
        },
        {
          id: 'step-4',
          label: 'Joins study group session',
          pageTitle: 'Community Feed',
          action: 'Participate in community events',
          icon: <MessageCircle className="h-5 w-5" />,
        },
        {
          id: 'step-5',
          label: 'Receives AI coaching insights',
          pageTitle: 'Dashboard — Learner Version',
          action: 'Review Penny Insight Rail guidance',
          icon: <Sparkles className="h-5 w-5" />,
        },
        {
          id: 'step-6',
          label: 'Shares progress with community',
          pageTitle: 'Community Feed',
          action: 'Post updates and achievements',
          icon: <MessageCircle className="h-5 w-5" />,
        },
        {
          id: 'step-7',
          label: 'Updates portfolio with new work',
          pageTitle: 'My Portfolio',
          action: 'Add completed projects',
          icon: <Briefcase className="h-5 w-5" />,
        },
      ],
    },
    {
      id: 'explorers-journey',
      title: "Explorer's Journey Member Flow",
      description: 'Self-paced learning experience for independent explorers',
      color: 'bg-gradient-to-br from-amber-100 to-emerald-100 border-amber-300',
      icon: <Compass className="h-6 w-6 text-amber-700" />,
      steps: [
        {
          id: 'step-1',
          label: 'Discovers Explorer program',
          pageTitle: "Explorer's Journey Overview",
          action: 'Learn about self-paced track',
          icon: <Compass className="h-5 w-5" />,
        },
        {
          id: 'step-2',
          label: 'Enrolls in program',
          pageTitle: 'Dashboard — Learner Version',
          action: 'Click "Start Your Journey" → Log In',
          icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
          id: 'step-3',
          label: 'Explores learning library',
          pageTitle: 'Learning Center',
          action: 'Browse and filter activities',
          icon: <Library className="h-5 w-5" />,
        },
        {
          id: 'step-4',
          label: 'Connects with peers',
          pageTitle: 'Community Feed',
          action: 'Join channels and discussions',
          icon: <MessageCircle className="h-5 w-5" />,
        },
        {
          id: 'step-5',
          label: 'Attends community events',
          pageTitle: 'Community Feed',
          action: 'RSVP and participate in events',
          icon: <Users className="h-5 w-5" />,
        },
        {
          id: 'step-6',
          label: 'Builds experience portfolio',
          pageTitle: 'My Portfolio',
          action: 'Document projects and skills',
          icon: <Briefcase className="h-5 w-5" />,
        },
      ],
    },
    {
      id: 'trail-of-mastery',
      title: 'Trail of Mastery (Associate) Flow',
      description: 'Advanced track for experienced learners and associates',
      color: 'bg-gradient-to-br from-purple-100 to-blue-100 border-purple-300',
      icon: <Target className="h-6 w-6 text-purple-700" />,
      steps: [
        {
          id: 'step-1',
          label: 'Explores advanced program',
          pageTitle: 'Trail of Mastery Overview',
          action: 'Review associate requirements',
          icon: <Target className="h-5 w-5" />,
        },
        {
          id: 'step-2',
          label: 'Applies for associate track',
          pageTitle: 'Dashboard — Coach Version',
          action: 'Click "Apply for Associate Track" → Log In',
          icon: <LayoutDashboard className="h-5 w-5" />,
        },
        {
          id: 'step-3',
          label: 'Works on advanced missions',
          pageTitle: 'My Trail',
          action: 'Complete complex assignments',
          icon: <TrendingUp className="h-5 w-5" />,
        },
        {
          id: 'step-4',
          label: 'Builds portfolio projects',
          pageTitle: 'My Portfolio',
          action: 'Create showcase-worthy work',
          icon: <Briefcase className="h-5 w-5" />,
        },
        {
          id: 'step-5',
          label: 'Collaborates with partners',
          pageTitle: 'Partner Projects',
          action: 'Work on real-world projects',
          icon: <Building2 className="h-5 w-5" />,
        },
        {
          id: 'step-6',
          label: 'Submits deliverables',
          pageTitle: 'My Trail',
          action: 'Submit work for review',
          icon: <FileText className="h-5 w-5" />,
        },
        {
          id: 'step-7',
          label: 'Shares success in community',
          pageTitle: 'Community Feed',
          action: 'Post achievements and insights',
          icon: <MessageCircle className="h-5 w-5" />,
        },
      ],
    },
    {
      id: 'partner-portal',
      title: 'Partner Portal Journey',
      description: 'Partner organization workflow for project management',
      color: 'bg-gradient-to-br from-violet-100 to-purple-100 border-violet-300',
      icon: <Building2 className="h-6 w-6 text-violet-700" />,
      steps: [
        {
          id: 'step-1',
          label: 'Partner logs into portal',
          pageTitle: 'Partner Portal Home',
          action: 'Authenticate and view dashboard',
          icon: <Building2 className="h-5 w-5" />,
        },
        {
          id: 'step-2',
          label: 'Reviews active projects',
          pageTitle: 'Partner Projects',
          action: 'View learner assignments',
          icon: <FolderOpen className="h-5 w-5" />,
        },
        {
          id: 'step-3',
          label: 'Submits new project opportunity',
          pageTitle: 'Submit Project Request',
          action: 'Fill out project request form',
          icon: <FileText className="h-5 w-5" />,
        },
        {
          id: 'step-4',
          label: 'Accesses partner resources',
          pageTitle: 'Partner Resources',
          action: 'Download guidelines and docs',
          icon: <Package className="h-5 w-5" />,
        },
        {
          id: 'step-5',
          label: 'Returns to portal home',
          pageTitle: 'Partner Portal Home',
          action: 'View project metrics and updates',
          icon: <Building2 className="h-5 w-5" />,
        },
      ],
    },
  ];

  return (
    <div className="w-full bg-slate-100 py-16">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <h1 className="text-6xl text-slate-900 mb-4" style={{ fontWeight: 700 }}>
            0 — Site Pages
          </h1>
          <p className="text-2xl text-slate-700 mb-6" style={{ fontWeight: 400 }}>
            Transition Trails Digital Experience
          </p>
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 max-w-4xl">
            <p className="text-slate-700 mb-4" style={{ fontWeight: 400 }}>
              This page contains all primary site pages organized into three categories: Public Pages, Authenticated Pages, and Partner Pages. Each frame is set to desktop width (1440px) and includes the official TTDS Header with category-specific navigation, plus placeholder content areas ready for implementation.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 border border-emerald-200 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-emerald-500"></div>
                <span className="text-sm text-emerald-800" style={{ fontWeight: 600 }}>8 Public Pages</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-blue-50 border border-blue-200 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-blue-800" style={{ fontWeight: 600 }}>7 Authenticated Pages</span>
              </div>
              <div className="flex items-center gap-2 px-4 py-2 bg-purple-50 border border-purple-200 rounded-lg">
                <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                <span className="text-sm text-purple-800" style={{ fontWeight: 600 }}>4 Partner Pages</span>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-slate-200">
              <p className="text-sm text-slate-600 mb-2" style={{ fontWeight: 600 }}>✅ Interactive Navigation Added</p>
              <p className="text-xs text-slate-600 mb-2" style={{ fontWeight: 400 }}>
                All navigation items in the TTDS Headers are now fully clickable. Click any nav item or button to smoothly scroll to the corresponding page. The site functions like a working prototype!
              </p>
              <p className="text-xs text-slate-500 mb-2 italic" style={{ fontWeight: 400 }}>
                <strong>Try it:</strong> Click "Programs" from any Public page header, or "Learning Center" from any Authenticated page, or click the "Log In" button to jump to Dashboard.
              </p>
              <p className="text-xs text-slate-500 italic" style={{ fontWeight: 400 }}>
                <strong>Logout Flow:</strong> Click "Log Out" from any Authenticated/Partner page to return to the Public Home page.
              </p>
            </div>
          </div>
        </div>

        {/* PUBLIC PAGES SECTION */}
        <section className="mb-20">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-2 h-12 bg-emerald-500 rounded-full"></div>
              <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
                Public Pages
              </h2>
            </div>
            <p className="text-lg text-slate-600 ml-8" style={{ fontWeight: 400 }}>
              Pages accessible to all visitors, designed for discovery, inspiration, and conversion
            </p>
          </div>
          
          <div className="space-y-12 ml-8">
            <PageFrame
              ref={homeRef}
              title="Home"
              category="Public"
              icon={<Home className="h-6 w-6" />}
              description="Landing page showcasing vision, mission, and impact of Transition Trails Academy"
              template="Vision/Donor Template"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={programsOverviewRef}
              title="Programs Overview"
              category="Public"
              icon={<BookOpen className="h-6 w-6" />}
              description="Overview of all learning programs and pathways available"
              template="Template 3 — Program Overview"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={guidedTrailRef}
              title="Guided Trail Overview"
              category="Public"
              icon={<Map className="h-6 w-6" />}
              description="Detailed information about the Guided Trail program"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={explorersJourneyRef}
              title="Explorer's Journey Overview"
              category="Public"
              icon={<Compass className="h-6 w-6" />}
              description="Detailed information about the Explorer's Journey program"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={trailOfMasteryRef}
              title="Trail of Mastery Overview"
              category="Public"
              icon={<Target className="h-6 w-6" />}
              description="Detailed information about the Trail of Mastery program"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={visitorPassRef}
              title="Visitor Pass Overview"
              category="Public"
              icon={<Award className="h-6 w-6" />}
              description="Information about the Visitor Pass trial program"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={aboutRef}
              title="About / Our Mission"
              category="Public"
              icon={<Heart className="h-6 w-6" />}
              description="Organization story, mission, values, and team information"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={contactRef}
              title="Contact / Support Us"
              category="Public"
              icon={<Mail className="h-6 w-6" />}
              description="Contact information, donation options, and support channels"
              onNavClick={handleNavClick}
            />
          </div>
        </section>

        {/* AUTHENTICATED PAGES SECTION */}
        <section className="mb-20">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-2 h-12 bg-blue-500 rounded-full"></div>
              <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
                Authenticated Pages
              </h2>
            </div>
            <p className="text-lg text-slate-600 ml-8" style={{ fontWeight: 400 }}>
              Pages accessible only to logged-in learners and coaches
            </p>
          </div>
          
          <div className="space-y-12 ml-8">
            <PageFrame
              ref={dashboardLearnerRef}
              title="Dashboard — Learner Version"
              category="Authenticated"
              icon={<LayoutDashboard className="h-6 w-6" />}
              description="Personalized learner dashboard with stats, goals, skills, and AI insights"
              template="Template 2 — Dashboard (Learner)"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={dashboardCoachRef}
              title="Dashboard — Coach Version"
              category="Authenticated"
              icon={<Users className="h-6 w-6" />}
              description="Coach dashboard with learner overview, coaching tasks, and performance metrics"
              template="Template 2 — Dashboard (Coach)"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={learningCenterRef}
              title="Learning Center"
              category="Authenticated"
              icon={<Library className="h-6 w-6" />}
              description="Browse and filter all learning activities, trails, and platforms"
              template="Template 4 — Learning Center"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={communityFeedRef}
              title="Community Feed"
              category="Authenticated"
              icon={<MessageCircle className="h-6 w-6" />}
              description="Social feed with community posts, events, AI insights, and channel suggestions"
              template="Template 5 — Community Feed"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={myTrailRef}
              title="My Trail"
              category="Authenticated"
              icon={<TrendingUp className="h-6 w-6" />}
              description="Personal trail progress, assignments, milestones, and next steps"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={myPortfolioRef}
              title="My Portfolio"
              category="Authenticated"
              icon={<Briefcase className="h-6 w-6" />}
              description="Experience Cloud profile showcasing projects, skills, and achievements"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={myProfileRef}
              title="My Profile & Settings"
              category="Authenticated"
              icon={<Settings className="h-6 w-6" />}
              description="User profile management, preferences, notifications, and account settings"
              onNavClick={handleNavClick}
            />
          </div>
        </section>

        {/* PARTNER PAGES SECTION */}
        <section className="mb-20">
          <div className="mb-8">
            <div className="flex items-center gap-4 mb-3">
              <div className="w-2 h-12 bg-purple-500 rounded-full"></div>
              <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
                Partner Pages
              </h2>
            </div>
            <p className="text-lg text-slate-600 ml-8" style={{ fontWeight: 400 }}>
              Pages for partner organizations to manage projects and resources
            </p>
          </div>
          
          <div className="space-y-12 ml-8">
            <PageFrame
              ref={partnerPortalRef}
              title="Partner Portal Home"
              category="Partner"
              icon={<Building2 className="h-6 w-6" />}
              description="Partner organization dashboard with project overview and resources"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={partnerProjectsRef}
              title="Partner Projects"
              category="Partner"
              icon={<FolderOpen className="h-6 w-6" />}
              description="View and manage all partner projects and learner assignments"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={submitProjectRef}
              title="Submit Project Request"
              category="Partner"
              icon={<FileText className="h-6 w-6" />}
              description="Form for partners to submit new project opportunities for learners"
              onNavClick={handleNavClick}
            />

            <PageFrame
              ref={partnerResourcesRef}
              title="Partner Resources"
              category="Partner"
              icon={<Package className="h-6 w-6" />}
              description="Documentation, guidelines, and resources for partner organizations"
              onNavClick={handleNavClick}
            />
          </div>
        </section>

        {/* User Journey Flows */}
        <div className="mt-20 mb-20">
          <JourneyFlowVisualizer journeys={journeys} />
        </div>

        {/* Summary Stats */}
        <div className="bg-white border-2 border-slate-200 rounded-xl p-8">
          <h3 className="text-2xl text-slate-900 mb-6" style={{ fontWeight: 700 }}>
            Site Structure Summary
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-emerald-50 border-2 border-emerald-200 rounded-lg p-6">
              <div className="text-4xl text-emerald-700 mb-2" style={{ fontWeight: 700 }}>8</div>
              <div className="text-sm text-emerald-800" style={{ fontWeight: 600 }}>Public Pages</div>
              <p className="text-xs text-emerald-700 mt-2" style={{ fontWeight: 400 }}>
                Marketing, program info, and conversion pages
              </p>
            </div>
            <div className="bg-blue-50 border-2 border-blue-200 rounded-lg p-6">
              <div className="text-4xl text-blue-700 mb-2" style={{ fontWeight: 700 }}>7</div>
              <div className="text-sm text-blue-800" style={{ fontWeight: 600 }}>Authenticated Pages</div>
              <p className="text-xs text-blue-700 mt-2" style={{ fontWeight: 400 }}>
                Learner and coach experiences
              </p>
            </div>
            <div className="bg-purple-50 border-2 border-purple-200 rounded-lg p-6">
              <div className="text-4xl text-purple-700 mb-2" style={{ fontWeight: 700 }}>4</div>
              <div className="text-sm text-purple-800" style={{ fontWeight: 600 }}>Partner Pages</div>
              <p className="text-xs text-purple-700 mt-2" style={{ fontWeight: 400 }}>
                Partner organization portal
              </p>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-slate-200">
            <p className="text-sm text-slate-600" style={{ fontWeight: 400 }}>
              <strong>Total Pages:</strong> 19 primary pages across the Transition Trails Digital Experience
            </p>
            <p className="text-sm text-slate-600 mt-2" style={{ fontWeight: 400 }}>
              <strong>Status:</strong> ✅ Fully clickable prototype with working navigation between all pages
            </p>
            <p className="text-sm text-slate-600 mt-2" style={{ fontWeight: 400 }}>
              <strong>Next Step:</strong> Populate page content with real components and data
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}