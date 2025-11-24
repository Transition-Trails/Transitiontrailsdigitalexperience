import React from 'react';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Section } from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';

export const DashboardPage: React.FC = () => {
  return (
    <SiteLayout>
      <Section className="bg-gray-50 min-h-[calc(100vh-4rem)]">
        <div className="flex flex-col md:flex-row gap-6">
          <div className="md:w-64 flex-shrink-0">
            <Card className="h-full">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-gray-200 rounded-full"></div>
                <div>
                  <div className="font-bold">User Name</div>
                  <div className="text-xs text-gray-500">Explorer</div>
                </div>
              </div>
              <nav className="space-y-1">
                <a href="#" className="block px-2 py-1.5 text-sm font-medium bg-gray-100 rounded text-[var(--color-primary)]">Overview</a>
                <a href="#" className="block px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">My Trails</a>
                <a href="#" className="block px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">Certificates</a>
                <a href="#" className="block px-2 py-1.5 text-sm font-medium text-gray-600 hover:bg-gray-50 rounded">Settings</a>
              </nav>
            </Card>
          </div>

          <div className="flex-1 space-y-6">
            <h1 className="text-2xl font-bold">Dashboard</h1>
            
            <div className="grid gap-4 md:grid-cols-3">
              <Card title="Progress">
                <div className="text-2xl font-bold">65%</div>
                <div className="text-sm text-gray-500">Guided Trail</div>
              </Card>
              <Card title="Badges">
                <div className="text-2xl font-bold">3</div>
                <div className="text-sm text-gray-500">Earned this month</div>
              </Card>
              <Card title="Next Event">
                <div className="font-medium">Live Q&A</div>
                <div className="text-sm text-gray-500">Tomorrow, 2:00 PM</div>
              </Card>
            </div>

            <Card title="Recent Activity">
              <div className="space-y-4">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center justify-between border-b last:border-0 pb-2 last:pb-0">
                    <div>
                      <div className="font-medium">Completed Module {i}</div>
                      <div className="text-xs text-gray-500">2 hours ago</div>
                    </div>
                    <div className="text-green-600 text-sm font-bold">+50 XP</div>
                  </div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </Section>
    </SiteLayout>
  );
};
