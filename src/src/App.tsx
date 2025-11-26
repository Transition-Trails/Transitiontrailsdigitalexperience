import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/Home/HomePage';
import { VisitorsTrailPage } from './pages/VisitorsTrail/VisitorsTrailPage';
import { GuidedTrailPage } from './pages/GuidedTrail/GuidedTrailPage';
import { TrailOfMasteryPage } from './pages/TrailOfMastery/TrailOfMasteryPage';
import { ExplorersJourneyPage } from './pages/ExplorersJourney/ExplorersJourneyPage';
import { AboutPage } from './pages/About/AboutPage';
import { ContactUsPage } from './pages/ContactUs/ContactUsPage';
import { SignInPage } from './pages/SignIn/SignInPage';
import { DashboardPage } from './pages/Dashboard/DashboardPage';
import { PartnerPortalLandingPage } from './pages/PartnerPortalLanding/PartnerPortalLandingPage';
import { AcademyExperienceLandingPage } from './pages/AcademyExperienceLanding/AcademyExperienceLandingPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/visitors-trail" element={<VisitorsTrailPage />} />
        <Route path="/guided-trail" element={<GuidedTrailPage />} />
        <Route path="/trail-of-mastery" element={<TrailOfMasteryPage />} />
        <Route path="/explorers-journey" element={<ExplorersJourneyPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/contact-us" element={<ContactUsPage />} />
        <Route path="/sign-in" element={<SignInPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
        <Route path="/partner-portal" element={<PartnerPortalLandingPage />} />
        <Route path="/academy-experience" element={<AcademyExperienceLandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
