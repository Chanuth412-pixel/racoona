import React, { useState } from 'react';

const divisions = [
  {
    id: 'SYS_01',
    number: '01',
    shortTitle: 'CUSTOM AI & CLOUD',
    subtitle: 'Custom AI & Cloud Engineering',
    title: 'Custom AI & Cloud Engineering',
    description: 'Architecting distributed systems and deploying production-ready AI models on AWS & Kubernetes with low latency and high availability.',
    link: '/software',
    artifact: {
      type: 'code',
      title: 'pipeline_config.yaml',
      lines: [
        'model: llama-3-70b-instruct',
        'orchestrator: ray-cluster',
        'deploy: aws-eks-us-east-1',
        'inference_latency: 24ms',
      ]
    },
    capabilities: [
      'LLM Orchestration & Fine-tuning',
      'Distributed Microservices',
      'Automated CI/CD Pipelines'
    ]
  },
  {
    id: 'SYS_02',
    number: '02',
    shortTitle: 'ENTERPRISE INFRA',
    subtitle: 'Enterprise Operations',
    title: 'Enterprise Infrastructure Operations',
    description: 'Zero-downtime managed services, active 24/7 monitoring, secure IAM network configurations, and SLA-backed incident response.',
    link: '/it-services',
    artifact: {
      type: 'status',
      title: 'CLUSTER_HEALTH',
      uptime: '99.99%',
      security: 'SECURE_IAM',
      downtime: 'ZERO_DOWNTIME',
    },
    capabilities: [
      'Zero-Downtime Cloud Migration',
      'IAM & Infrastructure Security',
      '24/7 Automated Monitoring'
    ]
  },
  {
    id: 'SYS_03',
    number: '03',
    shortTitle: 'HOSPITALITY ASSETS',
    subtitle: 'Hospitality Scaling',
    title: 'Hospitality Acquisition & Scaling',
    description: 'Strategic equity partnerships for restaurant ventures. Injecting capital and deploying proprietary data analytics to scale customer acquisition.',
    link: '/food-hospitality',
    artifact: {
      type: 'metrics',
      title: 'ASSET_TELEMETRY',
      deployed: '$12.4M',
      revDelta: '+48.2%',
    },
    capabilities: [
      'Strategic Equity Capital',
      'Algorithmic Local Marketing',
      'POS & Supply Data Integration'
    ]
  }
];

export default function CommandConsole() {
  const [activeTab, setActiveTab] = useState(0);
  const activeDiv = divisions[activeTab];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Section Header */}
      <div className="flex items-center justify-between mb-8 border-b border-zinc-800 pb-4 font-mono text-xs">
        <div>
          <span className="text-cyan-400 uppercase tracking-wider">COMMAND CONSOLE</span>
          <h2 className="text-2xl font-bold font-sans text-zinc-100 tracking-tight mt-1">Corporate Divisions</h2>
        </div>
        <span className="text-zinc-500">SYS_VER 2.0.4</span>
      </div>

      {/* Main Console Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 bg-zinc-950 border border-zinc-800 rounded-lg overflow-hidden">

        {/* Left Vertical Rail (Selection) */}
        <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-zinc-800 bg-zinc-950/80 p-4 space-y-2">
          {divisions.map((div, idx) => {
            const isActive = activeTab === idx;
            return (
              <button
                key={div.id}
                onClick={() => setActiveTab(idx)}
                className={`w-full text-left p-4 rounded-md border transition-all text-sm font-mono flex flex-col justify-between ${isActive
                    ? 'border-cyan-500/60 bg-zinc-900 text-zinc-100'
                    : 'border-zinc-800/60 bg-zinc-950/40 text-zinc-400 hover:border-zinc-700 hover:text-zinc-200'
                  }`}
              >
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs text-zinc-500">[{div.number}] {div.shortTitle}</span>
                  {isActive && <span className="text-[10px] bg-cyan-950 text-cyan-400 px-2 py-0.5 rounded border border-cyan-800/50">ACTIVE</span>}
                </div>
                <div className="font-semibold font-sans text-base mt-1 text-zinc-100">
                  {div.subtitle}
                </div>
              </button>
            );
          })}
        </div>

        {/* Right Main Viewport */}
        <div className="lg:col-span-8 p-6 lg:p-8 flex flex-col justify-between">
          <div>
            {/* Header Tag */}
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-zinc-800/80 font-mono text-xs">
              <span className="text-zinc-500">{activeDiv.id} // DIVISION_VIEWPORT</span>
              <a href={activeDiv.link} className="text-cyan-400 hover:underline">
                Open Division Page
              </a>
            </div>

            {/* Embedded Visual Artifact */}
            {activeDiv.artifact.type === 'code' && (
              <div className="bg-zinc-900/80 border border-zinc-800/80 rounded p-4 mb-6 font-mono text-xs text-zinc-300">
                <div className="text-zinc-500 mb-2"># {activeDiv.artifact.title}</div>
                {activeDiv.artifact.lines.map((line, i) => (
                  <div key={i} className="py-0.5">
                    <span className="text-cyan-400">{line.split(':')[0]}</span>:{line.split(':')[1]}
                  </div>
                ))}
              </div>
            )}

            {activeDiv.artifact.type === 'status' && (
              <div className="bg-zinc-900/80 border border-zinc-800/80 rounded p-4 mb-6 font-mono text-xs">
                <div className="flex items-center justify-between text-zinc-400 mb-2">
                  <span>{activeDiv.artifact.title}</span>
                  <span className="text-emerald-400 font-bold text-sm">{activeDiv.artifact.uptime}</span>
                </div>
                <div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden mb-2">
                  <div className="bg-emerald-500 h-full w-[99.99%]"></div>
                </div>
                <div className="flex justify-between text-[10px] text-zinc-500">
                  <span>STATUS: {activeDiv.artifact.security}</span>
                  <span>MODE: {activeDiv.artifact.downtime}</span>
                </div>
              </div>
            )}

            {activeDiv.artifact.type === 'metrics' && (
              <div className="bg-zinc-900/80 border border-zinc-800/80 rounded p-4 mb-6 font-mono text-xs grid grid-cols-2 gap-4">
                <div>
                  <div className="text-[10px] text-zinc-500">CAPITAL_DEPLOYED</div>
                  <div className="text-purple-400 font-bold text-lg">{activeDiv.artifact.deployed}</div>
                </div>
                <div>
                  <div className="text-[10px] text-zinc-500">AVG_REV_DELTA</div>
                  <div className="text-emerald-400 font-bold text-lg">{activeDiv.artifact.revDelta}</div>
                </div>
              </div>
            )}

            {/* Title & Description */}
            <h3 className="text-2xl font-bold font-sans text-zinc-100 mb-3">{activeDiv.title}</h3>
            <p className="text-zinc-400 text-sm leading-relaxed mb-8 font-sans">
              {activeDiv.description}
            </p>

            {/* Capabilities List */}
            <div className="pt-6 border-t border-zinc-800/80">
              <div className="text-xs font-mono text-zinc-500 uppercase tracking-wider mb-3">Capabilities</div>
              <ul className="space-y-2 font-mono text-xs text-zinc-300">
                {activeDiv.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center">
                    <span className="text-cyan-400 mr-2 font-mono">+</span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Action Button */}
          <div className="mt-8 pt-6 border-t border-zinc-800/80 flex justify-end">
            <a
              href={activeDiv.link}
              className="px-6 py-2.5 rounded bg-zinc-100 text-zinc-950 font-semibold font-mono text-xs hover:bg-white transition-colors"
            >
              Access Division Details
            </a>
          </div>
        </div>

      </div>
    </div>
  );
}
