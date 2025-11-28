import React from 'react';
import { Code } from 'lucide-react';

export interface PropDefinition {
  name: string;
  type: string;
  required?: boolean;
  default?: string;
  description: string;
  options?: string[];
}

interface PropsTableProps {
  props: PropDefinition[];
}

export function PropsTable({ props }: PropsTableProps) {
  return (
    <div className="bg-slate-50 border border-slate-200 rounded-lg overflow-hidden">
      <div className="bg-slate-100 px-4 py-3 border-b border-slate-200">
        <div className="flex items-center gap-2">
          <Code className="h-4 w-4 text-slate-600" />
          <h4 className="text-sm text-slate-900" style={{ fontWeight: 700 }}>
            Component Props
          </h4>
        </div>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-white">
              <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 700 }}>
                Prop
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 700 }}>
                Type
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 700 }}>
                Default
              </th>
              <th className="px-4 py-3 text-left text-xs text-slate-600" style={{ fontWeight: 700 }}>
                Description
              </th>
            </tr>
          </thead>
          <tbody className="bg-white">
            {props.map((prop, index) => (
              <tr 
                key={prop.name} 
                className={`border-b border-slate-100 hover:bg-slate-50 transition-colors ${
                  index === props.length - 1 ? 'border-b-0' : ''
                }`}
              >
                <td className="px-4 py-3">
                  <div className="flex items-center gap-2">
                    <code className="text-xs text-emerald-700 bg-emerald-50 px-2 py-1 rounded">
                      {prop.name}
                    </code>
                    {prop.required && (
                      <span className="text-xs text-red-600 bg-red-50 px-2 py-0.5 rounded">
                        required
                      </span>
                    )}
                  </div>
                </td>
                <td className="px-4 py-3">
                  <code className="text-xs text-blue-700 bg-blue-50 px-2 py-1 rounded">
                    {prop.type}
                  </code>
                  {prop.options && (
                    <div className="mt-1 flex flex-wrap gap-1">
                      {prop.options.map(option => (
                        <span 
                          key={option}
                          className="text-xs text-slate-600 bg-slate-100 px-1.5 py-0.5 rounded"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                </td>
                <td className="px-4 py-3">
                  {prop.default ? (
                    <code className="text-xs text-slate-600 bg-slate-100 px-2 py-1 rounded">
                      {prop.default}
                    </code>
                  ) : (
                    <span className="text-xs text-slate-400">—</span>
                  )}
                </td>
                <td className="px-4 py-3">
                  <p className="text-xs text-slate-700 leading-relaxed">
                    {prop.description}
                  </p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
