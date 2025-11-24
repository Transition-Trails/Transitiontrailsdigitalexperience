import React from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { DigitalExperienceLogin, PartnerPortalLogin } from '../../components/integrations/SalesforceLogin';

/**
 * SignInPage Component
 * Authentication portal with links to Salesforce login
 * LWC Conversion: c-sign-in-page with Salesforce authentication
 */
export const SignInPage: React.FC = () => {
  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white min-h-[80vh] flex items-center">
        <Container size="sm">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Welcome Back</h1>
            <p className="text-lg text-[var(--color-neutral-700)]">
              Sign in to access your learning dashboard and continue your journey
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {/* Digital Experience Login */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Member Login</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-neutral-700)] mb-6 text-center">
                  Access your learning dashboard, progress tracking, and community features
                </p>
                <DigitalExperienceLogin />
              </CardContent>
            </Card>

            {/* Partner Portal Login */}
            <Card>
              <CardHeader>
                <CardTitle className="text-center">Partner Login</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-[var(--color-neutral-700)] mb-6 text-center">
                  Access partner resources, collaboration tools, and administrative features
                </p>
                <PartnerPortalLogin />
              </CardContent>
            </Card>
          </div>

          {/* New User CTA */}
          <Card className="bg-[var(--color-neutral-50)] border-0">
            <CardContent className="pt-6 text-center">
              <h3 className="font-semibold mb-2">New to Transition Trails?</h3>
              <p className="text-sm text-[var(--color-neutral-700)] mb-4">
                Start with the Visitor Trail—no account required
              </p>
              <Link
                to="/visitors-trail"
                className="text-[var(--color-primary)] hover:underline font-medium"
              >
                Explore Visitor Trail →
              </Link>
            </CardContent>
          </Card>

          {/* Help Links */}
          <div className="mt-8 text-center space-y-2">
            <p className="text-sm text-[var(--color-neutral-700)]">
              Need help signing in?
            </p>
            <div className="flex justify-center gap-6 text-sm">
              <a href="#" className="text-[var(--color-primary)] hover:underline">
                Reset Password
              </a>
              <a href="#" className="text-[var(--color-primary)] hover:underline">
                Contact Support
              </a>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
