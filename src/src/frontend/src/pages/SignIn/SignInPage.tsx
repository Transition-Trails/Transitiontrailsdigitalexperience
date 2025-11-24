import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';

export const SignInPage: React.FC = () => {
  return (
    <SiteLayout>
      <Section className="pt-20 flex justify-center">
        <Card className="w-full max-w-md">
          <div className="text-center mb-6">
            <h1 className="text-2xl font-bold">Sign In</h1>
            <p className="text-gray-500 text-sm">Access your personalized dashboard</p>
          </div>

          {/* Salesforce Auth Integration Placeholder */}
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Username</label>
              <input className="w-full px-3 py-2 border rounded-md" type="text" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Password</label>
              <input className="w-full px-3 py-2 border rounded-md" type="password" />
            </div>
            <Button className="w-full">Log In</Button>
            
            <div className="relative">
              <div className="absolute inset-0 flex items-center"><span className="w-full border-t"></span></div>
              <div className="relative flex justify-center text-xs uppercase"><span className="bg-white px-2 text-gray-500">Or continue with</span></div>
            </div>

            <Button variant="secondary" className="w-full">Salesforce SSO</Button>
          </div>
        </Card>
      </Section>
    </SiteLayout>
  );
};
