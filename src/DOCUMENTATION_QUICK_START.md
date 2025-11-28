# Documentation Quick Start Guide

A step-by-step guide for adding enhanced documentation to TTDS components.

---

## 🎯 Goal

Add interactive documentation (props tables, code examples, real-world usage) to TTDS components, making them easier to understand and implement.

---

## ⚡ Quick Steps

### 1. Import Documentation Components

Add these imports to your component section in `App.tsx`:

```tsx
import { PropsTable } from './components/documentation/PropsTable';
import { CodeSnippet } from './components/documentation/CodeSnippet';
import { UsageExamples } from './components/documentation/UsageExample';
import { ComponentDocSection } from './components/documentation/ComponentDocSection';
```

### 2. Define Component Props

Create an array of prop definitions for your component:

```tsx
const myComponentProps = [
  {
    name: 'variant',
    type: 'string',
    required: false,
    default: '"primary"',
    description: 'Visual style variant',
    options: ['primary', 'secondary', 'tertiary']
  },
  {
    name: 'size',
    type: 'string', 
    required: false,
    default: '"medium"',
    description: 'Size of the component',
    options: ['small', 'medium', 'large']
  },
  {
    name: 'disabled',
    type: 'boolean',
    required: false,
    default: 'false',
    description: 'Disables user interaction'
  },
  {
    name: 'onClick',
    type: '() => void',
    required: false,
    description: 'Callback when component is clicked'
  },
  {
    name: 'children',
    type: 'React.ReactNode',
    required: true,
    description: 'Content to display'
  }
];
```

### 3. Add Documentation Sections

Insert this structure into your component section (before the visual examples):

```tsx
{/* Enhanced Documentation */}
<div className="space-y-4 mb-8">
  {/* Props Table */}
  <ComponentDocSection title="📋 Props & API Reference" defaultExpanded={false}>
    <PropsTable props={myComponentProps} />
  </ComponentDocSection>

  {/* Code Examples */}
  <ComponentDocSection title="💻 Code Examples">
    <div className="space-y-4">
      <div>
        <h5 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>
          Basic Usage
        </h5>
        <CodeSnippet 
          title="Simple Example"
          code={`import { MyComponent } from './components/ttds/MyComponent';

function Example() {
  return (
    <MyComponent variant="primary">
      Hello World
    </MyComponent>
  );
}`} 
        />
      </div>

      {/* Add more examples */}
    </div>
  </ComponentDocSection>

  {/* Real-World Usage */}
  <ComponentDocSection title="🌍 Real-World Usage">
    <UsageExamples examples={[
      {
        title: 'Dashboard Section',
        description: 'Used for displaying user metrics and statistics',
        context: 'Dashboard Page - Stats Panel',
        icon: 'page'
      },
      {
        title: 'Content Cards',
        description: 'Primary action button within card components',
        context: 'Learning Activity Cards',
        icon: 'section'
      }
    ]} />
  </ComponentDocSection>
</div>
```

---

## 📝 Detailed Instructions

### Props Table Configuration

**PropDefinition Interface:**
```typescript
interface PropDefinition {
  name: string;           // Prop name (e.g., 'variant')
  type: string;           // TypeScript type (e.g., 'string', 'boolean')
  required?: boolean;     // Is this prop required?
  default?: string;       // Default value (in quotes if string)
  description: string;    // What does this prop do?
  options?: string[];     // Valid values (for enums/unions)
}
```

**Tips:**
- Include ALL props, even inherited ones
- Document default values accurately
- For string unions, list all options in the `options` array
- Write clear, concise descriptions (action-oriented)
- Use TypeScript type syntax for the `type` field

**Example:**
```tsx
{
  name: 'elevation',
  type: 'string',
  required: false,
  default: '"low"',
  description: 'Shadow depth for visual hierarchy',
  options: ['none', 'low', 'medium', 'high']
}
```

---

### Code Examples Best Practices

**Structure:**
```tsx
<div>
  <h5 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>
    Example Name
  </h5>
  <CodeSnippet 
    title="Descriptive Title"
    code={`code here...`} 
  />
</div>
```

**What to Include:**
1. **Basic Usage** - Simplest possible implementation
2. **Common Pattern** - Most frequent use case
3. **Advanced Feature** - Complex or powerful capability
4. **Integration** - Using with other components

**Tips:**
- Use realistic variable names
- Show imports at the top
- Include state management when relevant
- Add brief inline comments for clarity
- Format code properly (indentation matters!)
- Use backticks for template literals

**Example:**
```tsx
<CodeSnippet 
  title="Controlled Input with Validation"
  code={`import { TextInput } from './components/ttds/TextInput';
import { useState } from 'react';

function MyForm() {
  const [email, setEmail] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const value = e.target.value;
    setEmail(value);
    
    // Validate email format
    if (value && !value.includes('@')) {
      setError('Please enter a valid email');
    } else {
      setError('');
    }
  };

  return (
    <TextInput
      label="Email"
      type="email"
      value={email}
      onChange={handleChange}
      error={error}
      fullWidth
    />
  );
}`} 
/>
```

---

### Real-World Usage Examples

**Structure:**
```tsx
<UsageExamples examples={[
  {
    title: 'Context Title',
    description: 'Explain how it's used and why',
    context: 'Specific Page or Section Name',
    icon: 'page' // or 'section' or 'pattern'
  }
]} />
```

**Icon Types:**
- `page` - Full page implementations (purple)
- `section` - Page sections or specific components (blue)
- `pattern` - Design patterns or best practices (amber)

**Tips:**
- Reference ACTUAL pages/sections from the site structure
- Explain WHY the component is used that way
- Be specific about context
- Aim for 3-4 examples per component
- Mix different icon types for variety

**Example:**
```tsx
<UsageExamples examples={[
  {
    title: 'Sign In Form',
    description: 'Email and password inputs for user authentication with validation',
    context: 'Sign In Page',
    icon: 'page'
  },
  {
    title: 'Profile Settings',
    description: 'Editable fields for updating user information and preferences',
    context: 'Dashboard - Settings Section',
    icon: 'section'
  },
  {
    title: 'Inline Validation Pattern',
    description: 'Real-time validation feedback as users type',
    context: 'All forms with required fields',
    icon: 'pattern'
  },
  {
    title: 'Search Filters',
    description: 'Text input combined with select dropdowns for filtering content',
    context: 'Learning Center, Partner Portal',
    icon: 'pattern'
  }
]} />
```

---

## 🎨 Styling Guidelines

### Section Layout
```tsx
<div className="space-y-4 mb-8">
  {/* Sections go here */}
</div>
```
- Use `space-y-4` between sections
- Add `mb-8` after documentation block
- Keep sections collapsible with `ComponentDocSection`

### Example Headers
```tsx
<h5 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>
  Example Title
</h5>
```
- Small text size (`text-sm`)
- Slate color for consistency
- Bold weight (700)
- Small bottom margin

### Nested Content
```tsx
<div className="space-y-4">
  <div>
    {/* Example 1 */}
  </div>
  <div>
    {/* Example 2 */}
  </div>
</div>
```
- Use consistent spacing
- Wrap each example in a div
- Stack vertically with space-y utilities

---

## ✅ Checklist

Before submitting your documentation:

- [ ] All props are documented (including inherited ones)
- [ ] Default values are accurate
- [ ] Options arrays are complete for enums
- [ ] At least 3 code examples provided
  - [ ] Basic usage
  - [ ] Common pattern
  - [ ] Advanced/integrated example
- [ ] Real-world usage has 3-4 examples
- [ ] Examples reference actual site pages/sections
- [ ] All code is properly formatted and runnable
- [ ] Icons are appropriate (page/section/pattern)
- [ ] Sections are wrapped in `ComponentDocSection`
- [ ] Documentation appears BEFORE visual examples
- [ ] Tested in browser (no console errors)

---

## 📚 Reference Examples

See complete implementations in `App.tsx`:

### Button Component (Line ~465)
- 9 props documented
- 3 code examples (basic, with icons, loading state)
- 4 usage examples
- Good coverage of all features

### Card Component (Line ~13689)
- 6 props documented
- 3 code examples (basic, with slots, custom styled)
- 4 usage examples
- Shows slot pattern well

### TextInput Component (Line ~829)
- 10 props documented
- 3 code examples (basic, controlled with validation, password)
- 4 usage examples
- Demonstrates form patterns

---

## 🚀 Quick Copy-Paste Template

```tsx
{/* Enhanced Documentation */}
<div className="space-y-4 mb-8">
  <ComponentDocSection title="📋 Props & API Reference" defaultExpanded={false}>
    <PropsTable props={[
      {
        name: 'propName',
        type: 'string',
        required: false,
        default: '"value"',
        description: 'Description here',
        options: ['option1', 'option2']
      }
    ]} />
  </ComponentDocSection>

  <ComponentDocSection title="💻 Code Examples">
    <div className="space-y-4">
      <div>
        <h5 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>
          Basic Usage
        </h5>
        <CodeSnippet 
          title="Simple Example"
          code={`import { Component } from './components/ttds/Component';

function Example() {
  return <Component>Content</Component>;
}`} 
        />
      </div>
    </div>
  </ComponentDocSection>

  <ComponentDocSection title="🌍 Real-World Usage">
    <UsageExamples examples={[
      {
        title: 'Use Case Title',
        description: 'Explanation of usage',
        context: 'Page or Section Name',
        icon: 'page'
      }
    ]} />
  </ComponentDocSection>
</div>
```

---

## 🎯 Next Components to Document

Priority list for Phase 2:

**Primitives:**
1. SelectInput
2. SearchInput
3. Checkbox
4. Radio
5. Switch

**Navigation:**
6. Header
7. TabStrip
8. Breadcrumbs
9. Pagination

**Chips & Tags:**
10. ChipStatus
11. ChipLevel
12. Badge
13. Tag

Pick one and follow this guide!

---

## ❓ Common Questions

**Q: How many props should I document?**
A: All of them! Include every prop the component accepts.

**Q: How many code examples?**
A: Minimum 3, but add more if the component is complex.

**Q: What if the component isn't used in any pages yet?**
A: Document where you EXPECT it to be used, or show hypothetical examples.

**Q: Should I expand sections by default?**
A: Generally no (`defaultExpanded={false}`), unless it's a critical component like Button.

**Q: Can I skip real-world usage?**
A: No - this is valuable context! Even if the component is new, describe intended use cases.

**Q: What about private/internal props?**
A: Document them too, but note they're for internal use in the description.

---

## 💡 Pro Tips

1. **Work from the actual component file** - Check the TypeScript interface for all props
2. **Test your code examples** - Make sure they actually work
3. **Be specific** - "Dashboard Page" is better than "various pages"
4. **Think about the developer** - What would YOU want to know?
5. **Keep it updated** - When props change, update the docs
6. **Link related components** - Mention dependencies or complements
7. **Show edge cases** - Error states, empty states, loading states
8. **Use real data** - Avoid "foo", "bar", "test" in examples

---

## 🏁 Ready to Start?

1. Pick a component from the priority list
2. Open `App.tsx` and find the component section
3. Follow the template above
4. Check off the checklist
5. Test in browser
6. Update the progress counter in `DocProgress` component
7. Commit your changes!

---

**Questions?** Check:
- `/components/documentation/README.md` - Detailed component docs
- `/ENHANCED_DOCUMENTATION_SUMMARY.md` - Overview of the system
- Existing examples (Button, Card, TextInput) in `App.tsx`

**Good luck! 🚀**
