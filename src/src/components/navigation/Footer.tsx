import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Footer Component
 * Site-wide footer with links and newsletter signup
 * LWC Conversion: Can be converted to c-footer with CMS content regions
 */
export const Footer: React.FC = () => {
  return (
    <footer className="border-t bg-[var(--color-neutral-100)]">
      <div className="slds-container">
        <div className="py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand Column */}
          <div className="col-span-1">
            <h3 className="font-bold text-lg mb-4 text-[var(--color-primary)]">
              Transition Trails
            </h3>
            <p className="text-sm text-[var(--color-neutral-700)]">
              Supporting military transitions through guided learning journeys.
            </p>
          </div>

          {/* Trails Column */}
          <div>
            <h4 className="font-semibold mb-4">Learning Trails</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/visitors-trail" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Visitor Trail
                </Link>
              </li>
              <li>
                <Link to="/guided-trail" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Guided Trail
                </Link>
              </li>
              <li>
                <Link to="/trail-of-mastery" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Trail of Mastery
                </Link>
              </li>
              <li>
                <Link to="/explorers-journey" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Explorer's Journey
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact-us" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Contact Us
                </Link>
              </li>
              <li>
                <Link to="/partner-portal" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Partner Portal
                </Link>
              </li>
              <li>
                <a href="#" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter Column - CMS Region */}
          <div>
            <h4 className="font-semibold mb-4">Stay Connected</h4>
            <p className="text-sm text-[var(--color-neutral-700)] mb-4">
              Subscribe to our newsletter for updates and insights.
            </p>
            {/* CMS_REGION: newsletter_signup */}
            <div className="cms-region" data-region="newsletter_signup">
              {/* Substack embed will go here */}
              <a 
                href="https://substack.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-sm text-[var(--color-primary)] hover:underline"
              >
                Subscribe on Substack →
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-[var(--color-neutral-300)] py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-[var(--color-neutral-700)]">
            © 2024 Transition Trails. All rights reserved.
          </p>
          <div className="flex gap-6">
            <a href="#" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Terms of Service
            </a>
            <a href="#" className="text-sm text-[var(--color-neutral-700)] hover:text-[var(--color-primary)]">
              Privacy Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
