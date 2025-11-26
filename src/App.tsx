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
import { Header } from './components/ttds/Header';
import { TabStrip } from './components/ttds/TabStrip';
import { Breadcrumbs } from './components/ttds/Breadcrumbs';
import { Pagination } from './components/ttds/Pagination';
import { LearnerStatsPanel } from './components/ttds/LearnerStatsPanel';
import { GoalsAndProgressPanel } from './components/ttds/GoalsAndProgressPanel';
import { SkillsAndCertsPanel } from './components/ttds/SkillsAndCertsPanel';
import { Mail, Download, Heart, Settings, Plus, Filter, MoreVertical, Edit, Trash2, Map, Code, BookOpen, Zap, Cloud, Compass, User, FileText, CheckCircle, Home, Layout, Library, Award, Trophy, Target, Star, Lightbulb, MapPin, Edit2, TrendingUp } from 'lucide-react';

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

  // Navigation states
  const [headerScrolled, setHeaderScrolled] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState('overview');
  const [currentPage, setCurrentPage] = React.useState(1);

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
            <span className="px-3 py-1 bg-teal-100 text-teal-700 rounded-full">TTA-119</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">TTA-107</span>
            <span className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full">TTA-129</span>
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
            <a href="#stepper" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Stepper</a>
            <a href="#tooltip" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Tooltip</a>
            <a href="#skeleton" className="px-3 py-1.5 text-sm text-slate-700 hover:bg-slate-100 rounded transition-colors">Skeleton</a>
            <a href="#header" className="px-3 py-1.5 text-sm text-teal-700 bg-teal-50 rounded">Header</a>
            <a href="#tabstrip" className="px-3 py-1.5 text-sm text-teal-700 bg-teal-50 rounded">TabStrip</a>
            <a href="#breadcrumbs" className="px-3 py-1.5 text-sm text-teal-700 bg-teal-50 rounded">Breadcrumbs</a>
            <a href="#pagination" className="px-3 py-1.5 text-sm text-teal-700 bg-teal-50 rounded">Pagination</a>
            <a href="#learnerstats" className="px-3 py-1.5 text-sm text-orange-700 bg-orange-50 rounded">Learner Stats</a>
            <a href="#goalsprogress" className="px-3 py-1.5 text-sm text-purple-700 bg-purple-50 rounded">Goals & Progress</a>
            <a href="#skillscerts" className="px-3 py-1.5 text-sm text-indigo-700 bg-indigo-50 rounded">Skills & Certs</a>
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

        {/* Header Section */}
        <section id="header" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Header Navigation</h2>
            <p className="text-slate-600">
              Global navigation used across all Academy pages. Includes logo, main nav items, utilities, and user area.
            </p>
          </div>

          {/* Default Header */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Default Header</h3>
            <div className="-m-8 mb-4">
              <Header
                navItems={[
                  { id: '1', label: 'Dashboard', href: '#', active: true },
                  { id: '2', label: 'Trails', href: '#' },
                  { id: '3', label: 'Learning Center', href: '#' },
                  { id: '4', label: 'Community', href: '#' },
                ]}
              />
            </div>
          </div>

          {/* Scrolled Header */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Scrolled State (Reduced Height)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Header reduces height when scrolled for better space utilization.
            </p>
            <div className="-m-8 mb-4">
              <Header
                navItems={[
                  { id: '1', label: 'Dashboard', href: '#', active: true },
                  { id: '2', label: 'Trails', href: '#' },
                  { id: '3', label: 'Learning Center', href: '#' },
                  { id: '4', label: 'Community', href: '#' },
                ]}
                scrolled={true}
              />
            </div>
          </div>

          {/* Custom Logo Header */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With Custom Logo</h3>
            <div className="-m-8 mb-4">
              <Header
                logo={
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-br from-emerald-500 to-blue-600 rounded-lg flex items-center justify-center">
                      <Compass className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-slate-900">Transition Trails</div>
                      <div className="text-xs text-slate-500">Academy</div>
                    </div>
                  </div>
                }
                navItems={[
                  { id: '1', label: 'Home', href: '#' },
                  { id: '2', label: 'Trails', href: '#', active: true },
                  { id: '3', label: 'Progress', href: '#' },
                  { id: '4', label: 'Resources', href: '#' },
                ]}
              />
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-sm text-teal-900">
              <strong>Accessibility Features:</strong> role="navigation", aria-label="Main navigation", 
              aria-current="page" for active items, keyboard focus states, mobile menu with proper ARIA attributes.
            </p>
          </div>
        </section>

        {/* TabStrip Section */}
        <section id="tabstrip" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">TabStrip</h2>
            <p className="text-slate-600">
              Local navigation for switching between sections within the same view. Supports horizontal scrolling for long tab lists.
            </p>
          </div>

          {/* Underline Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Underline Variant</h3>
            <TabStrip
              variant="underline"
              tabs={[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'resources', label: 'Resources' },
                { id: 'discussion', label: 'Discussion' },
              ]}
              activeTabId={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* Filled Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Filled Variant</h3>
            <TabStrip
              variant="filled"
              tabs={[
                { id: 'overview', label: 'Overview' },
                { id: 'curriculum', label: 'Curriculum' },
                { id: 'resources', label: 'Resources' },
                { id: 'discussion', label: 'Discussion' },
              ]}
              activeTabId={activeTab}
              onTabChange={setActiveTab}
            />
          </div>

          {/* With Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With Icons</h3>
            <TabStrip
              variant="underline"
              tabs={[
                { id: 'dashboard', label: 'Dashboard', icon: Layout },
                { id: 'library', label: 'Library', icon: Library },
                { id: 'achievements', label: 'Achievements', icon: Award },
                { id: 'profile', label: 'Profile', icon: User },
              ]}
              activeTabId="library"
            />
          </div>

          {/* With Disabled Tab */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With Disabled State</h3>
            <TabStrip
              variant="filled"
              tabs={[
                { id: 'basic', label: 'Basic Info' },
                { id: 'advanced', label: 'Advanced', disabled: true },
                { id: 'settings', label: 'Settings' },
              ]}
              activeTabId="basic"
            />
          </div>

          {/* Long Tab List */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Scrollable Overflow</h3>
            <p className="text-sm text-slate-600 mb-3">
              Long tab lists automatically become scrollable horizontally.
            </p>
            <TabStrip
              variant="underline"
              tabs={[
                { id: 'tab1', label: 'Getting Started' },
                { id: 'tab2', label: 'Fundamentals' },
                { id: 'tab3', label: 'Advanced Topics' },
                { id: 'tab4', label: 'Best Practices' },
                { id: 'tab5', label: 'Case Studies' },
                { id: 'tab6', label: 'Resources' },
                { id: 'tab7', label: 'Community' },
                { id: 'tab8', label: 'Support' },
              ]}
              activeTabId="tab3"
            />
          </div>

          {/* Real-World Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Trail Details Page Example</h3>
            <Card elevation="low">
              <div className="mb-6">
                <h4 className="text-slate-900 mb-1">Wilderness Explorer Trail</h4>
                <p className="text-sm text-slate-600">Navigate through different sections of this trail</p>
              </div>
              <TabStrip
                variant="underline"
                tabs={[
                  { id: 'overview', label: 'Overview', icon: BookOpen },
                  { id: 'lessons', label: 'Lessons', icon: Map },
                  { id: 'activities', label: 'Activities', icon: Zap },
                  { id: 'resources', label: 'Resources', icon: Library },
                ]}
                activeTabId={activeTab}
                onTabChange={setActiveTab}
              />
              <div className="mt-6 p-4 bg-slate-50 rounded-lg">
                <p className="text-sm text-slate-700">
                  {activeTab === 'overview' && 'Overview content would appear here...'}
                  {activeTab === 'curriculum' && 'Curriculum content would appear here...'}
                  {activeTab === 'lessons' && 'Lessons content would appear here...'}
                  {activeTab === 'activities' && 'Activities content would appear here...'}
                  {activeTab === 'resources' && 'Resources and downloads would appear here...'}
                  {activeTab === 'discussion' && 'Discussion forum would appear here...'}
                </p>
              </div>
            </Card>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-sm text-teal-900">
              <strong>Accessibility Features:</strong> role="tablist" and role="tab", aria-selected for active tabs,
              keyboard navigation, touch-friendly hit targets (44px minimum).
            </p>
          </div>
        </section>

        {/* Breadcrumbs Section */}
        <section id="breadcrumbs" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Breadcrumbs</h2>
            <p className="text-slate-600">
              Hierarchical navigation for user orientation within the Academy. Shows path from root to current location.
            </p>
          </div>

          {/* Basic Breadcrumbs */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Basic Breadcrumbs</h3>
            <Breadcrumbs
              items={[
                { id: '1', label: 'Home', href: '#' },
                { id: '2', label: 'Learning Center', href: '#' },
                { id: '3', label: 'Trails', href: '#' },
                { id: '4', label: 'Wilderness Explorer' },
              ]}
            />
          </div>

          {/* With Home Icon */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With Home Icon</h3>
            <Breadcrumbs
              showHomeIcon={true}
              items={[
                { id: '1', label: 'Dashboard', href: '#' },
                { id: '2', label: 'Missions', href: '#' },
                { id: '3', label: 'Active Mission' },
              ]}
            />
          </div>

          {/* Short Path */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Short Path</h3>
            <Breadcrumbs
              items={[
                { id: '1', label: 'Academy', href: '#' },
                { id: '2', label: 'Profile' },
              ]}
            />
          </div>

          {/* Long Path with Truncation */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Long Path (Auto-Truncated)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Paths longer than maxItems automatically show ellipsis in the middle.
            </p>
            <Breadcrumbs
              maxItems={4}
              items={[
                { id: '1', label: 'Home', href: '#' },
                { id: '2', label: 'Learning Center', href: '#' },
                { id: '3', label: 'Trails', href: '#' },
                { id: '4', label: 'Technology', href: '#' },
                { id: '5', label: 'Web Development', href: '#' },
                { id: '6', label: 'React Course', href: '#' },
                { id: '7', label: 'Module 3' },
              ]}
            />
          </div>

          {/* Real-World Examples */}
          <div className="space-y-4">
            <h3 className="text-slate-700">Real-World Examples</h3>
            
            <Card elevation="low">
              <div className="space-y-4">
                <Breadcrumbs
                  items={[
                    { id: '1', label: 'Dashboard', href: '#' },
                    { id: '2', label: 'My Trails', href: '#' },
                    { id: '3', label: 'Mountain Ridge Trail', href: '#' },
                    { id: '4', label: 'Lesson 5' },
                  ]}
                />
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-slate-900 mb-2">Lesson 5: Advanced Techniques</h4>
                  <p className="text-sm text-slate-600">
                    Content for this lesson would appear here. The breadcrumbs above help users understand where they are.
                  </p>
                </div>
              </div>
            </Card>

            <Card elevation="low">
              <div className="space-y-4">
                <Breadcrumbs
                  showHomeIcon={true}
                  items={[
                    { id: '1', label: 'Academy', href: '#' },
                    { id: '2', label: 'Resources', href: '#' },
                    { id: '3', label: 'Documentation' },
                  ]}
                />
                <div className="border-t border-slate-200 pt-4">
                  <h4 className="text-slate-900 mb-2">Component Documentation</h4>
                  <div className="flex gap-2">
                    <Tag variant="default">Documentation</Tag>
                    <Tag variant="default">Resources</Tag>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-sm text-teal-900">
              <strong>Accessibility Features:</strong> aria-label="Breadcrumb", aria-current="page" for current item,
              semantic nav and ol elements, WCAG AA contrast on all text and links.
            </p>
          </div>
        </section>

        {/* Pagination Section */}
        <section id="pagination" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Pagination</h2>
            <p className="text-slate-600">
              Navigate through multi-page content like search results, lists, missions, and learning activities.
            </p>
          </div>

          {/* Basic Pagination */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Basic Pagination</h3>
            <Pagination
              currentPage={currentPage}
              totalPages={10}
              onPageChange={setCurrentPage}
            />
          </div>

          {/* Without First/Last */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without First/Last Buttons</h3>
            <Pagination
              currentPage={3}
              totalPages={8}
              showFirstLast={false}
            />
          </div>

          {/* Few Pages */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Few Pages</h3>
            <p className="text-sm text-slate-600 mb-3">
              When total pages fit in maxPageButtons, all pages are shown.
            </p>
            <Pagination
              currentPage={2}
              totalPages={5}
            />
          </div>

          {/* Many Pages with Ellipsis */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Many Pages (With Ellipsis)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Smart ellipsis placement for large page counts.
            </p>
            <div className="space-y-3">
              <div>
                <p className="text-xs text-slate-500 mb-2">Page 1 of 20:</p>
                <Pagination currentPage={1} totalPages={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">Page 10 of 20:</p>
                <Pagination currentPage={10} totalPages={20} />
              </div>
              <div>
                <p className="text-xs text-slate-500 mb-2">Page 20 of 20:</p>
                <Pagination currentPage={20} totalPages={20} />
              </div>
            </div>
          </div>

          {/* Interactive Demo */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Interactive Demo</h3>
            <Card elevation="low">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-slate-900">Trail Search Results</h4>
                    <p className="text-sm text-slate-600">Page {currentPage} of 10 • 100 results</p>
                  </div>
                  <Button variant="secondary" size="small">
                    <Filter className="h-4 w-4" />
                  </Button>
                </div>
                
                <div className="space-y-2">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div key={item} className="p-3 bg-slate-50 rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                          <Map className="h-6 w-6 text-emerald-700" />
                        </div>
                        <div>
                          <p className="text-sm text-slate-900">Trail Result {((currentPage - 1) * 5) + item}</p>
                          <p className="text-xs text-slate-500">Intermediate • 3 hours</p>
                        </div>
                      </div>
                      <ChipLevel variant="intermediate" />
                    </div>
                  ))}
                </div>

                <div className="border-t border-slate-200 pt-4">
                  <Pagination
                    currentPage={currentPage}
                    totalPages={10}
                    onPageChange={setCurrentPage}
                  />
                </div>
              </div>
            </Card>
          </div>

          {/* Use Cases */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Common Use Cases</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-slate-50 rounded-lg">
                <strong className="text-slate-900">Learning Center</strong>
                <p className="text-slate-600 mt-1">Browse through available trails and courses</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <strong className="text-slate-900">Search Results</strong>
                <p className="text-slate-600 mt-1">Navigate through filtered content</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <strong className="text-slate-900">Activity History</strong>
                <p className="text-slate-600 mt-1">Review past missions and completions</p>
              </div>
              <div className="p-3 bg-slate-50 rounded-lg">
                <strong className="text-slate-900">Discussion Forums</strong>
                <p className="text-slate-600 mt-1">Browse through community posts</p>
              </div>
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-teal-50 border border-teal-200 rounded-lg">
            <p className="text-sm text-teal-900">
              <strong>Accessibility Features:</strong> aria-label="Pagination" and aria-label="Go to page X" on buttons,
              aria-current="page" for active page, disabled states, keyboard navigation with focus indicators.
            </p>
          </div>
        </section>

        {/* Learner Stats Panel Section */}
        <section id="learnerstats" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Learner Stats Panel</h2>
            <p className="text-slate-600">
              Domain-specific panel for displaying learner progress metrics. Shows points, trails, missions, capstones, and badges in a scannable layout.
            </p>
          </div>

          {/* Default (Full Grid) */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Default - Full Grid Layout</h3>
            <LearnerStatsPanel />
          </div>

          {/* Compact Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Compact Variant</h3>
            <p className="text-sm text-slate-600 mb-3">
              Reduced padding and smaller typography for space-constrained contexts.
            </p>
            <LearnerStatsPanel variant="compact" />
          </div>

          {/* Without Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Icons</h3>
            <p className="text-sm text-slate-600 mb-3">
              Cleaner text-only presentation when icons are not needed.
            </p>
            <LearnerStatsPanel showIcons={false} />
          </div>

          {/* Horizontal Layout */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Horizontal Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Stats displayed in a flex row instead of grid, better for wide viewports.
            </p>
            <LearnerStatsPanel layout="horizontal" />
          </div>

          {/* Without Title */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Title</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use when the panel context is already clear from the surrounding page.
            </p>
            <LearnerStatsPanel showTitle={false} />
          </div>

          {/* Custom Stats */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Custom Stats Example</h3>
            <p className="text-sm text-slate-600 mb-3">
              Fully customizable stat items with optional trend indicators.
            </p>
            <LearnerStatsPanel
              title="This Week's Progress"
              stats={[
                { id: 'points', label: 'Points Earned', value: 340, icon: <Star className="h-5 w-5" />, trend: 12 },
                { id: 'lessons', label: 'Lessons Completed', value: 7, icon: <BookOpen className="h-5 w-5" />, trend: 8 },
                { id: 'time', label: 'Hours Learned', value: 12, icon: <Cloud className="h-5 w-5" /> },
              ]}
            />
          </div>

          {/* Dashboard Context Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Dashboard Context</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how the panel appears in a full dashboard view.
            </p>
            <div className="space-y-4 bg-gradient-to-br from-slate-50 to-stone-50 p-6 rounded-xl border border-slate-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900">Welcome back, Alex!</h3>
                  <p className="text-sm text-slate-600 mt-1">Continue your learning journey</p>
                </div>
                <div className="flex gap-2">
                  <Button variant="secondary" size="small">
                    <Settings className="h-4 w-4" />
                  </Button>
                  <Button variant="primary" size="small">
                    <Plus className="h-4 w-4" />
                    New Trail
                  </Button>
                </div>
              </div>

              {/* Stats Panel */}
              <LearnerStatsPanel 
                stats={[
                  { id: 'points', label: 'Total Points', value: 3250, icon: <Star className="h-5 w-5" /> },
                  { id: 'trails', label: 'Trails Completed', value: 12, icon: <Map className="h-5 w-5" /> },
                  { id: 'missions', label: 'Missions Completed', value: 38, icon: <Target className="h-5 w-5" /> },
                  { id: 'capstones', label: 'Capstones Done', value: 5, icon: <Trophy className="h-5 w-5" /> },
                  { id: 'badges', label: 'Badges Earned', value: 18, icon: <Award className="h-5 w-5" /> },
                ]}
              />

              {/* Additional Dashboard Content */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <Card elevation="low">
                  <h4 className="text-slate-900 mb-2">Current Trail</h4>
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 bg-emerald-100 rounded-lg flex items-center justify-center">
                      <Map className="h-6 w-6 text-emerald-700" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-slate-900">Advanced React Patterns</p>
                      <p className="text-xs text-slate-500">Lesson 4 of 10 • 60% Complete</p>
                    </div>
                  </div>
                  <div className="mt-3 h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '60%' }}></div>
                  </div>
                </Card>

                <Card elevation="low">
                  <h4 className="text-slate-900 mb-2">Recent Achievements</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                        <Trophy className="h-4 w-4 text-amber-700" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-900">Trail Master</p>
                        <p className="text-xs text-slate-500">2 days ago</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                        <Award className="h-4 w-4 text-blue-700" />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs text-slate-900">Fast Learner</p>
                        <p className="text-xs text-slate-500">5 days ago</p>
                      </div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          {/* Responsive Grid Demo */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Responsive Behavior</h3>
            <p className="text-sm text-slate-600 mb-3">
              Grid automatically adjusts: 2 columns mobile, 3 tablet, 5 desktop.
            </p>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 space-y-2 text-xs text-slate-600">
              <p><strong>Mobile:</strong> grid-cols-2 (stacked stats)</p>
              <p><strong>Tablet (sm):</strong> grid-cols-3 (3 stats per row)</p>
              <p><strong>Desktop (lg):</strong> grid-cols-5 (all stats in one row)</p>
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-orange-50 border border-orange-200 rounded-lg">
            <p className="text-sm text-orange-900">
              <strong>Accessibility Features:</strong> Semantic HTML structure, high contrast text (WCAG AA), 
              clear labels for all metrics, number formatting for readability (commas for thousands), 
              responsive layout preserves reading order.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <strong className="text-emerald-900">✓ Do</strong>
                <ul className="mt-2 space-y-1 text-emerald-800 text-xs">
                  <li>• Use in dashboard views for learner overview</li>
                  <li>• Show 5-7 key metrics maximum</li>
                  <li>• Use compact variant in sidebars</li>
                  <li>• Format large numbers with commas</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <strong className="text-red-900">✗ Don't</strong>
                <ul className="mt-2 space-y-1 text-red-800 text-xs">
                  <li>• Overcrowd with 10+ metrics</li>
                  <li>• Use for non-learner statistics</li>
                  <li>• Mix different metric types (keep related)</li>
                  <li>• Use horizontal layout on mobile</li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Goals & Progress Panel Section */}
        <section id="goalsprogress" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Goals & Progress Panel</h2>
            <p className="text-slate-600">
              Domain-specific panel for displaying learner goals and recommended next steps. Shows career goal, current trail, and recommendations.
            </p>
          </div>

          {/* Default (Full) */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Default - Full Layout</h3>
            <GoalsAndProgressPanel />
          </div>

          {/* Compact Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Compact Variant</h3>
            <p className="text-sm text-slate-600 mb-3">
              Reduced padding and smaller typography for space-constrained contexts like sidebars.
            </p>
            <GoalsAndProgressPanel variant="compact" />
          </div>

          {/* Without Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Icons</h3>
            <p className="text-sm text-slate-600 mb-3">
              Cleaner text-only presentation when visual simplicity is preferred.
            </p>
            <GoalsAndProgressPanel showIcons={false} />
          </div>

          {/* Without Recommendation */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Recommendation</h3>
            <p className="text-sm text-slate-600 mb-3">
              Hide the recommendation field when not applicable or when focusing only on current state.
            </p>
            <GoalsAndProgressPanel showRecommendation={false} />
          </div>

          {/* Link-style CTA */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Link-style CTA</h3>
            <p className="text-sm text-slate-600 mb-3">
              Use a link-style action instead of a button for a lighter visual treatment.
            </p>
            <GoalsAndProgressPanel ctaVariant="link" ctaText="Edit Career Goal" />
          </div>

          {/* Custom Content */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Custom Content Example</h3>
            <p className="text-sm text-slate-600 mb-3">
              Fully customizable field values for different learner scenarios.
            </p>
            <GoalsAndProgressPanel
              careerGoal="Developer → Engineering Manager"
              currentFocusTrail="Leadership Trail: Tech Lead Path"
              nextRecommendation="People Management Skills"
              ctaText="Adjust My Path"
            />
          </div>

          {/* New Learner Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">New Learner (No Goal Set)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example for learners who haven't set their career goal yet.
            </p>
            <GoalsAndProgressPanel
              careerGoal="Not yet defined"
              currentFocusTrail="Exploring available trails"
              nextRecommendation="Take the career assessment"
              ctaText="Set Your Career Goal"
              ctaVariant="button"
            />
          </div>

          {/* Dashboard Context Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Dashboard Context</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how the panel appears alongside other dashboard components.
            </p>
            <div className="space-y-4 bg-gradient-to-br from-slate-50 to-stone-50 p-6 rounded-xl border border-slate-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900">Learning Dashboard</h3>
                  <p className="text-sm text-slate-600 mt-1">Track your progress and goals</p>
                </div>
                <Button variant="primary" size="small">
                  <Plus className="h-4 w-4" />
                  New Trail
                </Button>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Goals Panel */}
                <GoalsAndProgressPanel
                  careerGoal="Salesforce Admin → Developer"
                  currentFocusTrail="Guided Trail: Apex Fundamentals"
                  nextRecommendation="LWC Development Trail"
                  onUpdateGoal={() => alert('Update goal clicked!')}
                />

                {/* Progress Summary Card */}
                <div className="bg-white rounded-xl border border-slate-200 p-6 space-y-4">
                  <div>
                    <h3 className="text-slate-900">This Month</h3>
                    <p className="text-sm text-slate-600 mt-1">Your learning activity</p>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Missions Completed</span>
                      <span className="text-lg text-slate-900">12</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Hours Learned</span>
                      <span className="text-lg text-slate-900">8.5</span>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-slate-600">Points Earned</span>
                      <span className="text-lg text-slate-900">450</span>
                    </div>
                  </div>

                  <div className="pt-3 border-t border-slate-100">
                    <div className="flex items-center gap-2 text-sm text-emerald-700">
                      <TrendingUp className="h-4 w-4" />
                      <span>+15% from last month</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Current Trail Detail */}
              <Card elevation="low">
                <h4 className="text-slate-900 mb-3">Current Trail Progress</h4>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-slate-600">Apex Fundamentals</span>
                    <span className="text-slate-900">Lesson 6 of 12</span>
                  </div>
                  <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-600 rounded-full" style={{ width: '50%' }}></div>
                  </div>
                  <p className="text-xs text-slate-500">50% complete • Est. 6 hours remaining</p>
                </div>
              </Card>
            </div>
          </div>

          {/* Field Information */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Field Descriptions</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <Target className="h-4 w-4 text-emerald-700" />
                  <strong className="text-sm text-emerald-900">Career Goal</strong>
                </div>
                <p className="text-xs text-emerald-800">
                  The learner's aspirational career transition (e.g., "Admin → Consultant"). 
                  Format: Current Role → Target Role.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <MapPin className="h-4 w-4 text-blue-700" />
                  <strong className="text-sm text-blue-900">Current Focus Trail</strong>
                </div>
                <p className="text-xs text-blue-800">
                  The trail the learner is actively working on right now. 
                  Includes the trail name and type (e.g., "Guided Trail: Admin Mastery").
                </p>
              </div>

              <div className="p-4 bg-amber-50 rounded-lg border border-amber-200">
                <div className="flex items-center gap-2 mb-2">
                  <Lightbulb className="h-4 w-4 text-amber-700" />
                  <strong className="text-sm text-amber-900">Next Recommendation</strong>
                </div>
                <p className="text-xs text-amber-800">
                  AI-powered or curated suggestion for what trail or content to tackle next 
                  based on the learner's goal and current progress.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Edit2 className="h-4 w-4 text-purple-700" />
                  <strong className="text-sm text-purple-900">Update Goal CTA</strong>
                </div>
                <p className="text-xs text-purple-800">
                  Action button or link that allows learners to modify their career goal, 
                  reassess their path, or adjust their learning direction.
                </p>
              </div>
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>Accessibility Features:</strong> Semantic HTML structure with proper heading hierarchy, 
              WCAG AA contrast ratios (slate-600: 7.6:1, slate-900: 14.9:1), visible focus ring on CTA (2px emerald-500), 
              aria-label on link-style CTA, logical screen reader order (Goal → Trail → Recommendation → CTA), 
              icon colors provide additional meaning but not sole meaning (labels always present).
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <strong className="text-emerald-900">✓ Do</strong>
                <ul className="mt-2 space-y-1 text-emerald-800 text-xs">
                  <li>• Use in dashboard or profile views</li>
                  <li>• Keep career goals concise (Current → Target)</li>
                  <li>• Use compact variant in sidebars</li>
                  <li>• Make CTA action clear and actionable</li>
                  <li>• Update recommendation dynamically based on progress</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <strong className="text-red-900">✗ Don't</strong>
                <ul className="mt-2 space-y-1 text-red-800 text-xs">
                  <li>• Use for non-learner contexts</li>
                  <li>• Overcomplicate field values (keep brief)</li>
                  <li>• Hide CTA (always provide update path)</li>
                  <li>• Use without proper data (show placeholder if needed)</li>
                  <li>• Mix different learner goals in same panel</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Components */}
          <div className="space-y-2">
            <h3 className="text-slate-700">Related Components</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">LearnerStatsPanel</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Panel</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Button</span>
            </div>
          </div>
        </section>

        {/* Skills & Certifications Panel Section */}
        <section id="skillscerts" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Skills & Certifications Panel</h2>
            <p className="text-slate-600">
              Domain-specific panel for displaying learner certifications, skills, and tools expertise. Groups Salesforce credentials, technical skills, and non-SF platforms.
            </p>
          </div>

          {/* Default (Full) */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Default - Full Layout</h3>
            <SkillsAndCertsPanel />
          </div>

          {/* Compact Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Compact Variant</h3>
            <p className="text-sm text-slate-600 mb-3">
              Reduced padding and smaller typography for space-constrained contexts like sidebars or mobile views.
            </p>
            <SkillsAndCertsPanel variant="compact" />
          </div>

          {/* Two-Column Layout */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Two-Column Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Certifications displayed in a two-column grid for better space utilization.
            </p>
            <SkillsAndCertsPanel layout="two-column" />
          </div>

          {/* Without Section Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Section Icons</h3>
            <p className="text-sm text-slate-600 mb-3">
              Cleaner text-only section headers when visual simplicity is preferred.
            </p>
            <SkillsAndCertsPanel showSectionIcons={false} />
          </div>

          {/* Without Certification Icons */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Certification Icons</h3>
            <p className="text-sm text-slate-600 mb-3">
              Hide the checkmark icons next to certifications for a more minimal look.
            </p>
            <SkillsAndCertsPanel showCertIcons={false} />
          </div>

          {/* Collapsed Skills (Show/Hide) */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Collapsed Skills</h3>
            <p className="text-sm text-slate-600 mb-3">
              Skills section collapsed by default with option to expand. Shows first 3 skills with a "+X more" link.
            </p>
            <SkillsAndCertsPanel collapsedSkills={true} maxSkillsPreview={3} />
          </div>

          {/* With CTA */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With CTA Button</h3>
            <p className="text-sm text-slate-600 mb-3">
              Include an action button to update or add skills/certifications.
            </p>
            <SkillsAndCertsPanel 
              showCTA={true} 
              ctaText="Update Skills"
              onCTAClick={() => alert('Update skills clicked!')}
            />
          </div>

          {/* Custom Content Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Custom Content - Developer Profile</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example with custom certifications, skills, and tools for a developer-focused learner.
            </p>
            <SkillsAndCertsPanel
              certifications={[
                { id: '1', name: 'Platform Developer I', earned: true },
                { id: '2', name: 'Platform Developer II', earned: true },
                { id: '3', name: 'JavaScript Developer I', earned: true },
                { id: '4', name: 'Application Architect', earned: false },
              ]}
              skills={[
                { id: '1', name: 'Apex', variant: 'trail' },
                { id: '2', name: 'Lightning Web Components', variant: 'trail' },
                { id: '3', name: 'REST APIs', variant: 'platform' },
                { id: '4', name: 'SOQL', variant: 'topic' },
                { id: '5', name: 'Integration Patterns', variant: 'default' },
                { id: '6', name: 'DevOps', variant: 'default' },
              ]}
              tools={[
                { id: '1', name: 'VS Code' },
                { id: '2', name: 'Git/GitHub' },
                { id: '3', name: 'Postman' },
                { id: '4', name: 'SFDX CLI' },
                { id: '5', name: 'Copado' },
              ]}
            />
          </div>

          {/* Custom Content - Business Analyst Profile */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Custom Content - Business Analyst Profile</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example focused on business analyst skills and tools.
            </p>
            <SkillsAndCertsPanel
              certifications={[
                { id: '1', name: 'Business Analyst', earned: true },
                { id: '2', name: 'Salesforce Admin', earned: true },
                { id: '3', name: 'Sales Cloud Consultant', earned: false },
              ]}
              skills={[
                { id: '1', name: 'Requirements Gathering', variant: 'topic' },
                { id: '2', name: 'Process Mapping', variant: 'default' },
                { id: '3', name: 'User Story Writing', variant: 'default' },
                { id: '4', name: 'Stakeholder Management', variant: 'default' },
                { id: '5', name: 'Flow Builder', variant: 'trail' },
              ]}
              tools={[
                { id: '1', name: 'Miro' },
                { id: '2', name: 'Lucidchart' },
                { id: '3', name: 'Confluence' },
                { id: '4', name: 'Jira' },
              ]}
              variant="compact"
              showCTA={true}
              ctaText="Add Certification"
            />
          </div>

          {/* Dashboard Context Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Dashboard Context - Profile View</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example showing how panels work together in a dashboard layout.
            </p>
            <div className="space-y-4 bg-gradient-to-br from-slate-50 to-stone-50 p-6 rounded-xl border border-slate-200">
              {/* Dashboard Header */}
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-slate-900">Learner Profile</h3>
                  <p className="text-sm text-slate-600 mt-1">Your credentials and expertise</p>
                </div>
                <Button variant="primary" size="small">
                  <Edit className="h-4 w-4" />
                  Edit Profile
                </Button>
              </div>

              {/* Two Column Layout */}
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                {/* Skills & Certs Panel */}
                <SkillsAndCertsPanel
                  certifications={[
                    { id: '1', name: 'Salesforce Admin', earned: true },
                    { id: '2', name: 'AI Associate', earned: true },
                  ]}
                  skills={[
                    { id: '1', name: 'Reporting', variant: 'topic' },
                    { id: '2', name: 'Automation', variant: 'trail' },
                    { id: '3', name: 'User Support', variant: 'default' },
                  ]}
                  tools={[
                    { id: '1', name: 'Slack' },
                    { id: '2', name: 'Jira' },
                  ]}
                  showCTA={true}
                  ctaText="Update Skills"
                />

                {/* Goals Panel */}
                <GoalsAndProgressPanel
                  careerGoal="Admin → Consultant"
                  currentFocusTrail="Sales Cloud Consultant Path"
                  nextRecommendation="Service Cloud Fundamentals"
                  ctaText="Update Goal"
                />
              </div>

              {/* Stats Summary */}
              <LearnerStatsPanel
                variant="horizontal"
                stats={[
                  { id: 'certs', label: 'Certifications', value: 2, icon: <Award className="h-5 w-5" />, trend: 10 },
                  { id: 'skills', label: 'Skills Verified', value: 8, icon: <CheckCircle className="h-5 w-5" /> },
                  { id: 'profile', label: 'Profile Strength', value: 85, icon: <Trophy className="h-5 w-5" />, trend: 5 },
                ]}
              />
            </div>
          </div>

          {/* Section Information */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Section Descriptions</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <Award className="h-4 w-4 text-emerald-700" />
                  <strong className="text-sm text-emerald-900">Salesforce Certifications</strong>
                </div>
                <p className="text-xs text-emerald-800">
                  Official Salesforce credentials earned or in-progress. Green background indicates earned certifications.
                  Shows technical competency and formal validation.
                </p>
              </div>

              <div className="p-4 bg-blue-50 rounded-lg border border-blue-200">
                <div className="flex items-center gap-2 mb-2">
                  <Code className="h-4 w-4 text-blue-700" />
                  <strong className="text-sm text-blue-900">Skills</strong>
                </div>
                <p className="text-xs text-blue-800">
                  Technical and functional skills related to Salesforce platform work.
                  Uses tag variants (trail/platform/topic) to categorize skill types.
                </p>
              </div>

              <div className="p-4 bg-purple-50 rounded-lg border border-purple-200">
                <div className="flex items-center gap-2 mb-2">
                  <Cloud className="h-4 w-4 text-purple-700" />
                  <strong className="text-sm text-purple-900">Tools & Platforms</strong>
                </div>
                <p className="text-xs text-purple-800">
                  Non-Salesforce tools and platforms the learner is proficient with.
                  Demonstrates broader technical capability beyond the SF ecosystem.
                </p>
              </div>
            </div>
          </div>

          {/* Accessibility Note */}
          <div className="p-4 bg-purple-50 border border-purple-200 rounded-lg">
            <p className="text-sm text-purple-900">
              <strong>Accessibility Features:</strong> Semantic HTML with proper heading hierarchy (h3 for panel title, h4 for sections), 
              WCAG AA contrast ratios throughout (emerald-900: 10.4:1, slate-700: 9.2:1, slate-900: 14.9:1), 
              descriptive text labels for all certifications and tags (no icon-only elements), 
              aria-label on expand/collapse button, logical screen reader order (Certifications → Skills → Tools → CTA), 
              checkmark icons provide visual reinforcement but earned status also shown via background color.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <strong className="text-emerald-900">✓ Do</strong>
                <ul className="mt-2 space-y-1 text-emerald-800 text-xs">
                  <li>• Use in learner profiles and dashboards</li>
                  <li>• Group related skills by variant (trail/platform/topic)</li>
                  <li>• Indicate earned vs. in-progress certifications</li>
                  <li>• Use two-column layout for many certifications</li>
                  <li>• Collapse skills section if list is very long</li>
                  <li>• Include non-SF tools to show broader expertise</li>
                </ul>
              </div>
              <div className="p-3 bg-red-50 rounded-lg border border-red-200">
                <strong className="text-red-900">✗ Don't</strong>
                <ul className="mt-2 space-y-1 text-red-800 text-xs">
                  <li>• List non-Salesforce certifications in SF section</li>
                  <li>• Overcrowd with 20+ skills (use filtering/grouping)</li>
                  <li>• Use for team or organizational credentials</li>
                  <li>• Mix different learners' data in one panel</li>
                  <li>• Rely on icons alone (always include text labels)</li>
                  <li>• Show expired certifications without indication</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Related Components */}
          <div className="space-y-2">
            <h3 className="text-slate-700">Related Components</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">GoalsAndProgressPanel</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">LearnerStatsPanel</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Button</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card</span>
            </div>
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

        {/* Goals & Progress Panel Documentation */}
        <section className="bg-gradient-to-br from-purple-50 to-violet-50 rounded-xl shadow-sm border border-purple-200 p-8 space-y-4">
          <h2 className="text-slate-900">TT Goals & Progress Panel – Notes (TTA-129)</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Component Overview</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Type:</strong> Domain-specific component (TT namespace)</li>
                <li><strong>Purpose:</strong> Display learner's career goal and learning direction</li>
                <li><strong>Base:</strong> Built on TTDS Card/Panel foundation</li>
                <li><strong>Required Fields:</strong> Career Goal, Current Focus Trail, Next Recommendation, Update CTA</li>
                <li><strong>Context:</strong> Dashboard Template 2, Profile Overview</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Variants & Props</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>variant:</strong> 'full' (p-6, text-lg) or 'compact' (p-4, text-base/text-sm)</li>
                <li><strong>showIcons:</strong> true (colored icons visible) or false (text-only)</li>
                <li><strong>showRecommendation:</strong> true (show field) or false (hide field)</li>
                <li><strong>ctaVariant:</strong> 'button' (secondary button) or 'link' (inline link with arrow)</li>
                <li><strong>ctaText:</strong> Custom CTA text (default: "Update Goal")</li>
                <li><strong>careerGoal:</strong> Custom career goal string</li>
                <li><strong>currentFocusTrail:</strong> Custom current trail string</li>
                <li><strong>nextRecommendation:</strong> Custom recommendation string</li>
                <li><strong>onUpdateGoal:</strong> Click handler function for CTA</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Field Structure & Format</h3>
              <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <strong className="text-slate-900">Career Goal:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Format: "Current Role → Target Role"<br/>
                    Example: "Admin → Consultant", "Developer → Engineering Manager"
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900">Current Focus Trail:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Format: "Trail Type: Trail Name"<br/>
                    Example: "Guided Trail: Admin Mastery", "Self-Paced: Apex Fundamentals"
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900">Next Recommendation:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Format: Brief suggestion for next trail/content<br/>
                    Example: "AI Trail after Admin", "LWC Development Trail"
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Icon Mapping</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Career Goal:</strong> Target icon (emerald-600) - represents aspiration</li>
                <li><strong>Current Focus Trail:</strong> MapPin icon (blue-600) - represents current location</li>
                <li><strong>Next Recommendation:</strong> Lightbulb icon (amber-600) - represents suggestion</li>
                <li><strong>CTA:</strong> Edit2 icon - represents edit/update action</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Design Tokens</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Container:</strong> white background, slate-200 border, rounded-xl (12px)</li>
                <li><strong>Padding:</strong> Full p-6 (24px), Compact p-4 (16px)</li>
                <li><strong>Spacing:</strong> space-y-4 (16px) between fields (full), space-y-3 (12px) compact</li>
                <li><strong>Dividers:</strong> border-t border-slate-100 between fields</li>
                <li><strong>Icons:</strong> h-5 w-5 (20px) full, h-4 w-4 (16px) compact</li>
                <li><strong>Labels:</strong> text-sm (14px), slate-600 (or text-xs compact)</li>
                <li><strong>Values:</strong> text-lg (18px) full, text-base (16px) compact, slate-900</li>
                <li><strong>Title:</strong> h3 element, slate-900, base size or text-base for compact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">CTA Variants</h3>
              <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <strong className="text-slate-900">Button Variant:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Uses TTDS Button component (variant="secondary", size responsive to panel variant).
                    Full width on mobile, auto width on desktop (sm:w-auto).
                    Includes Edit2 icon.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900">Link Variant:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Inline link with emerald-700 text, Edit2 icon on left, ArrowRight icon on right.
                    Focus ring: 2px emerald-500 with offset.
                    Lighter visual treatment, better for minimal designs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">When to Use</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Dashboard:</strong> Primary placement in Dashboard Template 2 for goal overview</li>
                <li><strong>Profile:</strong> Learner profile pages to show career direction</li>
                <li><strong>Onboarding:</strong> During goal-setting flow to confirm choices</li>
                <li><strong>Progress Review:</strong> Periodic check-ins to reassess goals</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Use Cases</h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900">New Learner:</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Show "Not yet defined" for career goal, "Exploring available trails" for focus,
                    "Take the career assessment" as recommendation. CTA: "Set Your Career Goal".
                  </p>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900">Active Learner:</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Show concrete career goal, current trail in progress, AI-powered next recommendation.
                    CTA: "Update Goal" or "Adjust My Path".
                  </p>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900">Completed Trail:</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Show current goal, note trail completion, strong recommendation for next trail.
                    Consider highlighting recommendation (could be enhanced in future).
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Related Components</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>LearnerStatsPanel:</strong> Often used together in dashboard layout</li>
                <li><strong>TTDS/Card:</strong> Base container component</li>
                <li><strong>TTDS/Panel:</strong> Alternative base for panels</li>
                <li><strong>TTDS/Button:</strong> Used for CTA button variant</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Example Usage</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`import { GoalsAndProgressPanel } from './components/ttds/GoalsAndProgressPanel';

// Default usage
<GoalsAndProgressPanel />

// Compact sidebar version with link CTA
<GoalsAndProgressPanel 
  variant="compact" 
  ctaVariant="link"
  ctaText="Edit Goal"
/>

// Custom content with handler
<GoalsAndProgressPanel
  careerGoal="Admin → Consultant"
  currentFocusTrail="Guided Trail: Admin Mastery"
  nextRecommendation="AI Trail after Admin"
  onUpdateGoal={() => {
    // Open goal editing modal
    openGoalModal();
  }}
/>

// Without recommendation (focus on current state)
<GoalsAndProgressPanel 
  showRecommendation={false}
/>`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Accessibility</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Semantic HTML: h3 for title, logical content structure</li>
                <li>WCAG AA contrast: slate-600 labels (7.6:1), slate-900 values (14.9:1)</li>
                <li>Focus states: Visible 2px focus ring on CTA with emerald-500 color</li>
                <li>Screen reader order: Goal → Trail → Recommendation → CTA (logical flow)</li>
                <li>aria-label: Applied to link-style CTA for clarity</li>
                <li>Icon meaning: Icons are decorative only, labels provide all meaning</li>
                <li>Keyboard navigation: CTA is fully keyboard accessible</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Responsive Behavior</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Container: Full width with max-width constraints from parent</li>
                <li>Button CTA: w-full on mobile, sm:w-auto on tablet/desktop</li>
                <li>Text: Wraps naturally, values truncate if extremely long (rare)</li>
                <li>Icons: Always same size (scale with variant, not viewport)</li>
                <li>Grid layout: Works well in 1-column mobile or 2-column desktop grids</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Skills & Certifications Panel Documentation */}
        <section className="bg-gradient-to-br from-indigo-50 to-blue-50 rounded-xl shadow-sm border border-indigo-200 p-8 space-y-4">
          <h2 className="text-slate-900">TT Skills & Certifications Panel – Notes (TTA-130)</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Component Overview</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Type:</strong> Domain-specific component (TT namespace)</li>
                <li><strong>Purpose:</strong> Display learner credentials, skills, and tool proficiencies</li>
                <li><strong>Base:</strong> Built on TTDS Card/Panel foundation with Tag components</li>
                <li><strong>Three Sections:</strong> Salesforce Certifications, Skills, Tools & Platforms</li>
                <li><strong>Context:</strong> Learner profiles, dashboard views, portfolio displays</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Variants & Props</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>variant:</strong> 'full' (p-6, larger text) or 'compact' (p-4, smaller text/spacing)</li>
                <li><strong>layout:</strong> 'single' (stacked list) or 'two-column' (grid for certifications)</li>
                <li><strong>showSectionIcons:</strong> true (Award/Code/Wrench icons) or false (text-only headers)</li>
                <li><strong>showCertIcons:</strong> true (checkmark badges) or false (no cert icons)</li>
                <li><strong>collapsedSkills:</strong> true (show preview + expand) or false (show all)</li>
                <li><strong>maxSkillsPreview:</strong> Number of skills to show when collapsed (default: 3)</li>
                <li><strong>showCTA:</strong> true (show action button) or false (no CTA)</li>
                <li><strong>ctaText:</strong> Custom CTA button text (default: "Update Skills")</li>
                <li><strong>certifications/skills/tools:</strong> Arrays of data objects for each section</li>
                <li><strong>onCTAClick:</strong> Handler function for CTA button</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Data Structures</h3>
              <div className="bg-white rounded-lg p-4 space-y-3 text-sm font-mono">
                <div>
                  <strong className="text-slate-900">Certification:</strong>
                  <pre className="text-slate-600 text-xs mt-1 ml-2">{`{
  id: string,
  name: string,
  earned?: boolean
}`}</pre>
                </div>
                <div>
                  <strong className="text-slate-900">Skill:</strong>
                  <pre className="text-slate-600 text-xs mt-1 ml-2">{`{
  id: string,
  name: string,
  variant?: 'default' | 'trail' | 'platform' | 'topic'
}`}</pre>
                </div>
                <div>
                  <strong className="text-slate-900">Tool:</strong>
                  <pre className="text-slate-600 text-xs mt-1 ml-2">{`{
  id: string,
  name: string
}`}</pre>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Section Descriptions</h3>
              <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <strong className="text-emerald-900">Salesforce Certifications:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Official Salesforce credentials (Admin, Developer, Consultant, etc.).
                    Green background/checkmark for earned certs, gray for in-progress.
                    Uses badge-like elements with checkmark icons.
                  </p>
                </div>
                <div>
                  <strong className="text-blue-900">Skills:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Technical and functional skills (Reporting, Automation, SOQL, etc.).
                    Uses TTDS Tag component with variant colors to categorize skill types
                    (trail, platform, topic, default).
                  </p>
                </div>
                <div>
                  <strong className="text-purple-900">Tools & Platforms:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Non-Salesforce tools and platforms (Jira, Slack, Git, etc.).
                    Demonstrates broader technical capability. Uses default Tag styling.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Icon Mapping</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Certifications Section:</strong> Award icon (emerald-600) - represents credentials</li>
                <li><strong>Skills Section:</strong> Code icon (blue-600) - represents technical skills</li>
                <li><strong>Tools Section:</strong> Wrench icon (purple-600) - represents tools/platforms</li>
                <li><strong>Certification Items:</strong> CheckCircle icon - emerald-600 (earned) or slate-400 (in-progress)</li>
                <li><strong>CTA:</strong> Plus icon - represents add/update action</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Design Tokens</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Container:</strong> white background, slate-200 border, rounded-xl (12px)</li>
                <li><strong>Padding:</strong> Full p-6 (24px), Compact p-4 (16px)</li>
                <li><strong>Spacing:</strong> space-y-5 (20px) between sections (full), space-y-4 (16px) compact</li>
                <li><strong>Dividers:</strong> border-t border-slate-100 between sections</li>
                <li><strong>Section Icons:</strong> h-5 w-5 (20px) full, h-4 w-4 (16px) compact</li>
                <li><strong>Cert Icons:</strong> h-4 w-4 (16px) full, h-3.5 w-3.5 (14px) compact</li>
                <li><strong>Section Headers:</strong> text-base (16px) full, text-sm (14px) compact, slate-700</li>
                <li><strong>Cert Items:</strong> bg-slate-50 (default), bg-emerald-50 (earned), rounded-lg</li>
                <li><strong>Tags:</strong> TTDS Tag component with gap-2 flex wrapping</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Layout Variants</h3>
              <div className="bg-white rounded-lg p-4 space-y-3 text-sm">
                <div>
                  <strong className="text-slate-900">Single Column (default):</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    All certifications stacked vertically. Best for narrow containers or mobile.
                  </p>
                </div>
                <div>
                  <strong className="text-slate-900">Two Column:</strong>
                  <p className="text-slate-600 text-xs mt-1">
                    Certifications displayed in grid-cols-2. Better space utilization for 4+ certs.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Skill Tag Variants</h3>
              <div className="bg-white rounded-lg p-4 space-y-2 text-sm">
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 w-20">trail:</span>
                  <span className="text-xs text-slate-600">Emerald background - Salesforce trail-related skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 w-20">platform:</span>
                  <span className="text-xs text-slate-600">Blue background - Platform/cloud skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 w-20">topic:</span>
                  <span className="text-xs text-slate-600">Purple background - Topic/domain skills</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-slate-900 w-20">default:</span>
                  <span className="text-xs text-slate-600">Slate background - General skills</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">When to Use</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Profile Pages:</strong> Primary placement in learner profile for expertise showcase</li>
                <li><strong>Dashboard:</strong> Part of Dashboard Template 2 alongside goals/stats panels</li>
                <li><strong>Portfolio:</strong> Public-facing portfolio or resume views</li>
                <li><strong>Onboarding:</strong> During profile setup to capture initial skills</li>
                <li><strong>Progress Review:</strong> Periodic updates to track skill development</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Use Cases</h3>
              <div className="space-y-2 text-sm">
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900">Developer Profile:</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Certs: Platform Developer I/II, JavaScript Developer. Skills: Apex, LWC, REST APIs (trail/platform variants).
                    Tools: VS Code, Git, Postman, SFDX CLI. Shows technical depth.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900">Admin Profile:</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Certs: Salesforce Admin, AI Associate. Skills: Reporting, Automation, User Support (topic/default variants).
                    Tools: Jira, Slack, Google Workspace. Shows admin + collaboration focus.
                  </p>
                </div>
                <div className="p-3 bg-white rounded border border-slate-200">
                  <strong className="text-slate-900">Business Analyst Profile:</strong>
                  <p className="text-xs text-slate-600 mt-1">
                    Certs: Business Analyst, potentially Admin. Skills: Requirements Gathering, Process Mapping, Flow Builder.
                    Tools: Miro, Lucidchart, Confluence, Jira. Shows BA + technical capability.
                  </p>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Related Components</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>GoalsAndProgressPanel:</strong> Often paired in dashboard/profile layouts</li>
                <li><strong>LearnerStatsPanel:</strong> Complementary stats display</li>
                <li><strong>TTDS/Tag:</strong> Core component for skills and tools display</li>
                <li><strong>TTDS/Card:</strong> Base container component</li>
                <li><strong>TTDS/Button:</strong> Used for CTA variant</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Example Usage</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`import { SkillsAndCertsPanel } from './components/ttds/SkillsAndCertsPanel';

// Default usage with preset data
<SkillsAndCertsPanel />

// Compact with CTA
<SkillsAndCertsPanel 
  variant="compact"
  showCTA={true}
  ctaText="Update Skills"
/>

// Custom data for developer profile
<SkillsAndCertsPanel
  certifications={[
    { id: '1', name: 'Platform Developer I', earned: true },
    { id: '2', name: 'Platform Developer II', earned: false },
  ]}
  skills={[
    { id: '1', name: 'Apex', variant: 'trail' },
    { id: '2', name: 'LWC', variant: 'trail' },
    { id: '3', name: 'REST APIs', variant: 'platform' },
  ]}
  tools={[
    { id: '1', name: 'VS Code' },
    { id: '2', name: 'Git' },
  ]}
  layout="two-column"
  onCTAClick={() => openSkillsEditor()}
/>

// Collapsed skills for long lists
<SkillsAndCertsPanel
  collapsedSkills={true}
  maxSkillsPreview={3}
/>`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Accessibility</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Semantic HTML: h3 for panel title, h4 for section headers</li>
                <li>WCAG AA contrast: All text meets minimum 4.5:1 ratio</li>
                <li>Earned certifications: Indicated by both color AND icon (not color-only)</li>
                <li>aria-label: Applied to expand/collapse button for skills</li>
                <li>Screen reader order: Certifications → Skills → Tools → CTA (logical flow)</li>
                <li>Tag components: Proper role="tag" and aria-label attributes</li>
                <li>Icon meaning: Icons reinforce but don't replace text labels</li>
                <li>Keyboard navigation: All interactive elements keyboard accessible</li>
                <li>Focus states: Visible focus rings on all interactive elements</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Responsive Behavior</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Container: Full width with max-width constraints from parent</li>
                <li>Tags: flex-wrap ensures proper wrapping on narrow screens</li>
                <li>Two-column layout: Uses grid-cols-2, consider grid-cols-1 for very narrow screens</li>
                <li>Button CTA: w-full on mobile, sm:w-auto on tablet/desktop</li>
                <li>Icons: Consistent size regardless of viewport (scale with variant only)</li>
                <li>Certification badges: Stack naturally, readable at all sizes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Content Guidelines</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div className="p-3 bg-emerald-50 rounded border border-emerald-200">
                  <strong className="text-emerald-900">✓ Do</strong>
                  <ul className="mt-2 space-y-1 text-emerald-800 text-xs">
                    <li>• Use official Salesforce cert names</li>
                    <li>• Group skills by type using variants</li>
                    <li>• Include relevant non-SF tools</li>
                    <li>• Indicate earned vs. in-progress certs</li>
                    <li>• Keep skill names concise (1-3 words)</li>
                    <li>• Use collapse for 10+ skills</li>
                  </ul>
                </div>
                <div className="p-3 bg-red-50 rounded border border-red-200">
                  <strong className="text-red-900">✗ Don't</strong>
                  <ul className="mt-2 space-y-1 text-red-800 text-xs">
                    <li>• Mix SF and non-SF certs in same section</li>
                    <li>• List soft skills (separate component)</li>
                    <li>• Overcrowd with 20+ unorganized skills</li>
                    <li>• Use abbreviations without context</li>
                    <li>• Show expired certs without indication</li>
                    <li>• Rely on icons alone for meaning</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Learner Stats Panel Documentation */}
        <section className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-xl shadow-sm border border-orange-200 p-8 space-y-4">
          <h2 className="text-slate-900">TT Learner Stats Panel – Notes (TTA-107)</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Component Overview</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Type:</strong> Domain-specific component (TT namespace)</li>
                <li><strong>Purpose:</strong> Display learner progress metrics in dashboard views</li>
                <li><strong>Base:</strong> Built on TTDS Panel/Card foundation</li>
                <li><strong>Default Metrics:</strong> Points, Trails, Missions, Capstones, Badges</li>
                <li><strong>Customization:</strong> Fully customizable stat items and configuration</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Variants & Props</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>variant:</strong> 'full' (p-6) or 'compact' (p-4, smaller text)</li>
                <li><strong>layout:</strong> 'grid' (responsive columns) or 'horizontal' (flex row)</li>
                <li><strong>showIcons:</strong> true (icons visible) or false (text-only)</li>
                <li><strong>showTitle:</strong> true (with title) or false (title hidden)</li>
                <li><strong>title:</strong> Custom title string (default: "Your Progress")</li>
                <li><strong>stats:</strong> Array of stat objects with label, value, icon, optional trend</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Stat Object Structure</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`interface LearnerStat {
  id: string;           // Unique identifier
  label: string;        // Display label (e.g., "Total Points")
  value: number;        // Numeric value (auto-formatted with commas)
  icon?: ReactNode;     // Optional Lucide icon component
  trend?: number;       // Optional percentage change indicator
}`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Responsive Grid Behavior</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Mobile (default):</strong> grid-cols-2 → 2 stats per row</li>
                <li><strong>Tablet (sm: 640px+):</strong> grid-cols-3 → 3 stats per row</li>
                <li><strong>Desktop (lg: 1024px+):</strong> grid-cols-5 → all 5 stats in one row</li>
                <li><strong>Horizontal layout:</strong> flex-wrap with min-w-[120px] per stat</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Design Tokens</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Container:</strong> white background, slate-200 border, rounded-xl (12px)</li>
                <li><strong>Padding:</strong> Full variant p-6 (24px), Compact p-4 (16px)</li>
                <li><strong>Spacing:</strong> space-y-2 (8px) between elements, gap-4 (16px) in grid</li>
                <li><strong>Icons:</strong> h-5 w-5 (20px), emerald-600 color</li>
                <li><strong>Labels:</strong> text-sm (14px), slate-600 (or text-xs compact)</li>
                <li><strong>Values:</strong> text-2xl (24px) full, text-xl (20px) compact, slate-900</li>
                <li><strong>Title:</strong> h3 element, slate-900, base size or text-base for compact</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">When to Use</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Dashboard:</strong> Primary use case at top of learner dashboard</li>
                <li><strong>Profile Pages:</strong> Overview section showing learner achievements</li>
                <li><strong>Progress Reports:</strong> Summary of completed activities</li>
                <li><strong>Onboarding:</strong> Show starting state (all zeros) to encourage engagement</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Related Components</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>TTDS/Card:</strong> Base container component</li>
                <li><strong>TTDS/Panel:</strong> Alternative base for panels</li>
                <li><strong>TTDS/ChipLevel:</strong> Can be used alongside for level indicators</li>
                <li><strong>TTDS/Badge:</strong> Can show badges earned in detail view</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Example Usage</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`import { LearnerStatsPanel } from './components/ttds/LearnerStatsPanel';
import { Star, Map, Target, Trophy, Award } from 'lucide-react';

// Default usage
<LearnerStatsPanel />

// Compact sidebar version
<LearnerStatsPanel variant="compact" showTitle={false} />

// Custom stats with trends
<LearnerStatsPanel
  title="This Week"
  stats={[
    { 
      id: 'points', 
      label: 'Points Earned', 
      value: 340,
      icon: <Star className="h-5 w-5" />,
      trend: 12  // +12% indicator
    },
    // ... more stats
  ]}
/>`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Accessibility</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li>Semantic HTML: h3 for title, proper heading hierarchy</li>
                <li>WCAG AA contrast: slate-600 text on white (7.6:1), slate-900 headings (14.9:1)</li>
                <li>Number formatting: toLocaleString() adds commas for readability</li>
                <li>Reading order: Grid layout preserves logical stat order</li>
                <li>No interactive elements: Panel is informational only (no focus states needed)</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Navigation Documentation */}
        <section className="bg-gradient-to-br from-teal-50 to-cyan-50 rounded-xl shadow-sm border border-teal-200 p-8 space-y-4">
          <h2 className="text-slate-900">TTDS Navigation – Notes (TTA-119)</h2>
          
          <div className="space-y-4 text-slate-700">
            <div>
              <h3 className="text-slate-800 mb-2">Header Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Purpose:</strong> Global navigation across all Academy pages</li>
                <li><strong>States:</strong> Default (h-16), Scrolled (h-14 with shadow)</li>
                <li><strong>Sections:</strong> Logo area (left), Nav items (center/right), Utilities + User (right)</li>
                <li><strong>Responsive:</strong> Mobile menu collapses to hamburger icon</li>
                <li><strong>Active State:</strong> emerald-50 background with emerald-700 text</li>
                <li><strong>Hover:</strong> slate-100 background for nav items</li>
                <li><strong>Accessibility:</strong> role="navigation", aria-current for active, keyboard focus</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">TabStrip Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Purpose:</strong> Local navigation within a single view/page</li>
                <li><strong>Variants:</strong> Underline (bottom border) or Filled (background color)</li>
                <li><strong>Icon Support:</strong> Optional Lucide icons before label</li>
                <li><strong>States:</strong> Default, Hover (slate-100 or border), Selected (emerald), Disabled (40% opacity)</li>
                <li><strong>Scrolling:</strong> Horizontal scroll for long tab lists (scrollbar hidden)</li>
                <li><strong>Transitions:</strong> 200ms duration for smooth state changes</li>
                <li><strong>Accessibility:</strong> role="tablist", role="tab", aria-selected, keyboard nav</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Breadcrumbs Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Purpose:</strong> Hierarchical navigation showing user's current location</li>
                <li><strong>Separator:</strong> ChevronRight icon between items</li>
                <li><strong>Truncation:</strong> Auto-ellipsis when items exceed maxItems (default: 4)</li>
                <li><strong>Home Icon:</strong> Optional home icon for first breadcrumb</li>
                <li><strong>Current Item:</strong> Non-clickable, slate-900 text with aria-current="page"</li>
                <li><strong>Links:</strong> slate-600, hover emerald-600 for clickable items</li>
                <li><strong>Accessibility:</strong> semantic nav/ol elements, aria-label="Breadcrumb"</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Pagination Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Purpose:</strong> Navigate multi-page content (search, lists, forums)</li>
                <li><strong>Controls:</strong> First/Prev/Next/Last buttons + page numbers</li>
                <li><strong>Ellipsis:</strong> Smart placement for large page counts (1 ... 5 6 7 ... 20)</li>
                <li><strong>Active Page:</strong> emerald-600 background, white text, shadow</li>
                <li><strong>Disabled:</strong> slate-300 text, cursor-not-allowed</li>
                <li><strong>Configurable:</strong> maxPageButtons (default: 7), showFirstLast option</li>
                <li><strong>Accessibility:</strong> aria-label for all buttons, aria-current="page", disabled states</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">When to Use Each Component</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Header:</strong> Every page in the Academy for consistent global navigation</li>
                <li><strong>TabStrip:</strong> Switching content sections within a page (trail details, dashboard panels)</li>
                <li><strong>Breadcrumbs:</strong> Deep hierarchies (Home → Center → Trails → Course → Lesson)</li>
                <li><strong>Pagination:</strong> Lists with 20+ items, search results, activity history</li>
                <li><strong>Header vs TabStrip:</strong> Header for site-wide, TabStrip for page-level</li>
                <li><strong>Breadcrumbs vs Tabs:</strong> Breadcrumbs for hierarchy, Tabs for related content</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Component Examples</h3>
              <div className="bg-white rounded-lg p-4 font-mono text-xs overflow-x-auto">
                <pre className="text-slate-800">{`// Header
<Header
  navItems={[
    { id: '1', label: 'Dashboard', href: '/dashboard', active: true },
    { id: '2', label: 'Trails', href: '/trails' }
  ]}
  showUserArea
  showUtilities
/>

// TabStrip
<TabStrip
  variant="underline"
  tabs={[
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'lessons', label: 'Lessons', icon: Map }
  ]}
  activeTabId={activeTab}
  onTabChange={setActiveTab}
/>

// Breadcrumbs
<Breadcrumbs
  items={[
    { id: '1', label: 'Home', href: '/' },
    { id: '2', label: 'Trails', href: '/trails' },
    { id: '3', label: 'Current Trail' }
  ]}
  showHomeIcon
/>

// Pagination
<Pagination
  currentPage={currentPage}
  totalPages={20}
  onPageChange={setCurrentPage}
  showFirstLast
/>`}</pre>
              </div>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Design Tokens Used</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Colors:</strong> emerald-50/600 (active), slate-100/300/600/900, blue-100/600 (user)</li>
                <li><strong>Heights:</strong> Header default (h-16/64px), scrolled (h-14/56px)</li>
                <li><strong>Touch Targets:</strong> Minimum 44px for all interactive elements</li>
                <li><strong>Spacing:</strong> 1, 2, 3, 4, 6, 8 (standard scale)</li>
                <li><strong>Borders:</strong> 2px for active tab underline, 1px for dividers</li>
                <li><strong>Rounded:</strong> rounded-lg (8px) for buttons and containers</li>
                <li><strong>Shadows:</strong> shadow-sm for scrolled header</li>
                <li><strong>Transitions:</strong> 200ms duration for all state changes</li>
              </ul>
            </div>

            <div>
              <h3 className="text-slate-800 mb-2">Responsive Behavior</h3>
              <ul className="list-disc list-inside space-y-1 text-sm">
                <li><strong>Header:</strong> Mobile shows hamburger menu, utilities move to drawer</li>
                <li><strong>TabStrip:</strong> Horizontal scroll on mobile, all tabs remain visible</li>
                <li><strong>Breadcrumbs:</strong> Wraps on mobile, truncation prevents overflow</li>
                <li><strong>Pagination:</strong> Fewer page numbers on mobile, first/last optional</li>
                <li><strong>Breakpoints:</strong> md (768px) for desktop vs mobile layouts</li>
              </ul>
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
          <p>TTDS Design System • TTA-103, TTA-104, TTA-107, TTA-117, TTA-118, TTA-119, TTA-129 • Transition Trails Academy</p>
          <p className="mt-2">Built with React, TypeScript, and Tailwind CSS</p>
          <p className="mt-1 text-xs">Buttons • Inputs • Controls • Chips • Badges • Tags • Stepper • Tooltip • Skeleton • Learner Stats • Goals & Progress • Header • TabStrip • Breadcrumbs • Pagination • Cards • Panels • Modals • Toasts</p>
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