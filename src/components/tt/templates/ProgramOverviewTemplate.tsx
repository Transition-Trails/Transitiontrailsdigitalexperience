import React from 'react';
import { Button } from '../../ttds/Button';
import { TTProgramOverviewCard, TTProgramOverviewCardProps } from '../ProgramOverviewCard';
import { LucideIcon, Users, Target, Briefcase, MessageSquare, Heart, TrendingUp } from 'lucide-react';

// Template Configuration Types
export interface FeatureItem {
  icon?: LucideIcon;
  title: string;
  description: string;
}

export interface StatItem {
  value: string;
  label: string;
}

export interface TTProgramOverviewTemplateProps {
  // Hero Section
  heroHeadline: string;
  heroSubheadline: string;
  heroImageUrl?: string;
  heroStats?: StatItem[];
  
  // Program Overview Cards
  programCards: TTProgramOverviewCardProps[];
  
  // Features Grid
  features: FeatureItem[];
  
  // CTA Section
  ctaHeadline: string;
  ctaDescription?: string;
  ctaPrimaryLabel?: string;
  ctaSecondaryLabel?: string;
  onCtaPrimaryClick?: () => void;
  onCtaSecondaryClick?: () => void;
  
  // Variants
  variant?: 'default' | 'with-imagery' | 'with-stats';
  cardsLayout?: '3-column' | '4-column';
  theme?: 'light' | 'dark';
}

export const TTProgramOverviewTemplate = React.forwardRef<HTMLDivElement, TTProgramOverviewTemplateProps>(
  (
    {
      heroHeadline,
      heroSubheadline,
      heroImageUrl,
      heroStats = [],
      programCards,
      features,
      ctaHeadline,
      ctaDescription,
      ctaPrimaryLabel = 'Get Started',
      ctaSecondaryLabel = 'Learn More',
      onCtaPrimaryClick,
      onCtaSecondaryClick,
      variant = 'default',
      cardsLayout = '3-column',
      theme = 'light',
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    const showHeroImage = variant === 'with-imagery' && heroImageUrl;
    const showHeroStats = (variant === 'with-stats' || variant === 'default') && heroStats.length > 0;
    
    // Theme-specific classes
    const bgClass = isDark ? 'bg-slate-900' : 'bg-slate-50';
    const textPrimaryClass = isDark ? 'text-slate-50' : 'text-slate-900';
    const textSecondaryClass = isDark ? 'text-slate-300' : 'text-slate-700';
    const textMutedClass = isDark ? 'text-slate-400' : 'text-slate-600';
    const cardBgClass = isDark ? 'bg-slate-800' : 'bg-white';
    const cardBorderClass = isDark ? 'border-slate-700' : 'border-slate-200';
    const heroBgClass = isDark ? 'bg-gradient-to-br from-slate-800 to-slate-900' : 'bg-gradient-to-br from-emerald-50 to-blue-50';
    const statsBgClass = isDark ? 'bg-slate-800/50' : 'bg-white/70';
    const statsBorderClass = isDark ? 'border-slate-700/50' : 'border-slate-200/70';
    const ctaBgClass = isDark ? 'bg-slate-800' : 'bg-emerald-50';

    // Grid columns based on layout
    const gridCols = cardsLayout === '4-column' 
      ? 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4' 
      : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3';

    return (
      <div ref={ref} className={`w-full ${bgClass} ${textPrimaryClass}`}>
        {/* BIG HERO SECTION */}
        <section className={`${heroBgClass} px-6 py-16 md:px-12 md:py-24`}>
          <div className="max-w-7xl mx-auto">
            <div className={`flex flex-col ${showHeroImage ? 'lg:flex-row' : ''} gap-12 items-center`}>
              {/* Hero Text Content */}
              <div className={`flex flex-col gap-6 ${showHeroImage ? 'lg:w-1/2' : 'text-center max-w-4xl mx-auto'}`}>
                <h1 
                  className={`text-4xl md:text-5xl lg:text-6xl leading-tight ${textPrimaryClass}`}
                  style={{ fontWeight: 600 }}
                >
                  {heroHeadline}
                </h1>
                <p 
                  className={`text-lg md:text-xl ${textSecondaryClass} leading-relaxed`}
                  style={{ fontWeight: 400 }}
                >
                  {heroSubheadline}
                </p>
                
                {/* Hero Stats Row */}
                {showHeroStats && (
                  <div className="flex flex-wrap gap-6 mt-4">
                    {heroStats.map((stat, index) => (
                      <div 
                        key={index} 
                        className={`flex flex-col gap-1 px-6 py-4 rounded-lg ${statsBgClass} border ${statsBorderClass} backdrop-blur-sm`}
                      >
                        <div 
                          className={`text-3xl ${textPrimaryClass}`}
                          style={{ fontWeight: 600 }}
                        >
                          {stat.value}
                        </div>
                        <div 
                          className={`text-sm ${textMutedClass}`}
                          style={{ fontWeight: 400 }}
                        >
                          {stat.label}
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>

              {/* Hero Image (optional) */}
              {showHeroImage && (
                <div className="lg:w-1/2 w-full">
                  <img 
                    src={heroImageUrl} 
                    alt="Program hero illustration"
                    className="w-full h-auto rounded-lg shadow-lg"
                  />
                </div>
              )}
            </div>
          </div>
        </section>

        {/* PROGRAM OVERVIEW CARDS SECTION */}
        <section className="px-6 py-16 md:px-12 md:py-20">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-8">
              <div className="text-center max-w-3xl mx-auto">
                <h2 
                  className={`text-3xl md:text-4xl mb-4 ${textPrimaryClass}`}
                  style={{ fontWeight: 600 }}
                >
                  Program Paths
                </h2>
                <p 
                  className={`text-lg ${textSecondaryClass}`}
                  style={{ fontWeight: 400 }}
                >
                  Choose the path that fits your goals and experience level
                </p>
              </div>

              {/* Program Cards Grid */}
              <div className={`grid ${gridCols} gap-6`}>
                {programCards.map((cardProps, index) => (
                  <TTProgramOverviewCard
                    key={index}
                    {...cardProps}
                    className={isDark ? `${cardBgClass} ${cardBorderClass}` : ''}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* FEATURES GRID SECTION */}
        <section className={`px-6 py-16 md:px-12 md:py-20 ${isDark ? 'bg-slate-800/50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col gap-12">
              <div className="text-center max-w-3xl mx-auto">
                <h2 
                  className={`text-3xl md:text-4xl mb-4 ${textPrimaryClass}`}
                  style={{ fontWeight: 600 }}
                >
                  What's Included
                </h2>
                <p 
                  className={`text-lg ${textSecondaryClass}`}
                  style={{ fontWeight: 400 }}
                >
                  Everything you need to succeed in your journey
                </p>
              </div>

              {/* Features Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {features.map((feature, index) => {
                  const FeatureIcon = feature.icon;
                  
                  return (
                    <div 
                      key={index}
                      className={`flex flex-col gap-4 p-6 rounded-lg ${cardBgClass} border ${cardBorderClass}`}
                    >
                      {/* Feature Icon */}
                      {FeatureIcon && (
                        <div className={`w-12 h-12 rounded-lg ${isDark ? 'bg-emerald-900/30' : 'bg-emerald-100'} flex items-center justify-center`}>
                          <FeatureIcon 
                            className={`w-6 h-6 ${isDark ? 'text-emerald-400' : 'text-emerald-700'}`}
                          />
                        </div>
                      )}
                      
                      {/* Feature Title */}
                      <h3 
                        className={`text-xl ${textPrimaryClass}`}
                        style={{ fontWeight: 600 }}
                      >
                        {feature.title}
                      </h3>
                      
                      {/* Feature Description */}
                      <p 
                        className={`${textSecondaryClass} leading-relaxed`}
                        style={{ fontWeight: 400 }}
                      >
                        {feature.description}
                      </p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* CTA SECTION */}
        <section className={`${ctaBgClass} px-6 py-16 md:px-12 md:py-20`}>
          <div className="max-w-4xl mx-auto text-center">
            <div className="flex flex-col gap-8 items-center">
              <h2 
                className={`text-3xl md:text-4xl lg:text-5xl ${textPrimaryClass}`}
                style={{ fontWeight: 600 }}
              >
                {ctaHeadline}
              </h2>
              
              {ctaDescription && (
                <p 
                  className={`text-lg md:text-xl ${textSecondaryClass} max-w-2xl`}
                  style={{ fontWeight: 400 }}
                >
                  {ctaDescription}
                </p>
              )}

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-4">
                <Button
                  variant="primary"
                  size="lg"
                  onClick={onCtaPrimaryClick}
                  className="min-w-[200px]"
                  aria-label={ctaPrimaryLabel}
                >
                  {ctaPrimaryLabel}
                </Button>
                
                {ctaSecondaryLabel && (
                  <Button
                    variant="secondary"
                    size="lg"
                    onClick={onCtaSecondaryClick}
                    className="min-w-[200px]"
                    aria-label={ctaSecondaryLabel}
                  >
                    {ctaSecondaryLabel}
                  </Button>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }
);

TTProgramOverviewTemplate.displayName = 'TTProgramOverviewTemplate';

// Showcase Component
export function ProgramOverviewTemplateShowcase() {
  const [activeVariant, setActiveVariant] = React.useState<'default' | 'with-imagery' | 'with-stats'>('default');
  const [cardsLayout, setCardsLayout] = React.useState<'3-column' | '4-column'>('3-column');
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');

  // Example Program Cards
  const programCards: TTProgramOverviewCardProps[] = [
    {
      programName: 'Guided Trail – Admin',
      whoItsFor: 'For aspiring Salesforce Admins ready to build foundational skills',
      duration: '6 months',
      programType: 'intern',
      outcomes: [
        'Earn Salesforce Admin certification',
        'Complete 3 portfolio projects',
        'Join weekly mentorship sessions',
        'Access our job placement network'
      ],
      ctaLabel: 'View Details',
      onCTAClick: () => console.log('Guided Trail - Admin clicked'),
    },
    {
      programName: 'Trail of Mastery – Developer',
      whoItsFor: 'For experienced developers looking to specialize in Salesforce',
      duration: '8–12 weeks',
      programType: 'associate',
      outcomes: [
        'Master Apex and Lightning Web Components',
        'Build advanced integration solutions',
        'Prepare for Platform Developer II',
        'Work on real client projects'
      ],
      ctaLabel: 'View Details',
      onCTAClick: () => console.log('Trail of Mastery clicked'),
    },
    {
      programName: 'Explorer\'s Journey',
      whoItsFor: 'For anyone curious about Salesforce and tech careers',
      duration: 'Self-paced',
      programType: 'visitor',
      outcomes: [
        'Explore Salesforce fundamentals',
        'Try hands-on challenges',
        'Access free learning resources',
        'Connect with the community'
      ],
      ctaLabel: 'Start Exploring',
      onCTAClick: () => console.log('Explorer\'s Journey clicked'),
    },
  ];

  // Add 4th card for 4-column layout
  const fourColumnCards: TTProgramOverviewCardProps[] = [
    ...programCards,
    {
      programName: 'Community Membership',
      whoItsFor: 'For ongoing support, networking, and continuous learning',
      duration: 'Ongoing',
      programType: 'membership',
      outcomes: [
        'Monthly Trail Talks and workshops',
        'Private Slack community access',
        'Quarterly hackathons and events',
        'Lifetime learning resources'
      ],
      ctaLabel: 'Join Community',
      onCTAClick: () => console.log('Community Membership clicked'),
    },
  ];

  // Example Features
  const features: FeatureItem[] = [
    {
      icon: Users,
      title: 'Mentorship',
      description: 'Connect with experienced Salesforce professionals who guide you through your journey',
    },
    {
      icon: Target,
      title: 'Trail Missions',
      description: 'Complete real-world projects that build your portfolio and practical skills',
    },
    {
      icon: Briefcase,
      title: 'Portfolio Projects',
      description: 'Showcase your work with professionally-designed projects that impress employers',
    },
    {
      icon: MessageSquare,
      title: 'Weekly Trail Talks',
      description: 'Join live sessions covering industry trends, technical topics, and career advice',
    },
    {
      icon: Heart,
      title: 'Community Support',
      description: 'Be part of a supportive community of learners and professionals',
    },
    {
      icon: TrendingUp,
      title: 'Career Services',
      description: 'Get help with resume reviews, interview prep, and job placement support',
    },
  ];

  // Example Stats
  const heroStats: StatItem[] = [
    { value: '500+', label: 'Program Graduates' },
    { value: '92%', label: 'Job Placement Rate' },
    { value: '50+', label: 'Partner Companies' },
  ];

  // Example image URL (placeholder)
  const heroImageUrl = 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop';

  const currentCards = cardsLayout === '4-column' ? fourColumnCards : programCards;

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

          {/* Variant Selection */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Hero Variant
            </label>
            <div className="flex flex-wrap gap-3">
              {(['default', 'with-imagery', 'with-stats'] as const).map((v) => (
                <Button
                  key={v}
                  variant={activeVariant === v ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setActiveVariant(v)}
                >
                  {v === 'default' ? 'Default' : v === 'with-imagery' ? 'With Imagery' : 'With Stats'}
                </Button>
              ))}
            </div>
          </div>

          {/* Cards Layout */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Cards Layout
            </label>
            <div className="flex gap-3">
              <Button
                variant={cardsLayout === '3-column' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setCardsLayout('3-column')}
              >
                3 Column
              </Button>
              <Button
                variant={cardsLayout === '4-column' ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setCardsLayout('4-column')}
              >
                4 Column
              </Button>
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
        <TTProgramOverviewTemplate
          heroHeadline="Transform Your Career with Transition Trails Academy"
          heroSubheadline="Join our community of learners and launch your Salesforce career with hands-on training, mentorship, and real-world projects"
          heroImageUrl={activeVariant === 'with-imagery' ? heroImageUrl : undefined}
          heroStats={activeVariant === 'with-stats' || activeVariant === 'default' ? heroStats : []}
          programCards={currentCards}
          features={features}
          ctaHeadline="Ready to Start Your Journey?"
          ctaDescription="Join hundreds of successful graduates who have transformed their careers"
          ctaPrimaryLabel="Get Started Today"
          ctaSecondaryLabel="Explore Programs"
          onCtaPrimaryClick={() => console.log('Get Started clicked')}
          onCtaSecondaryClick={() => console.log('Explore Programs clicked')}
          variant={activeVariant}
          cardsLayout={cardsLayout}
          theme={theme}
        />
      </div>
    </div>
  );
}