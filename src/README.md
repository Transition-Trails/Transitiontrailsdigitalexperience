# Transition Trails Digital Experience

## Overview
Transition Trails Digital Experience is a web application designed to support various user journeys (Visitor, Guided, Mastery, Explorer) through a comprehensive digital platform. This project serves as the frontend foundation, optimized for integration with Salesforce Experience Cloud and CMS.

## Repository Structure

```
transition-trails-digital-experience/
├── docs/               # Documentation for architecture, data models, and testing
├── design/             # Design tokens and component specifications
├── guidelines/         # UX and content guidelines
├── src/
│   └── frontend/       # React + Vite application source code
├── .github/
│   └── workflows/      # CI/CD workflows for automated testing
├── README.md           # This file
├── CONTRIBUTING.md     # Contribution guidelines
└── LICENSE             # License information
```

## Getting Started

### Prerequisites
- Node.js 20 or higher
- npm or yarn

### Running the Application

1. Navigate to the frontend directory:
   ```bash
   cd src/frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser to the URL shown in the terminal (typically `http://localhost:5173`)

### Running Tests

```bash
cd src/frontend
npm test
```

## Figma Make Integration
This frontend codebase is designed to be updated via Figma Make. 
- Figma frames are mapped to React pages in `src/frontend/src/pages/`.
- Design tokens in Figma correspond to CSS variables in `src/frontend/src/styles/tokens.css`.
- Component structures in Figma are reflected in `src/frontend/src/components/`.

## Salesforce Integration
This application is architected to be hosted or integrated within Salesforce Experience Cloud.
- **CMS**: Content regions are marked in the code and will be populated dynamically via Salesforce CMS APIs or LWC slots in the final implementation.
- **LWC Conversion**: React components are built with a structure that simplifies future extraction into Lightning Web Components (LWC).

## Project Documentation

- [Architecture Overview](./docs/architecture/overview.md)
- [Data Model](./docs/data-model/schema-overview.md)
- [Testing Strategy](./docs/testing/test-strategy.md)
- [Integration Guides](./docs/integrations/)
- [Linear + Git Workflow](./docs/workflow/linear-git-workflow.md) {/* New workflow guide */}
- [Design Tokens](./design/tokens.md)
- [Component Library](./design/components.md)
- [UX Guidelines](./guidelines/Guidelines.md)

## Development Workflow

This project uses Linear for issue tracking and GitHub for version control. See the [Linear + Git Workflow Guide](./docs/workflow/linear-git-workflow.md) for detailed instructions on:
- Creating branches from Linear issues
- Commit message conventions
- Pull request workflow
- Automatic issue status updates

**Quick Start:**
```bash
# 1. Get issue ID from Linear (e.g., TT-123)
# 2. Create branch
git checkout -b TT-123-brief-description

# 3. Make changes and commit
git commit -m "TT-123: Description of changes"

# 4. Push and create PR
git push origin TT-123-brief-description
```

## Contributing

Please read [CONTRIBUTING.md](./CONTRIBUTING.md) for details on our code of conduct and the process for submitting pull requests.

## License

See [LICENSE](./LICENSE) for details.