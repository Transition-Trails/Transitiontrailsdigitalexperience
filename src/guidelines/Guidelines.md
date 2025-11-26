# 🌲 Transition Trails Design System (TTDS)  
### **Version 1.0 — Full System Documentation**  
_Designed for Figma AI, Engineering, and Product_

---

# 1. **Design Philosophy**

TTDS reflects a calm, modern, outdoors-inspired aesthetic. It emphasizes:

- Clarity  
- Clean structure  
- Accessibility  
- Consistency  
- Natural hierarchy  
- Minimal decoration; maximum readability  

The system is **token-driven**, **accessibility-first**, and designed for scalable components used across the Transition Trails Academy Digital Experience.

---

# 2. **Core Visual Language**

### Style Themes
- Earth neutrals  
- Blue-green accents  
- Rounded corners (6–8px)  
- Minimal shadows  
- Neutral, modern typography  
- Trail-inspired spacing + breathing room  

### Usage Principles
- Prioritize clarity over decoration  
- Reduce cognitive load  
- Keep surfaces clean  
- Ensure clear hierarchy  
- Respect spacing  
- Favor simplicity

---

# 3. **Design Tokens**

## 3.1 Color Tokens

### Neutral Surfaces
```
ttds-color-surface-0
ttds-color-surface-1
ttds-color-surface-2
ttds-color-surface-3
```

### Text Colors
```
ttds-color-text-primary
ttds-color-text-secondary
ttds-color-text-tertiary
ttds-color-text-inverse
ttds-color-text-link
```

### Accent Colors
```
ttds-color-accent-primary
ttds-color-accent-secondary
ttds-color-accent-highlight
```

### Status Colors
```
ttds-color-status-success
ttds-color-status-warning
ttds-color-status-info
ttds-color-status-critical
```

---

## 3.2 Radius Tokens
```
ttds-radius-sm
ttds-radius-md
ttds-radius-lg
```

---

## 3.3 Spacing Tokens
```
ttds-space-4
ttds-space-8
ttds-space-12
ttds-space-16
ttds-space-24
ttds-space-32
ttds-space-40
```

---

## 3.4 Typography Tokens
```
ttds-type-heading-xl
ttds-type-heading-lg
ttds-type-heading-md
ttds-type-heading-sm

ttds-type-body-lg
ttds-type-body-md
ttds-type-body-sm

ttds-type-caption
```

---

## 3.5 Elevation Tokens
```
ttds-elevation-none
ttds-elevation-sm
ttds-elevation-md
```

---

## 3.6 Border Tokens
```
ttds-border-default
ttds-border-strong
ttds-border-focus
```

---

## 3.7 Icon Tokens
```
ttds-icon-sm
ttds-icon-md
ttds-icon-lg
```

---

# 4. **Component Architecture**

## 4.1 Naming Structure

### TTDS Primitives
```
TTDS/Button/*
TTDS/Input/*
TTDS/Card/*
TTDS/Surface/*
TTDS/Nav/*
TTDS/Tag/*
```

### TT Domain Components
```
TT/Panel/*
TT/Card/*
TT/Section/*
```

---

## 4.2 Structure Rules
- Use Auto-Layout  
- Use TTDS spacing tokens only  
- Use variants for states/layout  
- Support light & dark  
- Maintain accessibility  
- Wrap long text gracefully  
- Never invent new spacing or radius values

---

# 5. **Navigation Components**

### Includes:
- TTDS/Nav/Header  
- TTDS/Nav/TabStrip  
- TTDS/Nav/Breadcrumbs  
- TTDS/Pagination  

### Rules:
- Breadcrumbs use chevrons  
- TabStrip scrolls under overflow  
- Pagination includes ellipses  
- Header collapses responsibly  

---

# 6. **Surface & Card Rules**

All panels/cards must:
- Use TTDS Surface or TTDS Card  
- Apply radius tokens  
- Include minimal elevation  
- Use TTDS spacing tokens  
- Keep content readable and uncluttered  

---

# 7. **Tags & Chips**

Types:
- Category Tag  
- Status Tag  
- Skill/Tech Tag  

Rules:
- Must include text  
- No color-only meaning  
- Wrap in multi-item layouts  

---

# 8. **Accessibility**

Requirements:
- WCAG AA contrast minimum  
- Visible focus states  
- Logical reading order  
- No icon-only meaning  
- Clear CTAs  
- Keyboard-friendly navigation  

---

# 9. **Layout Templates**

## 9.1 Dashboard Template
```
Header
Main Column
  - LearnerStatsPanel
  - GoalsAndProgressPanel
  - SkillsAndCertsPanel
  - Activity/Event List
Right Rail
  - Penny Insights
  - Quick Tips
```

---

## 9.2 Learning Center Template
```
Header
Filters Row
3-Column Grid of Activity Cards
Pagination
```

---

## 9.3 Vision / Donor Page Template
```
Hero
Why It Matters
Feature Roadmap Section
Impact Metrics
Donation CTA
Footer
```

---

## 9.4 Program Overview Template
```
Hero
Program Overview Blocks
Skills & Requirements
Success Stories
Partner Logos
CTA Section
```

---

## 9.5 Portfolio Template
```
Intro
Grid of PartnerProject Cards
Pagination
```

---

## 9.6 Roadmap Template
```
Header
3-Column Grid of RoadmapItem Cards
Optional Filters
```

---

# 10. **TT Domain Components List**

### Panels
- Learner Stats Panel  
- Goals & Progress Panel  
- Skills & Certifications Panel  
- Penny Insights Panel  

### Cards
- Event Card  
- Partner Project Card  
- Roadmap Item Card  
- Activity / Assignment Cards  

### Sections
- Feature Roadmap Section  
- Impact Metrics Section  
- Donation CTA Section  

---

# 11. **Responsive Behavior**

Components must:
- Support mobile and desktop  
- Wrap tags gracefully  
- Allow multi-line titles  
- Maintain readable spacing  
- Keep CTAs bottom-aligned  

---

# 12. **Interaction & Motion**

Rules:
- Soft hover  
- Clear focus ring  
- No heavy animations  
- Use motion only when meaningful  

---

# 13. **Documentation Requirements**

Every component must include:
- A Notes frame  
- Token usage  
- Variant descriptions  
- Light/dark examples  
- Placement examples  

---

# 14. **Figma AI Rules**

AI must:
- Use TTDS tokens exclusively  
- Follow layout templates  
- Use variants  
- Follow naming structure  
- Maintain accessibility  
- Wrap in TTDS surfaces  
- Avoid inventing styles  

---

# 15. **Design System Roadmap**

Upcoming:
- Notification system  
- Modal system  
- Tooltip system  
- Progress components  
- Full TTDS Icon Pack  

---

# ✔️ End of TTDS v1.0 Full Documentation
