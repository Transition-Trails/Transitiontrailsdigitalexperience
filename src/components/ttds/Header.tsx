import React from 'react';
import { Menu, X, Bell, Settings, User } from 'lucide-react';

export interface HeaderNavItem {
  id: string;
  label: string;
  href: string;
  active?: boolean;
}

export interface HeaderProps {
  logo?: React.ReactNode;
  navItems?: HeaderNavItem[];
  showUserArea?: boolean;
  showUtilities?: boolean;
  scrolled?: boolean;
  onMenuClick?: () => void;
  className?: string;
}

export const Header = React.forwardRef<HTMLElement, HeaderProps>(
  (
    {
      logo,
      navItems = [],
      showUserArea = true,
      showUtilities = true,
      scrolled = false,
      onMenuClick,
      className = '',
    },
    ref
  ) => {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const toggleMobileMenu = () => {
      setMobileMenuOpen(!mobileMenuOpen);
      onMenuClick?.();
    };

    return (
      <header
        ref={ref}
        role="navigation"
        aria-label="Main navigation"
        className={`
          w-full bg-white border-b border-slate-200 transition-all duration-200
          ${scrolled ? 'shadow-sm' : 'shadow-none'}
          ${className}
        `}
      >
        <div
          className={`
            max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-all duration-200
            ${scrolled ? 'h-14' : 'h-16'}
          `}
        >
          <div className="flex items-center justify-between h-full">
            {/* Left: Logo */}
            <div className="flex items-center flex-shrink-0">
              {logo || (
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 bg-emerald-600 rounded-lg flex items-center justify-center">
                    <span className="text-white text-sm">TT</span>
                  </div>
                  <span className="text-slate-900">Transition Trails</span>
                </div>
              )}
            </div>

            {/* Center/Right: Nav Items - Desktop */}
            <nav className="hidden md:flex items-center gap-1" aria-label="Primary navigation">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    px-4 py-2 rounded-lg text-sm transition-colors duration-200
                    ${
                      item.active
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-700 hover:bg-slate-100 hover:text-slate-900'
                    }
                    focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2
                  `}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}
            </nav>

            {/* Right: Utilities & User */}
            <div className="flex items-center gap-2">
              {/* Utilities - Desktop */}
              {showUtilities && (
                <div className="hidden md:flex items-center gap-1">
                  <button
                    className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Notifications"
                  >
                    <Bell className="h-5 w-5" />
                  </button>
                  <button
                    className="p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    aria-label="Settings"
                  >
                    <Settings className="h-5 w-5" />
                  </button>
                </div>
              )}

              {/* User Area - Desktop */}
              {showUserArea && (
                <button
                  className="hidden md:flex items-center gap-2 px-3 py-1.5 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                  aria-label="User menu"
                >
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-sm">Profile</span>
                </button>
              )}

              {/* Mobile Menu Button */}
              <button
                onClick={toggleMobileMenu}
                className="md:hidden p-2 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-slate-200 bg-white">
            <div className="px-4 py-3 space-y-1">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  className={`
                    block px-4 py-2 rounded-lg text-sm transition-colors
                    ${
                      item.active
                        ? 'bg-emerald-50 text-emerald-700'
                        : 'text-slate-700 hover:bg-slate-100'
                    }
                  `}
                  aria-current={item.active ? 'page' : undefined}
                >
                  {item.label}
                </a>
              ))}

              {/* Mobile Utilities */}
              {showUtilities && (
                <div className="pt-3 mt-3 border-t border-slate-200 flex gap-2">
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Notifications"
                  >
                    <Bell className="h-5 w-5" />
                    <span className="text-sm">Notifications</span>
                  </button>
                  <button
                    className="flex-1 flex items-center justify-center gap-2 px-4 py-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors"
                    aria-label="Settings"
                  >
                    <Settings className="h-5 w-5" />
                    <span className="text-sm">Settings</span>
                  </button>
                </div>
              )}

              {/* Mobile User Area */}
              {showUserArea && (
                <button className="w-full flex items-center gap-2 px-4 py-2 mt-2 text-slate-700 hover:bg-slate-100 rounded-lg transition-colors">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <User className="h-4 w-4 text-blue-700" />
                  </div>
                  <span className="text-sm">Profile</span>
                </button>
              )}
            </div>
          </div>
        )}
      </header>
    );
  }
);

Header.displayName = 'Header';
