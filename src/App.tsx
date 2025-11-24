import React from 'react';
import { Button } from './components/ttds/Button';
import { TextInput } from './components/ttds/TextInput';
import { TextArea } from './components/ttds/TextArea';
import { SelectInput } from './components/ttds/SelectInput';
import { SearchInput } from './components/ttds/SearchInput';
import { Checkbox } from './components/ttds/Checkbox';
import { Radio } from './components/ttds/Radio';
import { Switch } from './components/ttds/Switch';
import { Card } from './components/ttds/Card';
import { Panel } from './components/ttds/Panel';
import { Modal } from './components/ttds/Modal';
import { Toast, ToastContainer } from './components/ttds/Toast';
import { ChipStatus } from './components/ttds/ChipStatus';
import { ChipLevel } from './components/ttds/ChipLevel';
import { Badge } from './components/ttds/Badge';
import { Tag } from './components/ttds/Tag';
import { Stepper } from './components/ttds/Stepper';
import { Tooltip } from './components/ttds/Tooltip';
import { Skeleton, SkeletonText, SkeletonCard, SkeletonList } from './components/ttds/Skeleton';
import { Mail, Download, Heart, Settings, Plus, Filter, MoreVertical, Edit, Trash2, Map, Code, BookOpen, Zap, Cloud, Compass, User, FileText, CheckCircle } from 'lucide-react';

// Loading Demo Component
function LoadingDemo() {
  const [isLoading, setIsLoading] = React.useState(true);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3">
        <Button 
          variant={isLoading ? 'secondary' : 'primary'} 
          onClick={() => setIsLoading(!isLoading)}
        >
          {isLoading ? 'Show Content' : 'Show Loading'}
        </Button>
        <span className="text-sm text-slate-600">
          Toggle to see loading state vs. actual content
        </span>
      </div>

      {isLoading ? (
        <Card elevation="low">
          <div className="flex items-start gap-4">
            <Skeleton variant="circle" width={48} height={48} />
            <div className="flex-1 space-y-3">
              <Skeleton variant="line" width="60%" height={20} />
              <SkeletonText lines={2} />
              <div className="flex gap-2">
                <Skeleton variant="line" width={80} height={32} />
                <Skeleton variant="line" width={100} height={32} />
              </div>
            </div>
          </div>
        </Card>
      ) : (
        <Card elevation="low">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
              <Compass className="h-6 w-6" />
            </div>
            <div className="flex-1">
              <h4 className="text-slate-900 mb-2">Wilderness Explorer Trail</h4>
              <p className="text-sm text-slate-600 mb-3">
                Embark on an adventure through diverse terrain and ecosystems. Perfect for nature enthusiasts.
              </p>
              <div className="flex gap-2">
                <ChipLevel variant="intermediate" />
                <ChipStatus variant="success" label="Open" icon={false} />
              </div>
            </div>
          </div>
        </Card>
      )}
    </div>
  );
}

export default function App() {
  const [searchValue, setSearchValue] = React.useState('');
  const [checkboxState, setCheckboxState] = React.useState(false);
  const [indeterminateState, setIndeterminateState] = React.useState(true);
  const [radioValue, setRadioValue] = React.useState('option1');
  const [switchState, setSwitchState] = React.useState(false);
  const [darkMode, setDarkMode] = React.useState(false);
  const [autoSave, setAutoSave] = React.useState(true);
  
  // Modal states
  const [showModalSmall, setShowModalSmall] = React.useState(false);
  const [showModalMedium, setShowModalMedium] = React.useState(false);
  const [showModalLarge, setShowModalLarge] = React.useState(false);

  // Toast states
  const [showToastSuccess, setShowToastSuccess] = React.useState(false);
  const [showToastWarning, setShowToastWarning] = React.useState(false);
  const [showToastError, setShowToastError] = React.useState(false);
  const [showToastInfo, setShowToastInfo] = React.useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-stone-100 p-8">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* Header */}
        <header className="text-center space-y-4 py-8">
          <h1 className="text-slate-900">TTDS Component Library</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Complete design system for the Transition Trails Academy.
            Built with accessibility, clean design, and an outdoors-inspired aesthetic.
          </p>
          <div className="flex items-center justify-center gap-2 text-sm text-slate-500 flex-wrap">
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">WCAG AA</span>
            <span className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full">Keyboard Accessible</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">TTA-103</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">TTA-104</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full">TTA-117</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">TTA-118</span>
          </div>
        </header>

        {/* Navigation */}
        <nav className="sticky top-0 z-40 bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <div className="flex flex-wrap gap-2">
            <a href="#buttons" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Buttons</a>
            <a href="#inputs" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Inputs</a>
            <a href="#controls" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Controls</a>
            <a href="#chips" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Chips</a>
            <a href="#badges" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Badges</a>
            <a href="#tags" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Tags</a>
            <a href="#stepper" className="px-3 py-1.5 text-sm text-blue-700 bg-blue-50 rounded">Stepper</a>
            <a href="#tooltip" className="px-3 py-1.5 text-sm text-blue-700 bg-blue-50 rounded">Tooltip</a>
            <a href="#skeleton" className="px-3 py-1.5 text-sm text-blue-700 bg-blue-50 rounded">Skeleton</a>
            <a href="#cards" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Cards</a>
            <a href="#panels" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Panels</a>
            <a href="#modals" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Modals</a>
            <a href="#toasts" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Toasts</a>
          </div>
        </nav>

        {/* Buttons Section */}
        <section id="buttons" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
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
        <section id="inputs" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
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

          <div>
            <h3 className="text-slate-700 mb-3">Text Area</h3>
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
            </div>
          </div>

          <div>
            <h3 className="text-slate-700 mb-3">Select Input</h3>
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
            </div>
          </div>

          <div>
            <h3 className="text-slate-700 mb-3">Search Input</h3>
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
          </div>
        </section>

        {/* Controls Section */}
        <section id="controls" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
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
              <Checkbox label="Subscribe to newsletter" defaultChecked />
              <Checkbox
                label="Indeterminate state"
                indeterminate={indeterminateState}
                onChange={(e) => {
                  setIndeterminateState(false);
                }}
              />
              <Checkbox label="Disabled unchecked" disabled />
              <Checkbox label="Disabled checked" defaultChecked disabled readOnly />
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
              <Switch label="Dark mode" checked={darkMode} onChange={(e) => setDarkMode(e.target.checked)} />
              <Switch label="Auto-save" checked={autoSave} onChange={(e) => setAutoSave(e.target.checked)} />
              <Switch label="Disabled off" disabled />
              <Switch label="Disabled on" defaultChecked disabled readOnly />
            </div>
          </div>
        </section>

        {/* Chips Section */}
        <section id="chips" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Status Chips & Level Chips</h2>
            <p className="text-slate-600">
              Chips represent system status, informational flags, and skill levels.
            </p>
          </div>

          {/* Status Chips */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Status Chips</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use status chips to display system states and informational flags with high contrast and clear icons.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ChipStatus variant="success" label="Completed" />
              <ChipStatus variant="warning" label="Pending" />
              <ChipStatus variant="error" label="Failed" />
              <ChipStatus variant="info" label="In Progress" />
            </div>
          </div>

          {/* Status Chips without Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Status Chips (No Icons)</h3>
            <div className="flex flex-wrap items-center gap-3">
              <ChipStatus variant="success" label="Active" icon={false} />
              <ChipStatus variant="warning" label="Review Required" icon={false} />
              <ChipStatus variant="error" label="Blocked" icon={false} />
              <ChipStatus variant="info" label="Draft" icon={false} />
            </div>
          </div>

          {/* Status Chips Selected State */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Selected State</h3>
            <div className="flex flex-wrap items-center gap-3">
              <ChipStatus variant="success" label="Active" selected />
              <ChipStatus variant="warning" label="Pending" />
              <ChipStatus variant="error" label="Blocked" />
              <ChipStatus variant="info" label="Draft" />
            </div>
          </div>

          {/* Status Chips with Remove */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Removable Chips</h3>
            <div className="flex flex-wrap items-center gap-3">
              <ChipStatus variant="success" label="Success" onRemove={() => alert('Removed!')} />
              <ChipStatus variant="warning" label="Warning" onRemove={() => alert('Removed!')} />
              <ChipStatus variant="error" label="Error" onRemove={() => alert('Removed!')} />
              <ChipStatus variant="info" label="Info" onRemove={() => alert('Removed!')} />
            </div>
          </div>

          {/* Status Chips Disabled */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Disabled State</h3>
            <div className="flex flex-wrap items-center gap-3">
              <ChipStatus variant="success" label="Completed" disabled />
              <ChipStatus variant="warning" label="Pending" disabled />
              <ChipStatus variant="error" label="Failed" disabled />
              <ChipStatus variant="info" label="In Progress" disabled />
            </div>
          </div>

          {/* Level Chips */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Level Chips</h3>
            <p className="text-sm text-slate-600 mb-3">
              Represents learner skill level or course difficulty with subtle background colors.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <ChipLevel variant="beginner" />
              <ChipLevel variant="intermediate" />
              <ChipLevel variant="advanced" />
            </div>
          </div>

          {/* Level Chips with Custom Labels */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Level Chips (Custom Labels)</h3>
            <div className="flex flex-wrap items-center gap-3">
              <ChipLevel variant="beginner" label="Easy Trail" />
              <ChipLevel variant="intermediate" label="Moderate Trail" />
              <ChipLevel variant="advanced" label="Expert Trail" />
            </div>
          </div>

          {/* Real-World Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Example</h3>
            <Card elevation="low">
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-slate-900">Mountain Ridge Trail</h4>
                    <Badge variant="new" />
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Experience breathtaking views and challenging terrain on this expert-level trail.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <ChipLevel variant="advanced" />
                    <ChipStatus variant="success" label="Open" icon={false} />
                    <ChipStatus variant="info" label="5.2 miles" icon={false} />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>

        {/* Badges Section */}
        <section id="badges" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Badges</h2>
            <p className="text-slate-600">
              High-contrast accent badges to draw attention to new content, updates, and features.
            </p>
          </div>

          {/* Badge Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Variants</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="new" />
              <Badge variant="updated" />
            </div>
          </div>

          {/* Badges without Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Icons</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="new" showIcon={false} />
              <Badge variant="updated" showIcon={false} />
            </div>
          </div>

          {/* Custom Badge Labels */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Custom Labels</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="new" label="Beta" />
              <Badge variant="updated" label="Fresh" />
              <Badge variant="new" label="Hot" showIcon={false} />
            </div>
          </div>

          {/* Badges in Context */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Examples</h3>
            <div className="space-y-4">
              <Card elevation="low">
                <div className="flex items-center gap-3 mb-2">
                  <Compass className="h-5 w-5 text-emerald-600" />
                  <h4 className="text-slate-900">Guided Trail: Salesforce Admin Basics</h4>
                  <Badge variant="new" />
                </div>
                <p className="text-sm text-slate-600">Learn the fundamentals of Salesforce administration.</p>
              </Card>

              <Card elevation="low">
                <div className="flex items-center gap-3 mb-2">
                  <BookOpen className="h-5 w-5 text-blue-600" />
                  <h4 className="text-slate-900">Learning Path: Advanced Workflows</h4>
                  <Badge variant="updated" />
                </div>
                <p className="text-sm text-slate-600">Recently updated with new automation techniques.</p>
              </Card>

              <Card elevation="low">
                <div className="flex items-center gap-3 mb-2">
                  <Zap className="h-5 w-5 text-amber-600" />
                  <h4 className="text-slate-900">Feature Announcement</h4>
                  <Badge variant="new" label="Beta" />
                </div>
                <p className="text-sm text-slate-600">Try our new interactive trail builder tool.</p>
              </Card>
            </div>
          </div>
        </section>

        {/* Tags Section */}
        <section id="tags" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Tags</h2>
            <p className="text-slate-600">
              Category tags for trail types, platforms, topics, filters, and metadata classification.
            </p>
          </div>

          {/* Tag Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Variant Styles</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Tag variant="default" label="Default" />
              <Tag variant="trail" label="Trail Type" />
              <Tag variant="platform" label="Platform" />
              <Tag variant="topic" label="Topic" />
              <Tag variant="primary" label="Primary" />
              <Tag variant="secondary" label="Secondary" />
            </div>
          </div>

          {/* Tags with Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With Icons</h3>
            <div className="flex flex-wrap items-center gap-3">
              <Tag variant="trail" label="Guided Trail" icon={Map} />
              <Tag variant="platform" label="Salesforce" icon={Cloud} />
              <Tag variant="topic" label="Automation" icon={Zap} />
              <Tag variant="topic" label="Configuration" icon={Settings} />
            </div>
          </div>

          {/* Removable Tags */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Removable Tags</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use removable tags for filter chips or selected categories.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Tag variant="trail" label="Beginner Friendly" removable onRemove={() => alert('Removed!')} />
              <Tag variant="platform" label="Google Workspace" icon={Code} removable onRemove={() => alert('Removed!')} />
              <Tag variant="topic" label="Reporting" removable onRemove={() => alert('Removed!')} />
              <Tag variant="topic" label="Data Analysis" removable onRemove={() => alert('Removed!')} />
            </div>
          </div>

          {/* Platform Tags */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Platform Tags</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="platform" label="Salesforce" />
              <Tag variant="platform" label="Slack" />
              <Tag variant="platform" label="JIRA" />
              <Tag variant="platform" label="Google Workspace" />
              <Tag variant="platform" label="Microsoft 365" />
              <Tag variant="platform" label="Asana" />
            </div>
          </div>

          {/* Trail Type Tags */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Trail Type Tags</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="trail" label="Guided Trail" />
              <Tag variant="trail" label="Explorer Journey" />
              <Tag variant="trail" label="Quick Win" />
              <Tag variant="trail" label="Deep Dive" />
              <Tag variant="trail" label="Team Challenge" />
            </div>
          </div>

          {/* Topic Tags */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Topic Tags</h3>
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="topic" label="Automation" />
              <Tag variant="topic" label="Configuration" />
              <Tag variant="topic" label="Reporting" />
              <Tag variant="topic" label="Integration" />
              <Tag variant="topic" label="Security" />
              <Tag variant="topic" label="Analytics" />
              <Tag variant="topic" label="Collaboration" />
              <Tag variant="topic" label="Workflow" />
            </div>
          </div>

          {/* Real-World Filter Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Filter Panel Example</h3>
            <Panel elevation={1} header={<h4 className="text-slate-900">Active Filters</h4>}>
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-slate-600 mb-2">Platforms</p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="platform" label="Salesforce" removable onRemove={() => {}} />
                    <Tag variant="platform" label="Slack" removable onRemove={() => {}} />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Topics</p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="topic" label="Automation" removable onRemove={() => {}} />
                    <Tag variant="topic" label="Reporting" removable onRemove={() => {}} />
                  </div>
                </div>
                <div>
                  <p className="text-sm text-slate-600 mb-2">Trail Types</p>
                  <div className="flex flex-wrap gap-2">
                    <Tag variant="trail" label="Guided Trail" removable onRemove={() => {}} />
                  </div>
                </div>
              </div>
            </Panel>
          </div>

          {/* Long Text Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Long Text Handling</h3>
            <p className="text-sm text-slate-600 mb-3">
              Tags automatically handle longer text values with proper wrapping.
            </p>
            <div className="flex flex-wrap items-center gap-2">
              <Tag variant="default" label="Advanced Configuration Management" />
              <Tag variant="topic" label="Cross-Platform Integration Strategies" />
              <Tag variant="trail" label="Enterprise Deployment Best Practices" />
            </div>
          </div>
        </section>

        {/* Stepper Section */}
        <section id="stepper" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Stepper</h2>
            <p className="text-slate-600">
              Progress indicators for multi-step processes. Supports horizontal and vertical orientations with numbered steps and icons.
            </p>
          </div>

          {/* Horizontal Stepper - Basic */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Horizontal Stepper (Numbered)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use horizontal steppers for wizard-like flows and onboarding processes.
            </p>
            <Stepper
              orientation="horizontal"
              steps={[
                { id: '1', label: 'Account Info', description: 'Basic details', status: 'completed' },
                { id: '2', label: 'Preferences', description: 'Customize settings', status: 'completed' },
                { id: '3', label: 'Trail Selection', description: 'Choose your path', status: 'current' },
                { id: '4', label: 'Review', description: 'Confirm details', status: 'upcoming' },
              ]}
            />
          </div>

          {/* Horizontal Stepper - with Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Horizontal Stepper (With Icons)</h3>
            <Stepper
              orientation="horizontal"
              steps={[
                { id: '1', label: 'Profile', status: 'completed', icon: User },
                { id: '2', label: 'Documents', status: 'completed', icon: FileText },
                { id: '3', label: 'Review', status: 'current', icon: CheckCircle },
                { id: '4', label: 'Complete', status: 'upcoming', icon: Zap },
              ]}
            />
          </div>

          {/* Vertical Stepper */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Vertical Stepper</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use vertical steppers for mobile or sidebar layouts where vertical space is available.
            </p>
            <div className="max-w-md">
              <Stepper
                orientation="vertical"
                steps={[
                  { id: '1', label: 'Create Account', description: 'Set up your profile and credentials', status: 'completed' },
                  { id: '2', label: 'Choose Trail', description: 'Select your learning path', status: 'completed' },
                  { id: '3', label: 'Setup Workspace', description: 'Configure your environment', status: 'current' },
                  { id: '4', label: 'Start Learning', description: 'Begin your journey', status: 'upcoming' },
                ]}
              />
            </div>
          </div>

          {/* Vertical Stepper with Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Vertical Stepper (With Icons)</h3>
            <div className="max-w-md">
              <Stepper
                orientation="vertical"
                steps={[
                  { id: '1', label: 'Profile Setup', description: 'Account created', status: 'completed', icon: User },
                  { id: '2', label: 'Documentation', description: 'Upload required files', status: 'completed', icon: FileText },
                  { id: '3', label: 'Verification', description: 'In progress', status: 'current', icon: CheckCircle },
                  { id: '4', label: 'Activation', description: 'Pending', status: 'upcoming', icon: Zap },
                ]}
              />
            </div>
          </div>

          {/* Real-World Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Trail Onboarding Example</h3>
            <Card elevation="low">
              <h4 className="text-slate-900 mb-4">Getting Started with Transition Trails</h4>
              <Stepper
                orientation="vertical"
                steps={[
                  { id: '1', label: 'Welcome', description: 'Learn about the platform', status: 'completed', icon: Compass },
                  { id: '2', label: 'Profile Setup', description: 'Tell us about your goals', status: 'completed', icon: User },
                  { id: '3', label: 'Trail Selection', description: 'Choose your first trail', status: 'current', icon: Map },
                  { id: '4', label: 'Start Journey', description: 'Begin learning', status: 'upcoming', icon: Zap },
                ]}
              />
              <div className="mt-6 flex gap-2">
                <Button variant="primary">Continue</Button>
                <Button variant="ghost">Skip Tutorial</Button>
              </div>
            </Card>
          </div>
        </section>

        {/* Tooltip Section */}
        <section id="tooltip" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Tooltip</h2>
            <p className="text-slate-600">
              Contextual information popups with four position options. Triggered by hover and focus for accessibility.
            </p>
          </div>

          {/* Position Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Position Variants</h3>
            <div className="flex flex-wrap items-center justify-center gap-12 p-12 bg-slate-50 rounded-lg">
              <Tooltip content="Tooltip on top" position="top">
                <Button variant="secondary">Top</Button>
              </Tooltip>
              <Tooltip content="Tooltip on bottom" position="bottom">
                <Button variant="secondary">Bottom</Button>
              </Tooltip>
              <Tooltip content="Tooltip on left" position="left">
                <Button variant="secondary">Left</Button>
              </Tooltip>
              <Tooltip content="Tooltip on right" position="right">
                <Button variant="secondary">Right</Button>
              </Tooltip>
            </div>
          </div>

          {/* With Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Icon Buttons with Tooltips</h3>
            <p className="text-sm text-slate-600 mb-3">
              Tooltips are essential for icon-only buttons to provide context.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <Tooltip content="Edit trail details" position="top">
                <Button variant="iconOnly" aria-label="Edit">
                  <Edit className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Delete this trail" position="top">
                <Button variant="iconOnly" aria-label="Delete">
                  <Trash2 className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Add to favorites" position="top">
                <Button variant="iconOnly" aria-label="Favorite">
                  <Heart className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Download map" position="top">
                <Button variant="iconOnly" aria-label="Download">
                  <Download className="h-4 w-4" />
                </Button>
              </Tooltip>
              <Tooltip content="Settings" position="top">
                <Button variant="iconOnly" aria-label="Settings">
                  <Settings className="h-4 w-4" />
                </Button>
              </Tooltip>
            </div>
          </div>

          {/* With Text Elements */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Text with Tooltips</h3>
            <div className="space-y-2">
              <p className="text-sm text-slate-700">
                Learn more about our{' '}
                <Tooltip content="Structured learning paths with guided activities" position="top">
                  <span className="underline decoration-dotted cursor-help text-blue-600">guided trails</span>
                </Tooltip>
                {' '}and{' '}
                <Tooltip content="Self-paced exploration with flexible milestones" position="top">
                  <span className="underline decoration-dotted cursor-help text-blue-600">explorer journeys</span>
                </Tooltip>
                .
              </p>
            </div>
          </div>

          {/* Card Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Example</h3>
            <Card elevation="low">
              <div className="flex items-start justify-between">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h4 className="text-slate-900">Mountain Ridge Trail</h4>
                    <Tooltip content="This trail was recently added" position="top">
                      <Badge variant="new" />
                    </Tooltip>
                  </div>
                  <p className="text-sm text-slate-600 mb-3">
                    Experience breathtaking views on this challenging trail.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <Tooltip content="Requires advanced hiking experience" position="top">
                      <ChipLevel variant="advanced" />
                    </Tooltip>
                    <Tooltip content="Trail is currently open" position="top">
                      <ChipStatus variant="success" label="Open" icon={false} />
                    </Tooltip>
                    <Tooltip content="Total distance of the trail" position="top">
                      <ChipStatus variant="info" label="5.2 miles" icon={false} />
                    </Tooltip>
                  </div>
                </div>
                <div className="flex gap-1">
                  <Tooltip content="Edit trail" position="left">
                    <Button variant="ghost" size="small">
                      <Edit className="h-4 w-4" />
                    </Button>
                  </Tooltip>
                  <Tooltip content="More options" position="left">
                    <Button variant="ghost" size="small">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </Tooltip>
                </div>
              </div>
            </Card>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <p className="text-sm text-blue-900">
              <strong>Accessibility Note:</strong> Tooltips appear on both hover and focus for keyboard navigation.
              They use role="tooltip" and are announced to screen readers. Keep tooltip content brief and informative.
            </p>
          </div>
        </section>

        {/* Skeleton Section */}
        <section id="skeleton" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Skeleton Loaders</h2>
            <p className="text-slate-600">
              Loading placeholders with shimmer animation for better perceived performance. Includes line, circle, rectangle variants.
            </p>
          </div>

          {/* Basic Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Basic Variants</h3>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-slate-600 mb-2">Line</p>
                <Skeleton variant="line" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Line (Custom Width)</p>
                <Skeleton variant="line" width="60%" />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Circle</p>
                <Skeleton variant="circle" width={60} height={60} />
              </div>
              <div>
                <p className="text-sm text-slate-600 mb-2">Rectangle</p>
                <Skeleton variant="rectangle" height={120} />
              </div>
            </div>
          </div>

          {/* Skeleton Text Block */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Multi-Line Text</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use SkeletonText for multi-line content placeholders.
            </p>
            <div className="max-w-2xl">
              <SkeletonText lines={4} />
            </div>
          </div>

          {/* Skeleton Card */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Skeleton Card</h3>
            <p className="text-sm text-slate-600 mb-3">
              Pre-built skeleton for card loading states.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <SkeletonCard hasImage />
              <SkeletonCard hasImage />
              <SkeletonCard hasImage={false} />
            </div>
          </div>

          {/* Skeleton List */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Skeleton List</h3>
            <p className="text-sm text-slate-600 mb-3">
              Pre-built skeleton for list loading states.
            </p>
            <SkeletonList items={3} />
          </div>

          {/* Real-World Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Examples</h3>
            
            {/* Trail Card Loading */}
            <div className="space-y-2">
              <h4 className="text-sm text-slate-700">Trail Card Loading State</h4>
              <Card elevation="low">
                <div className="space-y-3">
                  <Skeleton variant="rectangle" height={160} />
                  <div className="space-y-2">
                    <Skeleton variant="line" width="70%" height={24} />
                    <SkeletonText lines={2} />
                  </div>
                  <div className="flex gap-2">
                    <Skeleton variant="line" width={80} height={28} />
                    <Skeleton variant="line" width={100} height={28} />
                    <Skeleton variant="line" width={90} height={28} />
                  </div>
                </div>
              </Card>
            </div>

            {/* Dashboard Panel Loading */}
            <div className="space-y-2">
              <h4 className="text-sm text-slate-700">Dashboard Panel Loading State</h4>
              <Panel elevation={1} header={<Skeleton variant="line" width={150} height={20} />}>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <Skeleton variant="line" width={120} />
                    <Skeleton variant="line" width={60} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton variant="line" width={140} />
                    <Skeleton variant="line" width={50} />
                  </div>
                  <div className="flex items-center justify-between">
                    <Skeleton variant="line" width={100} />
                    <Skeleton variant="line" width={70} />
                  </div>
                </div>
              </Panel>
            </div>

            {/* Profile Loading */}
            <div className="space-y-2">
              <h4 className="text-sm text-slate-700">Profile Loading State</h4>
              <Card elevation="low">
                <div className="flex items-start gap-4">
                  <Skeleton variant="circle" width={64} height={64} />
                  <div className="flex-1 space-y-3">
                    <Skeleton variant="line" width="40%" height={24} />
                    <SkeletonText lines={2} />
                    <div className="flex gap-2">
                      <Skeleton variant="line" width={80} height={32} />
                      <Skeleton variant="line" width={100} height={32} />
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>

          {/* Toggle Loading Demo */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Interactive Demo</h3>
            <LoadingDemo />
          </div>
        </section>

        {/* Cards Section */}
        <section id="cards" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-slate-900 mb-2">Cards</h2>
            <p className="text-slate-600 mb-6">
              Flexible card containers with elevation and padding variants. Includes optional header, body, and footer slots.
            </p>

            <div className="space-y-8">
              {/* Elevation Variants */}
              <div className="space-y-4">
                <h3 className="text-slate-700">Elevation Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <Card elevation="none">
                    <h4 className="text-slate-900 mb-2">No Elevation</h4>
                    <p className="text-sm text-slate-600">Flat card with no shadow effect.</p>
                  </Card>
                  <Card elevation="low">
                    <h4 className="text-slate-900 mb-2">Low Elevation</h4>
                    <p className="text-sm text-slate-600">Subtle shadow for slight depth.</p>
                  </Card>
                  <Card elevation="medium">
                    <h4 className="text-slate-900 mb-2">Medium Elevation</h4>
                    <p className="text-sm text-slate-600">Moderate shadow for more emphasis.</p>
                  </Card>
                  <Card elevation="high">
                    <h4 className="text-slate-900 mb-2">High Elevation</h4>
                    <p className="text-sm text-slate-600">Strong shadow for maximum depth.</p>
                  </Card>
                </div>
              </div>

              {/* Padding Variants */}
              <div className="space-y-4">
                <h3 className="text-slate-700">Padding Variants</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card padding="tight" elevation="low">
                    <h4 className="text-slate-900 mb-1">Tight Padding</h4>
                    <p className="text-sm text-slate-600">Compact spacing for dense layouts.</p>
                  </Card>
                  <Card padding="normal" elevation="low">
                    <h4 className="text-slate-900 mb-2">Normal Padding</h4>
                    <p className="text-sm text-slate-600">Default spacing for most use cases.</p>
                  </Card>
                  <Card padding="spacious" elevation="low">
                    <h4 className="text-slate-900 mb-2">Spacious Padding</h4>
                    <p className="text-sm text-slate-600">Generous spacing for breathing room.</p>
                  </Card>
                  <Card padding="none" elevation="low" className="overflow-hidden">
                    <div className="p-6 bg-emerald-50 border-b border-emerald-200">
                      <h4 className="text-slate-900">No Padding</h4>
                    </div>
                    <div className="p-6">
                      <p className="text-sm text-slate-600">Full control over internal spacing.</p>
                    </div>
                  </Card>
                </div>
              </div>

              {/* Card with Header and Footer */}
              <div className="space-y-4">
                <h3 className="text-slate-700">Header & Footer Slots</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <Card
                    elevation="medium"
                    header={
                      <div className="flex items-center justify-between">
                        <h4 className="text-slate-900">Trail Information</h4>
                        <Button variant="ghost" size="small">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    }
                    footer={
                      <div className="flex gap-2">
                        <Button variant="primary" size="small">Save</Button>
                        <Button variant="secondary" size="small">Cancel</Button>
                      </div>
                    }
                  >
                    <p className="text-sm text-slate-600 mb-3">
                      This card demonstrates header and footer slots with automatic border separation.
                    </p>
                    <div className="space-y-2 text-sm text-slate-700">
                      <div className="flex justify-between">
                        <span className="text-slate-500">Difficulty:</span>
                        <span>Moderate</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Distance:</span>
                        <span>5.2 miles</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-slate-500">Elevation:</span>
                        <span>1,200 ft</span>
                      </div>
                    </div>
                  </Card>

                  <Card
                    elevation="medium"
                    header={<h4 className="text-slate-900">Activity Feed</h4>}
                  >
                    <div className="space-y-3">
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-700 flex-shrink-0">
                          <Heart className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-900">New trail favorited</p>
                          <p className="text-xs text-slate-500">2 hours ago</p>
                        </div>
                      </div>
                      <div className="flex gap-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 flex-shrink-0">
                          <Download className="h-4 w-4" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm text-slate-900">Map downloaded</p>
                          <p className="text-xs text-slate-500">5 hours ago</p>
                        </div>
                      </div>
                    </div>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Panels Section */}
        <section id="panels" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-slate-900 mb-2">Panels</h2>
            <p className="text-slate-600 mb-6">
              Surface components for dashboard sections and sidebars. Includes header and action regions.
            </p>

            <div className="space-y-8">
              {/* Elevation Variants */}
              <div className="space-y-4">
                <h3 className="text-slate-700">Elevation Levels</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Panel elevation={0} header={<h4 className="text-slate-900">Elevation 0</h4>}>
                    <p className="text-sm text-slate-600">No shadow, flat appearance.</p>
                  </Panel>
                  <Panel elevation={1} header={<h4 className="text-slate-900">Elevation 1</h4>}>
                    <p className="text-sm text-slate-600">Subtle shadow for slight depth.</p>
                  </Panel>
                  <Panel elevation={2} header={<h4 className="text-slate-900">Elevation 2</h4>}>
                    <p className="text-sm text-slate-600">Moderate shadow for emphasis.</p>
                  </Panel>
                </div>
              </div>

              {/* Panel with Actions */}
              <div className="space-y-4">
                <h3 className="text-slate-700">With Header Actions</h3>
                <Panel
                  elevation={1}
                  header={<h4 className="text-slate-900">Recent Trails</h4>}
                  actions={
                    <>
                      <Button variant="ghost" size="small">
                        <Filter className="h-4 w-4" />
                      </Button>
                      <Button variant="ghost" size="small">
                        <MoreVertical className="h-4 w-4" />
                      </Button>
                    </>
                  }
                >
                  <div className="space-y-3">
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                      <div>
                        <p className="text-sm text-slate-900">Mountain Ridge Trail</p>
                        <p className="text-xs text-slate-500">Last visited: Today</p>
                      </div>
                      <Button variant="ghost" size="small">View</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                      <div>
                        <p className="text-sm text-slate-900">Lakeside Path</p>
                        <p className="text-xs text-slate-500">Last visited: Yesterday</p>
                      </div>
                      <Button variant="ghost" size="small">View</Button>
                    </div>
                    <div className="flex items-center justify-between p-3 bg-slate-50 rounded">
                      <div>
                        <p className="text-sm text-slate-900">Forest Loop</p>
                        <p className="text-xs text-slate-500">Last visited: 3 days ago</p>
                      </div>
                      <Button variant="ghost" size="small">View</Button>
                    </div>
                  </div>
                </Panel>
              </div>

              {/* Dashboard Layout Example */}
              <div className="space-y-4">
                <h3 className="text-slate-700">Dashboard Layout Example</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <Panel
                    elevation={1}
                    header={<h4 className="text-slate-900">Total Distance</h4>}
                  >
                    <div className="text-center">
                      <p className="text-3xl text-emerald-600">124.3</p>
                      <p className="text-sm text-slate-500">miles hiked</p>
                    </div>
                  </Panel>
                  <Panel
                    elevation={1}
                    header={<h4 className="text-slate-900">Trails Completed</h4>}
                  >
                    <div className="text-center">
                      <p className="text-3xl text-blue-600">37</p>
                      <p className="text-sm text-slate-500">this year</p>
                    </div>
                  </Panel>
                  <Panel
                    elevation={1}
                    header={<h4 className="text-slate-900">Elevation Gain</h4>}
                  >
                    <div className="text-center">
                      <p className="text-3xl text-amber-600">18,420</p>
                      <p className="text-sm text-slate-500">feet climbed</p>
                    </div>
                  </Panel>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Modals Section */}
        <section id="modals" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-slate-900 mb-2">Modals</h2>
            <p className="text-slate-600 mb-6">
              Dialog containers with backdrop. Includes header, body, footer slots and close functionality.
              Supports keyboard navigation (ESC to close) and focus trapping.
            </p>

            <div className="space-y-4">
              <h3 className="text-slate-700">Size Variants</h3>
              <div className="flex flex-wrap gap-3">
                <Button variant="primary" onClick={() => setShowModalSmall(true)}>
                  Open Small Modal
                </Button>
                <Button variant="primary" onClick={() => setShowModalMedium(true)}>
                  Open Medium Modal
                </Button>
                <Button variant="primary" onClick={() => setShowModalLarge(true)}>
                  Open Large Modal
                </Button>
              </div>

              <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <p className="text-sm text-blue-900">
                  <strong>Accessibility Note:</strong> Modals implement ARIA dialog role, keyboard navigation (ESC to close),
                  and focus management. In production, ensure focus trap implementation and proper focus restoration.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Toasts Section */}
        <section id="toasts" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8">
            <h2 className="text-slate-900 mb-2">Toasts</h2>
            <p className="text-slate-600 mb-6">
              Notification components with status variants. Includes icon, message, optional action, and close button.
            </p>

            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-slate-700">Variants</h3>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" onClick={() => setShowToastSuccess(!showToastSuccess)}>
                    Toggle Success Toast
                  </Button>
                  <Button variant="primary" onClick={() => setShowToastWarning(!showToastWarning)}>
                    Toggle Warning Toast
                  </Button>
                  <Button variant="primary" onClick={() => setShowToastError(!showToastError)}>
                    Toggle Error Toast
                  </Button>
                  <Button variant="primary" onClick={() => setShowToastInfo(!showToastInfo)}>
                    Toggle Info Toast
                  </Button>
                </div>

                <div className="mt-4 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <p className="text-sm text-blue-900">
                    <strong>Accessibility Note:</strong> Toasts use role="status" and aria-live="polite" for screen reader announcements.
                    Position can be customized: top-right, top-center, bottom-right, or bottom-center.
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                <h3 className="text-slate-700">Static Examples</h3>
                <div className="space-y-3">
                  <Toast
                    variant="success"
                    message="Trail route saved successfully!"
                    showCloseButton={false}
                  />
                  <Toast
                    variant="warning"
                    message="Weather conditions may affect trail access."
                    showCloseButton={false}
                  />
                  <Toast
                    variant="error"
                    message="Failed to load trail map. Please try again."
                    showCloseButton={false}
                  />
                  <Toast
                    variant="info"
                    message="New trails have been added to your area."
                    action={
                      <Button variant="ghost" size="small" className="text-blue-700 hover:text-blue-900">
                        View Trails
                      </Button>
                    }
                    showCloseButton={false}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* P1 Primitives Documentation */}
        <section className="bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl shadow-sm border border-blue-200 p-8 space-y-4">
          <h2 className="text-slate-900">TTDS P1 Primitives – Notes (TTA-104)</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Stepper Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Orientations:</strong> Horizontal for wizard flows, Vertical for sidebar/mobile layouts</li>
                <li><strong>Step States:</strong> completed (emerald-600), current (blue-600 with ring), upcoming (slate-300)</li>
                <li><strong>Icons:</strong> Optional - defaults to numbered steps, accepts Lucide icons</li>
                <li><strong>Connector Lines:</strong> Auto-calculated based on step status</li>
                <li><strong>Transitions:</strong> 200ms duration for smooth state changes</li>
                <li><strong>Accessibility:</strong> role="list", role="listitem", clear aria-labels for each step</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Tooltip Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Positions:</strong> top, bottom, left, right with arrow pointers</li>
                <li><strong>Trigger:</strong> Both hover and focus for keyboard accessibility</li>
                <li><strong>Background:</strong> slate-900 for high contrast against light backgrounds</li>
                <li><strong>Text:</strong> White, extra-small (text-xs), compact padding</li>
                <li><strong>Animation:</strong> Fade-in with 200ms duration</li>
                <li><strong>Accessibility:</strong> role="tooltip", appears on focus for keyboard users</li>
                <li><strong>Best Practice:</strong> Keep content brief (1-2 lines max), use for icon buttons</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Skeleton Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Variants:</strong> line (h-4), circle (rounded-full), rectangle (rounded-lg with custom height)</li>
                <li><strong>Shimmer Effect:</strong> 2s infinite animation with gradient overlay</li>
                <li><strong>Base Color:</strong> slate-200 with pulse animation</li>
                <li><strong>Shimmer Gradient:</strong> Transparent → white/40 → transparent</li>
                <li><strong>Pre-built Components:</strong> SkeletonText, SkeletonCard, SkeletonList</li>
                <li><strong>Accessibility:</strong> aria-label="Loading..." for screen readers</li>
                <li><strong>Usage:</strong> Match skeleton shape to actual content for better UX</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Usage Guidelines</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Stepper:</strong> Use for onboarding flows, multi-step forms, progress tracking</li>
                <li><strong>Tooltip:</strong> Essential for icon-only buttons, helpful for technical terms</li>
                <li><strong>Skeleton:</strong> Use during initial load, avoid for instant interactions (&lt;300ms)</li>
                <li>Always match skeleton dimensions to actual content dimensions</li>
                <li>Stepper should have 3-6 steps (fewer is clearer, more is overwhelming)</li>
                <li>Tooltips should not contain critical information - they're supplementary</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Component Examples</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`// Stepper
<Stepper
  orientation="horizontal"
  steps={[
    { id: '1', label: 'Step 1', status: 'completed' },
    { id: '2', label: 'Step 2', status: 'current' },
    { id: '3', label: 'Step 3', status: 'upcoming' }
  ]}
/>

// Tooltip
<Tooltip content="Edit this item" position="top">
  <Button variant="iconOnly">
    <Edit className="h-4 w-4" />
  </Button>
</Tooltip>

// Skeleton
<Skeleton variant="line" width="60%" />
<Skeleton variant="circle" width={48} height={48} />
<SkeletonText lines={3} />
<SkeletonCard hasImage />`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Design Tokens Used</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Colors:</strong> emerald-600 (success), blue-600 (current), slate-300/400/700/900</li>
                <li><strong>Spacing:</strong> 2, 3, 4, 6, 8, 12 (standard scale)</li>
                <li><strong>Borders:</strong> 2px for step indicators, 4px for arrow pointers</li>
                <li><strong>Rounded:</strong> rounded-lg (8px), rounded-full (circle)</li>
                <li><strong>Shadows:</strong> shadow-lg for tooltips (elevated)</li>
                <li><strong>Transitions:</strong> 200ms duration for all state changes</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Design Tokens & Documentation */}
        <section className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl shadow-sm border border-emerald-200 p-8 space-y-4">
          <h2 className="text-slate-900">TTDS Surfaces & Cards – Notes</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Elevation System</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>None/0:</strong> shadow-none - Flat, no depth</li>
                <li><strong>Low/1:</strong> shadow-sm - Subtle depth for cards</li>
                <li><strong>Medium/2:</strong> shadow-md - Moderate emphasis for panels</li>
                <li><strong>High:</strong> shadow-lg - Maximum depth for modals</li>
                <li><strong>Hover states:</strong> Components lift on hover for interactive feedback</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Spacing Guidelines</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Card Padding None:</strong> p-0 - Full control over internal spacing</li>
                <li><strong>Card Padding Tight:</strong> p-3 (12px) - Compact layouts</li>
                <li><strong>Card Padding Normal:</strong> p-6 (24px) - Default comfortable spacing</li>
                <li><strong>Card Padding Spacious:</strong> p-8 (32px) - Generous breathing room</li>
                <li><strong>Panel Body:</strong> p-6 - Consistent internal spacing</li>
                <li><strong>Modal Content:</strong> p-6 - Comfortable dialog spacing</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Usage Guidance</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Card:</strong> Use for content containers, product displays, or list items</li>
                <li><strong>Panel:</strong> Use for dashboard widgets, sidebars, or grouped sections</li>
                <li><strong>Modal:</strong> Use for dialogs, forms, or focused tasks requiring attention</li>
                <li><strong>Toast:</strong> Use for temporary notifications, confirmations, or alerts</li>
                <li>Cards can be nested in Panels for complex layouts</li>
                <li>Keep modal content focused - avoid overwhelming users</li>
                <li>Toasts should auto-dismiss after 5-7 seconds (implement in production)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Accessibility Features</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>✓ Modal: role="dialog", aria-modal="true", ESC key support</li>
                <li>✓ Toast: role="status", aria-live="polite" for announcements</li>
                <li>✓ High contrast borders for clear separation</li>
                <li>✓ Keyboard navigation fully supported</li>
                <li>✓ Focus management in modals (backdrop click closes)</li>
                <li>✓ Clear visual hierarchy with elevation system</li>
                <li>Production TODO: Implement focus trap in modals</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Component Examples</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`// Card with header and footer
<Card
  elevation="medium"
  header={<h4>Card Title</h4>}
  footer={<Button>Action</Button>}
>
  Card content goes here
</Card>

// Panel with actions
<Panel
  elevation={1}
  header={<h4>Panel Title</h4>}
  actions={<Button variant="ghost">Edit</Button>}
>
  Panel content
</Panel>

// Modal
<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  header={<h3>Dialog Title</h3>}
  footer={<Button>Confirm</Button>}
>
  Modal content
</Modal>

// Toast
<Toast
  variant="success"
  message="Action completed!"
  onClose={() => {}}
/>`}</pre>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-slate-500 text-sm py-8">
          <p>TTDS Design System • TTA-103, TTA-104, TTA-117, TTA-118 • Transition Trails Academy</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          <p className="mt-1 text-xs">Buttons • Inputs • Controls • Chips • Badges • Tags • Stepper • Tooltip • Skeleton • Cards • Panels • Modals • Toasts</p>
        </footer>
      </div>

      {/* Modal Instances */}
      <Modal
        open={showModalSmall}
        onClose={() => setShowModalSmall(false)}
        size="small"
        header={<h3>Small Modal</h3>}
        footer={
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setShowModalSmall(false)}>Cancel</Button>
            <Button variant="primary" onClick={() => setShowModalSmall(false)}>Confirm</Button>
          </div>
        }
      >
        <p className="text-slate-600">
          This is a small modal dialog. Perfect for simple confirmations or quick forms.
        </p>
      </Modal>

      <Modal
        open={showModalMedium}
        onClose={() => setShowModalMedium(false)}
        size="medium"
        header={<h3>Medium Modal - Trail Details</h3>}
        footer={
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setShowModalMedium(false)}>Close</Button>
            <Button variant="primary">Save to Favorites</Button>
          </div>
        }
      >
        <div className="space-y-4">
          <div>
            <h4 className="text-slate-900 mb-2">Overview</h4>
            <p className="text-sm text-slate-600">
              This medium-sized modal is ideal for displaying detailed information with multiple sections.
              It provides enough space for forms, content, or data visualization.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-slate-500">Difficulty</p>
              <p className="text-slate-900">Moderate</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Distance</p>
              <p className="text-slate-900">5.2 miles</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Elevation Gain</p>
              <p className="text-slate-900">1,200 ft</p>
            </div>
            <div>
              <p className="text-sm text-slate-500">Duration</p>
              <p className="text-slate-900">2-3 hours</p>
            </div>
          </div>
        </div>
      </Modal>

      <Modal
        open={showModalLarge}
        onClose={() => setShowModalLarge(false)}
        size="large"
        header={<h3>Large Modal - Complete Trail Form</h3>}
        footer={
          <div className="flex gap-2 justify-end">
            <Button variant="secondary" onClick={() => setShowModalLarge(false)}>Cancel</Button>
            <Button variant="primary">Submit Trail</Button>
          </div>
        }
      >
        <div className="space-y-6">
          <p className="text-slate-600">
            Large modals provide maximum space for complex forms, multi-step processes, or detailed content views.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <TextInput label="Trail Name" placeholder="Enter trail name" fullWidth />
            <SelectInput
              label="Difficulty Level"
              fullWidth
              options={[
                { value: '', label: 'Select difficulty...' },
                { value: 'easy', label: 'Easy' },
                { value: 'moderate', label: 'Moderate' },
                { value: 'difficult', label: 'Difficult' },
              ]}
            />
            <TextInput label="Distance (miles)" placeholder="0.0" fullWidth />
            <TextInput label="Elevation Gain (ft)" placeholder="0" fullWidth />
          </div>
          <TextArea
            label="Description"
            placeholder="Describe the trail..."
            rows={4}
            fullWidth
          />
          <div className="flex gap-4">
            <Checkbox label="Pet friendly" />
            <Checkbox label="Wheelchair accessible" />
            <Checkbox label="Camping available" />
          </div>
        </div>
      </Modal>

      {/* Toast Container */}
      <ToastContainer position="top-right">
        {showToastSuccess && (
          <Toast
            variant="success"
            message="Trail route saved successfully!"
            onClose={() => setShowToastSuccess(false)}
          />
        )}
        {showToastWarning && (
          <Toast
            variant="warning"
            message="Weather conditions may affect trail access."
            onClose={() => setShowToastWarning(false)}
          />
        )}
        {showToastError && (
          <Toast
            variant="error"
            message="Failed to load trail map. Please try again."
            action={<Button variant="ghost" size="small">Retry</Button>}
            onClose={() => setShowToastError(false)}
          />
        )}
        {showToastInfo && (
          <Toast
            variant="info"
            message="New trails have been added to your area."
            action={<Button variant="ghost" size="small">View Trails</Button>}
            onClose={() => setShowToastInfo(false)}
          />
        )}
      </ToastContainer>
    </div>
  );
}