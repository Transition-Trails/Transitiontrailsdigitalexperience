# Contributing to Transition Trails

## Branching Strategy
- **main**: Production-ready code.
- **develop**: Integration branch for ongoing development.
- **feature/**: Feature branches created from develop.

## Commit Conventions
We follow conventional commits:
- `feat: ...` for new features
- `fix: ...` for bug fixes
- `docs: ...` for documentation updates
- `chore: ...` for maintenance

## Working with Figma Make
1. Ensure Figma frames match the React page structure.
2. Use the specified `Frame` naming conventions in Figma.
3. When syncing, review changes to `tokens.css` and basic layout components.

## Local Development
1. Navigate to `src/frontend`:
   ```bash
   cd src/frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the dev server:
   ```bash
   npm run dev
   ```
4. Run tests:
   ```bash
   npm test
   ```

## Documentation
Add new architecture or testing documentation to the `docs/` folder. Update the index in `docs/README.md` if applicable.
