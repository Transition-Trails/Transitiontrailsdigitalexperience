import React, { useState } from 'react';
import { 
  Keyboard, 
  Eye, 
  CheckCircle2, 
  Focus, 
  ArrowRight,
  CircleAlert,
  Info,
  ExternalLink,
  ChevronRight
} from 'lucide-react';

type AccessibilitySection = 'overview' | 'keyboard' | 'wcag' | 'screenreader' | 'focus';

interface KeyboardShortcut {
  keys: string[];
  description: string;
  context: string;
}

interface WCAGCriteria {
  level: 'A' | 'AA' | 'AAA';
  criterion: string;
  description: string;
  components: string[];
  implementation: string;
  status: 'complete' | 'in-progress' | 'planned';
}

interface ScreenReaderNote {
  component: string;
  notes: string[];
  announcements: string[];
  bestPractices: string[];
}

interface FocusPattern {
  pattern: string;
  description: string;
  when: string;
  implementation: string;
  example: string;
}

export const AccessibilityDocs: React.FC = () => {
  const [activeSection, setActiveSection] = useState<AccessibilitySection>('overview');

  const sections = [
    { id: 'overview' as const, name: 'Overview', icon: Info },
    { id: 'keyboard' as const, name: 'Keyboard Shortcuts', icon: Keyboard },
    { id: 'wcag' as const, name: 'WCAG Compliance', icon: CheckCircle2 },
    { id: 'screenreader' as const, name: 'Screen Readers', icon: Eye },
    { id: 'focus' as const, name: 'Focus Management', icon: Focus }
  ];

  const keyboardShortcuts: KeyboardShortcut[] = [
    {
      keys: ['Tab'],
      description: 'Move focus to next interactive element',
      context: 'Global navigation'
    },
    {
      keys: ['Shift', 'Tab'],
      description: 'Move focus to previous interactive element',
      context: 'Global navigation'
    },
    {
      keys: ['Enter'],
      description: 'Activate button, link, or selected element',
      context: 'All interactive elements'
    },
    {
      keys: ['Space'],
      description: 'Activate button or toggle checkbox',
      context: 'Buttons, checkboxes'
    },
    {
      keys: ['Escape'],
      description: 'Close modal, dialog, or dropdown',
      context: 'Overlay components'
    },
    {
      keys: ['Arrow Keys'],
      description: 'Navigate between radio buttons, tabs, or menu items',
      context: 'Radio groups, tab panels, menus'
    },
    {
      keys: ['Home'],
      description: 'Move to first item in list or menu',
      context: 'Lists, menus, tab panels'
    },
    {
      keys: ['End'],
      description: 'Move to last item in list or menu',
      context: 'Lists, menus, tab panels'
    },
    {
      keys: ['Ctrl/Cmd', 'K'],
      description: 'Open search or command palette',
      context: 'Global search'
    }
  ];

  const wcagCriteria: WCAGCriteria[] = [
    {
      level: 'A',
      criterion: '1.1.1 Non-text Content',
      description: 'All images must have meaningful alt text',
      components: ['ImageWithFallback', 'Card Components', 'Partner Logos'],
      implementation: 'Use alt attribute for all images. Decorative images use alt=""',
      status: 'complete'
    },
    {
      level: 'A',
      criterion: '1.3.1 Info and Relationships',
      description: 'Semantic HTML structure for all content',
      components: ['All Components'],
      implementation: 'Use proper heading hierarchy (h1-h6), lists (ul/ol), and semantic elements',
      status: 'complete'
    },
    {
      level: 'A',
      criterion: '2.1.1 Keyboard',
      description: 'All functionality available via keyboard',
      components: ['Buttons', 'Forms', 'Navigation', 'Modals'],
      implementation: 'Ensure tab order, keyboard handlers, and focus management',
      status: 'complete'
    },
    {
      level: 'A',
      criterion: '2.4.1 Bypass Blocks',
      description: 'Skip navigation links provided',
      components: ['Header', 'Navigation'],
      implementation: 'Skip to main content link at top of page',
      status: 'in-progress'
    },
    {
      level: 'AA',
      criterion: '1.4.3 Contrast (Minimum)',
      description: 'Text contrast ratio minimum 4.5:1 for normal text, 3:1 for large text',
      components: ['All Text Components'],
      implementation: 'All TTDS color tokens tested for WCAG AA compliance',
      status: 'complete'
    },
    {
      level: 'AA',
      criterion: '1.4.11 Non-text Contrast',
      description: 'UI components and graphical objects have 3:1 contrast',
      components: ['Buttons', 'Form Inputs', 'Focus Indicators'],
      implementation: 'Border colors and focus rings meet 3:1 contrast requirement',
      status: 'complete'
    },
    {
      level: 'AA',
      criterion: '2.4.7 Focus Visible',
      description: 'Keyboard focus indicator is visible',
      components: ['All Interactive Components'],
      implementation: 'ttds-border-focus token provides visible focus ring',
      status: 'complete'
    },
    {
      level: 'AA',
      criterion: '3.2.4 Consistent Identification',
      description: 'Components with same functionality are identified consistently',
      components: ['Icons', 'Buttons', 'Navigation'],
      implementation: 'TTDS component library ensures consistent patterns',
      status: 'complete'
    },
    {
      level: 'AA',
      criterion: '4.1.2 Name, Role, Value',
      description: 'All UI components have accessible name and role',
      components: ['Forms', 'Buttons', 'Custom Components'],
      implementation: 'Use ARIA labels, roles, and states appropriately',
      status: 'in-progress'
    }
  ];

  const screenReaderNotes: ScreenReaderNote[] = [
    {
      component: 'Buttons',
      notes: [
        'All buttons have descriptive labels',
        'Icon-only buttons use aria-label',
        'Button state changes are announced'
      ],
      announcements: [
        'Primary CTA button: "Enroll Now, button"',
        'Icon button: "Close dialog, button"',
        'Loading state: "Loading, button, disabled"'
      ],
      bestPractices: [
        'Use <button> element, not <div> with click handler',
        'Provide aria-label for icon-only buttons',
        'Use aria-pressed for toggle buttons'
      ]
    },
    {
      component: 'Navigation',
      notes: [
        'Navigation wrapped in <nav> with aria-label',
        'Current page indicated with aria-current="page"',
        'Breadcrumbs use ordered list structure'
      ],
      announcements: [
        'Main navigation: "Main navigation, navigation"',
        'Active link: "Dashboard, link, current page"',
        'Breadcrumb: "Home, link, 1 of 3"'
      ],
      bestPractices: [
        'Use <nav> element with descriptive aria-label',
        'Mark current page with aria-current attribute',
        'Provide skip navigation link'
      ]
    },
    {
      component: 'Forms',
      notes: [
        'All inputs have associated labels',
        'Error messages linked via aria-describedby',
        'Required fields marked with aria-required'
      ],
      announcements: [
        'Text input: "Email address, required, edit text"',
        'Error state: "Email address, invalid, Please enter a valid email"',
        'Success: "Form submitted successfully"'
      ],
      bestPractices: [
        'Always use <label> element associated with input',
        'Link error messages with aria-describedby',
        'Announce form submission results'
      ]
    },
    {
      component: 'Modals & Dialogs',
      notes: [
        'Focus trapped within modal when open',
        'Focus returns to trigger element on close',
        'Modal has role="dialog" and aria-modal="true"'
      ],
      announcements: [
        'Modal opens: "Confirm action, dialog"',
        'Modal closes: Focus returns to "Open dialog, button"'
      ],
      bestPractices: [
        'Use role="dialog" or role="alertdialog"',
        'Set aria-modal="true"',
        'Implement focus trap',
        'Return focus on close'
      ]
    },
    {
      component: 'Cards',
      notes: [
        'Heading structure maintained within cards',
        'Interactive cards have single focusable element',
        'Status badges have accessible text'
      ],
      announcements: [
        'Event card: "Workshop: React Fundamentals, heading level 3, Saturday March 15, In-person, Register, button"',
        'Status: "Completed, success status"'
      ],
      bestPractices: [
        'Maintain heading hierarchy',
        'Make entire card clickable or use single CTA',
        'Include visible and accessible status indicators'
      ]
    },
    {
      component: 'Tables',
      notes: [
        'Use <table> with <thead> and <tbody>',
        'Column headers use <th> with scope="col"',
        'Row headers use <th> with scope="row"'
      ],
      announcements: [
        'Table: "Student progress, table, 5 rows, 4 columns"',
        'Cell: "Sarah Johnson, Student Name, row 1, column 1"'
      ],
      bestPractices: [
        'Use semantic table elements',
        'Provide table caption or aria-label',
        'Use scope attribute on header cells'
      ]
    }
  ];

  const focusPatterns: FocusPattern[] = [
    {
      pattern: 'Focus on First Error',
      description: 'After form validation, move focus to first error field',
      when: 'Form submission fails validation',
      implementation: 'Use ref to target first invalid input and call .focus()',
      example: 'firstErrorRef.current?.focus();'
    },
    {
      pattern: 'Modal Focus Trap',
      description: 'Keep focus within modal, prevent tabbing to background',
      when: 'Modal or dialog is open',
      implementation: 'Use focus-trap-react or custom implementation with keydown handler',
      example: 'Install: npm install focus-trap-react'
    },
    {
      pattern: 'Return Focus',
      description: 'Return focus to trigger element after closing overlay',
      when: 'Modal, dropdown, or menu closes',
      implementation: 'Store reference to trigger element before opening, restore on close',
      example: 'const triggerRef = useRef(document.activeElement);'
    },
    {
      pattern: 'Skip Links',
      description: 'Allow users to skip repetitive navigation',
      when: 'Page load, top of every page',
      implementation: 'Add visually hidden link as first element that becomes visible on focus',
      example: '<a href="#main-content" className="sr-only focus:not-sr-only">Skip to main content</a>'
    },
    {
      pattern: 'Roving Tab Index',
      description: 'Single tab stop for groups of related elements',
      when: 'Radio groups, tab panels, toolbar buttons',
      implementation: 'Set tabIndex={0} on active item, tabIndex={-1} on others, handle arrow keys',
      example: 'tabIndex={isActive ? 0 : -1}'
    },
    {
      pattern: 'Focus After Delete',
      description: 'Move focus to logical next element after item deletion',
      when: 'Item removed from list or grid',
      implementation: 'Focus next item in list, or previous if last item deleted',
      example: 'nextItemRef.current?.focus() || previousItemRef.current?.focus();'
    },
    {
      pattern: 'Auto-focus First Input',
      description: 'Move focus to first input when form/dialog opens',
      when: 'Modal with form opens, search dialog appears',
      implementation: 'Use autoFocus prop or useEffect with ref.focus()',
      example: '<input ref={inputRef} autoFocus />'
    },
    {
      pattern: 'Focus Management in SPAs',
      description: 'Announce page changes and move focus on route change',
      when: 'Navigation in single-page applications',
      implementation: 'Focus page heading or main content area on route change',
      example: 'useEffect(() => { headingRef.current?.focus(); }, [pathname]);'
    }
  ];

  const getLevelBadgeColor = (level: 'A' | 'AA' | 'AAA') => {
    switch (level) {
      case 'A':
        return 'bg-blue-100 text-blue-700 border-blue-200';
      case 'AA':
        return 'bg-emerald-100 text-emerald-700 border-emerald-200';
      case 'AAA':
        return 'bg-purple-100 text-purple-700 border-purple-200';
    }
  };

  const getStatusBadge = (status: 'complete' | 'in-progress' | 'planned') => {
    switch (status) {
      case 'complete':
        return { icon: CheckCircle2, color: 'text-emerald-600', bg: 'bg-emerald-50', border: 'border-emerald-200', label: 'Complete' };
      case 'in-progress':
        return { icon: CircleAlert, color: 'text-amber-600', bg: 'bg-amber-50', border: 'border-amber-200', label: 'In Progress' };
      case 'planned':
        return { icon: Info, color: 'text-slate-600', bg: 'bg-slate-50', border: 'border-slate-200', label: 'Planned' };
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border border-indigo-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-indigo-500 text-white rounded-lg">
            <CheckCircle2 className="h-8 w-8" />
          </div>
          <div>
            <h1 className="text-xl text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              Accessibility Documentation
            </h1>
            <p className="text-sm text-slate-700 mb-4">
              Comprehensive accessibility guidelines for the Transition Trails Design System.
              WCAG AA compliance, keyboard navigation, screen reader support, and focus management patterns.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 bg-white rounded-lg border border-emerald-200 text-xs text-emerald-700" style={{ fontWeight: 600 }}>
                WCAG 2.1 AA Compliant
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-indigo-200 text-xs text-indigo-700" style={{ fontWeight: 600 }}>
                Keyboard Accessible
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-purple-200 text-xs text-purple-700" style={{ fontWeight: 600 }}>
                Screen Reader Tested
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Navigation */}
      <div className="bg-white rounded-xl border border-slate-200 p-4">
        <div className="flex flex-wrap gap-2">
          {sections.map((section) => {
            const Icon = section.icon;
            const isActive = activeSection === section.id;
            return (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg border transition-all ${
                  isActive
                    ? 'bg-indigo-50 text-indigo-700 border-indigo-200 shadow-sm'
                    : 'bg-white text-slate-600 border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
                style={{ fontWeight: isActive ? 700 : 500 }}
              >
                <Icon className="h-4 w-4" />
                {section.name}
                {isActive && <ChevronRight className="h-4 w-4" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content Area */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        {/* Overview Section */}
        {activeSection === 'overview' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-slate-900 mb-3" style={{ fontWeight: 700 }}>
                Accessibility-First Design
              </h2>
              <p className="text-sm text-slate-600 mb-4">
                The TTDS is built with accessibility as a core principle, not an afterthought. Every component
                is designed to be usable by everyone, regardless of ability or assistive technology used.
              </p>
            </div>

            {/* Key Principles */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-emerald-500 text-white rounded-lg">
                    <Keyboard className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    Keyboard Navigation
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  All functionality is accessible via keyboard. Logical tab order, clear focus indicators,
                  and intuitive keyboard shortcuts throughout.
                </p>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span>Tab and Shift+Tab navigation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span>Arrow key support for groups</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-emerald-600 flex-shrink-0" />
                    <span>Escape to close overlays</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-lg p-6 border border-indigo-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-indigo-500 text-white rounded-lg">
                    <Eye className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    Screen Reader Support
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Semantic HTML, ARIA labels, and proper announcements ensure screen reader users
                  can navigate and understand all content.
                </p>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-indigo-600 flex-shrink-0" />
                    <span>Semantic HTML structure</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-indigo-600 flex-shrink-0" />
                    <span>ARIA labels and descriptions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-indigo-600 flex-shrink-0" />
                    <span>Live region announcements</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg p-6 border border-purple-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-purple-500 text-white rounded-lg">
                    <Focus className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    Focus Management
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  Visible focus indicators, logical focus flow, and proper focus handling for
                  dynamic content and interactions.
                </p>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Visible focus rings</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Focus trap in modals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-purple-600 flex-shrink-0" />
                    <span>Return focus patterns</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-lg p-6 border border-amber-200">
                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2 bg-amber-500 text-white rounded-lg">
                    <CheckCircle2 className="h-5 w-5" />
                  </div>
                  <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                    WCAG 2.1 AA
                  </h3>
                </div>
                <p className="text-xs text-slate-600 mb-3">
                  All components meet or exceed WCAG 2.1 Level AA standards for contrast,
                  interaction, and content structure.
                </p>
                <ul className="space-y-1 text-xs text-slate-700">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-amber-600 flex-shrink-0" />
                    <span>4.5:1 text contrast minimum</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-amber-600 flex-shrink-0" />
                    <span>3:1 UI component contrast</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-3 w-3 mt-0.5 text-amber-600 flex-shrink-0" />
                    <span>Accessible forms and inputs</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                Testing & Compliance
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center">
                  <div className="text-2xl text-emerald-600 mb-1" style={{ fontWeight: 700 }}>
                    {wcagCriteria.filter(c => c.status === 'complete').length}
                  </div>
                  <div className="text-xs text-slate-600">WCAG Criteria Met</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-indigo-600 mb-1" style={{ fontWeight: 700 }}>
                    {keyboardShortcuts.length}
                  </div>
                  <div className="text-xs text-slate-600">Keyboard Shortcuts</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-purple-600 mb-1" style={{ fontWeight: 700 }}>
                    {screenReaderNotes.length}
                  </div>
                  <div className="text-xs text-slate-600">Components Tested</div>
                </div>
                <div className="text-center">
                  <div className="text-2xl text-amber-600 mb-1" style={{ fontWeight: 700 }}>
                    {focusPatterns.length}
                  </div>
                  <div className="text-xs text-slate-600">Focus Patterns</div>
                </div>
              </div>
            </div>

            {/* Resources */}
            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
              <h3 className="text-sm text-slate-900 mb-3" style={{ fontWeight: 700 }}>
                External Resources
              </h3>
              <div className="space-y-2">
                <a 
                  href="https://www.w3.org/WAI/WCAG21/quickref/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-blue-700 hover:text-blue-800"
                >
                  <ExternalLink className="h-3 w-3" />
                  WCAG 2.1 Quick Reference
                </a>
                <a 
                  href="https://www.w3.org/WAI/ARIA/apg/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-blue-700 hover:text-blue-800"
                >
                  <ExternalLink className="h-3 w-3" />
                  ARIA Authoring Practices Guide
                </a>
                <a 
                  href="https://webaim.org/resources/contrastchecker/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-xs text-blue-700 hover:text-blue-800"
                >
                  <ExternalLink className="h-3 w-3" />
                  WebAIM Contrast Checker
                </a>
              </div>
            </div>
          </div>
        )}

        {/* Keyboard Shortcuts Section */}
        {activeSection === 'keyboard' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                Keyboard Shortcuts Reference
              </h2>
              <p className="text-sm text-slate-600">
                Complete keyboard navigation support across all TTDS components. All interactive
                elements are accessible without a mouse.
              </p>
            </div>

            {/* Shortcuts Table */}
            <div className="border border-slate-200 rounded-lg overflow-hidden">
              <table className="w-full">
                <thead className="bg-slate-50">
                  <tr>
                    <th className="text-left px-4 py-3 text-xs text-slate-700 border-b border-slate-200" style={{ fontWeight: 700 }}>
                      Shortcut
                    </th>
                    <th className="text-left px-4 py-3 text-xs text-slate-700 border-b border-slate-200" style={{ fontWeight: 700 }}>
                      Action
                    </th>
                    <th className="text-left px-4 py-3 text-xs text-slate-700 border-b border-slate-200" style={{ fontWeight: 700 }}>
                      Context
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {keyboardShortcuts.map((shortcut, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
                      <td className="px-4 py-3">
                        <div className="flex flex-wrap gap-1">
                          {shortcut.keys.map((key, keyIndex) => (
                            <React.Fragment key={keyIndex}>
                              <kbd className="px-2 py-1 bg-white border border-slate-300 rounded text-xs font-mono text-slate-700 shadow-sm">
                                {key}
                              </kbd>
                              {keyIndex < shortcut.keys.length - 1 && (
                                <span className="text-slate-400 text-xs">+</span>
                              )}
                            </React.Fragment>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-700">
                        {shortcut.description}
                      </td>
                      <td className="px-4 py-3 text-xs text-slate-600">
                        {shortcut.context}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Implementation Notes */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                Implementation Guidelines
              </h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Use native HTML elements:</strong> Buttons, links, and form elements have
                    built-in keyboard support. Use semantic HTML whenever possible.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Maintain tab order:</strong> Ensure the tab order follows the visual layout
                    and logical flow of content. Avoid tabindex values greater than 0.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Provide visible focus:</strong> All interactive elements must have a clear,
                    visible focus indicator. Use the ttds-border-focus token.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Handle keyboard events:</strong> Listen for Enter, Space, Escape, and Arrow
                    keys where appropriate. Implement event handlers for custom interactions.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* WCAG Compliance Section */}
        {activeSection === 'wcag' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                WCAG 2.1 Compliance Checklist
              </h2>
              <p className="text-sm text-slate-600">
                Detailed compliance status for WCAG 2.1 success criteria across TTDS components.
              </p>
            </div>

            {/* Criteria List */}
            <div className="space-y-4">
              {wcagCriteria.map((criteria, index) => {
                const statusBadge = getStatusBadge(criteria.status);
                const StatusIcon = statusBadge.icon;
                
                return (
                  <div key={index} className="border border-slate-200 rounded-lg p-5 hover:border-slate-300 transition-colors">
                    <div className="flex items-start justify-between mb-3">
                      <div className="flex items-start gap-3 flex-1">
                        <div className={`px-2 py-1 rounded border text-xs ${getLevelBadgeColor(criteria.level)}`} style={{ fontWeight: 700 }}>
                          {criteria.level}
                        </div>
                        <div className="flex-1">
                          <h3 className="text-sm text-slate-900 mb-1" style={{ fontWeight: 700 }}>
                            {criteria.criterion}
                          </h3>
                          <p className="text-xs text-slate-600">
                            {criteria.description}
                          </p>
                        </div>
                      </div>
                      <div className={`flex items-center gap-1.5 px-2.5 py-1 rounded border ${statusBadge.bg} ${statusBadge.border}`}>
                        <StatusIcon className={`h-3.5 w-3.5 ${statusBadge.color}`} />
                        <span className={`text-xs ${statusBadge.color}`} style={{ fontWeight: 600 }}>
                          {statusBadge.label}
                        </span>
                      </div>
                    </div>

                    <div className="space-y-3 mt-4">
                      <div>
                        <div className="text-xs text-slate-700 mb-2" style={{ fontWeight: 600 }}>
                          Affected Components:
                        </div>
                        <div className="flex flex-wrap gap-2">
                          {criteria.components.map((component, compIndex) => (
                            <span 
                              key={compIndex}
                              className="px-2 py-1 bg-slate-100 text-slate-700 rounded text-xs border border-slate-200"
                            >
                              {component}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="bg-slate-50 rounded p-3 border border-slate-200">
                        <div className="text-xs text-slate-700 mb-1" style={{ fontWeight: 600 }}>
                          Implementation:
                        </div>
                        <p className="text-xs text-slate-600">
                          {criteria.implementation}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Summary Stats */}
            <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-lg p-6 border border-emerald-200">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                Compliance Summary
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div>
                  <div className="text-xs text-slate-600 mb-2">Level A Criteria</div>
                  <div className="text-2xl text-blue-600" style={{ fontWeight: 700 }}>
                    {wcagCriteria.filter(c => c.level === 'A').length}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-2">Level AA Criteria</div>
                  <div className="text-2xl text-emerald-600" style={{ fontWeight: 700 }}>
                    {wcagCriteria.filter(c => c.level === 'AA').length}
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-600 mb-2">Complete</div>
                  <div className="text-2xl text-emerald-600" style={{ fontWeight: 700 }}>
                    {Math.round((wcagCriteria.filter(c => c.status === 'complete').length / wcagCriteria.length) * 100)}%
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Screen Reader Section */}
        {activeSection === 'screenreader' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                Screen Reader Testing Notes
              </h2>
              <p className="text-sm text-slate-600">
                Documentation of screen reader behavior and best practices for TTDS components.
                Tested with NVDA (Windows), JAWS (Windows), and VoiceOver (macOS/iOS).
              </p>
            </div>

            {/* Component Notes */}
            <div className="space-y-6">
              {screenReaderNotes.map((note, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-6">
                  <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                    {note.component}
                  </h3>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {/* Testing Notes */}
                    <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                      <h4 className="text-xs text-blue-900 mb-3" style={{ fontWeight: 700 }}>
                        Testing Notes
                      </h4>
                      <ul className="space-y-2">
                        {note.notes.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="h-3 w-3 text-blue-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Announcements */}
                    <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                      <h4 className="text-xs text-purple-900 mb-3" style={{ fontWeight: 700 }}>
                        Expected Announcements
                      </h4>
                      <ul className="space-y-2">
                        {note.announcements.map((item, itemIndex) => (
                          <li key={itemIndex} className="text-xs text-slate-700">
                            <div className="font-mono bg-white rounded px-2 py-1 border border-purple-200 text-purple-800">
                              "{item}"
                            </div>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Best Practices */}
                    <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                      <h4 className="text-xs text-emerald-900 mb-3" style={{ fontWeight: 700 }}>
                        Best Practices
                      </h4>
                      <ul className="space-y-2">
                        {note.bestPractices.map((item, itemIndex) => (
                          <li key={itemIndex} className="flex items-start gap-2 text-xs text-slate-700">
                            <ArrowRight className="h-3 w-3 text-emerald-600 flex-shrink-0 mt-0.5" />
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Testing Guide */}
            <div className="bg-slate-50 rounded-lg p-6 border border-slate-200">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                Screen Reader Testing Guide
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
                    Windows (NVDA/JAWS)
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>NVDA + Firefox is the recommended free testing combination</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>Use Insert+Down Arrow to read line by line</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>Test keyboard navigation with Tab and arrow keys</span>
                    </li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
                    macOS/iOS (VoiceOver)
                  </h4>
                  <ul className="space-y-1 text-xs text-slate-600">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>Enable with Cmd+F5 on macOS</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>Use VO keys (Control+Option) + arrows to navigate</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-3 w-3 mt-0.5 flex-shrink-0" />
                      <span>Test with Safari for best compatibility</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Focus Management Section */}
        {activeSection === 'focus' && (
          <div className="space-y-6">
            <div>
              <h2 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                Focus Management Patterns
              </h2>
              <p className="text-sm text-slate-600">
                Essential focus management patterns for accessible interactions in single-page
                applications and dynamic components.
              </p>
            </div>

            {/* Focus Patterns */}
            <div className="space-y-4">
              {focusPatterns.map((pattern, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-6 hover:border-slate-300 transition-colors">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="p-2 bg-indigo-50 text-indigo-600 rounded-lg border border-indigo-200">
                      <Focus className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                        {pattern.pattern}
                      </h3>
                      <p className="text-xs text-slate-600 mb-3">
                        {pattern.description}
                      </p>
                      <div className="flex items-center gap-2 text-xs text-slate-600">
                        <span className="px-2 py-1 bg-slate-100 rounded border border-slate-200" style={{ fontWeight: 600 }}>
                          When to use:
                        </span>
                        <span>{pattern.when}</span>
                      </div>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
                      <h4 className="text-xs text-slate-700 mb-2" style={{ fontWeight: 700 }}>
                        Implementation
                      </h4>
                      <p className="text-xs text-slate-600 mb-3">
                        {pattern.implementation}
                      </p>
                      <div className="bg-white rounded border border-slate-200 p-3">
                        <code className="text-xs font-mono text-indigo-600">
                          {pattern.example}
                        </code>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Focus Indicator Styles */}
            <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-lg p-6 border border-indigo-200">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                TTDS Focus Indicator
              </h3>
              <p className="text-xs text-slate-600 mb-4">
                All interactive elements use the ttds-border-focus token for consistent, visible focus indicators.
              </p>
              <div className="bg-white rounded-lg p-6 border-2 border-indigo-400 shadow-md">
                <div className="flex items-center gap-4">
                  <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2">
                    Focused Button Example
                  </button>
                  <input 
                    type="text" 
                    placeholder="Focused input example"
                    className="px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-indigo-400 focus:ring-offset-2 focus:border-indigo-400"
                  />
                </div>
                <p className="text-xs text-slate-600 mt-4">
                  Focus ring: 2px solid, indigo-400 color, 2px offset for clear visibility
                </p>
              </div>
            </div>

            {/* Best Practices */}
            <div className="bg-amber-50 border border-amber-200 rounded-lg p-6">
              <h3 className="text-sm text-slate-900 mb-4" style={{ fontWeight: 700 }}>
                Focus Management Best Practices
              </h3>
              <div className="space-y-3 text-xs text-slate-700">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Never remove focus outline without replacement:</strong> Always provide
                    a visible alternative if hiding default browser focus styles.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Restore focus after interruptions:</strong> When modals close or content
                    is deleted, return focus to a logical element.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Test with keyboard only:</strong> Navigate your entire application using
                    only Tab, Shift+Tab, Enter, Space, and arrow keys.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-4 w-4 text-amber-600 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong>Announce dynamic changes:</strong> Use ARIA live regions to announce
                    focus changes and content updates to screen readers.
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
