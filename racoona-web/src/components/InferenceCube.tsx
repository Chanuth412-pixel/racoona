import React from "react";
import { motion } from "framer-motion";

export default function InferenceCube() {
  // Shared animation timeline: 
  // 0% (Closed) -> 20% (Open) -> 70% (Hovering) -> 90% (Closed) -> 100% (Resting)
  // Reduced duration by 50% from 9s to 4.5s for faster, active hardware feel
  const timing = {
    times: [0, 0.2, 0.7, 0.9, 1],
    duration: 4.5,
    repeat: Infinity,
    ease: "easeInOut"
  };

  return (
    <div className="relative w-full max-w-[800px] h-[600px] mx-auto font-mono text-xs text-slate-900 overflow-hidden flex items-center justify-center">

      {/* SVG Vector Canvas */}
      <svg width="800" height="600" viewBox="0 0 800 600" className="absolute inset-0 z-0">

        {/* --- Expanding Connecting Lines --- */}
        <motion.g animate={{ opacity: [0, 1, 1, 0, 0] }} transition={timing}>
          <path d="M 220 380 L 280 410 L 340 380" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" opacity="0.9" />
          <path d="M 580 250 L 520 220 L 460 250" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" opacity="0.9" />
          <path d="M 380 450 L 480 500 L 520 480" fill="none" stroke="#e2e8f0" strokeWidth="1" strokeDasharray="4 4" opacity="0.9" />
        </motion.g>

        {/* --- Floating Vertical Glass Planes --- */}
        {/* Left Plane moves out and up */}
        <motion.polygon
          points="200,220 260,190 260,330 200,360"
          fill="rgba(148, 163, 184, 0.1)" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 4"
          animate={{
            x: [60, 0, -5, 60, 60],
            y: [30, 0, -5, 30, 30],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={timing}
        />
        {/* Right Plane moves out and down */}
        <motion.polygon
          points="540,320 600,290 600,430 540,460"
          fill="rgba(148, 163, 184, 0.1)" stroke="#94a3b8" strokeWidth="1" strokeDasharray="2 4"
          animate={{
            x: [-60, 0, 5, -60, -60],
            y: [-30, 0, 5, -30, -30],
            opacity: [0, 1, 1, 0, 0]
          }}
          transition={timing}
        />

        {/* --- Central Core Isometric Cube --- */}
        <g transform="translate(0, 20)">
          {/* Top Face (Lightest): Silver-gray */}
          <polygon points="400,180 520,240 400,300 280,240" fill="#e2e8f0" stroke="#475569" strokeWidth="1.5" />
          {/* Left Face (Mid-tone): Soft ash gray */}
          <polygon points="280,240 400,300 400,420 280,360" fill="#cbd5e1" stroke="#475569" strokeWidth="1.5" />
          {/* Right Face (Shadowed): Deeper graphite gray */}
          <polygon points="400,300 520,240 520,360 400,420" fill="#94a3b8" stroke="#475569" strokeWidth="1.5" />

          {/* Base Shadow */}
          <polygon points="360,420 440,420 400,440" fill="#64748b" opacity="0.25" filter="blur(10px)" />
        </g>

        {/* --- Mechanical Expanding Top Layers --- */}
        {/* Layer 1 (Large panel) */}
        <motion.g
          animate={{ y: [20, -30, -40, 20, 20] }}
          transition={timing}
        >
          <polygon points="400,180 520,240 400,300 280,240" fill="rgba(148, 163, 184, 0.2)" stroke="#64748b" strokeWidth="1.5" />
        </motion.g>

        {/* Layer 2 (Smaller top panel) */}
        <motion.g
          animate={{ y: [20, -80, -95, 20, 20], opacity: [0, 1, 1, 0, 0] }}
          transition={timing}
        >
          <polygon points="400,150 470,185 400,220 330,185" fill="rgba(148, 163, 184, 0.25)" stroke="#475569" strokeWidth="1.5" />
        </motion.g>

        {/* --- Floating Diamond Particles (Accelerated 50%) --- */}
        <motion.g animate={{ opacity: [0, 1, 1, 0, 0] }} transition={timing}>
          <motion.polygon points="260,120 280,130 260,140 240,130" fill="#334155" opacity="0.9"
            animate={{ y: [0, -10, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} />
          <motion.polygon points="560,480 580,490 560,500 540,490" fill="#334155" opacity="0.9"
            animate={{ y: [0, 10, 0] }} transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }} />
          <motion.polygon points="620,360 635,367 620,375 605,367" fill="#334155" opacity="0.9"
            animate={{ y: [0, -8, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }} />
        </motion.g>
      </svg>

      {/* --- HTML Overlays (Metrics & Nodes fade in/out with the cycle) --- */}
      <motion.div animate={{ opacity: [0, 1, 1, 0, 0] }} transition={timing} className="absolute inset-0 pointer-events-none">

        {/* Metric 1: Request Rate */}
        <motion.div className="absolute z-10 bg-white border border-slate-200 text-slate-800 px-3 py-1.5 rounded shadow-sm font-mono font-bold"
          style={{ left: '190px', top: '320px' }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}>
          420 REQUEST/M
        </motion.div>

        {/* Metric 2: Latency */}
        <motion.div className="absolute z-10 bg-white border border-slate-200 text-slate-800 px-3 py-1.5 rounded shadow-sm font-mono font-bold"
          style={{ left: '500px', top: '280px' }}
          animate={{ y: [0, 4, 0] }}
          transition={{ duration: 2.0, repeat: Infinity, ease: "easeInOut" }}>
          123MS TTFT
        </motion.div>

        {/* Metric 3: Throughput */}
        <motion.div className="absolute z-10 bg-white border border-slate-200 text-slate-800 px-3 py-1.5 rounded shadow-sm font-mono font-bold"
          style={{ left: '470px', top: '410px' }}
          animate={{ y: [0, -4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}>
          63 TPS
        </motion.div>

        {/* User Node (Left / Input) */}
        <div className="absolute z-10 w-12 h-12 rounded-full border border-slate-300 bg-white flex items-center justify-center shadow-md" style={{ left: '160px', top: '360px' }}>
          <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </div>

        {/* User Node (Right / Output) */}
        <div className="absolute z-10 w-12 h-12 rounded-full border border-slate-400 bg-white flex items-center justify-center shadow-md" style={{ left: '600px', top: '220px' }}>
          <svg className="w-5 h-5 text-slate-800" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path></svg>
        </div>

      </motion.div>

    </div>
  );
}




