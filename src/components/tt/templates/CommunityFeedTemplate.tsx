import React from 'react';
import { Button } from '../../ttds/Button';
import { TTCommunityPostCard, TTCommunityPostCardProps } from '../CommunityPostCard';
import { PennyInsightRail, PennyInsightRailProps } from '../../ttds/PennyInsightRail';
import { EventsList, Event } from '../../ttds/EventsList';
import { Hash, Plus } from 'lucide-react';

// Channel Suggestion Interface
export interface ChannelSuggestion {
  id: string;
  name: string;
  description: string;
  memberCount?: number;
  isFollowing?: boolean;
}

// Channel Suggestions Module Component
interface ChannelSuggestionsModuleProps {
  channels?: ChannelSuggestion[];
  onFollowClick?: (channelId: string) => void;
  theme?: 'light' | 'dark';
}

const ChannelSuggestionsModule = React.forwardRef<HTMLDivElement, ChannelSuggestionsModuleProps>(
  ({ channels = [], onFollowClick, theme = 'light' }, ref) => {
    const isDark = theme === 'dark';
    const bgClass = isDark ? 'bg-slate-800' : 'bg-white';
    const borderClass = isDark ? 'border-slate-700' : 'border-slate-200';
    const textPrimaryClass = isDark ? 'text-slate-100' : 'text-slate-900';
    const textSecondaryClass = isDark ? 'text-slate-400' : 'text-slate-600';
    const hoverBgClass = isDark ? 'hover:bg-slate-700' : 'hover:bg-slate-50';

    return (
      <div
        ref={ref}
        className={`rounded-xl border ${bgClass} ${borderClass} p-6`}
      >
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <Hash className={`h-5 w-5 ${isDark ? 'text-emerald-500' : 'text-emerald-600'}`} />
            <h3 className={textPrimaryClass} style={{ fontWeight: 600 }}>
              Suggested Channels
            </h3>
          </div>
        </div>

        {/* Channels List */}
        <div className="space-y-3">
          {channels.length === 0 ? (
            <div className="py-8 text-center">
              <Hash className={`h-12 w-12 ${isDark ? 'text-slate-600' : 'text-slate-300'} mx-auto mb-3`} />
              <p className={textSecondaryClass} style={{ fontWeight: 400 }}>
                No channel suggestions
              </p>
            </div>
          ) : (
            channels.map((channel) => (
              <div
                key={channel.id}
                className={`border ${borderClass} rounded-lg p-4 transition-all ${hoverBgClass}`}
              >
                <div className="flex items-start justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2 flex-1 min-w-0">
                    <Hash className={`h-4 w-4 ${textSecondaryClass} flex-shrink-0`} />
                    <h4 
                      className={`${textPrimaryClass} truncate`}
                      style={{ fontWeight: 600 }}
                    >
                      {channel.name}
                    </h4>
                  </div>
                  <Button
                    variant={channel.isFollowing ? 'secondary' : 'primary'}
                    size="small"
                    onClick={() => onFollowClick?.(channel.id)}
                    className="flex-shrink-0"
                  >
                    {channel.isFollowing ? 'Following' : 'Follow'}
                  </Button>
                </div>
                <p 
                  className={`text-sm ${textSecondaryClass} line-clamp-2`}
                  style={{ fontWeight: 400 }}
                >
                  {channel.description}
                </p>
                {channel.memberCount !== undefined && (
                  <p 
                    className={`text-xs ${textSecondaryClass} mt-2`}
                    style={{ fontWeight: 400 }}
                  >
                    {channel.memberCount.toLocaleString()} members
                  </p>
                )}
              </div>
            ))
          )}
        </div>
      </div>
    );
  }
);

ChannelSuggestionsModule.displayName = 'ChannelSuggestionsModule';

// Main Template Props
export interface TTCommunityFeedTemplateProps {
  // Main Feed
  posts: TTCommunityPostCardProps[];
  onPostClick?: (index: number) => void;
  
  // Events Module
  events?: Event[];
  onEventClick?: (eventId: string) => void;
  onRegisterClick?: (eventId: string) => void;
  
  // Penny Insight Module
  pennyInsight?: PennyInsightRailProps;
  
  // Channel Suggestions Module
  channels?: ChannelSuggestion[];
  onFollowChannel?: (channelId: string) => void;
  
  // Variants
  theme?: 'light' | 'dark';
  feedDensity?: 'regular' | 'compact';
  showRightRail?: boolean;
}

export const TTCommunityFeedTemplate = React.forwardRef<HTMLDivElement, TTCommunityFeedTemplateProps>(
  (
    {
      posts,
      onPostClick,
      events,
      onEventClick,
      onRegisterClick,
      pennyInsight,
      channels,
      onFollowChannel,
      theme = 'light',
      feedDensity = 'regular',
      showRightRail = true,
    },
    ref
  ) => {
    const isDark = theme === 'dark';
    
    // Theme classes
    const bgClass = isDark ? 'bg-slate-900' : 'bg-slate-50';
    const textPrimaryClass = isDark ? 'text-slate-50' : 'text-slate-900';
    
    // Spacing based on density
    const feedGap = feedDensity === 'compact' ? 'gap-4' : 'gap-6';

    return (
      <div ref={ref} className={`w-full min-h-screen ${bgClass}`}>
        <div className="max-w-7xl mx-auto px-6 py-12 md:px-12 md:py-16">
          {/* Two Column Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
            {/* Main Column - Community Feed */}
            <div className={`flex flex-col ${feedGap}`}>
              {/* Page Header */}
              <div className="mb-6">
                <h1 
                  className={`text-4xl md:text-5xl mb-4 ${textPrimaryClass}`}
                  style={{ fontWeight: 600 }}
                >
                  Community
                </h1>
                <p 
                  className={`text-lg md:text-xl ${isDark ? 'text-slate-300' : 'text-slate-700'}`}
                  style={{ fontWeight: 400 }}
                >
                  Connect, learn, and grow together
                </p>
              </div>

              {/* Community Posts Feed */}
              <div className={`flex flex-col ${feedGap}`}>
                {posts.length === 0 ? (
                  <div className={`${isDark ? 'bg-slate-800 border-slate-700' : 'bg-white border-slate-200'} border rounded-xl p-12 text-center`}>
                    <p className={`text-lg ${isDark ? 'text-slate-400' : 'text-slate-500'}`} style={{ fontWeight: 400 }}>
                      No posts yet. Start the conversation!
                    </p>
                  </div>
                ) : (
                  posts.map((post, index) => (
                    <TTCommunityPostCard
                      key={index}
                      {...post}
                      density={feedDensity === 'compact' ? 'compact' : 'default'}
                      onPostClick={onPostClick ? () => onPostClick(index) : post.onPostClick}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Right Rail - Events + Insights + Channels */}
            {showRightRail && (
              <div className="flex flex-col gap-6">
                {/* Events Module */}
                {events && events.length > 0 && (
                  <div className={isDark ? '[&>div]:bg-slate-800 [&>div]:border-slate-700' : ''}>
                    <EventsList
                      events={events}
                      variant="compact"
                      maxItems={3}
                      onEventClick={onEventClick}
                      onRegisterClick={onRegisterClick}
                      onViewAllClick={() => console.log('View all events')}
                    />
                  </div>
                )}

                {/* Penny Insight Module */}
                {pennyInsight && (
                  <div className={isDark ? '[&>div]:bg-slate-800 [&>div]:border-slate-700' : ''}>
                    <PennyInsightRail
                      {...pennyInsight}
                      density="compact"
                    />
                  </div>
                )}

                {/* Channel Suggestions Module */}
                {channels && channels.length > 0 && (
                  <ChannelSuggestionsModule
                    channels={channels}
                    onFollowClick={onFollowChannel}
                    theme={theme}
                  />
                )}
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
);

TTCommunityFeedTemplate.displayName = 'TTCommunityFeedTemplate';

// Showcase Component
export function CommunityFeedTemplateShowcase() {
  const [theme, setTheme] = React.useState<'light' | 'dark'>('light');
  const [feedDensity, setFeedDensity] = React.useState<'regular' | 'compact'>('regular');
  const [showRightRail, setShowRightRail] = React.useState(true);

  // Example posts
  const posts: TTCommunityPostCardProps[] = [
    {
      authorName: 'Sarah Chen',
      authorRole: 'Career Switcher',
      postType: 'question',
      replyCount: 12,
      lastActivity: '2h ago',
      timeAgo: '2h ago',
      title: 'How do I prepare for the Admin certification exam?',
      excerpt: 'I\'ve completed the Trailhead modules but want to make sure I\'m ready. Any tips from those who have passed?',
      tags: ['Admin Cert', 'Exam Prep', 'Study Tips'],
      context: {
        trail: 'Salesforce Admin',
      },
      authorAvatar: 'SC',
      onPostClick: () => console.log('Post clicked'),
    },
    {
      authorName: 'Marcus Thompson',
      authorRole: 'Active Learner',
      postType: 'win',
      replyCount: 24,
      lastActivity: '4h ago',
      timeAgo: '4h ago',
      title: 'Just landed my first Salesforce Admin role! 🎉',
      excerpt: 'After 6 months of learning through Transition Trails, I finally got the offer. Thanks to this amazing community for all the support!',
      tags: ['Career Win', 'Admin', 'Job Success'],
      context: {
        program: 'Career Transition',
      },
      authorAvatar: 'MT',
      onPostClick: () => console.log('Post clicked'),
    },
    {
      authorName: 'Emily Rodriguez',
      authorRole: 'Mentor',
      postType: 'resource',
      replyCount: 8,
      lastActivity: '1d ago',
      timeAgo: '1d ago',
      title: 'Free resources for learning Apex',
      excerpt: 'I\'ve compiled a list of free resources that helped me master Apex development. Check out the full guide in the comments!',
      tags: ['Apex', 'Developer', 'Resources'],
      context: {
        trail: 'Platform Developer',
      },
      authorAvatar: 'ER',
      onPostClick: () => console.log('Post clicked'),
    },
    {
      authorName: 'Jordan Lee',
      authorRole: 'Active Learner',
      postType: 'question',
      replyCount: 5,
      lastActivity: '3h ago',
      timeAgo: '3h ago',
      title: 'Best practice for validation rules?',
      excerpt: 'Working on a nonprofit project and need help structuring validation rules. What approach do you recommend?',
      tags: ['Validation Rules', 'Best Practices', 'Nonprofit'],
      authorAvatar: 'JL',
      onPostClick: () => console.log('Post clicked'),
    },
  ];

  // Example events
  const events: Event[] = [
    {
      id: '1',
      title: 'Admin Certification Workshop',
      type: 'workshop',
      date: '2025-11-29',
      time: '2:00 PM EST',
      isVirtual: true,
      attendees: 24,
      maxAttendees: 30,
      registered: false,
    },
    {
      id: '2',
      title: 'Trail Talk: Career Transitions',
      type: 'webinar',
      date: '2025-11-30',
      time: '1:00 PM EST',
      isVirtual: true,
      registered: true,
    },
    {
      id: '3',
      title: 'Community Meetup - Portland',
      type: 'meetup',
      date: '2025-12-05',
      time: '6:00 PM PST',
      location: 'Portland, OR',
      isVirtual: false,
      attendees: 12,
      maxAttendees: 20,
      registered: false,
    },
  ];

  // Example Penny Insight
  const pennyInsight: PennyInsightRailProps = {
    aiCoachingNote: 'You\'ve completed 3 missions this week—keep it up! Try the Admin Reporting Challenge next to build on your momentum.',
    contextLine: 'Based on your recent activity',
    ctaType: 'view-suggestions',
    onCTAClick: () => console.log('View suggestions clicked'),
  };

  // Example channels
  const [channels, setChannels] = React.useState<ChannelSuggestion[]>([
    {
      id: '1',
      name: 'guidedtrail',
      description: 'Share your progress and get support on your learning journey',
      memberCount: 1234,
      isFollowing: false,
    },
    {
      id: '2',
      name: 'portfolio',
      description: 'Showcase your projects and get feedback from peers',
      memberCount: 856,
      isFollowing: true,
    },
    {
      id: '3',
      name: 'wins',
      description: 'Celebrate your achievements and milestones',
      memberCount: 2103,
      isFollowing: false,
    },
    {
      id: '4',
      name: 'help-desk',
      description: 'Get quick answers to your technical questions',
      memberCount: 3421,
      isFollowing: false,
    },
  ]);

  const handleFollowChannel = (channelId: string) => {
    setChannels(channels.map(ch => 
      ch.id === channelId ? { ...ch, isFollowing: !ch.isFollowing } : ch
    ));
  };

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

          {/* Feed Density */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Feed Density
            </label>
            <div className="flex flex-wrap gap-3">
              {(['regular', 'compact'] as const).map((density) => (
                <Button
                  key={density}
                  variant={feedDensity === density ? 'primary' : 'secondary'}
                  size="sm"
                  onClick={() => setFeedDensity(density)}
                >
                  {density === 'regular' ? 'Regular' : 'Compact'}
                </Button>
              ))}
            </div>
          </div>

          {/* Show Right Rail */}
          <div className="flex flex-col gap-3">
            <label className={`text-sm ${theme === 'dark' ? 'text-slate-300' : 'text-slate-700'}`} style={{ fontWeight: 600 }}>
              Layout
            </label>
            <div className="flex gap-3">
              <Button
                variant={showRightRail ? 'primary' : 'secondary'}
                size="sm"
                onClick={() => setShowRightRail(!showRightRail)}
              >
                {showRightRail ? 'With Right Rail' : 'Feed Only'}
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
        <TTCommunityFeedTemplate
          posts={posts}
          events={events}
          pennyInsight={pennyInsight}
          channels={channels}
          onFollowChannel={handleFollowChannel}
          theme={theme}
          feedDensity={feedDensity}
          showRightRail={showRightRail}
          onPostClick={(index) => console.log('Post clicked:', index)}
          onEventClick={(eventId) => console.log('Event clicked:', eventId)}
          onRegisterClick={(eventId) => console.log('Register clicked:', eventId)}
        />
      </div>
    </div>
  );
}
