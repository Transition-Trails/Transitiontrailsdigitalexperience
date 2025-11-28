# Documentation Components Index

Quick reference for all documentation-related files and components.

---

## 📁 Files in This Directory

| File | Purpose | Status |
|------|---------|--------|
| `PropsTable.tsx` | Display component props in table format | ✅ Complete |
| `CodeSnippet.tsx` | Show code examples with copy button | ✅ Complete |
| `UsageExample.tsx` | Document real-world usage patterns | ✅ Complete |
| `ComponentDocSection.tsx` | Collapsible section wrapper | ✅ Complete |
| `DocStatusBadge.tsx` | Status indicators for docs | ✅ Complete |
| `DocProgress.tsx` | Progress tracking and stats | ✅ Complete |
| `README.md` | Comprehensive component guide | ✅ Complete |
| `INDEX.md` | This file | ✅ Complete |

---

## 📄 Root Documentation Files

| File | Purpose | For Who |
|------|---------|---------|
| `/ENHANCED_DOCUMENTATION_SUMMARY.md` | Phase 1 completion summary | Everyone |
| `/DOCUMENTATION_QUICK_START.md` | Step-by-step guide for adding docs | Developers |
| `/guidelines/Guidelines.md` | TTDS design system guidelines | Designers & Devs |

---

## 🎯 Component Usage Matrix

### PropsTable
**Purpose:** Display component API reference  
**Used in:** Button, Card, TextInput sections  
**Import:** `import { PropsTable } from './components/documentation/PropsTable';`

**Key Props:**
- `props` (PropDefinition[]) - Array of prop definitions

**Example:**
```tsx
<PropsTable props={[
  {
    name: 'variant',
    type: 'string',
    required: false,
    default: '"primary"',
    description: 'Visual style',
    options: ['primary', 'secondary']
  }
]} />
```

---

### CodeSnippet
**Purpose:** Show code examples with syntax highlighting  
**Used in:** Button, Card, TextInput sections  
**Import:** `import { CodeSnippet } from './components/documentation/CodeSnippet';`

**Key Props:**
- `code` (string) - Code content
- `title` (string, optional) - Example title
- `language` (string, optional) - Language identifier
- `showLineNumbers` (boolean, optional) - Show line numbers

**Example:**
```tsx
<CodeSnippet 
  title="Basic Button"
  code={`<Button variant="primary">Click</Button>`}
/>
```

---

### UsageExamples
**Purpose:** Document where and how components are used  
**Used in:** Button, Card, TextInput sections  
**Import:** `import { UsageExamples } from './components/documentation/UsageExample';`

**Key Props:**
- `examples` (array) - Array of usage example objects

**Example:**
```tsx
<UsageExamples examples={[
  {
    title: 'Dashboard',
    description: 'Main CTA buttons',
    context: 'Dashboard Page',
    icon: 'page'
  }
]} />
```

---

### ComponentDocSection
**Purpose:** Collapsible container for documentation  
**Used in:** All enhanced component sections  
**Import:** `import { ComponentDocSection } from './components/documentation/ComponentDocSection';`

**Key Props:**
- `title` (string) - Section header
- `children` (ReactNode) - Section content
- `defaultExpanded` (boolean, optional) - Start expanded

**Example:**
```tsx
<ComponentDocSection title="📋 Props" defaultExpanded={false}>
  <PropsTable props={...} />
</ComponentDocSection>
```

---

### DocProgress
**Purpose:** Show documentation completion progress  
**Used in:** App.tsx header area  
**Import:** `import { DocProgress } from './components/documentation/DocProgress';`

**Key Props:**
- `total` (number) - Total component count
- `documented` (number) - Documented count
- `partial` (number, optional) - Partially documented
- `showDetails` (boolean, optional) - Show breakdown

**Example:**
```tsx
<DocProgress 
  total={40}
  documented={3}
  partial={0}
  showDetails={true}
/>
```

---

### DocStatusBadge
**Purpose:** Show documentation status badges  
**Used in:** Component lists, status tracking  
**Import:** `import { DocStatusBadge } from './components/documentation/DocStatusBadge';`

**Key Props:**
- `status` ('complete' | 'partial' | 'none') - Doc status
- `showLabel` (boolean, optional) - Show text label
- `size` ('small' | 'medium', optional) - Badge size

**Example:**
```tsx
<DocStatusBadge status="complete" showLabel={true} />
```

---

## 📊 Current Documentation Status

### Enhanced Components (3)
1. ✅ **Button** - Complete with props, examples, usage
2. ✅ **Card** - Complete with props, examples, usage
3. ✅ **TextInput** - Complete with props, examples, usage

### Components Needing Documentation (37+)

**Primitives (11):**
- TextArea
- SelectInput
- SearchInput
- Checkbox
- Radio
- Switch
- ChipStatus
- ChipLevel
- Badge
- Tag
- Stepper
- Tooltip
- Skeleton

**Navigation (4):**
- Header
- TabStrip
- Breadcrumbs
- Pagination

**Panels (6):**
- Panel (base)
- LearnerStatsPanel
- GoalsAndProgressPanel
- SkillsAndCertsPanel
- PennyInsightRail
- BadgesAndCreditsPanel
- PennyTip

**Domain Cards (11):**
- PartnerProjectCard
- EventSessionCard
- RoadmapItemCard
- LearningActivityCard
- AssignmentCard
- CommunityPostCard
- ProgramOverviewCard
- AITrailCard
- CitizenPlatformCard
- TrailMissionCard
- TrailPathCard

**Sections (3):**
- MetricTile
- DonateSection
- FeatureRoadmapSection

**Templates (5):**
- VisionDonorPage
- DashboardTemplate
- ProgramOverviewTemplate
- LearningCenterTemplate
- CommunityFeedTemplate

---

## 🎨 Design Tokens Used

### Colors
```css
/* Prop names */
.prop-name { @apply text-emerald-700 bg-emerald-50; }

/* Types */
.type-name { @apply text-blue-700 bg-blue-50; }

/* Required badges */
.required { @apply text-red-600 bg-red-50; }

/* Code background */
.code-bg { @apply bg-slate-900; }

/* Section borders */
.section-border { @apply border-slate-200; }
```

### Spacing
- Sections: `space-y-4` (1rem)
- Content: `gap-3` (0.75rem)
- Padding: `p-4` (1rem)
- Margins: `mb-2` (0.5rem)

### Typography
- Headers: `text-sm` + `font-weight: 700`
- Body: `text-xs` or `text-sm`
- Code: `text-xs` monospace

---

## 🔄 Common Workflows

### Adding Documentation to a Component

1. Import components:
```tsx
import { PropsTable, CodeSnippet, UsageExamples, ComponentDocSection } 
  from './components/documentation/[Component]';
```

2. Create props array
3. Add ComponentDocSection blocks
4. Write code examples
5. Document usage patterns
6. Update DocProgress counter

### Updating Existing Documentation

1. Locate component section in App.tsx
2. Find the enhanced documentation block
3. Update relevant sections (props/examples/usage)
4. Test changes in browser
5. Commit updates

### Checking Documentation Coverage

1. Look at DocProgress component
2. Review component list in this file
3. Identify gaps
4. Prioritize based on usage frequency

---

## 📖 Learning Resources

### For Understanding the System
- Read: `/ENHANCED_DOCUMENTATION_SUMMARY.md`
- Review: Example implementations (Button, Card, TextInput)
- Check: `/components/documentation/README.md`

### For Adding Documentation
- Use: `/DOCUMENTATION_QUICK_START.md`
- Copy: Template from Quick Start guide
- Reference: Existing examples in App.tsx

### For Design System Info
- Read: `/guidelines/Guidelines.md`
- Review: TTDS design tokens
- Check: Component naming conventions

---

## 🏗️ Architecture

```
Documentation System Architecture:

┌─────────────────────────────────────────┐
│           App.tsx (Main App)            │
│                                         │
│  ┌───────────────────────────────────┐ │
│  │   Component Section               │ │
│  │                                   │ │
│  │  ┌─────────────────────────────┐ │ │
│  │  │ Enhanced Documentation      │ │ │
│  │  │                             │ │ │
│  │  │  ComponentDocSection        │ │ │
│  │  │  ├─ PropsTable              │ │ │
│  │  │  ├─ CodeSnippet (multiple)  │ │ │
│  │  │  └─ UsageExamples           │ │ │
│  │  └─────────────────────────────┘ │ │
│  │                                   │ │
│  │  Visual Examples...               │ │
│  └───────────────────────────────────┘ │
│                                         │
│  [Repeat for each component]           │
└─────────────────────────────────────────┘

Supporting Components:
├─ DocProgress (header)
├─ DocStatusBadge (lists)
└─ Documentation files (guidance)
```

---

## 🎯 Goals & Metrics

### Phase 1 (Complete ✅)
- [x] 4 documentation components created
- [x] 3 TTDS components fully documented
- [x] Documentation system established
- [x] Guides and references written

### Phase 2 (In Progress)
- [ ] Document 10+ primitive components
- [ ] Document 4 navigation components
- [ ] Create component search
- [ ] Add interactive examples

### Phase 3 (Future)
- [ ] 100% component coverage
- [ ] Interactive prop editor
- [ ] Auto-generate from TypeScript
- [ ] Version history tracking

### Success Metrics
- **Coverage:** % of components with full docs
- **Quality:** All props, 3+ examples, usage context
- **Usability:** Developer feedback, time-to-implement
- **Maintenance:** Docs stay current with code

---

## 🤝 Contributing

### Adding New Documentation Components

1. Create component in `/components/documentation/`
2. Follow existing naming and structure
3. Use TypeScript interfaces
4. Add to this INDEX.md
5. Update README.md with usage

### Improving Existing Components

1. Check GitHub issues for feedback
2. Test with real use cases
3. Add requested features
4. Update documentation
5. Bump version in comments

### Writing Documentation

1. Follow Quick Start guide
2. Use consistent formatting
3. Test all code examples
4. Reference real pages/sections
5. Keep descriptions clear and concise

---

## 📝 Version History

| Version | Date | Changes | Author |
|---------|------|---------|--------|
| 1.0.0 | Nov 27, 2024 | Initial release | Figma Make AI |

---

## 🔗 Quick Links

- [Documentation README](./README.md)
- [Quick Start Guide](/DOCUMENTATION_QUICK_START.md)
- [Summary Document](/ENHANCED_DOCUMENTATION_SUMMARY.md)
- [TTDS Guidelines](/guidelines/Guidelines.md)
- [Main App](/App.tsx)

---

## ❓ FAQ

**Q: Where do I start?**
A: Read `/DOCUMENTATION_QUICK_START.md`

**Q: Which component should I document next?**
A: Check the priority list in Quick Start guide

**Q: How do I test my documentation?**
A: Run the app and check the component section

**Q: What if I find a bug?**
A: Update the component and document the fix

**Q: Can I suggest improvements?**
A: Yes! Document ideas in issues or comments

---

**Last Updated:** November 27, 2024  
**Maintained By:** TTDS Team  
**Status:** Active Development
