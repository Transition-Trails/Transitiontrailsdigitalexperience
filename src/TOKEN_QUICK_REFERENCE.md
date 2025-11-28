# Design Token Quick Reference

**Fast reference for TTDS design tokens**

---

## 🎨 Colors (16)

### Surfaces
```css
--ttds-color-surface-0      /* #FFFFFF - White backgrounds */
--ttds-color-surface-1      /* #F8FAFC - Subtle backgrounds */
--ttds-color-surface-2      /* #F1F5F9 - Dividers */
--ttds-color-surface-3      /* #E2E8F0 - Disabled */
```

### Text
```css
--ttds-color-text-primary   /* #0F172A - Main text */
--ttds-color-text-secondary /* #475569 - Supporting text */
--ttds-color-text-tertiary  /* #94A3B8 - Subtle text */
--ttds-color-text-inverse   /* #FFFFFF - Text on dark */
--ttds-color-text-link      /* #10B981 - Links */
```

### Accents
```css
--ttds-color-accent-primary    /* #10B981 - Emerald (Primary CTA) */
--ttds-color-accent-secondary  /* #0EA5E9 - Blue (Secondary) */
--ttds-color-accent-highlight  /* #F59E0B - Amber (Highlight) */
```

### Status
```css
--ttds-color-status-success   /* #10B981 - Success */
--ttds-color-status-warning   /* #F59E0B - Warning */
--ttds-color-status-info      /* #0EA5E9 - Info */
--ttds-color-status-critical  /* #EF4444 - Error */
```

---

## 📏 Spacing (7)

```css
--ttds-space-4    /* 0.25rem (4px)  - Tight spacing */
--ttds-space-8    /* 0.5rem  (8px)  - Compact layouts */
--ttds-space-12   /* 0.75rem (12px) - Default spacing */
--ttds-space-16   /* 1rem    (16px) - Standard padding */
--ttds-space-24   /* 1.5rem  (24px) - Section spacing */
--ttds-space-32   /* 2rem    (32px) - Large gaps */
--ttds-space-40   /* 2.5rem  (40px) - Major breaks */
```

**Tailwind:** `p-1`, `p-2`, `p-3`, `p-4`, `p-6`, `p-8`, `p-10`

---

## 📝 Typography (8)

### Headings
```css
--ttds-type-heading-xl  /* 2rem    (32px) - Page titles */
--ttds-type-heading-lg  /* 1.5rem  (24px) - Section headings */
--ttds-type-heading-md  /* 1.25rem (20px) - Subsections */
--ttds-type-heading-sm  /* 1rem    (16px) - Card titles */
```

### Body
```css
--ttds-type-body-lg     /* 1.125rem (18px) - Large body text */
--ttds-type-body-md     /* 1rem    (16px) - Default body */
--ttds-type-body-sm     /* 0.875rem (14px) - Small text */
```

### Caption
```css
--ttds-type-caption     /* 0.75rem (12px) - Helper text */
```

**Note:** Avoid Tailwind typography classes unless requested. Use defaults from `/styles/globals.css`.

---

## ⭕ Radius (3)

```css
--ttds-radius-sm   /* 0.375rem (6px)  - Chips, badges */
--ttds-radius-md   /* 0.5rem   (8px)  - Cards, buttons (default) */
--ttds-radius-lg   /* 0.75rem  (12px) - Panels, modals */
```

**Tailwind:** `rounded-md`, `rounded-lg`, `rounded-xl`

---

## 📦 Elevation (3)

```css
--ttds-elevation-none   /* none - Flat surfaces */
--ttds-elevation-sm     /* 0 1px 3px rgba(0,0,0,0.08) - Subtle lift */
--ttds-elevation-md     /* 0 4px 12px rgba(0,0,0,0.12) - Floating elements */
```

**Tailwind:** `shadow-none`, `shadow-sm`, `shadow-md`

---

## 🖼️ Borders (3)

```css
--ttds-border-default   /* 1px solid #E2E8F0 - Default borders */
--ttds-border-strong    /* 2px solid #CBD5E1 - Emphasized borders */
--ttds-border-focus     /* 2px solid #10B981 - Focus rings */
```

**Tailwind:** `border border-slate-200`, `border-2 border-slate-300`, `ring-2 ring-emerald-500`

---

## 🔷 Icons (3)

```css
--ttds-icon-sm   /* 1rem    (16px) - Inline icons */
--ttds-icon-md   /* 1.25rem (20px) - Default icons */
--ttds-icon-lg   /* 1.5rem  (24px) - Feature icons */
```

**React:** `className="h-4 w-4"`, `className="h-5 w-5"`, `className="h-6 w-6"`

**Library:** Lucide React (`import { Icon } from 'lucide-react'`)

---

## 💡 Usage Examples

### Basic Card
```css
.card {
  background-color: var(--ttds-color-surface-0);
  padding: var(--ttds-space-16);
  border-radius: var(--ttds-radius-md);
  box-shadow: var(--ttds-elevation-sm);
  border: var(--ttds-border-default);
}
```

### Button
```css
.button {
  background-color: var(--ttds-color-accent-primary);
  color: var(--ttds-color-text-inverse);
  padding: var(--ttds-space-12) var(--ttds-space-16);
  border-radius: var(--ttds-radius-md);
}
```

### Typography
```css
h1 {
  font-size: var(--ttds-type-heading-xl);
  color: var(--ttds-color-text-primary);
  margin-bottom: var(--ttds-space-16);
}
```

---

## ⚡ Quick Copy

### Most Common Tokens
```css
/* Backgrounds */
var(--ttds-color-surface-0)        /* White */
var(--ttds-color-surface-1)        /* Light gray */

/* Text */
var(--ttds-color-text-primary)     /* Dark text */
var(--ttds-color-text-secondary)   /* Gray text */

/* Primary CTA */
var(--ttds-color-accent-primary)   /* Emerald */

/* Spacing */
var(--ttds-space-16)               /* 16px padding */
var(--ttds-space-24)               /* 24px gap */

/* Radius */
var(--ttds-radius-md)              /* 8px rounded */

/* Elevation */
var(--ttds-elevation-sm)           /* Subtle shadow */
```

---

## 📋 Token Checklist

### Before Coding
- [ ] Check token visualizer for correct token
- [ ] Copy CSS variable (click copy button)
- [ ] Verify Tailwind alternative if needed
- [ ] Read usage guidelines

### During Development
- [ ] Use tokens, never hard-code values
- [ ] Reference CSS variables in styles
- [ ] Match Figma designs to tokens
- [ ] Test on mobile/desktop

### Code Review
- [ ] No hard-coded colors (#FFFFFF, etc.)
- [ ] No hard-coded spacing (16px, etc.)
- [ ] No hard-coded font sizes
- [ ] All icons have text labels

---

## 🎯 Best Practices

### DO ✅
- Use CSS variables for all values
- Reference tokens by name
- Follow WCAG AA contrast requirements
- Pair icons with text labels
- Use Tailwind classes for utilities
- Keep token usage consistent

### DON'T ❌
- Hard-code hex colors
- Hard-code pixel values
- Invent new spacing/colors
- Use icon-only buttons
- Override typography tokens (without reason)
- Mix token systems

---

## 🔍 Finding Tokens

### By Purpose
- **Background?** → Surface tokens
- **Text color?** → Text tokens
- **Button color?** → Accent tokens
- **Alert color?** → Status tokens
- **Padding?** → Spacing tokens
- **Font size?** → Typography tokens
- **Rounded corners?** → Radius tokens
- **Shadow?** → Elevation tokens
- **Border?** → Border tokens
- **Icon size?** → Icon tokens

### By Category
1. Open Design Token Visualizer
2. Click category button
3. Browse tokens visually
4. Click copy button
5. Paste in code

---

## 🎨 Color Combinations

### Primary Card
```css
background: var(--ttds-color-surface-0);
color: var(--ttds-color-text-primary);
border: var(--ttds-border-default);
```

### Primary Button
```css
background: var(--ttds-color-accent-primary);
color: var(--ttds-color-text-inverse);
```

### Success Alert
```css
background: #F0FDF4; /* Emerald-50 */
color: var(--ttds-color-status-success);
border: 1px solid var(--ttds-color-status-success);
```

### Warning Alert
```css
background: #FFFBEB; /* Amber-50 */
color: var(--ttds-color-status-warning);
border: 1px solid var(--ttds-color-status-warning);
```

---

## 📱 Responsive Spacing

### Mobile
```css
padding: var(--ttds-space-12);
gap: var(--ttds-space-8);
```

### Desktop
```css
padding: var(--ttds-space-24);
gap: var(--ttds-space-16);
```

### Use Tailwind responsive classes:
```html
<div class="p-3 md:p-6 gap-2 md:gap-4">
```

---

## 🔗 Quick Links

- **Token Visualizer:** `#design-tokens` in app
- **Token Definitions:** `/styles/globals.css`
- **Full Documentation:** `/components/tokens/README.md`
- **TTDS Guidelines:** `/guidelines/Guidelines.md`

---

## ⌨️ Shortcuts

| Action | Shortcut |
|--------|----------|
| Navigate to tokens | Scroll to "Design Tokens" section |
| Switch category | Click category button |
| Copy token | Click copy icon |
| View all colors | Click "Colors" category |
| View all spacing | Click "Spacing" category |

---

## 📊 Token Stats

- **Total Tokens:** 43
- **Categories:** 7 (Colors, Spacing, Typography, Radius, Elevation, Borders, Icons)
- **Most Tokens:** Colors (16)
- **Fewest Tokens:** Radius, Elevation, Borders, Icons (3 each)
- **Coverage:** 100%

---

## ⚠️ Important Notes

### Typography Warning
DO NOT use Tailwind typography classes (`text-2xl`, `font-bold`, `leading-none`) unless specifically requested. We have defaults in `/styles/globals.css`.

### Icon Accessibility
Icons must ALWAYS be paired with text labels. Never use icon-only buttons without labels.

```tsx
// ✅ Good
<button>
  <Star className="h-4 w-4" />
  Favorite
</button>

// ❌ Bad
<button>
  <Star className="h-4 w-4" />
</button>
```

---

## 🆘 Troubleshooting

### Token not working?
1. Check spelling of CSS variable
2. Verify token exists in `/styles/globals.css`
3. Check browser DevTools for computed value
4. Ensure CSS variable syntax: `var(--token-name)`

### Color looks wrong?
1. Verify contrast with background
2. Check WCAG AA compliance
3. Use correct category (surface vs text vs accent)
4. View in token visualizer to confirm

### Spacing inconsistent?
1. Use spacing tokens, not arbitrary values
2. Follow 4px baseline grid
3. Check mobile/desktop responsive needs
4. Verify padding vs margin usage

---

## 📚 Learn More

- **Token Visualizer:** Interactive reference in component library
- **Full Docs:** `/components/tokens/README.md`
- **Summary:** `/DESIGN_TOKEN_VISUALIZER_SUMMARY.md`
- **Guidelines:** `/guidelines/Guidelines.md`

---

**Remember:** When in doubt, check the Design Token Visualizer! 🎨

---

**Last Updated:** November 27, 2024  
**Version:** 1.0  
**Total Tokens:** 43
