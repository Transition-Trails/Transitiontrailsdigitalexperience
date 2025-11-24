import React from 'react';
import { Link } from 'react-router-dom';
import { SiteLayout } from '../../components/layout/SiteLayout';
import { Container } from '../../components/ui/Container';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';
import { Button } from '../../components/ui/Button';
import { CMSRegion } from '../../components/cms/CMSRegion';
import { TrendingUp, Award, Calendar, BookOpen } from 'lucide-react';

/**
 * DashboardPage Component
 * User dashboard with progress tracking and personalized content
 * LWC Conversion: c-dashboard-page with Salesforce data integration
 */
export const DashboardPage: React.FC = () => {
  // Mock user data - in production, fetch from Salesforce
  const user = {
    name: 'John Veteran',
    currentTrail: 'Guided Trail',
    overallProgress: 65,
    streak: 7,
    completedModules: 8,
    totalModules: 12,
  };

  const recentActivity = [
    {
      id: 1,
      title: 'Completed: Resume Building',
      trail: 'Guided Trail',
      date: '2024-11-23',
    },
    {
      id: 2,
      title: 'Started: Networking Strategy',
      trail: 'Guided Trail',
      date: '2024-11-22',
    },
    {
      id: 3,
      title: 'Earned Badge: Foundation Complete',
      trail: 'Guided Trail',
      date: '2024-11-20',
    },
  ];

  const upcomingEvents = [
    {
      id: 1,
      title: 'Mentor Check-in Session',
      date: '2024-11-25',
      time: '2:00 PM EST',
    },
    {
      id: 2,
      title: 'Career Fair Webinar',
      date: '2024-11-27',
      time: '1:00 PM EST',
    },
  ];

  return (
    <SiteLayout>
      <section className="slds-section bg-gradient-to-b from-[var(--color-neutral-50)] to-white">
        <Container>
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">Welcome back, {user.name}!</h1>
            <p className="text-lg text-[var(--color-neutral-700)]">
              You're making great progress on your journey
            </p>
          </div>

          {/* Stats Overview - CMS Region */}
          <CMSRegion regionName="dashboard_stats">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-[var(--color-primary)]/10 mb-3">
                    <TrendingUp size={24} color="var(--color-primary)" />
                  </div>
                  <p className="text-3xl font-bold text-[var(--color-primary)] mb-1">
                    {user.overallProgress}%
                  </p>
                  <p className="text-sm text-[var(--color-neutral-700)]">Overall Progress</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-[var(--color-accent)]/10 mb-3">
                    <Award size={24} color="var(--color-accent)" />
                  </div>
                  <p className="text-3xl font-bold text-[var(--color-accent)] mb-1">
                    {user.completedModules}
                  </p>
                  <p className="text-sm text-[var(--color-neutral-700)]">Modules Completed</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-[var(--color-success)]/10 mb-3">
                    <Calendar size={24} color="var(--color-success)" />
                  </div>
                  <p className="text-3xl font-bold text-[var(--color-success)] mb-1">
                    {user.streak}
                  </p>
                  <p className="text-sm text-[var(--color-neutral-700)]">Day Streak</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6 text-center">
                  <div className="inline-flex p-3 rounded-full bg-[var(--color-secondary)]/10 mb-3">
                    <BookOpen size={24} color="var(--color-secondary)" />
                  </div>
                  <p className="text-3xl font-bold text-[var(--color-secondary)] mb-1">
                    {user.totalModules}
                  </p>
                  <p className="text-sm text-[var(--color-neutral-700)]">Total Modules</p>
                </CardContent>
              </Card>
            </div>
          </CMSRegion>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Current Progress */}
            <div className="lg:col-span-2 space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Continue Learning</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="mb-4">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium">{user.currentTrail}</span>
                      <span className="text-sm text-[var(--color-neutral-700)]">
                        {user.completedModules}/{user.totalModules} modules
                      </span>
                    </div>
                    <div className="w-full bg-[var(--color-neutral-200)] rounded-full h-3">
                      <div
                        className="bg-[var(--color-primary)] h-3 rounded-full transition-all"
                        style={{ width: `${user.overallProgress}%` }}
                      />
                    </div>
                  </div>
                  <Link to="/guided-trail">
                    <Button variant="primary">Resume Learning</Button>
                  </Link>
                </CardContent>
              </Card>

              {/* Recent Activity */}
              <Card>
                <CardHeader>
                  <CardTitle>Recent Activity</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {recentActivity.map((activity) => (
                      <div key={activity.id} className="border-l-2 border-[var(--color-primary)] pl-4">
                        <p className="font-medium">{activity.title}</p>
                        <p className="text-sm text-[var(--color-neutral-700)]">
                          {activity.trail} • {activity.date}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Upcoming Events */}
              <Card>
                <CardHeader>
                  <CardTitle>Upcoming Events</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="p-3 bg-[var(--color-neutral-50)] rounded-lg">
                        <p className="font-medium text-sm mb-1">{event.title}</p>
                        <p className="text-xs text-[var(--color-neutral-700)]">
                          {event.date} at {event.time}
                        </p>
                      </div>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full mt-4">
                    View Calendar
                  </Button>
                </CardContent>
              </Card>

              {/* Quick Links */}
              <Card>
                <CardHeader>
                  <CardTitle>Quick Links</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <Link to="/explorers-journey" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Browse Resources
                    </Link>
                    <Link to="/contact-us" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Contact Mentor
                    </Link>
                    <Link to="/about" className="block text-sm text-[var(--color-primary)] hover:underline">
                      Community Forum
                    </Link>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Container>
      </section>
    </SiteLayout>
  );
};
