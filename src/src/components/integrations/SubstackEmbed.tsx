import React from 'react';

/**
 * SubstackEmbed Component
 * Newsletter subscription embed
 * LWC Conversion: Replace with Salesforce Marketing Cloud integration
 */
interface SubstackEmbedProps {
  publicationUrl?: string;
  buttonText?: string;
}

export const SubstackEmbed: React.FC<SubstackEmbedProps> = ({
  publicationUrl = 'https://transitiontrails.substack.com',
  buttonText = 'Subscribe',
}) => {
  return (
    <div className="substack-container">
      {/* CMS_REGION: substack_newsletter */}
      <div className="cms-region" data-region="substack_newsletter">
        {/* Placeholder for Substack - Replace with actual embed */}
        <div className="bg-[var(--color-neutral-100)] rounded-lg p-6 border border-[var(--color-neutral-300)]">
          <h3 className="font-semibold mb-2">Subscribe to our newsletter</h3>
          <p className="text-sm text-[var(--color-neutral-700)] mb-4">
            Get the latest updates and insights delivered to your inbox.
          </p>
          
          {/* Simulated email input */}
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-[var(--color-neutral-300)] rounded-md focus:outline-none focus:ring-2 focus:ring-[var(--color-primary)]"
              disabled
            />
            <button className="px-6 py-2 bg-[var(--color-primary)] text-white rounded-md hover:bg-[var(--color-primary-hover)] transition-colors">
              {buttonText}
            </button>
          </div>
          
          <p className="text-xs text-[var(--color-neutral-600)] mt-4">
            In production, replace with Substack embed code or Marketing Cloud integration
          </p>
        </div>
      </div>
    </div>
  );
};
