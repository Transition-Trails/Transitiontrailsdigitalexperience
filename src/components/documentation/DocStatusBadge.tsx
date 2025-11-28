import React from 'react';
import { CheckCircle, Circle, AlertCircle } from 'lucide-react';

type DocStatus = 'complete' | 'partial' | 'none';

interface DocStatusBadgeProps {
  status: DocStatus;
  showLabel?: boolean;
  size?: 'small' | 'medium';
}

export function DocStatusBadge({ 
  status, 
  showLabel = true,
  size = 'small' 
}: DocStatusBadgeProps) {
  const statusConfig = {
    complete: {
      icon: CheckCircle,
      color: 'bg-emerald-100 text-emerald-700 border-emerald-300',
      label: 'Documented',
      iconColor: 'text-emerald-600'
    },
    partial: {
      icon: AlertCircle,
      color: 'bg-amber-100 text-amber-700 border-amber-300',
      label: 'Partial Docs',
      iconColor: 'text-amber-600'
    },
    none: {
      icon: Circle,
      color: 'bg-slate-100 text-slate-600 border-slate-300',
      label: 'No Docs',
      iconColor: 'text-slate-500'
    }
  };

  const config = statusConfig[status];
  const Icon = config.icon;
  
  const sizeClasses = size === 'small' 
    ? 'text-xs px-2 py-0.5' 
    : 'text-sm px-3 py-1';

  return (
    <span 
      className={`inline-flex items-center gap-1.5 ${config.color} border rounded-full ${sizeClasses}`}
    >
      <Icon className={`h-3 w-3 ${config.iconColor}`} />
      {showLabel && <span>{config.label}</span>}
    </span>
  );
}

interface ComponentWithStatusProps {
  name: string;
  status: DocStatus;
  href?: string;
}

export function ComponentWithStatus({ name, status, href }: ComponentWithStatusProps) {
  const content = (
    <div className="flex items-center justify-between gap-3 px-3 py-2 rounded hover:bg-slate-50 transition-colors">
      <span className="text-sm text-slate-700">{name}</span>
      <DocStatusBadge status={status} />
    </div>
  );

  if (href) {
    return (
      <a href={href} className="block">
        {content}
      </a>
    );
  }

  return content;
}
