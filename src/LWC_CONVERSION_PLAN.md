# Lightning Web Component (LWC) Conversion Plan

**Status:** 11/48 Components Have LWC Available  
**Remaining:** 37 Components Need LWC Conversion  
**Linear Issue:** TTA-154  
**Date:** November 28, 2025

---

## Overview

The TTDS design system currently has **48 components** fully designed and documented in React. Of these, **11 components** have been converted to Lightning Web Components (LWC) for Salesforce integration, and **37 components** still require conversion.

---

## ✅ Components with LWC Available (11/48)

These components are **Salesforce Ready** and have been successfully converted:

### Primitives (4)
1. ✅ **Button** - All 5 variants (Primary, Secondary, Tertiary, Ghost, Danger)
2. ✅ **Checkbox** - Including indeterminate state
3. ✅ **Card** - Container with elevation variants
4. ✅ **Tag** - Category tags with multiple variants

### Panels (3)
5. ✅ **Learner Stats Panel** - Dashboard stats overview (Salesforce objects mapped)
6. ✅ **Goals & Progress Panel** - Goal tracking and progress (Salesforce objects mapped)
7. ✅ **Skills & Certifications Panel** - Skills display (Salesforce objects mapped)

### Cards (4)
8. ✅ **Partner Project Card** - Partner project showcase (Salesforce objects mapped)
9. ✅ **Event Card** - Event and session display (Salesforce objects mapped)
10. ✅ **Activity Card** - Learning activities and resources (Salesforce objects mapped)
11. ✅ **Assignment Card** - Assignment tracking (Salesforce objects mapped)

**Note:** 7 of these components also have Salesforce object mappings completed.

---

## 📝 Components Needing LWC Conversion (37/48)

### Priority 1: High-Impact Primitives (10 components)

These are fundamental UI elements used across the entire system:

1. **Text Input** - Standard text input with validation
2. **Text Area** - Multi-line text input
3. **Select Input** - Dropdown with search
4. **Search Input** - Search with icon and clear
5. **Radio** - Radio button groups
6. **Switch** - Toggle switches
7. **Panel** - Surface container
8. **Modal** ⭐ *Recently documented*
9. **Toast** ⭐ *Recently documented*
10. **Chip Status** - Status indicators

**Impact:** These are used in nearly every page and form. Converting these enables most user interactions.

---

### Priority 2: Form & Interaction Elements (5 components)

11. **Chip Level** - Skill level indicators
12. **Badge** - Notification badges
13. **Avatar** - User avatars with fallback
14. **Progress Bar** - Linear progress indicators
15. **Progress Ring** - Circular progress indicators

**Impact:** Essential for user feedback and data visualization.

---

### Priority 3: Navigation Components (4 components)

16. **TabStrip** - Tab navigation
17. **Breadcrumbs** - Breadcrumb navigation
18. **Header** ⭐ *Recently documented*
19. **Pagination** ⭐ *Recently documented*

**Impact:** Required for multi-page navigation and information architecture.

---

### Priority 4: Content Display (4 components)

20. **Insight Panel** (Penny Insights)
21. **Stat Card** - Metric display cards
22. **Metric Card** - KPI cards
23. **Roadmap Item Card** - Feature roadmap items

**Impact:** Important for dashboard and reporting features.

---

### Priority 5: Marketing & Public Pages (7 components)

24. **Feature Roadmap Section** - Product roadmap
25. **Impact Metrics Section** - Org impact stats
26. **Donation CTA Section** - Fundraising CTAs
27. **Hero Section** - Page heroes
28. **Vision Hero** - Mission statement heroes
29. **Program Hero** - Program overview heroes
30. **Portfolio Hero** - Project showcase heroes

**Impact:** Needed for public-facing and donor engagement pages.

---

### Priority 6: Page Templates (7 components)

31. **Dashboard Template** - Learner dashboard layout
32. **Learning Center Template** - Course catalog layout
33. **Vision Donor Template** - Donor engagement pages
34. **Program Overview Template** - Program pages
35. **Portfolio Template** - Project portfolio
36. **Roadmap Template** - Feature roadmap page
37. **Community Feed Template** - Community interaction

**Impact:** Complete page layouts; lower priority as they combine other components.

---

## 🛠️ What's Required for LWC Conversion?

### Technical Requirements

For each of the 37 components, the following work is needed:

#### 1. **LWC Component Creation**
- Create `.js`, `.html`, `.css`, and `.js-meta.xml` files
- Convert React JSX to LWC HTML template syntax
- Convert React hooks to LWC lifecycle methods
- Replace React state management with LWC `@track` and `@api` decorators

#### 2. **Styling Conversion**
- Convert Tailwind classes to SLDS (Salesforce Lightning Design System) or custom CSS
- Ensure TTDS design tokens are preserved
- Create custom CSS for non-SLDS components
- Test responsive behavior in Salesforce context

#### 3. **JavaScript Logic Adaptation**
- Replace React event handlers with LWC event handlers
- Convert `useEffect` to `connectedCallback`, `disconnectedCallback`
- Replace `useState` with `@track` properties
- Implement two-way data binding where needed

#### 4. **Salesforce Integration**
- Define public properties using `@api` decorator
- Create events using `CustomEvent` for parent communication
- Wire to Salesforce data using `@wire` (where applicable)
- Map to Salesforce objects (for data-driven components)

#### 5. **Testing & Validation**
- Create LWC Jest tests
- Test in Salesforce Lightning Experience
- Test in Salesforce Mobile app
- Verify accessibility (WCAG AA compliance maintained)
- Cross-browser testing

---

## 📋 Conversion Workflow (Per Component)

### Step 1: Analysis
- [ ] Review React component documentation
- [ ] Identify Salesforce dependencies
- [ ] Map TTDS tokens to SLDS equivalents
- [ ] List required custom events

### Step 2: Development
- [ ] Create LWC component structure
- [ ] Convert HTML template
- [ ] Convert JavaScript logic
- [ ] Convert styling (Tailwind → SLDS/Custom CSS)
- [ ] Add Salesforce object wiring (if needed)

### Step 3: Testing
- [ ] Unit tests (Jest)
- [ ] Integration tests with other LWCs
- [ ] Salesforce Lightning Experience testing
- [ ] Mobile app testing
- [ ] Accessibility testing

### Step 4: Documentation
- [ ] Update component metadata (`lwcAvailable: true`)
- [ ] Document Salesforce-specific props
- [ ] Create LWC usage examples
- [ ] Update Figma engineering handoff board

### Step 5: Deployment
- [ ] Code review
- [ ] Deploy to Salesforce sandbox
- [ ] User acceptance testing
- [ ] Deploy to production

---

## ⏱️ Estimated Effort

### Complexity Levels

**Simple Components (1-2 days each):**
- Text Input, Text Area, Select, Radio, Switch, Checkbox
- Chip Status, Chip Level, Badge
- Progress Bar, Progress Ring
- ~15 components × 2 days = **30 days**

**Medium Components (3-5 days each):**
- Modal, Toast, Panel, Card
- TabStrip, Breadcrumbs, Header, Pagination
- Avatar, Search Input
- Stat Card, Metric Card, Insight Panel
- ~13 components × 4 days = **52 days**

**Complex Components (5-10 days each):**
- Learner Stats Panel (requires data mapping)
- Roadmap Item Card
- Feature Roadmap Section
- Impact Metrics Section
- ~9 components × 7 days = **63 days**

### Total Estimated Effort
- **145 developer days** (approximately 7 months for 1 developer)
- **73 days** (approximately 3.5 months for 2 developers)
- **48 days** (approximately 2.5 months for 3 developers)

---

## 🎯 Recommended Phased Approach

### Phase 1: Foundation (Weeks 1-4)
**Goal:** Enable basic forms and interactions

Convert:
- Text Input, Text Area, Select Input, Search Input
- Radio, Switch
- Panel, Modal, Toast
- Progress Bar

**Deliverable:** Salesforce forms are fully functional

---

### Phase 2: Navigation & Layout (Weeks 5-8)
**Goal:** Enable multi-page apps

Convert:
- Header, TabStrip, Breadcrumbs, Pagination
- Chip Status, Chip Level, Badge
- Avatar
- Stat Card, Metric Card

**Deliverable:** Complete navigation and user feedback

---

### Phase 3: Dashboard & Content (Weeks 9-12)
**Goal:** Enable learner dashboards

Convert:
- Insight Panel (Penny Insights)
- Progress Ring
- Roadmap Item Card
- All remaining cards and panels

**Deliverable:** Learner dashboard fully functional in Salesforce

---

### Phase 4: Marketing & Templates (Weeks 13-16)
**Goal:** Enable public-facing pages

Convert:
- All Section components (Feature Roadmap, Impact Metrics, etc.)
- All Hero components
- All Template components

**Deliverable:** Complete public site in Salesforce Experience Cloud

---

## 🔧 Tools & Resources Needed

### Development Environment
- Salesforce Developer Org (already available)
- VS Code with Salesforce Extensions
- SFDX CLI
- Git repository for LWC code

### Design Resources
- TTDS Design Token definitions
- Figma component specifications
- Accessibility requirements documentation
- Current React component code (reference)

### Team Requirements
- **Primary:** 1-2 Salesforce LWC developers
- **Secondary:** React developer (for consultation)
- **QA:** Tester with Salesforce experience
- **Reviewer:** Accessibility specialist

---

## 📊 Success Metrics

### Component-Level Metrics
- [ ] All 37 components have `lwcAvailable: true`
- [ ] 100% feature parity with React versions
- [ ] WCAG AA accessibility maintained
- [ ] TTDS design tokens preserved

### Integration Metrics
- [ ] All components work in Salesforce Lightning Experience
- [ ] All components work in Salesforce Mobile app
- [ ] Salesforce object mappings complete (for data components)
- [ ] Performance benchmarks met (LCP < 2.5s)

### Documentation Metrics
- [ ] LWC usage documentation for all 37 components
- [ ] Salesforce-specific props documented
- [ ] Code examples in LWC format
- [ ] Figma engineering handoff board updated

---

## 🚀 Quick Start Guide

### For Immediate Action

1. **Start with Priority 1 components** (high-impact primitives)
2. **Begin with simplest first:** Text Input, Text Area, Radio
3. **Create reusable conversion patterns** that can be templated
4. **Document learnings** for faster subsequent conversions

### Conversion Template

We recommend creating a standardized conversion template/script that can:
- Auto-generate LWC file structure
- Map common Tailwind classes to SLDS
- Stub out lifecycle methods
- Generate base test files

This will significantly reduce conversion time for the 37 remaining components.

---

## 📞 Questions?

For questions about LWC conversion planning:
- **Linear Issue:** TTA-154
- **Design System Docs:** `/DOCUMENTATION_COMPLETE.md`
- **Component Registry:** `/components/status/ComponentStatus.tsx`

---

## Summary

**Current State:**
- ✅ 48/48 components designed and documented (100%)
- ✅ 11/48 components have LWC available (23%)
- 📝 37/48 components need LWC conversion (77%)

**Recommended Next Steps:**
1. Allocate development resources (1-3 LWC developers)
2. Set up Salesforce development environment
3. Start Phase 1: Foundation components (forms and interactions)
4. Create conversion templates and patterns
5. Execute phased rollout over 3-4 months

**Expected Outcome:**
- All 48 TTDS components available in Salesforce
- Consistent design system across React and Salesforce platforms
- Full feature parity and WCAG AA accessibility maintained
