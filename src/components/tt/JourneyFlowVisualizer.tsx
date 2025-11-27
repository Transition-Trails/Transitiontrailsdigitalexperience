import React from 'react';
import { ArrowDown, ArrowRight, CheckCircle, MousePointer, Users, Map, Target, Building2 } from 'lucide-react';

export interface JourneyStep {
  id: string;
  label: string;
  pageTitle: string;
  action?: string;
  icon?: React.ReactNode;
}

export interface Journey {
  id: string;
  title: string;
  description: string;
  color: string;
  steps: JourneyStep[];
  icon: React.ReactNode;
}

interface JourneyFlowVisualizerProps {
  journeys: Journey[];
  activeJourneyId?: string;
  onJourneySelect?: (journeyId: string) => void;
}

export function JourneyFlowVisualizer({ journeys, activeJourneyId, onJourneySelect }: JourneyFlowVisualizerProps) {
  const [selectedJourney, setSelectedJourney] = React.useState<string | null>(activeJourneyId || null);

  const handleJourneyClick = (journeyId: string) => {
    setSelectedJourney(journeyId === selectedJourney ? null : journeyId);
    onJourneySelect?.(journeyId);
  };

  return (
    <div className="w-full bg-white border-2 border-slate-300 rounded-xl p-8 shadow-lg">
      <div className="mb-8">
        <h2 className="text-3xl text-slate-900 mb-3" style={{ fontWeight: 700 }}>
          User Journey Flows
        </h2>
        <p className="text-slate-600" style={{ fontWeight: 400 }}>
          Select a journey below to visualize the complete user flow path through the Digital Experience
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {journeys.map((journey) => (
          <button
            key={journey.id}
            onClick={() => handleJourneyClick(journey.id)}
            className={`
              text-left p-6 rounded-xl border-2 transition-all duration-200
              ${selectedJourney === journey.id 
                ? `${journey.color} border-opacity-100 shadow-md scale-105` 
                : 'bg-slate-50 border-slate-200 hover:border-slate-300 hover:shadow'
              }
            `}
          >
            <div className="flex items-start gap-3 mb-3">
              <div className={`
                w-10 h-10 rounded-lg flex items-center justify-center
                ${selectedJourney === journey.id ? 'bg-white/80' : 'bg-white'}
              `}>
                {journey.icon}
              </div>
              <div className="flex-1">
                <h3 className="text-lg text-slate-900 mb-1" style={{ fontWeight: 600 }}>
                  {journey.title}
                </h3>
                <p className="text-xs text-slate-600" style={{ fontWeight: 400 }}>
                  {journey.steps.length} steps
                </p>
              </div>
            </div>
            <p className="text-sm text-slate-700" style={{ fontWeight: 400 }}>
              {journey.description}
            </p>
          </button>
        ))}
      </div>

      {selectedJourney && (
        <div className="border-t-2 border-slate-200 pt-8">
          {journeys.filter(j => j.id === selectedJourney).map((journey) => (
            <JourneyFlowDiagram key={journey.id} journey={journey} />
          ))}
        </div>
      )}

      {!selectedJourney && (
        <div className="border-t-2 border-slate-200 pt-8 text-center">
          <div className="w-16 h-16 rounded-full bg-slate-100 border-2 border-slate-200 flex items-center justify-center mx-auto mb-4">
            <MousePointer className="h-8 w-8 text-slate-400" />
          </div>
          <p className="text-slate-500" style={{ fontWeight: 500 }}>
            Click a journey card above to view the complete flow diagram
          </p>
        </div>
      )}
    </div>
  );
}

function JourneyFlowDiagram({ journey }: { journey: Journey }) {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-4 mb-6">
        <div className={`w-12 h-12 rounded-xl ${journey.color} flex items-center justify-center`}>
          {journey.icon}
        </div>
        <div>
          <h3 className="text-2xl text-slate-900" style={{ fontWeight: 700 }}>
            {journey.title}
          </h3>
          <p className="text-sm text-slate-600" style={{ fontWeight: 400 }}>
            {journey.description}
          </p>
        </div>
      </div>

      <div className="bg-slate-50 border-2 border-slate-200 rounded-xl p-8">
        <div className="flex flex-col gap-4">
          {journey.steps.map((step, index) => (
            <React.Fragment key={step.id}>
              <div className="flex items-start gap-4">
                {/* Step Number */}
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-white border-2 border-slate-300 flex items-center justify-center text-slate-700" style={{ fontWeight: 700 }}>
                  {index + 1}
                </div>

                {/* Step Content */}
                <div className="flex-1 bg-white border-2 border-slate-200 rounded-lg p-4 hover:border-slate-300 hover:shadow-sm transition-all">
                  <div className="flex items-center gap-3 mb-2">
                    {step.icon && (
                      <div className="w-8 h-8 rounded-md bg-slate-100 flex items-center justify-center text-slate-600">
                        {step.icon}
                      </div>
                    )}
                    <div>
                      <h4 className="text-base text-slate-900" style={{ fontWeight: 600 }}>
                        {step.pageTitle}
                      </h4>
                      {step.label && (
                        <p className="text-sm text-slate-600" style={{ fontWeight: 400 }}>
                          {step.label}
                        </p>
                      )}
                    </div>
                  </div>
                  {step.action && (
                    <div className="flex items-center gap-2 mt-3 px-3 py-2 bg-emerald-50 border border-emerald-200 rounded-md">
                      <MousePointer className="h-4 w-4 text-emerald-600" />
                      <span className="text-sm text-emerald-800" style={{ fontWeight: 600 }}>
                        Action: {step.action}
                      </span>
                    </div>
                  )}
                </div>
              </div>

              {/* Arrow Connector */}
              {index < journey.steps.length - 1 && (
                <div className="flex justify-center">
                  <div className="w-10 flex items-center justify-center">
                    <ArrowDown className="h-8 w-8 text-slate-400" strokeWidth={2.5} />
                  </div>
                </div>
              )}

              {/* Journey End Marker */}
              {index === journey.steps.length - 1 && (
                <div className="flex justify-center mt-4">
                  <div className="flex items-center gap-2 px-4 py-2 bg-green-50 border-2 border-green-300 rounded-lg">
                    <CheckCircle className="h-5 w-5 text-green-600" />
                    <span className="text-sm text-green-800" style={{ fontWeight: 600 }}>
                      Journey Complete
                    </span>
                  </div>
                </div>
              )}
            </React.Fragment>
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
          <div className="text-2xl text-slate-900 mb-1" style={{ fontWeight: 700 }}>
            {journey.steps.length}
          </div>
          <div className="text-xs text-slate-600" style={{ fontWeight: 600 }}>
            Total Steps
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
          <div className="text-2xl text-slate-900 mb-1" style={{ fontWeight: 700 }}>
            {journey.steps.filter(s => s.action).length}
          </div>
          <div className="text-xs text-slate-600" style={{ fontWeight: 600 }}>
            User Actions
          </div>
        </div>
        <div className="bg-white border border-slate-200 rounded-lg p-4 text-center">
          <div className="text-2xl text-slate-900 mb-1" style={{ fontWeight: 700 }}>
            {new Set(journey.steps.map(s => s.pageTitle)).size}
          </div>
          <div className="text-xs text-slate-600" style={{ fontWeight: 600 }}>
            Unique Pages
          </div>
        </div>
      </div>
    </div>
  );
}
