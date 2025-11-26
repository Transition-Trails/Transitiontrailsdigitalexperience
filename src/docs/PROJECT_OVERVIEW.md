# Transition Trails Digital Experience - Project Overview

## Executive Summary

The Transition Trails Digital Experience is a comprehensive web application designed to support military service members through their transition to civilian life. Built as a React prototype with a clear path to Salesforce Experience Cloud deployment, this platform provides structured learning paths, community support, and personalized guidance.

**Project Status**: ✅ React Prototype Complete - Ready for LWC Conversion

**GitHub Branch**: `feature/tta-137-figma-make-initial-prototype-for-transition-trails-academy`

**Linear Issue**: [TTA-137](https://linear.app/issue/TTA-137)

## Project Goals

### Primary Objectives
1. Create a functional React prototype demonstrating all user journeys
2. Establish LWC-friendly architecture for seamless Salesforce conversion
3. Implement responsive, accessible design following SLDS principles
4. Provide clear documentation for development, deployment, and maintenance

### Success Criteria
- ✅ All four learning trails implemented with unique functionality
- ✅ Complete navigation and routing structure
- ✅ Integration points clearly marked for external services
- ✅ CMS regions identified for Salesforce content management
- ✅ Comprehensive documentation for developers and stakeholders
- ✅ Mobile-responsive design across all pages
- ✅ Clean, maintainable codebase ready for LWC conversion

## Architecture Overview

### Technology Stack

**Frontend Framework**
- React 18.3.1 with TypeScript
- React Router 6.22.3 for client-side routing
- Vite 5.4.1 for build tooling

**Styling**
- TailwindCSS 4.0 for utility-first styling
- CSS Custom Properties for design tokens
- SLDS-inspired component patterns

**Development Tools**
- TypeScript 5.5.3 for type safety
- ESLint for code quality
- Vitest for testing
- VS Code recommended for development

### Design System

**Design Tokens** (`/src/styles/tokens.css`)
- **Colors**: Primary (#0176D3), Secondary, Success, Warning, Error, Neutral scale
- **Typography**: System font stack with Salesforce Sans fallback
- **Spacing**: 12-step scale from 4px to 96px
- **Shadows**: 4 elevation levels
- **Transitions**: 3 speed options (fast, normal, slow)

**Component Library**
- Layout: SiteLayout, Container
- UI: Button, Card, Form elements
- Navigation: MainNav, Footer
- CMS: CMSRegion, CMSHero, CMSText
- Integrations: JotformEmbed, SubstackEmbed, SalesforceLogin

## User Journeys

### 1. Visitor Trail (Anonymous/Public)
**Target User**: Service members exploring transition resources for the first time

**Features**:
- No login required
- 4 introductory modules (~75 minutes)
- Jotform signup to upgrade to Guided Trail
- Sample content showcasing platform value

**Key Pages**: `/visitors-trail`

**LWC Conversion**: Use guest user profile for access control

---

### 2. Guided Trail (Authenticated)
**Target User**: Service members committed to structured transition planning

**Features**:
- 12 modules across 4 phases
- Progress tracking and milestones
- 1:1 mentor support
- Estimated 8-12 weeks completion

**Key Pages**: `/guided-trail`, `/dashboard`

**LWC Conversion**: Connect to Salesforce user records for progress tracking

---

### 3. Trail of Mastery (Authenticated)
**Target User**: Service members seeking specialized, advanced knowledge

**Features**:
- 4 specialized tracks (Career, Entrepreneurship, Leadership, Certifications)
- Advanced content requiring prerequisites
- Industry certifications and credentials
- Self-paced with expert guidance

**Key Pages**: `/trail-of-mastery`

**LWC Conversion**: Use Salesforce learning paths and badges

---

### 4. Explorer's Journey (Authenticated)
**Target User**: Self-directed learners wanting flexible resource access

**Features**:
- Searchable resource library
- Category filtering
- Bookmark and save functionality
- Custom learning path creation

**Key Pages**: `/explorers-journey`

**LWC Conversion**: Integrate with Salesforce CMS and Knowledge base

---

### 5. Dashboard & Portal Pages

**Dashboard** (`/dashboard`)
- Progress overview
- Recent activity feed
- Upcoming events
- Quick links

**Partner Portal** (`/partner-portal`)
- Organization collaboration tools
- Resource sharing
- Impact analytics
- Referral network

**Academy Experience** (`/academy-experience`)
- Main portal landing
- Learning path overview
- Authentication gateway

## Integration Points

### External Services

#### 1. Jotform (Forms)
**Current**: Placeholder components with embed instructions
**Location**: `/src/components/integrations/JotformEmbed.tsx`
**Forms Needed**:
- Contact Us form (all users)
- Visitor Trail signup form
- Partner interest form

**LWC Migration**: Replace with Salesforce Web-to-Lead/Case or Lightning Forms

---

#### 2. Substack (Newsletter)
**Current**: Placeholder embed component
**Location**: `/src/components/integrations/SubstackEmbed.tsx`
**Features**: Newsletter subscription in footer

**LWC Migration**: Replace with Marketing Cloud integration

---

#### 3. Salesforce Authentication
**Current**: Placeholder buttons with target URLs
**Location**: `/src/components/integrations/SalesforceLogin.tsx`
**Login Types**:
- Digital Experience login (learners)
- Partner Portal login (organizations)

**LWC Migration**: Use Experience Cloud built-in authentication

---

#### 4. Salesforce CMS
**Current**: Placeholder `CMSRegion` components
**Location**: `/src/components/cms/CMSRegion.tsx`
**Content Regions**: 15+ marked regions across all pages

**LWC Migration**: Wire adapters to Salesforce CMS content

## File Structure

```
/
├── src/
│   ├── components/
│   │   ├── layout/
│   │   │   └── SiteLayout.tsx             # Main layout wrapper
│   │   ├── navigation/
│   │   │   ├── MainNav.tsx                # Primary navigation
│   │   │   └── Footer.tsx                 # Site footer
│   │   ├── ui/
│   │   │   ├── Button.tsx                 # SLDS-style button
│   │   │   ├── Card.tsx                   # Card container
│   │   │   └── Container.tsx              # Max-width wrapper
│   │   ├── cms/
│   │   │   └── CMSRegion.tsx              # CMS content placeholders
│   │   └── integrations/
│   │       ├── JotformEmbed.tsx           # Form integration
│   │       ├── SubstackEmbed.tsx          # Newsletter integration
│   │       └── SalesforceLogin.tsx        # Auth integration
│   ├── pages/
│   │   ├── Home/HomePage.tsx              # Landing page
│   │   ├── VisitorsTrail/                 # Visitor trail pages
│   │   ├── GuidedTrail/                   # Guided trail pages
│   │   ├── TrailOfMastery/                # Mastery track pages
│   │   ├── ExplorersJourney/              # Explorer pages
│   │   ├── About/AboutPage.tsx            # About organization
│   │   ├── ContactUs/ContactUsPage.tsx    # Contact form
│   │   ├── SignIn/SignInPage.tsx          # Auth portal
│   │   ├── Dashboard/DashboardPage.tsx    # User dashboard
│   │   ├── PartnerPortalLanding/          # Partner pages
│   │   └── AcademyExperienceLanding/      # Academy portal
│   ├── styles/
│   │   ├── global.css                     # Global styles
│   │   └── tokens.css                     # Design tokens
│   ├── utils/
│   │   └── index.ts                       # Utility functions
│   ├── App.tsx                            # Main app with routing
│   └── index.tsx                          # Entry point
├── public/                                # Static assets
├── docs/                                  # Documentation
│   ├── QUICK_START.md                     # Getting started guide
│   ├── DEPLOYMENT.md                      # Deployment instructions
│   ├── PROJECT_OVERVIEW.md                # This file
│   ├── development/
│   │   └── lwc-conversion-guide.md        # LWC conversion guide
│   ├── testing/                           # Testing documentation
│   └── workflow/                          # Workflow templates
├── guidelines/                            # Design & dev guidelines
├── design/                                # Design assets
├── index.html                             # HTML entry point
├── package.json                           # Dependencies
├── tsconfig.json                          # TypeScript config
├── tailwind.config.js                     # Tailwind config
├── vite.config.ts                         # Vite config
└── README.md                              # Project readme
```

## Development Workflow

### Local Development
```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run in parallel terminal
npm run test  # Watch mode for tests
```

### Building
```bash
# Production build
npm run build

# Preview build
npm run preview
```

### Code Quality
```bash
# Lint code
npm run lint

# Type check
npx tsc --noEmit
```

## Documentation

### For Developers
- **[Quick Start Guide](./QUICK_START.md)**: Get up and running in minutes
- **[LWC Conversion Guide](./development/lwc-conversion-guide.md)**: Step-by-step conversion instructions
- **[Deployment Guide](./DEPLOYMENT.md)**: Deploy to production

### For Stakeholders
- **[README.md](../README.md)**: Project overview and features
- **[PROJECT_STATUS.md](../PROJECT_STATUS.md)**: Current status and deliverables
- **[Branch Documentation](./workflow/branch-documentation-guide.md)**: Workflow templates

### For Designers
- **Design Tokens**: `/src/styles/tokens.css`
- **Component Library**: `/src/components/ui/`
- **Page Templates**: `/src/pages/`

## Next Steps

### Immediate (Before PR)
1. ✅ Complete all React components
2. ✅ Write comprehensive documentation
3. ✅ Test all user journeys
4. ✅ Verify mobile responsiveness
5. ⏳ Create pull request for TTA-137

### Short Term (Post-Merge)
1. Gather stakeholder feedback on prototype
2. Refine design based on feedback
3. Begin LWC conversion planning
4. Set up Salesforce sandbox for development
5. Create CMS content structure

### Medium Term
1. Convert components to LWC
2. Integrate with Salesforce CMS
3. Configure authentication
4. Set up form integrations
5. Deploy to sandbox for testing

### Long Term
1. User acceptance testing
2. Performance optimization
3. Production deployment
4. User onboarding and training
5. Analytics and iteration

## Success Metrics

### Technical Metrics
- ✅ Page load time < 3 seconds
- ✅ Mobile-responsive across all breakpoints
- ✅ Accessibility score > 90 (Lighthouse)
- ✅ Zero console errors in production build
- ✅ TypeScript strict mode enabled

### User Experience Metrics
- Clear navigation between all learning paths
- Intuitive form submissions
- Responsive mobile experience
- Fast page transitions
- Accessible to screen readers

### Code Quality Metrics
- All components properly typed
- Consistent naming conventions
- Clear component documentation
- LWC conversion comments
- Reusable component patterns

## Risk Assessment

### Technical Risks
- **LWC Conversion Complexity**: Mitigated by LWC-friendly architecture
- **Integration Challenges**: Mitigated by clear placeholder components
- **Performance**: Mitigated by lazy loading and optimization
- **Browser Compatibility**: Mitigated by modern build tooling

### Project Risks
- **Scope Creep**: Managed by clear requirements and phased approach
- **Timeline**: Realistic estimates with buffer for LWC conversion
- **Resource Availability**: Documentation enables team handoffs
- **Stakeholder Alignment**: Regular demos and feedback loops

## Team & Contacts

### Development Team
- **Lead Developer**: [Your Name]
- **Frontend Developers**: React prototype team
- **Salesforce Developers**: LWC conversion team
- **QA Team**: Testing and validation

### Stakeholders
- **Product Owner**: Transition Trails leadership
- **UX/UI Designer**: Design team
- **Content Manager**: CMS content team
- **Partner Relations**: Partner portal features

### Support
- **Technical Support**: dev@transitiontrails.org
- **General Inquiries**: support@transitiontrails.org
- **Partnership**: partners@transitiontrails.org

## Resources

### Internal
- **Linear Issue**: [TTA-137](https://linear.app/issue/TTA-137)
- **GitHub Repository**: [Link to repo]
- **Figma Designs**: [Link to Figma]
- **Project Documentation**: `/docs`

### External
- **React Documentation**: https://react.dev
- **Salesforce LWC Docs**: https://developer.salesforce.com/docs/component-library/documentation/en/lwc
- **Experience Cloud Docs**: https://help.salesforce.com/s/articleView?id=sf.community_designer_overview.htm
- **Tailwind CSS**: https://tailwindcss.com
- **SLDS**: https://www.lightningdesignsystem.com

## Changelog

### Version 0.1.0 - November 24, 2024
- Initial React prototype complete
- All four learning trails implemented
- Complete navigation and routing
- Integration placeholders added
- CMS regions marked
- Comprehensive documentation written
- Mobile-responsive design implemented
- Ready for stakeholder review

---

**Project Status**: ✅ Complete and ready for PR

**Next Milestone**: TTA-137 Pull Request → Stakeholder Review → LWC Conversion Planning

**Questions?** Contact the development team or review the documentation in `/docs`
