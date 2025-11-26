# TTA-130 Quick Reference: Skills & Certifications Panel

## Component Import
```tsx
import { SkillsAndCertsPanel } from './components/ttds/SkillsAndCertsPanel';
```

## Basic Usage
```tsx
// Default with preset data
<SkillsAndCertsPanel />
```

## Common Patterns

### 1. Compact Dashboard Sidebar
```tsx
<SkillsAndCertsPanel 
  variant="compact"
  showCTA={true}
  ctaText="Update Skills"
/>
```

### 2. Profile Page (Full Display)
```tsx
<SkillsAndCertsPanel
  variant="full"
  layout="two-column"
  showCTA={true}
  ctaText="Edit Credentials"
  onCTAClick={() => openSkillsModal()}
/>
```

### 3. Custom Developer Profile
```tsx
<SkillsAndCertsPanel
  certifications={[
    { id: '1', name: 'Platform Developer I', earned: true },
    { id: '2', name: 'Platform Developer II', earned: true },
    { id: '3', name: 'JavaScript Developer I', earned: false },
  ]}
  skills={[
    { id: '1', name: 'Apex', variant: 'trail' },
    { id: '2', name: 'LWC', variant: 'trail' },
    { id: '3', name: 'REST APIs', variant: 'platform' },
    { id: '4', name: 'SOQL', variant: 'topic' },
  ]}
  tools={[
    { id: '1', name: 'VS Code' },
    { id: '2', name: 'Git' },
    { id: '3', name: 'Postman' },
  ]}
/>
```

### 4. Collapsed Skills (Long Lists)
```tsx
<SkillsAndCertsPanel
  collapsedSkills={true}
  maxSkillsPreview={3}
  skills={[
    /* 10+ skills */
  ]}
/>
```

### 5. Minimal Design (No Icons)
```tsx
<SkillsAndCertsPanel
  showSectionIcons={false}
  showCertIcons={false}
/>
```

## Data Structures

### Certification
```typescript
interface Certification {
  id: string;           // Unique identifier
  name: string;         // "Platform Developer I"
  earned?: boolean;     // true = green bg, false = gray bg
}
```

### Skill
```typescript
interface Skill {
  id: string;           // Unique identifier
  name: string;         // "Apex" or "Reporting"
  variant?: 'default' | 'trail' | 'platform' | 'topic';
  // default = slate, trail = emerald, platform = blue, topic = purple
}
```

### Tool
```typescript
interface Tool {
  id: string;           // Unique identifier
  name: string;         // "Slack" or "Jira"
}
```

## All Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `certifications` | `Certification[]` | Preset data | Array of SF certifications |
| `skills` | `Skill[]` | Preset data | Array of skills with variants |
| `tools` | `Tool[]` | Preset data | Array of non-SF tools |
| `variant` | `'full' \| 'compact'` | `'full'` | Size/spacing variant |
| `layout` | `'single' \| 'two-column'` | `'single'` | Certification layout |
| `showCertIcons` | `boolean` | `true` | Show checkmark icons |
| `showSectionIcons` | `boolean` | `true` | Show Award/Code/Wrench icons |
| `collapsedSkills` | `boolean` | `false` | Collapse skills section |
| `maxSkillsPreview` | `number` | `3` | Skills shown when collapsed |
| `showCTA` | `boolean` | `false` | Show action button |
| `ctaText` | `string` | `'Update Skills'` | CTA button text |
| `onCTAClick` | `() => void` | `undefined` | CTA click handler |
| `className` | `string` | `''` | Additional CSS classes |

## Skill Tag Variants

| Variant | Color | Use For |
|---------|-------|---------|
| `trail` | Emerald | Salesforce trail-related skills (Apex, LWC, Flow) |
| `platform` | Blue | Platform/cloud skills (REST APIs, Integration, SOQL) |
| `topic` | Purple | Domain/topic skills (Reporting, Analytics, Security) |
| `default` | Slate | General skills (Agile, Scrum, User Support) |

## Visual States

### Earned Certification
- Background: `bg-emerald-50`
- Border: `border-emerald-300`
- Text: `text-emerald-900`
- Icon: `text-emerald-600`

### In-Progress Certification
- Background: `bg-slate-50`
- Border: `border-slate-200`
- Text: `text-slate-700`
- Icon: `text-slate-400`

## Dashboard Integration Example

```tsx
<div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
  {/* Left: Skills & Certs */}
  <SkillsAndCertsPanel
    certifications={certData}
    skills={skillsData}
    tools={toolsData}
    showCTA={true}
  />
  
  {/* Right: Goals & Progress */}
  <GoalsAndProgressPanel
    careerGoal="Admin → Consultant"
    currentFocusTrail="Sales Cloud Path"
  />
</div>

{/* Bottom: Stats */}
<LearnerStatsPanel
  stats={[
    { label: 'Certifications', value: '3', icon: Award },
    { label: 'Skills Verified', value: '12', icon: CheckCircle },
  ]}
/>
```

## Accessibility Checklist

- ✅ Semantic HTML (h3, h4)
- ✅ WCAG AA contrast (all text 4.5:1+)
- ✅ Earned status = color + icon (not color-only)
- ✅ aria-label on expand/collapse button
- ✅ Keyboard navigation supported
- ✅ Focus states visible
- ✅ Screen reader friendly order

## Responsive Behavior

| Screen Size | Behavior |
|-------------|----------|
| Mobile | Tags wrap, button full-width, single-column certs |
| Tablet | Button auto-width (sm:w-auto), tags wrap |
| Desktop | Two-column option available, optimal spacing |

## Common Use Cases

1. **Learner Profile** - Full display with CTA
2. **Dashboard Sidebar** - Compact variant
3. **Portfolio View** - Two-column layout, no CTA
4. **Onboarding** - With CTA for initial setup
5. **Progress Review** - Show growth with CTA to update

## Don't Do This

❌ Mix SF and non-SF certifications in same section  
❌ List 20+ skills without collapsing  
❌ Use icons without text labels  
❌ Show expired certs without indication  
❌ Rely on color alone for earned status  

## Do This

✅ Group skills by variant type  
✅ Use collapse for 10+ skills  
✅ Indicate earned vs in-progress  
✅ Include relevant non-SF tools  
✅ Keep certification names concise  
✅ Use two-column for 6+ certs  

## File Location
`/components/ttds/SkillsAndCertsPanel.tsx`

## Related Components
- `GoalsAndProgressPanel` (TTA-129)
- `LearnerStatsPanel` (TTA-107)
- `Tag` (TTA-117)
- `Button` (TTA-103)

## Version
- **Created:** TTA-130
- **Branch:** feature/tta-130-skills-and-certifications-panel
- **Status:** ✅ Complete
