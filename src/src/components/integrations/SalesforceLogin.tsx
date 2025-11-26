import React from 'react';
import { Button } from '../ui/Button';

/**
 * SalesforceLogin Component
 * Links to Salesforce Digital Experience and Partner Portal
 * LWC Conversion: Use force:navigateToURL or NavigationMixin
 */
interface SalesforceLoginProps {
  type: 'digital-experience' | 'partner-portal';
  buttonText?: string;
}

export const SalesforceLogin: React.FC<SalesforceLoginProps> = ({
  type,
  buttonText,
}) => {
  const config = {
    'digital-experience': {
      url: 'https://transitiontrails.force.com/s/login',
      defaultText: 'Sign in to Digital Experience',
      description: 'Access your learning dashboard and track your progress',
    },
    'partner-portal': {
      url: 'https://transitiontrails.force.com/partners/s/login',
      defaultText: 'Partner Portal Login',
      description: 'Access partner resources and collaboration tools',
    },
  };

  const { url, defaultText, description } = config[type];

  const handleLogin = () => {
    // In production, this would handle OAuth flow or redirect
    window.location.href = url;
  };

  return (
    <div className="salesforce-login">
      {/* CMS_REGION: salesforce_login */}
      <div className="cms-region" data-region="salesforce_login" data-type={type}>
        <div className="text-center">
          <p className="text-sm text-[var(--color-neutral-700)] mb-4">
            {description}
          </p>
          <Button onClick={handleLogin} variant="primary">
            {buttonText || defaultText}
          </Button>
          <p className="text-xs text-[var(--color-neutral-600)] mt-4">
            Production URL: {url}
          </p>
        </div>
      </div>
    </div>
  );
};

/**
 * Digital Experience Login
 */
export const DigitalExperienceLogin: React.FC = () => {
  return <SalesforceLogin type="digital-experience" />;
};

/**
 * Partner Portal Login
 */
export const PartnerPortalLogin: React.FC = () => {
  return <SalesforceLogin type="partner-portal" />;
};
