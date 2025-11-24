# Linear + Git Workflow Guide

This document outlines the workflow for connecting Linear issues to git branches and pull requests in the Transition Trails Digital Experience project.

## Overview

Linear integrates with GitHub to automatically link issues, branches, commits, and pull requests, providing seamless project tracking throughout the development lifecycle.

## Setup

### 1. Enable Linear GitHub Integration

1. In Linear: **Settings** → **Integrations** → **GitHub**
2. Authorize Linear to access your GitHub account
3. Select the Transition Trails repository
4. Configure automation rules:
   - PR opened → Move issue to "In Progress"
   - PR merged → Move issue to "Done"
   - PR closed without merge → Keep current status

### 2. Configure Team Settings

In Linear, ensure your team has:
- Unique team identifier (e.g., `TT` for Transition Trails)
- Clear workflow states (Backlog, Todo, In Progress, In Review, Done)
- Labels for different trail types (Visitor, Guided, Mastery, Explorer, etc.)

## Workflow

### Step 1: Pick an Issue from Linear

1. Go to Linear and select an issue to work on
2. Assign it to yourself
3. Move it to "In Progress" status
4. Note the issue identifier (e.g., `TT-123`)

### Step 2: Create a Branch

Linear provides a suggested branch name in each issue. Use it:

```bash
# Click "Copy git branch name" in Linear, then:
git checkout -b TT-123-implement-visitor-trail

# Or create your own following the pattern:
git checkout -b <ISSUE-ID>-brief-description
```

**Branch Naming Convention:**
- Start with the Linear issue ID
- Use lowercase and hyphens
- Keep it brief but descriptive
- Examples:
  - `TT-123-add-hero-section`
  - `TT-124-fix-navigation-routing`
  - `TT-125-refactor-design-tokens`

### Step 3: Make Your Changes

Work on your changes locally, following the project structure:

```
src/frontend/src/
├── components/     # Reusable components
├── pages/          # Page-level components
├── styles/         # Global styles and tokens
└── utils/          # Utility functions
```

### Step 4: Commit Your Changes

Reference the Linear issue in every commit:

```bash
# Standard commit
git commit -m "TT-123: Add hero section to visitor trail page"

# Bug fix that completes the issue
git commit -m "Fixes TT-123: Resolve navigation context error"

# Multiple changes
git commit -m "TT-123: Implement design system tokens

- Add CSS custom properties for colors
- Update typography scale
- Add spacing utilities"
```

**Commit Message Format:**
```
<ISSUE-ID>: <Brief description>

[Optional detailed description]
[Optional bullet points for complex changes]
```

**Keywords for Auto-Status Updates:**
- `Fixes TT-123` - Marks issue complete when PR merges
- `Closes TT-123` - Same as Fixes
- `Resolves TT-123` - Same as Fixes

### Step 5: Push Your Branch

```bash
git push origin TT-123-implement-visitor-trail
```

Linear will automatically:
- Detect the branch
- Link it to the issue
- Show the branch name in the issue details

### Step 6: Create a Pull Request

1. Go to GitHub and create a new pull request
2. Use the PR template to fill in details
3. Reference the Linear issue in the description:

```markdown
## Description
Implements the Visitor Trail landing page with hero section and CMS regions

## Linear Issue
Fixes: TT-123

## Changes Made
- Created VisitorsTrailPage component
- Added responsive hero section
- Integrated design tokens
- Marked CMS region placeholders
```

4. Request reviews from team members
5. Linear will automatically:
   - Link the PR to the issue
   - Update issue status to "In Review" (if configured)
   - Show PR status in Linear

### Step 7: Code Review & Merge

1. Address review comments
2. Push updates to the same branch
3. Once approved, merge the PR
4. Linear will automatically:
   - Mark the issue as "Done" (if using `Fixes`/`Closes`/`Resolves`)
   - Archive the branch link
   - Update the issue timeline

### Step 8: Clean Up

```bash
# Switch back to main
git checkout main

# Pull latest changes
git pull origin main

# Delete local branch
git branch -d TT-123-implement-visitor-trail

# GitHub will automatically delete the remote branch if configured
```

## Best Practices

### Branch Management

- **One branch per issue** - Keep changes focused
- **Keep branches short-lived** - Merge within 2-3 days when possible
- **Sync regularly** - Pull from main frequently to avoid conflicts
- **Delete after merge** - Keep repository clean

### Commit Practices

- **Atomic commits** - One logical change per commit
- **Descriptive messages** - Explain "what" and "why", not "how"
- **Reference issues** - Always include the Linear issue ID
- **Commit frequently** - Small, regular commits are easier to review

### Pull Request Guidelines

- **Small PRs** - Easier to review and less likely to have conflicts
- **Complete the template** - Helps reviewers understand context
- **Self-review first** - Check your own changes before requesting review
- **Update documentation** - Include doc changes in the same PR
- **Verify LWC compatibility** - Ensure components can be converted later

## Linear Issue Workflow States

```
Backlog → Todo → In Progress → In Review → Done
```

- **Backlog**: Issues not yet prioritized
- **Todo**: Ready to be worked on
- **In Progress**: Active development (branch created)
- **In Review**: PR open and under review
- **Done**: PR merged and issue complete

## Automation Examples

### Example 1: Bug Fix

```bash
# Create branch from Linear
git checkout -b TT-456-fix-mobile-nav

# Make changes
git add .
git commit -m "Fixes TT-456: Fix mobile navigation overlay z-index"

# Push and create PR
git push origin TT-456-fix-mobile-nav
```

When PR is merged:
- Linear automatically moves TT-456 to "Done"
- Issue is marked complete
- Branch link is archived

### Example 2: Feature Development

```bash
# Create branch
git checkout -b TT-789-dashboard-widgets

# Multiple commits during development
git commit -m "TT-789: Add dashboard layout component"
git commit -m "TT-789: Implement widget grid system"
git commit -m "TT-789: Add placeholder widgets"

# Push and create PR
git push origin TT-789-dashboard-widgets
```

In PR description:
```markdown
Closes: TT-789
```

When merged:
- Issue automatically moves to "Done"
- All commits are linked to the issue
- Timeline shows complete development history

## Troubleshooting

### Issue Not Linking to Branch

**Problem**: Branch doesn't appear in Linear issue

**Solutions**:
1. Verify branch name starts with correct issue ID
2. Check GitHub integration is active in Linear settings
3. Push the branch to remote (Linear only detects remote branches)
4. Manually link in Linear: Issue → "Git branches" → "Link branch"

### PR Not Updating Issue Status

**Problem**: Merged PR doesn't auto-complete issue

**Solutions**:
1. Check PR description includes `Fixes`, `Closes`, or `Resolves` keyword
2. Verify automation rules in Linear settings
3. Manually update issue status if automation is disabled
4. Check that PR was merged (not just closed)

### Multiple Issues in One PR

**Problem**: Need to reference multiple Linear issues

**Solution**:
```markdown
## Linear Issues
Fixes: TT-123
Relates to: TT-124, TT-125
```

Only issues with `Fixes`/`Closes`/`Resolves` will auto-complete.

## Quick Reference

### Branch Name Pattern
```
<ISSUE-ID>-brief-description
TT-123-add-contact-form
```

### Commit Message Pattern
```
<ISSUE-ID>: Brief description

Detailed description (optional)
```

### PR Keywords
- `Fixes TT-123` - Auto-complete issue
- `Closes TT-123` - Auto-complete issue  
- `Resolves TT-123` - Auto-complete issue
- `Relates to TT-123` - Link without completing

## Additional Resources

- [Linear Git Integration Docs](https://linear.app/docs/github)
- [GitHub Flow Guide](https://guides.github.com/introduction/flow/)
- [Conventional Commits](https://www.conventionalcommits.org/)
- [Git Command Cheatsheet](./git-cheatsheet.md) {/* Quick reference for common git commands */}