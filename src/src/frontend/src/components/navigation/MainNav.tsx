import React from 'react';
import { Link } from 'react-router-dom';

export const MainNav: React.FC = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <div className="container flex h-16 items-center justify-between px-4">
        <div className="flex gap-6 md:gap-10">
          <Link to="/" className="flex items-center space-x-2">
            <span className="hidden font-bold sm:inline-block text-xl text-[var(--color-primary)]">
              Transition Trails
            </span>
          </Link>
          <nav className="hidden md:flex gap-6">
            <Link to="/visitors-trail" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Visitor
            </Link>
            <Link to="/guided-trail" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Guided
            </Link>
            <Link to="/trail-of-mastery" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Mastery
            </Link>
            <Link to="/explorers-journey" className="flex items-center text-sm font-medium text-muted-foreground transition-colors hover:text-primary">
              Explorer
            </Link>
          </nav>
        </div>
        <div className="flex items-center gap-4">
          <Link to="/sign-in" className="text-sm font-medium hover:underline">
            Sign In
          </Link>
        </div>
      </div>
    </header>
  );
};
