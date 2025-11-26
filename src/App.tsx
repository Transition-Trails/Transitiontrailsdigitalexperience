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
import { PartnerProjectCard } from './components/ttds/PartnerProjectCard';
import { EventSessionCard } from './components/ttds/EventSessionCard';
import { RoadmapItemCard } from './components/ttds/RoadmapItemCard';
import { LearningActivityCard } from './components/ttds/LearningActivityCard';
import { AssignmentCard } from './components/ttds/AssignmentCard';
import { PennyInsightRail } from './components/ttds/PennyInsightRail';
import { BadgesAndCreditsPanel } from './components/ttds/BadgesAndCreditsPanel';
import { PennyTip } from './components/ttds/PennyTip';
import { TTCommunityPostCard } from './components/tt/CommunityPostCard';
import { TTMetricTile } from './components/tt/MetricTile';
import { TTDonateSection } from './components/tt/DonateSection';
import { TTProgramOverviewCard } from './components/tt/ProgramOverviewCard';
import { Mail, Download, Heart, Settings, Plus, Filter, MoreVertical, Edit, Trash2, Map, Code, BookOpen, Zap, Cloud, Compass, User, Users, FileText, CheckCircle, Home, Layout, Library, Award, Trophy, Target, Star, Lightbulb, MapPin, Edit2, TrendingUp, Building2, AlertCircle, Calendar, GraduationCap, Shield, Eye, Briefcase } from 'lucide-react';

// Interactive Donate Demo Component
function InteractiveDonateDemo() {
  const [selectedTier, setSelectedTier] = React.useState<string>('');

  return (
    <TTDonateSection
      headline="Choose your level of impact"
      supportingText="Select an amount below to see how your support helps build pathways to tech careers."
      metrics={[
        { value: '147+', label: 'Interns Supported', subtext: 'Since 2024', icon: Users, iconColor: 'text-emerald-600' },
        { value: '32', label: 'Nonprofit Projects', subtext: 'Delivered', icon: Target, iconColor: 'text-blue-600' },
        { value: '1,200', label: 'Volunteer Hours', subtext: 'This year', icon: Trophy, iconColor: 'text-amber-600' },
      ]}
      givingTiers={[
        { amount: '$25', label: 'Supporter' },
        { amount: '$50', label: 'Advocate' },
        { amount: '$100', label: 'Champion' },
        { amount: '$250', label: 'Trailblazer' },
      ]}
      selectedTier={selectedTier}
      donateButtonLabel={selectedTier ? `Donate ${selectedTier}` : 'Select an Amount'}
      microcopy="Tax-deductible 501(c)(3) gift"
      alignment="centered"
      background="light"
      onDonate={() => {
        if (selectedTier) {
          alert(`Thank you for your ${selectedTier} donation!`);
        } else {
          alert('Please select a giving level first');
        }
      }}
      onSelectTier={(tier) => setSelectedTier(tier.amount)}
    />
  );
}

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
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full">TTA-128</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">TTA-127</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">TTA-123</span>
            <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded-full">TTA-133</span>
            <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded-full">TTA-132</span>
            <span className="px-3 py-1 bg-pink-100 text-pink-700 rounded-full">TTA-109</span>
            <span className="px-3 py-1 bg-amber-100 text-amber-700 rounded-full">TTA-131</span>
            <span className="px-3 py-1 bg-cyan-100 text-cyan-700 rounded-full">TTA-126</span>
            <span className="px-3 py-1 bg-lime-100 text-lime-700 rounded-full">TTA-108</span>
            <span className="px-3 py-1 bg-orange-100 text-orange-700 rounded-full">TTA-124</span>
            <span className="px-3 py-1 bg-rose-100 text-rose-700 rounded-full">TTA-125</span>
            <span className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full">TTA-122</span>
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
            <a href="#partnerproject" className="px-3 py-1.5 text-sm text-rose-700 bg-rose-50 rounded">Partner Projects</a>
            <a href="#eventsession" className="px-3 py-1.5 text-sm text-cyan-700 bg-cyan-50 rounded">Event Sessions</a>
            <a href="#roadmap" className="px-3 py-1.5 text-sm text-indigo-700 bg-indigo-50 rounded">Roadmap</a>
            <a href="#learningactivity" className="px-3 py-1.5 text-sm text-emerald-700 bg-emerald-50 rounded">Learning Activities</a>
            <a href="#assignment" className="px-3 py-1.5 text-sm text-violet-700 bg-violet-50 rounded">Assignments</a>
            <a href="#penny" className="px-3 py-1.5 text-sm text-pink-700 bg-pink-50 rounded">Penny Insights</a>
            <a href="#badges" className="px-3 py-1.5 text-sm text-amber-700 bg-amber-50 rounded">Badges & Credits</a>
            <a href="#pennytip" className="px-3 py-1.5 text-sm text-cyan-700 bg-cyan-50 rounded">Penny Tips</a>
            <a href="#communitypost" className="px-3 py-1.5 text-sm text-lime-700 bg-lime-50 rounded">Community Post</a>
            <a href="#metrictile" className="px-3 py-1.5 text-sm text-orange-700 bg-orange-50 rounded">Impact Metrics</a>
            <a href="#donate" className="px-3 py-1.5 text-sm text-rose-700 bg-rose-50 rounded">Donation CTA</a>
            <a href="#programoverview" className="px-3 py-1.5 text-sm text-indigo-700 bg-indigo-50 rounded">Program Overview</a>
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

        {/* Partner Project Card Section */}
        <section id="partnerproject" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Partner Project / Portfolio Card</h2>
            <p className="text-slate-600">
              Domain component for showcasing real nonprofit or small-business projects completed by learners. 
              Displays six required content fields with support for multiple layout variants, size options, and optional CTAs.
            </p>
          </div>

          {/* Compact Vertical Cards */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Compact Vertical Cards</h3>
            <p className="text-sm text-slate-600 mb-3">
              Space-efficient cards for grid layouts and dashboards. Ideal for displaying multiple projects in a portfolio view.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PartnerProjectCard
                nonprofitName="Ocean Conservation Society"
                projectTitle="Volunteer Management System"
                skillsUsed={['Database Design', 'Process Automation', 'User Training']}
                techStack={['Salesforce', 'Flow Builder', 'Experience Cloud']}
                projectStatus="completed"
                impactSummary="Streamlined volunteer coordination for 500+ members, reducing admin time by 40%."
                size="compact"
                layout="vertical"
              />
              <PartnerProjectCard
                nonprofitName="Green Valley Food Bank"
                projectTitle="Donation Tracking Dashboard"
                skillsUsed={['Reporting', 'Data Analysis', 'Stakeholder Training']}
                techStack={['Salesforce', 'Tableau', 'Einstein Analytics']}
                projectStatus="in-progress"
                impactSummary="Building real-time insights to optimize food distribution across 12 partner locations."
                size="compact"
                layout="vertical"
              />
              <PartnerProjectCard
                nonprofitName="Youth STEM Initiative"
                projectTitle="Student Progress Tracker"
                skillsUsed={['Custom Objects', 'Workflows', 'Mobile Design']}
                techStack={['Salesforce', 'Lightning Components', 'Mobile App']}
                projectStatus="in-review"
                impactSummary="Tracking academic progress for 200+ students with real-time parent/teacher communication."
                size="compact"
                layout="vertical"
              />
            </div>
          </div>

          {/* Full Vertical Cards */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Full Vertical Cards with CTAs</h3>
            <p className="text-sm text-slate-600 mb-3">
              Full-size cards with detailed information and call-to-action buttons. Best for featured projects or single-column layouts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <PartnerProjectCard
                nonprofitName="Community Health Network"
                projectTitle="Patient Care Coordination Platform"
                skillsUsed={['Integration', 'Security', 'Compliance', 'Custom Development']}
                techStack={['Salesforce Health Cloud', 'API Integration', 'Shield']}
                projectStatus="completed"
                impactSummary="Integrated care coordination system serving 5,000+ patients annually. Improved care team communication by 60% and reduced appointment no-shows by 35%."
                size="full"
                layout="vertical"
                ctaLabel="View Case Study"
                onCtaClick={() => alert('Opening case study...')}
              />
              <PartnerProjectCard
                nonprofitName="Animal Rescue Coalition"
                projectTitle="Adoption & Foster Management System"
                skillsUsed={['Workflow Automation', 'Email Templates', 'Mobile Forms']}
                techStack={['Salesforce', 'Flow Builder', 'FormAssembly']}
                projectStatus="completed"
                impactSummary="Automated adoption process for 300+ animals per year. Reduced paperwork time by 50% and increased successful adoptions by 25% through better matching algorithms."
                size="full"
                layout="vertical"
                ctaLabel="View Project"
                onCtaClick={() => alert('Opening project details...')}
              />
            </div>
          </div>

          {/* Horizontal Layout Cards */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Horizontal Layout Cards</h3>
            <p className="text-sm text-slate-600 mb-3">
              Wide format cards for list views and detailed project showcases. Provides more horizontal space for content.
            </p>
            <div className="space-y-4">
              <PartnerProjectCard
                nonprofitName="Literacy Foundation"
                projectTitle="Reading Program Management System"
                skillsUsed={['Data Modeling', 'Reporting', 'User Experience', 'Training Materials']}
                techStack={['Salesforce', 'Reports & Dashboards', 'Communities']}
                projectStatus="completed"
                impactSummary="Comprehensive platform to manage reading programs across 25 schools. Tracks student progress, volunteer tutors, and program outcomes. Enabled data-driven program improvements that increased reading proficiency by 30%."
                layout="horizontal"
                size="full"
                ctaLabel="Read Success Story"
                onCtaClick={() => alert('Opening success story...')}
              />
              <PartnerProjectCard
                nonprofitName="Small Business Tech Hub"
                projectTitle="Entrepreneur Support CRM"
                skillsUsed={['Business Analysis', 'System Architecture', 'Integration']}
                techStack={['Salesforce', 'Zapier', 'DocuSign', 'QuickBooks']}
                projectStatus="in-progress"
                impactSummary="Building integrated CRM to support 150+ local entrepreneurs with mentorship, resources, and funding opportunities. Creating automated workflows to match businesses with relevant support programs."
                layout="horizontal"
                size="full"
              />
            </div>
          </div>

          {/* Vertical Cards with Images */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Cards with Project Images</h3>
            <p className="text-sm text-slate-600 mb-3">
              Cards with optional hero images for visual project representation. Great for portfolios and case studies.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <PartnerProjectCard
                nonprofitName="Urban Gardens Collective"
                projectTitle="Community Garden Network"
                skillsUsed={['Mapping', 'Community Engagement', 'Resource Management']}
                techStack={['Salesforce', 'Google Maps API', 'Mobile App']}
                projectStatus="completed"
                impactSummary="Connected 50+ urban gardens with resource sharing and volunteer coordination tools."
                size="compact"
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1464226184884-fa280b87c399?w=400&q=80"
              />
              <PartnerProjectCard
                nonprofitName="Habitat for Hope"
                projectTitle="Housing Construction Tracker"
                skillsUsed={['Project Management', 'Resource Planning', 'Reporting']}
                techStack={['Salesforce', 'Project Management Tools', 'Dashboards']}
                projectStatus="completed"
                impactSummary="Manages construction projects and volunteer scheduling for 20+ homes annually."
                size="compact"
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?w=400&q=80"
              />
              <PartnerProjectCard
                nonprofitName="Wilderness Education Center"
                projectTitle="Trail Maintenance Coordinator"
                skillsUsed={['Field Service', 'Mobile App', 'GPS Integration']}
                techStack={['Salesforce Field Service', 'Mobile SDK', 'Maps']}
                projectStatus="in-review"
                impactSummary="Coordinating maintenance for 200+ miles of trails with real-time volunteer updates."
                size="compact"
                showImage={true}
                imageUrl="https://images.unsplash.com/photo-1551632811-561732d1e306?w=400&q=80"
              />
            </div>
          </div>

          {/* Horizontal Card with Image */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Horizontal Layout with Image</h3>
            <PartnerProjectCard
              nonprofitName="Tech Education Alliance"
              projectTitle="Digital Skills Training Platform"
              skillsUsed={['Learning Management', 'Gamification', 'Progress Tracking', 'Certification']}
              techStack={['Salesforce', 'Experience Cloud', 'Trailhead Integration', 'LMS']}
              projectStatus="completed"
              impactSummary="Comprehensive learning platform serving 1,000+ students with personalized learning paths, skill assessments, and industry certifications. Achieved 85% course completion rate and 70% job placement within 6 months of program completion."
              layout="horizontal"
              size="full"
              showImage={true}
              imageUrl="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
              ctaLabel="View Platform Demo"
              onCtaClick={() => alert('Opening platform demo...')}
            />
          </div>

          {/* Interactive Cards */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Interactive Cards (Clickable)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Cards with click handlers for navigation or modal triggers. Useful for portfolio galleries and project browsers.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <PartnerProjectCard
                nonprofitName="Arts for All Foundation"
                projectTitle="Artist Grant Management System"
                skillsUsed={['Application Processing', 'Review Workflows', 'Payment Processing']}
                techStack={['Salesforce', 'DocuSign', 'Stripe Integration']}
                projectStatus="completed"
                impactSummary="Automated grant application and review process for 500+ artists annually, distributing $2M in funding."
                size="full"
                onCardClick={() => alert('Navigating to project details...')}
              />
              <PartnerProjectCard
                nonprofitName="Senior Support Services"
                projectTitle="Elder Care Coordination Hub"
                skillsUsed={['Case Management', 'Family Portal', 'Service Scheduling']}
                techStack={['Salesforce Health Cloud', 'Experience Cloud', 'Calendar Integration']}
                projectStatus="completed"
                impactSummary="Coordinating care for 800+ seniors with family portals, service scheduling, and health tracking."
                size="full"
                onCardClick={() => alert('Navigating to project details...')}
              />
            </div>
          </div>

          {/* Real-World Portfolio Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Portfolio Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how Partner Project Cards might be used in a learner's portfolio page, combining different variants.
            </p>
            <div className="space-y-6">
              {/* Featured Project */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Star className="h-5 w-5 text-amber-500" />
                  <h4 className="text-slate-900">Featured Project</h4>
                </div>
                <PartnerProjectCard
                  nonprofitName="Regional Food Co-op Network"
                  projectTitle="Farm-to-Table Supply Chain Platform"
                  skillsUsed={['Supply Chain Management', 'Multi-Org Architecture', 'B2B Commerce', 'Analytics']}
                  techStack={['Salesforce', 'B2B Commerce Cloud', 'Einstein Analytics', 'Integration']}
                  projectStatus="completed"
                  impactSummary="Built end-to-end supply chain management system connecting 50+ local farms with 200+ restaurants and retailers. Reduced food waste by 40%, increased farmer income by 30%, and provided real-time inventory tracking. Platform processed $5M in transactions in first year."
                  layout="horizontal"
                  size="full"
                  showImage={true}
                  imageUrl="https://images.unsplash.com/photo-1542838132-92c53300491e?w=600&q=80"
                  ctaLabel="View Full Case Study"
                  onCtaClick={() => alert('Opening featured case study...')}
                />
              </div>

              {/* Additional Projects */}
              <div>
                <h4 className="text-slate-900 mb-3">Additional Projects</h4>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <PartnerProjectCard
                    nonprofitName="Climate Action Network"
                    projectTitle="Carbon Offset Tracking"
                    skillsUsed={['Data Integration', 'API Development', 'Reporting']}
                    techStack={['Salesforce', 'Heroku', 'Custom APIs']}
                    projectStatus="completed"
                    impactSummary="Tracks carbon reduction initiatives across 30+ partner organizations."
                    size="compact"
                    onCardClick={() => alert('Opening project...')}
                  />
                  <PartnerProjectCard
                    nonprofitName="Local Business Alliance"
                    projectTitle="Member Benefits Portal"
                    skillsUsed={['Community Building', 'Self-Service Portal', 'Payments']}
                    techStack={['Salesforce', 'Experience Cloud', 'Payment Gateway']}
                    projectStatus="completed"
                    impactSummary="Self-service portal for 300+ business members to access benefits and resources."
                    size="compact"
                    onCardClick={() => alert('Opening project...')}
                  />
                  <PartnerProjectCard
                    nonprofitName="Mental Health Services"
                    projectTitle="Counseling Appointment System"
                    skillsUsed={['HIPAA Compliance', 'Appointment Scheduling', 'Telehealth']}
                    techStack={['Salesforce Health Cloud', 'Shield', 'Video Integration']}
                    projectStatus="in-progress"
                    impactSummary="Building secure telehealth platform with 500+ appointments per month."
                    size="compact"
                    onCardClick={() => alert('Opening project...')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Required Props (6 Content Fields)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div className="flex items-start gap-2">
                  <Building2 className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">nonprofitName:</strong>
                    <span className="text-slate-600"> string - Organization name (nonprofit or small business)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">projectTitle:</strong>
                    <span className="text-slate-600"> string - Name/title of the project</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Code className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">skillsUsed:</strong>
                    <span className="text-slate-600"> string[] - Skills applied (shown as trail tags)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Cloud className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">techStack:</strong>
                    <span className="text-slate-600"> string[] - Technologies used (shown as platform tags)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">projectStatus:</strong>
                    <span className="text-slate-600"> 'completed' | 'in-progress' | 'in-review'</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <TrendingUp className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">impactSummary:</strong>
                    <span className="text-slate-600"> string - Description of project impact and outcomes</span>
                  </div>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Optional Configuration Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="text-slate-900">layout:</strong>
                  <span className="text-slate-600"> 'vertical' | 'horizontal' (default: 'vertical')</span>
                </div>
                <div>
                  <strong className="text-slate-900">size:</strong>
                  <span className="text-slate-600"> 'compact' | 'full' (default: 'full')</span>
                </div>
                <div>
                  <strong className="text-slate-900">showImage:</strong>
                  <span className="text-slate-600"> boolean - Show optional project image</span>
                </div>
                <div>
                  <strong className="text-slate-900">imageUrl:</strong>
                  <span className="text-slate-600"> string - URL for project image</span>
                </div>
                <div>
                  <strong className="text-slate-900">onCardClick:</strong>
                  <span className="text-slate-600"> {`() => void`} - Makes entire card clickable</span>
                </div>
                <div>
                  <strong className="text-slate-900">onCtaClick:</strong>
                  <span className="text-slate-600"> {`() => void`} - Click handler for CTA button</span>
                </div>
                <div>
                  <strong className="text-slate-900">ctaLabel:</strong>
                  <span className="text-slate-600"> string - Label for CTA button</span>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic HTML structure with proper heading hierarchy (h3 for project title), 
              WCAG AA contrast ratios throughout (emerald-600: 7.2:1, slate-700: 9.2:1, slate-900: 14.9:1), 
              descriptive icon labels (Building2 for organization, Code for skills, TrendingUp for impact), 
              keyboard navigation support with proper focus states and tabIndex, 
              clickable cards have role="button" and keyboard event handlers, 
              status chips use semantic colors with text labels (not icon-only), 
              all images have descriptive alt text using project title.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Use compact vertical cards for portfolio grids (3-4 columns)</li>
                  <li>Use full cards with CTAs for featured projects</li>
                  <li>Use horizontal layout for detailed list views</li>
                  <li>Keep impact summaries concise but specific (metrics help!)</li>
                  <li>Use appropriate status chips (completed, in-progress, in-review)</li>
                  <li>Include real project images when available</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't leave any of the 6 required fields empty</li>
                  <li>Don't use vague skill names ("Problem Solving" → "Workflow Automation")</li>
                  <li>Don't omit impact metrics when available</li>
                  <li>Don't mix card sizes inconsistently in the same section</li>
                  <li>Don't use horizontal layout in narrow containers (&lt; 600px)</li>
                  <li>Don't forget onClick handlers if using as navigation</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag (trail variant)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag (platform variant)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">ChipStatus</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">rounded-lg (8px)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">emerald-600 (primary action)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-50 to slate-900 (neutrals)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">shadow-sm to shadow-md</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Lucide Icons (Building2, Code, TrendingUp)</span>
            </div>
          </div>
        </section>

        {/* Event Session Card Section */}
        <section id="eventsession" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Event / Session Card</h2>
            <p className="text-slate-600">
              Domain component for displaying upcoming and past learning sessions including Trail Talks, study groups, 
              partner Q&A sessions, cohort meetings, and peer-learning events. Shows all five required content fields 
              with state-based CTAs.
            </p>
          </div>

          {/* Upcoming Sessions */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Upcoming Sessions</h3>
            <p className="text-sm text-slate-600 mb-3">
              Sessions scheduled for the future display a "Join Session" CTA. Ideal for event calendars and dashboards.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventSessionCard
                title="Trail Talk: Reporting Best Practices"
                dateTime="Tue, March 11 — 6 PM CT"
                host="Kim Barnes"
                sessionType="trail-talk"
                state="upcoming"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Study Group: Einstein Analytics Deep Dive"
                dateTime="Wed, March 12 — 7 PM CT"
                host="Alex Rivera"
                sessionType="study-group"
                state="upcoming"
                hostAvatar="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&q=80"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Partner Q&A: Nonprofit Salesforce Solutions"
                dateTime="Thu, March 13 — 5:30 PM CT"
                host="Jordan Lee"
                sessionType="partner-qa"
                state="upcoming"
                hostAvatar="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&q=80"
                onCtaClick={() => alert('Joining session...')}
              />
            </div>
          </div>

          {/* Completed Sessions */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Completed Sessions (Recordings Available)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Past sessions display a "View Recording" CTA, allowing learners to access recorded content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventSessionCard
                title="Cohort Session: Career Pathways in Salesforce"
                dateTime="Mon, March 3 — 6 PM CT"
                host="Sam Martinez"
                sessionType="cohort-session"
                state="completed"
                hostAvatar="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&q=80"
                onCtaClick={() => alert('Opening recording...')}
              />
              <EventSessionCard
                title="Workshop: Flow Builder Fundamentals"
                dateTime="Tue, March 4 — 7 PM CT"
                host="Taylor Wong"
                sessionType="workshop"
                state="completed"
                onCtaClick={() => alert('Opening recording...')}
              />
              <EventSessionCard
                title="Trail Talk: Admin Certification Tips"
                dateTime="Wed, March 5 — 6 PM CT"
                host="Casey Johnson"
                sessionType="trail-talk"
                state="completed"
                hostAvatar="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&q=80"
                onCtaClick={() => alert('Opening recording...')}
              />
            </div>
          </div>

          {/* All Session Types */}
          <div className="space-y-3">
            <h3 className="text-slate-700">All Session Types</h3>
            <p className="text-sm text-slate-600 mb-3">
              The component supports five distinct session types, each with appropriate tag styling and metadata.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventSessionCard
                title="Trail Talk: Data Modeling Patterns"
                dateTime="Fri, March 14 — 6 PM CT"
                host="Morgan Davis"
                sessionType="trail-talk"
                state="upcoming"
                hostAvatar="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&q=80"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Study Group: JavaScript for Salesforce Devs"
                dateTime="Sat, March 15 — 10 AM CT"
                host="Riley Chen"
                sessionType="study-group"
                state="upcoming"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Partner Q&A: Small Business CRM Success"
                dateTime="Mon, March 17 — 5 PM CT"
                host="Jamie Patel"
                sessionType="partner-qa"
                state="upcoming"
                hostAvatar="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&q=80"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Cohort Session: Mid-Program Check-in"
                dateTime="Tue, March 18 — 6:30 PM CT"
                host="Avery Thompson"
                sessionType="cohort-session"
                state="upcoming"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Workshop: LWC Component Development"
                dateTime="Wed, March 19 — 7 PM CT"
                host="Drew Anderson"
                sessionType="workshop"
                state="upcoming"
                hostAvatar="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&q=80"
                onCtaClick={() => alert('Joining session...')}
              />
            </div>
          </div>

          {/* Without Host Avatar */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Sessions Without Host Avatars</h3>
            <p className="text-sm text-slate-600 mb-3">
              When no avatar is provided, the component displays a default user icon in an emerald circle.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventSessionCard
                title="Trail Talk: Security & Compliance Basics"
                dateTime="Thu, March 20 — 6 PM CT"
                host="Pat Williams"
                sessionType="trail-talk"
                state="upcoming"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Study Group: Apex Testing Strategies"
                dateTime="Fri, March 21 — 7 PM CT"
                host="Quinn Roberts"
                sessionType="study-group"
                state="upcoming"
                onCtaClick={() => alert('Joining session...')}
              />
              <EventSessionCard
                title="Workshop: Reports & Dashboards Mastery"
                dateTime="Sat, March 22 — 11 AM CT"
                host="Reese Taylor"
                sessionType="workshop"
                state="completed"
                onCtaClick={() => alert('Opening recording...')}
              />
            </div>
          </div>

          {/* Custom CTA Labels */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Custom CTA Labels</h3>
            <p className="text-sm text-slate-600 mb-3">
              Override default CTA labels for specialized use cases or different action contexts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <EventSessionCard
                title="Trail Talk: Career Transition Stories"
                dateTime="Mon, March 24 — 6 PM CT"
                host="Cameron Brooks"
                sessionType="trail-talk"
                state="upcoming"
                ctaLabel="Register Now"
                hostAvatar="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=100&q=80"
                onCtaClick={() => alert('Registering...')}
              />
              <EventSessionCard
                title="Workshop: Advanced Flow Patterns"
                dateTime="Tue, March 25 — 7 PM CT"
                host="Dakota Mills"
                sessionType="workshop"
                state="completed"
                ctaLabel="Watch Now"
                onCtaClick={() => alert('Playing recording...')}
              />
              <EventSessionCard
                title="Cohort Session: Final Project Presentations"
                dateTime="Wed, March 26 — 6 PM CT"
                host="Ellis Parker"
                sessionType="cohort-session"
                state="upcoming"
                ctaLabel="RSVP Required"
                hostAvatar="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=100&q=80"
                onCtaClick={() => alert('RSVP confirmation...')}
              />
            </div>
          </div>

          {/* Real-World Dashboard Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Dashboard Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how Event Session Cards might appear in a learner dashboard showing this week's schedule.
            </p>
            <div className="space-y-4">
              {/* This Week Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-slate-900">This Week's Sessions</h4>
                  <Button variant="ghost" size="small">View All</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <EventSessionCard
                    title="Trail Talk: Salesforce Mobile App Best Practices"
                    dateTime="Today — 6 PM CT"
                    host="Harper Wilson"
                    sessionType="trail-talk"
                    state="upcoming"
                    hostAvatar="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=100&q=80"
                    onCtaClick={() => alert('Joining session...')}
                  />
                  <EventSessionCard
                    title="Study Group: Platform Developer I Prep"
                    dateTime="Tomorrow — 7 PM CT"
                    host="Finley Garcia"
                    sessionType="study-group"
                    state="upcoming"
                    hostAvatar="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&q=80"
                    onCtaClick={() => alert('Joining session...')}
                  />
                  <EventSessionCard
                    title="Partner Q&A: Working with Nonprofits"
                    dateTime="Sat, March 29 — 10 AM CT"
                    host="Skyler Moore"
                    sessionType="partner-qa"
                    state="upcoming"
                    onCtaClick={() => alert('Joining session...')}
                  />
                </div>
              </div>

              {/* Recently Recorded Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-slate-900">Recently Recorded</h4>
                  <Button variant="ghost" size="small">Browse Library</Button>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <EventSessionCard
                    title="Workshop: Integration Patterns & APIs"
                    dateTime="Mon, March 10 — 7 PM CT"
                    host="River Adams"
                    sessionType="workshop"
                    state="completed"
                    hostAvatar="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100&q=80"
                    onCtaClick={() => alert('Opening recording...')}
                  />
                  <EventSessionCard
                    title="Cohort Session: Building Your Portfolio"
                    dateTime="Tue, March 11 — 6:30 PM CT"
                    host="Sage Cooper"
                    sessionType="cohort-session"
                    state="completed"
                    onCtaClick={() => alert('Opening recording...')}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Required Props (5 Content Fields)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">title:</strong>
                    <span className="text-slate-600"> string - Session title (e.g., "Trail Talk: Reporting Best Practices")</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Calendar className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">dateTime:</strong>
                    <span className="text-slate-600"> string - Formatted date and time (e.g., "Tue, March 11 — 6 PM CT")</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">host:</strong>
                    <span className="text-slate-600"> string - Host name (will be prefixed with "Hosted by")</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <Tag className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">sessionType:</strong>
                    <span className="text-slate-600"> 'trail-talk' | 'study-group' | 'partner-qa' | 'cohort-session' | 'workshop'</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">state:</strong>
                    <span className="text-slate-600"> 'upcoming' | 'completed' (default: 'upcoming')</span>
                  </div>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Optional Configuration Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="text-slate-900">hostAvatar:</strong>
                  <span className="text-slate-600"> string - URL for host profile image</span>
                </div>
                <div>
                  <strong className="text-slate-900">onCtaClick:</strong>
                  <span className="text-slate-600"> {`() => void`} - Click handler for CTA button</span>
                </div>
                <div>
                  <strong className="text-slate-900">ctaLabel:</strong>
                  <span className="text-slate-600"> string - Override default CTA label</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Default CTA Behavior:</strong> If no ctaLabel is provided, the component automatically uses 
                  "Join Session" for upcoming sessions and "View Recording" for completed sessions.
                </p>
              </div>
            </div>
          </div>

          {/* Session Type Tag Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Session Type Tags & Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="text-slate-900 mb-3">Session Types</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">trail-talk</span>
                    <Tag variant="trail" label="Trail Talk" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">study-group</span>
                    <Tag variant="topic" label="Study Group" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">partner-qa</span>
                    <Tag variant="platform" label="Partner Q&A" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">cohort-session</span>
                    <Tag variant="default" label="Cohort Session" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">workshop</span>
                    <Tag variant="topic" label="Workshop" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="text-slate-900 mb-3">Usage Context</h4>
                <ul className="space-y-2 text-sm text-slate-700">
                  <li><strong>Trail Talk:</strong> Weekly community sessions on specific topics</li>
                  <li><strong>Study Group:</strong> Collaborative learning and exam prep</li>
                  <li><strong>Partner Q&A:</strong> Sessions with nonprofit/business partners</li>
                  <li><strong>Cohort Session:</strong> Structured program meetings</li>
                  <li><strong>Workshop:</strong> Hands-on skill-building sessions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic HTML structure with proper heading hierarchy (h3 for session title), 
              WCAG AA contrast ratios throughout (emerald-700: 7.2:1, slate-600: 7.5:1, slate-900: 14.9:1), 
              descriptive icon labels (Calendar for date/time, User for host), 
              keyboard navigation support with proper focus states on CTA button, 
              session type uses text labels in tags (not color-only), 
              logical screen reader order (Type → Title → Date/Time → Host → CTA), 
              CTA button includes aria-label for context, 
              host avatar has descriptive alt text using host name.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Use in 2-3 column grids for event calendars</li>
                  <li>Provide host avatars when available for personalization</li>
                  <li>Use descriptive session titles that indicate topic</li>
                  <li>Include timezone in dateTime for clarity</li>
                  <li>Group upcoming and completed sessions separately</li>
                  <li>Implement onCtaClick handlers for all cards</li>
                  <li>Use appropriate session types for context</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't leave any of the 5 required fields empty</li>
                  <li>Don't use generic titles like "Meeting" or "Session"</li>
                  <li>Don't forget to specify timezone in dateTime</li>
                  <li>Don't mix state variants inconsistently</li>
                  <li>Don't use custom session types outside the 5 defined</li>
                  <li>Don't make cards non-interactive (always include CTA)</li>
                  <li>Don't use low-quality or inappropriate host images</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag (all variants)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Button</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">rounded-lg (8px)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">emerald-600 (primary CTA)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">emerald-100 (avatar fallback)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-50 to slate-900 (neutrals)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">shadow-sm (card elevation)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Lucide Icons (Calendar, User, Video, ExternalLink)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">border-t border-slate-200 (CTA divider)</span>
            </div>
          </div>

          {/* Responsive Behavior */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Responsive Behavior</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li>Cards work in 1-3 column grids using flexbox</li>
              <li>Title and host text wrap gracefully for long content</li>
              <li>CTA button remains fixed at bottom using flex-grow spacer</li>
              <li>Minimum card height maintained for grid alignment</li>
              <li>Host avatar scales proportionally at 32px × 32px</li>
              <li>Recommended max-width: none (cards fill container)</li>
            </ul>
          </div>
        </section>

        {/* Roadmap Item Card Section */}
        <section id="roadmap" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Feature Roadmap Card</h2>
            <p className="text-slate-600">
              Domain component representing a single roadmap item within the larger Roadmap Section. 
              Helps learners, nonprofits, donors, and internal staff understand upcoming features, project status, and released items.
            </p>
          </div>

          {/* All Status Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Status Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              The component supports three status states: Planned, In Progress, and Done. Each uses the TTDS ChipStatus component 
              with appropriate styling.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RoadmapItemCard
                featureName="AI Trail Launch"
                description="Introduce an AI-powered learning path that adapts to each learner's pace and prior experience, providing personalized recommendations."
                audiences={['learners']}
                status="planned"
              />
              <RoadmapItemCard
                featureName="Partner Portal Preview"
                description="A dedicated portal where nonprofit and small business partners can track learner progress, post project opportunities, and communicate directly with cohorts."
                audiences={['nonprofits', 'admins']}
                status="in-progress"
              />
              <RoadmapItemCard
                featureName="Learner Dashboard"
                description="Comprehensive dashboard showing progress across all trails, upcoming sessions, certifications earned, and partner projects completed."
                audiences={['learners', 'admins']}
                status="done"
                liveExampleUrl="#"
                onLiveExampleClick={() => alert('Opening live example...')}
              />
            </div>
          </div>

          {/* With Live Example Links */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Released Features (With Live Example)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Features marked as "Done" can include an optional "View Live Example" link that directs users to the shipped feature.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RoadmapItemCard
                featureName="Trail Talk Library"
                description="Searchable library of all recorded Trail Talk sessions with transcripts, tags, and bookmarking capabilities for easy reference."
                audiences={['learners', 'nonprofits', 'donors']}
                status="done"
                liveExampleUrl="#library"
                onLiveExampleClick={() => alert('Navigating to Trail Talk Library...')}
              />
              <RoadmapItemCard
                featureName="Skills & Certifications Panel"
                description="Visual display of earned certifications, in-progress skills, and recommended next steps based on learner goals and industry demand."
                audiences={['learners']}
                status="done"
                liveExampleUrl="#skills"
                liveExampleLabel="See Your Skills"
                onLiveExampleClick={() => alert('Opening skills panel...')}
              />
              <RoadmapItemCard
                featureName="Donor Impact Dashboard"
                description="Real-time dashboard showing how donor contributions translate into learner outcomes, certification completions, and job placements."
                audiences={['donors', 'admins']}
                status="done"
                liveExampleUrl="#impact"
                liveExampleLabel="View Impact"
                onLiveExampleClick={() => alert('Opening impact dashboard...')}
              />
            </div>
          </div>

          {/* Multiple Audiences */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Multi-Audience Features</h3>
            <p className="text-sm text-slate-600 mb-3">
              Features can target multiple audiences. Tags wrap gracefully to accommodate various combinations.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RoadmapItemCard
                featureName="Cohort Collaboration Spaces"
                description="Virtual spaces where cohort members can collaborate on projects, share resources, schedule peer study sessions, and build community."
                audiences={['learners', 'admins']}
                status="planned"
              />
              <RoadmapItemCard
                featureName="Partner Project Matching"
                description="Smart matching algorithm that pairs learners with nonprofit/business projects based on skills, interests, availability, and career goals."
                audiences={['learners', 'nonprofits', 'admins']}
                status="in-progress"
              />
              <RoadmapItemCard
                featureName="Comprehensive Reporting Suite"
                description="Full reporting capabilities for tracking learner outcomes, partner engagement, donor ROI, and program effectiveness with exportable data."
                audiences={['learners', 'nonprofits', 'donors', 'admins']}
                status="planned"
              />
            </div>
          </div>

          {/* Planned Features */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Planned Features (Future Roadmap)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Features in the planning stage help set expectations and gather feedback from stakeholders.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RoadmapItemCard
                featureName="Mobile Learning App"
                description="Native mobile application for iOS and Android allowing learners to access trails, watch sessions, and track progress on the go."
                audiences={['learners']}
                status="planned"
              />
              <RoadmapItemCard
                featureName="Peer Mentorship Program"
                description="Structured mentorship program connecting experienced learners with newcomers for guidance, support, and knowledge sharing."
                audiences={['learners', 'admins']}
                status="planned"
              />
              <RoadmapItemCard
                featureName="Industry Partner Network"
                description="Expanded network of industry partners offering internships, job shadowing, and employment opportunities to program graduates."
                audiences={['learners', 'nonprofits']}
                status="planned"
              />
            </div>
          </div>

          {/* In Progress Features */}
          <div className="space-y-3">
            <h3 className="text-slate-700">In Progress Features (Active Development)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Features currently in development show active work and upcoming releases.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <RoadmapItemCard
                featureName="Advanced Analytics Dashboard"
                description="Deep analytics showing learning patterns, time-to-completion metrics, skill acquisition trends, and predictive success indicators."
                audiences={['admins']}
                status="in-progress"
              />
              <RoadmapItemCard
                featureName="Gamification & Achievements"
                description="Achievement system with badges, leaderboards, and rewards for completing trails, attending sessions, and contributing to the community."
                audiences={['learners']}
                status="in-progress"
              />
              <RoadmapItemCard
                featureName="Resource Library Expansion"
                description="Curated library of articles, videos, code samples, and external resources aligned with trail curricula and learning objectives."
                audiences={['learners', 'admins']}
                status="in-progress"
              />
            </div>
          </div>

          {/* With Description Truncation */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Description Truncation</h3>
            <p className="text-sm text-slate-600 mb-3">
              For denser layouts, enable description truncation to limit text to 3-4 lines using the `truncateDescription` prop.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
              <RoadmapItemCard
                featureName="AI-Powered Resume Builder"
                description="Intelligent resume builder that uses AI to optimize learner resumes based on target roles, highlighting relevant Salesforce skills and partner project experience. Includes templates, keyword optimization, and ATS compatibility checks to maximize job application success rates."
                audiences={['learners']}
                status="planned"
                truncateDescription
              />
              <RoadmapItemCard
                featureName="Real-Time Session Chat"
                description="Live chat functionality during Trail Talks and study sessions enabling real-time Q&A, resource sharing, and community interaction. Features include emoji reactions, code snippet sharing, and moderation tools for session hosts."
                audiences={['learners', 'admins']}
                status="in-progress"
                truncateDescription
              />
              <RoadmapItemCard
                featureName="Certification Exam Prep"
                description="Comprehensive exam preparation tools including practice tests, flashcards, study guides, and performance tracking for all major Salesforce certifications. Adaptive learning identifies weak areas and provides targeted practice questions."
                audiences={['learners']}
                status="done"
                truncateDescription
                liveExampleUrl="#exam-prep"
                onLiveExampleClick={() => alert('Opening exam prep...')}
              />
              <RoadmapItemCard
                featureName="Community Forum"
                description="Dedicated discussion forum where learners can ask questions, share solutions, celebrate wins, and build connections with peers and mentors across all cohorts and learning paths."
                audiences={['learners', 'admins']}
                status="in-progress"
                truncateDescription
              />
            </div>
          </div>

          {/* Real-World Roadmap Section Example */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Roadmap Page Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how Roadmap Item Cards might appear on a public-facing roadmap page with grouped sections.
            </p>
            <div className="space-y-6">
              {/* Released Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-slate-900">Released Features</h4>
                  <ChipStatus status="completed" label="Live" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RoadmapItemCard
                    featureName="Goals & Progress Tracking"
                    description="Visual goal tracking with progress bars, milestone celebrations, and personalized recommendations for next learning steps."
                    audiences={['learners', 'admins']}
                    status="done"
                    liveExampleUrl="#goals"
                    onLiveExampleClick={() => alert('Opening goals panel...')}
                  />
                  <RoadmapItemCard
                    featureName="Partner Project Showcase"
                    description="Portfolio cards highlighting real-world nonprofit and small business projects completed by learners with impact metrics."
                    audiences={['learners', 'nonprofits', 'donors']}
                    status="done"
                    liveExampleUrl="#projects"
                    onLiveExampleClick={() => alert('Opening project showcase...')}
                  />
                  <RoadmapItemCard
                    featureName="Event & Session Calendar"
                    description="Comprehensive calendar of upcoming Trail Talks, study groups, cohort sessions, and partner Q&A events with registration."
                    audiences={['learners']}
                    status="done"
                    liveExampleUrl="#calendar"
                    onLiveExampleClick={() => alert('Opening calendar...')}
                  />
                </div>
              </div>

              {/* In Development Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-slate-900">In Active Development</h4>
                  <ChipStatus status="in-progress" label="Building Now" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <RoadmapItemCard
                    featureName="Slack Integration"
                    description="Native Slack integration bringing notifications, session reminders, and community discussions directly into learner workspaces."
                    audiences={['learners', 'admins']}
                    status="in-progress"
                  />
                  <RoadmapItemCard
                    featureName="Video Transcript Search"
                    description="Full-text search across all session recordings with timestamp links, making it easy to find and jump to specific topics."
                    audiences={['learners']}
                    status="in-progress"
                  />
                </div>
              </div>

              {/* Future Plans Section */}
              <div>
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-slate-900">Future Plans</h4>
                  <ChipStatus status="planned" label="Coming Soon" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <RoadmapItemCard
                    featureName="Career Services Hub"
                    description="Dedicated career services including resume reviews, mock interviews, LinkedIn optimization, and job search strategies."
                    audiences={['learners', 'admins']}
                    status="planned"
                  />
                  <RoadmapItemCard
                    featureName="Alumni Network"
                    description="Network connecting program graduates for continued learning, job referrals, and long-term professional support."
                    audiences={['learners']}
                    status="planned"
                  />
                  <RoadmapItemCard
                    featureName="Custom Learning Paths"
                    description="Ability for learners to create and share custom learning paths combining official trails with community-contributed content."
                    audiences={['learners', 'admins']}
                    status="planned"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Required Props (5 Content Fields)</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">featureName:</strong>
                    <span className="text-slate-600"> string - Short, descriptive feature name</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">description:</strong>
                    <span className="text-slate-600"> string - 1-2 sentence explanation</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">audiences:</strong>
                    <span className="text-slate-600"> Array of 'learners' | 'nonprofits' | 'donors' | 'admins'</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">status:</strong>
                    <span className="text-slate-600"> 'planned' | 'in-progress' | 'done'</span>
                  </div>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Optional Configuration Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="text-slate-900">liveExampleUrl:</strong>
                  <span className="text-slate-600"> string - URL for shipped feature (shown only if provided)</span>
                </div>
                <div>
                  <strong className="text-slate-900">liveExampleLabel:</strong>
                  <span className="text-slate-600"> string - Override default "View Live Example" label</span>
                </div>
                <div>
                  <strong className="text-slate-900">onLiveExampleClick:</strong>
                  <span className="text-slate-600"> {`() => void`} - Click handler for live example link</span>
                </div>
                <div>
                  <strong className="text-slate-900">truncateDescription:</strong>
                  <span className="text-slate-600"> boolean - Limit description to 3-4 lines</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Conditional Rendering:</strong> The "View Live Example" link only appears when `liveExampleUrl` or 
                  `onLiveExampleClick` is provided. This ensures unreleased features don't show broken links.
                </p>
              </div>
            </div>
          </div>

          {/* Audience Tag Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Audience Types & Tag Colors</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="text-slate-900 mb-3">Audience Types</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">learners</span>
                    <Tag variant="trail" label="Learners" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">nonprofits</span>
                    <Tag variant="topic" label="Nonprofits" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">donors</span>
                    <Tag variant="platform" label="Donors" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">admins</span>
                    <Tag variant="default" label="Admins" />
                  </div>
                </div>
              </div>

              <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
                <h4 className="text-slate-900 mb-3">Status Types</h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">planned</span>
                    <ChipStatus status="planned" label="Planned" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">in-progress</span>
                    <ChipStatus status="in-progress" label="In Progress" />
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-slate-700">done</span>
                    <ChipStatus status="completed" label="Done" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic HTML with proper heading hierarchy (h3 for feature name), 
              WCAG AA contrast ratios (emerald-600: 7.2:1, slate-600: 7.5:1, slate-900: 14.9:1), 
              status chips include text labels (not color-only communication), 
              logical screen reader order (Feature Name → Status → Description → Audiences → Link), 
              live example link includes visible focus states with 2px emerald ring, 
              external link icon provides visual affordance, 
              rel="noopener noreferrer" for security when opening new tabs, 
              keyboard navigation fully supported with proper tab order.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Use clear, concise feature names (3-5 words)</li>
                  <li>Keep descriptions to 1-2 sentences maximum</li>
                  <li>Select all relevant audiences for each feature</li>
                  <li>Update status as features progress through development</li>
                  <li>Provide live example links for completed features</li>
                  <li>Use truncation for dense, multi-column layouts</li>
                  <li>Group roadmap items by status in roadmap pages</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't use vague feature names like "Update" or "New Feature"</li>
                  <li>Don't write multi-paragraph descriptions</li>
                  <li>Don't leave audiences array empty</li>
                  <li>Don't show live example links for planned/in-progress features</li>
                  <li>Don't use custom status values outside the three defined</li>
                  <li>Don't forget to update status when features ship</li>
                  <li>Don't mix different layout densities in the same section</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Use Cases</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Vision Page:</strong> Public-facing roadmap showing planned features to attract new learners and partners</li>
              <li><strong>Donor Page:</strong> Demonstrate program growth and how donations fund new capabilities</li>
              <li><strong>Academy Roadmap:</strong> Internal roadmap for staff to track development priorities and releases</li>
              <li><strong>Feature Request Portal:</strong> Display requested features with voting and status tracking</li>
              <li><strong>Release Notes:</strong> Highlight newly shipped features with links to documentation</li>
            </ul>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card (elevation: low)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">ChipStatus (all variants)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag (all variants)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">rounded-lg (8px)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">emerald-600 (link color)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">emerald-500 (focus ring)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-50 to slate-900 (neutrals)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">shadow-sm (card elevation)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">border-t border-slate-200 (link divider)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Lucide Icon (ExternalLink)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">line-clamp-3 (truncation)</span>
            </div>
          </div>

          {/* Responsive Behavior */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Responsive Behavior</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li>Cards work in 1-4 column grids using flexbox</li>
              <li>Feature name and description text wrap gracefully</li>
              <li>Audience tags wrap to multiple lines as needed</li>
              <li>Status chip aligns to top-right, independent of title length</li>
              <li>Live example link appears at bottom with top border divider</li>
              <li>Recommended layouts: 3 columns desktop, 2 columns tablet, 1 column mobile</li>
              <li>Use truncateDescription prop for 4-column dense layouts</li>
            </ul>
          </div>
        </section>

        {/* Learning Activity Card Section */}
        <section id="learningactivity" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Learning Activity Card</h2>
            <p className="text-slate-600">
              Domain component used across the Learning Center to represent activities such as Study Groups, 
              Peer Reviews, and Capstone Projects. Supports filtering, browsing, and scanning workflows.
            </p>
          </div>

          {/* All Activity Types */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Activity Type Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              The component supports three activity types: Study Group, Peer Review, and Capstone Project. 
              Each uses a distinct TTDS Tag variant for clear visual categorization.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LearningActivityCard
                activityType="study-group"
                title="Study Group: Reporting Essentials"
                description="Collaborative session focused on mastering Salesforce reports and dashboards. Learn to create custom reports, build visual dashboards, and use analytics to drive insights."
                tags={['Reporting', 'Dashboards', 'Analytics']}
              />
              <LearningActivityCard
                activityType="peer-review"
                title="Peer Review: Dashboard Submission"
                description="Submit your dashboard project for peer feedback and constructive review. Get actionable insights from fellow learners to improve your work before final submission."
                tags={['Dashboards', 'Peer Learning', 'Feedback']}
              />
              <LearningActivityCard
                activityType="capstone"
                title="Capstone: Nonprofit Lead Intake Flow"
                description="Build a complete lead intake and management system for a nonprofit partner. Demonstrate automation, validation rules, and process builder skills in a real-world scenario."
                tags={['Automation', 'Flows', 'Validation Rules', 'Nonprofit']}
              />
            </div>
          </div>

          {/* Study Groups */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Study Group Activities</h3>
            <p className="text-sm text-slate-600 mb-3">
              Study groups are collaborative learning sessions where learners work together on specific topics or skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LearningActivityCard
                activityType="study-group"
                title="Study Group: Admin Certification Prep"
                description="Weekly study sessions preparing for the Salesforce Administrator certification exam. Cover all exam topics with practice questions and group discussions."
                tags={['Admin Cert', 'Exam Prep', 'Certification']}
              />
              <LearningActivityCard
                activityType="study-group"
                title="Study Group: Apex Fundamentals"
                description="Introduction to Apex programming with hands-on exercises. Perfect for learners transitioning from declarative to programmatic development."
                tags={['Apex', 'Programming', 'Development']}
              />
              <LearningActivityCard
                activityType="study-group"
                title="Study Group: Experience Cloud Basics"
                description="Build your first Experience Cloud site from scratch. Learn templates, branding, navigation, and content management in a collaborative environment."
                tags={['Experience Cloud', 'Communities', 'Sites']}
              />
            </div>
          </div>

          {/* Peer Reviews */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Peer Review Activities</h3>
            <p className="text-sm text-slate-600 mb-3">
              Peer review activities allow learners to submit work for feedback and review from fellow cohort members.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LearningActivityCard
                activityType="peer-review"
                title="Peer Review: Process Builder Workflow"
                description="Share your process builder automation for peer critique. Receive feedback on logic, efficiency, and best practices from experienced learners."
                tags={['Process Builder', 'Automation', 'Best Practices']}
              />
              <LearningActivityCard
                activityType="peer-review"
                title="Peer Review: Data Model Design"
                description="Present your custom object schema and relationships for review. Get insights on normalization, scalability, and design patterns."
                tags={['Data Model', 'Objects', 'Relationships']}
              />
              <LearningActivityCard
                activityType="peer-review"
                title="Peer Review: Lightning Component"
                description="Submit your Lightning Web Component for code review. Receive feedback on component design, JavaScript patterns, and accessibility compliance."
                tags={['LWC', 'JavaScript', 'Components']}
              />
            </div>
          </div>

          {/* Capstone Projects */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Capstone Projects</h3>
            <p className="text-sm text-slate-600 mb-3">
              Capstone projects are comprehensive, real-world implementations demonstrating mastery across multiple skills.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LearningActivityCard
                activityType="capstone"
                title="Capstone: Small Business CRM"
                description="Design and build a complete CRM solution for a small business partner. Include lead management, opportunity tracking, reporting, and email integration."
                tags={['CRM', 'Integration', 'Business Process', 'Reporting']}
              />
              <LearningActivityCard
                activityType="capstone"
                title="Capstone: Volunteer Management System"
                description="Create a volunteer management platform for a nonprofit. Track volunteer hours, skills, assignments, and impact metrics with automated communications."
                tags={['Nonprofit', 'Automation', 'Flows', 'Reporting', 'Email']}
              />
              <LearningActivityCard
                activityType="capstone"
                title="Capstone: Event Registration Portal"
                description="Build a public-facing event registration system using Experience Cloud. Handle registrations, payments, confirmations, and attendee management."
                tags={['Experience Cloud', 'Integration', 'Flows', 'Sites']}
              />
            </div>
          </div>

          {/* With and Without Descriptions */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Description Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Cards can be displayed with or without descriptions depending on layout density and information needs.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">With Description</h4>
                <LearningActivityCard
                  activityType="study-group"
                  title="Study Group: AI Skills for Salesforce"
                  description="Explore how AI is transforming Salesforce with Einstein GPT, predictive analytics, and intelligent automation. Learn practical applications and implementation strategies."
                  tags={['AI Skills', 'Einstein', 'Analytics']}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Without Description</h4>
                <LearningActivityCard
                  activityType="study-group"
                  title="Study Group: AI Skills for Salesforce"
                  tags={['AI Skills', 'Einstein', 'Analytics']}
                />
              </div>
            </div>
          </div>

          {/* Tag Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Tag Variants (Skills, Tools, Categories)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Tags represent skills, tools, or categories. They automatically wrap to multiple rows as needed.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LearningActivityCard
                activityType="study-group"
                title="Quick Workshop: Formula Fields"
                description="30-minute focused session on building effective formula fields for common business scenarios."
                tags={['Formula Fields']}
              />
              <LearningActivityCard
                activityType="peer-review"
                title="Code Review: Trigger Framework"
                description="Advanced peer review of trigger architecture patterns. Discuss bulkification, recursion prevention, and best practices."
                tags={['Apex', 'Triggers', 'Best Practices', 'Architecture']}
              />
              <LearningActivityCard
                activityType="capstone"
                title="Full-Stack Salesforce Project"
                description="End-to-end Salesforce implementation including custom objects, Apex, LWC, integrations, and reporting for a real partner organization."
                tags={['Apex', 'LWC', 'Integration', 'Flows', 'Reports', 'Data Model', 'Experience Cloud', 'Testing']}
              />
            </div>
          </div>

          {/* Mixed Content Showcase */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Mixed Activity Types (Learning Center View)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how different activity types might appear together in a Learning Center browse/filter view.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <LearningActivityCard
                activityType="study-group"
                title="Study Group: Platform App Builder Prep"
                description="Comprehensive preparation for the Platform App Builder certification. Weekly sessions covering declarative development, data modeling, and business logic."
                tags={['App Builder', 'Certification', 'Exam Prep']}
              />
              <LearningActivityCard
                activityType="capstone"
                title="Capstone: Grant Management System"
                description="Build a complete grant tracking and reporting system for a nonprofit partner. Include application workflows, review processes, and impact reporting."
                tags={['Nonprofit', 'Flows', 'Reporting', 'Automation']}
              />
              <LearningActivityCard
                activityType="peer-review"
                title="Peer Review: Security Implementation"
                description="Review security architecture including profiles, permission sets, sharing rules, and field-level security for a multi-org implementation."
                tags={['Security', 'Permissions', 'Sharing']}
              />
              <LearningActivityCard
                activityType="study-group"
                title="Study Group: Integration Patterns"
                description="Learn REST and SOAP APIs, middleware patterns, and integration best practices. Build real integrations with external systems."
                tags={['Integration', 'APIs', 'Middleware']}
              />
              <LearningActivityCard
                activityType="peer-review"
                title="Peer Review: Test Coverage Strategy"
                description="Share your Apex test class design and coverage strategy. Discuss test data factories, assertions, and negative testing approaches."
                tags={['Apex', 'Testing', 'Best Practices']}
              />
              <LearningActivityCard
                activityType="capstone"
                title="Capstone: Multi-Org Integration Hub"
                description="Design and implement an integration hub connecting multiple Salesforce orgs and external systems using MuleSoft or custom middleware."
                tags={['Integration', 'APIs', 'Architecture', 'MuleSoft']}
              />
            </div>
          </div>

          {/* Real-World Learning Center Layout */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Learning Center Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of a complete Learning Center page with filters and categorized activities.
            </p>
            
            {/* Filter Row (Simulation) */}
            <div className="flex flex-wrap gap-2 p-4 bg-slate-50 rounded-lg border border-slate-200 mb-4">
              <span className="text-sm text-slate-700 mr-2">Filter by:</span>
              <Tag variant="default" label="All Activities" />
              <Tag variant="trail" label="Study Groups" />
              <Tag variant="topic" label="Peer Reviews" />
              <Tag variant="platform" label="Capstone Projects" />
            </div>

            {/* Activity Grid */}
            <div className="space-y-6">
              {/* This Week Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="text-slate-900">This Week</h4>
                  <Badge variant="updated" label="6 Activities" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <LearningActivityCard
                    activityType="study-group"
                    title="Study Group: Advanced Flows"
                    description="Master Flow Builder advanced patterns including loops, subflows, and error handling. Build complex automation workflows."
                    tags={['Flows', 'Automation', 'Advanced']}
                  />
                  <LearningActivityCard
                    activityType="study-group"
                    title="Study Group: Reports & Dashboards Deep Dive"
                    description="Advanced reporting techniques including cross-object formulas, bucketing, and dynamic dashboards with multiple subscriptions."
                    tags={['Reporting', 'Dashboards', 'Analytics']}
                  />
                  <LearningActivityCard
                    activityType="peer-review"
                    title="Peer Review: Validation Rules & Formulas"
                    description="Submit your validation rule logic and formula fields for expert review. Learn optimization techniques and edge case handling."
                    tags={['Validation', 'Formulas', 'Data Quality']}
                  />
                </div>
              </div>

              {/* Upcoming Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="text-slate-900">Coming Soon</h4>
                  <Badge variant="new" label="4 Activities" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <LearningActivityCard
                    activityType="capstone"
                    title="Capstone: Member Management Portal"
                    description="Build a member-facing portal using Experience Cloud. Include self-service features, document access, and communication tools."
                    tags={['Experience Cloud', 'Self-Service', 'Sites']}
                  />
                  <LearningActivityCard
                    activityType="study-group"
                    title="Study Group: Lightning Web Components"
                    description="Introduction to LWC development with hands-on component building. Learn lifecycle hooks, component communication, and wire service."
                    tags={['LWC', 'JavaScript', 'Development']}
                  />
                  <LearningActivityCard
                    activityType="peer-review"
                    title="Peer Review: Flow Design Patterns"
                    description="Review your flow architecture for efficiency, maintainability, and scalability. Get feedback from automation experts."
                    tags={['Flows', 'Design Patterns', 'Best Practices']}
                  />
                </div>
              </div>

              {/* Open Projects Section */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="text-slate-900">Open Capstone Projects</h4>
                  <Badge variant="new" label="Available" />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  <LearningActivityCard
                    activityType="capstone"
                    title="Capstone: Donation Management for Wildlife Conservancy"
                    description="Build a comprehensive donation tracking system with recurring gifts, tribute donations, and donor impact reporting."
                    tags={['Nonprofit', 'Payments', 'Reporting', 'Automation']}
                  />
                  <LearningActivityCard
                    activityType="capstone"
                    title="Capstone: Case Management for Youth Services"
                    description="Create a case management solution for a youth services nonprofit. Track services, outcomes, and reporting for funding agencies."
                    tags={['Nonprofit', 'Case Management', 'Reporting', 'Compliance']}
                  />
                </div>
              </div>
            </div>

            {/* Pagination */}
            <div className="mt-6">
              <Pagination
                currentPage={1}
                totalPages={5}
                onPageChange={(page) => console.log('Page:', page)}
              />
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Required Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">activityType:</strong>
                    <span className="text-slate-600"> 'study-group' | 'peer-review' | 'capstone'</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">title:</strong>
                    <span className="text-slate-600"> string - Most prominent text in card</span>
                  </div>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Optional Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="text-slate-900">description:</strong>
                  <span className="text-slate-600"> string - 1-2 sentence summary (auto-truncated)</span>
                </div>
                <div>
                  <strong className="text-slate-900">tags:</strong>
                  <span className="text-slate-600"> string[] - Skills, tools, or categories (wrap-enabled)</span>
                </div>
                <div>
                  <strong className="text-slate-900">truncateDescription:</strong>
                  <span className="text-slate-600"> boolean - Force 3-line truncation (default: true)</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Future-Ready Structure:</strong> The component is designed to accommodate future metadata 
                  such as duration, facilitator, and progress indicators without breaking existing layouts.
                </p>
              </div>
            </div>
          </div>

          {/* Activity Type Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Activity Types & Tag Colors</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Activity Type Mapping</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">study-group</span>
                  <Tag variant="trail" label="Study Group" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">peer-review</span>
                  <Tag variant="topic" label="Peer Review" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">capstone</span>
                  <Tag variant="platform" label="Capstone Project" />
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic HTML with proper heading hierarchy (h3 for title), 
              WCAG AA contrast ratios on all text and tag combinations, 
              activity type tags include text labels (no color-only meaning), 
              logical screen reader order (Activity Type → Title → Description → Tags), 
              tags are individually focusable for keyboard navigation, 
              title remains readable at small card sizes (minimum 14px), 
              sufficient color contrast maintained in both light and dark modes, 
              no reliance on color alone for information (each activity type has a distinct label).
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Use clear, descriptive titles (5-10 words)</li>
                  <li>Keep descriptions to 1-2 sentences maximum</li>
                  <li>Include 2-6 relevant skill/tool tags per activity</li>
                  <li>Choose the most accurate activity type</li>
                  <li>Use truncation for consistent grid layouts</li>
                  <li>Group similar activities in sections</li>
                  <li>Provide filtering options in Learning Center views</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't use vague titles like "Group Session" or "Project"</li>
                  <li>Don't write multi-paragraph descriptions</li>
                  <li>Don't overload with 10+ tags (reduces scannability)</li>
                  <li>Don't use activity types interchangeably</li>
                  <li>Don't omit descriptions when context is needed</li>
                  <li>Don't mix truncated and non-truncated in same grid</li>
                  <li>Don't forget to update tags as skills evolve</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Use Cases</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Learning Center:</strong> Primary browsing interface for discovering and enrolling in activities</li>
              <li><strong>Dashboard:</strong> Show upcoming or recommended activities based on learner progress</li>
              <li><strong>Cohort Pages:</strong> Display activities specific to a cohort or learning path</li>
              <li><strong>Partner Pages:</strong> Showcase available capstone projects from specific partners</li>
              <li><strong>Activity Search:</strong> Support filtering by activity type, skills, or tools</li>
            </ul>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card (elevation: low, padding: normal)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag (all variants)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">gap-2, gap-3 (8px, 12px spacing)</span>
              <span className="px-3 py-1 bg-emerald-100 text-emerald-700 rounded">rounded-lg (8px radius)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-50 to slate-900 (neutrals)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">h-full (card fills container height)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">flex-col (vertical layout)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">line-clamp-3 (description truncation)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">flex-wrap (tag wrapping)</span>
            </div>
          </div>

          {/* Responsive Behavior */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Responsive Behavior</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li>Cards work in 1-3 column grids (recommended: 3 desktop, 2 tablet, 1 mobile)</li>
              <li>Title text wraps gracefully for long activity names</li>
              <li>Description auto-truncates at 3 lines by default</li>
              <li>Tags wrap to multiple rows as needed (flex-wrap)</li>
              <li>Activity type tag remains visible at all breakpoints</li>
              <li>Cards maintain consistent height in grid using h-full</li>
              <li>Minimum card width: 280px for optimal readability</li>
            </ul>
          </div>
        </section>

        {/* Assignment Card Section */}
        <section id="assignment" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Assignment Card</h2>
            <p className="text-slate-600">
              Higher-detail domain component used across Guided Trails and Dashboard for coach-guided learning tasks. 
              Contains more detail than simple activity cards, including resources, submission activity, and evaluation.
            </p>
          </div>

          {/* All Submission Status Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Submission Status Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              The component supports five submission states: Not Started, In Progress, Submitted, Returned, and Completed. 
              Each uses a distinct ChipStatus variant for clear visual feedback.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AssignmentCard
                title="Build a Custom Report Dashboard"
                description="Create a comprehensive dashboard with at least 5 custom reports covering lead conversion, opportunity pipeline, and case resolution metrics. Include filters for date ranges and user-specific views."
                coachName="Sarah Martinez"
                submissionStatus="not-started"
                resources={[
                  { type: 'file', label: 'Dashboard Requirements.pdf' },
                  { type: 'link', label: 'Report Builder Guide' },
                  { type: 'requirement', label: 'Rubric' }
                ]}
              />
              <AssignmentCard
                title="Implement Validation Rules"
                description="Design and implement data validation rules for the Lead and Opportunity objects. Ensure proper error messages, field dependencies, and business logic enforcement. Test all edge cases thoroughly."
                coachName="Michael Chen"
                submissionStatus="in-progress"
                resources={[
                  { type: 'file', label: 'Validation Scenarios.xlsx' },
                  { type: 'link', label: 'Formula Field Reference' }
                ]}
              />
              <AssignmentCard
                title="Create Automated Email Flow"
                description="Build a Flow that automatically sends personalized welcome emails to new contacts, including account information and next steps. Must handle bulk imports and include proper error handling."
                coachName="Sarah Martinez"
                submissionStatus="submitted"
                resources={[
                  { type: 'file', label: 'Email Templates.docx' },
                  { type: 'link', label: 'Flow Best Practices' },
                  { type: 'requirement', label: 'Testing Checklist' }
                ]}
              />
              <AssignmentCard
                title="Design Custom Object Schema"
                description="Create a custom object data model for a nonprofit volunteer management system. Include relationships, field types, page layouts, and security settings. Document all design decisions."
                coachName="Jennifer Lee"
                submissionStatus="returned"
                resources={[
                  { type: 'file', label: 'Schema Template.pdf' },
                  { type: 'link', label: 'ERD Tool' }
                ]}
                rubricGrade="Needs Revision"
              />
              <AssignmentCard
                title="Build Lightning Web Component"
                description="Develop a Lightning Web Component that displays related records with search, filter, and pagination capabilities. Must follow accessibility guidelines and include comprehensive test coverage."
                coachName="Michael Chen"
                submissionStatus="completed"
                resources={[
                  { type: 'file', label: 'Component Specs.pdf' },
                  { type: 'link', label: 'LWC Documentation' },
                  { type: 'requirement', label: 'Accessibility Checklist' }
                ]}
                rubricGrade="95/100"
              />
            </div>
          </div>

          {/* Not Started State Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Not Started Assignments</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments that have been assigned but the learner has not yet begun work.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AssignmentCard
                title="Security & Sharing Architecture"
                description="Design and implement a comprehensive security model including profiles, permission sets, role hierarchy, and sharing rules for a multi-department organization. Document security requirements and test access scenarios."
                coachName="David Thompson"
                submissionStatus="not-started"
                resources={[
                  { type: 'file', label: 'Security Requirements.pdf' },
                  { type: 'link', label: 'Sharing Rules Guide' },
                  { type: 'requirement', label: 'Test Scenarios' }
                ]}
              />
              <AssignmentCard
                title="Integration with External API"
                description="Build a REST API integration that syncs data between Salesforce and an external system. Include authentication, error handling, and scheduling. Must handle large data volumes efficiently."
                coachName="Sarah Martinez"
                submissionStatus="not-started"
                resources={[
                  { type: 'file', label: 'API Documentation.pdf' },
                  { type: 'link', label: 'Integration Patterns' }
                ]}
              />
            </div>
          </div>

          {/* In Progress State Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">In Progress Assignments</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments where the learner has started work but has not yet submitted.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AssignmentCard
                title="Process Automation Project"
                description="Analyze a business process and create automation using Process Builder or Flow. Must include decision logic, field updates, and record creation. Document the before and after process flows with clear business justification."
                coachName="Jennifer Lee"
                submissionStatus="in-progress"
                resources={[
                  { type: 'file', label: 'Process Map Template.pdf' },
                  { type: 'link', label: 'Automation Tool Selector' },
                  { type: 'requirement', label: 'Documentation Guidelines' }
                ]}
              />
              <AssignmentCard
                title="Experience Cloud Site Build"
                description="Create a public-facing Experience Cloud site for a nonprofit partner. Include custom branding, navigation, content pages, and self-service features. Must be mobile-responsive and accessible."
                coachName="Michael Chen"
                submissionStatus="in-progress"
                resources={[
                  { type: 'file', label: 'Site Design Mockups.pdf' },
                  { type: 'link', label: 'Experience Cloud Templates' },
                  { type: 'link', label: 'Branding Guidelines' }
                ]}
              />
            </div>
          </div>

          {/* Submitted State Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Submitted Assignments</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments submitted by the learner and awaiting coach review.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AssignmentCard
                title="Apex Trigger Development"
                description="Write Apex triggers to enforce complex business logic on Account and Opportunity objects. Must follow best practices including bulkification, recursion prevention, and proper exception handling. Include comprehensive test classes with 90%+ coverage."
                coachName="David Thompson"
                submissionStatus="submitted"
                resources={[
                  { type: 'file', label: 'Trigger Requirements.pdf' },
                  { type: 'link', label: 'Apex Best Practices' },
                  { type: 'requirement', label: 'Test Coverage Requirements' }
                ]}
              />
              <AssignmentCard
                title="Advanced Reporting Project"
                description="Build a suite of advanced reports using custom report types, cross-object formulas, and matrix reporting. Create a dashboard that tells a complete business story. Include documentation explaining report logic and intended audience."
                coachName="Sarah Martinez"
                submissionStatus="submitted"
                resources={[
                  { type: 'file', label: 'Report Requirements.xlsx' },
                  { type: 'link', label: 'Dashboard Design Guide' }
                ]}
              />
            </div>
          </div>

          {/* Returned State Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Returned Assignments (Needs Revision)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments returned by the coach with feedback requiring revision before final submission.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AssignmentCard
                title="Data Migration Plan"
                description="Create a detailed data migration plan for moving legacy CRM data into Salesforce. Include data mapping, transformation rules, validation strategy, and rollback procedures. Must address data quality and deduplication."
                coachName="Jennifer Lee"
                submissionStatus="returned"
                resources={[
                  { type: 'file', label: 'Migration Template.xlsx' },
                  { type: 'link', label: 'Data Loader Guide' },
                  { type: 'requirement', label: 'Quality Checklist' }
                ]}
                rubricGrade="Needs Work"
              />
              <AssignmentCard
                title="Formula Field Challenge"
                description="Create a set of formula fields that calculate various business metrics including conversion rates, days in stage, and weighted pipeline values. Formulas must handle null values and edge cases gracefully."
                coachName="Michael Chen"
                submissionStatus="returned"
                resources={[
                  { type: 'file', label: 'Formula Scenarios.docx' },
                  { type: 'link', label: 'Formula Function Reference' }
                ]}
                rubricGrade="See Feedback"
              />
            </div>
          </div>

          {/* Completed State Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Completed Assignments</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments that have been reviewed, graded, and marked complete by the coach.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <AssignmentCard
                title="Nonprofit CRM Configuration"
                description="Configure Salesforce for a small nonprofit including custom objects for programs, volunteers, and donations. Set up automation for donor communications and impact reporting. Provide training documentation for staff."
                coachName="Sarah Martinez"
                submissionStatus="completed"
                resources={[
                  { type: 'file', label: 'Nonprofit Requirements.pdf' },
                  { type: 'link', label: 'NPSP Documentation' },
                  { type: 'requirement', label: 'Training Materials Template' }
                ]}
                rubricGrade="98/100"
              />
              <AssignmentCard
                title="Multi-Object Flow Builder"
                description="Design and build a complex Flow that spans multiple objects, includes subflows, loops, and decision elements. Must demonstrate error handling and efficiency with large data volumes. Document the flow logic and use cases."
                coachName="David Thompson"
                submissionStatus="completed"
                resources={[
                  { type: 'file', label: 'Flow Specifications.pdf' },
                  { type: 'link', label: 'Flow Performance Tips' }
                ]}
                rubricGrade="A+"
              />
            </div>
          </div>

          {/* Resource Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Resource Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments can have no resources, a single resource, or multiple resources that wrap to multiple rows.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AssignmentCard
                title="Reflection Essay"
                description="Write a 500-word reflection on your learning journey so far. Discuss challenges overcome, skills gained, and how you plan to apply what you've learned in your career. Be specific and provide examples."
                coachName="Jennifer Lee"
                submissionStatus="not-started"
              />
              <AssignmentCard
                title="Quick Configuration Task"
                description="Configure page layouts and compact layouts for the Contact object to improve user experience. Ensure required fields are prominent and related lists are ordered logically."
                coachName="Michael Chen"
                submissionStatus="in-progress"
                resources={[
                  { type: 'link', label: 'Page Layout Best Practices' }
                ]}
              />
              <AssignmentCard
                title="Comprehensive Capstone Project"
                description="Build a complete Salesforce solution for a partner organization including custom objects, automation, reports, dashboards, security, and integration. This is your final project demonstrating all skills learned throughout the program."
                coachName="Sarah Martinez"
                submissionStatus="in-progress"
                resources={[
                  { type: 'file', label: 'Project Requirements.pdf' },
                  { type: 'file', label: 'Technical Specifications.docx' },
                  { type: 'link', label: 'Architecture Guidelines' },
                  { type: 'link', label: 'Code Review Checklist' },
                  { type: 'requirement', label: 'Rubric (100 points)' },
                  { type: 'requirement', label: 'Submission Instructions' }
                ]}
              />
            </div>
          </div>

          {/* With and Without Titles */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Title Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Assignments can optionally include a title. When no title is provided, the description becomes the primary content.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">With Title</h4>
                <AssignmentCard
                  title="Deployment & Change Management"
                  description="Learn and demonstrate proper deployment practices using change sets or CLI tools. Deploy a package of components from sandbox to production, documenting each step and including rollback procedures."
                  coachName="David Thompson"
                  submissionStatus="not-started"
                  resources={[
                    { type: 'file', label: 'Deployment Guide.pdf' },
                    { type: 'link', label: 'CLI Documentation' }
                  ]}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Without Title</h4>
                <AssignmentCard
                  description="Learn and demonstrate proper deployment practices using change sets or CLI tools. Deploy a package of components from sandbox to production, documenting each step and including rollback procedures."
                  coachName="David Thompson"
                  submissionStatus="not-started"
                  resources={[
                    { type: 'file', label: 'Deployment Guide.pdf' },
                    { type: 'link', label: 'CLI Documentation' }
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Rubric/Grade Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Rubric & Grade Indicator</h3>
            <p className="text-sm text-slate-600 mb-3">
              Completed or returned assignments can optionally display grade or feedback indicators.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <AssignmentCard
                title="Test Class Development"
                description="Write comprehensive Apex test classes for existing triggers and classes. Achieve 90%+ code coverage while testing both positive and negative scenarios. Use test data factories and proper assertions."
                coachName="David Thompson"
                submissionStatus="completed"
                resources={[
                  { type: 'link', label: 'Testing Best Practices' }
                ]}
                rubricGrade="92/100"
              />
              <AssignmentCard
                title="User Training Session"
                description="Prepare and deliver a 30-minute training session on a Salesforce feature to your cohort. Include hands-on exercises and Q&A. Submit your slides and exercise materials."
                coachName="Jennifer Lee"
                submissionStatus="completed"
                resources={[
                  { type: 'file', label: 'Training Template.pptx' }
                ]}
                rubricGrade="A"
              />
              <AssignmentCard
                title="Code Review Exercise"
                description="Review a peer's Apex code and provide constructive feedback on code quality, efficiency, and best practices. Submit a written review with specific suggestions for improvement."
                coachName="Michael Chen"
                submissionStatus="completed"
                resources={[
                  { type: 'requirement', label: 'Review Rubric' }
                ]}
                rubricGrade="Pass"
              />
            </div>
          </div>

          {/* Guided Trail Context */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Guided Trail Context</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how Assignment Cards appear in a Guided Trail learning sequence.
            </p>
            <div className="space-y-4">
              <div className="p-4 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-3">
                  <Compass className="h-5 w-5 text-emerald-700" />
                  <h4 className="text-emerald-900">Trail: Salesforce Administration Fundamentals</h4>
                </div>
                <p className="text-sm text-emerald-800 mb-4">Complete these assignments to master core admin skills</p>
                <div className="space-y-3">
                  <AssignmentCard
                    title="Assignment 1: User Management Setup"
                    description="Create users, profiles, and permission sets for a fictional company. Demonstrate understanding of the user management hierarchy and security best practices."
                    coachName="Sarah Martinez"
                    submissionStatus="completed"
                    resources={[
                      { type: 'file', label: 'Company Org Chart.pdf' }
                    ]}
                    rubricGrade="95/100"
                  />
                  <AssignmentCard
                    title="Assignment 2: Custom Objects & Fields"
                    description="Design and build custom objects with appropriate field types, relationships, and validation rules. Consider data integrity and user experience in your design."
                    coachName="Sarah Martinez"
                    submissionStatus="completed"
                    resources={[
                      { type: 'file', label: 'Data Requirements.xlsx' },
                      { type: 'link', label: 'Field Type Selector' }
                    ]}
                    rubricGrade="88/100"
                  />
                  <AssignmentCard
                    title="Assignment 3: Report & Dashboard Creation"
                    description="Build reports and dashboards that provide insights into sales performance, case resolution, and user adoption. Use appropriate chart types and filters."
                    coachName="Sarah Martinez"
                    submissionStatus="in-progress"
                    resources={[
                      { type: 'file', label: 'Business Metrics.pdf' },
                      { type: 'link', label: 'Dashboard Design Guide' }
                    ]}
                  />
                  <AssignmentCard
                    title="Assignment 4: Automation Basics"
                    description="Create workflow rules or flows to automate common business processes. Include field updates, email alerts, and task creation. Test thoroughly."
                    coachName="Sarah Martinez"
                    submissionStatus="not-started"
                    resources={[
                      { type: 'file', label: 'Process Requirements.docx' },
                      { type: 'link', label: 'Automation Decision Tree' }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Dashboard Context */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Dashboard Context</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of how Assignment Cards appear in a learner dashboard showing upcoming and overdue assignments.
            </p>
            <div className="space-y-4">
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="text-slate-900">Due This Week</h4>
                  <Badge variant="updated" label="3 Assignments" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <AssignmentCard
                    title="Weekly Reflection"
                    description="Submit your weekly learning reflection covering key concepts studied, challenges faced, and goals for next week. Be specific and thoughtful."
                    coachName="Jennifer Lee"
                    submissionStatus="not-started"
                  />
                  <AssignmentCard
                    title="Peer Code Review"
                    description="Review assigned peer's Flow implementation and provide constructive feedback. Focus on logic, efficiency, and best practices."
                    coachName="Michael Chen"
                    submissionStatus="not-started"
                    resources={[
                      { type: 'link', label: 'Review Guidelines' }
                    ]}
                  />
                </div>
              </div>
              
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <h4 className="text-slate-900">Awaiting Grade</h4>
                  <Badge variant="new" label="2 Submitted" />
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                  <AssignmentCard
                    title="Formula Field Exercise"
                    description="Create formula fields that calculate business metrics including win rate, average deal size, and days to close. Handle edge cases and null values appropriately."
                    coachName="David Thompson"
                    submissionStatus="submitted"
                    resources={[
                      { type: 'file', label: 'Requirements.pdf' }
                    ]}
                  />
                  <AssignmentCard
                    title="Security Model Design"
                    description="Design a security architecture for a multi-department organization. Include org-wide defaults, role hierarchy, sharing rules, and permission sets."
                    coachName="Sarah Martinez"
                    submissionStatus="submitted"
                    resources={[
                      { type: 'file', label: 'Org Structure.pdf' },
                      { type: 'requirement', label: 'Security Checklist' }
                    ]}
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Required Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm mb-4">
                <div className="flex items-start gap-2">
                  <FileText className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">description:</strong>
                    <span className="text-slate-600"> string - Longer description of the assignment (3-4 line truncation)</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <User className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">coachName:</strong>
                    <span className="text-slate-600"> string - Who assigned the task</span>
                  </div>
                </div>
                <div className="flex items-start gap-2">
                  <CheckCircle className="h-4 w-4 text-slate-500 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-slate-900">submissionStatus:</strong>
                    <span className="text-slate-600"> 'not-started' | 'in-progress' | 'submitted' | 'returned' | 'completed'</span>
                  </div>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Optional Props</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                <div>
                  <strong className="text-slate-900">title:</strong>
                  <span className="text-slate-600"> string - Optional assignment title</span>
                </div>
                <div>
                  <strong className="text-slate-900">resources:</strong>
                  <span className="text-slate-600"> AssignmentResource[] - Files, links, or requirements</span>
                </div>
                <div>
                  <strong className="text-slate-900">rubricGrade:</strong>
                  <span className="text-slate-600"> string - Grade or feedback indicator</span>
                </div>
                <div>
                  <strong className="text-slate-900">truncateDescription:</strong>
                  <span className="text-slate-600"> boolean - Force 4-line truncation (default: true)</span>
                </div>
                <div>
                  <strong className="text-slate-900">onResourceClick:</strong>
                  <span className="text-slate-600"> (resource) =&gt; void - Resource click handler</span>
                </div>
              </div>

              <div className="mt-4 p-3 bg-blue-50 rounded border border-blue-200">
                <p className="text-sm text-blue-900">
                  <strong>Resource Type:</strong> AssignmentResource interface includes type ('file' | 'link' | 'requirement'), 
                  label (display name), and optional url (for links).
                </p>
              </div>
            </div>
          </div>

          {/* Submission Status Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Submission Status Mapping</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Status to ChipStatus Mapping</h4>
              <div className="space-y-2 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">not-started</span>
                  <ChipStatus status="notStarted" label="Not Started" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">in-progress</span>
                  <ChipStatus status="inProgress" label="In Progress" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">submitted</span>
                  <ChipStatus status="submitted" label="Submitted" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">returned</span>
                  <ChipStatus status="returned" label="Returned" />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-slate-700">completed</span>
                  <ChipStatus status="completed" label="Completed" />
                </div>
              </div>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic HTML with proper heading hierarchy (h3 for title, h4 for resource section header), 
              WCAG AA contrast ratios on all text and status indicators, 
              submission status includes color and text label (no color-only meaning), 
              coach name prefixed with "Coach:" for screen reader context, 
              resource buttons are keyboard accessible with focus states, 
              resource icons provide visual reinforcement of type, 
              rubric grade displayed as text tag (not color-dependent), 
              logical reading order (Title → Description → Resources → Coach → Status → Grade), 
              sufficient color contrast maintained in all status states.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Provide clear, specific descriptions (2-4 sentences)</li>
                  <li>Include relevant resources that learners need</li>
                  <li>Update submission status as learners progress</li>
                  <li>Use descriptive resource labels (not "File 1", "Link")</li>
                  <li>Provide rubric/grade for completed assignments</li>
                  <li>Keep resource count reasonable (1-6 items)</li>
                  <li>Use truncation for consistent layouts</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't write vague descriptions like "Complete the task"</li>
                  <li>Don't overload with 10+ resource attachments</li>
                  <li>Don't forget to update status after submission</li>
                  <li>Don't use generic resource names without context</li>
                  <li>Don't show grades on not-started assignments</li>
                  <li>Don't omit coach name (required context)</li>
                  <li>Don't mix truncated and non-truncated in same view</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Use Cases</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Guided Trails:</strong> Display sequential assignments within a learning path or trail</li>
              <li><strong>Learner Dashboard:</strong> Show upcoming, in-progress, and recently completed assignments</li>
              <li><strong>Coach Dashboard:</strong> Display assignments awaiting review or grading</li>
              <li><strong>Learning Center:</strong> Browse available assignments for a cohort or program</li>
              <li><strong>Assignment Detail Preview:</strong> Quick overview before navigating to full detail page</li>
              <li><strong>Progress Tracking:</strong> Visual timeline of assignment completion in a trail</li>
            </ul>
          </div>

          {/* Comparison with Learning Activity Card */}
          <div className="p-4 bg-violet-50 border border-violet-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Assignment Card vs. Learning Activity Card</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <h5 className="text-violet-900 mb-2">Assignment Card (TTA-132)</h5>
                <ul className="text-violet-800 space-y-1 ml-5 list-disc">
                  <li>Higher detail, coach-guided tasks</li>
                  <li>Individual work with submission workflow</li>
                  <li>Resources, coach name, submission status</li>
                  <li>Grading and evaluation included</li>
                  <li>Used in Guided Trails and Dashboard</li>
                  <li>Focus: completion and evaluation</li>
                </ul>
              </div>
              <div>
                <h5 className="text-emerald-900 mb-2">Learning Activity Card (TTA-133)</h5>
                <ul className="text-emerald-800 space-y-1 ml-5 list-disc">
                  <li>Lighter, browsable activities</li>
                  <li>Group activities (study groups, peer review, capstone)</li>
                  <li>Activity type tag, title, description, skills tags</li>
                  <li>No submission or grading workflow</li>
                  <li>Used primarily in Learning Center</li>
                  <li>Focus: discovery and enrollment</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Card (elevation: low, padding: normal)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">ChipStatus (all variants)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tag (default variant for grade)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">gap-2, gap-3, gap-4 (8px, 12px, 16px spacing)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">rounded-md, rounded-lg (6px, 8px radius)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-50 to slate-900 (neutrals)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">User, FileText, Link, Download icons</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">h-full (card fills container height)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">flex-col (vertical layout)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">line-clamp-4 (description truncation)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">flex-wrap (resource wrapping)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">border-t (divider above coach section)</span>
            </div>
          </div>

          {/* Responsive Behavior */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Responsive Behavior</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li>Cards work in both list view (1 column) and grid view (2-3 columns)</li>
              <li>Title and description text wrap gracefully</li>
              <li>Description auto-truncates at 4 lines by default for consistent card heights</li>
              <li>Resources wrap to multiple rows as needed</li>
              <li>Coach name and status stack vertically on narrow cards</li>
              <li>Cards maintain consistent height in grid using h-full</li>
              <li>Recommended: 2 columns on tablet, 1 column on mobile for optimal readability</li>
              <li>Minimum card width: 320px to accommodate resource buttons</li>
            </ul>
          </div>
        </section>

        {/* Penny Insight Rail Section */}
        <section id="penny" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Penny Insight Rail</h2>
            <p className="text-slate-600">
              Right-rail dashboard component that displays short AI-generated insights from Penny (the AI assistant), 
              with context about why the insight is shown and an actionable CTA for the learner.
            </p>
          </div>

          {/* All CTA Type Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">CTA Type Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              The component supports three CTA types: View Suggestions, Quick Quiz, and AI Trail Recommendations. 
              Each provides a specific action based on the AI insight.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PennyInsightRail
                aiCoachingNote="You're making great progress on validation rules! Consider exploring formula fields next to build on that momentum."
                contextLine="Based on your last 3 missions"
                ctaType="view-suggestions"
              />
              <PennyInsightRail
                aiCoachingNote="Ready to test your knowledge on Flow Builder? You've completed all the prerequisites and seem confident with the material."
                contextLine="Because your last assignment was submitted"
                ctaType="quick-quiz"
              />
              <PennyInsightRail
                aiCoachingNote="Based on your interests in automation and your strong performance with Process Builder, I've found some trails you might enjoy."
                contextLine="Based on your recent activity"
                ctaType="ai-trail-recommendations"
              />
            </div>
          </div>

          {/* Full Density Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Full Density Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Default layout with standard padding (24px) and spacing (16px between sections) for comfortable readability.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <PennyInsightRail
                aiCoachingNote="Your dashboard reports are looking sharp! Have you thought about adding drill-down capabilities for deeper insights?"
                contextLine="Based on your recent project work"
                ctaType="view-suggestions"
                density="full"
              />
              <PennyInsightRail
                aiCoachingNote="You've mastered the basics of security models. Time to level up with advanced sharing rules and territory management."
                contextLine="After completing 5 security assignments"
                ctaType="ai-trail-recommendations"
                density="full"
              />
            </div>
          </div>

          {/* Compact Density Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Compact Density Layout</h3>
            <p className="text-sm text-slate-600 mb-3">
              Compact layout with reduced padding (16px) and spacing (12px) for tighter dashboard layouts or when vertical space is limited.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <PennyInsightRail
                aiCoachingNote="Quick check: Can you explain the difference between a trigger and a flow in under 30 seconds?"
                contextLine="Based on your recent study topics"
                ctaType="quick-quiz"
                density="compact"
              />
              <PennyInsightRail
                aiCoachingNote="Your peer review skills are excellent! Consider volunteering as a code reviewer for newer learners."
                contextLine="After completing 8 peer reviews"
                ctaType="view-suggestions"
                density="compact"
              />
            </div>
          </div>

          {/* With and Without Penny Label */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Penny Label Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              The component can optionally display "Insight from Penny" with a sparkle icon at the top. 
              When the label is hidden, the insight becomes the primary visual element.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">With Penny Label</h4>
                <PennyInsightRail
                  aiCoachingNote="You're showing strong aptitude for data modeling. Have you considered specializing in database architecture?"
                  contextLine="Based on your assignment scores"
                  ctaType="ai-trail-recommendations"
                  showPennyLabel={true}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Without Penny Label</h4>
                <PennyInsightRail
                  aiCoachingNote="You're showing strong aptitude for data modeling. Have you considered specializing in database architecture?"
                  contextLine="Based on your assignment scores"
                  ctaType="ai-trail-recommendations"
                  showPennyLabel={false}
                />
              </div>
            </div>
          </div>

          {/* Insight Length Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Insight Length Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Insights can range from short single-sentence notes to medium-length two-sentence suggestions. 
              Text wraps gracefully to accommodate various insight lengths.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Short Insight (1 sentence)</h4>
                <PennyInsightRail
                  aiCoachingNote="Great job on your last three submissions!"
                  contextLine="Based on recent performance"
                  ctaType="quick-quiz"
                  density="compact"
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Medium Insight (2 sentences)</h4>
                <PennyInsightRail
                  aiCoachingNote="I noticed you're excelling at technical implementation but taking longer on planning phases. Consider spending more time on design documents before coding—it often saves time in the long run."
                  contextLine="After analyzing your last 10 assignments"
                  ctaType="view-suggestions"
                />
              </div>
            </div>
          </div>

          {/* Real-World Context Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Insight Scenarios</h3>
            <p className="text-sm text-slate-600 mb-3">
              Examples of how Penny insights appear in different learner journey contexts.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PennyInsightRail
                aiCoachingNote="You haven't logged in for 5 days. Your cohort just started a new module on Lightning Web Components—want to catch up?"
                contextLine="Based on your activity gap"
                ctaType="ai-trail-recommendations"
              />
              <PennyInsightRail
                aiCoachingNote="You're consistently scoring 95%+ on quizzes but seem less confident in assignments. This is common—let's build that confidence!"
                contextLine="After comparing quiz vs. assignment performance"
                ctaType="view-suggestions"
              />
              <PennyInsightRail
                aiCoachingNote="You've completed all prerequisites for the Salesforce Admin certification. Ready to schedule your exam?"
                contextLine="Based on completed learning paths"
                ctaType="view-suggestions"
              />
              <PennyInsightRail
                aiCoachingNote="Your peer helped you debug that trigger issue yesterday. Want to pay it forward by helping another learner?"
                contextLine="After receiving peer support"
                ctaType="view-suggestions"
              />
              <PennyInsightRail
                aiCoachingNote="You've been exploring advanced Apex topics on your own. There's an upcoming study group that might interest you!"
                contextLine="Based on your self-directed learning"
                ctaType="ai-trail-recommendations"
              />
              <PennyInsightRail
                aiCoachingNote="Quick knowledge check: What's the relationship between profiles and permission sets?"
                contextLine="Based on today's lesson"
                ctaType="quick-quiz"
              />
            </div>
          </div>

          {/* Dashboard Right Rail Context */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Dashboard Right Rail Context</h3>
            <p className="text-sm text-slate-600 mb-3">
              Example of Penny Insight Rail in its primary placement: the dashboard right rail alongside other contextual information.
            </p>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {/* Main Content Area */}
                <div className="lg:col-span-2 space-y-4">
                  <h4 className="text-slate-900">Main Dashboard Content</h4>
                  <div className="bg-white rounded-lg border border-slate-200 p-6">
                    <p className="text-slate-600 mb-4">Learner stats, goals, assignments, and activity feed appear here...</p>
                    <LearnerStatsPanel
                      completedMissions={24}
                      currentStreak={7}
                      totalXP={3450}
                      nextMilestone="Salesforce Admin Cert"
                    />
                  </div>
                </div>

                {/* Right Rail */}
                <div className="space-y-4">
                  <h4 className="text-slate-900">Right Rail</h4>
                  <PennyInsightRail
                    aiCoachingNote="You're 80% through the Admin trail and ahead of schedule! Your pace suggests you could complete certification prep 2 weeks early."
                    contextLine="Based on your progress this month"
                    ctaType="ai-trail-recommendations"
                  />
                  <div className="bg-white rounded-lg border border-slate-200 p-4">
                    <h5 className="text-sm text-slate-700 mb-2">Upcoming Events</h5>
                    <p className="text-sm text-slate-600">Other rail content appears here...</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Multiple Insights in Right Rail */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Multiple Insights Pattern</h3>
            <p className="text-sm text-slate-600 mb-3">
              When multiple insights are available, they can be stacked vertically in the right rail. 
              Typically showing the most relevant or recent insight first.
            </p>
            <div className="max-w-md space-y-4">
              <PennyInsightRail
                aiCoachingNote="Your study group session yesterday covered complex topics. Want to review the key concepts with a quick quiz?"
                contextLine="After study group participation"
                ctaType="quick-quiz"
                density="compact"
              />
              <PennyInsightRail
                aiCoachingNote="You mentioned interest in nonprofit work during onboarding. Check out these NPSP-focused trails!"
                contextLine="Based on your career goals"
                ctaType="ai-trail-recommendations"
                density="compact"
              />
              <PennyInsightRail
                aiCoachingNote="Nice work on that formula field challenge. Ready for the next level?"
                contextLine="After assignment completion"
                ctaType="view-suggestions"
                density="compact"
              />
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Required Props (3 Fields)</h4>
              <div className="space-y-3 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">aiCoachingNote:</strong>
                  <span className="text-slate-600"> string - Short AI-generated insight or suggestion (1-2 sentences recommended)</span>
                </div>
                <div>
                  <strong className="text-slate-900">contextLine:</strong>
                  <span className="text-slate-600"> string - Explains why this insight is being shown (e.g., "Based on your last 3 missions...")</span>
                </div>
                <div>
                  <strong className="text-slate-900">ctaType:</strong>
                  <span className="text-slate-600"> 'view-suggestions' | 'quick-quiz' | 'ai-trail-recommendations' - Action type</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Optional Props</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <strong className="text-slate-900">density:</strong>
                  <span className="text-slate-600"> 'full' | 'compact' - Layout density (default: 'full')</span>
                </div>
                <div>
                  <strong className="text-slate-900">showPennyLabel:</strong>
                  <span className="text-slate-600"> boolean - Show "Insight from Penny" label (default: true)</span>
                </div>
                <div>
                  <strong className="text-slate-900">onCTAClick:</strong>
                  <span className="text-slate-600"> () =&gt; void - CTA button click handler</span>
                </div>
              </div>
            </div>
          </div>

          {/* CTA Type Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">CTA Type Configuration</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between p-2 bg-white rounded border border-slate-200">
                  <span className="text-slate-700">view-suggestions</span>
                  <Button variant="secondary" size="small">View Suggestions</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border border-slate-200">
                  <span className="text-slate-700">quick-quiz</span>
                  <Button variant="primary" size="small">Quick Quiz</Button>
                </div>
                <div className="flex items-center justify-between p-2 bg-white rounded border border-slate-200">
                  <span className="text-slate-700">ai-trail-recommendations</span>
                  <Button variant="secondary" size="small">AI Trail Recommendations</Button>
                </div>
              </div>
              <p className="text-sm text-slate-600 mt-3">
                Note: "Quick Quiz" uses primary button variant to encourage immediate action. 
                Other CTAs use secondary variant as they lead to discovery/exploration flows.
              </p>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic HTML structure with logical reading order (Label → Insight → Context → CTA), 
              WCAG AA contrast ratios on all text elements (emerald-600 icon, slate-700 label, slate-900 insight, slate-600 context), 
              CTA button includes visible focus state and proper keyboard accessibility, 
              Sparkles icon provides visual branding but is not essential for meaning, 
              "Insight from Penny" label provides screen reader context for AI-generated content, 
              full-width CTA button provides large touch target on mobile devices, 
              component maintains readability at all viewport sizes with appropriate text wrapping.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Keep insights brief and actionable (1-2 sentences)</li>
                  <li>Make context lines specific and meaningful</li>
                  <li>Use Quick Quiz CTA for knowledge checks</li>
                  <li>Use View Suggestions for next steps or tips</li>
                  <li>Use AI Trail Recommendations for learning paths</li>
                  <li>Place in right rail alongside other contextual info</li>
                  <li>Update insights regularly based on learner activity</li>
                  <li>Match CTA type to the insight's purpose</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't write long paragraphs (keep to 1-2 sentences)</li>
                  <li>Don't use vague context like "Based on stuff"</li>
                  <li>Don't show outdated or stale insights</li>
                  <li>Don't overload dashboard with too many insights</li>
                  <li>Don't use generic CTAs that don't match content</li>
                  <li>Don't place in main content area (right rail only)</li>
                  <li>Don't forget to make insights personalized</li>
                  <li>Don't show insights without clear next actions</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Content Strategy Guidelines */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Content Strategy for AI Insights</h4>
            <div className="space-y-3 text-sm text-blue-900">
              <div>
                <strong>Tone:</strong> Encouraging, supportive, and coach-like. Use "you" and "your" to personalize. 
                Avoid corporate jargon or overly formal language.
              </div>
              <div>
                <strong>Timing:</strong> Show insights based on recent activity (within last 24-48 hours). 
                Stale insights reduce trust in AI recommendations.
              </div>
              <div>
                <strong>Relevance:</strong> Context line must clearly explain the "why" so learners understand 
                the insight is data-driven and personalized, not random.
              </div>
              <div>
                <strong>Action-Oriented:</strong> Every insight should lead to a clear, achievable action. 
                Avoid insights that are purely observational without next steps.
              </div>
              <div>
                <strong>Frequency:</strong> Limit to 1-3 insights in right rail. Too many insights create decision fatigue. 
                Prioritize by relevance and recency.
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Use Cases</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Dashboard Right Rail:</strong> Primary placement showing the most relevant current insight</li>
              <li><strong>Post-Assignment Feedback:</strong> Contextual coaching after completing assignments</li>
              <li><strong>Re-engagement:</strong> Bringing learners back after periods of inactivity</li>
              <li><strong>Progress Celebration:</strong> Acknowledging milestones and encouraging continued momentum</li>
              <li><strong>Personalized Recommendations:</strong> Suggesting trails, study groups, or resources based on behavior</li>
              <li><strong>Knowledge Reinforcement:</strong> Offering quick quizzes to solidify recent learning</li>
              <li><strong>Peer Connection:</strong> Encouraging peer review, study groups, or mentorship opportunities</li>
              <li><strong>Career Guidance:</strong> Connecting learning activities to career goals and certifications</li>
            </ul>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">bg-white (surface)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">border-slate-200 (border)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">rounded-lg (8px radius)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">shadow-sm (minimal elevation)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">p-4, p-6 (16px, 24px padding)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">gap-2, gap-3, gap-4 (8px, 12px, 16px spacing)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Sparkles icon (emerald-600)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">text-sm (label, context)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-700 (label text)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-900 (insight text)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-600 (context text)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Button (primary/secondary, small/medium)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">w-full (full-width CTA)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">pt-2 (divider spacing above CTA)</span>
            </div>
          </div>

          {/* Component Dimensions */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Recommended Dimensions</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Width:</strong> 280-360px (typical right rail width)</li>
              <li><strong>Full Density Padding:</strong> 24px (p-6)</li>
              <li><strong>Compact Density Padding:</strong> 16px (p-4)</li>
              <li><strong>Full Density Spacing:</strong> 16px between sections (gap-4)</li>
              <li><strong>Compact Density Spacing:</strong> 12px between sections (gap-3)</li>
              <li><strong>Minimum Width:</strong> 240px before content becomes cramped</li>
              <li><strong>Maximum Width:</strong> 400px to maintain readability and rail proportions</li>
            </ul>
          </div>

          {/* Integration Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Integration with Dashboard Panels</h3>
            <p className="text-sm text-slate-600 mb-3">
              Penny Insight Rail works alongside other TT Domain Components in dashboard layouts.
            </p>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-3 space-y-4">
                  <GoalsAndProgressPanel
                    goals={[
                      { id: '1', title: 'Complete Admin Trail', progress: 75, dueDate: '2025-12-15' },
                      { id: '2', title: 'Pass Platform Developer I', progress: 45, dueDate: '2026-01-30' }
                    ]}
                  />
                  <SkillsAndCertsPanel
                    skills={[
                      { id: '1', name: 'Apex', variant: 'trail' },
                      { id: '2', name: 'Lightning Web Components', variant: 'trail' },
                      { id: '3', name: 'Flow Builder', variant: 'trail' }
                    ]}
                    certifications={[
                      { id: '1', name: 'Salesforce Administrator', earned: false }
                    ]}
                  />
                </div>

                {/* Right Rail with Penny Insight */}
                <div className="space-y-4">
                  <PennyInsightRail
                    aiCoachingNote="You're 75% through the Admin trail! Your progress pace suggests you'll finish by December 10th—5 days ahead of your goal."
                    contextLine="Based on your current progress"
                    ctaType="view-suggestions"
                  />
                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <h5 className="text-sm text-slate-700 mb-2">Quick Links</h5>
                    <ul className="text-sm text-slate-600 space-y-1">
                      <li>• Study Calendar</li>
                      <li>• Help Center</li>
                      <li>• Community</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Badges & Credits Panel Section */}
        <section id="badges" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Badges & Credits Panel</h2>
            <p className="text-slate-600">
              Right-column or dashboard panel component showing the learner's earned badges, credits, and achievements. 
              Features credit summaries (total or category breakdown), badge display with overflow handling, and actionable CTAs.
            </p>
          </div>

          {/* Total Credits Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Total Credits (Simple)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Display total credits only with a prominent number and optional credit icon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <BadgesAndCreditsPanel
                totalCredits={125}
                creditsStructure="total"
                badges={[
                  { id: '1', title: 'First Steps', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true, description: 'Completed your first learning activity' },
                  { id: '2', title: 'Trail Blazer', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true, description: 'Finished 5 trails' },
                  { id: '3', title: 'Community Helper', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true, description: 'Helped 10 peers' },
                  { id: '4', title: 'Knowledge Seeker', icon: <BookOpen className="h-5 w-5 text-purple-500" />, earned: true, description: 'Earned 100 credits' },
                ]}
              />
              <BadgesAndCreditsPanel
                totalCredits={342}
                creditsStructure="total"
                badges={[
                  { id: '1', title: 'Certification Champion', icon: <Award className="h-5 w-5 text-amber-600" />, earned: true },
                  { id: '2', title: 'Code Master', icon: <Code className="h-5 w-5 text-indigo-500" />, earned: true },
                  { id: '3', title: 'Mentor', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                ]}
                showCreditIcon={false}
              />
            </div>
          </div>

          {/* Category Breakdown Variant */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Category Breakdown (Detailed)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Show total credits with detailed breakdown by category (Learning, Trail, Community). 
              Each category can include an optional icon.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <BadgesAndCreditsPanel
                totalCredits={285}
                creditsStructure="breakdown"
                creditCategories={[
                  { id: '1', label: 'Learning Credits', amount: 150, icon: <BookOpen className="h-4 w-4" /> },
                  { id: '2', label: 'Trail Credits', amount: 85, icon: <MapPin className="h-4 w-4" /> },
                  { id: '3', label: 'Community Credits', amount: 50, icon: <Users className="h-4 w-4" /> },
                ]}
                badges={[
                  { id: '1', title: 'Fast Learner', icon: <Zap className="h-5 w-5 text-amber-500" />, earned: true },
                  { id: '2', title: 'Trail Master', icon: <Compass className="h-5 w-5 text-blue-500" />, earned: true },
                  { id: '3', title: 'Team Player', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                  { id: '4', title: 'Problem Solver', icon: <Lightbulb className="h-5 w-5 text-purple-500" />, earned: true },
                ]}
              />
              <BadgesAndCreditsPanel
                totalCredits={420}
                creditsStructure="breakdown"
                creditCategories={[
                  { id: '1', label: 'Learning', amount: 200 },
                  { id: '2', label: 'Trails', amount: 140 },
                  { id: '3', label: 'Community', amount: 80 },
                ]}
                badges={[
                  { id: '1', title: 'Admin Expert', icon: <Settings className="h-5 w-5 text-slate-600" />, earned: true },
                  { id: '2', title: 'Developer Pro', icon: <Code className="h-5 w-5 text-indigo-500" />, earned: true },
                  { id: '3', title: 'Top Contributor', icon: <Trophy className="h-5 w-5 text-amber-500" />, earned: true },
                  { id: '4', title: 'Innovator', icon: <Star className="h-5 w-5 text-purple-500" />, earned: true },
                  { id: '5', title: 'Mentor', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                ]}
              />
            </div>
          </div>

          {/* Badge Count Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Badge Count Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Handles various badge counts from few (1-3) to many (7+ with overflow indicator).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Few Badges */}
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Few Badges (2)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={45}
                  badges={[
                    { id: '1', title: 'Getting Started', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'First Mission', icon: <Target className="h-5 w-5 text-blue-500" />, earned: true },
                  ]}
                />
              </div>

              {/* Normal Badge Count */}
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Normal (4 badges)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={125}
                  badges={[
                    { id: '1', title: 'First Steps', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'Trail Blazer', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true },
                    { id: '3', title: 'Community Helper', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                    { id: '4', title: 'Knowledge Seeker', icon: <BookOpen className="h-5 w-5 text-purple-500" />, earned: true },
                  ]}
                />
              </div>

              {/* Many Badges with Overflow */}
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Many (9 badges, shows +3)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={450}
                  maxVisibleBadges={6}
                  badges={[
                    { id: '1', title: 'First Steps', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'Trail Blazer', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true },
                    { id: '3', title: 'Community Helper', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                    { id: '4', title: 'Knowledge Seeker', icon: <BookOpen className="h-5 w-5 text-purple-500" />, earned: true },
                    { id: '5', title: 'Code Master', icon: <Code className="h-5 w-5 text-indigo-500" />, earned: true },
                    { id: '6', title: 'Mentor', icon: <Trophy className="h-5 w-5 text-amber-600" />, earned: true },
                    { id: '7', title: 'Problem Solver', icon: <Lightbulb className="h-5 w-5 text-yellow-500" />, earned: true },
                    { id: '8', title: 'Team Leader', icon: <Target className="h-5 w-5 text-rose-500" />, earned: true },
                    { id: '9', title: 'Innovator', icon: <Cloud className="h-5 w-5 text-sky-500" />, earned: true },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Density Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Density Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Default density for main dashboard panels, compact for narrower right rails or mobile views.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Default Density (24px padding)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={285}
                  density="default"
                  badges={[
                    { id: '1', title: 'Achiever', icon: <Trophy className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'Explorer', icon: <Compass className="h-5 w-5 text-blue-500" />, earned: true },
                    { id: '3', title: 'Collaborator', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                  ]}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Compact Density (16px padding)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={285}
                  density="compact"
                  badges={[
                    { id: '1', title: 'Achiever', icon: <Trophy className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'Explorer', icon: <Compass className="h-5 w-5 text-blue-500" />, earned: true },
                    { id: '3', title: 'Collaborator', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* CTA Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">CTA Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              CTAs can be buttons (default) or text links with icons. Custom text and click handlers supported.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Button CTA (Default)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={200}
                  ctaText="View All Achievements"
                  badges={[
                    { id: '1', title: 'Star Performer', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'Fast Learner', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true },
                  ]}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Link CTA (with href)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={200}
                  ctaText="See Badge Progress"
                  ctaHref="#badges"
                  badges={[
                    { id: '1', title: 'Star Performer', icon: <Star className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '2', title: 'Fast Learner', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true },
                  ]}
                />
              </div>
            </div>
          </div>

          {/* Dashboard Right Rail Context */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Dashboard Right Rail Context</h3>
            <p className="text-sm text-slate-600 mb-3">
              Primary placement in the dashboard right rail alongside Penny Insights and quick links.
            </p>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main Content */}
                <div className="lg:col-span-3 space-y-4">
                  <h4 className="text-slate-900">Main Dashboard Content</h4>
                  <LearnerStatsPanel
                    completedMissions={24}
                    currentStreak={7}
                    totalXP={3450}
                    nextMilestone="Salesforce Admin Cert"
                  />
                  <GoalsAndProgressPanel
                    goals={[
                      { id: '1', title: 'Complete Admin Trail', progress: 75, dueDate: '2025-12-15' },
                      { id: '2', title: 'Pass Platform Developer I', progress: 45, dueDate: '2026-01-30' }
                    ]}
                  />
                </div>

                {/* Right Rail */}
                <div className="space-y-4">
                  <h4 className="text-slate-900">Right Rail</h4>
                  <PennyInsightRail
                    aiCoachingNote="You're on fire! Your recent badge streak shows consistent learning habits."
                    contextLine="After earning 3 badges this week"
                    ctaType="view-suggestions"
                    density="compact"
                  />
                  <BadgesAndCreditsPanel
                    totalCredits={285}
                    creditsStructure="breakdown"
                    creditCategories={[
                      { id: '1', label: 'Learning', amount: 150 },
                      { id: '2', label: 'Trail', amount: 85 },
                      { id: '3', label: 'Community', amount: 50 },
                    ]}
                    badges={[
                      { id: '1', title: 'Trail Master', icon: <Compass className="h-5 w-5 text-blue-500" />, earned: true },
                      { id: '2', title: 'Code Expert', icon: <Code className="h-5 w-5 text-indigo-500" />, earned: true },
                      { id: '3', title: 'Helper', icon: <Users className="h-5 w-5 text-emerald-500" />, earned: true },
                      { id: '4', title: 'Achiever', icon: <Trophy className="h-5 w-5 text-amber-500" />, earned: true },
                    ]}
                    density="compact"
                    ctaText="View All"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* No Badges State */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Empty State (No Badges)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Displays helpful message when learner hasn't earned any badges yet.
            </p>
            <div className="max-w-sm">
              <BadgesAndCreditsPanel
                totalCredits={15}
                badges={[]}
                ctaText="Explore Learning Paths"
              />
            </div>
          </div>

          {/* Real-World Scenarios */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Profile Scenarios</h3>
            <p className="text-sm text-slate-600 mb-3">
              Examples showing different learner progression stages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* Beginner */}
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Beginner (Week 1)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={25}
                  badges={[
                    { id: '1', title: 'Welcome Badge', icon: <Star className="h-5 w-5 text-amber-400" />, earned: true, description: 'Joined TT Academy' },
                    { id: '2', title: 'First Login', icon: <User className="h-5 w-5 text-blue-400" />, earned: true, description: 'Logged in for the first time' },
                  ]}
                  ctaText="Explore More"
                  density="compact"
                />
              </div>

              {/* Intermediate */}
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Intermediate (Month 3)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={180}
                  creditsStructure="breakdown"
                  creditCategories={[
                    { id: '1', label: 'Learning', amount: 100 },
                    { id: '2', label: 'Trail', amount: 55 },
                    { id: '3', label: 'Community', amount: 25 },
                  ]}
                  badges={[
                    { id: '1', title: 'Consistent Learner', icon: <Target className="h-5 w-5 text-emerald-500" />, earned: true },
                    { id: '2', title: 'Trail Explorer', icon: <MapPin className="h-5 w-5 text-blue-500" />, earned: true },
                    { id: '3', title: 'Quiz Master', icon: <BookOpen className="h-5 w-5 text-purple-500" />, earned: true },
                    { id: '4', title: 'Helper', icon: <Users className="h-5 w-5 text-amber-500" />, earned: true },
                  ]}
                  density="compact"
                />
              </div>

              {/* Advanced */}
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Advanced (6+ months)</h4>
                <BadgesAndCreditsPanel
                  totalCredits={520}
                  creditsStructure="breakdown"
                  creditCategories={[
                    { id: '1', label: 'Learning', amount: 280 },
                    { id: '2', label: 'Trail', amount: 160 },
                    { id: '3', label: 'Community', amount: 80 },
                  ]}
                  badges={[
                    { id: '1', title: 'Certification', icon: <Award className="h-5 w-5 text-amber-600" />, earned: true },
                    { id: '2', title: 'Code Master', icon: <Code className="h-5 w-5 text-indigo-600" />, earned: true },
                    { id: '3', title: 'Mentor', icon: <Trophy className="h-5 w-5 text-amber-500" />, earned: true },
                    { id: '4', title: 'Community Leader', icon: <Users className="h-5 w-5 text-emerald-600" />, earned: true },
                    { id: '5', title: 'Trail Master', icon: <Compass className="h-5 w-5 text-blue-600" />, earned: true },
                    { id: '6', title: 'Top Contributor', icon: <Star className="h-5 w-5 text-purple-600" />, earned: true },
                    { id: '7', title: 'Innovator', icon: <Lightbulb className="h-5 w-5 text-yellow-500" />, earned: true },
                  ]}
                  maxVisibleBadges={6}
                  density="compact"
                />
              </div>
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Credits Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">totalCredits:</strong>
                  <span className="text-slate-600"> number - Total credits earned (default: 125)</span>
                </div>
                <div>
                  <strong className="text-slate-900">creditsStructure:</strong>
                  <span className="text-slate-600"> 'total' | 'breakdown' - Display mode (default: 'total')</span>
                </div>
                <div>
                  <strong className="text-slate-900">creditCategories:</strong>
                  <span className="text-slate-600"> CreditCategory[] - Array of credit categories with id, label, amount, optional icon</span>
                </div>
                <div>
                  <strong className="text-slate-900">showCreditIcon:</strong>
                  <span className="text-slate-600"> boolean - Show Award icon in header (default: true)</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Badges Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">badges:</strong>
                  <span className="text-slate-600"> Badge[] - Array of badge objects with id, title, icon, earned, optional description</span>
                </div>
                <div>
                  <strong className="text-slate-900">maxVisibleBadges:</strong>
                  <span className="text-slate-600"> number - Maximum badges to show before +N overflow (default: 6)</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">CTA Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">ctaText:</strong>
                  <span className="text-slate-600"> string - CTA button/link text (default: "View All Achievements")</span>
                </div>
                <div>
                  <strong className="text-slate-900">ctaHref:</strong>
                  <span className="text-slate-600"> string - Optional href for link-style CTA</span>
                </div>
                <div>
                  <strong className="text-slate-900">onCTAClick:</strong>
                  <span className="text-slate-600"> () =&gt; void - Click handler</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Layout Props</h4>
              <div className="space-y-2 text-sm">
                <div>
                  <strong className="text-slate-900">density:</strong>
                  <span className="text-slate-600"> 'default' | 'compact' - Panel density (default: 'default')</span>
                </div>
              </div>
            </div>
          </div>

          {/* Type Definitions */}
          <div className="space-y-3">
            <h3 className="text-slate-700">TypeScript Type Definitions</h3>
            <div className="p-4 bg-slate-900 text-slate-100 rounded-lg text-sm overflow-x-auto">
              <pre>{`type CreditCategory = {
  id: string;
  label: string;
  amount: number;
  icon?: React.ReactNode;
};

type Badge = {
  id: string;
  title: string;
  icon: React.ReactNode;
  earned: boolean;
  description?: string; // Used for tooltip
};

type CreditsStructure = 'total' | 'breakdown';
type PanelDensity = 'default' | 'compact';`}</pre>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> WCAG AA contrast on all text (emerald-700 credits number, slate-900 labels, slate-600 secondary text), 
              Badge icons wrapped with Tooltip component for accessible descriptions on hover, 
              Each badge has role="img" and aria-label with badge title for screen readers, 
              Overflow indicator (+N) includes aria-label explaining additional badge count, 
              CTA button/link has proper focus states with visible outline, 
              Semantic HTML structure with proper heading hierarchy (h3 for panel title, h4 for section titles), 
              Credit categories use semantic grid layout with clear label-value relationships, 
              No color-only indicators (all badge meanings conveyed through icon + text tooltip), 
              Panel maintains readability at all viewport sizes with appropriate text wrapping.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Place in dashboard right rail or profile sidebar</li>
                  <li>Show most recently earned badges first</li>
                  <li>Use tooltips to provide badge descriptions</li>
                  <li>Update credit counts in real-time when earned</li>
                  <li>Use category breakdown for detailed credit tracking</li>
                  <li>Keep badge icons visually distinct and colorful</li>
                  <li>Set maxVisibleBadges based on available space</li>
                  <li>Celebrate new badges with animations/toasts elsewhere</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't show unearned badges (only earned badges)</li>
                  <li>Don't use category breakdown without categories array</li>
                  <li>Don't make credit numbers too small to read</li>
                  <li>Don't forget badge tooltips (accessibility issue)</li>
                  <li>Don't show stale/cached badge counts</li>
                  <li>Don't use too many badge categories (3-4 max)</li>
                  <li>Don't make overflow indicator clickable without handler</li>
                  <li>Don't place in narrow spaces without compact density</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Badge Icon Guidelines */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Badge Icon Design Guidelines</h4>
            <div className="space-y-2 text-sm text-blue-900">
              <div>
                <strong>Icon Size:</strong> Use h-5 w-5 (20px) for optimal badge display. Smaller icons (h-4 w-4) work for compact density.
              </div>
              <div>
                <strong>Color Variety:</strong> Use distinct colors for different badge types (amber for achievements, blue for trails, 
                emerald for community, purple for learning, etc.).
              </div>
              <div>
                <strong>Icon Selection:</strong> Choose meaningful icons that represent badge purpose (Trophy for achievements, 
                Star for milestones, Users for community, BookOpen for learning).
              </div>
              <div>
                <strong>Consistency:</strong> Keep icon style consistent within the same badge category (all solid, all outlined, etc.).
              </div>
              <div>
                <strong>Contrast:</strong> Ensure icon colors provide sufficient contrast against the slate-50 background (minimum 3:1 ratio).
              </div>
            </div>
          </div>

          {/* Credit Category Examples */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Credit Category Suggestions</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm text-blue-900">
              <div>
                <strong>Standard Categories:</strong>
                <ul className="ml-5 list-disc mt-1">
                  <li>Learning Credits - From completing lessons/activities</li>
                  <li>Trail Credits - From finishing trails</li>
                  <li>Community Credits - From peer help/reviews</li>
                </ul>
              </div>
              <div>
                <strong>Advanced Categories:</strong>
                <ul className="ml-5 list-disc mt-1">
                  <li>Project Credits - From partner project work</li>
                  <li>Certification Credits - From exam preparation</li>
                  <li>Mentorship Credits - From helping others</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Use Cases</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Dashboard Right Rail:</strong> Primary placement showing current credits and recent badges</li>
              <li><strong>Profile Page Sidebar:</strong> Display learner's total achievements and badge collection</li>
              <li><strong>Learning Center:</strong> Show progress incentives alongside learning paths</li>
              <li><strong>Gamification:</strong> Encourage continued engagement through visible achievement tracking</li>
              <li><strong>Onboarding:</strong> Show first badge earned to new learners with congratulatory message</li>
              <li><strong>Progress Reports:</strong> Include in periodic progress summaries or email digests</li>
              <li><strong>Leaderboards:</strong> Compare credit totals across cohorts or study groups</li>
              <li><strong>Motivation:</strong> Display progress toward next badge or credit milestone</li>
            </ul>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">bg-white (surface)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">rounded-xl (12px radius)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">border-slate-200</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">shadow-sm (minimal elevation)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">p-4, p-6 (16px, 24px padding)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">gap-4, gap-5 (16px, 20px spacing)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">emerald-700 (credit number)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">emerald-600 (Award icon)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-900 (headings)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-700 (section titles)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-600 (secondary text)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">slate-50 (category/badge backgrounds)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">h-5 w-5 (20px badge icons)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">h-14 w-14 / h-12 w-12 (badge containers)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">rounded-lg (8px badge corners)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Button component</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Tooltip component</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Lucide icons (Award, Trophy, Star, etc.)</span>
            </div>
          </div>

          {/* Component Dimensions */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Recommended Dimensions</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Width:</strong> 280-360px (typical right rail width) - component is fluid</li>
              <li><strong>Default Padding:</strong> 24px (p-6)</li>
              <li><strong>Compact Padding:</strong> 16px (p-4)</li>
              <li><strong>Default Section Gap:</strong> 20px (gap-5)</li>
              <li><strong>Compact Section Gap:</strong> 16px (gap-4)</li>
              <li><strong>Badge Size Default:</strong> 56px × 56px (h-14 w-14)</li>
              <li><strong>Badge Size Compact:</strong> 48px × 48px (h-12 w-12)</li>
              <li><strong>Minimum Width:</strong> 240px before layout breaks</li>
              <li><strong>Credit Number Font Size (Default):</strong> 2.5rem (40px)</li>
              <li><strong>Credit Number Font Size (Compact):</strong> 2rem (32px)</li>
            </ul>
          </div>

          {/* Integration Patterns */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Common Integration Patterns</h3>
            <p className="text-sm text-slate-600 mb-3">
              Badges & Credits Panel works well with other dashboard components in various layouts.
            </p>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                {/* Main 3-Column Content */}
                <div className="lg:col-span-3 space-y-4">
                  <h4 className="text-slate-900">Main Dashboard Area</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <LearnerStatsPanel
                      completedMissions={32}
                      currentStreak={12}
                      totalXP={4200}
                      nextMilestone="Platform Developer I"
                    />
                    <GoalsAndProgressPanel
                      goals={[
                        { id: '1', title: 'Complete Admin Trail', progress: 90, dueDate: '2025-12-01' },
                        { id: '2', title: 'Master Flow Builder', progress: 60, dueDate: '2025-12-20' }
                      ]}
                    />
                  </div>
                </div>

                {/* Right Rail - Stacked Panels */}
                <div className="space-y-4">
                  <h4 className="text-slate-900">Right Rail Stack</h4>
                  <BadgesAndCreditsPanel
                    totalCredits={350}
                    creditsStructure="breakdown"
                    creditCategories={[
                      { id: '1', label: 'Learning', amount: 200 },
                      { id: '2', label: 'Trail', amount: 100 },
                      { id: '3', label: 'Community', amount: 50 },
                    ]}
                    badges={[
                      { id: '1', title: 'Top Performer', icon: <Trophy className="h-5 w-5 text-amber-500" />, earned: true },
                      { id: '2', title: 'Streak Master', icon: <Zap className="h-5 w-5 text-blue-500" />, earned: true },
                      { id: '3', title: 'Community Star', icon: <Star className="h-5 w-5 text-purple-500" />, earned: true },
                      { id: '4', title: 'Code Expert', icon: <Code className="h-5 w-5 text-indigo-500" />, earned: true },
                    ]}
                    density="compact"
                    ctaText="View All"
                  />
                  <PennyInsightRail
                    aiCoachingNote="You just earned your 25th badge! You're in the top 10% of learners this month."
                    contextLine="Based on recent achievements"
                    ctaType="view-suggestions"
                    density="compact"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Penny Quick Tip Bubble Section */}
        <section id="pennytip" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Penny Quick Tip Bubble</h2>
            <p className="text-slate-600">
              Lightweight, friendly "nudge" bubble for contextual insights—short reminders, quick hints, study nudges, or task clarifications. 
              Unobtrusive, supportive, fast to scan, and easy to dismiss.
            </p>
          </div>

          {/* Basic Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Basic Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Three visual variants: Neutral (default), Info (blue), and Accent (emerald). All support custom icons and context labels.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Neutral Variant</h4>
                <PennyTip
                  tipText="Remember to save your progress before switching trails!"
                  contextLabel="Study Tip"
                  icon="sparkles"
                  variant="neutral"
                  onDismiss={() => console.log('Dismissed')}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Info Variant</h4>
                <PennyTip
                  tipText="Your next quiz unlocks in 2 hours. Great job staying on track!"
                  contextLabel="Progress Update"
                  icon="info"
                  variant="info"
                  onDismiss={() => console.log('Dismissed')}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Accent Variant</h4>
                <PennyTip
                  tipText="You're on a 7-day streak! Keep it going to earn a badge."
                  contextLabel="Reminder"
                  icon="star"
                  variant="accent"
                  onDismiss={() => console.log('Dismissed')}
                />
              </div>
            </div>
          </div>

          {/* Icon Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Icon Options</h3>
            <p className="text-sm text-slate-600 mb-3">
              Built-in icons: sparkles (default), lightbulb, info, star, zap. Custom React nodes also supported.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <PennyTip
                tipText="AI-powered insight"
                icon="sparkles"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Learning suggestion"
                icon="lightbulb"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Important information"
                icon="info"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Achievement unlocked"
                icon="star"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Quick action tip"
                icon="zap"
                onDismiss={() => {}}
              />
            </div>
          </div>

          {/* With CTA */}
          <div className="space-y-3">
            <h3 className="text-slate-700">With Call-to-Action</h3>
            <p className="text-sm text-slate-600 mb-3">
              Add optional CTA text link inline or beneath the message. Can be a link (href) or button (onClick).
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">With Link CTA</h4>
                <PennyTip
                  tipText="You have 3 new course recommendations based on your progress."
                  contextLabel="Navigation"
                  icon="lightbulb"
                  ctaText="View recommendations"
                  ctaHref="#recommendations"
                  variant="accent"
                  onDismiss={() => {}}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">With Button CTA</h4>
                <PennyTip
                  tipText="Review your quiz before submitting to catch any mistakes."
                  contextLabel="Study Tip"
                  icon="info"
                  ctaText="Show me more"
                  onCTAClick={() => alert('CTA clicked!')}
                  variant="info"
                  onDismiss={() => {}}
                />
              </div>
            </div>
          </div>

          {/* Density Variants */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Density Variants</h3>
            <p className="text-sm text-slate-600 mb-3">
              Standard density for main areas, compact for tight spaces like sidebars or inline help.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl">
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Standard Density (16px padding)</h4>
                <PennyTip
                  tipText="Complete 3 more modules to unlock your certification exam."
                  contextLabel="Progress"
                  icon="star"
                  ctaText="View progress"
                  onCTAClick={() => {}}
                  density="standard"
                  onDismiss={() => {}}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700">Compact Density (12px padding)</h4>
                <PennyTip
                  tipText="Complete 3 more modules to unlock your certification exam."
                  contextLabel="Progress"
                  icon="star"
                  ctaText="View progress"
                  onCTAClick={() => {}}
                  density="compact"
                  onDismiss={() => {}}
                />
              </div>
            </div>
          </div>

          {/* Content Length */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Content Length Handling</h3>
            <p className="text-sm text-slate-600 mb-3">
              Supports short (1 line) to medium (2-3 lines) content. Layout adapts gracefully to text length.
            </p>
            <div className="space-y-4 max-w-2xl">
              <div className="space-y-2">
                <h4 className="text-sm text-slate-700">Short (1 line)</h4>
                <PennyTip
                  tipText="Don't forget to save!"
                  icon="sparkles"
                  onDismiss={() => {}}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-slate-700">Medium (2 lines)</h4>
                <PennyTip
                  tipText="Your learning path is 75% complete. Just 2 more modules until you unlock the final project!"
                  contextLabel="Progress Update"
                  icon="star"
                  variant="accent"
                  onDismiss={() => {}}
                />
              </div>
              <div className="space-y-2">
                <h4 className="text-sm text-slate-700">Long with CTA (3 lines)</h4>
                <PennyTip
                  tipText="Based on your recent quiz results, I recommend reviewing the Flow Builder module before moving forward. This will strengthen your foundation for the advanced topics ahead."
                  contextLabel="Study Recommendation"
                  icon="lightbulb"
                  ctaText="Review module now"
                  onCTAClick={() => {}}
                  variant="info"
                  onDismiss={() => {}}
                />
              </div>
            </div>
          </div>

          {/* With Pointer */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Pointer Variants (Popover Style)</h3>
            <p className="text-sm text-slate-600 mb-3">
              Add triangular pointer for popover positioning. Four placement options: top, bottom, left, right.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="space-y-12">
                <div>
                  <h4 className="text-sm text-slate-700 mb-8">Top Pointer</h4>
                  <PennyTip
                    tipText="This tip points upward to the element above"
                    icon="info"
                    placement="top"
                    showPointer={true}
                    onDismiss={() => {}}
                  />
                </div>
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700 mb-2">Bottom Pointer</h4>
                <PennyTip
                  tipText="This tip points downward to the element below"
                  icon="info"
                  placement="bottom"
                  showPointer={true}
                  onDismiss={() => {}}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700 mb-2">Left Pointer</h4>
                <PennyTip
                  tipText="Points to the left element"
                  icon="info"
                  placement="left"
                  showPointer={true}
                  onDismiss={() => {}}
                />
              </div>
              <div className="space-y-3">
                <h4 className="text-sm text-slate-700 mb-2">Right Pointer</h4>
                <PennyTip
                  tipText="Points to the right element"
                  icon="info"
                  placement="right"
                  showPointer={true}
                  onDismiss={() => {}}
                />
              </div>
            </div>
          </div>

          {/* No Dismiss Button */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Without Dismiss Button</h3>
            <p className="text-sm text-slate-600 mb-3">
              For critical messages or persistent tips that shouldn't be dismissed (set showDismiss to false).
            </p>
            <div className="max-w-md">
              <PennyTip
                tipText="System maintenance scheduled for tonight at 11 PM EST. Save your work frequently."
                contextLabel="Important Notice"
                icon="info"
                variant="info"
                showDismiss={false}
              />
            </div>
          </div>

          {/* Context Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Context Label Examples</h3>
            <p className="text-sm text-slate-600 mb-3">
              Context labels help categorize tips: Study Tip, Navigation, Reminder, Progress Update, etc.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              <PennyTip
                tipText="Review key concepts before the quiz"
                contextLabel="Study Tip"
                icon="lightbulb"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Find your saved items in the top menu"
                contextLabel="Navigation"
                icon="info"
                variant="info"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Your quiz is due tomorrow at 5 PM"
                contextLabel="Reminder"
                icon="zap"
                variant="accent"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="You completed 3 modules this week"
                contextLabel="Progress Update"
                icon="star"
                variant="accent"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="New trail available in your learning path"
                contextLabel="What's New"
                icon="sparkles"
                onDismiss={() => {}}
              />
              <PennyTip
                tipText="Connect with peers in the community forum"
                contextLabel="Community"
                icon="info"
                onDismiss={() => {}}
              />
            </div>
          </div>

          {/* Real-World Placement Examples */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Real-World Placement Examples</h3>
            <p className="text-sm text-slate-600 mb-3">
              Common use cases across the TT Academy platform showing where Penny Tips appear contextually.
            </p>

            {/* Dashboard Right Rail */}
            <div className="space-y-3">
              <h4 className="text-sm text-slate-700">Dashboard Right Rail</h4>
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
                  <div className="lg:col-span-3 space-y-4">
                    <h5 className="text-slate-900">Main Content</h5>
                    <LearnerStatsPanel
                      completedMissions={18}
                      currentStreak={5}
                      totalXP={2800}
                      nextMilestone="Admin Certification"
                    />
                  </div>
                  <div className="space-y-4">
                    <h5 className="text-slate-900">Right Rail with Tips</h5>
                    <PennyTip
                      tipText="You're close to a 7-day streak! Log in tomorrow to keep it going."
                      contextLabel="Motivation"
                      icon="star"
                      variant="accent"
                      density="compact"
                      onDismiss={() => {}}
                    />
                    <PennyInsightRail
                      aiCoachingNote="Your quiz scores are improving! Keep practicing data modeling."
                      contextLine="Based on recent performance"
                      ctaType="view-suggestions"
                      density="compact"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* Above Action Buttons */}
            <div className="space-y-3">
              <h4 className="text-sm text-slate-700">Above Action Buttons</h4>
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <div className="space-y-4 max-w-2xl">
                  <div className="p-4 bg-white rounded-lg border border-slate-200">
                    <h5 className="text-slate-900 mb-2">Quiz: Apex Fundamentals</h5>
                    <p className="text-sm text-slate-600 mb-4">
                      10 questions • 20 minutes • Must score 80% to pass
                    </p>
                  </div>
                  <PennyTip
                    tipText="Take your time! You can review questions before submitting."
                    contextLabel="Study Tip"
                    icon="lightbulb"
                    variant="info"
                    onDismiss={() => {}}
                  />
                  <div className="flex gap-3">
                    <Button variant="primary" size="medium">Start Quiz</Button>
                    <Button variant="secondary" size="medium">Review Material</Button>
                  </div>
                </div>
              </div>
            </div>

            {/* Under Page Header */}
            <div className="space-y-3">
              <h4 className="text-sm text-slate-700">Under Page Header</h4>
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <div className="space-y-4">
                  <div className="flex items-center justify-between pb-4 border-b border-slate-200">
                    <h5 className="text-slate-900">My Learning Path</h5>
                    <Button variant="secondary" size="small">View All</Button>
                  </div>
                  <PennyTip
                    tipText="New recommended trails based on your interests have been added below."
                    contextLabel="What's New"
                    icon="sparkles"
                    ctaText="See recommendations"
                    onCTAClick={() => {}}
                    onDismiss={() => {}}
                  />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card variant="outlined" padding="medium">
                      <div className="space-y-2">
                        <h6 className="text-slate-900">Platform Developer Trail</h6>
                        <p className="text-sm text-slate-600">8 modules • 12 hours</p>
                      </div>
                    </Card>
                    <Card variant="outlined" padding="medium">
                      <div className="space-y-2">
                        <h6 className="text-slate-900">Admin Essentials</h6>
                        <p className="text-sm text-slate-600">6 modules • 9 hours</p>
                      </div>
                    </Card>
                  </div>
                </div>
              </div>
            </div>

            {/* Inline Form Help */}
            <div className="space-y-3">
              <h4 className="text-sm text-slate-700">Inline Form Help</h4>
              <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
                <div className="space-y-4 max-w-xl">
                  <h5 className="text-slate-900">Set Your Learning Goals</h5>
                  <TextInput
                    label="Primary Goal"
                    placeholder="e.g., Earn Admin Certification"
                  />
                  <PennyTip
                    tipText="Setting SMART goals helps you stay focused and motivated."
                    icon="lightbulb"
                    density="compact"
                    onDismiss={() => {}}
                  />
                  <TextInput
                    label="Target Completion Date"
                    type="date"
                  />
                  <Button variant="primary" size="medium">Save Goals</Button>
                </div>
              </div>
            </div>
          </div>

          {/* Component Props Reference */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Component Props & API</h3>
            <div className="p-4 bg-slate-50 rounded-lg border border-slate-200">
              <h4 className="text-slate-900 mb-3">Content Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">tipText:</strong>
                  <span className="text-slate-600"> string (required) - The main tip message (1-3 lines)</span>
                </div>
                <div>
                  <strong className="text-slate-900">contextLabel:</strong>
                  <span className="text-slate-600"> string - Optional category label ("Study Tip", "Navigation", etc.)</span>
                </div>
                <div>
                  <strong className="text-slate-900">ctaText:</strong>
                  <span className="text-slate-600"> string - Optional CTA button/link text</span>
                </div>
                <div>
                  <strong className="text-slate-900">ctaHref:</strong>
                  <span className="text-slate-600"> string - Optional href for link-style CTA</span>
                </div>
                <div>
                  <strong className="text-slate-900">onCTAClick:</strong>
                  <span className="text-slate-600"> () =&gt; void - CTA click handler</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Icon Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">icon:</strong>
                  <span className="text-slate-600"> 'sparkles' | 'lightbulb' | 'info' | 'star' | 'zap' | React.ReactNode (default: 'sparkles')</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Dismissal Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">onDismiss:</strong>
                  <span className="text-slate-600"> () =&gt; void - Called when X button is clicked</span>
                </div>
                <div>
                  <strong className="text-slate-900">showDismiss:</strong>
                  <span className="text-slate-600"> boolean - Show dismiss X button (default: true)</span>
                </div>
              </div>

              <h4 className="text-slate-900 mb-3">Variant Props</h4>
              <div className="space-y-2 text-sm mb-4">
                <div>
                  <strong className="text-slate-900">variant:</strong>
                  <span className="text-slate-600"> 'neutral' | 'info' | 'accent' - Visual style (default: 'neutral')</span>
                </div>
                <div>
                  <strong className="text-slate-900">density:</strong>
                  <span className="text-slate-600"> 'standard' | 'compact' - Padding density (default: 'standard')</span>
                </div>
                <div>
                  <strong className="text-slate-900">placement:</strong>
                  <span className="text-slate-600"> 'top' | 'bottom' | 'left' | 'right' - Pointer position (default: 'bottom')</span>
                </div>
                <div>
                  <strong className="text-slate-900">showPointer:</strong>
                  <span className="text-slate-600"> boolean - Show triangular pointer (default: false)</span>
                </div>
              </div>
            </div>
          </div>

          {/* Type Definitions */}
          <div className="space-y-3">
            <h3 className="text-slate-700">TypeScript Type Definitions</h3>
            <div className="p-4 bg-slate-900 text-slate-100 rounded-lg text-sm overflow-x-auto">
              <pre>{`type PennyTipPlacement = 'top' | 'bottom' | 'left' | 'right';
type PennyTipDensity = 'standard' | 'compact';
type PennyTipIcon = 'sparkles' | 'lightbulb' | 'info' | 'star' | 'zap' | React.ReactNode;

interface PennyTipProps {
  tipText: string;
  contextLabel?: string;
  ctaText?: string;
  ctaHref?: string;
  onCTAClick?: () => void;
  icon?: PennyTipIcon;
  onDismiss?: () => void;
  showDismiss?: boolean;
  placement?: PennyTipPlacement;
  density?: PennyTipDensity;
  showPointer?: boolean;
  variant?: 'neutral' | 'info' | 'accent';
}`}</pre>
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-lg">
            <p className="text-sm text-emerald-900">
              <strong>Accessibility Features:</strong> Semantic role="note" with aria-live="polite" for screen reader announcements, 
              WCAG AA contrast on all text variants (slate-900 on white/blue-50/emerald-50 backgrounds), 
              Dismiss button includes aria-label="Dismiss tip" for screen readers, 
              Visible focus ring on dismiss button (ring-2 ring-emerald-500) and CTA links, 
              Icon marked with aria-hidden="true" (meaning conveyed by text), 
              Context label provides semantic categorization of tip type, 
              Keyboard accessible: Tab to dismiss button/CTA, Enter/Space to activate, 
              No color-only meaning (variant colors reinforced by icon and label), 
              Pointer decorative only (doesn't affect accessibility), 
              CTA links have underline for clear affordance and proper focus states.
            </p>
          </div>

          {/* Usage Guidelines */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Usage Guidelines</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
              <div className="p-3 bg-emerald-50 rounded-lg border border-emerald-200">
                <div className="flex items-center gap-2 mb-2">
                  <CheckCircle className="h-4 w-4 text-emerald-700" />
                  <strong className="text-emerald-900">Do:</strong>
                </div>
                <ul className="text-emerald-800 space-y-1 ml-6 list-disc">
                  <li>Keep messages short and scannable (1-2 lines)</li>
                  <li>Use contextual placement near related UI elements</li>
                  <li>Provide dismiss functionality for non-critical tips</li>
                  <li>Use context labels to categorize tip types</li>
                  <li>Match variant to tip urgency/importance</li>
                  <li>Add CTAs when action is needed</li>
                  <li>Use compact density in tight spaces</li>
                  <li>Show pointer for true popover contexts</li>
                  <li>Ensure tips are dismissible by default</li>
                </ul>
              </div>
              <div className="p-3 bg-rose-50 rounded-lg border border-rose-200">
                <div className="flex items-center gap-2 mb-2">
                  <AlertCircle className="h-4 w-4 text-rose-700" />
                  <strong className="text-rose-900">Don't:</strong>
                </div>
                <ul className="text-rose-800 space-y-1 ml-6 list-disc">
                  <li>Don't write long paragraphs (keep to 2-3 lines max)</li>
                  <li>Don't show multiple tips simultaneously</li>
                  <li>Don't use for critical system errors (use alerts)</li>
                  <li>Don't forget to provide onDismiss handler</li>
                  <li>Don't overuse—causes banner blindness</li>
                  <li>Don't hide dismiss button on dismissible tips</li>
                  <li>Don't rely on color alone to convey meaning</li>
                  <li>Don't show the same tip repeatedly after dismiss</li>
                  <li>Don't use pointers without proper positioning</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Best Practices */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Best Practices for Penny Tips</h4>
            <div className="space-y-2 text-sm text-blue-900">
              <div>
                <strong>Timing:</strong> Show tips at contextually relevant moments (e.g., before quiz, when streak is active, on new feature launch).
              </div>
              <div>
                <strong>Frequency:</strong> Limit to 1-2 tips per page. Respect user dismissals—don't show same tip repeatedly.
              </div>
              <div>
                <strong>Tone:</strong> Keep language friendly, supportive, and encouraging. Match Penny's AI guide persona.
              </div>
              <div>
                <strong>Persistence:</strong> Store dismissal state (localStorage, user preferences) to avoid showing dismissed tips again.
              </div>
              <div>
                <strong>CTAs:</strong> Only include CTAs when there's a clear next action. Keep CTA text action-oriented.
              </div>
              <div>
                <strong>Context Labels:</strong> Use consistent categories: Study Tip, Navigation, Reminder, Progress Update, What's New, Community.
              </div>
              <div>
                <strong>Icons:</strong> Match icons to context (lightbulb for suggestions, star for achievements, info for general guidance).
              </div>
            </div>
          </div>

          {/* Use Cases */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Use Cases</h4>
            <ul className="text-sm text-blue-900 space-y-1 ml-5 list-disc">
              <li><strong>Study Nudges:</strong> Remind learners to review material before quizzes or save progress</li>
              <li><strong>Navigation Help:</strong> Guide users to features they haven't discovered yet</li>
              <li><strong>Progress Celebrations:</strong> Acknowledge achievements and streaks to maintain motivation</li>
              <li><strong>Feature Announcements:</strong> Introduce new functionality or content updates</li>
              <li><strong>Contextual Hints:</strong> Provide just-in-time help related to current task</li>
              <li><strong>Smart Recommendations:</strong> Suggest next steps based on AI analysis of learner behavior</li>
              <li><strong>Deadline Reminders:</strong> Alert about upcoming due dates or scheduled events</li>
              <li><strong>Community Engagement:</strong> Encourage participation in forums or peer collaboration</li>
              <li><strong>Form Assistance:</strong> Offer guidance when filling out complex forms or settings</li>
              <li><strong>Error Prevention:</strong> Warn about common mistakes before they happen</li>
            </ul>
          </div>

          {/* Design Tokens Used */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Design Tokens & Components Used</h3>
            <div className="flex flex-wrap gap-2">
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">bg-white / bg-blue-50 / bg-emerald-50</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">rounded-lg (8px radius)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">border-slate-200 / border-blue-200 / border-emerald-200</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">shadow-md (level 2 elevation)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">p-3, p-4 (12px, 16px padding)</span>
              <span className="px-3 py-1 bg-violet-100 text-violet-700 rounded">gap-3 (12px spacing)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">text-slate-900 (primary text)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">text-slate-600 (context label)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">text-emerald-700 (CTA links)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">text-slate-400 (dismiss icon)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">h-4 w-4 / h-5 w-5 (icon sizes)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">text-sm / text-xs (typography)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">ring-2 ring-emerald-500 (focus states)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Lucide icons (X, Sparkles, Lightbulb, etc.)</span>
              <span className="px-3 py-1 bg-slate-100 text-slate-700 rounded">Triangular pointer (CSS borders)</span>
            </div>
          </div>

          {/* Animation Suggestions */}
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <h4 className="text-slate-900 mb-2">Animation & Transition Suggestions</h4>
            <div className="space-y-2 text-sm text-blue-900">
              <div>
                <strong>Entry:</strong> Fade in + gentle slide from placement direction (200-300ms). Use when tip first appears.
              </div>
              <div>
                <strong>Dismissal:</strong> Fade out + scale down slightly (150-200ms). Provides clear feedback on dismiss action.
              </div>
              <div>
                <strong>Hover States:</strong> Subtle background darkening on dismiss button, color shift on CTA links (already implemented).
              </div>
              <div>
                <strong>Focus States:</strong> Ring appears with smooth transition (already implemented with focus:ring-2).
              </div>
              <div>
                <strong>Avoid:</strong> Bouncing, spinning, or distracting animations that compete with content.
              </div>
            </div>
          </div>

          {/* Integration with Other Components */}
          <div className="space-y-3">
            <h3 className="text-slate-700">Integration Examples</h3>
            <p className="text-sm text-slate-600 mb-3">
              Penny Tips work seamlessly with other TTDS components in various contexts.
            </p>
            <div className="bg-slate-50 rounded-lg border border-slate-200 p-6">
              <div className="space-y-6">
                {/* With Assignment Card */}
                <div>
                  <h4 className="text-slate-900 mb-3">With Assignment Card</h4>
                  <div className="space-y-3 max-w-2xl">
                    <AssignmentCard
                      title="Build a Lightning Web Component"
                      description="Create a custom LWC that displays account data with filtering capabilities and proper error handling."
                      coachName="Sarah Martinez"
                      submissionStatus="in-progress"
                      resources={[
                        { type: 'file', label: 'LWC Starter Template.zip' },
                        { type: 'link', label: 'LWC Documentation' }
                      ]}
                    />
                    <PennyTip
                      tipText="Stuck? Review the LWC documentation or ask for help in the community forum."
                      contextLabel="Study Tip"
                      icon="lightbulb"
                      ctaText="View resources"
                      onCTAClick={() => {}}
                      density="compact"
                      onDismiss={() => {}}
                    />
                  </div>
                </div>

                {/* With Learning Activity Card */}
                <div>
                  <h4 className="text-slate-900 mb-3">With Learning Activity Card</h4>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <LearningActivityCard
                      activityType="study-group"
                      title="Apex Triggers Deep Dive"
                      description="Collaborative session covering trigger best practices and bulkification patterns"
                      tags={['Apex', 'Triggers', 'Database']}
                    />
                    <div className="flex items-center">
                      <PennyTip
                        tipText="This module builds on your trigger knowledge. Review bulkification first!"
                        icon="info"
                        variant="info"
                        density="compact"
                        onDismiss={() => {}}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Community Post Card Section */}
        <section id="communitypost" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Community Post Card</h2>
            <p className="text-slate-600">
              Domain component for Template 5 — Community Feed. Displays community posts with author info, context, post type, engagement metadata, and tags. Supports Question, Win, and Resource post types with variants for density and context presence.
            </p>
          </div>

          {/* Post Type Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Post Type Variants</h3>
              <p className="text-sm text-slate-600">Three post types with distinct indicators and styling</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <TTCommunityPostCard
                postType="question"
                authorName="Sarah Chen"
                authorRole="Career Switcher"
                authorAvatar="SC"
                timeAgo="2h ago"
                title="How do I prepare for a technical interview in cybersecurity?"
                excerpt="I have my first technical interview next week and I'm not sure what to expect. Should I focus more on theory or hands-on scenarios?"
                replyCount={12}
                lastActivity="45m ago"
                tags={["Career Advice", "Cybersecurity", "Interview Prep"]}
                context={{
                  trail: "Cybersecurity Foundations",
                  program: "Career Transition"
                }}
              />
              <TTCommunityPostCard
                postType="win"
                authorName="Marcus Thompson"
                authorRole="Program Graduate"
                authorAvatar="MT"
                timeAgo="1d ago"
                title="Just landed my first job as a Junior Developer!"
                excerpt="After 6 months in the program, I accepted an offer today. The mock interviews and portfolio projects made all the difference. Thank you to this amazing community!"
                replyCount={47}
                lastActivity="3h ago"
                tags={["Success Story", "Job Search", "Web Development"]}
                context={{
                  trail: "Full Stack Development",
                  program: "Career Transition"
                }}
              />
              <TTCommunityPostCard
                postType="resource"
                authorName="Alex Rivera"
                authorRole="Mentor"
                authorAvatar="AR"
                timeAgo="3d ago"
                title="Free Certification Study Guide - CompTIA A+"
                excerpt="I compiled a comprehensive study guide with practice questions and hands-on labs. This helped me pass the exam on my first try."
                replyCount={28}
                lastActivity="1d ago"
                tags={["Certification", "Study Resources", "IT Support"]}
                context={{
                  trail: "IT Support Specialist",
                  program: "Skills Development"
                }}
              />
            </div>
          </div>

          {/* With and Without Context */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Context Variants</h3>
              <p className="text-sm text-slate-600">Posts with and without trail/program context</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TTCommunityPostCard
                postType="question"
                authorName="Jamie Lee"
                authorRole="Active Learner"
                authorAvatar="JL"
                timeAgo="5h ago"
                title="Best practices for Git branching strategies?"
                excerpt="Our team is growing and we need to standardize our workflow. What branching strategy works best for small teams?"
                replyCount={8}
                lastActivity="2h ago"
                tags={["Git", "Version Control", "Best Practices"]}
                context={{
                  trail: "Full Stack Development",
                  program: "Career Transition"
                }}
              />
              <TTCommunityPostCard
                postType="question"
                authorName="Taylor Morgan"
                authorRole="Community Member"
                authorAvatar="TM"
                timeAgo="4h ago"
                title="Networking events worth attending?"
                excerpt="Looking for recommendations on tech networking events in the Pacific Northwest. What events have you found valuable?"
                replyCount={15}
                lastActivity="1h ago"
                tags={["Networking", "Events", "Career Development"]}
              />
            </div>
          </div>

          {/* Density Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Density Variants</h3>
              <p className="text-sm text-slate-600">Default and compact display modes</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="text-sm text-slate-700">Default Density</div>
                <TTCommunityPostCard
                  postType="win"
                  authorName="Jordan Wells"
                  authorRole="Program Graduate"
                  authorAvatar="JW"
                  timeAgo="2d ago"
                  title="Completed my first open source contribution!"
                  excerpt="I was nervous to contribute to open source, but the community was incredibly welcoming. My first PR just got merged!"
                  replyCount={19}
                  lastActivity="12h ago"
                  tags={["Open Source", "Milestone", "Community"]}
                  context={{
                    trail: "Full Stack Development"
                  }}
                  density="default"
                />
              </div>
              <div className="space-y-4">
                <div className="text-sm text-slate-700">Compact Density</div>
                <TTCommunityPostCard
                  postType="win"
                  authorName="Jordan Wells"
                  authorRole="Program Graduate"
                  authorAvatar="JW"
                  timeAgo="2d ago"
                  title="Completed my first open source contribution!"
                  excerpt="I was nervous to contribute to open source, but the community was incredibly welcoming. My first PR just got merged!"
                  replyCount={19}
                  lastActivity="12h ago"
                  tags={["Open Source", "Milestone", "Community"]}
                  context={{
                    trail: "Full Stack Development"
                  }}
                  density="compact"
                />
              </div>
            </div>
          </div>

          {/* Tag Count Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Tag Variations</h3>
              <p className="text-sm text-slate-600">Different numbers of tags with proper wrapping</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TTCommunityPostCard
                postType="resource"
                authorName="Casey Park"
                authorRole="Mentor"
                authorAvatar="CP"
                timeAgo="1w ago"
                title="Ultimate Portfolio Template Collection"
                excerpt="A collection of portfolio templates designed specifically for career switchers. Includes examples from successful graduates."
                replyCount={52}
                lastActivity="2d ago"
                tags={["Portfolio"]}
                context={{
                  trail: "Career Development"
                }}
              />
              <TTCommunityPostCard
                postType="resource"
                authorName="Riley Brooks"
                authorRole="Mentor"
                authorAvatar="RB"
                timeAgo="5d ago"
                title="Comprehensive Guide to Technical Writing"
                excerpt="Everything you need to know about writing technical documentation, from README files to API docs."
                replyCount={31}
                lastActivity="1d ago"
                tags={["Technical Writing", "Documentation", "Communication", "Career Skills", "Professional Development"]}
                context={{
                  trail: "Professional Skills",
                  program: "Skills Development"
                }}
              />
            </div>
          </div>

          {/* Engagement States */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Engagement States</h3>
              <p className="text-sm text-slate-600">Various levels of community engagement</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <TTCommunityPostCard
                postType="question"
                authorName="Pat Anderson"
                authorRole="New Member"
                authorAvatar="PA"
                timeAgo="15m ago"
                title="Just starting out - where to begin?"
                excerpt="I'm completely new to tech and feeling overwhelmed. What should be my first step?"
                replyCount={0}
                lastActivity="15m ago"
                tags={["Getting Started", "Advice Needed"]}
              />
              <TTCommunityPostCard
                postType="question"
                authorName="Sam Martinez"
                authorRole="Active Learner"
                authorAvatar="SM"
                timeAgo="6h ago"
                title="Debugging JavaScript async/await issues"
                excerpt="I'm having trouble understanding promise chains and async/await. Can someone explain the difference?"
                replyCount={5}
                lastActivity="4h ago"
                tags={["JavaScript", "Async", "Help Wanted"]}
                context={{
                  trail: "Full Stack Development"
                }}
              />
              <TTCommunityPostCard
                postType="resource"
                authorName="Drew Kim"
                authorRole="Industry Expert"
                authorAvatar="DK"
                timeAgo="2w ago"
                title="2024 Tech Industry Salary Guide"
                excerpt="Comprehensive breakdown of tech salaries by role, experience level, and region. Includes remote position data."
                replyCount={156}
                lastActivity="1h ago"
                tags={["Salary", "Career Planning", "Industry Insights"]}
              />
            </div>
          </div>

          {/* Real-world Feed Example */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Community Feed Example</h3>
              <p className="text-sm text-slate-600">Mixed post types as they would appear in Template 5</p>
            </div>
            <div className="space-y-4 max-w-4xl">
              <TTCommunityPostCard
                postType="question"
                authorName="Morgan Hayes"
                authorRole="Career Switcher"
                authorAvatar="MH"
                timeAgo="1h ago"
                title="How to explain career gap in interviews?"
                excerpt="I took 18 months off to complete this program. How do I address this in interviews without it being a red flag?"
                replyCount={23}
                lastActivity="30m ago"
                tags={["Interview Tips", "Career Transition", "Advice"]}
                context={{
                  program: "Career Transition"
                }}
              />
              <TTCommunityPostCard
                postType="win"
                authorName="Alex Patel"
                authorRole="Program Graduate"
                authorAvatar="AP"
                timeAgo="3h ago"
                title="Passed AWS Solutions Architect exam!"
                excerpt="Third attempt was the charm! The study group and practice exams from the community were invaluable."
                replyCount={34}
                lastActivity="1h ago"
                tags={["AWS", "Certification", "Cloud Computing", "Achievement"]}
                context={{
                  trail: "Cloud Architecture",
                  program: "Skills Development"
                }}
              />
              <TTCommunityPostCard
                postType="resource"
                authorName="Robin Chen"
                authorRole="Mentor"
                authorAvatar="RC"
                timeAgo="1d ago"
                title="Free Resume Review Template & Checklist"
                excerpt="I've reviewed 100+ resumes as a hiring manager. Here's my template for self-reviewing your resume before applying."
                replyCount={89}
                lastActivity="4h ago"
                tags={["Resume", "Job Search", "Career Resources"]}
              />
              <TTCommunityPostCard
                postType="question"
                authorName="Taylor Swift"
                authorRole="Active Learner"
                authorAvatar="TS"
                timeAgo="2d ago"
                title="React vs Vue for beginners?"
                excerpt="I need to choose a framework for my capstone project. Which one has better learning resources and job prospects?"
                replyCount={41}
                lastActivity="8h ago"
                tags={["React", "Vue", "Framework Choice", "Advice Needed"]}
                context={{
                  trail: "Full Stack Development"
                }}
                density="compact"
              />
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Accessibility Features</h3>
              <p className="text-sm text-slate-600">WCAG AA compliant with semantic HTML and ARIA labels</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Semantic HTML Structure</div>
                  <div className="text-sm text-slate-600">Uses article, header, and time elements for proper document outline</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">ARIA Labels</div>
                  <div className="text-sm text-slate-600">Descriptive labels for all interactive elements and metadata</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Keyboard Navigation</div>
                  <div className="text-sm text-slate-600">Fully navigable with keyboard, clear focus indicators</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Color Contrast</div>
                  <div className="text-sm text-slate-600">All text meets WCAG AA standards (4.5:1 for body, 3:1 for large text)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Screen Reader Support</div>
                  <div className="text-sm text-slate-600">Post type badges, engagement counts, and metadata are properly announced</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Impact Metrics Tile Section */}
        <section id="metrictile" className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
          <div>
            <h2 className="text-slate-900 mb-2">Impact Metrics Tile</h2>
            <p className="text-slate-600">
              Domain component for Vision/Donor pages, Program Overviews, and Dashboard summaries. Presents high-level organizational impact data with bold, emotionally resonant KPIs aligned to TTDS tokens.
            </p>
          </div>

          {/* Layout Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Layout Variants</h3>
              <p className="text-sm text-slate-600">Vertical and horizontal layout options for different use cases</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-sm text-slate-700">Vertical Layout</div>
                <TTMetricTile
                  value="147+"
                  label="Interns Supported"
                  subtext="Since 2024"
                  icon={Users}
                  layout="vertical"
                />
              </div>
              <div className="space-y-3">
                <div className="text-sm text-slate-700">Horizontal Layout</div>
                <TTMetricTile
                  value="32 Projects"
                  label="Nonprofit Projects Delivered"
                  subtext="Across all programs"
                  icon={Target}
                  layout="horizontal"
                />
              </div>
            </div>
          </div>

          {/* Density Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Density Variants</h3>
              <p className="text-sm text-slate-600">Default and compact modes for different contexts</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="text-sm text-slate-700">Default Density</div>
                <TTMetricTile
                  value="1,200 Hours"
                  label="Volunteer Hours Contributed"
                  subtext="This year"
                  icon={Trophy}
                  density="default"
                />
              </div>
              <div className="space-y-3">
                <div className="text-sm text-slate-700">Compact Density</div>
                <TTMetricTile
                  value="1,200 Hours"
                  label="Volunteer Hours Contributed"
                  subtext="This year"
                  icon={Trophy}
                  density="compact"
                />
              </div>
            </div>
          </div>

          {/* Icon Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Icon Usage</h3>
              <p className="text-sm text-slate-600">With and without icons, using TT-branded visuals</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <TTMetricTile
                value="89%"
                label="Program Completion Rate"
                subtext="Past 12 months"
                icon={TrendingUp}
                iconColor="text-emerald-600"
              />
              <TTMetricTile
                value="24"
                label="Partner Organizations"
                subtext="Active collaborations"
                icon={Building2}
                iconColor="text-blue-600"
              />
              <TTMetricTile
                value="500+"
                label="Skills Badges Earned"
                subtext="All time"
              />
            </div>
          </div>

          {/* Subtext Variants */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Supporting Text Options</h3>
              <p className="text-sm text-slate-600">With and without supporting subtext</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <TTMetricTile
                value="15,000+"
                label="Learning Hours Completed"
                subtext="Across all trails and programs"
                icon={BookOpen}
                iconColor="text-violet-600"
              />
              <TTMetricTile
                value="98%"
                label="Learner Satisfaction"
                icon={Star}
                iconColor="text-amber-500"
              />
            </div>
          </div>

          {/* Impact Dashboard Example */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Impact Dashboard Layout</h3>
              <p className="text-sm text-slate-600">Example metrics grid as it would appear on Vision/Donor page</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TTMetricTile
                value="147+"
                label="Interns Supported"
                subtext="Since 2024"
                icon={Users}
                iconColor="text-emerald-600"
                layout="vertical"
              />
              <TTMetricTile
                value="32"
                label="Nonprofit Projects"
                subtext="Successfully delivered"
                icon={Target}
                iconColor="text-blue-600"
                layout="vertical"
              />
              <TTMetricTile
                value="1,200"
                label="Volunteer Hours"
                subtext="This year"
                icon={Trophy}
                iconColor="text-amber-600"
                layout="vertical"
              />
              <TTMetricTile
                value="89%"
                label="Completion Rate"
                subtext="Past 12 months"
                icon={TrendingUp}
                iconColor="text-violet-600"
                layout="vertical"
              />
            </div>
          </div>

          {/* Vision/Donor Page Example */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Vision/Donor Page Hero Metrics</h3>
              <p className="text-sm text-slate-600">Large, bold impact metrics for donor engagement</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <TTMetricTile
                value="500+"
                label="Lives Changed"
                subtext="Career switchers and interns"
                icon={Heart}
                iconColor="text-rose-600"
                layout="vertical"
              />
              <TTMetricTile
                value="$2.4M"
                label="Community Impact"
                subtext="In donated services"
                icon={Compass}
                iconColor="text-emerald-600"
                layout="vertical"
              />
              <TTMetricTile
                value="15 States"
                label="National Reach"
                subtext="And growing"
                icon={MapPin}
                iconColor="text-blue-600"
                layout="vertical"
              />
            </div>
          </div>

          {/* Compact Dashboard Example */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Compact Dashboard View</h3>
              <p className="text-sm text-slate-600">Horizontal compact tiles for dense information displays</p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <TTMetricTile
                value="45"
                label="Active Learners"
                subtext="This month"
                icon={Users}
                iconColor="text-emerald-600"
                layout="horizontal"
                density="compact"
              />
              <TTMetricTile
                value="12"
                label="Projects in Progress"
                subtext="Across 8 nonprofits"
                icon={Zap}
                iconColor="text-amber-600"
                layout="horizontal"
                density="compact"
              />
              <TTMetricTile
                value="87%"
                label="On-Time Delivery"
                subtext="Last quarter"
                icon={CheckCircle}
                iconColor="text-green-600"
                layout="horizontal"
                density="compact"
              />
              <TTMetricTile
                value="28"
                label="Certifications Earned"
                subtext="This month"
                icon={Award}
                iconColor="text-violet-600"
                layout="horizontal"
                density="compact"
              />
            </div>
          </div>

          {/* Different Icon Styles */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Icon Color Variations</h3>
              <p className="text-sm text-slate-600">TT-branded icons with accent colors for emphasis</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <TTMetricTile
                value="156"
                label="GitHub Commits"
                subtext="This week"
                icon={Code}
                iconColor="text-slate-700"
                layout="vertical"
                density="compact"
              />
              <TTMetricTile
                value="23"
                label="Trails Completed"
                subtext="All time"
                icon={MapPin}
                iconColor="text-emerald-600"
                layout="vertical"
                density="compact"
              />
              <TTMetricTile
                value="8"
                label="Mentors Active"
                subtext="This month"
                icon={Lightbulb}
                iconColor="text-amber-500"
                layout="vertical"
                density="compact"
              />
              <TTMetricTile
                value="92%"
                label="Job Placement"
                subtext="Within 6 months"
                icon={TrendingUp}
                iconColor="text-blue-600"
                layout="vertical"
                density="compact"
              />
            </div>
          </div>

          {/* No Icon, Simple Display */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Clean, Text-Only Display</h3>
              <p className="text-sm text-slate-600">Minimal design for maximum impact</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <TTMetricTile
                value="12,450"
                label="Total Learning Hours"
                subtext="Across all programs"
              />
              <TTMetricTile
                value="67"
                label="Partner Projects Delivered"
                subtext="Since launch"
              />
              <TTMetricTile
                value="95%"
                label="Learner Satisfaction"
                subtext="Based on 340 surveys"
              />
            </div>
          </div>

          {/* Accessibility Features */}
          <div className="space-y-4">
            <div>
              <h3 className="text-slate-700 mb-1">Accessibility Features</h3>
              <p className="text-sm text-slate-600">WCAG AA compliant with semantic structure and ARIA labels</p>
            </div>
            <div className="bg-slate-50 rounded-lg p-6 space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">High Contrast Values</div>
                  <div className="text-sm text-slate-600">All metric values meet WCAG AA contrast requirements (4.5:1 minimum)</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Semantic ARIA Labels</div>
                  <div className="text-sm text-slate-600">Screen readers announce full metric context: label, value, and subtext</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">Decorative Icons</div>
                  <div className="text-sm text-slate-600">Icons marked as aria-hidden to prevent redundant announcements</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">No Color-Only Meaning</div>
                  <div className="text-sm text-slate-600">Information conveyed through text and structure, not color alone</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                <div>
                  <div className="text-slate-900">TTDS Token Compliance</div>
                  <div className="text-sm text-slate-600">Uses spacing (12/16/20/24), radius (6-8px), and typography tokens consistently</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Donation CTA Section */}
        <section id="donate" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
            <div>
              <h2 className="text-slate-900 mb-2">Donation CTA Section</h2>
              <p className="text-slate-600">
                High-impact, hero-style section for Vision/Donor pages. Motivates donors with mission story, impact metrics, suggested giving tiers, and primary CTA button.
              </p>
            </div>

            {/* Centered Alignment - Full Example */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Centered Alignment (Default)</h3>
                <p className="text-sm text-slate-600">Standard hero-style layout with centered content</p>
              </div>
              <TTDonateSection
                headline="Help us expand opportunities for new Salesforce talent"
                supportingText="Your support empowers job seekers and strengthens nonprofits through real-world project experience."
                metrics={[
                  { value: '147+', label: 'Interns Supported', subtext: 'Since 2024', icon: Users, iconColor: 'text-emerald-600' },
                  { value: '32', label: 'Nonprofit Projects', subtext: 'Successfully delivered', icon: Target, iconColor: 'text-blue-600' },
                  { value: '1,200', label: 'Volunteer Hours', subtext: 'This year', icon: Trophy, iconColor: 'text-amber-600' },
                  { value: '89%', label: 'Completion Rate', subtext: 'Past 12 months', icon: TrendingUp, iconColor: 'text-violet-600' },
                ]}
                givingTiers={[
                  { amount: '$25', label: 'Supporter' },
                  { amount: '$50', label: 'Advocate' },
                  { amount: '$100', label: 'Champion' },
                  { amount: '$250', label: 'Trailblazer' },
                ]}
                donateButtonLabel="Support Transition Trails"
                microcopy="Tax-deductible 501(c)(3) gift"
                alignment="centered"
                background="light"
                onDonate={() => console.log('Donate clicked')}
                onSelectTier={(tier) => console.log('Selected:', tier.amount)}
              />
            </div>

            {/* Left-Aligned Variant */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Left-Aligned Layout</h3>
                <p className="text-sm text-slate-600">Alternative layout for editorial-style pages</p>
              </div>
              <TTDonateSection
                headline="Together, we can build a more inclusive tech workforce"
                supportingText="Every contribution helps us provide training, mentorship, and real project experience to aspiring professionals."
                metrics={[
                  { value: '500+', label: 'Lives Changed', subtext: 'Career switchers and interns', icon: Heart, iconColor: 'text-rose-600' },
                  { value: '$2.4M', label: 'Community Impact', subtext: 'In donated services', icon: Compass, iconColor: 'text-emerald-600' },
                  { value: '15 States', label: 'National Reach', subtext: 'And growing', icon: MapPin, iconColor: 'text-blue-600' },
                ]}
                givingTiers={[
                  { amount: '$25' },
                  { amount: '$50' },
                  { amount: '$100' },
                  { amount: '$250' },
                ]}
                donateButtonLabel="Donate Now"
                microcopy="Your donation makes a difference"
                alignment="left"
                background="light"
                onDonate={() => console.log('Donate clicked')}
              />
            </div>

            {/* Metrics Count Variants */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">2 Metrics Layout</h3>
                <p className="text-sm text-slate-600">Simplified view for focused messaging</p>
              </div>
              <TTDonateSection
                headline="Your investment creates lasting change"
                metrics={[
                  { value: '95%', label: 'Job Placement Rate', subtext: 'Within 6 months', icon: TrendingUp, iconColor: 'text-emerald-600' },
                  { value: '450', label: 'Skills Badges Earned', subtext: 'This year', icon: Award, iconColor: 'text-violet-600' },
                ]}
                givingTiers={[
                  { amount: '$25' },
                  { amount: '$50' },
                  { amount: '$100' },
                ]}
                donateButtonLabel="Donate"
                alignment="centered"
                background="light"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">3 Metrics Layout</h3>
                <p className="text-sm text-slate-600">Balanced layout for key impact data</p>
              </div>
              <TTDonateSection
                headline="Build bridges to tech careers"
                supportingText="Support learners as they transition into meaningful Salesforce roles."
                metrics={[
                  { value: '67', label: 'Partner Projects', subtext: 'Since launch', icon: Target, iconColor: 'text-blue-600' },
                  { value: '12,450', label: 'Learning Hours', subtext: 'Across all programs', icon: BookOpen, iconColor: 'text-violet-600' },
                  { value: '24', label: 'Partner Orgs', subtext: 'Active collaborations', icon: Building2, iconColor: 'text-emerald-600' },
                ]}
                givingTiers={[
                  { amount: '$50', label: 'Friend' },
                  { amount: '$100', label: 'Partner' },
                  { amount: '$250', label: 'Leader' },
                ]}
                donateButtonLabel="Give Today"
                microcopy="All gifts are tax-deductible"
                alignment="centered"
              />
            </div>

            {/* Giving Tier Variants */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">3-Tier Giving Levels</h3>
                <p className="text-sm text-slate-600">Simplified giving options</p>
              </div>
              <TTDonateSection
                headline="Every dollar counts"
                metrics={[
                  { value: '300+', label: 'Learners Served', icon: Users, iconColor: 'text-emerald-600' },
                  { value: '45', label: 'Active Mentors', icon: Lightbulb, iconColor: 'text-amber-600' },
                ]}
                givingTiers={[
                  { amount: '$25', label: 'Give monthly' },
                  { amount: '$100', label: 'Give quarterly' },
                  { amount: '$500', label: 'Give annually' },
                ]}
                donateButtonLabel="Start Giving"
                alignment="centered"
              />
            </div>

            {/* Dark Background Variant */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Dark Background Theme</h3>
                <p className="text-sm text-slate-600">High contrast for impact and emphasis</p>
              </div>
              <TTDonateSection
                headline="Join us in building pathways to success"
                supportingText="Your generosity creates opportunities that change lives and strengthen communities."
                metrics={[
                  { value: '147+', label: 'Interns Supported', subtext: 'Since 2024', icon: Users, iconColor: 'text-emerald-400' },
                  { value: '32', label: 'Nonprofit Projects', subtext: 'Delivered', icon: Target, iconColor: 'text-blue-400' },
                  { value: '1,200', label: 'Volunteer Hours', subtext: 'This year', icon: Trophy, iconColor: 'text-amber-400' },
                ]}
                givingTiers={[
                  { amount: '$25', label: 'Supporter' },
                  { amount: '$50', label: 'Advocate' },
                  { amount: '$100', label: 'Champion' },
                  { amount: '$250', label: 'Trailblazer' },
                ]}
                donateButtonLabel="Make Your Impact"
                microcopy="Tax-deductible 501(c)(3) gift"
                alignment="centered"
                background="dark"
              />
            </div>

            {/* Interactive Tier Selection */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Interactive Tier Selection</h3>
                <p className="text-sm text-slate-600">Demonstrates tier selection state (click to select)</p>
              </div>
              <InteractiveDonateDemo />
            </div>

            {/* Minimal Version */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Minimal Version - No Metrics</h3>
                <p className="text-sm text-slate-600">Simplified CTA focused on giving levels</p>
              </div>
              <TTDonateSection
                headline="Support our mission"
                supportingText="Your contribution helps us empower the next generation of Salesforce professionals."
                metrics={[]}
                givingTiers={[
                  { amount: '$25' },
                  { amount: '$50' },
                  { amount: '$100' },
                  { amount: '$250' },
                ]}
                donateButtonLabel="Donate"
                microcopy="Secure, tax-deductible donation"
                alignment="centered"
              />
            </div>

            {/* No Subtext Version */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">No Supporting Text</h3>
                <p className="text-sm text-slate-600">Bold headline only for maximum impact</p>
              </div>
              <TTDonateSection
                headline="Transform lives through technology education"
                metrics={[
                  { value: '147+', label: 'Interns Supported', icon: Users, iconColor: 'text-emerald-600' },
                  { value: '32', label: 'Nonprofit Projects', icon: Target, iconColor: 'text-blue-600' },
                  { value: '89%', label: 'Success Rate', icon: TrendingUp, iconColor: 'text-violet-600' },
                ]}
                givingTiers={[
                  { amount: '$50' },
                  { amount: '$100' },
                  { amount: '$250' },
                ]}
                donateButtonLabel="Donate Today"
                alignment="centered"
              />
            </div>

            {/* Accessibility Features */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Accessibility Features</h3>
                <p className="text-sm text-slate-600">WCAG AA compliant with semantic structure and comprehensive ARIA support</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">High Contrast Text</div>
                    <div className="text-sm text-slate-600">Headline and CTA meet WCAG AA contrast requirements (4.5:1 minimum)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Semantic Section Structure</div>
                    <div className="text-sm text-slate-600">Uses semantic &lt;section&gt; with aria-label "Donation call to action"</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Keyboard Navigation</div>
                    <div className="text-sm text-slate-600">All giving tier buttons include visible focus rings and are keyboard accessible</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">ARIA Labels for Tiers</div>
                    <div className="text-sm text-slate-600">Each giving tier has descriptive aria-label and aria-pressed state</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Logical Screen Reader Order</div>
                    <div className="text-sm text-slate-600">Story → Metrics → Giving Levels → CTA button flow</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Region Labels</div>
                    <div className="text-sm text-slate-600">Impact metrics and giving levels wrapped in labeled regions for context</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">No Color-Only Communication</div>
                    <div className="text-sm text-slate-600">Tier selection indicated through multiple visual cues (color, border, text)</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">TTDS Token Compliance</div>
                    <div className="text-sm text-slate-600">Uses spacing (16/24/32/40), radius (8px), and typography tokens throughout</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Program Overview Card Section */}
        <section id="programoverview" className="space-y-6">
          <div className="bg-white rounded-xl shadow-sm border border-slate-200 p-8 space-y-6">
            <div>
              <h2 className="text-slate-900 mb-2">Program Overview Card</h2>
              <p className="text-slate-600">
                Domain component for Program Overview page template. Provides high-level summaries of Transition Trails programs for easy comparison.
              </p>
            </div>

            {/* All 4 Program Types - Full Density with Button CTA */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">All Program Types (Full Density)</h3>
                <p className="text-sm text-slate-600">Displays all required fields including outcomes</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {/* Intern Program */}
                <TTProgramOverviewCard
                  programName="Guided Trail – Admin"
                  whoItsFor="For aspiring Salesforce Admins ready to gain hands-on experience"
                  duration="6 months"
                  programType="intern"
                  icon={GraduationCap}
                  outcomes={[
                    'Hands-on Salesforce project experience',
                    'Resume and portfolio development',
                    'Supported by expert coaches',
                    'Real-world nonprofit collaboration',
                    'Path to Admin certification'
                  ]}
                  ctaLabel="Learn More"
                  density="full"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked: Guided Trail')}
                />

                {/* Associate Program */}
                <TTProgramOverviewCard
                  programName="Trail of Mastery – BA Track"
                  whoItsFor="For Business Analyst professionals seeking advanced skills"
                  duration="8–12 weeks"
                  programType="associate"
                  icon={Shield}
                  outcomes={[
                    'Advanced BA methodologies',
                    'Stakeholder management skills',
                    'Process optimization techniques',
                    'Certification preparation support'
                  ]}
                  ctaLabel="View Program"
                  density="full"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked: Trail of Mastery')}
                />

                {/* Membership Program */}
                <TTProgramOverviewCard
                  programName="Explorer's Journey"
                  whoItsFor="For self-directed learners exploring Salesforce careers"
                  duration="Self-paced"
                  programType="membership"
                  icon={Compass}
                  outcomes={[
                    'Access to learning resources',
                    'Community support and networking',
                    'Monthly skill-building workshops',
                    'Career guidance and mentorship',
                    'Flexible learning schedule'
                  ]}
                  ctaLabel="Join Explorer's Journey"
                  density="full"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked: Explorer Journey')}
                />

                {/* Visitor Program */}
                <TTProgramOverviewCard
                  programName="Visitor Pass"
                  whoItsFor="For those curious about the Salesforce ecosystem"
                  duration="1 month trial"
                  programType="visitor"
                  icon={Eye}
                  outcomes={[
                    'Explore learning paths',
                    'Attend intro workshops',
                    'Connect with community',
                    'No commitment required'
                  ]}
                  ctaLabel="Get Started"
                  density="full"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked: Visitor Pass')}
                />
              </div>
            </div>

            {/* Compact Density Variants */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Compact Density (No Outcomes)</h3>
                <p className="text-sm text-slate-600">Simplified cards for quick comparison grids</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <TTProgramOverviewCard
                  programName="Guided Trail – Developer"
                  whoItsFor="For aspiring Salesforce Developers"
                  duration="6 months"
                  programType="intern"
                  icon={GraduationCap}
                  ctaLabel="Learn More"
                  density="compact"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked')}
                />

                <TTProgramOverviewCard
                  programName="Trail of Mastery – Architect"
                  whoItsFor="For experienced architects seeking mastery"
                  duration="10 weeks"
                  programType="associate"
                  icon={Shield}
                  ctaLabel="View Details"
                  density="compact"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked')}
                />

                <TTProgramOverviewCard
                  programName="Explorer's Journey"
                  whoItsFor="For self-directed learners"
                  duration="Self-paced"
                  programType="membership"
                  icon={Compass}
                  ctaLabel="Join Now"
                  density="compact"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked')}
                />

                <TTProgramOverviewCard
                  programName="Visitor Pass"
                  whoItsFor="For curious newcomers"
                  duration="1 month"
                  programType="visitor"
                  icon={Eye}
                  ctaLabel="Try Free"
                  density="compact"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked')}
                />
              </div>
            </div>

            {/* Link CTA Style */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Link CTA Style</h3>
                <p className="text-sm text-slate-600">Alternative CTA presentation for lighter emphasis</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <TTProgramOverviewCard
                  programName="Guided Trail – Admin"
                  whoItsFor="For aspiring Salesforce Admins"
                  duration="6 months"
                  programType="intern"
                  icon={GraduationCap}
                  outcomes={[
                    'Hands-on project experience',
                    'Portfolio development',
                    'Expert coaching support',
                    'Certification preparation'
                  ]}
                  ctaLabel="Learn more about this program"
                  density="full"
                  ctaStyle="link"
                  onCTAClick={() => console.log('Clicked')}
                />

                <TTProgramOverviewCard
                  programName="Trail of Mastery – BA Track"
                  whoItsFor="For Business Analyst professionals"
                  duration="8–12 weeks"
                  programType="associate"
                  icon={Shield}
                  outcomes={[
                    'Advanced BA skills',
                    'Stakeholder management',
                    'Process optimization'
                  ]}
                  ctaLabel="View program details"
                  density="full"
                  ctaStyle="link"
                  onCTAClick={() => console.log('Clicked')}
                />

                <TTProgramOverviewCard
                  programName="Explorer's Journey"
                  whoItsFor="For self-directed learners"
                  duration="Self-paced"
                  programType="membership"
                  icon={Compass}
                  outcomes={[
                    'Learning resources access',
                    'Community networking',
                    'Monthly workshops',
                    'Career mentorship'
                  ]}
                  ctaLabel="Explore membership options"
                  density="full"
                  ctaStyle="link"
                  onCTAClick={() => console.log('Clicked')}
                />
              </div>
            </div>

            {/* Mixed Layout Examples */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">2-Column Layout</h3>
                <p className="text-sm text-slate-600">Common layout for feature comparison pages</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TTProgramOverviewCard
                  programName="Guided Trail – Full Stack"
                  whoItsFor="For aspiring full-stack Salesforce developers seeking comprehensive training"
                  duration="9 months"
                  programType="intern"
                  icon={GraduationCap}
                  outcomes={[
                    'Full-stack development experience',
                    'Front-end and back-end skills',
                    'Integration patterns mastery',
                    'Real project deployment',
                    'Professional portfolio pieces'
                  ]}
                  ctaLabel="Explore Full Stack Track"
                  density="full"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked')}
                />

                <TTProgramOverviewCard
                  programName="Professional Membership"
                  whoItsFor="For working professionals wanting ongoing skill development"
                  duration="Annual membership"
                  programType="membership"
                  icon={Briefcase}
                  outcomes={[
                    'Unlimited resource access',
                    'Priority workshop registration',
                    'Professional networking events',
                    '1-on-1 quarterly coaching',
                    'Exclusive community channels'
                  ]}
                  ctaLabel="Join Professional Tier"
                  density="full"
                  ctaStyle="button"
                  onCTAClick={() => console.log('Clicked')}
                />
              </div>
            </div>

            {/* 3-Column Grid */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">3-Column Grid</h3>
                <p className="text-sm text-slate-600">Balanced layout for program comparison</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <TTProgramOverviewCard
                  programName="Guided Trail – Admin"
                  whoItsFor="For aspiring Admins"
                  duration="6 months"
                  programType="intern"
                  icon={GraduationCap}
                  outcomes={[
                    'Project experience',
                    'Portfolio building',
                    'Expert coaching'
                  ]}
                  ctaLabel="Learn More"
                  density="full"
                  ctaStyle="button"
                />

                <TTProgramOverviewCard
                  programName="Explorer's Journey"
                  whoItsFor="For self-directed learners"
                  duration="Self-paced"
                  programType="membership"
                  icon={Compass}
                  outcomes={[
                    'Learning resources',
                    'Community support',
                    'Flexible schedule'
                  ]}
                  ctaLabel="Join Now"
                  density="full"
                  ctaStyle="button"
                />

                <TTProgramOverviewCard
                  programName="Visitor Pass"
                  whoItsFor="For curious newcomers"
                  duration="1 month"
                  programType="visitor"
                  icon={Eye}
                  outcomes={[
                    'Explore paths',
                    'Attend workshops',
                    'No commitment'
                  ]}
                  ctaLabel="Get Started"
                  density="full"
                  ctaStyle="button"
                />
              </div>
            </div>

            {/* Without Icons */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Without Icons</h3>
                <p className="text-sm text-slate-600">Simplified visual treatment</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <TTProgramOverviewCard
                  programName="Guided Trail – Data Analytics"
                  whoItsFor="For aspiring data analysts and reporting specialists"
                  duration="6 months"
                  programType="intern"
                  outcomes={[
                    'Tableau CRM fundamentals',
                    'Dashboard design best practices',
                    'Data modeling expertise',
                    'Storytelling with data'
                  ]}
                  ctaLabel="View Program"
                  density="full"
                  ctaStyle="button"
                />

                <TTProgramOverviewCard
                  programName="Trail of Mastery – Integration"
                  whoItsFor="For developers mastering integration patterns"
                  duration="10 weeks"
                  programType="associate"
                  outcomes={[
                    'API design patterns',
                    'Middleware solutions',
                    'Security best practices',
                    'Performance optimization'
                  ]}
                  ctaLabel="Explore Track"
                  density="full"
                  ctaStyle="button"
                />
              </div>
            </div>

            {/* Accessibility Features */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Accessibility Features</h3>
                <p className="text-sm text-slate-600">WCAG AA compliant with comprehensive semantic structure</p>
              </div>
              <div className="bg-slate-50 rounded-lg p-6 space-y-3">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">WCAG AA Contrast Compliance</div>
                    <div className="text-sm text-slate-600">All text meets minimum 4.5:1 contrast ratio against backgrounds</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Semantic HTML Structure</div>
                    <div className="text-sm text-slate-600">Proper heading hierarchy and list semantics for outcomes</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Clear Keyboard Focus</div>
                    <div className="text-sm text-slate-600">Visible focus outline on CTA buttons and links with proper focus ring</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Logical Screen Reader Order</div>
                    <div className="text-sm text-slate-600">Program name → type → audience → duration → outcomes → CTA flow</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Descriptive ARIA Labels</div>
                    <div className="text-sm text-slate-600">CTA buttons include program name context for screen readers</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Program Type Indicators</div>
                    <div className="text-sm text-slate-600">Chips use text labels, not color alone, with accessible contrast</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">Hover and Transition Effects</div>
                    <div className="text-sm text-slate-600">Subtle shadow transition on hover provides visual feedback</div>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <div className="text-slate-900">TTDS Token Compliance</div>
                    <div className="text-sm text-slate-600">Uses spacing (12/16/20/24), radius (8px), typography, and card tokens</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Layout Integration Example */}
            <div className="space-y-4">
              <div>
                <h3 className="text-slate-700 mb-1">Template Integration Example</h3>
                <p className="text-sm text-slate-600">How cards appear in the Program Overview page template</p>
              </div>
              <div className="bg-gradient-to-br from-slate-50 to-emerald-50/30 rounded-lg p-8 space-y-6">
                <div className="text-center space-y-2">
                  <h4 className="text-2xl text-slate-900">Explore Our Programs</h4>
                  <p className="text-slate-600 max-w-2xl mx-auto">
                    Choose the learning path that matches your goals and experience level. 
                    Each program is designed to help you build real skills and launch your Salesforce career.
                  </p>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                  <TTProgramOverviewCard
                    programName="Guided Trail"
                    whoItsFor="For career switchers and new professionals"
                    duration="6 months"
                    programType="intern"
                    icon={GraduationCap}
                    outcomes={[
                      'Real project experience',
                      'Portfolio development',
                      'Certification preparation',
                      'Job placement support'
                    ]}
                    ctaLabel="Learn More"
                    density="full"
                    ctaStyle="button"
                  />

                  <TTProgramOverviewCard
                    programName="Trail of Mastery"
                    whoItsFor="For experienced professionals advancing skills"
                    duration="8–12 weeks"
                    programType="associate"
                    icon={Shield}
                    outcomes={[
                      'Advanced techniques',
                      'Leadership development',
                      'Specialized tracks',
                      'Industry recognition'
                    ]}
                    ctaLabel="Learn More"
                    density="full"
                    ctaStyle="button"
                  />

                  <TTProgramOverviewCard
                    programName="Explorer's Journey"
                    whoItsFor="For independent learners"
                    duration="Self-paced"
                    programType="membership"
                    icon={Compass}
                    outcomes={[
                      'Resource library',
                      'Community access',
                      'Monthly workshops',
                      'Flexible learning'
                    ]}
                    ctaLabel="Join Now"
                    density="full"
                    ctaStyle="button"
                  />

                  <TTProgramOverviewCard
                    programName="Visitor Pass"
                    whoItsFor="For those exploring options"
                    duration="1 month trial"
                    programType="visitor"
                    icon={Eye}
                    outcomes={[
                      'Try before committing',
                      'Explore resources',
                      'Join intro sessions',
                      'No strings attached'
                    ]}
                    ctaLabel="Start Free"
                    density="full"
                    ctaStyle="button"
                  />
                </div>
              </div>
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