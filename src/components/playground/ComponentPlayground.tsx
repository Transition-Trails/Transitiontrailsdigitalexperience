import React, { useState } from 'react';
import { 
  Play, 
  Code, 
  RefreshCw, 
  Copy, 
  Check,
  ChevronDown,
  ChevronRight,
  Settings,
  Eye
} from 'lucide-react';
import { Button } from '../ttds/Button';
import { Card } from '../ttds/Card';
import { Tag } from '../ttds/Tag';
import { ChipStatus } from '../ttds/ChipStatus';
import { ChipLevel } from '../ttds/ChipLevel';
import { Badge } from '../ttds/Badge';
import { EventSessionCard } from '../ttds/EventSessionCard';
import { PartnerProjectCard } from '../ttds/PartnerProjectCard';
import { TTCommunityPostCard } from '../tt/CommunityPostCard';
import { AdvancedPlaygroundFeatures } from './AdvancedPlayground';

type PlaygroundComponent = 
  | 'Button' 
  | 'Card' 
  | 'Tag' 
  | 'ChipStatus' 
  | 'ChipLevel'
  | 'Badge'
  | 'EventSessionCard'
  | 'PartnerProjectCard'
  | 'CommunityPostCard';

interface PropControl {
  name: string;
  type: 'select' | 'text' | 'number' | 'boolean' | 'color';
  options?: string[];
  default: any;
  description?: string;
}

interface ComponentConfig {
  id: PlaygroundComponent;
  name: string;
  description: string;
  category: string;
  props: PropControl[];
}

const componentConfigs: ComponentConfig[] = [
  {
    id: 'Button',
    name: 'Button',
    description: 'Interactive button with multiple variants and states',
    category: 'Primitive',
    props: [
      {
        name: 'variant',
        type: 'select',
        options: ['primary', 'secondary', 'tertiary', 'ghost', 'danger'],
        default: 'primary',
        description: 'Visual style variant'
      },
      {
        name: 'size',
        type: 'select',
        options: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'Button size'
      },
      {
        name: 'children',
        type: 'text',
        default: 'Click Me',
        description: 'Button text'
      },
      {
        name: 'disabled',
        type: 'boolean',
        default: false,
        description: 'Disabled state'
      },
      {
        name: 'fullWidth',
        type: 'boolean',
        default: false,
        description: 'Full width button'
      }
    ]
  },
  {
    id: 'Card',
    name: 'Card',
    description: 'Container component with elevation and padding options',
    category: 'Primitive',
    props: [
      {
        name: 'elevation',
        type: 'select',
        options: ['none', 'low', 'medium', 'high'],
        default: 'low',
        description: 'Shadow depth'
      },
      {
        name: 'padding',
        type: 'select',
        options: ['none', 'sm', 'md', 'lg'],
        default: 'md',
        description: 'Internal padding'
      },
      {
        name: 'children',
        type: 'text',
        default: 'Card content goes here',
        description: 'Card content'
      }
    ]
  },
  {
    id: 'Tag',
    name: 'Tag',
    description: 'Category and label tags with multiple variants',
    category: 'Primitive',
    props: [
      {
        name: 'variant',
        type: 'select',
        options: ['category', 'skill', 'trail', 'platform', 'tech'],
        default: 'category',
        description: 'Tag variant'
      },
      {
        name: 'label',
        type: 'text',
        default: 'React',
        description: 'Tag label'
      },
      {
        name: 'size',
        type: 'select',
        options: ['sm', 'md', 'lg'],
        default: 'md',
        description: 'Tag size'
      }
    ]
  },
  {
    id: 'ChipStatus',
    name: 'Chip Status',
    description: 'Status indicator chip with semantic variants',
    category: 'Primitive',
    props: [
      {
        name: 'variant',
        type: 'select',
        options: ['success', 'warning', 'info', 'critical', 'neutral'],
        default: 'success',
        description: 'Status variant'
      },
      {
        name: 'label',
        type: 'text',
        default: 'Active',
        description: 'Status label'
      },
      {
        name: 'icon',
        type: 'boolean',
        default: true,
        description: 'Show icon'
      }
    ]
  },
  {
    id: 'ChipLevel',
    name: 'Chip Level',
    description: 'Skill level indicator chip',
    category: 'Primitive',
    props: [
      {
        name: 'variant',
        type: 'select',
        options: ['beginner', 'intermediate', 'advanced', 'expert'],
        default: 'intermediate',
        description: 'Level variant'
      }
    ]
  },
  {
    id: 'Badge',
    name: 'Badge',
    description: 'Notification badge with count',
    category: 'Primitive',
    props: [
      {
        name: 'count',
        type: 'number',
        default: 5,
        description: 'Badge count'
      },
      {
        name: 'variant',
        type: 'select',
        options: ['primary', 'secondary', 'danger'],
        default: 'primary',
        description: 'Badge variant'
      },
      {
        name: 'max',
        type: 'number',
        default: 99,
        description: 'Maximum count to display'
      }
    ]
  }
];

export const ComponentPlayground: React.FC = () => {
  const [selectedComponent, setSelectedComponent] = useState<PlaygroundComponent>('Button');
  const [propValues, setPropValues] = useState<Record<string, any>>({});
  const [copiedCode, setCopiedCode] = useState(false);
  const [showCode, setShowCode] = useState(true);

  const currentConfig = componentConfigs.find(c => c.id === selectedComponent);

  // Initialize prop values when component changes
  React.useEffect(() => {
    if (currentConfig) {
      const defaultValues: Record<string, any> = {};
      currentConfig.props.forEach(prop => {
        defaultValues[prop.name] = prop.default;
      });
      setPropValues(defaultValues);
    }
  }, [selectedComponent]);

  // Keyboard shortcuts
  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Cmd+K or Ctrl+K to copy code
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        copyCode();
      }
      // Cmd+R or Ctrl+R to reset
      if ((e.metaKey || e.ctrlKey) && e.key === 'r') {
        e.preventDefault();
        handleReset();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [propValues]);

  const handlePropChange = (propName: string, value: any) => {
    setPropValues(prev => ({
      ...prev,
      [propName]: value
    }));
  };

  const handleReset = () => {
    if (currentConfig) {
      const defaultValues: Record<string, any> = {};
      currentConfig.props.forEach(prop => {
        defaultValues[prop.name] = prop.default;
      });
      setPropValues(defaultValues);
    }
  };

  const generateCode = () => {
    if (!currentConfig) return '';
    
    const props = Object.entries(propValues)
      .filter(([key, value]) => {
        const propConfig = currentConfig.props.find(p => p.name === key);
        return propConfig && value !== propConfig.default;
      })
      .map(([key, value]) => {
        if (typeof value === 'string') {
          return `${key}="${value}"`;
        } else if (typeof value === 'boolean') {
          return value ? key : '';
        } else {
          return `${key}={${value}}`;
        }
      })
      .filter(Boolean)
      .join('\n  ');

    const childrenValue = propValues.children;
    const hasChildren = childrenValue !== undefined;

    if (hasChildren && currentConfig.id !== 'Card') {
      return `<${currentConfig.id}${props ? `\n  ${props}` : ''}>
  ${childrenValue}
</${currentConfig.id}>`;
    } else if (hasChildren && currentConfig.id === 'Card') {
      return `<${currentConfig.id}${props ? `\n  ${props}` : ''}>
  <div className="p-4">
    ${childrenValue}
  </div>
</${currentConfig.id}>`;
    }

    return `<${currentConfig.id}${props ? `\n  ${props}` : ''} />`;
  };

  const copyCode = async () => {
    await navigator.clipboard.writeText(generateCode());
    setCopiedCode(true);
    setTimeout(() => setCopiedCode(false), 2000);
  };

  const renderComponent = () => {
    if (!currentConfig) return null;

    switch (selectedComponent) {
      case 'Button':
        return (
          <Button
            variant={propValues.variant as any}
            size={propValues.size as any}
            disabled={propValues.disabled}
            fullWidth={propValues.fullWidth}
            onClick={() => alert('Button clicked!')}
          >
            {propValues.children}
          </Button>
        );

      case 'Card':
        return (
          <Card
            elevation={propValues.elevation as any}
            padding={propValues.padding as any}
          >
            <div className="space-y-2">
              <h3 className="text-slate-900">{propValues.children}</h3>
              <p className="text-sm text-slate-600">
                This is example content inside the card component.
              </p>
            </div>
          </Card>
        );

      case 'Tag':
        return (
          <Tag
            variant={propValues.variant as any}
            label={propValues.label}
            size={propValues.size as any}
          />
        );

      case 'ChipStatus':
        return (
          <ChipStatus
            variant={propValues.variant as any}
            label={propValues.label}
            icon={propValues.icon}
          />
        );

      case 'ChipLevel':
        return <ChipLevel variant={propValues.variant as any} />;

      case 'Badge':
        return (
          <div className="inline-flex items-center gap-2">
            <span className="text-sm text-slate-700">Notifications</span>
            <Badge
              count={propValues.count}
              variant={propValues.variant as any}
              max={propValues.max}
            />
          </div>
        );

      default:
        return <div>Component not found</div>;
    }
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="bg-gradient-to-r from-emerald-50 to-teal-50 rounded-xl p-8 border border-emerald-200">
        <div className="flex items-start gap-4">
          <div className="p-3 bg-emerald-500 text-white rounded-lg">
            <Play className="h-8 w-8" />
          </div>
          <div className="flex-1">
            <h1 className="text-xl text-slate-900 mb-2" style={{ fontWeight: 700 }}>
              Interactive Component Playground
            </h1>
            <p className="text-sm text-slate-700 mb-4">
              Experiment with TTDS components in real-time. Modify props, see instant updates,
              and copy the generated code for use in your projects.
            </p>
            <div className="flex flex-wrap gap-2">
              <div className="px-3 py-1.5 bg-white rounded-lg border border-emerald-200 text-xs text-emerald-700" style={{ fontWeight: 600 }}>
                <Play className="h-3 w-3 inline mr-1" />
                Live Preview
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-teal-200 text-xs text-teal-700" style={{ fontWeight: 600 }}>
                <Code className="h-3 w-3 inline mr-1" />
                Code Generation
              </div>
              <div className="px-3 py-1.5 bg-white rounded-lg border border-blue-200 text-xs text-blue-700" style={{ fontWeight: 600 }}>
                <Settings className="h-3 w-3 inline mr-1" />
                Real-time Updates
              </div>
            </div>

            {/* Quick Stats */}
            <div className="mt-4 grid grid-cols-3 gap-3">
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <div className="text-xl text-emerald-600 mb-1" style={{ fontWeight: 700 }}>
                  {componentConfigs.length}
                </div>
                <div className="text-xs text-slate-600">Components Available</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <div className="text-xl text-teal-600 mb-1" style={{ fontWeight: 700 }}>
                  {currentConfig?.props.length || 0}
                </div>
                <div className="text-xs text-slate-600">Configurable Props</div>
              </div>
              <div className="bg-white rounded-lg p-3 border border-slate-200">
                <div className="text-xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>
                  {Object.keys(propValues).filter(key => {
                    const propConfig = currentConfig?.props.find(p => p.name === key);
                    return propConfig && propValues[key] !== propConfig.default;
                  }).length}
                </div>
                <div className="text-xs text-slate-600">Active Modifications</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Component Selector */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="mb-4">
          <label className="text-sm text-slate-700 mb-2 block" style={{ fontWeight: 600 }}>
            Select Component
          </label>
          <select
            value={selectedComponent}
            onChange={(e) => setSelectedComponent(e.target.value as PlaygroundComponent)}
            className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
          >
            {componentConfigs.map(config => (
              <option key={config.id} value={config.id}>
                {config.name} — {config.description}
              </option>
            ))}
          </select>
        </div>

        {currentConfig && (
          <div className="bg-slate-50 rounded-lg p-4 border border-slate-200">
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2 py-0.5 bg-slate-200 text-slate-700 rounded text-xs" style={{ fontWeight: 600 }}>
                {currentConfig.category}
              </span>
              <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                {currentConfig.name}
              </h3>
            </div>
            <p className="text-xs text-slate-600">
              {currentConfig.description}
            </p>
          </div>
        )}
      </div>

      {/* Main Playground Area */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Props Editor */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <Settings className="h-5 w-5 text-slate-600" />
              <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
                Props Editor
              </h3>
            </div>
            <button
              onClick={handleReset}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded-lg transition-colors"
              style={{ fontWeight: 600 }}
            >
              <RefreshCw className="h-3.5 w-3.5" />
              Reset
            </button>
          </div>

          <div className="space-y-4">
            {currentConfig?.props.map(prop => (
              <div key={prop.name}>
                <label className="text-xs text-slate-700 mb-1.5 block" style={{ fontWeight: 600 }}>
                  {prop.name}
                  {prop.description && (
                    <span className="text-slate-500 font-normal ml-1">
                      — {prop.description}
                    </span>
                  )}
                </label>

                {prop.type === 'select' && (
                  <select
                    value={propValues[prop.name] ?? prop.default}
                    onChange={(e) => handlePropChange(prop.name, e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
                  >
                    {prop.options?.map(option => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </select>
                )}

                {prop.type === 'text' && (
                  <input
                    type="text"
                    value={propValues[prop.name] ?? prop.default}
                    onChange={(e) => handlePropChange(prop.name, e.target.value)}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
                  />
                )}

                {prop.type === 'number' && (
                  <input
                    type="number"
                    value={propValues[prop.name] ?? prop.default}
                    onChange={(e) => handlePropChange(prop.name, parseInt(e.target.value))}
                    className="w-full px-3 py-2 border border-slate-300 rounded-lg focus:ring-2 focus:ring-emerald-400 focus:border-emerald-400 text-sm"
                  />
                )}

                {prop.type === 'boolean' && (
                  <label className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={propValues[prop.name] ?? prop.default}
                      onChange={(e) => handlePropChange(prop.name, e.target.checked)}
                      className="w-4 h-4 text-emerald-600 border-slate-300 rounded focus:ring-emerald-400"
                    />
                    <span className="text-sm text-slate-700">
                      {propValues[prop.name] ? 'Enabled' : 'Disabled'}
                    </span>
                  </label>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Live Preview */}
        <div className="bg-white rounded-xl border border-slate-200 p-6">
          <div className="flex items-center gap-2 mb-4">
            <Eye className="h-5 w-5 text-slate-600" />
            <h3 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
              Live Preview
            </h3>
          </div>

          <div className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-lg border-2 border-dashed border-slate-300 p-12 min-h-[300px] flex items-center justify-center">
            {renderComponent()}
          </div>

          {/* Current Props Summary */}
          <div className="mt-4 p-4 bg-slate-50 rounded-lg border border-slate-200">
            <div className="text-xs text-slate-600 mb-2" style={{ fontWeight: 600 }}>
              Active Props:
            </div>
            <div className="flex flex-wrap gap-2">
              {Object.entries(propValues).map(([key, value]) => {
                const propConfig = currentConfig?.props.find(p => p.name === key);
                const isModified = propConfig && value !== propConfig.default;
                
                return (
                  <div
                    key={key}
                    className={`px-2 py-1 rounded text-xs ${
                      isModified
                        ? 'bg-emerald-100 text-emerald-700 border border-emerald-200'
                        : 'bg-slate-100 text-slate-600 border border-slate-200'
                    }`}
                  >
                    <span style={{ fontWeight: 600 }}>{key}:</span> {String(value)}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Code Output */}
      <div className="bg-white rounded-xl border border-slate-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <button
            onClick={() => setShowCode(!showCode)}
            className="flex items-center gap-2 text-sm text-slate-900"
            style={{ fontWeight: 700 }}
          >
            {showCode ? (
              <ChevronDown className="h-4 w-4" />
            ) : (
              <ChevronRight className="h-4 w-4" />
            )}
            <Code className="h-5 w-5 text-slate-600" />
            Generated Code
          </button>
          <div className="flex items-center gap-2">
            <kbd className="px-2 py-1 bg-slate-100 border border-slate-300 rounded text-xs font-mono text-slate-600">
              Cmd+K
            </kbd>
            <button
              onClick={copyCode}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs bg-emerald-50 text-emerald-700 hover:bg-emerald-100 rounded-lg border border-emerald-200 transition-colors"
              style={{ fontWeight: 600 }}
            >
              {copiedCode ? (
                <>
                  <Check className="h-3.5 w-3.5" />
                  Copied!
                </>
              ) : (
                <>
                  <Copy className="h-3.5 w-3.5" />
                  Copy Code
                </>
              )}
            </button>
          </div>
        </div>

        {showCode && (
          <div className="bg-slate-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-emerald-400 font-mono">
              <code>{generateCode()}</code>
            </pre>
          </div>
        )}
      </div>

      {/* Tips & Tricks */}
      <div className="bg-blue-50 rounded-lg p-6 border border-blue-200">
        <h3 className="text-sm text-blue-900 mb-3" style={{ fontWeight: 700 }}>
          💡 Playground Tips
        </h3>
        <ul className="space-y-2 text-xs text-blue-800">
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>
              <strong>Experiment freely:</strong> Try different combinations of props to see how they affect the component's appearance and behavior.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>
              <strong>Modified props are highlighted:</strong> Props that differ from default values are shown in green in the Active Props section.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>
              <strong>Copy generated code:</strong> Use the "Copy Code" button to quickly grab the component code with your current configuration.
            </span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-blue-600 mt-0.5">•</span>
            <span>
              <strong>Reset anytime:</strong> Click "Reset" to return all props to their default values and start over.
            </span>
          </li>
        </ul>
      </div>

      {/* Advanced Features */}
      <AdvancedPlaygroundFeatures />
    </div>
  );
};
