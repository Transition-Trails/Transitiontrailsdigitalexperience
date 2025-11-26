import React from 'react';
import { ArrowRight, Heart, Users, Award, MapPin, TrendingUp, CheckCircle, Sparkles, Compass, Map, Trophy, Star } from 'lucide-react';
import { TTFeatureRoadmapSection } from '../FeatureRoadmapSection';
import { TTTrailPathCard } from '../TrailPathCard';

export interface ImpactMetric {
  value: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

export interface DonationTier {
  amount: string;
  label: string;
  description: string;
  impact?: string;
}

export interface JourneyStage {
  title: string;
  description: string;
  icon: React.ReactNode;
  status?: 'current' | 'upcoming' | 'completed';
}

export interface VisionDonorPageProps {
  // Hero Section
  heroHeading: string;
  heroSubheading: string;
  heroImage?: string;
  heroCtaLabel?: string;
  heroCtaSecondaryLabel?: string;
  onHeroCtaClick?: () => void;
  onHeroCtaSecondaryClick?: () => void;

  // Impact Metrics
  impactMetrics: ImpactMetric[];

  // Feature Roadmap Section - Uses TTFeatureRoadmapSection
  // Pass roadmap items via children or as prop

  // Donation CTA Section
  donationHeading: string;
  donationStory: string;
  donationTiers?: DonationTier[];
  onDonateClick?: () => void;

  // Journey Stages
  journeyStages?: JourneyStage[];

  // Variants
  theme?: 'light' | 'dark';
  heroVariant?: 'with-image' | 'without-image';
  roadmapVariant?: 'full' | 'compact';

  // Children (for custom roadmap content)
  children?: React.ReactNode;
}

// Helper: Get theme styles
const getThemeStyles = (theme: 'light' | 'dark') => {
  if (theme === 'dark') {
    return {
      page: 'bg-slate-900',
      hero: 'bg-gradient-to-br from-slate-800 via-indigo-900 to-slate-800',
      heroText: 'text-slate-100',
      heroSubtext: 'text-slate-300',
      section: 'bg-slate-800',
      sectionAlt: 'bg-slate-900',
      heading: 'text-slate-100',
      body: 'text-slate-300',
      bodySecondary: 'text-slate-400',
      metric: 'bg-slate-800 border-slate-700',
      metricValue: 'text-slate-100',
      metricLabel: 'text-slate-300',
      donate: 'bg-gradient-to-br from-rose-900 via-pink-900 to-rose-900',
      donateText: 'text-slate-100',
      tier: 'bg-slate-800 border-slate-700 hover:border-slate-600',
      journey: 'bg-slate-800',
      journeyCard: 'bg-slate-700 border-slate-600',
    };
  }
  return {
    page: 'bg-white',
    hero: 'bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50',
    heroText: 'text-slate-900',
    heroSubtext: 'text-slate-700',
    section: 'bg-white',
    sectionAlt: 'bg-slate-50',
    heading: 'text-slate-900',
    body: 'text-slate-700',
    bodySecondary: 'text-slate-600',
    metric: 'bg-white border-slate-200',
    metricValue: 'text-slate-900',
    metricLabel: 'text-slate-700',
    donate: 'bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50',
    donateText: 'text-slate-900',
    tier: 'bg-white border-slate-200 hover:border-slate-300',
    journey: 'bg-slate-50',
    journeyCard: 'bg-white border-slate-200',
  };
};

// Impact Metric Tile Component
interface MetricTileProps {
  metric: ImpactMetric;
  theme: 'light' | 'dark';
}

const MetricTile: React.FC<MetricTileProps> = ({ metric, theme }) => {
  const styles = getThemeStyles(theme);

  return (
    <div
      className={`${styles.metric} rounded-lg border p-6 shadow-sm hover:shadow-md transition-shadow`}
      role="article"
      aria-label={`${metric.value} ${metric.label}`}
    >
      {metric.icon && (
        <div className={`${styles.metricValue} mb-3`} aria-hidden="true">
          {metric.icon}
        </div>
      )}
      <div className={`text-4xl ${styles.metricValue} mb-2`}>
        {metric.value}
      </div>
      <div className={`text-lg ${styles.metricLabel} mb-1`}>
        {metric.label}
      </div>
      {metric.description && (
        <p className={`text-sm ${styles.bodySecondary}`}>
          {metric.description}
        </p>
      )}
    </div>
  );
};

// Donation Tier Card Component
interface DonationTierCardProps {
  tier: DonationTier;
  theme: 'light' | 'dark';
  onSelect?: () => void;
}

const DonationTierCard: React.FC<DonationTierCardProps> = ({ tier, theme, onSelect }) => {
  const styles = getThemeStyles(theme);

  return (
    <button
      onClick={onSelect}
      className={`${styles.tier} rounded-lg border p-6 text-left transition-all hover:shadow-md w-full`}
      aria-label={`Donate ${tier.amount} - ${tier.label}`}
    >
      <div className={`text-3xl ${styles.heading} mb-2`}>
        {tier.amount}
      </div>
      <div className={`text-lg ${styles.body} mb-2`}>
        {tier.label}
      </div>
      <p className={`text-sm ${styles.bodySecondary} mb-3`}>
        {tier.description}
      </p>
      {tier.impact && (
        <div className={`flex items-start gap-2 text-sm ${styles.body}`}>
          <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
          <span>{tier.impact}</span>
        </div>
      )}
    </button>
  );
};

// Journey Stage Card Component
interface JourneyStageCardProps {
  stage: JourneyStage;
  theme: 'light' | 'dark';
  isLast?: boolean;
}

const JourneyStageCard: React.FC<JourneyStageCardProps> = ({ stage, theme, isLast = false }) => {
  const styles = getThemeStyles(theme);

  return (
    <div className="flex flex-col items-center text-center">
      {/* Icon Circle */}
      <div
        className={`${styles.journeyCard} rounded-full p-6 border mb-4 shadow-sm`}
        aria-hidden="true"
      >
        <div className={`w-12 h-12 ${styles.heading}`}>
          {stage.icon}
        </div>
      </div>

      {/* Title & Description */}
      <div className="space-y-2">
        <h3 className={`text-lg ${styles.heading}`}>
          {stage.title}
        </h3>
        <p className={`text-sm ${styles.bodySecondary} max-w-xs`}>
          {stage.description}
        </p>
      </div>

      {/* Connector Arrow (except for last stage) */}
      {!isLast && (
        <div className={`hidden md:block ${styles.bodySecondary} mt-6`} aria-hidden="true">
          <ArrowRight className="w-6 h-6" />
        </div>
      )}
    </div>
  );
};

export const VisionDonorPage: React.FC<VisionDonorPageProps> = ({
  heroHeading,
  heroSubheading,
  heroImage,
  heroCtaLabel = 'Learn More',
  heroCtaSecondaryLabel = 'View Programs',
  onHeroCtaClick,
  onHeroCtaSecondaryClick,
  impactMetrics,
  donationHeading,
  donationStory,
  donationTiers,
  onDonateClick,
  journeyStages,
  theme = 'light',
  heroVariant = 'without-image',
  roadmapVariant = 'full',
  children,
}) => {
  const styles = getThemeStyles(theme);

  return (
    <div className={`${styles.page} min-h-screen`}>
      {/* 1. Hero Section */}
      <section className={`${styles.hero} py-20 md:py-32`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className={`grid ${heroVariant === 'with-image' ? 'md:grid-cols-2' : 'md:grid-cols-1'} gap-12 items-center`}>
            {/* Hero Content */}
            <div className={heroVariant === 'without-image' ? 'text-center mx-auto max-w-4xl' : ''}>
              <h1 className={`text-5xl md:text-6xl ${styles.heroText} mb-6 leading-tight`}>
                {heroHeading}
              </h1>
              <p className={`text-xl md:text-2xl ${styles.heroSubtext} mb-8 leading-relaxed`}>
                {heroSubheading}
              </p>
              <div className="flex items-center gap-4 flex-wrap" style={{ justifyContent: heroVariant === 'without-image' ? 'center' : 'flex-start' }}>
                <button
                  onClick={onHeroCtaClick}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors flex items-center gap-2 shadow-lg"
                  aria-label={heroCtaLabel}
                >
                  <span>{heroCtaLabel}</span>
                  <ArrowRight className="w-5 h-5" />
                </button>
                <button
                  onClick={onHeroCtaSecondaryClick}
                  className={`px-6 py-3 ${theme === 'dark' ? 'bg-slate-700 hover:bg-slate-600 text-slate-100' : 'bg-white hover:bg-slate-50 text-slate-900'} rounded-lg transition-colors border ${theme === 'dark' ? 'border-slate-600' : 'border-slate-200'}`}
                  aria-label={heroCtaSecondaryLabel}
                >
                  {heroCtaSecondaryLabel}
                </button>
              </div>
            </div>

            {/* Hero Image */}
            {heroVariant === 'with-image' && heroImage && (
              <div className="rounded-xl overflow-hidden shadow-2xl">
                <img
                  src={heroImage}
                  alt="Transition Trails mission"
                  className="w-full h-auto object-cover"
                />
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 2. Impact Metrics Tiles */}
      <section className={`${styles.section} py-16 md:py-20`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl ${styles.heading} mb-4`}>
              Our Impact So Far
            </h2>
            <p className={`text-lg ${styles.bodySecondary} max-w-2xl mx-auto`}>
              Together, we're creating pathways to meaningful careers in nonprofit technology.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactMetrics.map((metric, index) => (
              <MetricTile key={index} metric={metric} theme={theme} />
            ))}
          </div>
        </div>
      </section>

      {/* 3. Feature Roadmap Section */}
      <section className={`${styles.sectionAlt} py-16 md:py-20`}>
        <div className="max-w-7xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <h2 className={`text-3xl md:text-4xl ${styles.heading} mb-4`}>
              Our Roadmap
            </h2>
            <p className={`text-lg ${styles.bodySecondary} max-w-2xl mx-auto`}>
              Explore what we're building to support learners, nonprofits, and the tech community.
            </p>
          </div>
          {children}
        </div>
      </section>

      {/* 4. Donation CTA Section */}
      <section className={`${styles.donate} py-16 md:py-20`}>
        <div className="max-w-5xl mx-auto px-6 md:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white text-sm mb-4">
              <Heart className="w-4 h-4" />
              <span>Support Our Mission</span>
            </div>
            <h2 className={`text-3xl md:text-4xl ${styles.donateText} mb-6`}>
              {donationHeading}
            </h2>
            <p className={`text-lg ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'} mb-8 max-w-3xl mx-auto leading-relaxed`}>
              {donationStory}
            </p>
          </div>

          {/* Donation Tiers */}
          {donationTiers && donationTiers.length > 0 && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              {donationTiers.map((tier, index) => (
                <DonationTierCard
                  key={index}
                  tier={tier}
                  theme={theme}
                  onSelect={onDonateClick}
                />
              ))}
            </div>
          )}

          {/* Primary Donate Button */}
          <div className="text-center">
            <button
              onClick={onDonateClick}
              className="px-8 py-4 bg-white text-rose-700 hover:bg-slate-50 rounded-lg transition-colors text-lg shadow-xl flex items-center gap-3 mx-auto"
              aria-label="Make a donation"
            >
              <Heart className="w-6 h-6" />
              <span>Donate Now</span>
            </button>
            <p className={`text-sm ${theme === 'dark' ? 'text-slate-400' : 'text-slate-600'} mt-4`}>
              Your gift is tax-deductible. Transition Trails is a 501(c)(3) nonprofit.
            </p>
          </div>
        </div>
      </section>

      {/* 5. "How It Works" — Program Journey Overview */}
      {journeyStages && journeyStages.length > 0 && (
        <section className={`${styles.journey} py-16 md:py-20`}>
          <div className="max-w-7xl mx-auto px-6 md:px-8">
            <div className="text-center mb-12">
              <h2 className={`text-3xl md:text-4xl ${styles.heading} mb-4`}>
                How It Works
              </h2>
              <p className={`text-lg ${styles.bodySecondary} max-w-2xl mx-auto`}>
                Every learner's journey through Transition Trails follows a structured path from exploration to career launch.
              </p>
            </div>

            {/* Journey Stages */}
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4 items-start">
              {journeyStages.map((stage, index) => (
                <JourneyStageCard
                  key={index}
                  stage={stage}
                  theme={theme}
                  isLast={index === journeyStages.length - 1}
                />
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
};
