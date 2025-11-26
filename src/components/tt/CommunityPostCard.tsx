import React from 'react';
import { Card } from '../ttds/Card';
import { Tag } from '../ttds/Tag';
import { MessageCircle, MoreVertical, User } from 'lucide-react';

export type PostType = 'question' | 'win' | 'resource';
export type PostDensity = 'default' | 'compact';

export interface TTCommunityPostCardProps extends React.HTMLAttributes<HTMLDivElement> {
  // Required Fields (5)
  authorName: string;
  authorRole: string; // Flexible role label (e.g., "Career Switcher", "Mentor", "Active Learner")
  postType: PostType;
  replyCount: number;
  lastActivity: string; // e.g., "2h ago", "yesterday"

  // Optional Fields
  context?: {
    trail?: string; // e.g., "Cybersecurity Foundations"
    program?: string; // e.g., "Career Transition"
  };
  tags?: string[]; // e.g., ["Exam Prep", "Nonprofit Project", "Tech Question"]
  title?: string; // Post title
  excerpt?: string; // Post preview text (1-2 lines)
  authorAvatar?: string;
  timeAgo?: string; // e.g., "2h ago", "yesterday"
  density?: PostDensity;
  onPostClick?: () => void;
  onMenuClick?: () => void;
}

// Configuration for post types
const postTypeConfig: Record<PostType, { label: string; variant: 'trail' | 'primary' | 'platform' }> = {
  'question': { label: 'Question', variant: 'platform' },
  'win': { label: 'Win', variant: 'trail' },
  'resource': { label: 'Resource', variant: 'primary' },
};

export const TTCommunityPostCard = React.forwardRef<HTMLDivElement, TTCommunityPostCardProps>(
  (
    {
      authorName,
      authorRole,
      postType,
      replyCount,
      lastActivity,
      context,
      tags = [],
      title,
      excerpt,
      authorAvatar,
      timeAgo,
      density = 'default',
      onPostClick,
      onMenuClick,
      className = '',
      ...props
    },
    ref
  ) => {
    const typeInfo = postTypeConfig[postType];
    const isCompact = density === 'compact';
    
    // Spacing based on density
    const mainGap = isCompact ? 'gap-3' : 'gap-4';

    // Build context string
    const contextString = context
      ? [context.trail, context.program].filter(Boolean).join(' • ')
      : undefined;

    // Use timeAgo if provided, otherwise use lastActivity for the time display
    const displayTime = timeAgo || lastActivity;

    return (
      <Card
        ref={ref}
        elevation="low"
        padding={isCompact ? 'tight' : 'normal'}
        onClick={onPostClick}
        className={`${onPostClick ? 'cursor-pointer hover:shadow-md transition-shadow duration-200' : ''} ${className}`}
        role={onPostClick ? 'button' : undefined}
        tabIndex={onPostClick ? 0 : undefined}
        {...props}
      >
        <article className={`flex flex-col ${mainGap}`}>
          {/* Top Row: Author Info + Menu */}
          <header className="flex items-start justify-between gap-3">
            <div className="flex items-center gap-3 flex-1 min-w-0">
              {/* Avatar */}
              {authorAvatar ? (
                <div className="w-10 h-10 rounded-full overflow-hidden bg-slate-200 flex-shrink-0">
                  {authorAvatar.startsWith('http') ? (
                    <img
                      src={authorAvatar}
                      alt={`Avatar of ${authorName}`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center text-slate-700 text-sm">
                      {authorAvatar}
                    </div>
                  )}
                </div>
              ) : (
                <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center flex-shrink-0">
                  <User className="h-5 w-5 text-slate-500" />
                </div>
              )}

              {/* Author Name + Role Badge + Time */}
              <div className="flex flex-col gap-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-sm text-slate-900 truncate">{authorName}</span>
                  <span 
                    className="inline-flex items-center px-2 py-0.5 rounded text-xs border bg-slate-100 text-slate-700 border-slate-200"
                    role="status"
                    aria-label={`Role: ${authorRole}`}
                  >
                    {authorRole}
                  </span>
                </div>
                {displayTime && (
                  <time className="text-xs text-slate-500" dateTime={displayTime}>
                    {displayTime}
                  </time>
                )}
              </div>
            </div>

            {/* Optional Menu Button */}
            {onMenuClick && (
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onMenuClick();
                }}
                className="p-1 hover:bg-slate-100 rounded transition-colors flex-shrink-0"
                aria-label="Post options"
              >
                <MoreVertical className="h-4 w-4 text-slate-500" />
              </button>
            )}
          </header>

          {/* Context Row (Optional): Trail/Program Context */}
          {contextString && (
            <div className="flex items-center gap-2">
              <span className="text-xs text-slate-500">{contextString}</span>
            </div>
          )}

          {/* Post Type Badge */}
          <div className="flex items-center gap-2">
            <Tag
              variant={typeInfo.variant}
              label={typeInfo.label}
            />
          </div>

          {/* Optional Post Title */}
          {title && (
            <div>
              <h3 className="text-slate-900 line-clamp-2">{title}</h3>
            </div>
          )}

          {/* Optional Post Excerpt */}
          {excerpt && (
            <div>
              <p className="text-sm text-slate-600 line-clamp-2 leading-relaxed">{excerpt}</p>
            </div>
          )}

          {/* Tags Row (if tags exist) */}
          {tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {tags.map((tag, index) => (
                <span
                  key={`tag-${index}`}
                  className="inline-flex items-center px-2.5 py-1 rounded-md text-xs bg-slate-100 text-slate-700 border border-slate-200"
                  role="tag"
                  aria-label={tag}
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          {/* Footer Row: Engagement Metadata */}
          <footer className="flex items-center gap-2 pt-2 border-t border-slate-200 text-xs text-slate-500">
            <MessageCircle className="h-3.5 w-3.5 flex-shrink-0" aria-hidden="true" />
            <span aria-label={`${replyCount} ${replyCount === 1 ? 'reply' : 'replies'}`}>
              <span className="text-slate-700">{replyCount}</span> {replyCount === 1 ? 'reply' : 'replies'}
            </span>
            <span className="text-slate-400" aria-hidden="true">•</span>
            <span aria-label={`Last activity ${lastActivity}`}>Last activity {lastActivity}</span>
          </footer>
        </article>
      </Card>
    );
  }
);

TTCommunityPostCard.displayName = 'TTCommunityPostCard';