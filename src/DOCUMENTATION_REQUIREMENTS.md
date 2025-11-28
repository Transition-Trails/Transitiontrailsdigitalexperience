# Documentation Requirements for TTDS Components

## Current Documentation Status

Based on the Component Status registry tracking 56 components:
- ✅ **38 Documented** (68% complete)
- 🚧 **2 In Progress** (4%)
- 📝 **16 Need Documentation** (28%)

---

## 🔹 PRIMITIVES (18 Components) - Priority 1

### ✅ Already Documented (14/18)
1. **Button** - ✅ Complete (Salesforce-ready)
2. **Text Input** - ✅ Complete
3. **Text Area** - ✅ Complete
4. **Select Input** - ✅ Complete
5. **Search Input** - ✅ Complete
6. **Checkbox** - ✅ Complete (Salesforce-ready)
7. **Radio** - ✅ Complete
8. **Switch** - ✅ Complete
9. **Chip Status** - ✅ Complete
10. **Chip Level** - ✅ Complete
11. **Badge** - ✅ Complete
12. **Tag** - ✅ Complete (Salesforce-ready)
13. **Stepper** - ✅ Complete
14. **Tooltip** - ✅ Complete
15. **Skeleton** - ✅ Complete

### 📝 Need Documentation (4/18) - **PRIORITY**

#### **16. Card (Primitive Surface Container)**
- **File**: `/components/ttds/Card.tsx`
- **Status**: Salesforce-ready
- **Use Cases**: Content containers, info displays, grouped content
- **Required Documentation**:
  - ✓ Component title & description
  - ✓ Component status badge
  - ✓ Common use cases section
  - ✓ Usage guidelines (Do's and Don'ts)
  - ✓ Props & API Reference table
  - ✓ Code examples (Basic, With Header, Elevated, Interactive)
  - ✓ Usage examples with live preview
  - ✓ Accessibility notes
  - ✓ Design tokens used
  - ✓ Related components links

#### **17. Panel (Surface Container)**
- **File**: `/components/ttds/Panel.tsx`
- **Status**: Complete
- **Use Cases**: Page sections, grouped content areas, dashboard sections
- **Required Documentation**:
  - ✓ Component title & description
  - ✓ Component status badge
  - ✓ Common use cases section
  - ✓ Usage guidelines (Do's and Don'ts)
  - ✓ Props & API Reference table
  - ✓ Code examples (Basic, With padding variants, Nested panels)
  - ✓ Usage examples with live preview
  - ✓ Accessibility notes
  - ✓ Design tokens used
  - ✓ Related components links

#### **18. Modal (Overlay Dialog)**
- **File**: `/components/ttds/Modal.tsx`
- **Status**: Needs-LWC
- **Use Cases**: Confirmations, forms, detail views, alerts
- **Required Documentation**:
  - ✓ Component title & description
  - ✓ Component status badge
  - ✓ Common use cases section
  - ✓ Usage guidelines (Do's and Don'ts)
  - ✓ Props & API Reference table
  - ✓ Code examples (Basic, Confirmation, Form, Size variants)
  - ✓ Usage examples with live preview
  - ✓ Accessibility notes (Focus trap, ESC key, ARIA attributes)
  - ✓ Design tokens used
  - ✓ Related components links

#### **19. Toast (Notification)**
- **File**: `/components/ttds/Toast.tsx`
- **Status**: Needs-LWC
- **Use Cases**: Success messages, errors, warnings, info notifications
- **Required Documentation**:
  - ✓ Component title & description
  - ✓ Component status badge
  - ✓ Common use cases section
  - ✓ Usage guidelines (Do's and Don'ts)
  - ✓ Props & API Reference table
  - ✓ Code examples (Success, Error, Warning, Info, Auto-dismiss)
  - ✓ Usage examples with live preview
  - ✓ Accessibility notes (ARIA live regions, screen reader support)
  - ✓ Design tokens used
  - ✓ Related components links

---

## 📐 NAVIGATION (4 Components)

### ✅ Already Documented (4/4)
1. **Header** - ✅ Documented (Needs-LWC)
2. **TabStrip** - ✅ Documented (Complete)
3. **Breadcrumbs** - ✅ Documented (Complete)
4. **Pagination** - ✅ Documented (Needs-LWC)

---

## 🎛️ PANELS (6 Components)

### ✅ Already Documented (3/6)
1. **Learner Stats Panel** - ✅ Documented (Salesforce-ready)
2. **Goals & Progress Panel** - ✅ Documented (Salesforce-ready)
3. **Skills & Certifications Panel** - ✅ Documented (Salesforce-ready)

### 📝 Need Documentation (3/6)

#### **4. Penny Insights Rail**
- **File**: `/components/ttds/PennyInsightRail.tsx`
- **Status**: Needs-LWC (Salesforce objects mapped)
- **Dependencies**: AI_Insight__c
- **Use Cases**: AI-powered insights, recommendations, tips sidebar
- **Required Documentation**: [Full documentation pattern]

#### **5. Badges & Credits Panel**
- **File**: `/components/ttds/BadgesAndCreditsPanel.tsx`
- **Status**: Needs-LWC (Salesforce objects mapped)
- **Dependencies**: Badge__c, Credit__c
- **Use Cases**: Achievement displays, credit tracking, gamification
- **Required Documentation**: [Full documentation pattern]

#### **6. Penny Tip**
- **File**: `/components/ttds/PennyTip.tsx`
- **Status**: Complete
- **Use Cases**: Quick tips, contextual help, AI assistance
- **Required Documentation**: [Full documentation pattern]

---

## 🎴 CARDS (11 Components)

### ✅ Already Documented (4/11)
1. **Partner Project Card** - ✅ Documented (Salesforce-ready)
2. **Event Session Card** - ✅ Documented (Salesforce-ready)
3. **Learning Activity Card** - ✅ Documented (Salesforce-ready)
4. **Assignment Card** - ✅ Documented (Salesforce-ready)

### 🚧 In Progress (2/11)
5. **AI Trail Card** - 🚧 In Progress
6. **Citizen Platform Card** - 🚧 In Progress

### ✅ Already Documented (2/11)
7. **Trail Mission Card** - ✅ Documented (Complete)
8. **Trail Path Card** - ✅ Documented (Complete)

### 📝 Need Documentation (3/11)

#### **9. Roadmap Item Card**
- **File**: `/components/ttds/RoadmapItemCard.tsx`
- **Status**: Needs-LWC (Salesforce objects mapped)
- **Dependencies**: Roadmap_Item__c
- **Use Cases**: Product roadmap, feature planning, vision pages
- **Required Documentation**: [Full documentation pattern]

#### **10. Community Post Card**
- **File**: Need to verify if exists
- **Status**: Needs-LWC (Salesforce objects mapped)
- **Dependencies**: Post__c, Comment__c
- **Use Cases**: Social feeds, community engagement, discussions
- **Required Documentation**: [Full documentation pattern]

#### **11. Program Overview Card**
- **File**: Need to verify if exists
- **Status**: Needs-LWC (Salesforce objects mapped)
- **Dependencies**: Program__c
- **Use Cases**: Program displays, catalog views, overview pages
- **Required Documentation**: [Full documentation pattern]

---

## 📦 SECTIONS (3 Components)

### ✅ Already Documented (3/3)
1. **Metric Tile** - ✅ Documented (Complete)
2. **Feature Roadmap Section** - ✅ Documented (Complete)
3. **Donation CTA Section** - ✅ Documented (Needs-LWC)

---

## 📄 TEMPLATES (5 Components)

### ✅ Already Documented (5/5)
1. **Vision/Donor Page** - ✅ Documented (Complete)
2. **Dashboard Template** - ✅ Documented (Needs-LWC)
3. **Program Overview Template** - ✅ Documented (Complete)
4. **Learning Center Template** - ✅ Documented (Needs-LWC)
5. **Community Feed Template** - ✅ Documented (Needs-LWC)

---

## Documentation Pattern (Standard for ALL Components)

Each component documentation section must include:

### 1. **Header Section**
```tsx
<section id="component-id" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
  <div>
    <div className="flex items-center justify-between mb-2">
      <h2 className="text-slate-900">Component Name</h2>
      <ComponentStatusBadge status="complete|needs-lwc|salesforce-ready|in-progress" size="md" />
    </div>
    <p className="text-slate-600 mb-4">
      Clear, concise description of what the component does and when to use it.
    </p>
  </div>
```

### 2. **Common Use Cases** (Required)
```tsx
<div className="bg-slate-50 border border-slate-200 rounded-lg p-4 mb-4">
  <h3 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>Common Use Cases</h3>
  <ul className="space-y-1 text-sm text-slate-600">
    <li>• <strong>Use Case 1:</strong> Description</li>
    <li>• <strong>Use Case 2:</strong> Description</li>
    <li>• <strong>Use Case 3:</strong> Description</li>
  </ul>
</div>
```

### 3. **Usage Guidelines** (Do's and Don'ts)
```tsx
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
  <div className="bg-green-50 border border-green-200 rounded-lg p-4">
    <h4 className="text-sm text-green-800 mb-2" style={{ fontWeight: 700 }}>✓ Do</h4>
    <ul className="space-y-1 text-xs text-green-700">
      <li>• Best practice 1</li>
      <li>• Best practice 2</li>
      <li>• Best practice 3</li>
    </ul>
  </div>
  <div className="bg-red-50 border border-red-200 rounded-lg p-4">
    <h4 className="text-sm text-red-800 mb-2" style={{ fontWeight: 700 }}>✗ Don't</h4>
    <ul className="space-y-1 text-xs text-red-700">
      <li>• Anti-pattern 1</li>
      <li>• Anti-pattern 2</li>
      <li>• Anti-pattern 3</li>
    </ul>
  </div>
</div>
```

### 4. **Props & API Reference** (Required)
```tsx
<ComponentDocSection title="📋 Props & API Reference" defaultExpanded={true}>
  <PropsTable props={[
    {
      name: 'propName',
      type: 'string | boolean | number',
      required: true | false,
      default: '"default"',
      description: 'What this prop does',
      options: ['option1', 'option2'] // if applicable
    }
  ]} />
</ComponentDocSection>
```

### 5. **Code Examples** (Minimum 3)
```tsx
<ComponentDocSection title="💻 Code Examples">
  <div className="space-y-4">
    <div>
      <h5 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>Basic Usage</h5>
      <CodeSnippet title="Example Title" code={`import { Component } from './path';

function Example() {
  return <Component prop="value" />;
}`} />
    </div>
  </div>
</ComponentDocSection>
```

### 6. **Usage Examples** (Live Preview - Required)
```tsx
<ComponentDocSection title="🎨 Usage Examples" defaultExpanded={true}>
  <UsageExamples
    title="Example Title"
    description="What this example shows"
  >
    {/* Live component rendering */}
    <Component />
  </UsageExamples>
</ComponentDocSection>
```

### 7. **Accessibility Notes** (Required)
```tsx
<ComponentDocSection title="♿ Accessibility">
  <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
    <ul className="space-y-2 text-sm text-blue-900">
      <li>• <strong>Keyboard:</strong> Keyboard interaction pattern</li>
      <li>• <strong>Screen Reader:</strong> ARIA attributes used</li>
      <li>• <strong>Focus:</strong> Focus management behavior</li>
      <li>• <strong>WCAG:</strong> Compliance level and considerations</li>
    </ul>
  </div>
</ComponentDocSection>
```

### 8. **Design Tokens** (Required)
```tsx
<ComponentDocSection title="🎨 Design Tokens">
  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3 text-sm">
      <div>
        <div className="text-slate-500 mb-1">Colors</div>
        <code className="text-xs">ttds-color-*</code>
      </div>
      <div>
        <div className="text-slate-500 mb-1">Spacing</div>
        <code className="text-xs">ttds-space-*</code>
      </div>
      <div>
        <div className="text-slate-500 mb-1">Radius</div>
        <code className="text-xs">ttds-radius-*</code>
      </div>
    </div>
  </div>
</ComponentDocSection>
```

### 9. **Related Components** (Optional but recommended)
```tsx
<ComponentDocSection title="🔗 Related Components">
  <div className="flex flex-wrap gap-2">
    <a href="#component-id" className="px-3 py-1.5 bg-blue-50 text-blue-700 rounded-lg border border-blue-200 hover:bg-blue-100 transition-colors text-sm">
      Related Component
    </a>
  </div>
</ComponentDocSection>
```

---

## Priority Order for Completion

### Phase 1: Complete Primitives (IMMEDIATE)
1. ✅ Card - Surface container primitive
2. ✅ Panel - Layout primitive
3. ✅ Modal - Overlay primitive
4. ✅ Toast - Notification primitive

**Reason**: Primitives are foundational and referenced by other components. Complete these first to establish patterns.

### Phase 2: Complete Panels (NEXT)
5. Penny Insights Rail
6. Badges & Credits Panel
7. Penny Tip

**Reason**: Panels are used in templates and need complete documentation for dashboard/page implementation.

### Phase 3: Complete Cards (THEN)
8. Roadmap Item Card
9. Community Post Card
10. Program Overview Card
11. AI Trail Card (finish in-progress)
12. Citizen Platform Card (finish in-progress)

**Reason**: Cards are reusable components used across multiple templates and need thorough documentation for consistent use.

### Phase 4: Review & Polish (FINAL)
- Review all documentation for consistency
- Ensure all code examples are tested and working
- Verify all accessibility notes are accurate
- Check all design token references
- Add missing related component links

---

## Documentation Quality Checklist

For each component, verify:

- [ ] Component file exists and is functional
- [ ] Status badge matches component registry
- [ ] All 9 required sections are present
- [ ] At least 3 code examples provided
- [ ] Live usage examples render correctly
- [ ] Props table is complete and accurate
- [ ] Accessibility section covers keyboard, screen reader, and focus
- [ ] Design tokens are correctly referenced
- [ ] Do's and Don'ts are practical and specific
- [ ] Common use cases reflect real-world usage
- [ ] All code snippets are syntactically correct
- [ ] Related components are linked
- [ ] Section ID matches navigation anchor

---

## Estimated Effort

- **Per Primitive Component**: 2-3 hours (complex interactions, accessibility critical)
- **Per Panel Component**: 1.5-2 hours (simpler structure, data-focused)
- **Per Card Component**: 1-1.5 hours (similar patterns, reusable structure)

**Total Estimated Effort**: ~20-25 hours to complete all missing documentation

---

## Success Metrics

Documentation is complete when:
- ✅ All 56 components have full documentation sections
- ✅ Documentation Progress shows 100%
- ✅ All Quality Metrics show 100% for Design and Code Complete
- ✅ Component Status Dashboard shows accurate counts
- ✅ Search and filter system returns accurate results
- ✅ All component pages load without errors
- ✅ All code examples are tested and functional
- ✅ Accessibility documentation is comprehensive
- ✅ Design token references are accurate
- ✅ Navigation anchors work correctly

**Current Progress**: 38/56 = 68% → **Target**: 56/56 = 100%
