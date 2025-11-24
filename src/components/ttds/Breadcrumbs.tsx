import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

export interface BreadcrumbItem {
  id: string;
  label: string;
  href?: string;
}

export interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  maxItems?: number;
  showHomeIcon?: boolean;
  className?: string;
}

export const Breadcrumbs = React.forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, maxItems = 4, showHomeIcon = true, className = '' }, ref) => {
    // Truncate breadcrumbs if too many
    const displayItems = React.useMemo(() => {
      if (items.length <= maxItems) {
        return items;
      }

      // Show first item, ellipsis, and last items
      const firstItem = items[0];
      const lastItems = items.slice(-(maxItems - 2));
      
      return [
        firstItem,
        { id: 'ellipsis', label: '...', href: undefined },
        ...lastItems,
      ];
    }, [items, maxItems]);

    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={`flex items-center ${className}`}
      >
        <ol className="flex items-center gap-2 flex-wrap">
          {displayItems.map((item, index) => {
            const isLast = index === displayItems.length - 1;
            const isEllipsis = item.id === 'ellipsis';

            return (
              <li key={item.id} className="flex items-center gap-2">
                {/* Breadcrumb Item */}
                {isEllipsis ? (
                  <span className="text-slate-400 text-sm px-1" aria-hidden="true">
                    {item.label}
                  </span>
                ) : isLast ? (
                  <span
                    className="text-slate-900 text-sm flex items-center gap-1.5"
                    aria-current="page"
                  >
                    {index === 0 && showHomeIcon && <Home className="h-3.5 w-3.5" />}
                    {item.label}
                  </span>
                ) : item.href ? (
                  <a
                    href={item.href}
                    className="
                      text-slate-600 hover:text-emerald-600 text-sm transition-colors
                      flex items-center gap-1.5
                      focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-1 rounded
                    "
                  >
                    {index === 0 && showHomeIcon && <Home className="h-3.5 w-3.5" />}
                    {item.label}
                  </a>
                ) : (
                  <span className="text-slate-600 text-sm flex items-center gap-1.5">
                    {index === 0 && showHomeIcon && <Home className="h-3.5 w-3.5" />}
                    {item.label}
                  </span>
                )}

                {/* Separator */}
                {!isLast && (
                  <ChevronRight
                    className="h-4 w-4 text-slate-400 flex-shrink-0"
                    aria-hidden="true"
                  />
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = 'Breadcrumbs';
