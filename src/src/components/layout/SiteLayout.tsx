import React from 'react';
import { MainNav } from '../navigation/MainNav';
import { Footer } from '../navigation/Footer';

/**
 * SiteLayout Component
 * Main layout wrapper for all pages
 * LWC Conversion: Can be converted to a template wrapper
 */
interface SiteLayoutProps {
  children: React.ReactNode;
}

export const SiteLayout: React.FC<SiteLayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col font-sans antialiased">
      <MainNav />
      <main className="flex-1" role="main">
        {children}
      </main>
      <Footer />
    </div>
  );
};
