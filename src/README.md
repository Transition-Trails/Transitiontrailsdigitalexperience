# Transition Trails Digital Experience

A Salesforce Experience Cloud site built with React components, designed for future Lightning Web Component (LWC) conversion.

## Project Overview

The Transition Trails Digital Experience is a comprehensive learning platform supporting military transitions through four distinct learning paths:

- **Visitor Trail**: Entry-level exploration (no account required)
- **Guided Trail**: Structured learning with mentorship
- **Trail of Mastery**: Advanced specialization tracks
- **Explorer's Journey**: Self-directed resource discovery

## Architecture

### Technology Stack
- **Frontend**: React 18 + TypeScript
- **Styling**: TailwindCSS with SLDS-inspired design tokens
- **Build Tool**: Vite
- **Routing**: React Router v6

### Project Structure
```
/
├── src/
│   ├── components/
│   │   ├── layout/          # SiteLayout wrapper
│   │   ├── navigation/      # MainNav, Footer
│   │   ├── ui/              # Reusable UI components (Button, Card, etc.)
│   │   ├── cms/             # CMS region placeholders
│   │   └── integrations/    # Jotform, Substack, Salesforce login
│   ├── pages/               # Page components for each route
│   ├── styles/              # Global styles and design tokens
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app component with routing
│   └── index.tsx            # Entry point
├── public/
├── docs/                    # Documentation
├── guidelines/              # Design and development guidelines
├── design/                  # Design assets and specifications
└── index.html               # HTML entry point
```

## Getting Started

### Prerequisites
- Node.js 18+ and npm
- Git

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Run tests
npm test
```

The development server will start at `http://localhost:5173`

## Key Features

### LWC-Ready Architecture
All components are structured for easy conversion to Lightning Web Components:

- Single-responsibility components
- SLDS-inspired class patterns
- Clear separation of concerns
- CMS region markers for content integration

### Integration Points

#### Jotform
- Contact Us form
- Visitor Trail signup form
- Replace placeholders with actual Jotform embed codes

#### Substack
- Newsletter subscription in footer
- Replace with actual Substack embed or Marketing Cloud integration

#### Salesforce Authentication
- Digital Experience login link
- Partner Portal login link
- OAuth flow placeholders ready for Salesforce integration

#### CMS Regions
All CMS regions are marked with `data-region` attributes and `CMSRegion` components for easy Salesforce CMS integration.

## Design System

### Design Tokens
Located in `/src/styles/tokens.css`:

- **Colors**: SLDS-inspired palette with primary, secondary, and semantic colors
- **Typography**: System font stack with Salesforce Sans fallback
- **Spacing**: Consistent scale (4px base unit)
- **Shadows**: Four elevation levels
- **Border Radius**: Three size options

### Component Library

#### Layout Components
- `SiteLayout`: Main page wrapper with header and footer
- `Container`: Max-width content container

#### UI Components
- `Button`: Multiple variants (primary, secondary, outline, ghost, destructive)
- `Card`: Flexible card container with header, content, and footer subcomponents
- `CMSRegion`: Placeholder for Salesforce CMS content

#### Integration Components
- `JotformEmbed`: Jotform form embeds
- `SubstackEmbed`: Newsletter subscription
- `SalesforceLogin`: Authentication links

## Routes

| Path | Component | Description |
|------|-----------|-------------|
| `/` | HomePage | Main landing page |
| `/visitors-trail` | VisitorsTrailPage | Entry-level learning path |
| `/guided-trail` | GuidedTrailPage | Structured learning with mentorship |
| `/trail-of-mastery` | TrailOfMasteryPage | Advanced specialization |
| `/explorers-journey` | ExplorersJourneyPage | Self-directed discovery |
| `/about` | AboutPage | Organization information |
| `/contact-us` | ContactUsPage | Contact form and information |
| `/sign-in` | SignInPage | Authentication portal |
| `/dashboard` | DashboardPage | User dashboard |
| `/partner-portal` | PartnerPortalLandingPage | Partner organization portal |
| `/academy-experience` | AcademyExperienceLandingPage | Main academy portal |

## LWC Conversion Guide

### Converting Components to LWC

1. **Component Structure**
   ```javascript
   // React component
   export const Button: React.FC<ButtonProps> = ({ variant, children }) => {
     return <button className={...}>{children}</button>
   }

   // LWC equivalent
   // button.html
   <template>
     <button class={computedClass}><slot></slot></button>
   </template>

   // button.js
   import { LightningElement, api } from 'lwc';
   export default class Button extends LightningElement {
     @api variant;
     get computedClass() { ... }
   }
   ```

2. **CMS Integration**
   Replace `<CMSRegion>` components with `<cms:contentReference>` or wire adapters

3. **Authentication**
   Replace authentication links with Salesforce Community navigation

4. **Forms**
   Replace Jotform with Salesforce Forms or custom LWC forms

### Deployment to Salesforce

1. Convert React components to LWC
2. Upload design tokens as static resources
3. Configure Experience Cloud site with LWC components
4. Map routes to Experience Cloud pages
5. Integrate Salesforce CMS content
6. Configure authentication and user management

## Development Guidelines

### Code Style
- Use TypeScript for type safety
- Follow React functional component patterns
- Use Tailwind utility classes
- Leverage CSS custom properties for theming

### Component Guidelines
- Keep components small and focused
- Use composition over inheritance
- Implement proper prop typing
- Add comments for LWC conversion guidance

### Testing
- Write unit tests for utility functions
- Test component rendering and interactions
- Test responsive behavior

## Contributing

1. Create a feature branch from `main`
2. Make changes following the coding guidelines
3. Test your changes thoroughly
4. Submit a pull request with clear description

## License

Proprietary - Transition Trails Academy

## Support

For questions or support:
- Email: support@transitiontrails.org
- Documentation: See `/docs` directory
- Issues: Use GitHub Issues for bug reports

## Future Roadmap

- [ ] Complete Salesforce CMS integration
- [ ] Implement authentication with Salesforce Identity
- [ ] Convert all components to LWC
- [ ] Add analytics tracking
- [ ] Implement real-time progress tracking
- [ ] Build mentor matching system
- [ ] Create mobile app with React Native

---

**Built with ❤️ for veterans by veterans**
