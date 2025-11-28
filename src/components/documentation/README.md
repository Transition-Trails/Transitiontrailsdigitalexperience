# TTDS Documentation Components

Enhanced documentation components for the Transition Trails Design System Component Library.

## Overview

This directory contains reusable components for creating rich, interactive documentation for TTDS components. These components help developers understand props, see code examples, and learn about real-world usage patterns.

## Components

### 1. PropsTable

Displays component props in a clean, scannable table format.

**Features:**
- Type information with syntax highlighting
- Required/optional indicators
- Default values
- Enumerated options for select props
- Descriptive help text

**Usage:**
```tsx
import { PropsTable } from './components/documentation/PropsTable';

<PropsTable props={[
  {
    name: 'variant',
    type: 'string',
    required: false,
    default: '"primary"',
    description: 'Visual style of the button',
    options: ['primary', 'secondary', 'ghost', 'iconOnly']
  },
  // ... more props
]} />
```

**Prop Definition Interface:**
```typescript
interface PropDefinition {
  name: string;           // Prop name
  type: string;           // TypeScript type (e.g., 'string', 'boolean', 'React.ReactNode')
  required?: boolean;     // Whether prop is required
  default?: string;       // Default value
  description: string;    // Explanation of what the prop does
  options?: string[];     // Valid values (for enums/unions)
}
```

---

### 2. CodeSnippet

Displays code examples with syntax highlighting and copy-to-clipboard functionality.

**Features:**
- Dark theme code display
- One-click copy button
- Optional title and language labels
- Optional line numbers
- Automatic "Copied!" feedback

**Usage:**
```tsx
import { CodeSnippet } from './components/documentation/CodeSnippet';

<CodeSnippet 
  title="Basic Button Example"
  language="tsx"
  code={`import { Button } from './components/ttds/Button';

function MyComponent() {
  return (
    <Button variant="primary">
      Click Me
    </Button>
  );
}`} 
/>
```

**Props:**
- `code` (string, required): Code content to display
- `language` (string, optional): Language identifier (default: 'tsx')
- `title` (string, optional): Title shown in header bar
- `showLineNumbers` (boolean, optional): Whether to show line numbers

---

### 3. UsageExamples & UsageExample

Displays real-world usage patterns with context about where components are used.

**Features:**
- Visual icons for different context types (page, section, pattern)
- Color-coded by type
- "Used in" context labels
- Grid layout support

**Usage:**
```tsx
import { UsageExamples } from './components/documentation/UsageExample';

<UsageExamples examples={[
  {
    title: 'Dashboard CTAs',
    description: 'Primary button for starting new trails, secondary for viewing progress',
    context: 'Dashboard Page',
    icon: 'page'  // 'page' | 'section' | 'pattern'
  },
  {
    title: 'Card Actions',
    description: 'Icon-only buttons for quick actions like favorite or share',
    context: 'Partner Project Card',
    icon: 'section'
  }
]} />
```

**Icon Types:**
- `page`: For full page examples (purple)
- `section`: For page sections or components (blue)
- `pattern`: For design patterns or best practices (amber)

---

### 4. ComponentDocSection

Collapsible section container for organizing documentation content.

**Features:**
- Expand/collapse functionality
- Smooth transitions
- Consistent styling
- Optional default expanded state

**Usage:**
```tsx
import { ComponentDocSection } from './components/documentation/ComponentDocSection';

<ComponentDocSection 
  title="📋 Props & API Reference" 
  defaultExpanded={true}
>
  <PropsTable props={...} />
</ComponentDocSection>
```

**Props:**
- `title` (string, required): Section header text
- `children` (React.ReactNode, required): Content to display
- `defaultExpanded` (boolean, optional): Whether section starts expanded (default: false)

---

## Documentation Pattern

Follow this pattern when adding enhanced documentation to components:

### 1. Component Header
```tsx
<h2>Component Name</h2>
<p>Brief description of the component</p>
```

### 2. Usage Guidelines (existing pattern)
```tsx
<div className="bg-slate-50 border rounded-lg p-4">
  <h3>Common Use Cases</h3>
  <ul>...</ul>
</div>

<div className="grid grid-cols-2 gap-4">
  <div className="bg-green-50">✓ Do</div>
  <div className="bg-red-50">✗ Don't</div>
</div>
```

### 3. Enhanced Documentation Sections
```tsx
<div className="space-y-4 mb-8">
  {/* Props Table */}
  <ComponentDocSection title="📋 Props & API Reference" defaultExpanded={false}>
    <PropsTable props={[...]} />
  </ComponentDocSection>

  {/* Code Examples */}
  <ComponentDocSection title="💻 Code Examples">
    <div className="space-y-4">
      <div>
        <h5>Example Name</h5>
        <CodeSnippet title="..." code={`...`} />
      </div>
      {/* More examples... */}
    </div>
  </ComponentDocSection>

  {/* Real-World Usage */}
  <ComponentDocSection title="🌍 Real-World Usage">
    <UsageExamples examples={[...]} />
  </ComponentDocSection>
</div>
```

### 4. Component Demonstrations
```tsx
<div className="space-y-8">
  {/* Visual examples of the component */}
</div>
```

---

## Components with Enhanced Docs

Current status of documentation enhancements:

- ✅ **Button** - Complete (props, examples, usage)
- ✅ **Card** - Complete (props, examples, usage)
- ✅ **TextInput** - Complete (props, examples, usage)
- ⏳ **Other components** - To be added

---

## Adding Documentation to New Components

### Step 1: Import Documentation Components
```tsx
import { PropsTable } from './components/documentation/PropsTable';
import { CodeSnippet } from './components/documentation/CodeSnippet';
import { UsageExamples } from './components/documentation/UsageExample';
import { ComponentDocSection } from './components/documentation/ComponentDocSection';
```

### Step 2: Define Props Data
Create an array of prop definitions following the `PropDefinition` interface.

### Step 3: Write Code Examples
Create realistic code snippets showing:
- Basic usage
- Common patterns
- Advanced use cases
- Integration with other components

### Step 4: Document Real-World Usage
Identify where the component is actually used in the TTDS site pages and templates.

### Step 5: Wrap in ComponentDocSection
Use collapsible sections to keep documentation organized and scannable.

---

## Design Tokens Used

These documentation components follow TTDS design principles:

**Colors:**
- Emerald: Success states, code prop names
- Blue: Type information, section icons
- Slate: Text, borders, backgrounds
- Red: Required indicators
- Amber: Pattern usage examples
- Purple: Page usage examples

**Spacing:**
- Consistent use of TTDS spacing tokens
- Gap utilities for flex/grid layouts
- Padding variants for different contexts

**Typography:**
- Small text (text-xs, text-sm) for documentation
- Font weight (700) for headings
- Leading-relaxed for readability

---

## Future Enhancements

Potential improvements:

1. **Interactive Prop Editor**
   - Live component preview
   - Adjust props in real-time
   - See instant visual feedback

2. **Accessibility Inspector**
   - ARIA attribute documentation
   - Keyboard navigation guide
   - Screen reader notes

3. **Responsive Preview**
   - Toggle between mobile/tablet/desktop views
   - Show breakpoint behavior

4. **Component Status Badges**
   - Implementation status
   - LWC conversion readiness
   - Salesforce compatibility

5. **Search & Filter**
   - Search across all props
   - Filter by component type
   - Quick navigation

6. **Version History**
   - Track prop changes
   - Migration guides
   - Deprecation warnings

---

## Best Practices

1. **Keep Examples Realistic**
   - Use actual project context
   - Show real data patterns
   - Reference actual site pages

2. **Document Edge Cases**
   - Empty states
   - Loading states
   - Error handling
   - Long text overflow

3. **Maintain Consistency**
   - Use same terminology
   - Follow naming conventions
   - Match code style guide

4. **Update When Components Change**
   - Props added/removed
   - Behavior changes
   - New variants

5. **Link Related Components**
   - Show composition patterns
   - Reference dependencies
   - Cross-link examples

---

## Contributing

When adding new documentation components:

1. Follow the established component structure
2. Use TypeScript interfaces for props
3. Include JSDoc comments
4. Test with multiple content types
5. Ensure responsive behavior
6. Maintain accessibility standards

---

## Questions or Issues?

- Check existing component examples (Button, Card, TextInput)
- Review the pattern guide in this README
- Ensure consistency with TTDS design tokens
- Test collapsible sections and interactive features

---

**Last Updated:** November 27, 2024  
**Version:** 1.0  
**Status:** Active Development
