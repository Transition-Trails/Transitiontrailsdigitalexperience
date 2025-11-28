import React from 'react';
import { Code, Database, Zap, Layout, CheckCircle, Shield, Package, FileCode, Layers, GitBranch, Compass } from 'lucide-react';

export function SalesforceHandoffBoard() {
  return (
    <div className="w-full bg-slate-100 py-16">
      <div className="max-w-[1600px] mx-auto px-8">
        {/* Header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-4">
            <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
              <Code className="h-8 w-8 text-white" />
            </div>
            <div>
              <h1 className="text-6xl text-slate-900" style={{ fontWeight: 700 }}>
                5 — Salesforce Handoff for Hugh
              </h1>
              <p className="text-2xl text-slate-700 mt-2" style={{ fontWeight: 400 }}>
                LWC + Experience Cloud Implementation Guide
              </p>
            </div>
          </div>
          <div className="bg-white border-2 border-slate-200 rounded-xl p-6 max-w-4xl">
            <p className="text-slate-700 mb-3" style={{ fontWeight: 400 }}>
              This document provides a complete engineering handoff for implementing the Transition Trails Digital Experience in Salesforce using Lightning Web Components (LWC) and Experience Cloud. It includes component mappings, data models, Apex endpoints, page templates, build order, and permissions architecture.
            </p>
            <div className="flex flex-wrap gap-3">
              <div className="flex items-center gap-2 px-3 py-1.5 bg-blue-50 border border-blue-200 rounded-md">
                <FileCode className="h-4 w-4 text-blue-600" />
                <span className="text-sm text-blue-800" style={{ fontWeight: 600 }}>LWC Components</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-purple-50 border border-purple-200 rounded-md">
                <Database className="h-4 w-4 text-purple-600" />
                <span className="text-sm text-purple-800" style={{ fontWeight: 600 }}>Data Models</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-emerald-50 border border-emerald-200 rounded-md">
                <Zap className="h-4 w-4 text-emerald-600" />
                <span className="text-sm text-emerald-800" style={{ fontWeight: 600 }}>Apex Controllers</span>
              </div>
              <div className="flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 rounded-md">
                <Layout className="h-4 w-4 text-amber-600" />
                <span className="text-sm text-amber-800" style={{ fontWeight: 600 }}>Experience Cloud</span>
              </div>
            </div>
          </div>
        </div>

        {/* SECTION 1 — LWC COMPONENT MAP */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-blue-600 flex items-center justify-center">
              <FileCode className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 1 — LWC Component Map
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Complete mapping of Figma components to Lightning Web Components with props and data sources
          </p>

          <div className="ml-16 bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Figma Component</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>LWC Component Name</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Inputs (@api props)</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Expected Data Source</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Notes</th>
                  </tr>
                </thead>
                <tbody>
                  {lwcComponentData.map((row, index) => (
                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-slate-800" style={{ fontWeight: 600 }}>{row.figma}</td>
                      <td className="px-6 py-4 text-sm text-blue-700 font-mono" style={{ fontWeight: 600 }}>{row.lwc}</td>
                      <td className="px-6 py-4 text-xs text-slate-700 font-mono" style={{ fontWeight: 400 }}>{row.inputs}</td>
                      <td className="px-6 py-4 text-xs text-slate-600" style={{ fontWeight: 500 }}>{row.dataSource}</td>
                      <td className="px-6 py-4 text-xs text-slate-600" style={{ fontWeight: 400 }}>{row.notes}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 2 — SALESFORCE OBJECT + FIELD MAP */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-purple-600 flex items-center justify-center">
              <Database className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 2 — Salesforce Object + Field Map
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Custom objects required for the Transition Trails Digital Experience
          </p>

          <div className="ml-16 space-y-6">
            {salesforceObjects.map((obj, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Database className="h-5 w-5 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl text-slate-900 mb-2 font-mono" style={{ fontWeight: 700 }}>
                      {obj.name}
                    </h3>
                    <p className="text-sm text-slate-600 mb-4" style={{ fontWeight: 400 }}>
                      {obj.description}
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <h4 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>Key Fields</h4>
                        <ul className="space-y-1">
                          {obj.fields.map((field, idx) => (
                            <li key={idx} className="text-xs text-slate-600 font-mono pl-4 border-l-2 border-slate-200" style={{ fontWeight: 400 }}>
                              {field}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>Relationships</h4>
                        <ul className="space-y-1">
                          {obj.relationships.map((rel, idx) => (
                            <li key={idx} className="text-xs text-slate-600 pl-4 border-l-2 border-purple-200" style={{ fontWeight: 400 }}>
                              {rel}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div className="mt-4 pt-4 border-t border-slate-200">
                      <h4 className="text-sm text-slate-700 mb-2" style={{ fontWeight: 700 }}>Used By Components</h4>
                      <div className="flex flex-wrap gap-2">
                        {obj.usedBy.map((comp, idx) => (
                          <span key={idx} className="px-2 py-1 bg-blue-50 border border-blue-200 rounded text-xs text-blue-700" style={{ fontWeight: 600 }}>
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 3 — APEX ENDPOINT MAP */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-emerald-600 flex items-center justify-center">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 3 — Apex Endpoint Map
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Apex controllers and methods required for LWC data binding
          </p>

          <div className="ml-16 bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Apex Class</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Used By LWC</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Query / Action Summary</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Returns</th>
                  </tr>
                </thead>
                <tbody>
                  {apexEndpoints.map((endpoint, index) => (
                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4 text-sm text-emerald-700 font-mono" style={{ fontWeight: 700 }}>{endpoint.className}</td>
                      <td className="px-6 py-4 text-xs text-blue-700 font-mono" style={{ fontWeight: 600 }}>{endpoint.usedBy}</td>
                      <td className="px-6 py-4 text-xs text-slate-700" style={{ fontWeight: 400 }}>{endpoint.summary}</td>
                      <td className="px-6 py-4 text-xs text-slate-600 font-mono" style={{ fontWeight: 500 }}>{endpoint.returns}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* SECTION 4 — LWC PAGE TEMPLATE MAP */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-amber-600 flex items-center justify-center">
              <Layout className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 4 — LWC Page Template Map
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Mapping of Figma templates to Experience Cloud pages and LWC composition strategy
          </p>

          <div className="ml-16 space-y-4">
            {pageTemplates.map((template, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-amber-300 transition-colors">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center flex-shrink-0">
                    <Layout className="h-5 w-5 text-amber-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <h3 className="text-lg text-slate-900 mb-1" style={{ fontWeight: 700 }}>
                          {template.figmaTemplate}
                        </h3>
                        <p className="text-sm text-slate-600" style={{ fontWeight: 600 }}>
                          → {template.experienceCloudPage}
                        </p>
                      </div>
                      <span className={`px-3 py-1 rounded-md text-xs ${template.compositionType === 'Full-page LWC' ? 'bg-blue-100 text-blue-700 border border-blue-200' : 'bg-purple-100 text-purple-700 border border-purple-200'}`} style={{ fontWeight: 600 }}>
                        {template.compositionType}
                      </span>
                    </div>
                    <p className="text-sm text-slate-700 mb-3" style={{ fontWeight: 400 }}>
                      {template.notes}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {template.lwcComponents.map((comp, idx) => (
                        <span key={idx} className="px-2 py-1 bg-slate-100 border border-slate-200 rounded text-xs text-slate-700 font-mono" style={{ fontWeight: 600 }}>
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* SECTION 5 — BUILD ORDER FOR HUGH */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-green-600 flex items-center justify-center">
              <GitBranch className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 5 — Build Order for Hugh
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Recommended build sequence for LWC + Experience Cloud implementation
          </p>

          <div className="ml-16 bg-white border-2 border-slate-200 rounded-xl p-8">
            <ol className="space-y-4">
              {buildOrder.map((step, index) => (
                <li key={index} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center flex-shrink-0" style={{ fontWeight: 700 }}>
                    {index + 1}
                  </div>
                  <div className="flex-1 pt-2">
                    <h4 className="text-lg text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                      {step.title}
                    </h4>
                    <p className="text-sm text-slate-700 mb-3" style={{ fontWeight: 400 }}>
                      {step.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {step.deliverables.map((deliverable, idx) => (
                        <span key={idx} className="px-2 py-1 bg-green-50 border border-green-200 rounded text-xs text-green-800" style={{ fontWeight: 600 }}>
                          {deliverable}
                        </span>
                      ))}
                    </div>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        {/* SECTION 5B — LWC CONVERSION PLAN */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-teal-600 flex items-center justify-center">
              <Code className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 5B — LWC Conversion Plan
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Complete roadmap for converting the remaining 37 React components to Lightning Web Components
          </p>

          {/* Status Overview */}
          <div className="ml-16 mb-8 bg-gradient-to-br from-teal-50 to-blue-50 border-2 border-teal-200 rounded-xl p-6">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
              <div className="bg-white rounded-lg p-4 border border-slate-200">
                <div className="text-3xl text-slate-900 mb-1" style={{ fontWeight: 700 }}>48</div>
                <div className="text-xs text-slate-600">Total Components</div>
              </div>
              <div className="bg-emerald-50 rounded-lg p-4 border border-emerald-200">
                <div className="text-3xl text-emerald-600 mb-1" style={{ fontWeight: 700 }}>11</div>
                <div className="text-xs text-emerald-700">✅ LWC Available</div>
              </div>
              <div className="bg-blue-50 rounded-lg p-4 border border-blue-200">
                <div className="text-3xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>37</div>
                <div className="text-xs text-blue-700">📝 Need Conversion</div>
              </div>
              <div className="bg-purple-50 rounded-lg p-4 border border-purple-200">
                <div className="text-3xl text-purple-600 mb-1" style={{ fontWeight: 700 }}>23%</div>
                <div className="text-xs text-purple-700">Current Coverage</div>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <div className="flex-1 bg-slate-200 rounded-full h-3 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-500 to-teal-500 h-full" style={{ width: '23%' }}></div>
              </div>
              <span className="text-xs text-slate-600" style={{ fontWeight: 600 }}>11/48 complete</span>
            </div>
          </div>

          {/* Priority Breakdown */}
          <div className="ml-16 space-y-6">
            {conversionPriorities.map((priority, index) => (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
                <div className={`${priority.bgColor} border-b-2 ${priority.borderColor} px-6 py-4`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-lg ${priority.iconBg} flex items-center justify-center`}>
                        <priority.icon className={`h-5 w-5 ${priority.iconColor}`} />
                      </div>
                      <div>
                        <h3 className={`text-lg ${priority.textColor} mb-1`} style={{ fontWeight: 700 }}>
                          {priority.title}
                        </h3>
                        <p className="text-sm text-slate-600" style={{ fontWeight: 400 }}>
                          {priority.description}
                        </p>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className={`text-2xl ${priority.textColor} mb-1`} style={{ fontWeight: 700 }}>
                        {priority.count}
                      </div>
                      <div className="text-xs text-slate-600">components</div>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h4 className="text-sm text-slate-700 mb-3" style={{ fontWeight: 700 }}>Components:</h4>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {priority.components.map((comp, idx) => (
                      <span 
                        key={idx} 
                        className={`px-3 py-1.5 ${priority.componentBg} ${priority.borderColor} border rounded-lg text-sm ${priority.textColor}`}
                        style={{ fontWeight: 500 }}
                      >
                        {comp}
                      </span>
                    ))}
                  </div>
                  <div className="bg-slate-50 border border-slate-200 rounded-lg p-4">
                    <div className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-slate-500 mt-0.5 flex-shrink-0" />
                      <div>
                        <div className="text-xs text-slate-700 mb-1" style={{ fontWeight: 700 }}>Impact:</div>
                        <p className="text-xs text-slate-600" style={{ fontWeight: 400 }}>{priority.impact}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Estimated Timeline */}
          <div className="ml-16 mt-8 bg-white border-2 border-slate-200 rounded-xl p-6">
            <h3 className="text-lg text-slate-900 mb-4" style={{ fontWeight: 700 }}>
              📅 Estimated Timeline & Effort
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-2">Simple Components</div>
                <div className="text-2xl text-blue-600 mb-1" style={{ fontWeight: 700 }}>15</div>
                <div className="text-xs text-slate-600">× 2 days = <span style={{ fontWeight: 700 }}>30 days</span></div>
                <div className="mt-2 text-xs text-slate-500">Form inputs, chips, progress bars</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-2">Medium Components</div>
                <div className="text-2xl text-purple-600 mb-1" style={{ fontWeight: 700 }}>13</div>
                <div className="text-xs text-slate-600">× 4 days = <span style={{ fontWeight: 700 }}>52 days</span></div>
                <div className="mt-2 text-xs text-slate-500">Modal, navigation, cards</div>
              </div>
              <div className="border border-slate-200 rounded-lg p-4">
                <div className="text-sm text-slate-600 mb-2">Complex Components</div>
                <div className="text-2xl text-rose-600 mb-1" style={{ fontWeight: 700 }}>9</div>
                <div className="text-xs text-slate-600">× 7 days = <span style={{ fontWeight: 700 }}>63 days</span></div>
                <div className="mt-2 text-xs text-slate-500">Data panels, templates</div>
              </div>
            </div>
            <div className="bg-teal-50 border border-teal-200 rounded-lg p-4">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                <div>
                  <div className="text-xs text-teal-700 mb-1">1 Developer</div>
                  <div className="text-xl text-teal-900" style={{ fontWeight: 700 }}>~7 months</div>
                  <div className="text-xs text-teal-600">145 days</div>
                </div>
                <div>
                  <div className="text-xs text-teal-700 mb-1">2 Developers</div>
                  <div className="text-xl text-teal-900" style={{ fontWeight: 700 }}>~3.5 months</div>
                  <div className="text-xs text-teal-600">73 days</div>
                </div>
                <div>
                  <div className="text-xs text-teal-700 mb-1">3 Developers</div>
                  <div className="text-xl text-teal-900" style={{ fontWeight: 700 }}>~2.5 months</div>
                  <div className="text-xs text-teal-600">48 days</div>
                </div>
              </div>
            </div>
          </div>

          {/* Phased Approach */}
          <div className="ml-16 mt-8 bg-white border-2 border-slate-200 rounded-xl p-6">
            <h3 className="text-lg text-slate-900 mb-4" style={{ fontWeight: 700 }}>
              🚀 Recommended Phased Approach
            </h3>
            <div className="space-y-4">
              {conversionPhases.map((phase, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4 hover:border-teal-300 transition-colors">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-full ${phase.color} text-white flex items-center justify-center flex-shrink-0`} style={{ fontWeight: 700 }}>
                      {index + 1}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-2">
                        <div>
                          <h4 className="text-sm text-slate-900 mb-1" style={{ fontWeight: 700 }}>
                            {phase.title}
                          </h4>
                          <p className="text-xs text-slate-600">{phase.timeline}</p>
                        </div>
                        <span className="px-2 py-1 bg-slate-100 rounded text-xs text-slate-700" style={{ fontWeight: 600 }}>
                          {phase.componentCount} components
                        </span>
                      </div>
                      <p className="text-sm text-slate-700 mb-3" style={{ fontWeight: 400 }}>
                        {phase.goal}
                      </p>
                      <div className="flex flex-wrap gap-1.5">
                        {phase.components.map((comp, idx) => (
                          <span 
                            key={idx}
                            className="px-2 py-0.5 bg-slate-100 border border-slate-200 rounded text-xs text-slate-700"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t border-slate-200">
                        <div className="flex items-center gap-2">
                          <CheckCircle className="h-3.5 w-3.5 text-emerald-600" />
                          <span className="text-xs text-emerald-700" style={{ fontWeight: 600 }}>
                            Deliverable: {phase.deliverable}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Conversion Workflow */}
          <div className="ml-16 mt-8 bg-white border-2 border-slate-200 rounded-xl p-6">
            <h3 className="text-lg text-slate-900 mb-4" style={{ fontWeight: 700 }}>
              🔧 Conversion Workflow (Per Component)
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
              {conversionSteps.map((step, index) => (
                <div key={index} className="border border-slate-200 rounded-lg p-4">
                  <div className={`w-8 h-8 rounded-full ${step.color} text-white flex items-center justify-center text-sm mb-2`} style={{ fontWeight: 700 }}>
                    {index + 1}
                  </div>
                  <h4 className="text-sm text-slate-900 mb-2" style={{ fontWeight: 700 }}>
                    {step.title}
                  </h4>
                  <ul className="space-y-1">
                    {step.tasks.map((task, idx) => (
                      <li key={idx} className="text-xs text-slate-600 flex items-start gap-1">
                        <span className="text-slate-400">•</span>
                        <span>{task}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Success Metrics */}
          <div className="ml-16 mt-8 bg-gradient-to-r from-emerald-50 to-teal-50 border-2 border-emerald-200 rounded-xl p-6">
            <h3 className="text-lg text-slate-900 mb-4" style={{ fontWeight: 700 }}>
              📊 Success Metrics
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h4 className="text-sm text-slate-700 mb-3" style={{ fontWeight: 700 }}>Component-Level</h4>
                <div className="space-y-2">
                  {successMetricsComponent.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="text-sm text-slate-700 mb-3" style={{ fontWeight: 700 }}>System-Level</h4>
                <div className="space-y-2">
                  {successMetricsSystem.map((metric, idx) => (
                    <div key={idx} className="flex items-start gap-2">
                      <CheckCircle className="h-4 w-4 text-emerald-600 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-slate-700">{metric}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECTION 6 — INTERACTION MODEL */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-indigo-600 flex items-center justify-center">
              <Layers className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 6 — Interaction Model
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Data flow patterns for LWC components in the Digital Experience
          </p>

          <div className="ml-16 grid grid-cols-1 md:grid-cols-2 gap-6">
            {interactionPatterns.map((pattern, index) => {
              const PatternIcon = pattern.icon;
              return (
              <div key={index} className="bg-white border-2 border-slate-200 rounded-xl p-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-indigo-100 flex items-center justify-center">
                    <PatternIcon className="h-5 w-5 text-indigo-600" />
                  </div>
                  <h3 className="text-lg text-slate-900" style={{ fontWeight: 700 }}>
                    {pattern.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-700 mb-4" style={{ fontWeight: 400 }}>
                  {pattern.description}
                </p>
                <div className="bg-slate-50 border border-slate-200 rounded-lg p-3">
                  <h4 className="text-xs text-slate-600 mb-2" style={{ fontWeight: 700 }}>Use Cases:</h4>
                  <ul className="space-y-1">
                    {pattern.useCases.map((useCase, idx) => (
                      <li key={idx} className="text-xs text-slate-600 pl-3 border-l-2 border-indigo-300" style={{ fontWeight: 400 }}>
                        {useCase}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              );
            })}
          </div>
        </section>

        {/* SECTION 7 — PERMISSIONS + PROFILES */}
        <section className="mb-16">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-12 h-12 rounded-lg bg-red-600 flex items-center justify-center">
              <Shield className="h-6 w-6 text-white" />
            </div>
            <h2 className="text-4xl text-slate-900" style={{ fontWeight: 700 }}>
              Section 7 — Permissions + Profiles
            </h2>
          </div>
          <p className="text-slate-600 mb-6 ml-16" style={{ fontWeight: 400 }}>
            Required profiles, permission sets, and access control configuration
          </p>

          <div className="ml-16 bg-white border-2 border-slate-200 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 border-b-2 border-slate-200">
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Profile / Persona</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Object Access</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Page Access</th>
                    <th className="px-6 py-4 text-left text-sm text-slate-900" style={{ fontWeight: 700 }}>Component Visibility</th>
                  </tr>
                </thead>
                <tbody>
                  {permissions.map((perm, index) => (
                    <tr key={index} className="border-b border-slate-200 hover:bg-slate-50">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2">
                          <Shield className="h-4 w-4 text-red-600" />
                          <span className="text-sm text-slate-900" style={{ fontWeight: 700 }}>{perm.profile}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {perm.objectAccess.map((obj, idx) => (
                            <div key={idx} className="text-xs text-slate-700" style={{ fontWeight: 400 }}>{obj}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {perm.pageAccess.map((page, idx) => (
                            <div key={idx} className="text-xs text-slate-700" style={{ fontWeight: 400 }}>{page}</div>
                          ))}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          {perm.componentVisibility.map((comp, idx) => (
                            <div key={idx} className="text-xs text-slate-700" style={{ fontWeight: 400 }}>{comp}</div>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Footer / Summary */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-xl p-8">
          <div className="flex items-start gap-6">
            <div className="w-16 h-16 rounded-xl bg-white/20 flex items-center justify-center flex-shrink-0">
              <CheckCircle className="h-8 w-8 text-white" />
            </div>
            <div>
              <h3 className="text-2xl mb-3" style={{ fontWeight: 700 }}>
                Handoff Complete — Ready for Development
              </h3>
              <p className="text-white/90 mb-4" style={{ fontWeight: 400 }}>
                This handoff board provides all necessary specifications for implementing the Transition Trails Digital Experience in Salesforce. All components, data models, endpoints, and permissions are documented and ready for LWC development.
              </p>
              <div className="flex flex-wrap gap-3">
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                  <span className="text-sm" style={{ fontWeight: 600 }}>48 React Components</span>
                </div>
                <div className="px-4 py-2 bg-emerald-400/30 rounded-lg backdrop-blur border border-emerald-300/50">
                  <span className="text-sm" style={{ fontWeight: 600 }}>11 LWC Available ✓</span>
                </div>
                <div className="px-4 py-2 bg-blue-400/30 rounded-lg backdrop-blur border border-blue-300/50">
                  <span className="text-sm" style={{ fontWeight: 600 }}>37 Need Conversion</span>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                  <span className="text-sm" style={{ fontWeight: 600 }}>9 Custom Objects</span>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                  <span className="text-sm" style={{ fontWeight: 600 }}>10 Apex Endpoints</span>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                  <span className="text-sm" style={{ fontWeight: 600 }}>7 Page Templates</span>
                </div>
                <div className="px-4 py-2 bg-white/20 rounded-lg backdrop-blur">
                  <span className="text-sm" style={{ fontWeight: 600 }}>7 User Profiles</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// DATA STRUCTURES

const lwcComponentData = [
  {
    figma: 'TTDS/Button',
    lwc: 'ttdsButton',
    inputs: 'label, variant, size, disabled, onClick',
    dataSource: 'Static @api props',
    notes: 'Base primitive, reusable across all components'
  },
  {
    figma: 'TTDS/Card',
    lwc: 'ttdsCard',
    inputs: 'title, elevation, radius, padding',
    dataSource: 'Static @api props',
    notes: 'Container primitive with TTDS tokens'
  },
  {
    figma: 'TTDS/Tag / Chip',
    lwc: 'ttdsTag',
    inputs: 'label, variant, color, removable, onRemove',
    dataSource: 'Static @api props',
    notes: 'Used for skills, categories, status indicators'
  },
  {
    figma: 'TTDS/Tooltip',
    lwc: 'ttdsTooltip',
    inputs: 'content, placement, trigger',
    dataSource: 'Static @api props',
    notes: 'Accessible tooltip with ARIA support'
  },
  {
    figma: 'TTDS/Skeleton',
    lwc: 'tfdsSkeleton',
    inputs: 'variant, count, loading',
    dataSource: 'Static @api props',
    notes: 'Loading state placeholder'
  },
  {
    figma: 'TTDS/Stepper',
    lwc: 'tfdsStepper',
    inputs: 'steps, currentStep, orientation',
    dataSource: 'Static @api props',
    notes: 'Progress indicator for multi-step flows'
  },
  {
    figma: 'TT/Card/TrailMission',
    lwc: 'ttTrailMissionCard',
    inputs: 'missionId',
    dataSource: '@wire TT_Trail_Mission__c',
    notes: 'Displays mission title, status, XP, due date'
  },
  {
    figma: 'TT/Card/TrailPath',
    lwc: 'ttTrailPathCard',
    inputs: 'pathId',
    dataSource: '@wire TT_Trail_Path__c',
    notes: 'Shows path overview, progress, milestones'
  },
  {
    figma: 'TT/Card/ProgramOverview',
    lwc: 'ttProgramOverviewCard',
    inputs: 'programName, description, features',
    dataSource: 'Static / CMS Content',
    notes: 'Public-facing program card'
  },
  {
    figma: 'TT/Card/CitizenPlatform',
    lwc: 'ttCitizenPlatformCard',
    inputs: 'platformName, url, skills, status',
    dataSource: 'Static / External API',
    notes: 'Learning platform integration card'
  },
  {
    figma: 'TT/Card/AITrail',
    lwc: 'ttAiTrailCard',
    inputs: 'trailId, aiRecommendation',
    dataSource: '@wire Apex (AI recommendations)',
    notes: 'AI-suggested learning path card'
  },
  {
    figma: 'TT/Card/PartnerProject',
    lwc: 'ttPartnerProjectCard',
    inputs: 'projectId',
    dataSource: '@wire TT_Partner_Project__c',
    notes: 'Partner project opportunity card'
  },
  {
    figma: 'TT/Card/Testimonial',
    lwc: 'ttTestimonialCard',
    inputs: 'quote, author, role, photo',
    dataSource: 'Static / CMS Content',
    notes: 'Success story card for marketing pages'
  },
  {
    figma: 'TT/Panel/LearnerStats',
    lwc: 'ttLearnerStatsPanel',
    inputs: 'learnerId',
    dataSource: '@wire Apex (getDashboardStats)',
    notes: 'Dashboard stats: XP, badges, streak, rank'
  },
  {
    figma: 'TT/Panel/SkillsAndCerts',
    lwc: 'ttSkillsAndCertsPanel',
    inputs: 'learnerId',
    dataSource: '@wire TT_Badge__c',
    notes: 'Skills tree and certifications earned'
  },
  {
    figma: 'TT/Panel/Events',
    lwc: 'ttEventsPanel',
    inputs: 'filter, limit',
    dataSource: '@wire TT_Event__c',
    notes: 'Upcoming events and RSVPs'
  },
  {
    figma: 'TT/Panel/PennyInsight',
    lwc: 'ttPennyInsightPanel',
    inputs: 'learnerId, context',
    dataSource: 'Imperative Apex (AI insights)',
    notes: 'AI coaching rail with dynamic suggestions'
  },
  {
    figma: 'TT/Panel/QuickLinks',
    lwc: 'ttQuickLinksPanel',
    inputs: 'links',
    dataSource: 'Static @api props',
    notes: 'Navigation shortcuts panel'
  },
  {
    figma: 'TT/Panel/Recommendations',
    lwc: 'ttRecommendationsPanel',
    inputs: 'learnerId',
    dataSource: '@wire Apex (AI recommendations)',
    notes: 'AI-powered content recommendations'
  },
  {
    figma: 'TT/Section/FeatureRoadmap',
    lwc: 'ttFeatureRoadmapSection',
    inputs: 'roadmapItems',
    dataSource: 'Static / CMS Content',
    notes: 'Public roadmap display with phases'
  },
  {
    figma: 'TT/Template/Dashboard',
    lwc: 'ttDashboardTemplate',
    inputs: 'variant (learner/coach)',
    dataSource: 'Composed LWC regions',
    notes: 'Full dashboard layout with panels'
  },
  {
    figma: 'TT/Template/ProgramOverview',
    lwc: 'ttProgramOverviewTemplate',
    inputs: 'programId',
    dataSource: 'Composed LWC regions',
    notes: 'Program landing page layout'
  },
  {
    figma: 'TT/Template/VisionDonor',
    lwc: 'ttVisionDonorTemplate',
    inputs: 'N/A',
    dataSource: 'Composed LWC regions',
    notes: 'Public home page with hero and CTAs'
  },
  {
    figma: 'TT/Template/CommunityFeed',
    lwc: 'ttCommunityFeedTemplate',
    inputs: 'N/A',
    dataSource: 'Composed LWC regions',
    notes: 'Social feed with posts, events, channels'
  },
  {
    figma: 'TT/Template/LearningCenter',
    lwc: 'ttLearningCenterTemplate',
    inputs: 'N/A',
    dataSource: 'Composed LWC regions',
    notes: 'Filterable activity catalog'
  },
  {
    figma: 'TT/Template/PartnerPortal',
    lwc: 'ttPartnerPortalTemplate',
    inputs: 'N/A',
    dataSource: 'Composed LWC regions',
    notes: 'Partner dashboard and project management'
  },
];

const salesforceObjects = [
  {
    name: 'TT_Trail_Mission__c',
    description: 'Individual learning missions within a trail path',
    fields: [
      'Name (Text)',
      'Mission_Type__c (Picklist: Tutorial, Challenge, Project)',
      'Status__c (Picklist: Not Started, In Progress, Completed)',
      'XP_Value__c (Number)',
      'Due_Date__c (Date)',
      'Completion_Date__c (Date)',
    ],
    relationships: [
      'Trail_Path__c (Lookup to TT_Trail_Path__c)',
      'Learner__c (Lookup to User)',
      'Created_By_Coach__c (Lookup to User)',
    ],
    usedBy: ['ttTrailMissionCard', 'ttDashboardTemplate', 'getTrailMissions'],
  },
  {
    name: 'TT_Trail_Path__c',
    description: 'Learning pathways (Guided Trail, Explorer Journey, Trail of Mastery)',
    fields: [
      'Name (Text)',
      'Program__c (Picklist: Guided Trail, Explorer, Mastery)',
      'Progress_Percentage__c (Percent)',
      'Total_XP__c (Number)',
      'Start_Date__c (Date)',
      'Target_Completion__c (Date)',
    ],
    relationships: [
      'Learner__c (Lookup to User)',
      'Coach__c (Lookup to User)',
      'Missions__r (Related list: TT_Trail_Mission__c)',
    ],
    usedBy: ['ttTrailPathCard', 'ttDashboardTemplate'],
  },
  {
    name: 'TT_Study_Group__c',
    description: 'Community study groups and peer learning sessions',
    fields: [
      'Name (Text)',
      'Description__c (Long Text Area)',
      'Meeting_Schedule__c (Text)',
      'Member_Count__c (Number)',
      'Topic__c (Picklist)',
      'Status__c (Picklist: Active, Archived)',
    ],
    relationships: [
      'Facilitator__c (Lookup to User)',
      'Members__r (Junction: TT_Study_Group_Member__c)',
    ],
    usedBy: ['ttCommunityFeedTemplate', 'getCommunityPosts'],
  },
  {
    name: 'TT_Peer_Review__c',
    description: 'Peer review submissions and feedback',
    fields: [
      'Mission__c (Lookup to TT_Trail_Mission__c)',
      'Reviewer__c (Lookup to User)',
      'Reviewee__c (Lookup to User)',
      'Rating__c (Number 1-5)',
      'Feedback__c (Long Text Area)',
      'Review_Date__c (Date)',
    ],
    relationships: [
      'Mission__c (Lookup to TT_Trail_Mission__c)',
      'Reviewer__c (Lookup to User)',
      'Reviewee__c (Lookup to User)',
    ],
    usedBy: ['ttDashboardTemplate', 'getCommunityPosts'],
  },
  {
    name: 'TT_Event__c',
    description: 'Community events, workshops, and sessions',
    fields: [
      'Name (Text)',
      'Description__c (Long Text Area)',
      'Event_Type__c (Picklist: Workshop, Study Group, Social)',
      'Start_DateTime__c (DateTime)',
      'End_DateTime__c (DateTime)',
      'Location__c (Text)',
      'Max_Attendees__c (Number)',
      'RSVP_Count__c (Number)',
    ],
    relationships: [
      'Host__c (Lookup to User)',
      'Attendees__r (Junction: TT_Event_RSVP__c)',
    ],
    usedBy: ['ttEventsPanel', 'ttCommunityFeedTemplate'],
  },
  {
    name: 'TT_Badge__c',
    description: 'Skills, certifications, and achievement badges',
    fields: [
      'Name (Text)',
      'Badge_Type__c (Picklist: Skill, Cert, Achievement)',
      'Category__c (Picklist)',
      'Icon_URL__c (URL)',
      'Earned_Date__c (Date)',
      'Expiration_Date__c (Date)',
    ],
    relationships: [
      'Learner__c (Lookup to User)',
      'Awarded_By__c (Lookup to User)',
    ],
    usedBy: ['ttSkillsAndCertsPanel', 'ttDashboardTemplate', 'awardBadge'],
  },
  {
    name: 'TT_Experience_Ledger__c',
    description: 'XP tracking and gamification ledger',
    fields: [
      'Learner__c (Lookup to User)',
      'XP_Earned__c (Number)',
      'Source__c (Picklist: Mission, Event, Peer Review)',
      'Source_Record_Id__c (Text)',
      'Earned_Date__c (DateTime)',
      'Description__c (Text)',
    ],
    relationships: [
      'Learner__c (Lookup to User)',
    ],
    usedBy: ['ttLearnerStatsPanel', 'logXP', 'getDashboardStats'],
  },
  {
    name: 'TT_Partner_Project__c',
    description: 'Partner-submitted project opportunities for learners',
    fields: [
      'Name (Text)',
      'Partner_Organization__c (Lookup to Account)',
      'Description__c (Rich Text Area)',
      'Skills_Required__c (Multi-Select Picklist)',
      'Duration__c (Number)',
      'Status__c (Picklist: Open, Assigned, In Progress, Complete)',
      'XP_Value__c (Number)',
    ],
    relationships: [
      'Partner_Organization__c (Lookup to Account)',
      'Assigned_Learner__c (Lookup to User)',
      'Submitted_By__c (Lookup to User)',
    ],
    usedBy: ['ttPartnerProjectCard', 'ttPartnerPortalTemplate', 'getPartnerProjects'],
  },
  {
    name: 'TT_Partner_Resource__c',
    description: 'Documentation and resources for partner organizations',
    fields: [
      'Name (Text)',
      'Resource_Type__c (Picklist: Guide, Template, Video)',
      'File_URL__c (URL)',
      'Description__c (Long Text Area)',
      'Last_Updated__c (Date)',
    ],
    relationships: [
      'Created_By__c (Lookup to User)',
    ],
    usedBy: ['ttPartnerPortalTemplate'],
  },
];

const apexEndpoints = [
  {
    className: 'getDashboardStats',
    usedBy: 'ttLearnerStatsPanel',
    summary: 'Aggregate learner stats: total XP, current streak, badges earned, current rank',
    returns: 'Map<String, Object>',
  },
  {
    className: 'getTrailMissions',
    usedBy: 'ttTrailMissionCard, ttDashboardTemplate',
    summary: 'Query TT_Trail_Mission__c filtered by learner, status, path',
    returns: 'List<TT_Trail_Mission__c>',
  },
  {
    className: 'updateMissionStatus',
    usedBy: 'ttTrailMissionCard',
    summary: 'Update mission status, log XP, check completion triggers',
    returns: 'Boolean (success)',
  },
  {
    className: 'getLearningCenterFilters',
    usedBy: 'ttLearningCenterTemplate',
    summary: 'Get available filter values: trails, skills, platforms, difficulty',
    returns: 'Map<String, List<String>>',
  },
  {
    className: 'getLearningCenterActivities',
    usedBy: 'ttLearningCenterTemplate',
    summary: 'Query learning activities with filters, pagination, sorting',
    returns: 'List<Object> (mixed trails, missions, platforms)',
  },
  {
    className: 'getCommunityPosts',
    usedBy: 'ttCommunityFeedTemplate',
    summary: 'Query community posts, events, study groups with filters',
    returns: 'List<Object> (mixed post types)',
  },
  {
    className: 'getPartnerProjects',
    usedBy: 'ttPartnerProjectCard, ttPartnerPortalTemplate',
    summary: 'Query TT_Partner_Project__c with filters by partner, status, skills',
    returns: 'List<TT_Partner_Project__c>',
  },
  {
    className: 'submitPartnerProjectRequest',
    usedBy: 'ttPartnerPortalTemplate',
    summary: 'Create new TT_Partner_Project__c record from partner submission',
    returns: 'Id (new record Id)',
  },
  {
    className: 'awardBadge',
    usedBy: 'ttSkillsAndCertsPanel, ttDashboardTemplate',
    summary: 'Create TT_Badge__c record, log XP, send notification',
    returns: 'Boolean (success)',
  },
  {
    className: 'logXP',
    usedBy: 'Multiple components',
    summary: 'Create TT_Experience_Ledger__c entry, update learner totals',
    returns: 'Boolean (success)',
  },
];

const pageTemplates = [
  {
    figmaTemplate: 'Template 1 — Vision/Donor',
    experienceCloudPage: 'Experience Builder "Public Site Home"',
    compositionType: 'Composed LWC regions',
    notes: 'Hero section, mission statement, impact metrics, donation CTA, testimonials. Use Experience Builder with LWC components in regions.',
    lwcComponents: ['ttVisionDonorTemplate', 'ttTestimonialCard', 'ttFeatureRoadmapSection'],
  },
  {
    figmaTemplate: 'Template 2 — Dashboard (Learner)',
    experienceCloudPage: 'Authenticated Home Page',
    compositionType: 'Full-page LWC',
    notes: 'Personalized dashboard with stats, goals, skills, AI insights. Full-page LWC wrapping multiple panel components.',
    lwcComponents: ['ttDashboardTemplate', 'ttLearnerStatsPanel', 'ttSkillsAndCertsPanel', 'ttPennyInsightPanel'],
  },
  {
    figmaTemplate: 'Template 2 — Dashboard (Coach)',
    experienceCloudPage: 'Coach Home Page',
    compositionType: 'Full-page LWC',
    notes: 'Coach view with learner overview, coaching tasks, performance metrics. Separate variant of dashboard template.',
    lwcComponents: ['ttDashboardTemplate (variant=coach)', 'ttLearnerStatsPanel', 'ttEventsPanel'],
  },
  {
    figmaTemplate: 'Template 3 — Program Overview',
    experienceCloudPage: 'Program Pages',
    compositionType: 'Composed LWC regions',
    notes: 'Program details, skills, requirements, success stories, partner logos, CTA. Use Experience Builder layout.',
    lwcComponents: ['ttProgramOverviewTemplate', 'ttProgramOverviewCard', 'ttTestimonialCard'],
  },
  {
    figmaTemplate: 'Template 5 — Community Feed',
    experienceCloudPage: 'Community Page',
    compositionType: 'Full-page LWC',
    notes: 'Social feed with posts, events, study groups, AI insights, channel suggestions. Full-page LWC with infinite scroll.',
    lwcComponents: ['ttCommunityFeedTemplate', 'ttEventsPanel', 'ttPennyInsightPanel'],
  },
  {
    figmaTemplate: 'Learning Center Template',
    experienceCloudPage: 'Learning Page',
    compositionType: 'Full-page LWC',
    notes: 'Filterable catalog of all learning activities, trails, platforms. Full-page LWC with advanced filtering.',
    lwcComponents: ['ttLearningCenterTemplate', 'ttTrailPathCard', 'ttCitizenPlatformCard', 'ttAiTrailCard'],
  },
  {
    figmaTemplate: 'Partner Portal Template',
    experienceCloudPage: 'Partner Community',
    compositionType: 'Composed LWC regions',
    notes: 'Partner organization dashboard, project management, resource library. Separate Experience Cloud site for partners.',
    lwcComponents: ['ttPartnerPortalTemplate', 'ttPartnerProjectCard'],
  },
];

// LWC CONVERSION PLAN DATA
const conversionPriorities = [
  {
    title: 'Priority 1: High-Impact Primitives',
    description: 'Fundamental UI elements used across the entire system',
    count: 10,
    icon: Package,
    iconColor: 'text-red-600',
    color: 'bg-red-600',
    bgColor: 'bg-red-50',
    borderColor: 'border-red-200',
    textColor: 'text-red-700',
    iconBg: 'bg-red-100',
    componentBg: 'bg-red-50',
    components: [
      'Text Input',
      'Text Area', 
      'Select Input',
      'Search Input',
      'Radio',
      'Switch',
      'Panel',
      'Modal',
      'Toast',
      'Chip Status'
    ],
    impact: 'These are used in nearly every page and form. Converting these enables most user interactions and form functionality across the platform.'
  },
  {
    title: 'Priority 2: Form & Interaction Elements',
    description: 'Essential for user feedback and data visualization',
    count: 5,
    icon: CheckCircle,
    iconColor: 'text-orange-600',
    color: 'bg-orange-600',
    bgColor: 'bg-orange-50',
    borderColor: 'border-orange-200',
    textColor: 'text-orange-700',
    iconBg: 'bg-orange-100',
    componentBg: 'bg-orange-50',
    components: [
      'Chip Level',
      'Badge',
      'Avatar',
      'Progress Bar',
      'Progress Ring'
    ],
    impact: 'Critical for displaying user progress, status updates, and providing visual feedback throughout the learner experience.'
  },
  {
    title: 'Priority 3: Navigation Components',
    description: 'Required for multi-page navigation and information architecture',
    count: 4,
    icon: Compass,
    iconColor: 'text-amber-600',
    color: 'bg-amber-600',
    bgColor: 'bg-amber-50',
    borderColor: 'border-amber-200',
    textColor: 'text-amber-700',
    iconBg: 'bg-amber-100',
    componentBg: 'bg-amber-50',
    components: [
      'TabStrip',
      'Breadcrumbs',
      'Header',
      'Pagination'
    ],
    impact: 'Enables complete site navigation, content organization, and user wayfinding across all Salesforce Experience Cloud pages.'
  },
  {
    title: 'Priority 4: Content Display',
    description: 'Important for dashboard and reporting features',
    count: 4,
    icon: Layout,
    iconColor: 'text-blue-600',
    color: 'bg-blue-600',
    bgColor: 'bg-blue-50',
    borderColor: 'border-blue-200',
    textColor: 'text-blue-700',
    iconBg: 'bg-blue-100',
    componentBg: 'bg-blue-50',
    components: [
      'Insight Panel (Penny)',
      'Stat Card',
      'Metric Card',
      'Roadmap Item Card'
    ],
    impact: 'Powers AI-driven insights, performance metrics, and feature roadmap displays critical for learner engagement and product transparency.'
  },
  {
    title: 'Priority 5: Marketing & Public Pages',
    description: 'Needed for public-facing and donor engagement pages',
    count: 7,
    icon: Zap,
    iconColor: 'text-purple-600',
    color: 'bg-purple-600',
    bgColor: 'bg-purple-50',
    borderColor: 'border-purple-200',
    textColor: 'text-purple-700',
    iconBg: 'bg-purple-100',
    componentBg: 'bg-purple-50',
    components: [
      'Feature Roadmap Section',
      'Impact Metrics Section',
      'Donation CTA Section',
      'Hero Section',
      'Vision Hero',
      'Program Hero',
      'Portfolio Hero'
    ],
    impact: 'Essential for public site, donor engagement, and marketing pages to communicate mission, attract supporters, and showcase impact.'
  },
  {
    title: 'Priority 6: Page Templates',
    description: 'Complete page layouts combining other components',
    count: 7,
    icon: FileCode,
    iconColor: 'text-teal-600',
    color: 'bg-teal-600',
    bgColor: 'bg-teal-50',
    borderColor: 'border-teal-200',
    textColor: 'text-teal-700',
    iconBg: 'bg-teal-100',
    componentBg: 'bg-teal-50',
    components: [
      'Dashboard Template',
      'Learning Center Template',
      'Vision/Donor Template',
      'Program Overview Template',
      'Portfolio Template',
      'Roadmap Template',
      'Community Feed Template'
    ],
    impact: 'Lower priority as they primarily compose other components. Convert after all dependent components are available in LWC.'
  }
];

const conversionPhases = [
  {
    title: 'Phase 1: Foundation',
    timeline: 'Weeks 1-4',
    componentCount: 10,
    goal: 'Enable basic forms and interactions',
    color: 'bg-emerald-600',
    components: [
      'Text Input',
      'Text Area',
      'Select Input',
      'Search Input',
      'Radio',
      'Switch',
      'Panel',
      'Modal',
      'Toast',
      'Progress Bar'
    ],
    deliverable: 'Salesforce forms are fully functional'
  },
  {
    title: 'Phase 2: Navigation & Layout',
    timeline: 'Weeks 5-8',
    componentCount: 9,
    goal: 'Enable multi-page apps and user feedback',
    color: 'bg-blue-600',
    components: [
      'Header',
      'TabStrip',
      'Breadcrumbs',
      'Pagination',
      'Chip Status',
      'Chip Level',
      'Badge',
      'Avatar',
      'Stat Card'
    ],
    deliverable: 'Complete navigation and user feedback systems'
  },
  {
    title: 'Phase 3: Dashboard & Content',
    timeline: 'Weeks 9-12',
    componentCount: 6,
    goal: 'Enable learner dashboards and insights',
    color: 'bg-purple-600',
    components: [
      'Metric Card',
      'Insight Panel (Penny)',
      'Progress Ring',
      'Roadmap Item Card',
      'All remaining cards',
      'All remaining panels'
    ],
    deliverable: 'Learner dashboard fully functional in Salesforce'
  },
  {
    title: 'Phase 4: Marketing & Templates',
    timeline: 'Weeks 13-16',
    componentCount: 14,
    goal: 'Enable public-facing pages and complete templates',
    color: 'bg-rose-600',
    components: [
      'Feature Roadmap Section',
      'Impact Metrics Section',
      'Donation CTA Section',
      'All Hero components',
      'All Template components'
    ],
    deliverable: 'Complete public site in Salesforce Experience Cloud'
  }
];

const conversionSteps = [
  {
    title: 'Analysis',
    color: 'bg-slate-600',
    tasks: [
      'Review React docs',
      'Identify dependencies',
      'Map TTDS→SLDS',
      'List custom events'
    ]
  },
  {
    title: 'Development',
    color: 'bg-blue-600',
    tasks: [
      'Create LWC structure',
      'Convert HTML template',
      'Convert JavaScript',
      'Convert styling',
      'Add Salesforce wiring'
    ]
  },
  {
    title: 'Testing',
    color: 'bg-purple-600',
    tasks: [
      'Unit tests (Jest)',
      'Integration tests',
      'Lightning Experience',
      'Mobile app',
      'Accessibility (WCAG)'
    ]
  },
  {
    title: 'Documentation',
    color: 'bg-emerald-600',
    tasks: [
      'Update metadata',
      'SF-specific props',
      'LWC usage examples',
      'Update handoff board'
    ]
  },
  {
    title: 'Deployment',
    color: 'bg-amber-600',
    tasks: [
      'Code review',
      'Deploy to sandbox',
      'UAT testing',
      'Production deploy'
    ]
  }
];

const successMetricsComponent = [
  'All 37 components have lwcAvailable: true',
  '100% feature parity with React versions',
  'WCAG AA accessibility maintained',
  'TTDS design tokens preserved',
  'LWC Jest tests with 80%+ coverage'
];

const successMetricsSystem = [
  'All components work in Lightning Experience',
  'All components work in Salesforce Mobile',
  'Salesforce object mappings complete',
  'Performance benchmarks met (LCP < 2.5s)',
  'Complete LWC usage documentation'
];

const buildOrder = [
  {
    title: 'TTDS Design Tokens (CSS variables)',
    description: 'Create static resource with TTDS CSS variables for colors, spacing, radius, typography, elevation, borders.',
    deliverables: ['TTDS_Tokens.css', 'Documentation'],
  },
  {
    title: 'TTDS Primitives (button, card, chip, tooltip, skeleton, stepper)',
    description: 'Build foundational LWC components using TTDS tokens. These are reusable across all domain components.',
    deliverables: ['ttdsButton', 'ttdsCard', 'ttdsTag', 'ttdsTooltip', 'tfdsSkeleton', 'tfdsStepper'],
  },
  {
    title: 'Domain Cards',
    description: 'Build TT-specific card components for missions, paths, programs, projects, platforms.',
    deliverables: ['ttTrailMissionCard', 'ttTrailPathCard', 'ttProgramOverviewCard', 'ttPartnerProjectCard', 'ttCitizenPlatformCard', 'ttAiTrailCard', 'ttTestimonialCard'],
  },
  {
    title: 'Domain Panels',
    description: 'Build dashboard panel components: stats, skills, events, AI insights, quick links.',
    deliverables: ['ttLearnerStatsPanel', 'ttSkillsAndCertsPanel', 'ttEventsPanel', 'ttPennyInsightPanel', 'ttQuickLinksPanel', 'ttRecommendationsPanel'],
  },
  {
    title: 'FeatureRoadmap Section',
    description: 'Build public-facing roadmap section component for Vision/Donor page.',
    deliverables: ['ttFeatureRoadmapSection'],
  },
  {
    title: 'Dashboard Template',
    description: 'Compose full dashboard page template with panels. Support learner and coach variants.',
    deliverables: ['ttDashboardTemplate'],
  },
  {
    title: 'Program Overview Template',
    description: 'Build program landing page template with program cards and testimonials.',
    deliverables: ['ttProgramOverviewTemplate'],
  },
  {
    title: 'Learning Center Template',
    description: 'Build filterable learning activity catalog with pagination and sorting.',
    deliverables: ['ttLearningCenterTemplate'],
  },
  {
    title: 'Community Feed Template',
    description: 'Build social feed with posts, events, study groups, and AI insights.',
    deliverables: ['ttCommunityFeedTemplate'],
  },
  {
    title: 'Partner Portal Template',
    description: 'Build partner dashboard and project management interface.',
    deliverables: ['ttPartnerPortalTemplate'],
  },
  {
    title: 'Data connections (Apex + Objects)',
    description: 'Create custom objects, fields, relationships. Build Apex controllers for data queries and actions.',
    deliverables: ['All TT_* objects', 'All Apex controllers', 'Test classes'],
  },
  {
    title: 'Experience Cloud wiring',
    description: 'Configure Experience Cloud sites, page layouts, navigation, profiles, permissions. Wire LWCs to pages.',
    deliverables: ['Public site', 'Authenticated site', 'Partner community', 'Navigation menus', 'Profiles'],
  },
];

const interactionPatterns = [
  {
    icon: Package,
    title: 'Static @api props',
    description: 'Parent component passes data to child via @api properties. Used for simple, non-persistent data.',
    useCases: [
      'TTDS primitives (buttons, cards, tags)',
      'Static content components',
      'Configuration props (variant, size, color)',
    ],
  },
  {
    icon: Database,
    title: 'LDS wire adapters',
    description: 'Lightning Data Service for standard object CRUD. Provides caching and real-time updates.',
    useCases: [
      'User records',
      'Account (partner organizations)',
      'Standard Salesforce objects',
    ],
  },
  {
    icon: Zap,
    title: '@wire Apex',
    description: 'Wire service with custom Apex methods. Reactive data binding with automatic refresh.',
    useCases: [
      'Dashboard stats aggregation',
      'Learning Center filtered queries',
      'Community feed posts',
      'Partner project listings',
    ],
  },
  {
    icon: Code,
    title: 'Imperative Apex calls',
    description: 'Direct Apex method invocation for user actions. Returns promises for async operations.',
    useCases: [
      'Update mission status',
      'Submit project request',
      'Award badge',
      'Log XP',
      'AI insight generation',
    ],
  },
];

const permissions = [
  {
    profile: 'Visitor (Public)',
    objectAccess: ['None (public pages only)'],
    pageAccess: ['Home', 'Programs', 'About', 'Contact'],
    componentVisibility: ['Vision/Donor template', 'Program Overview cards', 'Public CTAs'],
  },
  {
    profile: 'Intern (Guided Trail)',
    objectAccess: ['TT_Trail_Mission__c (Read, Edit)', 'TT_Trail_Path__c (Read)', 'TT_Event__c (Read)', 'TT_Badge__c (Read)', 'TT_Experience_Ledger__c (Read)'],
    pageAccess: ['Dashboard', 'Learning Center', 'Community', 'My Trail', 'Portfolio', 'Profile'],
    componentVisibility: ['Dashboard (Learner)', 'Trail Mission cards', 'Learning Center', 'Community Feed', 'Penny Insights'],
  },
  {
    profile: 'Explorer (Membership)',
    objectAccess: ['TT_Trail_Path__c (Read)', 'TT_Event__c (Read)', 'TT_Study_Group__c (Read, Edit)', 'TT_Badge__c (Read)'],
    pageAccess: ['Dashboard', 'Learning Center', 'Community', 'Portfolio', 'Profile'],
    componentVisibility: ['Dashboard (Learner)', 'Learning Center', 'Community Feed', 'Events Panel'],
  },
  {
    profile: 'Associate (Trail of Mastery)',
    objectAccess: ['All TT objects (Read, Edit)', 'TT_Partner_Project__c (Read, Edit)', 'TT_Peer_Review__c (Create, Read)'],
    pageAccess: ['Dashboard', 'Learning Center', 'Community', 'My Trail', 'Portfolio', 'Profile', 'Partner Projects'],
    componentVisibility: ['All learner components', 'Partner Project cards', 'Advanced missions', 'Peer Review'],
  },
  {
    profile: 'Partner',
    objectAccess: ['TT_Partner_Project__c (Create, Read, Edit)', 'TT_Partner_Resource__c (Read)', 'Account (Read)'],
    pageAccess: ['Partner Home', 'Partner Projects', 'Submit Request', 'Resources'],
    componentVisibility: ['Partner Portal template', 'Partner Project cards', 'Submission forms', 'Resource library'],
  },
  {
    profile: 'Coach',
    objectAccess: ['All TT objects (Create, Read, Edit, Delete)', 'User (Read)'],
    pageAccess: ['Dashboard (Coach)', 'Learning Center', 'Community', 'All learner pages'],
    componentVisibility: ['Dashboard (Coach)', 'Learner overview', 'Coaching tasks', 'Performance metrics', 'All components'],
  },
  {
    profile: 'Admin',
    objectAccess: ['All objects (full CRUD)'],
    pageAccess: ['All pages', 'Setup', 'Reports', 'Dashboards'],
    componentVisibility: ['All components', 'Admin tools', 'Configuration panels'],
  },
];
