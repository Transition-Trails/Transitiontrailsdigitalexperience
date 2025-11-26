import React from 'react';
import { Check, LucideIcon } from 'lucide-react';

export type StepStatus = 'completed' | 'current' | 'upcoming';
export type StepperOrientation = 'horizontal' | 'vertical';

export interface Step {
  id: string;
  label: string;
  description?: string;
  status: StepStatus;
  icon?: LucideIcon;
}

export interface StepperProps {
  steps: Step[];
  orientation?: StepperOrientation;
  className?: string;
}

export const Stepper = React.forwardRef<HTMLDivElement, StepperProps>(
  ({ steps, orientation = 'horizontal', className = '' }, ref) => {
    const isHorizontal = orientation === 'horizontal';

    return (
      <div
        ref={ref}
        className={`${isHorizontal ? 'flex items-start' : 'flex flex-col'} ${className}`}
        role="list"
        aria-label="Progress steps"
      >
        {steps.map((step, index) => {
          const isLastStep = index === steps.length - 1;
          const StepIcon = step.icon;

          // Status-based styles
          const statusConfig = {
            completed: {
              circle: 'bg-emerald-600 border-emerald-600 text-white',
              label: 'text-slate-900',
              description: 'text-slate-600',
              connector: 'bg-emerald-600',
            },
            current: {
              circle: 'bg-blue-600 border-blue-600 text-white ring-4 ring-blue-100',
              label: 'text-slate-900',
              description: 'text-slate-700',
              connector: 'bg-slate-300',
            },
            upcoming: {
              circle: 'bg-white border-slate-300 text-slate-400',
              label: 'text-slate-500',
              description: 'text-slate-400',
              connector: 'bg-slate-300',
            },
          };

          const config = statusConfig[step.status];

          return (
            <div
              key={step.id}
              className={`${isHorizontal ? 'flex-1 flex items-start' : 'flex'}`}
              role="listitem"
            >
              <div className={`flex ${isHorizontal ? 'flex-col items-center' : 'flex-row items-start'} ${isHorizontal ? 'w-full' : 'flex-1'}`}>
                {/* Step indicator and connector container */}
                <div className={`flex ${isHorizontal ? 'flex-row items-center w-full' : 'flex-col items-center'}`}>
                  {/* Circle indicator */}
                  <div
                    className={`
                      flex items-center justify-center flex-shrink-0
                      ${isHorizontal ? 'w-10 h-10' : 'w-10 h-10'}
                      rounded-full border-2 transition-all duration-200
                      ${config.circle}
                    `}
                    aria-label={`Step ${index + 1}: ${step.label}, ${step.status}`}
                  >
                    {step.status === 'completed' ? (
                      <Check className="h-5 w-5" />
                    ) : StepIcon ? (
                      <StepIcon className="h-5 w-5" />
                    ) : (
                      <span className="text-sm font-medium">{index + 1}</span>
                    )}
                  </div>

                  {/* Connector line */}
                  {!isLastStep && (
                    <div
                      className={`
                        ${isHorizontal ? 'flex-1 h-0.5 mx-2' : 'w-0.5 h-12 my-2'}
                        ${config.connector}
                        transition-all duration-200
                      `}
                      aria-hidden="true"
                    />
                  )}
                </div>

                {/* Step content */}
                <div className={`${isHorizontal ? 'mt-3 text-center' : 'ml-4 pb-8'} ${isLastStep && !isHorizontal ? 'pb-0' : ''}`}>
                  <p className={`text-sm transition-colors duration-200 ${config.label}`}>
                    {step.label}
                  </p>
                  {step.description && (
                    <p className={`text-xs mt-1 transition-colors duration-200 ${config.description}`}>
                      {step.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
);

Stepper.displayName = 'Stepper';
