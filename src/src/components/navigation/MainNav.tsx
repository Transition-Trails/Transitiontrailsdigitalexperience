import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

/**
 * MainNav Component
 * Primary navigation header
 * LWC Conversion: Can be converted to c-main-nav with navigation items from CMS
 */
export const MainNav: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="slds-container">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center space-x-2">
              <span className="font-bold text-xl text-[var(--color-primary)]">
                Transition Trails
              </span>
            </Link>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex gap-6">
              <Link 
                to="/visitors-trail" 
                className="text-sm font-medium text-[var(--color-neutral-700)] transition-colors hover:text-[var(--color-primary)]"
              >
                Visitor Trail
              </Link>
              <Link 
                to="/guided-trail" 
                className="text-sm font-medium text-[var(--color-neutral-700)] transition-colors hover:text-[var(--color-primary)]"
              >
                Guided Trail
              </Link>
              <Link 
                to="/trail-of-mastery" 
                className="text-sm font-medium text-[var(--color-neutral-700)] transition-colors hover:text-[var(--color-primary)]"
              >
                Trail of Mastery
              </Link>
              <Link 
                to="/explorers-journey" 
                className="text-sm font-medium text-[var(--color-neutral-700)] transition-colors hover:text-[var(--color-primary)]"
              >
                Explorer's Journey
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-[var(--color-neutral-700)] transition-colors hover:text-[var(--color-primary)]"
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right side actions */}
          <div className="flex items-center gap-4">
            <Link 
              to="/sign-in" 
              className="hidden md:inline-flex text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
            >
              Sign In
            </Link>
            <Link 
              to="/contact-us" 
              className="hidden md:inline-flex px-4 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-hover)] transition-colors"
            >
              Contact Us
            </Link>
            
            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 text-[var(--color-neutral-700)]"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden py-4 border-t">
            <div className="flex flex-col gap-4">
              <Link 
                to="/visitors-trail" 
                className="text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Visitor Trail
              </Link>
              <Link 
                to="/guided-trail" 
                className="text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Guided Trail
              </Link>
              <Link 
                to="/trail-of-mastery" 
                className="text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Trail of Mastery
              </Link>
              <Link 
                to="/explorers-journey" 
                className="text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Explorer's Journey
              </Link>
              <Link 
                to="/about" 
                className="text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/sign-in" 
                className="text-sm font-medium text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign In
              </Link>
              <Link 
                to="/contact-us" 
                className="text-sm font-medium text-[var(--color-primary)]"
                onClick={() => setMobileMenuOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
};
