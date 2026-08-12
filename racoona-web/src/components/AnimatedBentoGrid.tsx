import React from 'react';
import { motion } from 'framer-motion';

const rawBase = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.BASE_URL || '' : '';
const base = rawBase.endsWith('/') ? rawBase.slice(0, -1) : rawBase;

const pillars = [
  {
    number: '01',
    id: 'AI_ENGINEERING',
    title: 'Custom AI & Cloud Engineering',
    description: 'We rebuild legacy infrastructure without spending time. We rapidly develop Proof of Concepts (POCs) and deploy production-ready AI models across AWS, Azure, and Google Cloud (GCP).',
    link: `${base}/software`,
    hoverBorder: 'hover:border-blue-500',
    accentGradient: 'from-blue-600 to-indigo-600',
    badgeText: 'Software & AI',
    badgeClass: 'text-blue-700 bg-blue-50 border-blue-200',
    dotColor: 'bg-blue-600',
    capabilities: [
      'Forward Deployed Engineering',
      'Legacy Infrastructure Modernization',
      'Multi-Cloud AI Orchestration'
    ]
  },
  {
    number: '02',
    id: 'INFRA_OPS',
    title: 'Enterprise Infrastructure Operations',
    description: 'Enterprise-grade infrastructure architecture and secure data transitions. We handle the end-to-end lifecycle of your operations, from initial migration to continuous machine learning deployment.',
    link: `${base}/it-services`,
    hoverBorder: 'hover:border-teal-600',
    accentGradient: 'from-teal-700 to-emerald-600',
    badgeText: 'IT Operations',
    badgeClass: 'text-teal-700 bg-teal-50 border-teal-200',
    dotColor: 'bg-teal-600',
    capabilities: [
      'Gov & Commercial Cloud Migration',
      'MLOps & AI Infrastructure',
      'High-Throughput Data Migration'
    ]
  },
  {
    number: '03',
    id: 'HOSP_SCALING',
    title: 'Marketing & Sales Partnerships',
    description: "Partnering directly with culinary ventures to rapidly scale their digital marketing, sales channels, and backend operations. Currently driving growth alongside premier partners like Dwaraka's Bawarchi.",
    link: `${base}/food-hospitality`,
    hoverBorder: 'hover:border-amber-500',
    accentGradient: 'from-amber-600 to-yellow-600',
    badgeText: 'Asset Scaling',
    badgeClass: 'text-amber-700 bg-amber-50 border-amber-200',
    dotColor: 'bg-amber-600',
    capabilities: [
      'Targeted Sales & Marketing Automation',
      'Operational Restaurant Partnerships',
      "Growth Case Study: Dwaraka's Bawarchi"
    ]
  }
];

export default function AnimatedBentoGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {/* Header */}
      <div className="mb-12 text-center max-w-3xl mx-auto">
        <span className="font-mono text-xs uppercase tracking-widest text-slate-500 font-semibold">Corporate Divisions</span>
        <h2 className="mt-2 text-3xl sm:text-4xl font-bold font-sans text-slate-900 tracking-tight">Core Operating Pillars</h2>
        <p className="mt-4 text-slate-600 text-sm sm:text-base font-sans">
          Deploying specialized expertise across autonomous software, infrastructure operations, and asset scaling.
        </p>
      </div>

      {/* 3-Column Staggered Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {pillars.map((item, idx) => (
          <motion.a
            key={item.number}
            href={item.link}
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: idx * 0.12 }}
            whileHover={{ y: -5 }}
            className={`group relative bg-white border border-slate-200 rounded-xl p-8 flex flex-col justify-between transition-all duration-300 ${item.hoverBorder} shadow-[0_8px_30px_rgb(0,0,0,0.08)] overflow-hidden block`}
          >
            {/* Top Gradient Accent Bar on Hover */}
            <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${item.accentGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />

            <div>
              {/* Header Meta */}
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-xs text-slate-500 font-semibold">{item.number}</span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-sans text-slate-900 mb-3 group-hover:text-blue-600 transition-colors">
                {item.title}
              </h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-8 font-sans">
                {item.description}
              </p>
            </div>

            {/* Capabilities List */}
            <div className="pt-5 border-t border-slate-200 mt-auto">
              <div className="text-xs font-sans font-medium text-slate-500 uppercase tracking-wider mb-3">Capabilities</div>
              <ul className="space-y-2.5 font-sans text-sm text-slate-600">
                {item.capabilities.map((cap, i) => (
                  <li key={i} className="flex items-center text-slate-600 group-hover:text-slate-900 transition-colors">
                    <span className={`w-1.5 h-1.5 rounded-full ${item.dotColor} mr-2.5 shrink-0 transition-colors`}></span>
                    <span>{cap}</span>
                  </li>
                ))}
              </ul>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  );
}
