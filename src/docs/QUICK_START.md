# Quick Start Guide

Get the Transition Trails Digital Experience prototype up and running in minutes.

## Prerequisites

Ensure you have the following installed:
- **Node.js** 18.x or higher
- **npm** 9.x or higher  
- **Git**

Check your versions:
```bash
node --version  # Should be v18.x or higher
npm --version   # Should be 9.x or higher
```

## Installation

### 1. Clone the Repository

```bash
git clone <repository-url>
cd transition-trails-digital-experience
```

### 2. Install Dependencies

```bash
npm install
```

This will install all required packages including:
- React & React DOM
- TypeScript
- Vite
- TailwindCSS
- React Router
- Lucide React (icons)

### 3. Start Development Server

```bash
npm run dev
```

The application will start at `http://localhost:5173`

## Project Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server with hot reload |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run ESLint to check code quality |
| `npm test` | Run test suite |

## Project Structure

```
transition-trails-digital-experience/
├── src/
│   ├── components/          # Reusable components
│   │   ├── layout/          # Layout wrappers (SiteLayout)
│   │   ├── navigation/      # Navigation components (MainNav, Footer)
│   │   ├── ui/              # UI primitives (Button, Card, Container)
│   │   ├── cms/             # CMS region components
│   │   └── integrations/    # Third-party integrations
│   ├── pages/               # Page components
│   │   ├── Home/
│   │   ├── VisitorsTrail/
│   │   ├── GuidedTrail/
│   │   ├── TrailOfMastery/
│   │   ├── ExplorersJourney/
│   │   ├── About/
│   │   ├── ContactUs/
│   │   ├── SignIn/
│   │   ├── Dashboard/
│   │   ├── PartnerPortalLanding/
│   │   └── AcademyExperienceLanding/
│   ├── styles/              # Global styles and design tokens
│   ├── utils/               # Utility functions
│   ├── App.tsx              # Main app with routing
│   └── index.tsx            # Entry point
├── public/                  # Static assets
├── docs/                    # Documentation
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── tailwind.config.js       # Tailwind configuration
└── vite.config.ts           # Vite configuration
```

## Exploring the Application

### Available Routes

Once the dev server is running, visit these URLs:

| URL | Description |
|-----|-------------|
| `http://localhost:5173/` | Home page |
| `.../visitors-trail` | Visitor Trail (no login required) |
| `.../guided-trail` | Guided Trail (structured learning) |
| `.../trail-of-mastery` | Trail of Mastery (advanced tracks) |
| `.../explorers-journey` | Explorer's Journey (self-directed) |
| `.../about` | About page |
| `.../contact-us` | Contact page with form |
| `.../sign-in` | Sign-in portal |
| `.../dashboard` | User dashboard |
| `.../partner-portal` | Partner portal landing |
| `.../academy-experience` | Academy landing page |

### Key Features to Explore

1. **Navigation**: Click through the different learning trails
2. **Responsive Design**: Resize your browser to see mobile/tablet layouts
3. **CMS Regions**: Look for placeholder regions marked for future Salesforce CMS content
4. **Integration Placeholders**: Contact forms, newsletter signups, and login links
5. **Component Library**: Check out reusable components in `src/components/ui/`

## Making Changes

### Adding a New Page

1. Create a new directory in `src/pages/`:
   ```bash
   mkdir src/pages/NewPage
   ```

2. Create the page component:
   ```typescript
   // src/pages/NewPage/NewPage.tsx
   import React from 'react';
   import { SiteLayout } from '../../components/layout/SiteLayout';
   import { Container } from '../../components/ui/Container';

   export const NewPage: React.FC = () => {
     return (
       <SiteLayout>
         <Container>
           <h1>New Page</h1>
         </Container>
       </SiteLayout>
     );
   };
   ```

3. Add route in `src/App.tsx`:
   ```typescript
   import { NewPage } from './pages/NewPage/NewPage';

   // In the Routes component:
   <Route path="/new-page" element={<NewPage />} />
   ```

### Using UI Components

```typescript
import { Button } from '../../components/ui/Button';
import { Card, CardHeader, CardTitle, CardContent } from '../../components/ui/Card';

<Card>
  <CardHeader>
    <CardTitle>My Card</CardTitle>
  </CardHeader>
  <CardContent>
    <p>Card content goes here</p>
    <Button variant="primary">Click Me</Button>
  </CardContent>
</Card>
```

### Modifying Design Tokens

Edit `src/styles/tokens.css` to change colors, spacing, typography:

```css
:root {
  --color-primary: #0176D3;  /* Change primary color */
  --space-4: 1rem;            /* Change spacing */
  --font-heading: 'Your Font', sans-serif;  /* Change heading font */
}
```

## Development Tips

### Hot Reload
Vite provides instant hot module replacement. Save any file and see changes immediately in the browser.

### TypeScript
All components use TypeScript for type safety. If you see type errors, check:
```bash
npm run build  # TypeScript will show all errors
```

### Tailwind Intellisense
For VS Code, install the "Tailwind CSS IntelliSense" extension for autocomplete and class suggestions.

### Component Structure
Follow the LWC-friendly patterns already in place:
- Keep components small and focused
- Use props for configuration
- Avoid complex state management
- Add CMS region markers for future content

## Building for Production

```bash
# Create optimized production build
npm run build

# Preview the production build
npm run preview
```

The build output will be in the `dist/` directory.

## Troubleshooting

### Port Already in Use
If port 5173 is occupied:
```bash
npm run dev -- --port 3000  # Use a different port
```

### Module Not Found
Clear node_modules and reinstall:
```bash
rm -rf node_modules package-lock.json
npm install
```

### TypeScript Errors
Check `tsconfig.json` and ensure all imports are correct:
```bash
npx tsc --noEmit  # Type check without building
```

### Styling Issues
Clear Tailwind cache:
```bash
rm -rf node_modules/.vite
npm run dev
```

## Next Steps

1. **Read the Documentation**
   - `/docs/development/lwc-conversion-guide.md` - Converting to LWC
   - `/docs/testing/` - Testing strategies
   - `/docs/workflow/` - Development workflows

2. **Explore Components**
   - Review existing components in `src/components/`
   - Understand the design system in `src/styles/tokens.css`

3. **Customize for Your Needs**
   - Update branding and colors
   - Add organization-specific content
   - Integrate with actual APIs and services

4. **Plan LWC Conversion**
   - Review conversion guide
   - Set up Salesforce DX project
   - Begin converting components

## Getting Help

- **Documentation**: Check `/docs` directory
- **Code Comments**: Components include conversion guidance
- **Issues**: Use GitHub Issues for bugs and questions
- **Support**: Contact support@transitiontrails.org

## What's Next?

Once you're comfortable with the prototype:

1. Customize content and branding
2. Replace integration placeholders with real services
3. Add additional features as needed
4. Begin LWC conversion process
5. Deploy to Salesforce Experience Cloud

---

**Ready to start building? Run `npm run dev` and start exploring!** 🚀
