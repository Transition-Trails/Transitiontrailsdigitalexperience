import React from 'react';
import {
  BookOpen,
  Users,
  Award,
  Calendar,
  MessageSquare,
  HelpCircle,
  Settings,
  FileText,
  ExternalLink,
} from 'lucide-react';

export interface QuickLink {
  id: string;
  label: string;
  icon?: React.ReactNode;
  href: string;
  external?: boolean;
  badge?: string; // Optional badge text (e.g., "New", "3")
}

export interface QuickLinksProps {
  links?: QuickLink[];
  variant?: 'compact' | 'full';
  showTitle?: boolean;
  title?: string;
  onLinkClick?: (linkId: string) => void;
  className?: string;
}

const defaultLinks: QuickLink[] = [
  {
    id: 'learning-center',
    label: 'Learning Center',
    icon: <BookOpen className="h-4 w-4" />,
    href: '/learning',
  },
  {
    id: 'community',
    label: 'Community Forum',
    icon: <Users className="h-4 w-4" />,
    href: '/community',
    badge: '3',
  },
  {
    id: 'achievements',
    label: 'My Achievements',
    icon: <Award className="h-4 w-4" />,
    href: '/achievements',
  },
  {
    id: 'events',
    label: 'All Events',
    icon: <Calendar className="h-4 w-4" />,
    href: '/events',
  },
  {
    id: 'support',
    label: 'Get Help',
    icon: <HelpCircle className="h-4 w-4" />,
    href: '/support',
  },
  {
    id: 'settings',
    label: 'Settings',
    icon: <Settings className="h-4 w-4" />,
    href: '/settings',
  },
];

export const QuickLinks = React.forwardRef<HTMLDivElement, QuickLinksProps>(
  (
    {
      links = defaultLinks,
      variant = 'full',
      showTitle = true,
      title = 'Quick Links',
      onLinkClick,
      className = '',
    },
    ref
  ) => {
    const isCompact = variant === 'compact';

    return (
      <div
        ref={ref}
        className={`
          bg-white rounded-lg border border-slate-200 shadow-sm
          ${isCompact ? 'p-4' : 'p-5'}
          ${className}
        `}
      >
        {/* Title */}
        {showTitle && (
          <h3 className="text-slate-900 mb-4">{title}</h3>
        )}

        {/* Links List */}
        <nav className="space-y-1" aria-label="Quick navigation">
          {links.map((link) => (
            <a
              key={link.id}
              href={link.href}
              onClick={(e) => {
                if (onLinkClick) {
                  e.preventDefault();
                  onLinkClick(link.id);
                }
              }}
              className={`
                flex items-center justify-between gap-3 px-3 py-2.5 rounded-lg
                text-slate-700 hover:bg-slate-50 hover:text-slate-900
                transition-colors group
                focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1
              `}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
            >
              <div className="flex items-center gap-3 flex-1 min-w-0">
                {/* Icon */}
                {link.icon && (
                  <div className="text-slate-500 group-hover:text-emerald-600 transition-colors flex-shrink-0">
                    {link.icon}
                  </div>
                )}

                {/* Label */}
                <span className="text-sm truncate">{link.label}</span>
              </div>

              {/* Badge or External Icon */}
              <div className="flex items-center gap-2 flex-shrink-0">
                {link.badge && (
                  <span className="inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 bg-emerald-100 text-emerald-700 text-xs rounded-full">
                    {link.badge}
                  </span>
                )}
                {link.external && (
                  <ExternalLink className="h-3.5 w-3.5 text-slate-400" />
                )}
              </div>
            </a>
          ))}
        </nav>
      </div>
    );
  }
);

QuickLinks.displayName = 'QuickLinks';
