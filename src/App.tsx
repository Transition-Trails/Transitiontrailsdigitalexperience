import React from 'react';
import { Button } from './components/ttds/Button';
import { TextInput } from './components/ttds/TextInput';
import { TextArea } from './components/ttds/TextArea';
import { SelectInput } from './components/ttds/SelectInput';
import { SearchInput } from './components/ttds/SearchInput';
import { Checkbox } from './components/ttds/Checkbox';
import { Radio } from './components/ttds/Radio';
import { Switch } from './components/ttds/Switch';
import { Mail, Download, Heart, Settings } from 'lucide-react';

export default function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [indeterminateState, setIndeterminateState] = React.useState(true);
  const [radioValue, setRadioValue] = React.useState('option1');
  const [switchState, setSwitchState] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 py-8">
          <h1 className="text-slate-900">TTDS Buttons & Inputs</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Complete design system primitives for the Transition Trails Academy.
            Built with accessibility, clean design, and an outdoors-inspired aesthetic.
          </p>
          <div className="flex items-center justify-center gap-3 text-sm text-slate-500">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">WCAG AA</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Keyboard Accessible</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">TTA-103</span>
          </div>
        </header>

        {/* Buttons Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Buttons</h2>
            <p className="text-slate-600">
              Four variants (Primary, Secondary, Ghost, IconOnly) with multiple states and sizes.
            </p>
          </div>

          {/* Primary Buttons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Primary</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" size="small">Small</Button>
              <Button variant="primary" size="medium">Medium</Button>
              <Button variant="primary" size="large">Large</Button>
              <Button variant="primary" disabled>Disabled</Button>
              <Button variant="primary" loading>Loading</Button>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="primary" iconLeft={<Mail className="h-4 w-4" />}>
                With Icon Left
              </Button>
              <Button variant="primary" iconRight={<Download className="h-4 w-4" />}>
                With Icon Right
              </Button>
            </div>
          </div>

          {/* Secondary Buttons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Secondary</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="secondary" size="small">Small</Button>
              <Button variant="secondary" size="medium">Medium</Button>
              <Button variant="secondary" size="large">Large</Button>
              <Button variant="secondary" disabled>Disabled</Button>
              <Button variant="secondary" loading>Loading</Button>
            </div>
          </div>

          {/* Ghost Buttons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Ghost</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="ghost" size="small">Small</Button>
              <Button variant="ghost" size="medium">Medium</Button>
              <Button variant="ghost" size="large">Large</Button>
              <Button variant="ghost" disabled>Disabled</Button>
            </div>
          </div>

          {/* IconOnly Buttons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Icon Only</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Button variant="iconOnly" size="small" aria-label="Settings">
                <Settings className="h-4 w-4" />
              </Button>
              <Button variant="iconOnly" size="medium" aria-label="Favorite">
                <Heart className="h-4 w-4" />
              </Button>
              <Button variant="iconOnly" size="large" aria-label="Download">
                <Download className="h-4 w-4" />
              </Button>
              <Button variant="iconOnly" disabled aria-label="Disabled">
                <Settings className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* Full Width */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Full Width</h3>
            <Button variant="primary" fullWidth>Full Width Primary Button</Button>
            <Button variant="secondary" fullWidth>Full Width Secondary Button</Button>
          </div>
        </section>

        {/* Text Inputs Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Text Inputs</h2>
            <p className="text-slate-600">
              Standard text input with label, helper text, and error states.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextInput
              label="Email Address"
              placeholder="you@example.com"
              helperText="We'll never share your email."
              fullWidth
            />
            <TextInput
              label="Username"
              placeholder="Enter username"
              error="Username is already taken."
              fullWidth
            />
            <TextInput
              label="Disabled Input"
              placeholder="Cannot edit"
              disabled
              fullWidth
            />
            <TextInput
              label="With Default Value"
              defaultValue="Default text"
              fullWidth
            />
          </div>
        </section>

        {/* TextArea Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Text Area</h2>
            <p className="text-slate-600">
              Multi-line text input with resizable functionality.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <TextArea
              label="Description"
              placeholder="Enter a detailed description..."
              helperText="Maximum 500 characters"
              fullWidth
            />
            <TextArea
              label="Feedback"
              placeholder="Your feedback"
              error="This field is required."
              fullWidth
            />
            <TextArea
              label="Non-resizable"
              placeholder="This textarea cannot be resized"
              resizable={false}
              fullWidth
            />
          </div>
        </section>

        {/* Select Input Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Select Input</h2>
            <p className="text-slate-600">
              Dropdown select with custom chevron icon.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SelectInput
              label="Country"
              helperText="Select your country"
              fullWidth
              options={[
                { value: '', label: 'Select a country...' },
                { value: 'us', label: 'United States' },
                { value: 'ca', label: 'Canada' },
                { value: 'uk', label: 'United Kingdom' },
                { value: 'au', label: 'Australia' },
              ]}
            />
            <SelectInput
              label="Trail Difficulty"
              error="Please select a difficulty level"
              fullWidth
              options={[
                { value: '', label: 'Choose difficulty...' },
                { value: 'easy', label: 'Easy' },
                { value: 'moderate', label: 'Moderate' },
                { value: 'difficult', label: 'Difficult' },
                { value: 'expert', label: 'Expert' },
              ]}
            />
            <SelectInput
              label="Disabled Select"
              disabled
              fullWidth
              options={[
                { value: '', label: 'Cannot select...' },
                { value: 'option1', label: 'Option 1' },
              ]}
            />
          </div>
        </section>

        {/* Search Input Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Search Input</h2>
            <p className="text-slate-600">
              Search field with search icon and clear button.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <SearchInput
              label="Search Trails"
              placeholder="Search by name or location..."
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              onClear={() => setSearchValue('')}
              helperText="Try searching for 'mountain' or 'forest'"
              fullWidth
            />
            <SearchInput
              label="Search with Error"
              placeholder="Search..."
              error="No results found for your query"
              fullWidth
            />
          </div>
        </section>

        {/* Controls Section */}
        <section className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Control Components</h2>
            <p className="text-slate-600">
              Checkboxes, radio buttons, and switches with proper states.
            </p>
          </div>

          {/* Checkboxes */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Checkbox</h3>
            <div className="flex flex-wrap gap-6">
              <Checkbox
                label="Accept terms and conditions"
                checked={checkboxState}
                onChange={(e) => setCheckboxState(e.target.checked)}
              />
              <Checkbox label="Subscribe to newsletter" />
              <Checkbox
                label="Indeterminate state"
                indeterminate={indeterminateState}
                onChange={(e) => {
                  setIndeterminateState(false);
                }}
              />
              <Checkbox label="Disabled unchecked" disabled />
              <Checkbox label="Disabled checked" checked disabled />
            </div>
          </div>

          {/* Radio Buttons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Radio</h3>
            <div className="flex flex-wrap gap-6">
              <Radio
                label="Option 1"
                name="radio-group"
                value="option1"
                checked={radioValue === 'option1'}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio
                label="Option 2"
                name="radio-group"
                value="option2"
                checked={radioValue === 'option2'}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio
                label="Option 3"
                name="radio-group"
                value="option3"
                checked={radioValue === 'option3'}
                onChange={(e) => setRadioValue(e.target.value)}
              />
              <Radio label="Disabled" disabled />
            </div>
          </div>

          {/* Switches */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Switch</h3>
            <div className="flex flex-wrap gap-6">
              <Switch
                label="Enable notifications"
                checked={switchState}
                onChange={(e) => setSwitchState(e.target.checked)}
              />
              <Switch label="Dark mode" />
              <Switch label="Auto-save" checked />
              <Switch label="Disabled off" disabled />
              <Switch label="Disabled on" checked disabled />
            </div>
          </div>
        </section>

        {/* Design Tokens & Documentation */}
        <section className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl shadow-sm border border-emerald-200 p-8 space-y-4">
          <h2 className="text-slate-900">TTDS Buttons & Inputs – Notes</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Design Tokens</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Primary Color:</strong> Emerald-600 (#059669) for primary actions</li>
                <li><strong>Border Radius:</strong> 6-8px (rounded-lg in Tailwind)</li>
                <li><strong>Spacing:</strong> Consistent padding with 2-4 unit scale</li>
                <li><strong>Focus Ring:</strong> 2px ring with offset for accessibility</li>
                <li><strong>Transitions:</strong> 200ms duration for smooth interactions</li>
                <li><strong>Typography:</strong> System sans-serif stack for readability</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Usage Guidelines</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Use <strong>Primary buttons</strong> for main actions (submit, save, continue)</li>
                <li>Use <strong>Secondary buttons</strong> for alternative actions (cancel, back)</li>
                <li>Use <strong>Ghost buttons</strong> for tertiary or inline actions</li>
                <li>Use <strong>IconOnly buttons</strong> for toolbars and compact interfaces</li>
                <li>Always provide labels for form inputs to improve accessibility</li>
                <li>Use error states and helper text to guide users</li>
                <li>Ensure all interactive elements have visible focus states</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Accessibility Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>✓ WCAG AA compliant color contrast ratios</li>
                <li>✓ Keyboard navigation support (Tab, Space, Enter)</li>
                <li>✓ Visible focus indicators on all interactive elements</li>
                <li>✓ ARIA labels for icon-only buttons</li>
                <li>✓ Proper semantic HTML with label associations</li>
                <li>✓ Error and helper text linked via aria-describedby</li>
                <li>✓ Disabled states clearly indicated visually and semantically</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Component Examples</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`// Button
<Button variant="primary" size="medium">
  Click Me
</Button>

// Text Input
<TextInput
  label="Email"
  helperText="Required field"
  required
/>

// Checkbox
<Checkbox
  label="I agree"
  checked={agreed}
  onChange={(e) => setAgreed(e.target.checked)}
/>`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm py-8">
          <p>TTDS Design System • TTA-103 • Transition Trails Academy</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
        </footer>
      </div>
    </div>
  );
}
