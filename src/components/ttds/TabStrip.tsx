import React from 'react';
import { LucideIcon } from 'lucide-react';

export interface Tab {
  id: string;
  label: string;
  icon?: LucideIcon;
  disabled?: boolean;
}

export interface TabStripProps {
  tabs: Tab[];
  activeTabId: string;
  onTabChange?: (tabId: string) => void;
  variant?: 'underline' | 'filled';
  className?: string;
}

export const TabStrip = React.forwardRef<HTMLDivElement, TabStripProps>(
  ({ tabs, activeTabId, onTabChange, variant = 'underline', className = '' }, ref) => {
    const scrollContainerRef = React.useRef<HTMLDivElement>(null);

    const handleTabClick = (tabId: string, disabled?: boolean) => {
      if (!disabled && onTabChange) {
        onTabChange(tabId);
      }
    };

    return (
      <div
        ref={ref}
        className={`w-full ${variant === 'underline' ? 'border-b border-slate-200' : ''} ${className}`}
        role="tablist"
        aria-label="Content sections"
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-1 overflow-x-auto scrollbar-hide"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
        >
          {tabs.map((tab) => {
            const isActive = tab.id === activeTabId;
            const TabIcon = tab.icon;

            if (variant === 'underline') {
              return (
                <button
                  key={tab.id}
                  role="tab"
                  aria-selected={isActive}
                  aria-disabled={tab.disabled}
                  disabled={tab.disabled}
                  onClick={() => handleTabClick(tab.id, tab.disabled)}
                  className={`
                    flex items-center gap-2 px-4 py-3 text-sm whitespace-nowrap
                    border-b-2 transition-all duration-200
                    ${
                      isActive
                        ? 'border-emerald-600 text-emerald-700'
                        : 'border-transparent text-slate-600 hover:text-slate-900 hover:border-slate-300'
                    }
                    ${tab.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  `}
                >
                  {TabIcon && <TabIcon className="h-4 w-4" />}
                  {tab.label}
                </button>
              );
            }

            // Filled variant
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                aria-disabled={tab.disabled}
                disabled={tab.disabled}
                onClick={() => handleTabClick(tab.id, tab.disabled)}
                className={`
                  flex items-center gap-2 px-4 py-2 text-sm whitespace-nowrap rounded-lg
                  transition-all duration-200
                  ${
                    isActive
                      ? 'bg-emerald-50 text-emerald-700'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                  }
                  ${tab.disabled ? 'opacity-40 cursor-not-allowed' : 'cursor-pointer'}
                  focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                `}
              >
                {TabIcon && <TabIcon className="h-4 w-4" />}
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

TabStrip.displayName = 'TabStrip';
