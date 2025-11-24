# Test Strategy

## Levels of Testing

### 1. Unit Testing (Frontend)
- **Tools**: Vitest / Jest
- **Scope**: Individual React components (Buttons, Cards), Utility functions.
- **Goal**: Ensure UI logic works in isolation.

### 2. Integration Testing
- **Tools**: React Testing Library
- **Scope**: Page flows, form submissions within the React app.
- **Goal**: Ensure components interact correctly.

### 3. End-to-End (E2E)
- **Tools**: Playwright or Selenium (future state)
- **Scope**: Full user journeys across the site.
- **Goal**: Verify critical paths (Sign In -> Dashboard -> Course).

### 4. Data Quality
- **Scope**: Salesforce data validation rules.
- **Goal**: Ensure data coming from frontend/Jotform meets schema requirements.
