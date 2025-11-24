# Branch Documentation Guide

This guide explains how to document your work when creating branches and pull requests for the Transition Trails Digital Experience project.

---

## When to Create Documentation Files

### Major Feature Branches (Always Document)
- Initial prototypes or major milestones
- New subsystem implementations
- Major architectural changes
- Multi-page feature rollouts
- Design system overhauls

**Recommended Files:**
- `PROJECT_STATUS.md` or `FEATURE_STATUS_[feature-name].md`
- Optional: `CHAT_SESSION_[date].md` if AI-assisted

### Medium Feature Branches (Optional Documentation)
- Single page implementations
- Component library additions
- Integration implementations
- Significant refactoring

**Recommended Files:**
- Brief summary in PR description (use template)
- Optional: `IMPLEMENTATION_NOTES_[feature-name].md` for complex logic

### Bug Fixes & Minor Changes (No Additional Files Needed)
- Bug fixes
- Copy/content updates
- Styling tweaks
- Documentation corrections

**Recommended Approach:**
- Use PR template only
- Detailed commit messages
- Screenshots in PR if visual changes

---

## Documentation Templates

### Template 1: PROJECT_STATUS.md (Major Milestones)

Use for: Initial implementations, major features, releases

```markdown
# Project Status: [Feature/Milestone Name]

**Linear Issue:** TTA-XXX  
**Branch:** `feature/tta-xxx-brief-description`  
**Date:** [Date]  
**Status:** Ready for Review  

---

## Summary

[2-3 sentence overview of what's being delivered]

## What's Being Pushed

### Core Changes
- ✅ [Major change 1]
- ✅ [Major change 2]
- ✅ [Major change 3]

### Components Added/Modified
List components with brief descriptions

### Documentation Updates
List documentation changes

### Technical Details
- Stack/dependencies used
- Configuration changes
- Build/deploy notes

## File Statistics
- Files Added: X
- Files Modified: Y
- Components Created: Z

## Testing Coverage
- [ ] Unit tests
- [ ] Integration tests
- [ ] Manual testing performed

## How to Review This PR

### Setup
```bash
git checkout [branch-name]
cd src/frontend
npm install
npm run dev
```

### Review Checklist
- [ ] Feature works as expected
- [ ] No console errors
- [ ] Responsive design verified
- [ ] Documentation accurate
- [ ] Code follows conventions

### Test Scenarios
1. [Scenario 1]
2. [Scenario 2]
3. [Scenario 3]

## Known Issues / Future Work
- [ ] [Item 1]
- [ ] [Item 2]

## Success Metrics
✅ [What was accomplished]

---

**Linear Issue:** [TTA-XXX](linear-link)
```

### Template 2: IMPLEMENTATION_NOTES.md (Complex Features)

Use for: Complex algorithms, integrations, non-obvious implementations

```markdown
# Implementation Notes: [Feature Name]

**Linear Issue:** TTA-XXX  
**Date:** [Date]  
**Author:** [Your Name]

---

## Overview

[What this feature does and why]

## Technical Approach

### Architecture Decisions
1. **Decision:** [What you decided]
   - **Rationale:** [Why you chose this approach]
   - **Alternatives Considered:** [Other options]

### Key Implementation Details

#### [Component/Module 1]
- **Purpose:** [What it does]
- **How it works:** [Explanation]
- **Important notes:** [Gotchas, edge cases]

#### [Component/Module 2]
- **Purpose:** 
- **How it works:** 
- **Important notes:** 

### Code Organization
```
feature-directory/
├── ComponentA.tsx    # [Description]
├── ComponentB.tsx    # [Description]
└── utils/
    └── helper.ts     # [Description]
```

## Integration Points

### Salesforce
- [How this integrates with SF]

### External APIs
- [API integrations]

### Other Components
- [Dependencies on other parts of codebase]

## Testing Approach

### Unit Tests
- [What's tested]

### Manual Testing
- [How to manually verify]

## Future Enhancements
- [ ] [Potential improvement 1]
- [ ] [Potential improvement 2]

## References
- [Links to docs, Figma, Linear, etc.]
```

### Template 3: CHAT_SESSION.md (AI-Assisted Work)

Use for: When working with AI to capture decision-making process

```markdown
# Chat Session: [Brief Description]

**Date:** [Date]  
**Session Topic:** [What you worked on]  
**Linear Issue:** [TTA-XXX](linear-link)  
**GitHub Branch:** [branch-link]

---

## Session Context

### Background
[What led to this work]

### Current Situation
[State at start of session]

---

## Problem Statement

**Goal:**
> [What you wanted to accomplish]

**Challenges:**
- [Challenge 1]
- [Challenge 2]

---

## Solution Implemented

### Approach
[How the problem was solved]

### Key Decisions
1. **Decision:** [What]
   - **Reasoning:** [Why]
   - **Trade-offs:** [Considerations]

### Files Created/Modified
- `file1.tsx` - [Purpose]
- `file2.md` - [Purpose]

---

## Commands Used

```bash
# [Description]
git add [files]
git commit -m "TTA-XXX: [message]"
git push origin [branch]
```

---

## Outcome

✅ [Success metric 1]  
✅ [Success metric 2]  
⏳ [Follow-up needed]

---

## Notes for Future
- [Learnings]
- [Things to remember]
- [Patterns to reuse]
```

---

## Naming Conventions

### Documentation Files

**Project Status (Major Milestones)**
```
PROJECT_STATUS.md                           # For initial/major releases
PROJECT_STATUS_[version].md                 # For versioned releases
FEATURE_STATUS_[feature-name].md           # For specific features
```

**Implementation Notes**
```
IMPLEMENTATION_NOTES_[feature-name].md
IMPLEMENTATION_NOTES_[integration-name].md
```

**Chat Sessions**
```
CHAT_SESSION_[YYYY-MM-DD].md               # Single session
CHAT_SESSION_[YYYY-MM-DD]_[topic].md       # Multiple sessions same day
```

**Migration/Conversion Docs**
```
MIGRATION_NOTES_[what-to-what].md
CONVERSION_GUIDE_[react-to-lwc].md
```

### Placement in Repository

```
project-root/
├── PROJECT_STATUS.md                    # Major milestones (root level)
├── CHAT_SESSION_*.md                    # AI sessions (root level)
├── docs/
│   ├── implementation/                  # Implementation notes
│   │   ├── [feature-name].md
│   │   └── [integration-name].md
│   ├── migrations/                      # Migration guides
│   │   └── [migration-name].md
│   └── sessions/                        # Historical chat sessions
│       └── archived/
│           └── CHAT_SESSION_*.md
└── src/
```

---

## Workflow: When to Create What

### Scenario 1: Major Feature (e.g., New Trail Implementation)

**Branch:** `feature/tta-150-visitor-trail-complete-experience`

**Create:**
1. `FEATURE_STATUS_visitor-trail.md` - Status document
2. Optional: `CHAT_SESSION_[date].md` if AI-assisted
3. Update main `README.md` if needed

**Push:**
```bash
git add FEATURE_STATUS_visitor-trail.md
git commit -m "TTA-150: Add visitor trail status documentation"
git push origin feature/tta-150-visitor-trail-complete-experience
```

---

### Scenario 2: Complex Integration (e.g., Salesforce CMS)

**Branch:** `feature/tta-175-salesforce-cms-integration`

**Create:**
1. `IMPLEMENTATION_NOTES_salesforce-cms.md` - Technical details
2. Update `/docs/integrations/salesforce-cms.md` - User-facing docs
3. Optional: Chat session if needed

**Push:**
```bash
git add IMPLEMENTATION_NOTES_salesforce-cms.md docs/integrations/salesforce-cms.md
git commit -m "TTA-175: Add Salesforce CMS integration documentation"
git push origin feature/tta-175-salesforce-cms-integration
```

---

### Scenario 3: Bug Fix (e.g., Navigation Issue)

**Branch:** `fix/tta-200-mobile-nav-overlay`

**Create:**
- Nothing extra! Use PR template only

**Commit:**
```bash
git commit -m "Fixes TTA-200: Fix mobile navigation z-index on iOS Safari

- Updated z-index from 40 to 50
- Added webkit-specific styles for Safari
- Tested on iPhone 12, 13, 14"
```

---

### Scenario 4: Component Library Addition

**Branch:** `feature/tta-225-add-video-player-component`

**Create:**
1. Update `/design/components.md` - Add component documentation
2. Optional: Brief implementation notes if complex

**Commit:**
```bash
git commit -m "TTA-225: Add video player component

- Created VideoPlayer.tsx with props for URL, autoplay, controls
- Added to component library documentation
- Includes accessibility features (captions, keyboard controls)
- Prepared for LWC conversion"
```

---

## Best Practices

### DO ✅

- **Create documentation for major features** - Future you will thank you
- **Use templates** - Consistency helps reviewers
- **Link to Linear** - Always include issue reference
- **Include test instructions** - Help reviewers verify your work
- **Capture decisions** - Document *why* not just *what*
- **Keep it concise** - Bullet points > paragraphs
- **Update as you go** - Don't wait until the end

### DON'T ❌

- **Don't over-document small changes** - Bug fixes don't need PROJECT_STATUS.md
- **Don't duplicate** - If it's in code comments, don't repeat verbatim
- **Don't write novels** - Keep it scannable
- **Don't forget to commit docs** - Push them with your code
- **Don't leave placeholders** - Complete the docs or omit them

---

## Automation Ideas

### Git Hooks (Future Enhancement)

Create `.git/hooks/pre-push` to remind about documentation:

```bash
#!/bin/bash
# Check if branch is a feature branch
BRANCH=$(git rev-parse --abbrev-ref HEAD)

if [[ $BRANCH == feature/* ]]; then
  # Check if PROJECT_STATUS.md or similar exists
  if ! git diff --name-only origin/main... | grep -q "STATUS\|NOTES\|SESSION"; then
    echo "⚠️  Reminder: Consider adding documentation for this feature branch"
    echo "   - PROJECT_STATUS.md for major features"
    echo "   - IMPLEMENTATION_NOTES.md for complex implementations"
    echo "   - CHAT_SESSION.md for AI-assisted work"
    echo ""
    read -p "Continue push anyway? (y/n) " -n 1 -r
    echo
    if [[ ! $REPLY =~ ^[Yy]$ ]]; then
      exit 1
    fi
  fi
fi
```

### Linear Template (Future Enhancement)

Create Linear issue templates that include documentation requirements:

```markdown
## Acceptance Criteria
- [ ] Feature implemented
- [ ] Tests written
- [ ] Documentation added (if major feature)
- [ ] PR created with proper template

## Documentation Required
- [ ] N/A - Small change
- [ ] PR template only
- [ ] IMPLEMENTATION_NOTES.md
- [ ] PROJECT_STATUS.md or FEATURE_STATUS.md
```

---

## Quick Decision Tree

```
Is this a major milestone or initial implementation?
├─ YES → Create PROJECT_STATUS.md + optional CHAT_SESSION.md
└─ NO
   └─ Is this a complex feature or integration?
      ├─ YES → Create IMPLEMENTATION_NOTES.md
      └─ NO
         └─ Is this a bug fix or minor change?
            ├─ YES → Use PR template only
            └─ NO → Use best judgment, err on side of more docs
```

---

## Examples from This Project

### Example 1: Initial Prototype (TTA-137)
✅ **Created:**
- `PROJECT_STATUS.md` - Comprehensive milestone documentation
- `CHAT_SESSION_2024-11-24.md` - AI session notes

✅ **Appropriate because:**
- Major milestone (initial prototype)
- 100+ files added
- Foundation for entire project
- Reviewers need full context

### Example 2: Linear Workflow Setup (TTA-135)
✅ **Created:**
- Updated `/docs/workflow/linear-git-workflow.md`
- Created `/docs/workflow/git-cheatsheet.md`
- Created `/PULL_REQUEST_TEMPLATE.md`

✅ **Appropriate because:**
- New workflow affecting whole team
- Reference documentation needed
- Onboarding material

### Example 3: Future Bug Fix (TTA-XXX - hypothetical)
✅ **Would create:**
- Nothing extra, just PR with good description

✅ **Appropriate because:**
- Small, focused change
- PR template provides enough context
- No need for separate docs

---

## Summary

### Quick Reference

| Change Type | Documentation | Where |
|-------------|--------------|-------|
| Major milestone | PROJECT_STATUS.md | Root |
| Complex feature | IMPLEMENTATION_NOTES.md | Root or docs/implementation/ |
| AI-assisted work | CHAT_SESSION.md | Root or docs/sessions/ |
| Integration | Update docs/integrations/ | docs/integrations/ |
| Component | Update design/components.md | design/ |
| Bug fix | PR template only | N/A |
| Minor change | PR template only | N/A |

### Golden Rule

**When in doubt, add brief documentation.** It's easier to have too much context than too little, but keep it concise and scannable.

---

## Maintaining This Pattern

- Review this guide quarterly
- Update templates based on team feedback
- Archive old CHAT_SESSION files periodically
- Keep examples relevant and up-to-date
- Adjust based on what actually helps reviewers

---

**This is a living document.** Update it as the team discovers better practices!
